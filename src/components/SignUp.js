import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Registrate</h3>

                <div className="form-group">
                   
                    <input type="text" className="form-control" placeholder="Nombres" />
                </div>

                <div className="form-group">
                   
                    <input type="text" className="form-control" placeholder="Apellidos" />
                </div>

                <div className="form-group">
                   
                    <input type="email" className="form-control" placeholder="Correo" />
                </div>

                <div className="form-group">
                    
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>

                <button type="submit" className="btn btn-success btn-block">Enviar</button>
                
                     <a href="#javascript:location.reload()">¿Ya estas registrado? Ingresa ahora!</a>
                
            </form>
        );
    }
}