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
}

export default new AuthenticatedService()