import './NumLine.scss';
import React, { useState } from 'react';

const Numline = () => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ];
  const [numberArray, setNumberArray] = useState(numbers);

  const buttonArray = [
    {
      id: 1,
      text: 'Remove from end',
      onClick: () => {
        setNumberArray(numberArray.slice(0, -1));
      },
    },
    {
      id: 2,
      text: 'Remove from start',
      onClick: () => {
        setNumberArray(numberArray.slice(1));
      },
    },
    {
      id: 3,
      text: 'Reset',
      onClick: () => {
        setNumberArray(numbers);
      },
    },
    {
      id: 4,
      text: 'Remove all',
      onClick: () => {
        setNumberArray(numberArray.slice(numberArray.length));
      },
    },
    {
      id: 5,
      text: 'Show > 5',
      onClick: () => {
        setNumberArray(numberArray.filter((number) => number > 5));
      },
    },
    {
      id: 6,
      text: 'All numbers x2',
      onClick: () => {
        setNumberArray(numberArray.map((number) => number * 2));
      },
    },
    {
      id: 7,
      text: 'All numbers / 10',
      onClick: () => {
        setNumberArray(numberArray.map((number) => number / 10));
      },
    },
  ];
  return (
    <section className="Numline">
      <div className="Buttons">
        {buttonArray.map((item) => (
          <button
            key={item.id}
            onClick={item.onClick}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div className="Numbers">
        {' '}
        {numberArray.map((number) => (
          <div
            className="Number-item"
          >
            {number}
          </div>
        ))}
        {' '}

      </div>

    </section>
  );
};

export default Numline;
