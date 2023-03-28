import '../../App.css';
import { useState } from 'react';
import Board from '../Board/Board';
import Header from '../Header/Header';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Game() {

  const [startGame, setStartGame] = useState(false);

  const onStartClick = () => {
    setStartGame(true)
  }

  const onGoBackClick = () => {
    setStartGame(false)
  }

  return (
    <div className="Game">
      <Header />
      <div className="d-flex">
        {!startGame && <Button size="lg" type="button" variant="primary" onClick={onStartClick}>Start Game</Button>}
        {startGame && <Button size="lg" type="button" color="Go Back" onClick={onGoBackClick}>Go Back</Button>}
      </div>
      
      {startGame && <Board/>}
    </div>
  );
}

export default Game;
