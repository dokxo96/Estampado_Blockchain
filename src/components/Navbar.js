import React, { Component,useContext } from "react";
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService'
import {AuthContext} from '../Context/AuthContext'
import '../App.css';
import logo from '../../src/assets/img/Sep-bgremove.png'

const Navbar = props =>{

      const {isAuthenticated,user,setIsAuthenticated,setUser}  =useContext (AuthContext);
      
      const onClickLogoutHandler = () =>{
        AuthService.logout().then(data =>{
          if(data.success){
            setUser(data.user);
            setIsAuthenticated(false);
          }
        })
      }
      const unauthenticatedNavBar=()=>{
        return(
          <>
           <Link to='/'>
              <li style={{ color: 'white' }}  className="nav-item nav-link js-scroll-trigger">
                   Inicio 
              </li>     
          </Link>
          <Link to='#blockchain'>
              <li  style={{ color: 'white' }}className="nav-item nav-link js-scroll-trigger">
                   Blockchain 
              </li>     
          </Link>
          <Link to='#ventajas'>
              <li style={{ color: 'white' }} className="nav-item nav-link js-scroll-trigger">
                   Ventajas 
              </li>     
          </Link>
         
          <Link to='/login'>
              <li style={{ color: 'white' }} className="nav-item nav-link js-scroll-trigger">
                   Entrar 
              </li>     
          </Link>
          
          </>
        )
      }
      const authenticatedNavBar=()=>{
        return(
          <>
         
                  <Link to='/solicitudes'>
                      <li style={{ color: 'white' }} className="nav-item nav-link js-scroll-trigger">
                          Solicitudes 
                      </li>     
                  </Link>
                  <Link to='/certificados'>
                      <li style={{ color: 'white' }} className="nav-item nav-link js-scroll-trigger">
                          Certificados 
                      </li>     
                  </Link>
                  
                  {
                    user.rol==="admin" ?
                    <Link to='/regnewCert'>
                      <li style={{ color: 'white' }} className="nav-item nav-link js-scroll-trigger">
                          Salir 
                      </li>     
                    </Link>:null
                  }
                  <button type="button" className="btn btn-link nav-item nav-link js-scroll-trigger" onClick={onClickLogoutHandler} >Salir</button>
          
          </>
        )
      }

      
      return(
        <nav className="navbar navbar-expand-lg   " id="mainNav">
              <div className="container">
                <Link to='/'>
                     <img className="mediana" src={logo} alt="" />
                </Link>
                     
                 
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav text-uppercase ml-auto">
                    {!isAuthenticated ? unauthenticatedNavBar(): authenticatedNavBar()}      
                  </ul>
                </div>
              </div>
          </nav>

      )  
}
export default  Navbar ;
  