import React from "react";
import { useParams,Link} from "react-router-dom";

function WelcomeComponent() {


    const { name } = useParams();

    return (

        <>
        <h1>Welcome!</h1>
        <div className="container">
            Welcome to {name} .you can manage your todos <Link to="/todos">here</Link> 
        </div>
        </>
    )

}

export default WelcomeComponent