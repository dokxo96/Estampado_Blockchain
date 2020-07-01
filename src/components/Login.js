import React, { Component } from 'react';

import '../App.css';

import logo from '../../src/assets/img/Sep-bgremove.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Login extends Component {

    render() {
        return (
          <div>
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
                          <Link className="nav-link js-scroll-trigger" to={"/"}  >Registrarse</Link>   
                          </li>
                         
                        </ul>
                      </div>
                    </div>
                </nav>

          
                <header className="mastheadLogin" >
                    <div className="container">
                        <div className="intro-text" >
                        
                               <div className="row">
                                    <div className="col-12">
                                      <div className="auth-wrapper">
                                            <div className="auth-inner">
                                            <form>
                                             <h2 color="blue" >Entrar</h2>
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" placeholder="Correo" />
                                                    </div>
                                                    < p>&nbsp;</p>
                                                    <div className="form-group">
                                                    
                                                        <input type="password" className="form-control" placeholder="Contraseña" />
                                                    </div>
                                                    < p>&nbsp;</p>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                            <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                                                        </div>
                                                    </div>
                                                    < p>&nbsp;</p>
                                                    <button type="submit" className="btn btn-success btn-block">Entrar</button>
                                                    
                                                        <a  class="lo"href="#">¿Olvidaste la contraseña?</a>
                                                    
                                                </form>
                                        
                                               
                                             
                                                < p>&nbsp;</p>
                                                < p>&nbsp;</p>
                                                < p>&nbsp;</p>
                                                < p>&nbsp;</p>

                                            </div>
                                        
                                        </div>
                                        
                                    </div>
                               </div>
                           
                        </div>
                    </div>
                  </header>

         </div>
        );
    }
}export default  Login