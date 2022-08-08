import React from 'react';
import './test.css';

export const Test = ({favorites}) => {

  return (
    <div className="test">
      <h1>Test</h1>
      <h2>Избранное</h2>
      {favorites.map((item, index) => (
        <p key={index}>
          <b>{item}</b>
        </p>
      ))}
    </div>
  );
};
