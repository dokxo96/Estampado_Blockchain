import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const StudentItem =props =>{

    return(
        <li>
            {props.student}
        </li>
    )
}
export default StudentItem ;