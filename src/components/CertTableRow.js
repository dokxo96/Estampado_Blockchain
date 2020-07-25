import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AuthService from "../Services/AuthService";
import AuthContext from '../Context/AuthContext';

//var React = require('react');
var QRCode = require('qrcode.react');

export default class CertTableRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="card col-3 m-2">
                    <div className="d-flex justify-content-center">
                        <QRCode value={`https://ipfs.infura.io/ipfs/${this.props.obj.hash}`} 
                            level='H' includeMargin size='150' />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.obj.title}</h4>
                        <p className="card-text"> Aquí podremos poner más información.. </p>
                        <p href="#!" className="">Descargar</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}