import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  // Function to increment the count
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  // Function to decrement the count
  decrementCount = () => {
    if(this.state.count == 0){
      alert("cant");
      
    }
    else{
      this.setState({ count: this.state.count - 1 });

    }
  }

  render() {
    return (
      <div>
        
        <p>כמות: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
