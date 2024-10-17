// import React, { useState } from 'react';

// const ToggleButton = () => {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <button onClick={() => setIsOn(!isOn)}>
//       {isOn ? 'ON' : 'OFF'}
//     </button>
//   );
// };

// export default ToggleButton;

import React, { useState } from 'react';

const InputDisplay = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <p>{inputText}</p>
    </div>
  );
};

export default InputDisplay;
 