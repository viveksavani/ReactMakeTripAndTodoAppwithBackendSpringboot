import { useEffect, useState } from "react";
import AuthenticatedService from "./AuthenticatedService";
import TodoService from "../../api/todo/TodoService";
import moment from "moment";
import { useNavigate } from "react-router-dom";


function ListTodosComponent(props) {

    // constructor(props) {
    //     super(props);
    //     console.log('constructor')

        // this.state = {
        //     todos: [
        //         // { id: 1, description: "Learn React", done: false, targetDate: new Date() },
        //         // { id: 2, description: "Learn Dance", done: false, targetDate: new Date() },
        //         // { id: 3, description: "Visit India", done: false, targetDate: new Date() }
        //     ],
        //     message:null
        // }
        const navigate = useNavigate();
        const [todos, settodos] = useState([]);
        const [message, setmessage] = useState(null);

        // this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        // this.todoRefreshed = this.todoRefreshed.bind(this)
    


    function deleteTodoClicked(id){
        let username = AuthenticatedService.getUserName();
        console.log(id+" "+username)

        TodoService.deleteTodoById(username,id)
        .then(
            () =>{

                setmessage(`Delete Todo SuccesFull With ${id}`)
                todoRefreshed()
            }
        )
    }

     function updateTodoClicked(id){
        
        console.log(id+" update")
        //window.location.href = `/todos/${id}`;
        navigate(`/todos/${id}`)
    }

    function addTodoClicked(){
        
        console.log(" add todo")
        //window.location.href = '/todos/-1';
        navigate('/todos/-1')
       
    }

    // function componentWillUnmount(){
    //     console.log('componentWillUnmount')
    // }

    // function shouldComponentUpdate(nextProps,nextState){
    //     console.log('shouldComponentUpdate')
    //     console.log('nextProps')
    //     console.log('nextState')
    //     return true
        
    // }

    useEffect(() => {
        console.log('componentDidMount')
       todoRefreshed()
    }, []);

     

    function todoRefreshed(){
        let username = AuthenticatedService.getUserName();

        TodoService.retriveAllTodos(username).
        then(

            response=>{
                console.log(response)
                // this.setState({
                //     todos:response.data
                // })
                settodos(response.data)
            }
        ).catch(

            error =>{
                console.log(error)
            }
        )
    }




   
        return (
            <div className="todos">
                <h1>List Todos</h1>
                {message && <div className="alert alert-success">{message} </div>}
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
                            todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td><button className="btn btn-primary" onClick={()=>updateTodoClicked(todo.id)}>Update Todo</button></td>
                                        <td><button className="btn btn-danger" onClick={()=>deleteTodoClicked(todo.id)}>Delete Todo</button></td>
                                    </tr>

                            )
                        }
                    </tbody>
                </table>
                <div className="btn btn-success" onClick={addTodoClicked}>Add Todo</div>
                </div>
            </div>

        )
    }


export default ListTodosComponent
