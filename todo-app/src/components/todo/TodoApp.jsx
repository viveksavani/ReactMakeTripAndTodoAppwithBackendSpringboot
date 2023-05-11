import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import TodoComponent from "./TodoComponent.jsx";
import withNavigation from "./WithNavigation.jsx"
import withParams from "./WithParams.jsx"
import AuthenticatedRoute from "./AuthenticatedRoute.jsx"

class TodoApp extends Component {
    render() {
    	const LoginComponentWithNavigation = withNavigation(LoginComponent);

    	const WelcomeComponentWithParams = withParams(WelcomeComponent);

    	const HeaderComponentWithNavigation = withNavigation(HeaderComponent);

    	const TodoComponentWithParamsAndNavigation = withParams(withNavigation(TodoComponent));

    	const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent) //REACT-6

        return (
            <div className="TodoApp">
            	<Router>
            		<HeaderComponentWithNavigation/>
            		<Routes>
		            	<Route path="/" element={<LoginComponentWithNavigation />} />
		            	<Route path="/login" element={<LoginComponentWithNavigation />} />
		            	<Route path="/welcome/:name" element={
		            		<AuthenticatedRoute>
		            			<WelcomeComponentWithParams />
		            		</AuthenticatedRoute>
		            	} />
		            	
		            	//REACT-6
		            	<Route path="/todos/:id" element={ 
			            	<AuthenticatedRoute>
			            		<TodoComponentWithParamsAndNavigation />
			            	</AuthenticatedRoute>
			            } />

			            //REACT-6
		            	<Route path="/todos" element={
			            	<AuthenticatedRoute>
			            		<ListTodosComponentWithNavigation /> 
			            	</AuthenticatedRoute>
			            } />
		            	<Route path="/logout" element={
		            		<AuthenticatedRoute>
		            			<LogoutComponent />
		            		</AuthenticatedRoute>
		            	} />
		            	<Route path="*" element={<ErrorComponent />} />
	            	</Routes>
	            	<FooterComponent/>
            	</Router>
            </div>
        )
    }
}

export default TodoApp