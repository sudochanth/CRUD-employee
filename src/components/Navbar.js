import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="link" to='/'>View Employees</Link>
      <Link className="link" to='/createnew'>Create Employee</Link>
    </div>
  );
};

export default Navbar;