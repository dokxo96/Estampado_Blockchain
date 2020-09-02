import React, { Component, useState,useEffect,useRef } from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import AuthService from '../Services/AuthService';

const NewCert = props => {

    const [cert, setNewCert] = useState({title: "", file: null});
    let timerID = useRef(null);

    const onChange = e =>{
        setNewCert({...cert, [e.target.name] : e.target.value});
    }

    const resetForm = ()=>{ 
        setNewCert({
            title: "",
            file: null});
    }

    const onSubmit = e =>{
        e.preventDefault();
        AuthService.solCert(cert).then(data=>{
            const { message } = data;
            resetForm();
            /*if(!message.msgError){
                timerID = setTimeout(()=>{
                    //props.history.push('/student-list');
                },2000)
            }*/
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
                                            <h3>Registrar nuevo titulo</h3>
                                            <label htmlFor="title" className="sr-only">Titulo: </label>
                                            <input 
                                                type="text" 
                                                name="title"
                                                onChange={onChange} 
                                                className="form-control" 
                                                placeholder="Titulo:"
                                                style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                            />
                                                    
                                            <label htmlFor="file" className="sr-only">Archivo: </label>
                                            <input type="file" 
                                                name="file"
                                                onChange={onChange} 
                                                className="form-control" 
                                                placeholder="Archivo de titulo:"
                                                style={{"WebkitTextStroke":".1px black","margin":"10px 0px 6px 0px"}}
                                            />
                                            
                                            <Button 
                                                style={{"WebkitTextStroke":"0px black","margin":"10px 0px 6px 0px"}} 
                                                type="submit">
                                                    Registrar
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );

}
export default  NewCert;