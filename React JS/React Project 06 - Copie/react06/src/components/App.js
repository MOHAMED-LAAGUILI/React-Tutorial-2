import React, {Component} from 'react';

class App extends Component{

    constructor(){
        super();

        this.state = {
        number: 0
        }

        // bind the extern function in whith constructor
        this.eventHandler = this.eventHandler.bind(this);
    }

eventHandler(){
this.setState({number: this.state.number + 1});
}

    
    render() {
        return (
            <div className='container'>
               <h1>{this.state.number}</h1>
               <button className='btn btn-primary' onClick={this.eventHandler}>click me</button>
            </div>
        )
    }
}

export default App;