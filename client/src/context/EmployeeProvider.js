import React, {Component} from 'react';
import axios from 'axios';

const EmployeeContext = React.createContext();

class EmployeeProvider extends Component {
  constructor() {
    super()
    this.state = {
      employees: [],
      employeeId: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      isToggled: false
    }
  }

  componentDidMount() {
    this.getEmployees();
  }

  onHandleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggler = () => {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }))
  }

  // onButtonSubmit = (e) => {
  //   e.preventDefault();
  //   const updates = {
  //     employeeId: this.state.employeeId,
  //     firstName: this.state.firstName,
  //     lastName: this.state.lastName,
  //     email: this.state.email,
  //     phoneNumber: this.state.phoneNumber
  //   };
  //   this.props.editEmployee(this.props._id, updates);
  //   this.toggler();
  // }
    
  onButtonSubmit = (e,) => {
    e.preventDefault();
    // this.addEmployee(this.state);
    this.setState({
      employeeId: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    })
    // alert('New Employee Created!')
  }

  getEmployees = () => {
    axios.get('/employees')
      .then(response => {
        this.setState({
          employees: response.data
        })
      })
      .catch(err => console.log(err))
  }

  addEmployee = inputs => {
    const { employeeId, firstName, lastName, email, phoneNumber } = inputs;
    const newEmployee = { employeeId, firstName, lastName, email, phoneNumber };
    axios.post('/employees', newEmployee)
      .then(response => {
        this.setState(prevState => {
          return {
            employees: [response.data, ...prevState.employees]          
          }
        })
      })
      .catch(err => console.log(err))
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
    })
    .catch(err => console.log(err))
  } 

  render() {
    return (
      <EmployeeContext.Provider 
        value={{
          btnText: this.state.btnText,
          employees: this.state.employees,
          getEmployees: this.getEmployees,
          addEmployee: this.addEmployee,
          deleteEmployee: this.deleteEmployee,
          editEmployee: this.editEmployee,
          onButtonSubmit: this.onButtonSubmit,
          onHandleChange: this.onHandleChange,
          toggler: this.toggler
        }}>
        { this.props.children }
      </EmployeeContext.Provider>
    )
  }
}

export const withEmployees = C => props => (
  <EmployeeContext.Consumer>
    {value => <C {...props} {...value} />}
  </EmployeeContext.Consumer>
)

export default EmployeeProvider;