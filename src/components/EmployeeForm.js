import React from 'react';
import { withEmployees } from '../context/EmployeeProvider';
import './css/form.scss';

const EmployeeForm = (props) => {
  return (
    <div className="form-container">
      <form className='form' onSubmit={props.onButtonSubmit}>
        <input type="text"
               name="employeeId"
               value={props.employeeId}
               onChange={props.onHandleChange}
               placeholder="Employee ID"/>
        <input type="text"
               name="firstName"
               value={props.firstName}
               onChange={props.onHandleChange}
               placeholder="First Name" />
        <input type="text"
               name="lastName"
               value={props.lastName}
               onChange={props.onHandleChange}
               placeholder="Last Name" />
        <input type="email"
               name="email"
               value={props.email}
               onChange={props.onHandleChange}
               placeholder="Email"/>
        <input type="tel"
               name="phoneNumber"
               value={props.phoneNumber}
               onChange={props.onHandleChange}
               placeholder="Phone Number"/>
       <button className="btn btn-secondary">Submit</button>
      </form>
    </div>
  );
};

export default withEmployees(EmployeeForm);