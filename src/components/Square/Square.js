import React from 'react';

const Square = ({value, onSquareClick}) => {
  return (
    <button 
      className="squareButton" 
      onClick={onSquareClick}>
        {value}
    </button>
  )
}

export default Square;