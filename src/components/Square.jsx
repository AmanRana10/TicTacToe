import React from 'react';

const Square = ({ value, onClick, winningPos }) => {
  return (
    <button
      className={`square ${winningPos ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={onClick}
      style={{ fontWeight: winningPos ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
