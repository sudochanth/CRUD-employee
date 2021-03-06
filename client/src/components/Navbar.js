import React from 'react';
// import { Link } from 'react-router-dom';
import './css/navbar.scss';

const Navbar = ({ visibleToggle }) => {
  return (
    <div className="navbar">
      <a href='#employeeList'>View Employees</a>
      <a href='#employeeForm' onClick={visibleToggle}>Create Employee</a>
    </div>
  );
};

export default Navbar;