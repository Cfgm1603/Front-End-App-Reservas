import axios from "axios";

const URL = "https://localhost:8080/app/customer/getAll";
class EmployeeService {
    getEmployees() {
    return axios.get(URL,{
        headers: {
            "Content-Type": "application/json",
        },
        auth: {
            username: "user",
            password: "user",
        }
    });
  }
}
const servicioEmpleados = new EmployeeService();
export default servicioEmpleados;