import React, {Component} from "react";
import {useNavigate} from "react-router-dom";
import EmployeeService from "../services/AppointmentService";
import AppointmentService from "../services/AppointmentService";
import {Link} from "react-router-dom";

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

        {/* Aca se crea una tabla */}
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              {/* //campos de la tabla */}
              <tr>
                <th>Appointment type</th>
                <th>Client Name</th>
                <th>Employeer Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* aca se llena la tabla con la data de la api */}
            <tbody>
              {this.state.appointments.map((appointment) => (
                <tr key={appointment.appointmentId}>
                  {/* fijarse que si el dato estaba dentro de otro objeto toca llamarlo */}
                  <td>{appointment.task.name}</td >
                  <td>{appointment.customer.name}</td>
                  <td>{appointment.employee.name}</td>
                  <td>{appointment.task.price}</td>
                  <td>
                    <Link to="/update-appointment">
                      <button className="btn btn-info">Update</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <Link to="/add-appointment">
              <button className="btn btn-primary">Make an appointment</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListAppointmentComponent;
