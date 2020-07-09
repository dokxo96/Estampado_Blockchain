import React, { Component, useState,useEffect,useRef } from 'react';
import Web3 from 'web3';
import '../App.css';
import Meme from '../abis/Meme.json'
import logo from '../../src/assets/img/Sep-bgremove.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import AuthService from '../Services/AuthService';
import Message from '../components/Message';
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values


  const NewCertificado = props => {

    const [initialBc,setInitialBc]=useState({Hash: '',contract: null,buffer:null,web3: null,account: null});
  //  const [Buffe,setBuffer]=useState(null );
    const [user,setUser] = useState({firstname:"",lastname:"",username: "", password : "",phone:"",institution:"",carrer:"",finish:"",role:"user"});
    const [message,setMessage] = useState(null);

  async function componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }
  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }
  async function loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    setInitialBc({account:accounts[0] })
    console.log(initialBc.account)
    const networkId = await web3.eth.net.getId()
    const networkData = Meme.networks[networkId]
    if(networkData) {
      const contracts = web3.eth.Contract(Meme.abi, networkData.address)
      
      setInitialBc({contract:contracts })
      console.log(initialBc.contract)
      //this.setState({ contract })
      const Hashs = await initialBc.contract.methods.get.call()
      setInitialBc({Hash:Hashs })
      console.log(initialBc.Hash)
      //this.setState({ Hash })
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

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
        setUser({firstname:"",lastname:"",username: "", password : "",phone:"",institution:"",carrer:"",finish:"",role:"user"});
  } 
  const captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      setInitialBc({buffer:Buffer(reader.result) })
      // setBuffer({buffer:Buffer(reader.result) })
     
    } 
    console.log('buffer', initialBc.buffer)
  }
  const onSubmit = e =>{
    e.preventDefault();

    
    AuthService.Certregister(user).then(data=>{
        const { message } = data;
        setMessage(message);
        resetForm();
        if(!message.msgError){
          ///aqui va el proceso de ipfs y blockchains
           console.log("Submitting file to ipfs...");
           ipfs.add(initialBc.buffer, (error, result) => {
              console.log('Ipfs result', result)
              if(error) {
                console.error(error)
                return
              }
            /*  
              initialBc.contract.methods
              .set(result[0].hash)
              .send({from: initialBc.account})
              .then((r)=>{
                  return setInitialBc({Hash: result[0].hash })
              })
            */
            })
        }
    });
}
 /* const onSubmit = (event) => {
    event.preventDefault()
   
    
  }*/


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
                                                      <h3>Registrar nuevo certificado</h3>
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
                                                    

                                                    
                                                              <input   
                                                                    style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                                                    type="file" 
                                                                    className="btn btn-warning  " 
                                                                    accept=".jpg,.png,.xml" 
                                                                    onChange={captureFile}
                                                                    />
                                                              
                                                             
                                                    <Button 
                                                            style={{"WebkitTextStroke":"0px black","margin":"10px 0px 6px 0px"}} 
                                                            type="submit"
                                                            >Registrar
                                                    </Button>   {message ? <Message message={message}/> : null}      
                                                    <p>&nbsp;</p>
                                                    <img 
                                                            src={`https://ipfs.infura.io/ipfs/${initialBc.hash}`} 
                                                            className="img-fluid"
                                                            style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}  />
                                                       
                                                  
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
export default  NewCertificado;
