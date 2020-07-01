import React, { Component } from 'react';
import Web3 from 'web3';
import '../App.css';
import Meme from '../abis/Meme.json'

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class Register_cert extends Component {

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
      const memeHash = await contract.methods.get().call()
      this.setState({ memeHash })
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      memeHash: '',
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
      const memeHash =result[0].hash
      if(error) {
        console.error(error)
        return
      }
    

       this.state.contract.methods.set(result[0].hash).send({ from: this.state.account }).then((r) => {
         return this.setState({ memeHash: result[0].hash })
       })
      document.getElementById('email').value="";
      document.getElementById('name').value="";
      document.getElementById('lastname').value="";
      document.getElementById('phone').value="";
    })
  }

  render() {
    return (
      <div>
    
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
            
              <div className="content mr-auto ml-auto"> 
              <p>&nbsp;</p>
              <h1>Información básica</h1>
              <p>&nbsp;</p>
              <form>
                    <div class="row">
                      <div class="col">
                        <input type="text" class="form-control" id="name" placeholder="Nombres" name="names"/>
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" id="lastname"placeholder="Apellidos" name="lastnames"/>
                      </div>
                    </div>

              </form>
              <p>&nbsp;</p>
              <form>
                    <div class="row">
                      <div class="col">
                        <input type="email" class="form-control" id="email" placeholder="Correo" name="email"/>
                      </div>
                      <div class="col">
                        <input type="tel" class="form-control" id="phone" placeholder="Telefono" name="phone"  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                          required/>
                      </div>
                    </div>

              </form>
             <p>&nbsp;</p>
             <form>
                    <div class="row">
                      <div class="col">
                        <input type="date" title="Fecha de nacimiento" class="form-control" id="d-Birthday" placeholder="Cumpleaños" name="email"/>
                      </div>
                      <div class="col">
                        <input type="date" title="Fecha de egreso" class="form-control"  name="d-egressdate"  />
                      </div>
                    </div>

              </form>
             <p>&nbsp;</p>
             <form>
                    <div class="row">
                      <div class="col">
                         <select name="Institution" class="custom-select mb-3">
                              <option selected>Institucion...</option>
                              <option value="volvo">ITT</option>
                              <option value="fiat">UAN</option>
                              <option value="audi">UT</option>
                            </select>
                      </div>
                      <div class="col">
                      <select name="Career" class="custom-select mb-3">
                              <option selected>Carrera...</option>
                              <option value="IGE">Ingenieria en Gestion Empresarial</option>
                              <option value="IE">Ingenieria en Electrica</option>
                              <option value="ISC">Ingenieria en Sistemas Computacionales</option>
                              <option value="IC">Ingenieria Civil</option>
                              <option value="LA">Licenciatura en Arquitectura</option>
                              
                            </select>
                      </div>
                    </div>

              </form>
             <p>&nbsp;</p>
                  
              <form onSubmit={this.onSubmit}> 
                    <div class="row">
                      <div class="col">
                      <input type="file"  accept=".jpg,.png" onChange={this.captureFile}/>
                      </div>
                      <div class="col">
                      <input type="submit" value="Registrar"/>
                      </div>
                     </div>
                     <p>&nbsp;</p>
                     <p>&nbsp;</p>
                     <img src={`https://ipfs.infura.io/ipfs/${this.state.memeHash}`} width="350px" height="450px"/>
                      
              </form>

               <a>{`https://ipfs.infura.io/ipfs/${this.state.memeHash}`}</a>
             </div>
               
            </main>
          </div>
        </div>




      </div>
    );
  }
}

export default Register_cert;
