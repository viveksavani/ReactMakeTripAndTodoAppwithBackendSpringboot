class AuthenticatedService{

    registerSuccessFul(username,password){
        console.log("RegisterSuccessFull")
        sessionStorage.setItem("AuthenticatedUser",username)
    }


    logout(){
        sessionStorage.removeItem("AuthenticatedUser")
    }

    isUserLoggedIn(){
        let user = sessionStorage.getItem("AuthenticatedUser")
        
        if(user===null)
        {
            return false
        }else{
        return true
        }

    }

    getUserName(){
        let user = sessionStorage.getItem("AuthenticatedUser")
        
        if(user===null)
        {
            return ''
        }else{
        return user
        }

    }
}

export default new AuthenticatedService()