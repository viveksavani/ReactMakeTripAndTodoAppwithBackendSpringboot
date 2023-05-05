import { Component } from "react";
import AuthenticatedService from "./AuthenticatedService";
import { Route,Redirect } from "react-router-dom";

class AuthenticateRoute extends Component{

    render(){
        
        if(AuthenticatedService.isUserLoggedIn()){
           return <Route {...this.props} />
        }else{
            return <Route to="/login"/>
        }
    }
}

export default AuthenticateRoute