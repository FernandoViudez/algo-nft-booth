import React from 'react'
import { Button, Elevation, FileInput, Card} from "@blueprintjs/core"
import { getTypeFromMimeType, Metadata} from './lib/metadata'
import { putToIPFS } from './lib/ipfs'
import { MediaDisplay } from './MediaDisplay'

type UploaderProps = {
    activeConfig: number
}

export function Uploader(props: UploaderProps) {

    const [meta, setMeta]               = React.useState(new Metadata())
    const [loading, setLoading]         = React.useState(false)
    const [fileObj, setFileObj]         = React.useState<File>();
    const [mediaSrc, setMediaSrc]           = React.useState<string>();
    const [mimeType, setMimeType]           = React.useState<string>();

    function setFile(file: File) {
        setFileObj(file)

        const reader = new FileReader();
        reader.onload = (e: any) => {  setMediaSrc(e.target.result) }
        reader.readAsDataURL(file);

        setMimeType(file.type)

        setMeta((meta)=>{
            const metaObj = {
                ...meta,
                properties:{...meta.properties, size:file.size}
            }

            const mediaType = getTypeFromMimeType(file.type)
            switch(mediaType){
                case 'audio':
                    metaObj.animation_url = file.name
                    metaObj.animation_url_mimetype = file.type
                    break;
                case 'video':
                    metaObj.animation_url = file.name
                    metaObj.animation_url_mimetype = file.type
                    break;
                case 'image':
                    metaObj.image = file.name
                    metaObj.image_mimetype = file.type
                    break;
            }

            return new Metadata(metaObj)
        })
    }


    async function uploadMedia() {
        setLoading(true) 

        const md = new Metadata({
            ...meta,
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
            console.error(error)
            alert("Failed to upload image to ipfs :(")
            setLoading(false)
            return
        }
    }

    return (
        <div className='container'>
            <Card elevation={Elevation.TWO} className='mint-card' >
                <UploadContainer mimeType={mimeType} mediaSrc={mediaSrc} setFile={setFile} {...meta} />
                <Button intent='success' style={{float:'right', margin:"15px"}} loading={loading} onClick={uploadMedia}>Upload</Button>
            </Card>
        </div>
    )

}

type UploaderContainerProps = {
    mediaSrc: string | undefined
    mimeType: string | undefined
    setFile(f: File): void
};

function UploadContainer(props: UploaderContainerProps) {
    function captureFile(event: any) {
        event.stopPropagation()
        event.preventDefault()
        props.setFile(event.target.files.item(0))
    }

    if (props.mediaSrc === undefined || props.mediaSrc === "" ) return (
        <div className='container'>
            <div className='content content-piece' >
                <FileInput large={true} disabled={false} text="Choose file..." onInputChange={captureFile} />
            </div>
        </div>
    )

    return (
        <div className='container' >
            <div className='content content-piece'>
                <MediaDisplay mimeType={props.mimeType} mediaSrc={props.mediaSrc} />
            </div>
        </div>
    )
}