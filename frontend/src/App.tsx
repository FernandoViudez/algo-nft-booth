import Picker from './Picker'
import './index.css';
import { Button, Alignment, Navbar } from '@blueprintjs/core';
import { SessionWallet } from 'algorand-session-wallet';
import {Uploader} from './Uploader'
import React from 'react';
import {Minter} from './Minter';
import EventMints from './EventMints';
import AlgorandWalletConnector from './AlgorandWalletConnector'
import { conf, sessionGetActiveConf } from './lib/config';

import {
  Link,
  Route,
  Routes,
} from 'react-router-dom'


type AppProps = {
  history: any,
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

  const events = [];

  return (
      <div className="App">
        <Navbar className='tt-bkg-theme'>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <img className="tt-logo" src="https://src.trantorian.com/img/assets/trantorian-logo.png" alt="logo" />
          </Navbar.Heading>
          <Navbar.Divider />
          <Link to='/'><Button className='navbar-btn' minimal={true} icon='search'>Choose</Button></Link>
          <Link to='/upload'><Button className='navbar-btn' minimal={true} icon='upload'>Upload</Button></Link>
        </Navbar.Group>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Divider />
          {events}
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
        <Navbar.Group  align={Alignment.RIGHT}>
          <div className='network-name'><b>{conf[activeConf].network}</b></div>
        </Navbar.Group>
        </Navbar>
        <Routes>
          <Route path="/" element={<Picker  activeConfig={activeConf} sw={sessionWallet}></Picker>} />
          <Route path="/mint/:cid" element={ <Minter  activeConfig={activeConf} sw={sessionWallet}></Minter> }/>
          <Route path="/upload" element={ <Uploader  activeConfig={activeConf} ></Uploader> }/>
          <Route path="/event/:name" element={ <EventMints  activeConfig={activeConf} ></EventMints> }/>
        </Routes>
      </div>
  );
}


export default App;
