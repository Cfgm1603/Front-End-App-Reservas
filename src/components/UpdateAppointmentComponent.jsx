import React, {Component} from "react";
import app from "../App";
import AppointmentService from "../services/AppointmentService";

export default class UpdateAppointmentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.appointment.appointmentId,
            date: props.appointment.date,
            startTime: props.appointment.startTime,
            endTime: props.appointment.endTime,
            employeeId: props.appointment.employee.employeeId,
            taskId: props.appointment.task.taskId,
            customerId: props.appointment.customer.customerId,
        };
    }

    eventDate = (event) => {
        this.setState({date: event.target.value});
    }
    eventStartTime = (event) => {
        this.setState({startTime: event.target.value});
    }
    eventEndTime = (event) => {
        this.setState({endTime: event.target.value});
    }

    updateAppointment = (e) => {
        console.log(this.state.customerId)

        let appointment = {
            id: this.state.id,
            state: "Active",
            employeeId: this.state.employeeId,
            date: this.state.date,
            startTime: this.state.startTime,
            endTime: this.state.endTime,
            customerId: this.state.customerId,
            taskId: this.state.taskId
        };
        AppointmentService.updateAppointment(appointment);
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Date (with the "-"):</label>
                    <input
                        type="text"
                        placeholder="yyyy-mm-dd"
                        name="date"
                        className="form-control"
                        value={this.state.date}
                        onChange={this.eventDate}
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
                        onChange={this.eventStartTime}
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
                        onChange={this.eventEndTime}
                    />
                </div>
                <br/>
                <center>
                    <button
                        onClick={() => {
                            this.updateAppointment();
                        }}
                        className="btn btn-info">
                        Update
                    </button>
                </center>
            </form>
        );
    }
}