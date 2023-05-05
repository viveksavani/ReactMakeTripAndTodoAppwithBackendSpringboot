import { Component } from "react";
import AuthenticatedService from "./AuthenticatedService";


class LoginComponent extends Component {

    constructor(props) {
        super(props);
        

        this.state = {

            username: "admin",
            password: "",
            showSuccessMessage: false,
            hasLoginFailed: false
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }


    handleChange(event) {
        //console.log(this.state);

        this.setState({

            [event.target.name]: event.target.value
        })
    }

    loginClicked() {
        console.log(this.state)



        if (this.state.username === 'admin' && this.state.password === 'admin') {
            console.log('success')
            AuthenticatedService.registerSuccessFul(this.state.username,this.state.password)
            window.location.href = `/welcome/${this.state.username}`;
           // this.props.history.push(`/welcome/${this.state.username}`);
            



            // this.setState({
            //     showSuccessMessage:true,
            //     hasLoginFailed:false
            // })
        }

        else {
            console.log("failed")
            this.setState({
                hasLoginFailed: true,
                showSuccessMessage: false
            })

        }

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


    render() {
        return (
            <>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                    {/* <ShowSuccessCredentials showSuccessMessage ={this.state.showSuccessMessage} /> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Succesfull</div>}
                    User Name:<input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                    Password :<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </>
        )
    }
}

export default LoginComponent