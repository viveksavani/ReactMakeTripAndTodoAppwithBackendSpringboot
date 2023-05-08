import { Component } from "react";
import AuthenticatedService from "./AuthenticatedService";
import TodoService from "../../api/todo/TodoService";


class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        console.log('constructor')

        this.state = {
            todos: [
                // { id: 1, description: "Learn React", done: false, targetDate: new Date() },
                // { id: 2, description: "Learn Dance", done: false, targetDate: new Date() },
                // { id: 3, description: "Visit India", done: false, targetDate: new Date() }
            ],
            message:null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.todoRefreshed = this.todoRefreshed.bind(this)
    }


    deleteTodoClicked(id){
        let username = AuthenticatedService.getUserName();
        console.log(id+" "+username)

        TodoService.deleteTodoById(username,id)
        .then(
            response =>{

                this.setState({message:`Delete Todo SuccesFull With ${id}`})
                this.todoRefreshed()
            }
        )
    }

    updateTodoClicked=(id)=>{
        
        console.log(id+" update")
        window.location.href = `/todos/${id}`;
       
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate')
        console.log('nextProps')
        console.log('nextState')
        return true
        
    }

    componentDidMount(){
        console.log('componentDidMount')
       this.todoRefreshed()
    }

    todoRefreshed(){
        let username = AuthenticatedService.getUserName();

        TodoService.retriveAllTodos(username).
        then(

            response=>{
                console.log(response)
                this.setState({
                    todos:response.data
                })
            }
        ).catch(

            error =>{
                console.log(error)
            }
        )
    }




    render() {
        console.log('render')
        return (
            <div className="todos">
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message} </div>}
                <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Is Completed ?</th>
                            <th>Target Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-primary" onClick={()=>this.updateTodoClicked(todo.id)}>Update Todo</button></td>
                                        <td><button className="btn btn-danger" onClick={()=>this.deleteTodoClicked(todo.id)}>Delete Todo</button></td>
                                    </tr>

                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>

        )
    }
}

export default ListTodosComponent
