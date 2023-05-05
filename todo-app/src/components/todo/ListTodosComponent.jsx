import { Component } from "react";


class ListTodosComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos: [
                { id: 1, description: "Learn React", done: false, tagetDate: new Date() },
                { id: 2, description: "Learn Dance", done: false, tagetDate: new Date() },
                { id: 3, description: "Visit India", done: false, tagetDate: new Date() }
            ]
        }
    }

    render() {
        return (
            <div className="todos">
                <h1>List Todos</h1>
                <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Is Completed ?</th>
                            <th>Target Date</th>
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
                                        <td>{todo.tagetDate.toString()}</td>
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
