import React, { Component } from "react";

export default class CreateAppointmentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "Active",
      customer: "",
      employee: "",
      price: "",
      type: "",
    };
  }

  changeTypeHandlerTask = (event) => {
    this.setState({type: event.target.value});
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
                                  <input placeholder="Employeer ID" name="customer" className="form-control" value={this.state.task} onChange={this.changeTypeHandlerEmployer}/>
                              </div>
                              <div className="form-group">
                                  <label>Date (with the "-")</label>
                                  <input placeholder="yyyy-mm-dd" name="employee" className="form-control"/>
                              </div>
                              <div className="form-group">
                                  <label>Price</label>
                                  <input placeholder="Price" name="price" className="form-control"/>
                              </div>
                              <button className="btn btn-success" >Save</button>
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
