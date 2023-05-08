import axios from "axios";


class TodoService {

    retriveAllTodos(name){

        return axios.get(`http://localhost:8080/users/${name}/todos`)
    }

    deleteTodoById(name,id){
        return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`)
    }
}

export default new TodoService();