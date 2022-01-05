import { ipfsURL } from './nft'
import {Metadata} from './metadata'
import {conf} from './config'

/*
 Currently an issue with resolving ipfs-car module in web3.storage when using react-scripts
 We just use the prebuilt one but with no types we have to just ignore the issue for now
//import { Web3Storage } from 'web3.storage'
*/
// @ts-ignore
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'


let storageClient = undefined
function getStorageClient(activeConf: number): Web3Storage {
    if(storageClient === undefined){
        storageClient = new Web3Storage({ token: conf[activeConf].storageToken })
    }
    return storageClient
}

export async function putToIPFS(activeConf: number, file: File, md: Metadata): Promise<string> {
    const storage = getStorageClient(activeConf) 
    const imgAdded = await storage.put([file], {wrapWithDirectory: false})
    md.image = ipfsURL(imgAdded)

    return await storage.put([md.toFile()], {wrapWithDirectory: false})
}

export async function listRecentFiles( activeConf: number, ms_threshold: number): Promise<any[]> {
    const w3s = getStorageClient(activeConf)
    const options = []
    for await (const upload of w3s.list()) {
        const delta = Date.now() - Date.parse(upload.updated)
        if(delta<ms_threshold){
            options.push(upload)
            continue
        }
        return options
    }
    return options
}

export function getIpfsUrlFromCID(activeConf:number, cid: string): string {
    return conf[activeConf].ipfsGateway + cid
}

export async function getMimeTypeFromIpfs(url: string): Promise<string> {
    const req = new Request(url, { method:"HEAD" })
    const resp = await fetch(req)
    return resp.headers.get("Content-Type")
}


export async function getMetaFromIpfs(url: string): Promise<Metadata> {
    try {
        const req = new Request(url)
        const resp = await fetch(req)
        const body = await resp.blob()
        const text = await body.text()
        const parsed = JSON.parse(text)
        return new Metadata({"_raw":text, ...parsed}) 
    } catch (e){
        console.error(e)
    }

    return new Metadata({})
}