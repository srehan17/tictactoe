import React from 'react';
import {Button} from 'react-bootstrap';

export const Square = ({value, onSquareClick, toggle}) => {
  return (
    <Button 
      className="button " 
      // style={{backgroundColor: toggle ? "orange" : "lightblue"}} 
      onClick={onSquareClick}>
        {value}
    </Button>
  )
}
