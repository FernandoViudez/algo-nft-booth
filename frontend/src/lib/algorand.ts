import { Wallet } from "algorand-session-wallet";
import algosdk, {
  Algodv2,
  waitForConfirmation,
  makeAssetCreateTxnWithSuggestedParamsFromObject,
  makeAssetTransferTxnWithSuggestedParamsFromObject,
  makePaymentTxnWithSuggestedParamsFromObject,
} from "algosdk";
import { NFT } from "./nft";
import { Metadata } from "./metadata";
import { conf } from "./config";

function getClient(activeConf: number): Algodv2 {
  return new algosdk.Algodv2("", conf[activeConf].algod, "");
}

export async function createToken(
  wallet: Wallet,
  activeConf: number,
  url: string,
  md: Metadata
): Promise<number> {
  const addr = wallet.getDefaultAccount();
  const suggested = await getSuggested(activeConf, 1000);

  const create_txn = makeAssetCreateTxnWithSuggestedParamsFromObject({
    from: addr,
    assetName: md.name,
    unitName: md.unitName,
    assetURL: url,
    assetMetadataHash: md.toHash(),
    manager: addr,
    total: 1,
    decimals: 0,
    defaultFrozen: false,
    suggestedParams: suggested,
  });

  const [create_txn_s]  = await wallet.signTxn([create_txn])
  const result = await sendWait(activeConf, [create_txn_s])
  return result['asset-index']
}

export async function fundAccount(
  wallet: Wallet,
  activeConf: number,
  acct: algosdk.Account,
  id: number
) {
  const addr = wallet.getDefaultAccount();
  const suggested = await getSuggested(activeConf, 100);

  const fund_txn = makePaymentTxnWithSuggestedParamsFromObject({
    from: addr,
    to: acct.addr,
    amount: 3e5,
    suggestedParams: suggested,
  });

  const optin_txn = makeAssetTransferTxnWithSuggestedParamsFromObject({
    from: acct.addr,
    to: acct.addr,
    assetIndex: id,
    amount: 0,
    suggestedParams: suggested,
  });

  const xfer_txn = makeAssetTransferTxnWithSuggestedParamsFromObject({
    from: addr,
    to: acct.addr,
    assetIndex: id,
    amount: 1,
    suggestedParams: suggested,
  });


  const grouped = [fund_txn, optin_txn, xfer_txn];
  algosdk.assignGroupID(grouped);

  // @ts-ignore
  const [fund_txn_s, _, xfer_txn_s] = await wallet.signTxn(grouped);
  const optin_txn_s = algosdk.signTransaction(optin_txn, acct.sk);
  await sendWait(activeConf, [fund_txn_s, optin_txn_s, xfer_txn_s]);
}

export async function xferAsset(
  wallet: Wallet,
  activeConf: number,
  rx: string,
  id: number
) {
  const addr = wallet.getDefaultAccount();
  const suggested = await getSuggested(activeConf, 100);

  const xfer_txn = makeAssetTransferTxnWithSuggestedParamsFromObject({
    from: addr,
    to: rx,
    assetIndex: id,
    amount: 1,
    suggestedParams: suggested,
  });

  const [create_txn_s] = await wallet.signTxn([xfer_txn]);
  await sendWait(activeConf, [create_txn_s]);
}

export async function getSuggested(activeConf: number, rounds: number) {
  const txParams = await getClient(activeConf).getTransactionParams().do();
  return { ...txParams, lastRound: txParams["firstRound"] + rounds };
}

export async function getToken(
  activeConf: number,
  assetId: number
): Promise<any> {
  return await getClient(activeConf).getAssetByID(assetId).do();
}

export async function getCollection(
  activeConf: number,
  address: string
): Promise<any[]> {
  const results = await getClient(activeConf).accountInformation(address).do();

  const plist = [];
  for (const a in results["assets"]) {
    if (results["assets"][a]["amount"] > 0)
      plist.push(getToken(activeConf, results["assets"][a]["asset-id"]));
  }

  const assets = await Promise.all(plist);
  const collectionRequests = assets.map((a) => {
    return NFT.fromToken(activeConf, a);
  });
  return Promise.all(collectionRequests);
}

export async function sendWait(
  activeConf: number,
  signed: any[]
): Promise<any> {
  const client = getClient(activeConf);
  try {
    const { txId } = await client
      .sendRawTransaction( signed.map((t) => { return t.blob; }))
      .do();
    const result = await waitForConfirmation(client, txId, 3);
    return result;
  } catch (error) {
    console.error(error);
  }

  return undefined;
}