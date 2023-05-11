import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TodoService from "../../api/todo/TodoService";
import AuthenticatedService from "./AuthenticatedService";

function TodoComponent() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState({id:id,description:'',targetDate:moment(new Date()).format('YYYY-MM-DD') });
    let {description,targetDate} = todo;
  // let targetDate = todo.targetDate;
  // let description = todo.description;
  

    useEffect(() => {
       
        if (id === -1) {
            return
        }
        else {
            let username = AuthenticatedService.getUserName();

            TodoService.retriveTodo(username, id).then(
                response => {
                    console.log(response)
                    setTodo({
                        ...todo,
                        description: response.data.description,
                        targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                    });
                }
            )

        }
    }, []);
            

    function OnSubmit(values){
        console.log(values)
        let username = AuthenticatedService.getUserName();

        let todo = {
            id: id,
            description: values.description,
            targetDate: values.targetDate
        }
        if (id === -1) {
            TodoService.createTodo(username,todo).then(
                () =>  navigate("/todos")
            )
        } else {

            TodoService.updateTodo(username, id,todo).then(
                () =>  navigate("/todos")
            )
        }
    }

    function OnValidate(values){
       
        let errors={}
        console.log(values)

        if(!values.description){
            errors.description = "Description is  not Blank"
        }
        else if(values.description.length<5){
            errors.description = "Descripiton must be 5 characters"
        }

        if(!moment(values.targetDate).isValid){
            errors.targetDate = "Target Date is not valid"
        }

        return errors
    }

        return(

            
            <div >
                <h1>Todo</h1>

                <div className="container">

                    <Formik initialValues={{
                                    description,
                                    targetDate }}
                            onSubmit={OnSubmit}   
                            validate={OnValidate}
                            enableReinitialize={true}
                                
                                >
                        {
                            (props) => (
                                <Form >
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Descripiton</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>

             </div>
        )

}

export default TodoComponent