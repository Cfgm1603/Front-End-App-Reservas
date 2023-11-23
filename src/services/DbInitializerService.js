import axios from "axios";

const url = "http://localhost:8080";
const APPOINTMENT_CREATION_URL = url + "/app/appointment/create";
const APPOINTMENT_GETALL_URL = url + "/app/appointments/getAll";
const BRANCH_CREATOR_URL = url + "/app/branch/add";
const BRANCH_GETALL_URL = url + "/app/branch/getAll";
const CUSTOMER_CREATION_URL = url + "/app/customer/add";
const CUSTOMER_GETALL_URL = url + "/app/customer/getAll";
const EMPLOYEE_CREATION_URL = url + "/app/employee/add";
const EMPLOYEE_GETALL_URL = url + "/app/employees/getAll";
const TASK_CREATION_URL = url + "/app/task/add";
const TASK_GETALL_URL = url + "/app/task/getAll";

const tasks = [
    {
        name: "Pedicure",
        description: "Description Pedicure",
        duration: 1,
        price: 100,
    },
    {
        name: "Manicure",
        description: "Description Manicure",
        duration: 2,
        price: 1000,
    },
    {
        name: "Haircut",
        description: "Description Haircut",
        duration: 2,
        price: 1000,
    },
];

const branchData = {
    name: "Dunder Mifflin Scranton",
    address: "Scranton",
    type: "Paper",
    openingTime: "11:00:00",
    closureTime: "17:00:00",
};

const employeeData =[ 
    {
        name: "Farro",
        taskId: 1,
        branchId: 1,
    },
    {
        name: "Cesar",
        taskId: 2,
        branchId: 1,
    },
    {
        name: "Juan Diego",
        taskId: 3,
        branchId: 1,
    },

];

const customerData = {
    name: "Cesar Gimo",
    email: "Cexar@unisabana.edu.co",
    phoneNumber: 3217998694,
};

const appointmentData = {
    date: "2023-11-21",
    startTime: "14:00:00",
    endTime: "15:00:00",
    state: "Active",
    customerId: 1,
    taskId: 1,
    employeeId: 1,
};

class DbInitializerService {
    constructor() {
        this.authConfig = {
            headers: {
                "Content-Type": "application/json",
            },
            auth: {
                username: "user",
                password: "user",
            },
        };
    }

    async checkDataExists() {
        try {
          const employees = await axios.get(EMPLOYEE_GETALL_URL, this.authConfig);
          // Check if employees data already exists
          if (employees.data && employees.data.length > 0) {
            console.log("Employees data already exists. Skipping creation.");
            return true; // Data exists
          } else {
            console.log("No employees data found. Proceeding with creation.");
            return false; // Data does not exist
          }
        } catch (error) {
          console.error("Error checking data:", error);
          return false; // Assume data does not exist in case of an error
        }
    }

    async initializeDatabase() {
        const dataExists = await this.checkDataExists();
        
        if (!dataExists) {
          // Data doesn't exist, proceed with creating data
          await this.createTasks();
          await this.createBranch();
          await this.createEmployee();
          await this.createCustomer();
          await this.createAppointment();
        }
    }

    async createTasks() {
        try {
            const response = await axios.post(TASK_CREATION_URL, tasks, this.authConfig);
            console.log("Tasks created:", response.data);
        } catch (error) {
            console.error("Error creating tasks:", error);
        }
    }

    async createBranch() {
        try {
            const response = await axios.post(BRANCH_CREATOR_URL, branchData, this.authConfig);
            console.log("Branch created:", response.data);
        } catch (error) {
            console.error("Error creating branch:", error);
        }
    }

    async createEmployee() {
        for (let i = 0; i < employeeData.length; i++) {
            try {
                const response = await axios.post(EMPLOYEE_CREATION_URL, employeeData[i], this.authConfig);
                console.log("Employee created:", response.data);
            } catch (error) {
                console.error("Error creating employee:", error);
            }
        }
    }

    async createCustomer() {
        try {
            const response = await axios.post(CUSTOMER_CREATION_URL, customerData, this.authConfig);
            console.log("Customer created:", response.data);
        } catch (error) {
            console.error("Error creating customer:", error);
        }
    }

    async createAppointment() {
        try {
            const response = await axios.post(APPOINTMENT_CREATION_URL, appointmentData, this.authConfig);
            console.log("Appointment created:", response.data);
        } catch (error) {
            console.error("Error creating appointment:", error);
        }
    }
}

const dbInitializerService = new DbInitializerService();
export default dbInitializerService;
