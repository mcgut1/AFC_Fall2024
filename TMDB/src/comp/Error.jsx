//If there are no results or if there is a network error, you should have an error page/message displayed

import React from 'react';

const Error = ({ message }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{message}</p>
      <img src="./assets/errorMessageimg.jpeg" alt="This isn't the search you were looking for..." />
    </div>
  );
};

export default Error;
