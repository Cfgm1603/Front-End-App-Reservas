import React, { Component, Redirect } from "react";
import { Link } from "react-router-dom";
import AppointmentService from "../services/AppointmentService";

export default class CreateAppointmentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: "Active",
      employeeId: "",
      date: "",
      startTime: "",
      endTime: "",
      customerId: "1",
      taskId: "",
      appointments: []
    };
  }

  saveAppointment = (e) => {
    e.preventDefault();
    let appointment = {
      state: "Active",
      employeeId: this.state.employeeId,
      date: this.state.date,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      customerId: 1,
      taskId: this.state.taskId
    };

    AppointmentService.createAppointment(appointment);
  };

  searchAvailability = async (e) => {
    e.preventDefault();
  
    let date = this.state.date;
    let taskId = this.state.taskId;
  
    try {
      let available = await AppointmentService.getAppointmentsAvailableByTaskAndDate(
        taskId,
        date
      );
  
      console.log('Available appointments:', available); // Check the fetched data
  
      // Update the state after receiving the response
      this.setState({ appointments: available }, () => {
        console.log('Appointments state updated:', this.state.appointments); // Check the state after update
      });
    } catch (error) {
      console.error('Error fetching appointments:', error);
    }
  };

  

  changeTypeHandlerTask = (event) => {
    this.setState({ taskId: event.target.value });
  };

  changeTypeHandlerEmployer = (event) => {
    this.setState({ employeeId: event.target.value });
  };

  changeTypeHandlerDate = (event) => {
    this.setState({ date: event.target.value });
  };

  changeTypeHandlerStartTime = (event) => {
    this.setState({ startTime: event.target.value });
  };

  changeTypeHandlerEndTime = (event) => {
    this.setState({ endTime: event.target.value });
  };

  render() {
    console.log('Appointments:', this.state.appointments);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Make an appointment</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Appointment task ID</label>
                    <input
                      placeholder="Appointment type ID"
                      name="taskId"
                      className="form-control"
                      value={this.state.taskId}
                      onChange={this.changeTypeHandlerTask}
                    />
                  </div>
                  <div className="form-group">
                    <label>Employeer ID</label>
                    <input
                      placeholder="Employeer ID"
                      name="employeeId"
                      className="form-control"
                      value={this.state.employeeId}
                      onChange={this.changeTypeHandlerEmployer}
                    />
                  </div>
                  <div className="form-group">
                    <label>Date (with the "-")</label>
                    <input
                      placeholder="yyyy-mm-dd"
                      name="date"
                      className="form-control"
                      value={this.state.date}
                      onChange={this.changeTypeHandlerDate}
                    />
                  </div>
                  <div className="form-group">
                    <label>Start hour</label>
                    <input
                      placeholder="hh:mm:ss"
                      name="startTime"
                      className="form-control"
                      value={this.state.startTime}
                      onChange={this.changeTypeHandlerStartTime}
                    />
                  </div>
                  <div className="form-group">
                    <label>End hour</label>
                    <input
                      placeholder="hh:mm:ss"
                      name="endTime"
                      className="form-control"
                      value={this.state.endTime}
                      onChange={this.changeTypeHandlerEndTime}
                    />
                  </div>
                  <Link to="/">
                    <button
                      className="btn btn-success"
                      onClick={this.saveAppointment}
                    >
                      Save
                    </button>
                  </Link>

                  <Link to="/">
                    <button className="btn btn-danger">Cancel</button>
                  </Link>
                  <button
                    className="btn btn-success"
                    onClick={this.searchAvailability}
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div>
          <h2 className="text-center">Available Appointments</h2>
            
          </div>
        </div>
        <div className="row">
            <table className="table table-striped table-bordered">
            <thead>
          <tr>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>State</th>
            <th>Customer ID</th>
            <th>Task ID</th>
            <th>Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {this.state.appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{appointment.date}</td>
              <td>{appointment.startTime}</td>
              <td>{appointment.endTime}</td>
              <td>{appointment.state}</td>
              <td>{appointment.customerId}</td>
              <td>{appointment.taskId}</td>
              <td>{appointment.employeeId}</td>
            </tr>
          ))}
        </tbody>
            </table>
            </div>
      </div>
    );
  }
}
