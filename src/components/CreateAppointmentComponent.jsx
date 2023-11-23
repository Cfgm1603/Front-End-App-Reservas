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
  }
  changeTypeHandlerTask = (event) => {
    this.setState({ taskId: event.target.value });
  }

  changeTypeHandlerEmployer = (event) => {
    this.setState({ employeeId: event.target.value });
  }

  changeTypeHandlerDate = (event) => {
    this.setState({ date: event.target.value });
  }

  changeTypeHandlerStartTime = (event) => {
    this.setState({ startTime: event.target.value });
  }

  changeTypeHandlerEndTime = (event) => {
    this.setState({ endTime: event.target.value });
  } 

  render() {
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
                          <button className="btn btn-success" onClick={this.saveAppointment}>Save</button>
                  </Link>
                  
                  <Link to="/">
                    <button className="btn btn-danger">Cancel</button>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
