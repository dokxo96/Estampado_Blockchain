import React, { Component,useContext } from 'react';
import {AuthContext} from  './Context/AuthContext'

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Mainpage from './components/MainPage'
import Newcert from './components/NewCertificado'
import Newcert2 from './components/NewCertificado copy'

import PrivateRoute from './hocs/PrivateRoute';
import Home from './components/Home'
import regAd from './components/reg_Admins'
import UnPrivateRoute from './hocs/UnPrivateRoute';

import Navbar from  './components/Navbar'

function App() {
 

  return (
    <Router>
      <Navbar/>
         {/** Ruta principal y libre */}
         <Route exact path="/" component={Mainpage}/>  
          {/** Ruta para users y admins */}
         <PrivateRoute path="/home"  roles={['admin','user','SU']} component={Home}/>
         {/** Ruta para los Admins */}
         <PrivateRoute path="/newCert" roles={['admin']} component={Newcert}/>
         <PrivateRoute path="/newCert2" roles={['admin']} component={Newcert2}/>
         {/** Ruta para El SuperUser */}
         <PrivateRoute path="/regAdmins"  roles={['SU']} component={regAd}/>
    </Router>
    
  );
}

export default App;