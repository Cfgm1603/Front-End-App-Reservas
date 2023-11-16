import axios from "axios";

const EMPLOYEE_API_BASE_URL = "https://localhost:8080/app/employees/getAll";
const username = "user";
const password = "user";
class EmployeeService {
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL, {
            auth: {
                username,
                password,
            },
        });
    }
}
export default new EmployeeService();