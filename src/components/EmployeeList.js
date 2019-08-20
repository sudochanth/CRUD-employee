import React from 'react';
import Employee from './Employee';
// import uuid from 'uuid';

const EmployeeList = props => {
    return (
      <div>
        { props.employees.map(employee =>
          <Employee {...employee} 
                    key={employee._id} 
                    deleteEmployee={props.deleteEmployee}
                    editEmployee={props.editEmployee} />
        )}
      </div>
    );
    
};

export default EmployeeList;


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