import { Card, Elevation } from "@blueprintjs/core";

import { Link } from 'react-router-dom'
import React from "react";
import { Metadata } from "./lib/metadata";
import { resolveProtocol } from "./lib/nft";
import {
  getIpfsUrlFromCID,
  getMetaFromIpfs,
  getMimeTypeFromIpfs,
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


  async function getRecentFiles(activeConfig: number): Promise<CIDMD[]> {
    const opts = await listRecentFiles(activeConfig, MAX_DELTA)

    const mime_type_promises = []
    for (const opt of opts) {
      mime_type_promises.push(getMimeTypeFromIpfs(getIpfsUrlFromCID(props.activeConfig, opt.cid)))
    }

    const mimeTypes = await Promise.all(mime_type_promises)

    const new_opts = []
    const md_promises = [];
    for (const idx in opts) {
      if (mimeTypes[idx] === "application/json"){
        md_promises.push(
          getMetaFromIpfs(getIpfsUrlFromCID(props.activeConfig, opts[idx].cid))
        );
        new_opts.push(opts[idx])

      }
    }

    const metas = await Promise.all(md_promises)
    const filtered = [];
    for (const idx in metas) {
      if (metas[idx].name === "") continue;

      filtered.push({
        cid: new_opts[idx].cid,
        md: metas[idx]
      } as CIDMD);
    }

    return filtered
  }

  // Look at recent
  React.useEffect(() => {
    if (initialized) return;
    getRecentFiles(props.activeConfig).then((filtered) => {
      setOptions(filtered);
      setInitialized(true);
    })
  }, [props.activeConfig, initialized]);

  const cards = initialized ? options.map((option) => {
    return <DisplayCard key={option.cid} cidmd={option} />;
  }) : [<h5 key='loading'>Loading...</h5>];

  return (
    <div className="container">
      <div className="content content-collection">
        {cards}
      </div>
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

    <Link to={'/mint/' + props.cidmd.cid}>
      <Card
        className="content-collection-item"
        elevation={Elevation.TWO}
      >
        <MediaDisplay
          name={props.cidmd.md.name}
          title={props.cidmd.md.title()}
          mediaSrc={resolveProtocol(0, props.cidmd.md.mediaURL())}
          mimeType={props.cidmd.md.mimeType()}
        />
      </Card>
    </Link>
  );
}
