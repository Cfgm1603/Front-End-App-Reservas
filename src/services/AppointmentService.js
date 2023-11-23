import axios from "axios";
import { log } from "util";

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



const APPOINTMENT_UPDATE_URL = "http://localhost:8080/app/appointments/update";

class AppointmentService {
  getAppointments() {
    return axios.get(APPOINTMENT_GETALL_URL, authConfig);
  }

  createAppointment(appointment) {
    const response = axios.post(APPOINTMENT_CREATION_URL , appointment, authConfig);

    return response.data;
  }

  getAppointmentsAvailableByTaskAndDate(taskId, date) {
    console.log("getting available appointments");
    const openingHours = {
      startTime: 11,
      endTime: 17
    };

    // let taskId = 1;
    // let date = "2023-11-04";

    let taskDuration = 1;

    let res_appointments = [];

    let option_counter = 1;

    for (let i = openingHours.startTime; i <= openingHours.endTime - taskDuration; i++) {
      let startTime = i;
      let endTime = i + taskDuration;

      if (endTime <= openingHours.endTime) {
        const params = new URLSearchParams();
        params.append('taskId', taskId);
        params.append('date', date);
        params.append('startTime', startTime + ":00:00");
        params.append('endTime', endTime + ":00:00");

        const queryString = `${APPOINTMENT_GET_AVAILABLE_EMPLOYEES_URL}?${params.toString()}`;
        // console.log(queryString);


        
        axios.get(queryString, authConfig)
        .then(response => {
          let list = response.data;
          
          // for element in list add it to res_appointments
          for (let i = 0; i < list.length; i++) {
            const availableAppointment = {
              index : option_counter++,
              date: date,
              startTime: startTime + ":00:00",
              endTime: endTime + ":00:00",
              state: "Active",
              customerId: 1,
              taskId: taskId,
              employeeId: list[i].employeeId,
            };
            res_appointments.push(availableAppointment);
            // console.log(availableAppointment);
          }
          
        })
        .catch(error => {
          console.log(error);
        });




      }
    }

    return res_appointments;
  }
}




const appointmentService = new AppointmentService();
export default appointmentService;