import React, { Component } from "react";
import { Link, BrowserRouter as Router} from "react-router-dom";
import AuthenticatedService from "./AuthenticatedService";
class HeaderComponent extends Component{


    render(){

        let userLoggedIn = AuthenticatedService.isUserLoggedIn()
        console.log(userLoggedIn)
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a className="navbar-brand">Todos Management</a></div>
                    <ul className="navbar-nav">
                        {userLoggedIn && <li><Link className="nav-link" to="/welcome/admin">Home</Link></li>}
                        {userLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!userLoggedIn && <li ><Link className="nav-link" to="/login">Login</Link></li>}
                        {userLoggedIn && <li ><Link className="nav-link" to="/logout" onClick={AuthenticatedService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent