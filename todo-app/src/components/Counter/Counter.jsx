import { Component } from 'react';
import './Counter.css'
import propTypes from 'prop-types'


class Counter extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0
        }

        this.Increment = this.Increment.bind(this)
        this.Decrement = this.Decrement.bind(this)
    }

    render() {
        const style = { fontSize: "50px", padding: "15px 30px" }
        return (
            <div className='counter'>
                <CounterButton by={1} incrementMethod={this.Increment} decrementMethod={this.Decrement}/>
                <CounterButton incrementMethod={this.Increment} decrementMethod={this.Decrement}/>
                <CounterButton by={5} incrementMethod={this.Increment} decrementMethod={this.Decrement}/>
                <CounterButton by={10} incrementMethod={this.Increment} decrementMethod={this.Decrement}/>
                <span className='count' style={style}>{this.state.counter}</span>
                <div><button className='reset' onClick={this.reset}>Reset</button></div>
            </div>
        )
    }

    reset = () =>{

        this.setState(
            {
                counter:0
            }
        )
    }

    Increment(by) {
        console.log(`increment by child = ${by}`);
        this.setState(
            (prevState) =>{
            return {counter: prevState.counter +by}
            }
        )
    }

    Decrement(by){

        this.setState(
            {
                counter:this.state.counter - by
            }
        )
    }
}

class CounterButton extends Component {

    constructor() {
        super();

        // this.state = {
        //     counter: 0
        // }

        // this.Increment = this.Increment.bind(this)
        // this.Decrement = this.Decrement.bind(this)
    }

    render() {
       
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}> +{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}> -{this.props.by}</button>
                {/* <button onClick={this.Decrement}>-1</button> */}
                
            </div>
        )
    }

    // Increment() {
    //     console.log("increment");
    //     this.setState(
    //        (prevState) => {
    //         return {counter: prevState.counter + this.props.by}
    //         }
    //     )

    //     this.props.incrementMethod(this.props.by);
    // }

    // Decrement = () => {
    //     console.log("decrement");
    //     this.setState({
    //         counter: this.state.counter - this.props.by
    //     })

    //     this.props.decrementMethod(this.props.by)
    // }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: propTypes.number
}




export default Counter;