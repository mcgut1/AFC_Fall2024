import React from 'react';
import { diceArray } from '../helper'; 

const Dice = ({ value }) => {
  return (
    <div className="dice">
      <i className={`fas fa-dice-${diceArray[value]}`}></i>
    </div>
  );
};

export default Dice;
