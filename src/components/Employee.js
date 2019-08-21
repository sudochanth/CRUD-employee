import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm';
import { withEmployees } from '../context/EmployeeProvider';

import './css/employee.scss';

class Employee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggled: false,
      employeeId: props.employeeId,
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      phoneNumber: props.phoneNumber
    }
  }

  toggler = () => {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }))
  }

  onEmployeeChange = (e) => {
    console.log('employee change')
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onButtonSubmit = (e) => {
    e.preventDefault();
    const updates = {
      employeeId: this.state.employeeId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber
    };
    this.props.editEmployee(this.props._id, updates);
    this.toggler();
  }

  render() {
    const { employeeId, firstName, lastName, email, phoneNumber, _id, deleteEmployee } = this.props
    return (
      <div className='employee'>
        { !this.state.isToggled ?
          <div className='table'>
            <p>{employeeId}</p>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <p><button className="btn btn-edit" onClick={this.toggler}>Edit</button>
            <button className="btn btn-delete" onClick={() => deleteEmployee(_id)}>Delete</button></p>
          </div>
        :
        <div>
          <EmployeeForm 
            onHandleChange={this.onEmployeechange}
            onButtonSubmit={this.onButtonSubmit}
            employeeId={this.state.employeeId}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            btnText='Update Employee' />
          <button className="btn" onClick={this.toggler}>Close</button>
        </div>
        }
      </div>
    );
  }
} 

export default withEmployees(Employee);