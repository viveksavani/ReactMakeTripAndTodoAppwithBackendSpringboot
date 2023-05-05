import { Component } from "react";


export default class FirstComponent extends Component{

    render(){
        return(
            <div className="firstComponent">
                My FirstComponent
            </div>
        )
    }
}

export class SecondComponent extends Component{

    render(){
        return(
            <div className="secondComponent">
                My SecondComponent
            </div>
        )
    }
}