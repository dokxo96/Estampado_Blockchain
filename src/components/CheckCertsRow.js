import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import AuthService from "../Services/AuthService";
export default class CheckCertsRow extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj[1].title}</td>
                <td>{/*this.props.obj[1].file*/}FILE</td>
            </tr>
        );
    }
}