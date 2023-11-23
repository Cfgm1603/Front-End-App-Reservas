import React, { useState } from "react";
import AppointmentService from "../services/AppointmentService";
import {Link} from "react-router-dom";



function SearchAvailabilityComponent() {
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState("");
  const [taskId, setTaskId] = useState("");
  const searchAvailability = async (e) => {
    e.preventDefault();

    let available = await AppointmentService.getAppointmentsAvailableByTaskAndDate(
      taskId,
      date
    );
    console.log("Available appointments:", available); // Check the fetched data
    
    // Update the state after receiving the response
    setTimeout(() => {
      setAppointments(available);
    }, 500);
    
    
    
    console.log("Appointments state updated:", appointments); // Check the state after update
  };

  const changeTypeHandlerTask = (event) => {
    setTaskId(event.target.value);
  };

  const changeTypeHandlerDate = (event) => {
    setDate(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3" style={{ marginTop: "20px" }}>
            <h3 className="text-center">Make an appointment</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Appointment task ID</label>
                  <input
                    placeholder="Appointment type ID"
                    name="taskId"
                    className="form-control"
                    value={taskId}
                    onChange={changeTypeHandlerTask}
                  />
                </div>
                <div className="form-group">
                  <label>Date (with the "-")</label>
                  <input
                    placeholder="yyyy-mm-dd"
                    name="date"
                    className="form-control"
                    value={date}
                    onChange={changeTypeHandlerDate}
                  />
                </div>

                {/* <Link to="/"> */}
                <button
                  className="btn btn-success"
                  onClick={searchAvailability}
                >
                  Search
                </button>
             
                <Link to="/">
                  <button className="btn btn-danger">Cancel</button>
                </Link>

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
              <th>Task Name</th>
              <th>Employee ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments &&
              appointments.map((appointment) => (
                <tr key={appointment.index}>
                  <td>{appointment.date}</td>
                  <td>{appointment.startTime}</td>
                  <td>{appointment.endTime}</td>
                  <td>{appointment.taskName}</td>
                  <td>{appointment.employeeId}</td>
                  <Link to="/appointments">
                  <button
                    onClick={() => {
                        const new_appointment = {
                            date: appointment.date,
                            startTime: appointment.startTime,
                            endTime: appointment.endTime,
                            state: appointment.state,
                            customerId: appointment.customerId,
                            taskId: appointment.taskId,
                            employeeId: appointment.employeeId
                        }
                      AppointmentService.createAppointment(new_appointment);
                    }}
                    className="btn btn-success"
                  >
                    Reserve
                  </button>
                  </Link>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchAvailabilityComponent;
