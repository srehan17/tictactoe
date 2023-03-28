import React, { useState } from 'react'
import Square from '../Square/Square';

 const Board = ({startGame}) => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [toggle, setToggle] = useState(false);
    const [xIsNext, setXIsNext] = useState(true);
    const [alertMessage, setAlertMessage] = useState("");


    if (startGame) return 
    const onSquareClick = (i) => {
        if (squares[i] || calculateWinner(squares)) {
            if (squares[i]) {
                setAlertMessage("You cant make that move");
                setTimeout(() => setAlertMessage(""), 2000);
                console.log("cant make move");
            }
            return
        };
        setAlertMessage("")
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

    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
          return null;
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = "WINNER: " + winner;
    } 
    else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }


  return (
    <div className='board'>
        <div className="status">{status}</div>
        <p style={{height: "30px", marginTop: '30px', marginBottom:"-10px", marginLeft: 'auto', marginRight: 'auto', width: '300px', color: alertMessage ? "red": null}}> {alertMessage}</p>
        <div className='squaresContainer'>
            <div style={{ display: "flex", marginTop: "10px", justifyContent: 'center' }}>
                <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} toggle={toggle}/>
                <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} toggle={toggle}/>
                <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} toggle={toggle}/>
            </div>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} toggle={toggle}/>
                <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} toggle={toggle}/>
                <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} toggle={toggle}/>
            </div>
            <div style={{ display: "flex", justifyContent: 'center' }}>
                <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} toggle={toggle}/>
                <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} toggle={toggle}/>
                <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} toggle={toggle}/>
            </div>
        </div>
    </div>
  )
}

export default Board;
