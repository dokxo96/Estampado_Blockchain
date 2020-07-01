import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>
                <h2 color="blue" >Entrar</h2>

                <div className="form-group">
                   
                    <input type="email" className="form-control" placeholder="Correo" />
                </div>

                <div className="form-group">
                 
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Recuerdame</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-success btn-block">Entrar</button>
                
                     <a href="#">¿Olvidaste la contraseña?</a>
                
            </form>
        );
    }
}