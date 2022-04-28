import React, { useState } from 'react';

import './Calc2.scss';

const Calc2 = () => {
  const [count, setCount] = useState(0);
  const action = [{
    title: 'Reset',
    mathAction: () => {
      setCount(count - count);
    },
  },
  {
    title: '+',
    mathAction: () => {
      setCount(count + 10);
    },
  },

  {
    title: '-',
    mathAction: () => {
      setCount(count - 10);
    },
  },
  {
    title: 'x',
    mathAction: () => {
      setCount(count * 10);
    },
  },
  {
    title: '/',
    mathAction: () => {
      setCount(count / 10);
    },
  },
  ];
  return (
    <section className="Calc2">
      {action.map((item) => (
        <button type="button" className="CalcButton" onClick={item.mathAction}>
          {item.title}
        </button>
      ))}
      <span className="CalcSpan">{count}</span>

    </section>

  );
};

export default Calc2;
