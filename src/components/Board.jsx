import React, { useState } from 'react';
import Square from './Square';

const Board = ({board, handleOnClick, winningSquares}) => {
  

  const renderSquare = pos => {
    const winningPos = winningSquares.includes(pos);
    return (
      <Square
        value={board[pos]}
        onClick={() => {
          handleOnClick(pos);
        }}
        winningPos = {winningPos}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
