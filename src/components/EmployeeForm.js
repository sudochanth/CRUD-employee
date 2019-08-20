import React from 'react';

const EmployeeForm = 
	({ employeeId, firstName, lastName, email, phoneNumber, onHandleChange, onButtonSubmit, btnText }) => {
  return (
    <div>
      <form onSubmit={onButtonSubmit}>
        <input type="text"
               name="employeeId"
               value={employeeId}
               onChange={onHandleChange}
               placeholder="Employee ID"/>
        <input type="text"
               name="firstName"
               value={firstName}
               onChange={onHandleChange}
               placeholder="First Name" />
        <input type="text"
               name="lastName"
               value={lastName}
               onChange={onHandleChange}
               placeholder="Last Name" />
        <input type="email"
               name="email"
               value={email}
               onChange={onHandleChange}
               placeholder="Email"/>
        <input type="tel"
               name="phoneNumber"
               value={phoneNumber}
               onChange={onHandleChange}
               placeholder="Phone Number"/>
       <button>{btnText}</button>
      </form>
    </div>
  );
};

export default EmployeeForm;