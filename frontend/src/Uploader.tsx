import React from 'react'
import { Button, Elevation, FileInput, Card} from "@blueprintjs/core"
import {Metadata} from './lib/metadata'
import { putToIPFS } from './lib/ipfs'

//
type UploaderProps = {
    activeConfig: number
}

export function Uploader(props: UploaderProps) {

    const [meta, setMeta]               = React.useState(new Metadata())
    const [loading, setLoading]         = React.useState(false)
    const [imgSrc, setImgSrc]           = React.useState<string>();
    const [fileObj, setFileObj]         = React.useState<File>();

    function setFile(file: File) {
        setFileObj(file)

        const reader = new FileReader();
        reader.onload = (e: any) => {  setImgSrc(e.target.result) }
        reader.readAsDataURL(file);

        setMeta((meta)=>{
            return new Metadata({
                ...meta,
                image: file.name,
                image_mimetype: file.type,
                properties:{...meta.properties, size:file.size}
            })
        })
    }


    async function uploadImage() {
        setLoading(true) 
        const md = new Metadata({
            name: "ETH Denver AlgoRanch NFT",
            unitName:"eth-denv",
            description:"NFT Minted ETH Denver 2022",
            decimals: 0,
        }) 

        setMeta(md)

        try {
            await putToIPFS(props.activeConfig, fileObj, md)
            setLoading(false)
            window.location.reload()
        } catch (error) {
            alert("Failed to upload image to ipfs :(")
            setLoading(false)
            return
        }
    }

    return (
        <div className='container'>
            <Card elevation={Elevation.TWO} className='mint-card' >
                <UploadContainer imgSrc={imgSrc} setFile={setFile} {...meta} />
                <Button intent='success' style={{float:'right', margin:"15px"}} loading={loading} onClick={uploadImage}>Upload</Button>
            </Card>
        </div>
    )

}

type UploaderContainerProps = {
    imgSrc: string | undefined
    setFile(f: File): void
};

function UploadContainer(props: UploaderContainerProps) {
    function captureFile(event: any) {
        event.stopPropagation()
        event.preventDefault()
        props.setFile(event.target.files.item(0))
    }

    if (props.imgSrc === undefined || props.imgSrc === "" ) return (
        <div className='container'>
            <div className='content content-piece' >
                <FileInput large={true} disabled={false} text="Choose file..." onInputChange={captureFile} />
            </div>
        </div>
    )


    return (
        <div className='container' >
            <div className='content content-piece'>
                <img id="gateway-link" alt="NFT" src={props.imgSrc} />
            </div>
        </div>
    )
}
