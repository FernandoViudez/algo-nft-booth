import Picker from './Picker'
import './index.css';
import { Button, Alignment, Navbar } from '@blueprintjs/core';
import { SessionWallet } from 'algorand-session-wallet';
import {Uploader} from './Uploader'
import React from 'react';
import {Minter} from './Minter';
import AlgorandWalletConnector from './AlgorandWalletConnector'
import { conf, sessionGetActiveConf } from './lib/config';

import {
  HashRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom'


type AppProps = {
  history: History,
}

function App(props: AppProps) {

  const activeConf = sessionGetActiveConf()

  const sw = new SessionWallet(conf[activeConf].network)


  const [sessionWallet, setSessionWallet] =  React.useState(sw)
  const [accts, setAccounts] = React.useState(sw.accountList())
  const [connected, setConnected] = React.useState(sw.connected())

  function updateWallet(sw: SessionWallet){ 
    setSessionWallet(sw)
    setAccounts(sw.accountList())
    setConnected(sw.connected())
  }
  const basename = document.querySelector('base')?.getAttribute('href') ?? '/'    

  return (
    <Router basename={basename}>
      <div className="App">
        <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Algorand NFT Minter</Navbar.Heading>
          <Navbar.Divider />
          <Link to='/'><Button minimal={true} icon='search'>Choose</Button></Link>
          <Link to='/upload'><Button minimal={true} icon='upload'>Upload</Button></Link>
        </Navbar.Group>
        <Navbar.Group  align={Alignment.RIGHT}>
          <AlgorandWalletConnector  
            darkMode={false}
            sessionWallet={sessionWallet}
            accts={accts}
            connected={connected} 
            updateWallet={updateWallet}
          />

        </Navbar.Group>
        </Navbar>
        <Switch>
          <Route exact path="/" children={<Picker  activeConfig={activeConf} sw={sessionWallet}></Picker>} />
          <Route path="/mint/:cid" children={ <Minter  activeConfig={activeConf} sw={sessionWallet}></Minter> }/>
          <Route exact path="/upload" children={ <Uploader  activeConfig={activeConf} ></Uploader> }/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
