import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AuthService from "../Services/AuthService";
import AuthContext from '../Context/AuthContext';
export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
       AuthService.deleteStudent(this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.firstname}</td>
                <td>{this.props.obj.lastname}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.phone}</td>
                <td>{this.props.obj.institution}</td>
                <td>{this.props.obj.carrer}</td>
                <td>{this.props.obj.finish}</td>
                <td>
                    <Link className="edit-link" to={"/edit-student/" + this.props.obj._id}>
                    <Button  size="sm" bg-color="white" variant="warning">Editar</Button>
                    </Link>
                    <Button onClick={this.deleteStudent} size="sm" variant="danger">Eliminar</Button>
                </td>
            </tr>
        );
    }
}