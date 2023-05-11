import axios from "axios"
import { API_URl } from "../../Constants";

export const USER_NAME_SESSION = 'AuthenticatedUser';


class AuthenticatedService{


   

    executeBasicAuthenticationService(username,password){
        return axios.get(`${API_URl}/basic-auth`,{
            headers:{
                authorization:this.createBasicAuthToken(username,password)
            }
        })
    }

    executeJWTAuthenticationService(username,password){
        return axios.post(`${API_URl}/authenticate`,{
            username,
            password
        })
    }


    createBasicAuthToken(username,password){

        return "Basic "+ window.btoa(username + ":" +password)
    }

    createJWTAuthToken(token){

        return "Bearer "+ token
    }


    registerSuccessFul(username,password){
        console.log("RegisterSuccessFull")
        sessionStorage.setItem(USER_NAME_SESSION,username)
        this.setupAxiosInterceptor(this.createBasicAuthToken(username,password))
        
    }

    registerSuccessFulloginForJwt(username,token){
        sessionStorage.setItem(USER_NAME_SESSION,username)
        this.setupAxiosInterceptor(this.createJWTAuthToken(token))
    }


    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION)
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem(USER_NAME_SESSION)
        
        if(user===null)
        {
            return false
        }
        return true
        

    }

    getUserName(){
        let user = sessionStorage.getItem(USER_NAME_SESSION)
        
        if(user===null)
        {
            return ''
        }else{
        return user
        }

    }


    setupAxiosInterceptor(basicAuthHeader){
        console.log("inside axios interceptor")
        // let username="admin"
        // let password = "admin"
  
       // let basicAuthHeader = "Basic "+ window.btoa(username + ":" +password)

        axios.interceptors.request.use(
            (config)=>{

                if(this.isUserLoggedIn()){
                    
                 config.headers.authorization = basicAuthHeader
                }
                return config;
            }
           
        )
    }
}

export default new AuthenticatedService()