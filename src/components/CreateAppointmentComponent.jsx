import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/AppointmentService";
import AppointmentService from "../services/AppointmentService";
import { Link } from "react-router-dom";

export default class CreateAppointmentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "Active",
      customer: "",
      employee: "",
      price: "",
      type: "",
      available_appointments: []
    };

    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }

  handleSearchButtonClick() {
    console.log("search button clicked");
    // AppointmentService.getAvailableAppointments()
  }

  changeTypeHandlerTask = (event) => {
    this.setState({task: event.target.value});
  }

  changeTypeHandlerEmployer = (event) => {
    this.setState({type: event.target.value});
  }
  render() {
    return(
      <div>
            <div className="container">

                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                      <h3 className="text-center">Make an appointment</h3>
                      <div className="card-body">
                          <form>
                              <div className="form-group">
                                  <label>Appointment task ID</label>
                                  <input placeholder="Appointment type ID" name="task" className="form-control" value={this.state.task} onChange={this.changeTypeHandlerTask}/>
                              </div>
                              <div className="form-group">
                                  <label>Employeer ID</label>
                                  <select
                                    name="task"
                                    className="form-control"
                                    value={this.state.task}
                                    onChange={this.changeTypeHandlerTask}
                                  >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                    <option value="Pending">Pending</option>
                                  </select>
                              </div>
                              <div className="form-group">
                                  <label>Date (with the "-")</label>
                                  <input placeholder="yyyy-mm-dd" name="employee" className="form-control"/>
                              </div>
                              <div className="form-group">
                                  <label>Price</label>
                                  <input placeholder="Price" name="price" className="form-control"/>
                              </div>
                              <button className="btn btn-success" onClick={this.handleSearchButtonClick}>Search</button>
                              <button className="btn btn-danger" >Cancel</button>
                          </form> 


                    </div>
                </div>
                
                </div>
            </div>
      </div>
    );
  }
}
