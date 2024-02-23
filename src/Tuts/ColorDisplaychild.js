import React from 'react';

const ColorDisplaychild = (props) => {
  return (
    <div>

      <div
        style={{
          backgroundColor: props.color,
          width: '200px',
          height: '200px',
        }}
      ></div>
    </div>
  );
}

export default ColorDisplaychild;
