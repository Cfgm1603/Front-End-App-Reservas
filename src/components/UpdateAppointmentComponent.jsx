import React, { Component } from "react";

export default class CreateAppointmentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: "123",
            date: "",
            startTime: "",
            endTime: "",
        };
    }

    handleChange = (event, field) => {
        this.setState({ [field]: event.target.value });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update an Appointment</h3>
                            <div className="card-body">
                                <h5 className="text-center">Remember that the hour is managed in Military hour.</h5>
                                <form>
                                    <div className="form-group">
                                        <label>ID:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.id}
                                            readOnly
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Date (with the "-"):</label>
                                        <input
                                            type="text"
                                            placeholder="yyyy-mm-dd"
                                            name="date"
                                            className="form-control"
                                            value={this.state.date}
                                            onChange={(event) => this.handleChange(event, "date")}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Start Time:</label>
                                        <input
                                            type="text"
                                            name="startTime"
                                            placeholder="HH:mm:ss"
                                            className="form-control"
                                            value={this.state.startTime}
                                            onChange={(event) =>
                                                this.handleChange(event, "startTime")
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>End Time:</label>
                                        <input
                                            type="text"
                                            name="endTime"
                                            placeholder="HH:mm:ss"
                                            className="form-control"
                                            value={this.state.endTime}
                                            onChange={(event) =>
                                                this.handleChange(event, "endTime")
                                            }
                                        />
                                    </div>
                                    <button className="btn btn-success">Save</button>
                                    <button className="btn btn-danger">Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}