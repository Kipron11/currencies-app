import React, { useRef, useEffect, useState } from 'react';
import './secondCard.scss';

const SecondCard = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [saveValue, setSaveValue] = useState(['']);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const sumbitFocusRef = useRef<HTMLInputElement | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    sumbitFocusRef.current?.focus();
  });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.disabled = true;
      setTimeout(() => {
                buttonRef.current!.disabled = false;
      }, 5000);
    }
  }, []);

  console.log('a');

  return (
    <section className="sector">
      <div className="box">
        <div>
          <input
            className="input"
            ref={inputRef}
          />
        </div>
        <div>
          <input
            ref={sumbitFocusRef}
            className="input"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
          <button
            className="button"
            type="submit"
            onClick={() => {
              setSaveValue([`${saveValue} ${inputValue}`]);
              setInputValue('');
            }}
          >
            Submit
          </button>
          <p>{saveValue}</p>
        </div>
        <div>
          <button
            ref={buttonRef}
            className="button"
          >
            {' '}
            POG,A
          </button>
          <button
            className="button"
            type="button"
            onClick={() => setCount(count + 1)}
          >
            Count :
            {count}
          </button>
          <div
            className="countx2"
          >
            {count * 2}
          </div>

          <div>
            <button
              type="button"
              className="button"
            >
              +
            </button>
            <select>
              <option>cuves</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondCard;
