import React, { Component,useContext } from 'react';
import {AuthContext} from  './Context/AuthContext'

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Mainpage from './components/MainPage'
import NewStudent from './components/Create-Student'
import Newcert2 from './components/NewCertificado copy 2'

import PrivateRoute from './hocs/PrivateRoute';
import Home from './components/Home'
import regAd from './components/reg_Admins'
//import Admins from './components/Admins'
import editStudent from './components/Edit-Student'
import StudentList from "./components/student-list.component";

import UnPrivateRoute from './hocs/UnPrivateRoute';

import Navbar from  './components/Navbar';

import CertId from "./components/CertId";

function App() {
 

  return (
    <Router>
      <Navbar/>
         {/** Ruta principal y libre */}
         <Route exact path="/" component={Mainpage}/>  
          {/** Ruta para users ,admins y SU */}
         <PrivateRoute path="/home"  roles={['admin','user','SU']} component={Home}/>
         {/** Ruta para los Admins */}
         <PrivateRoute path="/newStudent" roles={['admin']} component={NewStudent}/>
         <PrivateRoute path="/student-list" roles={['admin']} component={StudentList}/>
         <PrivateRoute path="/edit-student/:id" roles={['admin']} component={editStudent}/>
         <PrivateRoute path="/newcert/:id" roles={['admin']} component={Newcert2}/>

         {/** Ruta para El SuperUser */}
         <PrivateRoute path="/regAdmins"  roles={['SU']} component={regAd}/>

         {/** Ruta para el Alumno */}
         <PrivateRoute path="/Mititulo"  roles={['user']} component={CertId}/>
    </Router>
    
  );
}

export default App;