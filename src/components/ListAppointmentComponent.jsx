import React, { Component } from 'react';
import { useNavigate} from 'react-router-dom';
import EmployeeService from '../services/AppointmentService';
import AppointmentService from '../services/AppointmentService';

class ListAppointmentComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
    };
    
  }

  componentDidMount() {
    AppointmentService.getAppointments().then((res) => {
      this.setState({appointments: res.data});
    });

    AppointmentService.createAppointment();
  }

 

  render() {
    return (
      <div>
        <h2 className="text-center">Appointment List</h2>
        <div className='row'>
          {/* <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button> */}
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Appointment type</th>
                <th>Client Name</th>
                <th>Employeer Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.appointments.map(
                  appointment =>
                    <tr key={appointment.appointmentId}>
                      <td>{appointment.task.name}</td>
                      <td>{appointment.customer.name}</td>
                      <td>{appointment.employee.name}</td>
                      <td>{appointment.task.price}</td>
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
