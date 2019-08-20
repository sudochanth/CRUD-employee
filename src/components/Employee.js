import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm';

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

  onHandleChange = (e) => {
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
      <div>
        { !this.state.isToggled ?
        <div style={{border: '5px solid black'}}>
          <h1>{employeeId}</h1>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
          <h1>{email}</h1>
          <h1>{phoneNumber}</h1>
          <button onClick={this.toggler}>Edit</button>
          <button onClick={() => deleteEmployee(_id)}>Delete</button>
        </div>
        :
        <div>
          hello world
          <EmployeeForm 
            onHandleChange={this.onHandleChange}
            onButtonSubmit={this.onButtonSubmit}
            employeeId={this.state.employeeId}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            btnText='Update Employee' />
          <button onClick={this.toggler}>Close</button>
        </div>
        }
      </div>

    );
  }
} 

export default Employee;