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
                        <QRCode id={`QRCode${this.props.obj.hash}`} value={`https://ipfs.infura.io/ipfs/${this.props.obj.hash}`} 
                            level='H' includeMargin size={150} renderAs='canvas' />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.obj.title}</h4>
                        <p className="card-text"> Aquí podremos poner más información.. </p>
                        <Button onClick={ () => this.downloadQR(`QRCode${this.props.obj.hash}`, this.props.obj.title)}> 
                            Descargar QR
                        </Button>
                    </div>
                </div>
            </React.Fragment>
        );
    };
    
    downloadQR(id, titulo) {
        const canvas = document.getElementById(id);
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        let downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = titulo+".png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    }
}