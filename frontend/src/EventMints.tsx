
import { useParams } from 'react-router-dom'
import { Card, Elevation } from "@blueprintjs/core";
import React from "react";
import { NFT, resolveProtocol } from "./lib/nft"
import { getEventConfig } from "./lib/config"
import { MediaDisplay } from "./MediaDisplay";

type EventMintsProps = {
    activeConfig: number;
};


export default function EventMints(props: EventMintsProps) {
    const [nfts, setNfts] = React.useState([])
    const [loadedName, setLoadedName] = React.useState(undefined)
    const { name } = useParams()



    React.useEffect(() => {
        if (nfts.length > 0 && loadedName === name) return;

        const ec = getEventConfig(name)

        const nftPromises = []
        for (const asa of ec.asaList) {
            nftPromises.push(NFT.fromAssetId(props.activeConfig, asa))
        }
        Promise.all(nftPromises).then((n) => {
            setNfts(n)
            setLoadedName(name)
        })
    })

    const nftList = nfts.length === 0 || name !== loadedName ? [<h1 key='loading'>Loading...</h1>] : nfts.map((nft: NFT) => {
        return (
            <Card
                key={nft.id()}
                className="content-collection-item"
                elevation={Elevation.TWO}
            >
                <MediaDisplay
                    unitName={nft.metadata.unitName}
                    title={nft.metadata.title()}
                    name={nft.name()}
                    mediaSrc={resolveProtocol(props.activeConfig, nft.metadata.mediaURL())}
                    mimeType={nft.metadata.mimeType()}
                />
            </Card>
        )
    })

    return (
        <div className='container'>
            {nftList}
        </div>
    )
}
