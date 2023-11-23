import React, {Component} from "react";
import {useNavigate} from "react-router-dom";
import EmployeeService from "../services/AppointmentService";
import AppointmentService from "../services/AppointmentService";
import {Link} from "react-router-dom";
import UpdateAppointmentComponent from "./UpdateAppointmentComponent";
import app from "../App";

class ListAppointmentComponent extends Component {
    constructor(props) {
        super(props);

        //Aca se crea un state, estos son como objetos que viven dentro de React y se pueden modificar mediante setters
        this.state = {
            appointments: [],
        };
    }

    //Aca se crea un metodo que se ejecuta cuando se carga el componente, meaning que si se actualizan datos, el actualiza el componente (el front)
    componentDidMount() {
        AppointmentService.getAppointments().then((res) => {
            this.setState({appointments: res.data});
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Appointment List</h2>
                <p className="text-center">Remember that the hour is managed in Military hour.</p>

                {/* Aca se crea una tabla */}
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        {/* //campos de la tabla */}
                        <tr>
                            <th>Appointment ID</th>
                            <th>Appointment type</th>
                            <th>Client Name</th>
                            <th>Employee Name</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                        </thead>
                        {/* aca se llena la tabla con la data de la api */}
                        <tbody> 
                        {this.state.appointments && (this.state.appointments.
                        map((appointment) => (
                            <tr key={appointment.appointmentId}>
                                {/* fijarse que si el dato estaba dentro de otro objeto toca llamarlo */}
                                <td>{appointment.appointmentId}</td>
                                <td>{appointment.task.name}</td>
                                <td>{appointment.customer.name}</td>
                                <td>{appointment.employee.name}</td>
                                <td>{appointment.startTime}</td>
                                <td>{appointment.endTime}</td>
                                <td>{appointment.task.price}</td>
                                <td>
                                    <UpdateAppointmentComponent appointment={appointment}/>
                                </td>
                                <td>
                                    <center>
                                        <button
                                            onClick={() => {
                                                AppointmentService.deleteAppointments(appointment.appointmentId);
                                                window.location.reload();
                                            }}
                                            className="btn btn-danger">
                                            Delete
                                        </button>
                                    </center>
                                </td>
                            </tr>
                        )))}
                        </tbody>
                    </table>
                    <div>
                        <center>
                        <Link to="/add-appointment">
                            <button className="btn btn-primary">Create new Appointment</button>
                        </Link>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListAppointmentComponent;
