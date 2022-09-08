import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import { calculateWinner } from './helpers';
import StatusMessage from './components/StatusMessage';
import '../styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

const App = () => {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentStep, setCurrentStep] = useState(0);
  const current = history[currentStep];

  const { winner, winningSquares } = calculateWinner(current.board);

  const handleOnClick = position => {
    if (winner || currentStep != history.length - 1 || current.board[position])
      return;

    setHistory(prev => {
      const last = prev[prev.length - 1];
      let newIsXNext = last.isXNext;

      const newBoard = last.board.map((square, pos) => {
        if (pos === position && last.board[pos] === null) {
          newIsXNext = !newIsXNext;
          if (last.isXNext) {
            return 'X';
          } else {
            return 'O';
          }
        }
        return square;
      });

      return prev.concat({ board: newBoard, isXNext: newIsXNext });
    });

    setCurrentStep(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrentStep(move);
  };

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentStep(0);
  };
  return (
    <div className="app">
      <h1>
        TIC<span className="text-green"> TAC </span>TOE
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleOnClick={handleOnClick}
        winningSquares={winningSquares}
      />
      <button
        onClick={onNewGame}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start new game
      </button>
      <h2 style={{fontWeight : "normal"}}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentStep} />
      <div className='bg-balls'/>
    </div>
  );
};

export default App;
