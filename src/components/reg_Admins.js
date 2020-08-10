import React, {  useState,useRef,useEffect  } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import AuthService from '../Services/AuthService';
import Message from '../components/Message';

 const reg_Admins = props => {

    const [user,setUser] = useState({firstname:"",lastname:"",username: "", password : "",phone:"",department:"",job:"",role:"admin"});
    const [message,setMessage] = useState(null);
    let timerID = useRef(null);
  
    useEffect(()=>{
        return ()=>{
            clearTimeout(timerID);
        }
    },[]);
  
    const onChange = e =>{
        setUser({...user,[e.target.name] : e.target.value});
    }
  
    const resetForm = ()=>{
        setUser({firstname:"",lastname:"",username: "", password : "",phone:"",department:"",job:"",role:"admin"});
    }
  
    const onSubmit = e =>{
        e.preventDefault();
        AuthService.Adminregister(user).then(data=>{
            const { message } = data;
            setMessage(message);
            resetForm();
            if(!message.msgError){
                timerID = setTimeout(()=>{
                   // props.history.push('/login');
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
                                                      <h3>Registrar nuevo administrador</h3>
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
                                                    <label htmlFor="department" className="sr-only">Departamento: </label>
                                                    <select
                                                            name="department"
                                                            value={user.department}  
                                                            onChange={onChange} 
                                                            className="form-control"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            
                                                            >
                                                                <option defaultValue>Departamento...</option>
                                                                <option value="CE">Control Escolar</option>
                                                                <option value="MS">Media Superior</option>
                                                            
                                                    </select>
                                                    <label htmlFor="job" className="sr-only">Puesto: </label>
                                                    <input type="text" 
                                                            name="job"
                                                            value={user.job} 
                                                            onChange={onChange} 
                                                            className="form-control" 
                                                            placeholder="Puesto:"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                            />
                                                    <Button 
                                                            style={{"WebkitTextStroke":"0px black","margin":"10px 0px 6px 0px"}} 
                                                            className="btn btn-success  " 
                                                            type="submit"
                                                                >Registrar
                                                    </Button>        
                                                           
                                                  
                                                  </form>
                                                  {message ? <Message message={message}/> : null}
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

export default  reg_Admins;
