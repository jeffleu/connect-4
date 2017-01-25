import React from 'react';
import { getColor } from '../utils';

const Cell = (props) => {
  const { value, columnIndex, play } = props;
  const color = getColor(value);

  return (
    <td>
      <div className="cell" onClick={() => {play(columnIndex)}}>
        <div className={ color }></div>
      </div>
    </td>
  );
};

export default Cell;
