import Picker from './Picker'
import './index.css';
import { AnchorButton, Alignment, Navbar } from '@blueprintjs/core';
import { SessionWallet } from 'algorand-session-wallet';
import {Uploader} from './Uploader'
import React from 'react';
import {Minter} from './Minter';
import AlgorandWalletConnector from './AlgorandWalletConnector'
import { conf, sessionGetActiveConf } from './lib/config';

import {
  BrowserRouter as Router,
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

  return (
    <Router>
      <div className="App">
        <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Algorand NFT Minter</Navbar.Heading>
          <Navbar.Divider />
          <AnchorButton minimal={true} icon='search' href='/' text='Choose' />
          <AnchorButton minimal={true} icon='upload' href='/upload' text='Upload' />
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
