import React, { useState } from 'react'
import { Square } from './Square';

export const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [values, setValues] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [xIsNext, setXIsNext] = useState(true);

    const onSquareClick = (i) => {
        if (squares[i]) {
            return
        };
        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
          }
        setToggle(!toggle);
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }

  return (
    <>
        <div style={{ display: "flex" }}>
            <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} toggle={toggle}/>
            <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} toggle={toggle}/>
            <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} toggle={toggle}/>
        </div>
        <div style={{ display: "flex" }}>
            <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} toggle={toggle}/>
            <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} toggle={toggle}/>
            <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} toggle={toggle}/>
        </div>
        <div style={{ display: "flex" }}>
            <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} toggle={toggle}/>
            <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} toggle={toggle}/>
            <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} toggle={toggle}/>
        </div>
    </>
  )
}