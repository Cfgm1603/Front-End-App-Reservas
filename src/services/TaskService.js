import axios from "axios";

const url = "http://localhost:8080";

const TASK_CREATION_URL = url + "/app/task/add";
const TASK_GETALL_URL = url + "/app/task/getAll";


const authConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  auth: {
    username: "user",
    password: "user",
  },
};

class TaskService {
  getTasks() {
    return axios.get(TASK_GETALL_URL, authConfig);
  }

  createTask(task) {
    const response = axios.post(TASK_CREATION_URL, task, authConfig);
    return response.data;
  }

  async getTaskByID(taskId) {
    console.log("getting task by id: " + taskId);

    let res
    await axios.get(TASK_GETALL_URL, authConfig)
      .then(response => {
        let list = response.data;

        console.log(list);

        list.forEach(element => {
          if (element.taskId == taskId) {
            // console.log("found task: " + element.name);
            res = element;
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
    // console.log("res: " + res);
    return res;
  }
}




const taskService = new TaskService();
export default taskService;