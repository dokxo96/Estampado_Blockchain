import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Meme from '../abis/Meme.json'
import Register_cert from './Register_cert'
import Navbar from './Navbar'
import Login from './login'
import SignUp from './SignUp'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <image src={'../images/sep-removebg-preview.png'} className="logo-main"/>
          <a className="navbar-light a" to={"/sign-in"}>Secretaría de Educación Pública</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="navbar-light" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className=" navbar-light" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;