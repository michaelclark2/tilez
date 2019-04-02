import React from 'react';
import './Tile.scss';

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'cyan'];

export default (props) => {
  const {color} = props;
  return (
    <div className="Tile column" style={{backgroundColor: colors[color]}}>
    </div>
  )
}
