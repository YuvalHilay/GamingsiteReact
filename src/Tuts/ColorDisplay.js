import React, { Component } from 'react';
import ColorDisplaychild from './ColorDisplaychild';
import './ColorDisplay.css'; // Import the CSS file for styling

class ColorDisplay extends Component {
  constructor() {
    super();
    this.state = {
      color: 'red', // Initial color
    };
  }

  changeColor = (newColor) => {
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div className="color-display-container">
        <div className="color-display-child">
          <h1>Color: {this.state.color}</h1>
        </div>
        <div className="color-buttons">
          <button onClick={() => this.changeColor('red')}>Red</button>
          <button onClick={() => this.changeColor('blue')}>Blue</button>
          <button onClick={() => this.changeColor('yellow')}>Yellow</button>
        </div>
        <div className="color-display-child">
          <ColorDisplaychild color={this.state.color} />
        </div>
      </div>
    );
  }
}

export default ColorDisplay;
