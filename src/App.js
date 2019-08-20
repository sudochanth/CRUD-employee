import React, {Component} from 'react';
import axios from 'axios';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      employees: [],
      employeeId: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    }
  }

  componentDidMount() {
    axios.get('/employees')
      .then(response => {
        this.setState({
          employees: response.data
        })
      })
      .catch(err => console.log(err))
  }

  onHandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
    
    
  onButtonSubmit = (e) => {
    e.preventDefault();
    const { employeeId, firstName, lastName, email, phoneNumber } = this.state;
    const newEmployee = { employeeId, firstName, lastName, email, phoneNumber };
    axios.post('/employees', newEmployee)
      .then(response => {
        this.setState(prevState => {
          return {
            employees: [response.data, ...prevState.employees],
            
          }
        })
      })
      .catch(err => console.log(err + 'this is error post req'))

    this.setState({
      employeeId: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    })
    console.log(this.state)
  }

  deleteEmployee = _id => {
    axios.delete(`/employees/${_id}`).then(response => {
      this.setState(prevState => ({
          employees: prevState.employees.filter(employee => employee._id !== _id)
      }))
    })
    .catch(err => console.log(err))
  }

  editEmployee = (_id, updates) => {
    axios.put(`/employees/${_id}`, updates)
    .then(response => {
      const updatedEmployee = response.data;
      this.setState(prevState => ({
          employees: prevState.employees.map(employee => employee._id === _id ? updatedEmployee : employee)
      }))
      console.log(this.state)
    })
    .catch(err => console.log(err))
  } 

  render() {
    return (
      <div>
        CRUD Employee
        <EmployeeForm 
          onHandleChange={this.onHandleChange}
          onButtonSubmit={this.onButtonSubmit}
          employeeId={this.state.employeeId}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          btnText='Add Employee' />
        <EmployeeList 
          employees={this.state.employees}
          deleteEmployee={this.deleteEmployee}
          editEmployee={this.editEmployee} />
      </div>
    );
  }
};

export default App;