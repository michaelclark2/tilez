import React from 'react';
import './Board.scss';

export default (props) => {
  const {size} = props;
  const height = size[0];
  const width = size[1];

  let tileCounter = 0;

  return (
    <div className="Board">
    {
      Array(height).fill(0).map(row => (
        <div className="columns">
          {
            Array(width).fill(0).map(col => <div className="column">{tileCounter++}</div>)
          }
        </div>
      ))
    }
    </div>
  )
}