import axios from "axios";
import { API_URl,JPA_API_URl } from "../../Constants";

class TodoService {

    retriveAllTodos(name){

        return axios.get(`${JPA_API_URl}/users/${name}/todos`)
    }

    retriveTodo(name,id){

        return axios.get(`${JPA_API_URl}/users/${name}/todos/${id}`)
    }

    updateTodo(name,id,todo){

        return axios.put(`${JPA_API_URl}/users/${name}/todos/${id}`,todo)
    }

    createTodo(name,todo){

        return axios.post(`${JPA_API_URl}/users/${name}/todos`,todo)
    }

    deleteTodoById(name,id){
        return axios.delete(`${JPA_API_URl}/users/${name}/todos/${id}`)
    }
}

export default new TodoService();