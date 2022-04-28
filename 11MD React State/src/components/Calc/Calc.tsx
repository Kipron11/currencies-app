import React, { useState } from 'react';
import './Calc.scss';

const Calc = () => {
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
      setCount(count + 1);
    },
  },

  {
    title: '-',
    mathAction: () => {
      setCount(count - 1);
    },
  },
  ];
  return (
    <section className="Calc">
      {action.map((item) => (
        <button type="button" className="CalcButton" onClick={item.mathAction}>
          {item.title}
        </button>
      ))}
      <span className="CalcSpan">{count}</span>
    </section>
  );
};

export default Calc;
