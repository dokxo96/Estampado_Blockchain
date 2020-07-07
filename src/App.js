import React, { Component,useContext } from 'react';
import {AuthContext} from  './Context/AuthContext'

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Mainpage from './components/MainPage'
import Newcert from './components/NewCertificado'
import Login from './components/Login'
import PrivateRoute from './hocs/PrivateRoute';
import UnPrivateRoute from './hocs/UnPrivateRoute';

import Navbar from  './components/Navbar'

function App() {
 

  return (
    <Router>
      <Navbar/>
     
         <Route exact path="/" component={Mainpage}/>   
          <Route  path="/newCert" component={Newcert}/>
          <Route  path="/login"  component={Login}/>
         
     
    </Router>
    
  );
}

export default App;