import { SessionWallet } from 'algorand-session-wallet'
import QrScanner from "qr-scanner";
import {useParams} from 'react-router-dom'
import React from 'react'
import { NFT, resolveProtocol} from './lib/nft'
import { Metadata } from './lib/metadata'
import { getIpfsUrlFromCID, getMetaFromIpfs } from './lib/ipfs'
import {fundAccount, xferAsset} from './lib/algorand'
import { Button, Card, Dialog, Elevation } from '@blueprintjs/core'
import QRCode from "react-qr-code";
import algosdk, {secretKeyToMnemonic } from 'algosdk'
import { DIALOG_BODY, DIALOG_FOOTER } from '@blueprintjs/core/lib/esm/common/classes'
import { MediaDisplay } from './MediaDisplay';

QrScanner.WORKER_PATH = "/qr-scanner-worker.min.js"

export type MinterProps = {
    activeConfig: number 
    sw: SessionWallet
}

export function Minter(props: MinterProps){
    // Mint the chosen nft image with our minting account
    const {cid} = useParams()
    const [md, setMd] = React.useState(new Metadata({}))
    const [importingAccount, setImportingAccount] = React.useState(undefined)
    const [nft, setNFT] = React.useState(undefined)
    const [fundLoading, setFundLoading] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [popupOpen,setPopupOpen] = React.useState(false)

    const [createdId, setCreatedId] = React.useState(0)

    React.useEffect(()=>{
        if(md._raw === undefined)
            getMetaFromIpfs(getIpfsUrlFromCID(props.activeConfig, cid)).then((md)=>{
                setMd(md)
            })
    }, [props.activeConfig, cid, md])

    async function mintOnly(){
        // Create ASA with our user
        setLoading(true)
        const result = await NFT.create(props.sw.wallet, props.activeConfig,  md, cid)
        setNFT(result)
        setCreatedId(result.id())
    }

    async function handleScannedAccount(addr: string){
        // Fires after successful scan of addr
        await xferAsset(props.sw.wallet, props.activeConfig, addr, createdId)

        setCreatedId(0)
        setLoading(false)
    }

    async function mintAndCreate(){
        // Create account
        setLoading(true)
        const acct = algosdk.generateAccount()
        setImportingAccount(acct)
    }

    function cancelCreate() { 
        setLoading(false)
        setImportingAccount(undefined) 
    }

    async function continueCreate() {
        // Create ASA
        const result = await NFT.create(props.sw.wallet, props.activeConfig,  md, cid)
        setNFT(result)
        setPopupOpen(true)
    }

    async function fundIt(){
        // User has scanned it, issue grouped transactions
        setFundLoading(true)
        
        await fundAccount(props.sw.wallet, props.activeConfig, importingAccount, nft.id())
        // Unset
        setImportingAccount(undefined)
        setFundLoading(false)
        setLoading(false)
        window.location.href="/NFTBooth"
    }

    return (
        <div className='container'>
            <NFTCard loading={loading} cid={cid} md={md} mintOnly={mintOnly} mintAndCreate={mintAndCreate}></NFTCard>
            <AccountImporter importingAccount={importingAccount} cancelCreate={cancelCreate} continueCreate={continueCreate}/>
            <AddressReader  optIn={createdId} handleScanned={handleScannedAccount}></AddressReader>
            <Dialog isOpen={popupOpen} >
                <div className={DIALOG_BODY}>
                    <div className='container'>
                        <Button loading={fundLoading} intent='success' onClick={fundIt}>Fund it!</Button>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

interface NFTCardProps {
    cid: string
    md: Metadata
    loading: boolean
    mintOnly()
    mintAndCreate()
}

function NFTCard(props: NFTCardProps) {
    return (
        <Card elevation={Elevation.THREE} >
            <MediaDisplay mediaSrc={resolveProtocol(0, props.md.mediaURL())} mimeType={props.md.mimeType()} />
            <div className='container'>
                <Button loading={props.loading} icon='clean' intent='success' onClick={props.mintAndCreate}>Mint</Button>
            </div>
        </Card>
    )
}

interface AccountImporterProps {
    importingAccount: algosdk.Account 
    continueCreate()
    cancelCreate()
}

function AccountImporter(props: AccountImporterProps) {
    const [isOpen, setIsOpen] = React.useState(false)
    const [mn, setMn]  = React.useState("")

    const ic = props.importingAccount
    React.useEffect(()=>{
        if(ic !== undefined){
            setMn(JSON.stringify({
                "version":"1.0", 
                "mnemonic":secretKeyToMnemonic(ic.sk)
            }))
            setIsOpen(true)
        }
    }, [ic])

    function cancelCreate(){
        setIsOpen(false)
        props.cancelCreate()
    }
    function continueCreate(){
        setIsOpen(false)
        props.continueCreate()
    }

    return (
        <Dialog isOpen={isOpen} className='content' >
            <div className={DIALOG_BODY} >
                <QRCode  value={mn} />
            </div>
            <div className={DIALOG_FOOTER} >
                <div className='container'>
                    <Button style={{margin:"0px 10px"}} intent='danger' onClick={cancelCreate}>Cancel</Button>
                    <Button style={{margin:"0px 10px"}} intent='success' onClick={continueCreate}>Ready!</Button>
                </div>
            </div>
        </Dialog>
    )
}

export interface AddressReaderProps {
    optIn: number 
    handleScanned(addr: string): void
}

export function AddressReader(props: AddressReaderProps) {
    const vref = React.useRef<HTMLVideoElement>(null)
    const [scanner, setScanner] = React.useState<QrScanner | undefined>(undefined)
    const [isOpen, setIsOpen] = React.useState(false)

    const open = props.optIn !== undefined && props.optIn>0
    React.useEffect(()=>{
        setIsOpen(open)
        scanner?.stop()
        scanner?.start()
    }, [scanner, open])

    let seen = ""
    function initCam(){
        function handleScanned(data: string){
            if(seen === data) return

            scanner?.stop()
            vref.current = null
            setScanner(undefined)
            setIsOpen(false)
            seen = data
            props.handleScanned(data)
        }

        if(vref.current !== null && scanner === undefined)
           setScanner(new QrScanner(vref.current,handleScanned))
    }

    return (
        <Dialog isOpen={isOpen} onOpened={initCam}>
            <div className={DIALOG_BODY}>
                <h3>Please Opt into Asset ID {props.optIn}</h3>
                <div className='scanner-container'>
                    <video style={{width: '100%'}} ref={vref}></video>
                </div>
            </div>
        </Dialog>
    )
}