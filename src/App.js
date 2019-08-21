import React, {Component} from 'react';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import { withEmployees } from './context/EmployeeProvider';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // employeeId: '',
      // firstName: '',
      // lastName: '',
      // email: '',
      // phoneNumber: ''
    }
  }

  // onHandleChange = (e) => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }
    
  // onButtonSubmit = (e) => {
  //   e.preventDefault();
  //   this.props.addEmployee(this.state);
  //   this.setState({
  //     employeeId: '',
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phoneNumber: ''
  //   })
  // }

  render() {
    return (
      <div className="background">
        <Navbar />
        <Switch>
          <Route exact path='/' component={EmployeeList} 
          />
          <Route path='/createnew' component={EmployeeForm} />
        </Switch>
      </div>
    );
  }
};

export default withEmployees(App);

// () =>
//             <EmployeeForm 
//               key={'82384883'}
//               onHandleChange={this.onHandleChange}
//               onButtonSubmit={this.onButtonSubmit}
//               employeeId={this.state.employeeId}
//               firstName={this.state.firstName}
//               lastName={this.state.lastName}
//               email={this.state.email}
//               phoneNumber={this.state.phoneNumber}
//               btnText='Add Employee' /> 