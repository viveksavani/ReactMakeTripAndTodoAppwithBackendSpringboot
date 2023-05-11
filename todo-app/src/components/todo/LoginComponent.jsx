import {  useState } from "react";
import AuthenticatedService from "./AuthenticatedService";
import { useNavigate } from "react-router-dom";


function LoginComponent(props) {

    // constructor(props) {
    //     super(props);
    const navigate = useNavigate();
    const [username, setusername] = useState('admin');
    const [password, setpassword] = useState('');
    const [showSuccessMessage, setshowSuccessMessage] = useState(false);
    const [hasLoginFailed, sethasLoginFailed] = useState(false);

        // this.state = {

        //     username: "admin",
        //     password: "",
        //     showSuccessMessage: false,
        //     hasLoginFailed: false
        // }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.loginClicked = this.loginClicked.bind(this);
    


    // handleChange(event) {
    //     //console.log(this.state);

    //     this.setState({

    //         [event.target.name]: event.target.value
    //     })
    // }

    const handleUserNameInput = e => {
        setusername(e.target.value);
      };
      const handlePasswordInput = e => {
        setpassword(e.target.value);
      };

    function loginClicked() {
        //console.log(this.state)



        // if (this.state.username === 'admin' && this.state.password === 'admin') {
        //     console.log('success')
        //     AuthenticatedService.registerSuccessFul(this.state.username,this.state.password)
            
        //     window.location.href = `/welcome/${this.state.username}`;
        //    // this.props.history.push(`/welcome/${this.state.username}`);
           



        //     // this.setState({
        //     //     showSuccessMessage:true,
        //     //     hasLoginFailed:false
        //     // })
        // }

        // else {
        //     console.log("failed")
        //     this.setState({
        //         hasLoginFailed: true,
        //         showSuccessMessage: false
        //     })

        // }

        // AuthenticatedService.executeBasicAuthenticationService(username,password).then(
        //     ()=>{
        //         AuthenticatedService.registerSuccessFul(username,password)
        //         // window.location.href = `/welcome/${username}`;
        //         navigate(`/welcome/${username}`);
               
        //         setshowSuccessMessage(true)
        //         sethasLoginFailed(false)
               
        //     }
        // ).catch(()=>{
        //     console.log("failed")
        //     // this.setState({
        //     //     hasLoginFailed: true,
        //     //     showSuccessMessage: false
        //     // })
        //     sethasLoginFailed(true)
        //     setshowSuccessMessage(false)
            
        // })


        AuthenticatedService.executeJWTAuthenticationService(username,password).then(
            (response)=>{
                AuthenticatedService.registerSuccessFulloginForJwt(username,response.data.token)
                // window.location.href = `/welcome/${username}`;
                navigate(`/welcome/${username}`);

               
            }
        ).catch(()=>{
            console.log("failed")
            // this.setState({
            //     hasLoginFailed: true,
            //     showSuccessMessage: false
            // })
           
            setshowSuccessMessage(false)
            sethasLoginFailed(true)
            
        })

       

    }

    // handleUsernameChange(event){
    //     console.log(event.target.value);

    //     this.setState({
    //         username:event.target.value
    //     })

    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value);

    //     this.setState({
    //         password:event.target.value
    //     })

    // }


   
        return (
            <>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {/* <ShowSuccessCredentials showSuccessMessage ={this.state.showSuccessMessage} /> */}
                    {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {showSuccessMessage && <div>Login Succesfull</div>}
                    User Name:<input type="text" name="username" value={username} onChange={handleUserNameInput} />
                    Password :<input type="password" name="password" value={password} onChange={handlePasswordInput} />
                    <button className="btn btn-success" onClick={loginClicked}>Login</button>
                </div>
            </>
        )
    
}

export default LoginComponent