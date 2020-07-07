import React, { Component } from 'react';
import Web3 from 'web3';
import '../App.css';
import Meme from '../abis/Meme.json'
import logo from '../../src/assets/img/Sep-bgremove.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class NewCertificado extends Component {

  
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
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

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Meme.networks[networkId]
    if(networkData) {
      const contract = web3.eth.Contract(Meme.abi, networkData.address)
      this.setState({ contract })
      const Hash = await contract.methods.get().call()
      this.setState({ Hash })
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      Hash: '',
      contract: null,
      web3: null,
      buffer: null,
      account: null
    }
  }

  captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  onSubmit = (event) => {
    event.preventDefault()
    console.log("Submitting file to ipfs...")
    ipfs.add(this.state.buffer, (error, result) => {
      console.log('Ipfs result', result)
      if(error) {
        console.error(error)
        return
      }
       this.state.contract.methods.set(result[0].hash).send({ from: this.state.account }).then((r) => {
         return this.setState({ Hash: result[0].hash })
       })
    })
  }

    render() {
        return (
          <div>
            {/**    <nav className="navbar navbar-expand-lg   " id="mainNav">
                    <div className="container">
                    <img className="mediana" src={logo} alt="" />
                      
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                            <i className="fa fa-bars"></i>
                        </button>
                      <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                          <li className="nav-item">
                            <a className="nav-link js-scroll-trigger" href="#">Solicitudes</a>
                          </li>
                          <li className="nav-item">
                          <Link className="nav-link js-scroll-trigger" to={"/sign-in"} href="javascript:location.reload()" >Listado de Alumnos</Link>   
                          </li>
                          <li className="nav-item">
                          <Link className=" nav-link js-scroll-trigger" to={"/"}href="javascript:location.reload()"  >Salir</Link>       
                        </li>
                        </ul>
                      </div>
                    </div>
                </nav>
*/} 
          
                <header className="masthead2" >
                    <div className="container">
                        <div className="intro-text" >
                        
                               <div className="row">
                                    <div className="col-12">
                                      <div className="auth-wrapper">
                                            <div className="auth-inner">
                                               
                                                  <form>
                                                      <h3>Información básica</h3>

                                                     <div className="row">
                                                        <div className="col">
                                                          <input type="text" className="form-control" id="name" placeholder="Nombres" name="names"/>
                                                        </div>
                                                        <div className="col">
                                                          <input type="text" className="form-control" placeholder="Apellidos" name="lastnames"/>
                                                        </div>
                                                      </div>
                                                      <p>&nbsp;</p>
                                                     <div className="row">
                                                      <div className="col">
                                                        <input type="email" className="form-control" id="email" placeholder="Correo" name="email"/>
                                                      </div>
                                                      <div className="col">
                                                        <input type="tel" className="form-control" placeholder="Telefono" name="phone"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                          required/>
                                                      </div>
                                                    </div>
                                                     <p>&nbsp;</p>
                                                     <div className="row">
                                                          <div className="col">
                                                            <select name="Institution" className="custom-select mb-3">
                                                                  <option defaultValue>Institucion...</option>
                                                                  <option value="volvo">ITT</option>
                                                                  <option value="fiat">UAN</option>
                                                                  <option value="audi">UT</option>
                                                                </select>
                                                          </div>
                                                          <div className="col">
                                                          <select name="Career" className="custom-select mb-3">
                                                                  <option defaultValue>Carrera...</option>
                                                                  <option value="IGE">Ingenieria en Gestion Empresarial</option>
                                                                  <option value="IE">Ingenieria en Electrica</option>
                                                                  <option value="ISC">Ingenieria en Sistemas Computacionales</option>
                                                                  <option value="IC">Ingenieria Civil</option>
                                                                  <option value="LA">Licenciatura en Arquitectura</option>
                                                                  
                                                                </select>
                                                          </div>
                                                        </div>
                                                     <p>&nbsp;</p>
                                                     <div className="row">
                                                          <div className="col">
                                                            <input type="date" title="Fecha de nacimiento" className="form-control" id="d-Birthday" placeholder="Cumpleaños" name="email"/>
                                                          </div>
                                                          
                                                      </div>
                                                      <p>&nbsp;</p>
                                                      <div className="row">
                                                         
                                                           <div className="col">
                                                            <input type="date" title="Fecha de egreso" className="form-control"  name="d-egressdate"  />
                                                          </div>
                                                      </div>
                                                      <p>&nbsp;</p>
                                                     <form onSubmit={this.onSubmit}> 
                                                            <div className="row">
                                                              <div className="col">
                                                              <input type="file" accept=".jpg,.png" onChange={this.captureFile}/>
                                                              </div>
                                                              <div className="col">
                                                              <p>&nbsp;</p>
                                                              <input type="submit" />
                                                              </div>
                                                            </div>
                                                        <img src={`https://ipfs.infura.io/ipfs/${this.state.hash}`} className="img-fluid"  />
                                                      </form>

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
                            <ul style={{"-webkit-text-stroke":"px black"}} className="list-inline social-buttons">
                              <li className="list-inline-item">
                                <a href="#something">
                                  <i style={{"-webkit-text-stroke":".0px black"}} className="fa fa-twitter"></i>
                                </a>
                              </li>
                              <li className="list-inline-item">
                                <a href="#something">
                                  <i style={{"-webkit-text-stroke":"0px black"}} className="fa fa-facebook-f"></i>
                                </a>
                              </li>
                            
                            </ul>
                          </div>
                          <div className="col-md-4">
                            <ul className="list-inline quicklinks">
                              <li className="list-inline-item">
                                <a style={{"-webkit-text-stroke":"0px black","color":"#080808"}} href="#something">Privacy Policy</a>
                              </li>
                              <li className="list-inline-item">
                                <a style={{"-webkit-text-stroke":"0px black","color":"#080808"}}  href="#something">Terms of Use</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                   </footer>
           
         </div>
        );
    }
}export default  NewCertificado
