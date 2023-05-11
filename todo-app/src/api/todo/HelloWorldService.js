import axios from "axios"

class HelloWorldService {

    excecuteHelloWorldBeanService(){
        return axios.get('http://localhost:8080/hello-bean')
     }

    excecuteHelloWorldService(){
       // console.log("Helloworld service called")
       return axios.get('http://localhost:8080/hello')
    }

    excecuteHelloWorldPathService(name){
      // let username="admin"
      // let password = "admin"

      // let basicAuthHeader = "Basic "+ window.btoa(username + ":" +password)

        return axios.get(`http://localhost:8080/hello-path/${name}`,
      //   {

      //   headers:{
      //    authorization:basicAuthHeader
      //   }
      //   }
        
        )
     }
}

export default new HelloWorldService()