import axios from "axios";



const EMPLOYEE_API_BASE_URL = "https://localhost:8080/app/customer/getAll";
const username = "user";
const password = "user";

var basicAuth = 'Basic ' + btoa(username + ':' + password);


class EmployeeService {
  getEmployees() {
    return  axios.get(EMPLOYEE_API_BASE_URL, {
        headers: { 'Authorization': + basicAuth }
    });
  }
}

export default new EmployeeService();
