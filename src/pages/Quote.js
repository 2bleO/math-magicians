import React from 'react';
import './Quote.css';

const Quote = () => {
  const quotes = [
    {
      text: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.',
      author: 'William Paul Thurston',
    },
  ];

  return (
    <div className="Quote">
      <div className="q_container">
        <span className="text">{quotes[0].text}</span>
        <span className="author">
          -
          {quotes[0].author}
        </span>
      </div>
    </div>
  );
};

export default Quote;
