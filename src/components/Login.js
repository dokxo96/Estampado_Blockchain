import React, { Component ,useState,useContext} from 'react';
import AuthService  from '../Services/AuthService';
import Message from '../components/Message';
import {AuthContext} from '../Context/AuthContext';
import '../App.css';


const Login = props =>{
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
                props.history.push('/newCert');
            }
            else
                setMessage(message);
        });
    }
    return(
        <div>        
             <header className="mastheadLogin" >
                      <div className="container">
                          <div className="intro-text" >
                             <div>
                                 <div className="row">
                                      <div className="col-12">
                                        <div className="auth-wrapper">
                                              <div className="auth-inner">
                                              <form onSubmit={onSubmit}>
                                               <h2 style={{"WebkitTextStroke":".5px black"}} className="text-center " >Entrar</h2>
                                               < p>&nbsp;</p>
                                               <label htmlFor="username" className="sr-only">Username: </label>
                                                        <input type="text" 
                                                            name="username" 
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Enter Username"/>
                                                        <label htmlFor="password" className="sr-only">Password: </label>
                                                        <input type="password" 
                                                            name="password" 
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Enter Password"/>
                                                        <button className="btn btn-lg btn-success btn-block" 
                                                                type="submit">Log in </button>
                                                          <a  style={{"WebkitTextStroke":"0px black"}} className="lo"href="#">¿Olvidaste la contraseña?</a>
                                                          <a  style={{"WebkitTextStroke":"0px black"}} className="lo"href="#">¿No estas registrado?,entra aquí!</a>
                                                      
                                                  </form>
                                                  {message ? <Message message = {message}/> :null}
                                          
                                                 
                                               
                                                
  
                                              </div>
                                          
                                          </div>
                                          
                                      </div>
                                 </div>
                             </div>
                          </div>
                      </div>
                    </header>
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

    )
}
export default Login;
