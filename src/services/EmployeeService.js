import axios from "axios";

const url = "http://localhost:8080";

const EMPLOYEE_CREATION_URL = url + "/app/employee/add";
const EMPLOYEE_GETALL_URL = url + "/app/employees/getAll";


const authConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: "user",
    password: "user",
  },
};

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_GETALL_URL, authConfig);
  }

  createEmployee(task) {
    const response = axios.post(EMPLOYEE_CREATION_URL, task, authConfig);
    return response.data;
  }

  async getEmployeeByID(employeeId) {
    console.log("getting task by id: " + employeeId);

    let res
    await axios.get(EMPLOYEE_GETALL_URL, authConfig)
      .then(response => {
        let list = response.data;

        console.log(list);

        list.forEach(element => {
          if (element.employeeId == employeeId) {
            res = element;
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
    return res;
  }
}




const employeeService = new EmployeeService();
export default employeeService;