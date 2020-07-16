import React, { Component, useState, useContext, useEffect } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import StudentTableRow from './StudentTableRow';
import TodoService from '../Services/TodoService';
import {AuthContext} from '../Context/AuthContext';

const StudentList = props => {

  const [student,setStudent] =useState({firstname :""});
  const [students,setStudents] =useState([]);
  const authContext =useContext(AuthContext);
  
  useEffect(()=>{
      TodoService.getStudens().then(data=>{
          setStudents(data.todos);
      });
     
  },[]);

  
  return(
    <div>
      <ul className="list-group">
        {
         /* students.map(student=>{
              return <StudentTableRow key={student._id} student={student}/>
          })*/
        }
      </ul>
    </div>
  );


 /**  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }





    return (<div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
*/
  }

export default StudentList;