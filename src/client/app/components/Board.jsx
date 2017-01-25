import React from 'react';
import { Row } from '../components';

const Board = (props) => {
  const { board, play } = props;

  return (
    <div className="board-container">
      <table>
        <tbody>
          { board.map((row, i) => <Row key={i} row={row} play={play} />) }
        </tbody>
      </table>
    </div>
  );
};

export default Board;
