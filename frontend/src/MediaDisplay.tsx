import { getTypeFromMimeType } from "./lib/metadata"

type MediaDisplayProps = {
    title: string
    mimeType: string
    mediaSrc: string | undefined
}

export function MediaDisplay(props: MediaDisplayProps){
    const type = getTypeFromMimeType(props.mimeType)

    let media = <div></div>
    switch(type) {
        case "audio":
           media = (
                <audio id="uploaded-media" controls >
                    <source src={props.mediaSrc} type={props.mimeType} />
                </audio>
            )
            break;
        case "video":
            media = (
                <video id="uploaded-media" controls>
                    <source src={props.mediaSrc} type={props.mimeType} />
                </video>
            )
            break;
        default:
            media = (
                <img id="uploaded-media" alt="NFT" src={props.mediaSrc} />
            )
    }

    return (
        <div className='media-display container'>

            <h3>{props.title}</h3>

            <div className='content' > 
                {media}
            </div>
        </div>
    )
}