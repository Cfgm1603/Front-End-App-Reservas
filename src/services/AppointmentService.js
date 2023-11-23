import axios from "axios";

const appointmentData = {
    date: "2023-12-21",
    startTime: "11:00:00",
    endTime: "12:00:00",
    state: "Active",
    customerId: 3,
    taskId: 1,
    employeeId: 1,
  };
  

const url = "http://localhost:8080";

const APPOINTMENT_CREATION_URL = url + "/app/appointment/create";
const APPOINTMENT_GETALL_URL = url + "/app/appointments/getAll";
const APPOINTMENT_GET_BY_ID_URL = url + "/app/getMyAppointment";
const APPOINTMENT_GET_AVAILABLE_EMPLOYEES_URL = url + "/app/appointments/getAvailable";
const APPOINTMENT_UPDATE_URL = url + "/app/appointment/update";
const APPOINTMENT_DELETE_URL = url + "/app/appointment/delete";


const authConfig = {
  headers: {
      "Content-Type": "application/json",
  },
  auth: {
      username: "user",
      password: "user",
  },
};




class AppointmentService {
  getAppointments() {
    return axios.get(APPOINTMENT_GETALL_URL, authConfig);
  }

  createAppointment() {
    const response = axios.post(APPOINTMENT_CREATION_URL, appointmentData, authConfig);




  

createAppointment(appointment) {
    const response = axios.post(APPOINTMENT_CREATION_URL , appointment, {
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

  getAppointmentsAvailableByTaskAndDate(){//taskId, date) {
    console.log("getting available appointments");
    
    // const params = new URLSearchParams();
    // params.append('taskId', '1');
    // params.append('date', '2023-11-04');
    // params.append('startTime', '15:00:00');
    // params.append('endTime', '15:00:00');

    // const queryString = `${APPOINTMENT_GET_AVAILABLE_EMPLOYEES_URL}?${params.toString()}`;

    // const response = axios.get(queryString,authConfig);

    // console.log(response);

    // return response.data;
  }
}




const appointmentService = new AppointmentService();
export default appointmentService;