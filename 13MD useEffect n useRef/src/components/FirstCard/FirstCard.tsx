import React, { useRef, useEffect, useState } from 'react';
import './firstCard.scss';

const FirstCard = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const countInputRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    console.log('First Render');
    setCount(100);
  }, []);

  useEffect(() => {
    console.log('Render');
  });

  useEffect(() => {
    console.log('Changing Count');

    if (countInputRef.current) {
      const countInput = countInputRef.current;
      const textSize = window.getComputedStyle(countInput, null).getPropertyValue('font-size');
      const changeTextSize = parseFloat(textSize);

      countInput.style.fontSize = `${changeTextSize + 1}px`;
    }
  }, [count]);

  useEffect(() => {
    console.log('Input Change');
    document.title = inputValue;
  }, [inputValue]);

  return (
    <section className="sector">
      <div className="box">
        <div className="ButtonBox">
          <button
            className="button"
            type="submit"
            onClick={(e) => {
              (setCount(count + 1));
            }}
          >
            +
          </button>
          <span>Poga palielina count par 1</span>
          <p ref={countInputRef}>
            <b>
              Count:
              {count}
            </b>
          </p>
        </div>
        <div className="InputBox">
          <input
            className="input"
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="text"
          />
          <span>
            Onchange apaksa mainas teksts reize ar rakstisanu
          </span>
          <p>{inputValue}</p>
        </div>
      </div>
    </section>
  );
};

export default FirstCard;
