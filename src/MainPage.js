import React, { Component } from 'react';

import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from './assets/img/Sep-bgremove.png'


function MainPage() {
  

  return (
    <div className="App">
     
      <nav className="navbar navbar-expand-lg   " id="mainNav">
          <div className="container">
              <div id="img-contenedor">
                  <img src={logo} alt="" />
              </div>
            
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fa fa-bars"></i>
              </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#ventajas">Ventajas</a>
                </li>
                <li className="nav-item">
                <a className=" nav-link js-scroll-trigger" href="#blockchain"  >Blockchain</a>       
              </li>
                <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to={"/Login"} href="javascript:location.reload()" >Ingresar</Link>   
                </li>
              
              </ul>
            </div>
          </div>
       </nav>

  
  <header className="masthead" id="heade" >
    <div className="container">
      <div className="intro-text" >
       <Router>
                      
    <div className="row">
        <div className="col-6">
        <div className="auth-wrapper">
                <div className="intro-heading" >  
                    <a href="#blockchain">
                      ESTAMPADO DE CERTIFICADOS EN BLOCKCHAIN
                    </a>
                </div>
            
            </div>   
        </div>
    
         <div className="col-6">
         <div className="auth-wrapper">
                <div className="auth-inner">
                      <form>
                          <h3>Registrate</h3>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nombres" />
                          </div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Apellidos" />
                          </div>
                          <div className="form-group">
                           <input type="email" className="form-control" placeholder="Correo" />
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" placeholder="Contraseña" />
                          </div>
                          <button type="submit" className="btn btn-success btn-block" to="/newCert" href="newCert">Enviar</button>
                          <a class="lo" to={"/Login"} href="Login">¿Ya estas registrado? Ingresa ahora!</a>
                          
                      </form>
              
                </div>
            
            </div>
            
        </div>
    </div>
      </Router>
     </div>
    </div>
  </header>

  <section class="page-section bg-success" id="blockchain">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h1 class="text-white mt-0">¿Que es Blockchain?</h1>
                        <hr class="divider light my-4" />
                            <p>&nbsp;</p>
                                <p class="text-white-50  mb-4">es un sistema de transferencia digital basado en la distribución de la información (o dinero) en multitud de nodos independientes (ordenadores de usuarios) que registran y validan dicha información (token) de forma anónima, eliminando intermediarios e impidiendo que la información pueda ser borrada. La base de esta tecnología es el consenso, pues si todos los nodos tienen y comparten la misma información, la toman como válida. Simple, rápido y sin intermediarios. </p>
                            <p>&nbsp;</p>
                        <a class="btn btn-light btn-xl js-scroll-trigger" href="#mainNav">Registrate!</a>
                    </div>
                </div>
            </div>
        </section>
 
  <section className="page-section" id="ventajas">
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
const login =()=>(
  <form>
  <h2 color="blue" >Entrar</h2>
  <div className="form-group">
           <input type="email" className="form-control" placeholder="Correo" />
  </div>
  <div className="form-group">
         <input type="password" className="form-control" placeholder="Contraseña" />
  </div>
  <div className="form-group">
      <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
          <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
      </div>
  </div>
  <button type="submit" className="btn btn-success btn-block">Entrar</button>
       <a href="#">¿Olvidaste la contraseña?</a>
  
</form>

);

export default MainPage;