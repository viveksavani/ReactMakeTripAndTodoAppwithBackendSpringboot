import axios from "axios";
import { API_URl } from "../../Constants";

class TodoService {

    retriveAllTodos(name){

        return axios.get(`${API_URl}/users/${name}/todos`)
    }

    retriveTodo(name,id){

        return axios.get(`${API_URl}/users/${name}/todos/${id}`)
    }

    updateTodo(name,id,todo){

        return axios.put(`${API_URl}/users/${name}/todos/${id}`,todo)
    }

    createTodo(name,todo){

        return axios.post(`${API_URl}/users/${name}/todos`,todo)
    }

    deleteTodoById(name,id){
        return axios.delete(`${API_URl}/users/${name}/todos/${id}`)
    }
}

export default new TodoService();