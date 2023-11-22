import React, { Component } from 'react';
import { useNavigate} from 'react-router-dom';
import EmployeeService from '../services/AppointmentService';
import AppointmentService from '../services/AppointmentService';

class ListAppointmentComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    
  }

  componentDidMount() {
    AppointmentService.getAppointments().then((res) => {
      this.setState({employees: res.data});
    });

    AppointmentService.createAppointment();
  }

 

  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className='row'>
          {/* <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button> */}
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee Task</th>
                <th>Employee Branch</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.employees.map(
                  employee =>
                    <tr key={employee.appointmentId}>
                      <td>{employee.state}</td>
                      <td>{employee.customer.name}</td>
                      <td>{employee.employee.name}</td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListAppointmentComponent;
