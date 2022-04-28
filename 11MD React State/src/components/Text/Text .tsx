import './Text.scss';
import { useState } from 'react';

const Text = () => {
  const [inputValue, SetInputValue] = useState('');

  return (
    <section className="Text">

      <button
        className="TextShow"
      >
        paradit tekstu
      </button>
      <input
        className="TextInput"
        type="text"
        placeholder="Some Text"
        value={inputValue}
        onChange={
                    (e) => {
                      SetInputValue(e.target.value);
                    }
                }
      />
      <button
        className="TextButton"
        onClick={() => {
          SetInputValue('');
        }}
      >
        {' '}
        Clear
      </button>
      <span className="TextSpan">{inputValue}</span>
    </section>
  );
};

export default Text;
