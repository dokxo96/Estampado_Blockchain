import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import CertTableRow from './CertTableRow';
import CertService from "../Services/CertService";
import AuthContexts from '../Context/AuthContext'
import { Redirect } from "react-router";

export default class CertList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cert: {}
        };
    }

    componentDidMount() {
        CertService.getCerts().then(res => {
            this.setState({
                cert: res
            });
        }).catch((error) => {
            console.error(error);
        });
    }
  
    DataTable() {
        let myObject = this.state.cert;
        let arrayData = [];
        let arrayMyObject = Object.values(myObject);
        //console.log(arrayMyObject);
        for (var [key, value] of Object.entries(arrayMyObject)) {
            //console.log("key: "+key + ' value: ' + value);
            if( key == 0 ){
                value.map( function(res, i) {
                    //console.log("i: "+i + ' res: ' + Object.entries(res));
                    arrayData.push([i, res]);
                });
            }
        }

        //console.log(this.state.cert[0]);
        return arrayData.map( function(res, i) {
                return <CertTableRow obj={res[1]} key={res[0]} />;
            }
        );
    }
   
    render() {
        return (
            <div className="container">
                <div className="table-wrapper mt-3">
                    <div className="row justify-content-center">
                        {this.DataTable()}
                    </div>
                </div>
            </div>
        );
    }
}
  