import React from "react";
import { Link } from "react-router-dom";
import AuthenticatedService from "./AuthenticatedService";

function HeaderComponent() {
    const userLoggedIn = AuthenticatedService.isUserLoggedIn();
    console.log(userLoggedIn);

    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div><a href="" className="navbar-brand">Todo APP</a></div>
                <ul className="navbar-nav">
                    {userLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes">Home</Link></li>}
                    {userLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                </ul>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    {!userLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                    {userLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticatedService.logout}>Logout</Link></li>}
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;
