import React, { Component } from "react";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";

class TodoApp extends Component {


    render() {

        return (
            <BrowserRouter>
                <div className="TodoApp">
                <HeaderComponent/>
                    <Routes>
                        <>
                        <Route path="/" exact element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path='/welcome/:name' element={<WelcomeComponent />} />
                        <Route path='/todos' element={<ListTodosComponent />} />
                        <Route path='/logout' element={<LogoutComponent />} />
                        <Route path="*" element={<ErrorComponent />} />
                        </>
                    </Routes>
                    <FooterComponent/>

                    {/*  <LoginComponent />
                 <WelcomeComponent /> */}
                </div>
            </BrowserRouter>

        )
    }
}















// function ShowInvalidCredentials(props){

//     if(props.hasLoginFailed){
//         return <div>Invalid Credentials</div>
//     }
//     return null
// }

// function ShowSuccessCredentials(props){

//     if(props.showSuccessMessage){
//         return  <div>Login Succesfull</div>
//     }
//     return null
// }

export default TodoApp;