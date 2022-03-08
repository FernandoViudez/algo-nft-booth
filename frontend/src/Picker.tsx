import { Card, Elevation } from "@blueprintjs/core";

import {Link} from 'react-router-dom'
import React from "react";
import { Metadata } from "./lib/metadata";
import { resolveProtocol } from "./lib/nft";
import {
  getIpfsUrlFromCID,
  getMetaFromIpfs,
  listRecentFiles,
} from "./lib/ipfs";
import { SessionWallet } from "algorand-session-wallet";
import { MediaDisplay } from "./MediaDisplay";

type PickerProps = {
  activeConfig: number;
  sw: SessionWallet
};

// 2 hours
const MAX_DELTA = 60 * 60 * 4 * 1000;


export default function Picker(props: PickerProps) {
  const [options, setOptions] = React.useState([]);
  const [initialized, setInitialized] = React.useState(false);

  // Look at recent
  React.useEffect(() => {
    if (initialized) return;

    listRecentFiles(props.activeConfig, MAX_DELTA).then((opts) => {
      const md_promises = [];
      for (const opt of opts) {
        //const opt = opts[idx];
        md_promises.push(
          getMetaFromIpfs(getIpfsUrlFromCID(props.activeConfig, opt.cid))
        );
      }

      Promise.all(md_promises).then((arr) => {
        const filtered = [];
        for (const idx in arr) {
          if (arr[idx].name !== "") filtered.push({
              cid: opts[idx].cid,
              md: arr[idx]
            } as CIDMD);
        }
        setOptions(filtered);
      });
    });
    setInitialized(true);
  }, [props.activeConfig, initialized]);

  const cards = options.map((option) => {
    return <DisplayCard key={option.cid} cidmd={option} />;
  });

  return (
    <div className="container">
      <div className="content content-collection">{cards}</div>
    </div>
  );
}

type CIDMD = {
    cid: string
    md: Metadata
}

type DisplayCardProps = {
  cidmd: CIDMD;
};

function DisplayCard(props: DisplayCardProps) {
  return (

    <Link to={'/mint/'+props.cidmd.cid}>
      <Card
        className="content-collection-item"
        elevation={Elevation.TWO}
      >
              <MediaDisplay 
                mediaSrc={resolveProtocol(0,props.cidmd.md.mediaURL())} 
                mimeType={props.cidmd.md.mimeType()} 
                />
      </Card>
    </Link>
  );
}
