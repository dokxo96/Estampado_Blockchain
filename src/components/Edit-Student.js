import React, { Component, useState,useEffect,useRef } from 'react';
import Web3 from 'web3';
import '../App.css';
import Meme from '../abis/Meme.json'
import Button from 'react-bootstrap/Button';
import AuthService from '../Services/AuthService';
import Message from './Message';


  const CreateStudent = props => {
  const [user,setUser] = useState({id:"",firstname:"",lastname:"",username: "", password : "",phone:"",institution:"",carrer:"",finish:"",role:"user"});
  const [message,setMessage] = useState(null);

 const onChange = e =>{
    setUser({...user,[e.target.name] : e.target.value});
  }
 
  useEffect(()=>{
    console.log("props",props)
    AuthService.getStudent(props.match.params.id)
    .then(res => {
      console.log(res._id)
      setUser({
        id:res._id,
        firstname:res.firstname,
        lastname:res.lastname,
        username: res.username, 
        password : res.password,
        phone:res.phone,
        institution:res.institution,
        carrer:res.carrer,
        finish:res.finish,
      });
      
    })
    .catch((error) => {
      console.log(error);
    })
},[]);
  const resetForm = ()=>{ 
        setUser({
          id:"",
          firstname:"",
          lastname:"",
          username: "", 
          password : "",
          phone:"",
          institution:"",
          carrer:"",
          finish:"",
          role:"user"});
  } 
 
  let timerID = useRef(null);

  const onSubmit = e =>{
    e.preventDefault();

    
    AuthService.updateDD(user).then(data=>{
        const { message } = data;
       
        resetForm();
        setMessage(message);
        if(!message.msgError){
          timerID = setTimeout(()=>{
            props.history.push('/student-list');
         },2000)
        }
    });
}
 


        return (
          <div>
     
          
                <header className="masthead2" >
                    <div className="container">
                        <div className="intro-text" >
                        
                               <div className="row">
                                    <div className="col-12">
                                      <div className="auth-wrapper">
                                            <div className="auth-inner">
                                            <form onSubmit={onSubmit}>
                                                      <h3>Editar Alumno</h3>
                                                      <label htmlFor="firstname" className="sr-only">Nombres: </label>
                                                    <input 
                                                            type="text" 
                                                            name="firstname" 
                                                            value={user.firstname}
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Nombres:"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            />
                                                            
                                                    <label htmlFor="lastname" className="sr-only">Apellidos: </label>
                                                    <input type="text" 
                                                            name="lastname" 
                                                            value={user.lastname}
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Apellidos:"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            />
                                                            
                                                            
                                                    <label htmlFor="username" className="sr-only">Username: </label>
                                                    <input type="text" 
                                                            name="username" 
                                                            value={user.username}
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Usuario"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            />
                                                            
                                                    <label htmlFor="password" className="sr-only">Password: </label>
                                                    <input type="password" 
                                                            name="password"
                                                            value={user.password} 
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Contraseña"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            />
                                                            
                                                    <label htmlFor="phone" className="sr-only">phone: </label>
                                                    <input type="Tel" 
                                                            name="phone"
                                                            value={user.phone} 
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Telefono"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            />
                                                    <label htmlFor="institution" className="sr-only">Institucion: </label>
                                                    <select
                                                            name="institution"
                                                            value={user.institution}  
                                                            onChange={onChange} 
                                                            className="form-control"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            
                                                            >
                                                                <option defaultValue>Institución...</option>
                                                                  <option value="ITT">ITT</option>
                                                                  <option value="UAN">UAN</option>
                                                                  <option value="UT">UT</option>
                                                            
                                                    </select>

                                                    <select
                                                            name="carrer"
                                                            value={user.carrer}  
                                                            onChange={onChange} 
                                                            className="form-control"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            
                                                            >
                                                                <option defaultValue>Carrera...</option>
                                                                  <option value="IGE">Ingenieria en Gestion Empresarial</option>
                                                                  <option value="IE">Ingenieria en Electrica</option>
                                                                  <option value="ISC">Ingenieria en Sistemas Computacionales</option>
                                                                  <option value="IC">Ingenieria Civil</option>
                                                                  <option value="LA">Licenciatura en Arquitectura</option>
                                                            
                                                    </select>
                                                    <label htmlFor="finish" className="sr-only">finish: </label>
                                                    <input type="Date" 
                                                            name="finish"
                                                            title="Fecha de egreso"
                                                            value={user.finish} 
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Telefono"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            />
                                                    

                                                    
                                                             
                                                             
                                                    <Button 
                                                            style={{"WebkitTextStroke":"0px black","margin":"10px 0px 6px 0px"}} 
                                                            type="submit"
                                                            >Actualizar
                                                    </Button>   {message ? <Message message={message}/> : null}      
                                                    <p>&nbsp;</p>
                                                   
                                                  
                                                  </form>
                                                 
                                              
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
        );
  
}
export default  CreateStudent;
