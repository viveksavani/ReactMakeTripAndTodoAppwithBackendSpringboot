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
        return axios.get(`http://localhost:8080/hello-path/${name}`)
     }
}

export default new HelloWorldService()