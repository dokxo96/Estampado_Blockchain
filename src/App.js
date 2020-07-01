import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Mainpage from './MainPage'
import Newcert from './components/NewCertificado'
import Login from './components/Login'
function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Mainpage}/>   
          <Route  path="/newCert" component={Newcert}/>
          <Route  path="/Login"  component={Login}/>
        </Switch>
       </div>
    </Router>
    
  );
}

export default App;