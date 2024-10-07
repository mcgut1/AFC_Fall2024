import { useState } from 'react';

function RandomNumberButton() {
  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (randomNumber === 7) {
      setMessage('You Win!');
      setIsVisible(false); // Hide the button
    } else {
      setMessage(`You got a ${randomNumber}. Try again!`);
    }
  };

  return (
    <>
    <h1>Ty's Casino</h1>
    <div>
      {isVisible && (
        <button onClick={generateRandomNumber}>Click Me!</button>
      )}
      <p>{message}</p>
      
    </div>
    </>
  );
}

export default RandomNumberButton;
