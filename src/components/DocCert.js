import React, { Component,useRef } from 'react';
import Web3 from 'web3';
import '../App.css';
import Meme from '../abis/Meme.json'
import AuthService from '../Services/AuthService'
import CertService from '../Services/CertService'
import Button from 'react-bootstrap/Button'
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values

class DocCert extends Component {

  
  async componentWillMount() {
   
   
    await this.loadWeb3();
    await this.loadBlockchainData();
    this.setState({Hash:""})
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

  onChange = e =>{
    this.setState({...this.state,[e.target.name] : e.target.value});
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
      account: null,
      firstname:"",
      lastname:"",
      username:"",
      phone:"",
      institution:"",
      carrer:"",
      finish:"",
      title:"",
      address:"",
      id:"",
      hashIpfs:"",
      user:{
        id:"",
        title:"",
        hash:"",
        hashIpfs:""
      }
    }
  }
  saveToDB(){

  }
  //this is a method to capture a file 
  captureFile = (event) => {

/*
    const value = window.web3.utils.toWei('0.00022', 'ether');    //invest
    const to = "0x9F4152a30cb683aD284dff6629E809B80Ff555C1";
    const payload ={
      to,
      from:this.state.account,
      value
    };
    window.web3.eth.sendTransaction(payload, (error, response)=>{
      if (error)return;
       
        console.log("TX:"+response +"\n Se pago comisión");
       
      
      return response;
    })*/
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
     // console.log('buffer', this.state.buffer)



      ipfs.add(this.state.buffer, (error, result) => {
        console.log('Ipfs result', result)
        if(error) {
          console.error(error)
          return
        }//blockchain method to add y and ge4t the ipfs hash
        this.setState({ hashIpfs: result[0].hash })
       
        fetch('http://localhost:5000/user/getcert/'+this.state.hashIpfs)
        .then(response =>  {

          if(response.status==200) {
            
            console.log(response)
           
          //ipfs method
              this.state.contract.methods.set("https://ipfs.infura.io/ipfs/"+this.state.hashIpfs).send({ from: this.state.account }).then((r) => {
                console.log("resulta ",r.transactionHash)
                 

              this.setState({ Hash: r.transactionHash})  
              this.setState({
                  user:
                  {
                     
                    title:this.state.hashIpfs,
                    hash:this.state.Hash,
                    hashIpfs:this.state.hashIpfs

                   }
                 });  
                 console.log("usedatacer",this.state.user)

                 //se estampo el doc ahora se va a guardar en bd


                            //this method save the title,the hash to the id user
                            AuthService.regnewcertbyid(this.state.user).then(data=>{
                              console.log("se insertor \n" +data)
                               

                            
                            /* this.setState(message=message);
                              if(!message.msgError){
                                timerID = setTimeout(()=>{
                                  this.props.history.push('/student-list');
                                },8000)
                              console.log("se añadio")
                                }}*/
                            }
                            );

              return console.log(r)
              })

            return;
          }
          else{
            console.log("El Archivo ya existe ...")
           }
         
        })
         
        
      })
    }
  }

 

    render() {
      
        return (
          <div>
                 
                <header className="masthead2" >
                    <div className="container">
                        <div className="intro-text" >
                        
                               <div className="row">
                                 <div className="col">
                                      <div className="auth-wrapper">
                                            <div className="auth-inner">
                                            <form onSubmit={this.onSubmit} >
                                                      <h3>Registrar nuevo Documento</h3>
                                                      <label htmlFor="title" className="sr-only">Titulo: </label>
                                                    
                                                 
                                                   
                                                    <div className="row">
                                                              <div className="col">
                                                              <input   type="file" accept=".jpg,.png,.pdf" onChange={this.captureFile}/>
                                                              </div>
                                                              <div className="col">
                                                              <p>&nbsp;</p>
                                                          
                                                              </div>
                                                            </div>
                                                        <img src={`https://ipfs.infura.io/ipfs/${this.state.Hash}`} 
                                                        className="img-fluid"
                                                        style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}    />
                                                  
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
}export default  DocCert
