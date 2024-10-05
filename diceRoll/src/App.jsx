import React, { useState, useEffect } from 'react';
import { getRandomNumber } from './helper';
import Dice from './components/Dice';
import './App.css';

const App = () => {
  const [diceOneValue, setDiceOneValue] = useState(getRandomNumber());
  const [diceTwoValue, setDiceTwoValue] = useState(getRandomNumber());
  const [total, setTotal] = useState(diceOneValue + diceTwoValue);

  const rollDice = () => {
    const newDiceOneValue = getRandomNumber();
    const newDiceTwoValue = getRandomNumber();
    setDiceOneValue(newDiceOneValue);
    setDiceTwoValue(newDiceTwoValue);
    setTotal(newDiceOneValue + newDiceTwoValue);
  };

  useEffect(() => {}, [diceOneValue, diceTwoValue]);

  return (
    <div className="app">
      <h1>Dice Roll</h1>
      <div className="dice-container">
        <Dice value={diceOneValue} />
        <Dice value={diceTwoValue} />
      </div>
      <p>Total: {total + 2}</p>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
};

export default App;
