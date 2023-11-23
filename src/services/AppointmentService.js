import axios from "axios";

const appointmentData = {
    date: "2023-12-21",
    startTime: "11:00:00",
    endTime: "12:00:00",
    state: "Active",
    customerId: 1,
    taskId: 1,
    employeeId: 1,
  };
  

const APPOINTMENT_CREATION_URL = "http://localhost:8080/app/appointment/create";

const APPOINTMENT_GETALL_URL = "http://localhost:8080/app/appointments/getAll";


class AppointmentService {

    getAppointments() {
    return axios.get(APPOINTMENT_GETALL_URL,{
        headers: {
            "Content-Type": "application/json",
        },
        auth: {
            username: "user",
            password: "user",
        }
    });
  }
  

createAppointment() {
    const response = axios.post(APPOINTMENT_CREATION_URL , appointmentData, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: "user",
        password: "user",
      },
    });

    return response.data;
  }
}


const appointmentService = new AppointmentService();
export default appointmentService;