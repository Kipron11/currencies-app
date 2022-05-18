import React, { useState } from 'react';
import './App.scss';
import currencies from './data';

const App = () => {
  const [currenciesBox, setCurrenciesBox] = useState(['']);

  const handleCheck = (event: { target: { checked: boolean; value: string; }; }) => {
    let updatedList = [...currenciesBox];
    if (event.target.checked) {
      updatedList = [...currenciesBox, event.target.value];
    } else {
      updatedList.splice(currenciesBox.indexOf(event.target.value), 1);
    }
    setCurrenciesBox(updatedList);
  };

  const removeBox = (curr: string) => (
    setCurrenciesBox(currenciesBox.filter((item) => item !== curr))
  );

  return (
    <section className="App">
      <div className="box">
        <div className="box__currencies">
          {currenciesBox.map((curr) => (
            <div className="box__currencies--el">
              {curr}
              <button className="box__currencies--el--button" onClick={() => removeBox(curr)}>x</button>
            </div>
          ))}
        </div>
        <div className="box__buttons">
          {currencies.map((currency) => (
            <form>
              <label htmlFor={currency} className="box__buttons--button">
                <input
                  value={currency}
                  id={currency}
                  type="checkbox"
                  onChange={handleCheck}
                />
                <span className="checkbox" />
                {currency}
              </label>
            </form>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;
