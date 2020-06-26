import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Meme from '../abis/Meme.json'
import Register_cert from './Register_cert'
import Navbar from './Navbar'
import Login from './login'
import Signup from './SignUp'
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class App extends Component {

 
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
               <Login/>
              </li>
              <li className="nav-item">
                <Signup/>
              </li>
            </ul>
            <Register_cert/>
          </div>
        </div>
      </nav>
     
    </div>
     
    );
  }
}

export default App;
