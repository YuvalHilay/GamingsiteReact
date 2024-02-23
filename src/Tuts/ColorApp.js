import React, { Component } from 'react';

class ColorApp extends Component {
  constructor() {
    super();
    this.state = {
      color: 'red', // Initial color
    };
  }

  componentDidMount() {
    // Set an interval to change the color every second
    this.colorInterval = setInterval(this.changeColorRandomly, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts to avoid memory leaks
    clearInterval(this.colorInterval);
  }

  changeColorRandomly = () => {
    // Change the color randomly
    const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ color: randomColor });
  }

  render() {
    return (
      <div>
       <p>Color: {this.state.color}</p>
        <div
          style={{
            backgroundColor: this.state.color,
            width: '200px',
            height: '200px',
          }}
        ></div>
      </div>
    );
  }
}

export default ColorApp;
