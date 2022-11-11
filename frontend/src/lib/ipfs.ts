import { ipfsURL, mediaIntegrity } from './nft'
import { Metadata } from './metadata'
import { conf } from './config'

/*
 Currently an issue with resolving ipfs-car module in web3.storage when using react-scripts
 We just use the prebuilt one but with no types we have to just ignore the issue for now
//import { Web3Storage } from 'web3.storage'
*/
// @ts-ignore
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'


let storageClient = undefined
function getStorageClient(activeConf: number): Web3Storage {
    if (storageClient === undefined) {
        storageClient = new Web3Storage({ token: process.env.REACT_APP_WEB3_STORAGE_TOKEN })
    }
    return storageClient
}

export async function putToIPFS(activeConf: number, file: File, md: Metadata): Promise<string> {
    const storage = getStorageClient(activeConf)
    const mediaAdded = await storage.put([file], { wrapWithDirectory: false })

    const integ = await mediaIntegrity(file)

    const mdc = { ...md }
    switch (md.mediaType()) {
        case 'image':
            mdc.image = ipfsURL(mediaAdded)
            mdc.image_integrity = integ
            break
        case 'audio':
            mdc.animation_url = ipfsURL(mediaAdded)
            mdc.animation_url_integrity = integ
            break
        case 'video':
            mdc.animation_url = ipfsURL(mediaAdded)
            mdc.animation_url_integrity = integ
            break
    }

    const mdobj = new Metadata(mdc)

    return await storage.put([mdobj.toFile()], { wrapWithDirectory: false })
}

export async function listRecentFiles(activeConf: number, ms_threshold: number): Promise<any[]> {
    const w3s = getStorageClient(activeConf)
    const options = []
    for await (const upload of w3s.list({ maxResults: 20 })) {
        const itemCreatedAt = new Date(upload.created);
        if (itemCreatedAt >= new Date(process.env.REACT_APP_SHOW_ITEMS_CREATED_AFTER) || !process.env.REACT_APP_SHOW_ITEMS_CREATED_AFTER) {
            options.push(upload)
        }
    }
    return options
}

export function getIpfsUrlFromCID(activeConf: number, cid: string): string {
    return conf[activeConf].ipfsGateway + cid
}

export async function getMimeTypeFromIpfs(url: string): Promise<string> {
    const req = new Request(url, { method: "HEAD" })
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
        return new Metadata({ "_raw": text, ...parsed })
    } catch (e) {
        console.error(e)
    }

    return new Metadata({})
}