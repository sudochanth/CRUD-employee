import React from 'react';
import Employee from './Employee';
import './css/employeeList.scss';
import { withEmployees } from '../context/EmployeeProvider';

const EmployeeList = props => {
    return (
      <div className="employeeList">
          <div className="employeeHeader">
            <h3>Employee ID</h3> |
            <h3>First Name</h3> |
            <h3>Last Name</h3> |
            <h3>Email</h3> |
            <h3>Phone Number</h3> |
            <h3>Edit/Delete</h3>
          </div>
          
          { props.employees.map(employee =>
            <Employee {...employee} 
                      key={employee._id} 
                      // deleteEmployee={props.deleteEmployee}
                      // editEmployee={props.editEmployee} 
                      />
          )}
      </div>
    );
    
};

export default withEmployees(EmployeeList);


        // employees: [
        //   {
        //   employeeId: uuid(),
        //   firstName: 'jason',
        //   lastName: 'd',
        //   email: 'j@test.com',
        //   phoneNumber: '1234567'
        //   },
        //   {
        //   employeeId: uuid(),
        //   firstName: 'sunny',
        //   lastName: 'd',
        //   email: 's@test.com',
        //   phoneNumber: '1234567'
        //   },
        //   {
        //     employeeId: uuid(),
        //     firstName: 'penny',
        //     lastName: 'd',
        //     email: 'p@test.com',
        //     phoneNumber: '1234567'
        //     }