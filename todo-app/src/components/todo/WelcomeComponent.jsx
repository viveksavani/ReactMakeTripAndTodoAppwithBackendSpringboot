import React, { useState } from "react";
import { useParams,Link} from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

function WelcomeComponent() {

    const { name } = useParams();
    const [welcomeMessage, setwelcomeMessage] = useState('');
    const [status, setStatus] = useState('');


    function retriveMessage() {
       
       // HelloWorldService.excecuteHelloWorldService()
       //HelloWorldService.excecuteHelloWorldBeanService()
       HelloWorldService.excecuteHelloWorldPathService(name) 
       .then(function (response) {
            
            console.log(response);
            handleSuccessResponse(response)
          })
          .catch(function (error) {
           
            console.log(error);
            handleError(error)
          });
      }

      function handleSuccessResponse(response) {
        // setwelcomeMessage(response.data)
        // setStatus(response.status)
        setwelcomeMessage(response.data.message)
        setStatus(response.data.name)
      }

      function handleError(error) {
       
        console.log(error.response)

        let errorMessage ='';

        if(error.message)
          errorMessage+=error.message

        if(error.response && error.response.data){
          errorMessage+= error.response.data.message
        }  

        setwelcomeMessage(errorMessage)
        setStatus(error.response.data.status)
      }

    
    

    return (

        <>
        <h1>Welcome!</h1>
        <div className="container">
            Welcome to {name} .you can manage your todos <Link to="/todos">here</Link> 
        </div>

        <div className="container">
            Get Customized Welcome Messge Here.
            <button onClick={retriveMessage} className="btn btn-success">Get Welcome Message</button>
        </div>

        <div className="container">
           <h4 className="text-primary">{welcomeMessage}</h4> 
           <h5 className="text-success"> {status}</h5>
        </div>
        </>
    )

}



export default WelcomeComponent