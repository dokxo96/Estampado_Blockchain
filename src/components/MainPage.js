import React, { useState,useContext,useEffect } from 'react';
import AuthService from '../Services/AuthService';
import Message from '../components/Message';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import '../../src/App.css';
import {AuthContext} from '../Context/AuthContext';

const MainPage = props => {
  const [user,setUser] =useState({username:"",password:""});
    const [message,setMessage]=useState(null);
    const authContext =useContext(AuthContext);

    const onChange = e =>{
        e.preventDefault();
        setUser({...user,[e.target.name]: e.target.value });
        console.log(user)
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.login(user).then(data=>{
            console.log(data);
            const { isAuthenticated,user,message} = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
                props.history.push('/home');
            }
            else
                setMessage(message);
        });
    }



  return (
    <div className="App">
      <header className="masthead" id="heade" >
         <div className="container">
          <div className="intro-text" >
          <Router>
                          
        <div className="row">
            <div className="col-6">
            <div className="auth-wrapper">
                    <div className="title" >  
                        <h1 yo={"#blockchain"} href="#blockchain">
                          ESTAMPADO DE CERTIFICADOS EN BLOCKCHAIN
                        </h1>
                    </div>
                <div>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  <p>&nbsp;</p>
                  
                </div>
                </div>   
            </div>
              <div className="col-6">
              <div className="auth-wrapper">
                      <div className="auth-inner">
                      <form onSubmit={onSubmit}>
                                               <h2 style={{"WebkitTextStroke":".5px black"}} className="text-center " >Entrar</h2>
                                               < p>&nbsp;</p>
                                               <label htmlFor="username" className="sr-only">Usuario: </label>
                                                        <input type="text" 
                                                            name="username" 
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Usuario:"/>
                                                             <p>&nbsp;</p>
                                                        <label htmlFor="password" className="sr-only">Contraseña: </label>
                                                        <input type="password" 
                                                            name="password" 
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Contraseña:"/>
                                                             <p>&nbsp;</p>
                                                        <button className="btn btn-lg btn-success btn-block" 
                                                                type="submit">Entrar </button>
                                                                 
                                                          <a  style={{"WebkitTextStroke":"0px black"}} className="lo"href="#">¿Olvidaste la contraseña?</a>
                                                          <p>&nbsp;</p>
                                                        


                                                  </form>
                                               {message ? <Message message = {message}/> :null} 
                                                 
                                          
                      </div>
                  
                  </div>
                  
              </div>
           {/**  <div className="col-6">
            <div className="auth-wrapper">
                    <div className="auth-inner">
                          <form onSubmit={onSubmit}>
                              <h3>Registrate</h3>
                              <label htmlFor="firstname" className="sr-only">Nombres: </label>
                              <input type="text" 
                                    name="firstname" 
                                    value={user.firstname}
                                    onChange={onChange} 
                                    className="form-control" 
                                    placeholder="Nombres:"/>
                                     <p>&nbsp;</p>
                              <label htmlFor="lastname" className="sr-only">Apellidos: </label>
                              <input type="text" 
                                    name="lastname" 
                                    value={user.lastname}
                                    onChange={onChange} 
                                    className="form-control" 
                                    placeholder="Apellidos:"/>
                                     <p>&nbsp;</p>
                              <label htmlFor="username" className="sr-only">Username: </label>
                              <input type="text" 
                                    name="username" 
                                    value={user.username}
                                    onChange={onChange} 
                                    className="form-control" 
                                    placeholder="Usuario/correo"/>
                                     <p>&nbsp;</p>
                              <label htmlFor="password" className="sr-only">Password: </label>
                              <input type="password" 
                                    name="password"
                                    value={user.password} 
                                    onChange={onChange} 
                                    className="form-control" 
                                    placeholder="Conrtaseña"/>
                                     <p>&nbsp;</p>
                              <label htmlFor="role" className="sr-only">Role: </label>
                              <input type="text" 
                                    name="role"
                                    value={user.role}  
                                    onChange={onChange} 
                                    className="form-control" 
                                    placeholder="Enter role (admin/user)"/>
                                     <p>&nbsp;</p>
                              <button className="btn btn-lg btn-success btn-block" 
                                      type="submit">Registrarse</button>
                              <a 
                                      className="lo" 
                                      to={"/Login"} 
                                      style={{"WebkitTextStroke":".1px black"}}  
                                      href="Login">¿Ya estas registrado? Ingresa ahora!</a>
                              
                          </form>
                          {message ? <Message message={message}/> : null}
                    </div>
                
                </div>
                
            </div>
        */}</div>
          </Router>
        </div>
        </div>
      </header>

      <section className="page-section bg-success" id="blockchain">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h1 className="text-white mt-0">¿Que es Blockchain?</h1>
                            <hr className="divider light my-4" />
                                <p>&nbsp;</p>
                                    <p className="text-white-50  mb-4">Es un sistema de transferencia digital basado en la distribución de la información (o dinero) en multitud de nodos 
                                    independientes de forma anónima, eliminando intermediarios e impidiendo que la información pueda ser borrada. </p>
                                <p>&nbsp;</p>
                            <a style={{"WebkitTextStroke":"0px black","color":"#080808"}} className="btn btn-light btn-xl js-scroll-trigger" href="#mainNav">Registrate!</a>
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
                <ul style={{"WebkitTextStroke":"px black"}} className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#something">
                      <i style={{"WebkitTextStroke":".0px black"}} className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#something">
                      <i style={{"WebkitTextStroke":"0px black"}} className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                 
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a style={{"WebkitTextStroke":"0px black","color":"#080808"}} href="#something">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a style={{"WebkitTextStroke":"0px black","color":"#080808"}}  href="#something">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
 </div>
  );
}


export default MainPage;