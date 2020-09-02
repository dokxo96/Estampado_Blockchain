import React, { Component } from "react";
import Table from 'react-bootstrap/Table';
import CheckCertsRow from './CheckCertsRow';
import AuthService from "../Services/AuthService";

export default class CheckCertsTable extends Component {

    constructor(props) {
        super(props)
        this.state = {
            certs: {}
        };
    }

    componentDidMount() {

        AuthService.getSolCert()
            .then(res => {
                this.setState({
                    certs: res
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    DataTable() {
        let array = Object.entries(this.state.certs);
        return array.map((res, i) => {
            return <CheckCertsRow obj={res} key={i} />;
        });
    }
 

    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Archivo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.DataTable()}
                    </tbody>
                </Table>
            </div>);
        }
    }                          
