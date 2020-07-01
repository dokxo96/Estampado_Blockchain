import React, { Component } from 'react';
import Web3 from 'web3';
import './App.css';
import Portfolio from './components/Portfolio'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from './components/login'
import SignUp from './components/SignUp'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values


function App() {
  

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">SEP</a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#services">Ventajas</a>
          </li>
          <li className="nav-item">
          <Link className="nav-link js-scroll-trigger" to={"/sign-in"} href="javascript:location.reload()" >Ingresar</Link>   
          </li>
          <li className="nav-item">
          <Link className=" nav-link js-scroll-trigger" to={"/sign-up"}href="javascript:location.reload()"  >Registrarse</Link>       
         </li>
        </ul>
      </div>
    </div>
  </nav>

  
  <header className="masthead" >
    <div className="container">
      <div className="intro-text" >
      <Router>
    <div className="row">
        <div className="col-6">
        <div className="auth-wrapper">
                <div className="auth-inner">
                 <h3>
                   ESTAMPADO DE CERTIFICADOS EN BLOCKCHAIN
                 </h3>
                 <p>Hoy en dia todos los egresados tienen la
                   posibilidad de encontrar trabajo fuera de su nacion por lo que
                   el estampado de certificados en Blockchain es una herramienta para
                   satifacer esta nececidad globlal.
                 </p>
                </div>
            
            </div>   
        </div>
    
         <div className="col-6">
         <div className="auth-wrapper">
                <div className="auth-inner">
                  <Switch>
                    <Route exact path='/' component={Login} id="login"/>
                    <Route path="/sign-in" component={Login}  />
                    <Route path="/sign-up" component={SignUp} />
                  </Switch>
                </div>
            
            </div>
            
        </div>
    </div>
      </Router>
     </div>
    </div>
  </header>

  
  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Ventajas</h2>
          <h3 className="section-subheading text-muted">.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-shield fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Verificable</h4>
          <p className="text-muted">Los empleadores y otras instituciones pueden verificar
           en tiempo real la autenticidad del título electrónico
            sin acudir al emisor.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Portable</h4>
          <p className="text-muted">El alumno puede compartir su título electrónico con quien decida, 
          incluso publicarlo en redes sociales profesionales como LinkedIn.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Seguro</h4>
          <p className="text-muted">Blockchain permite asegurar que los registros no 
          son modificados después de emitirse, por lo que 
          se disminuyen posibles fraudes.</p>
        </div>
      </div>
    </div>
  </section>


 
 
  
 
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="copyright">Copyright &copy; Your Website 2019</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item">
              <a href="#something">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default App;