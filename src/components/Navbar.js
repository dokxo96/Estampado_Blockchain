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
              <h6 style={{"WebkitTextStroke":"0px black"}}className="nav-item nav-link ">Inicio</h6>    
          </Link>
          <Link to='#blockchain'>
               <h6 style={{"WebkitTextStroke":"0px black"}} className="nav-item nav-link ">Blockchain</h6>
          </Link>
          <Link to='#ventajas'>
                <h6 style={{"WebkitTextStroke":"0px black"}}className="nav-item nav-link ">Ventajas</h6> 
          </Link>
         
          
          </>
        )
      }
      const authenticatedNavBar=()=>{
        return(
          <>
         
                  <Link to='/MiInfor'>
                        <h6 style={{"WebkitTextStroke":"0px black"}}className="nav-item nav-link ">Mi información</h6>     
                  </Link>
                  {
                    user.role==="user" ?
                    <Link to='/Mititulo'>
                       <h6 style={{"WebkitTextStroke":"0px black"}}  className="nav-item nav-link ">Ver titulo</h6>     
   
                    </Link>:null
                  }
                 
                  {
                    user.role==="admin" ?
                    <Link to='/Certs'>
                       <h6 style={{"WebkitTextStroke":"0px black"}}  className="nav-item nav-link ">Certificados</h6>     
   
                    </Link>:null
                  }
                  {
                    user.role==="admin" ?
                    <Link to='/newStudent'>
                       <h6 style={{"WebkitTextStroke":"0px black"}}  className="nav-item nav-link ">Nuevo alumno</h6>     
   
                    </Link>:null
                  }
                  {
                    user.role==="admin" ?
                    <Link to='/student-list'>
                       <h6 style={{"WebkitTextStroke":"0px black"}}  className="nav-item nav-link ">Lista alumnos</h6>     
   
                    </Link>:null
                  } {
                    user.role==="admin" ?
                    <Link to='/DocCert'>
                       <h6 style={{"WebkitTextStroke":"0px black"}}  className="nav-item nav-link ">Doc-Cert</h6>     
   
                    </Link>:null
                  }
                   {
                    user.role==="SU" ?
                    <Link to='/regAdmins'>
                       <h6 style={{"WebkitTextStroke":"0px black"}}  className="nav-item nav-link ">Adminstradores</h6>     
   
                    </Link>:null
                  }
                  <Link to='/'>
                        <h6 style={{"WebkitTextStroke":"0px black"}} onClick={onClickLogoutHandler} className="nav-item nav-link ">Salir</h6>     
                  </Link>
             
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
  