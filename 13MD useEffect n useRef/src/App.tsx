import React from 'react';
import './assets/normalize.css';
import './assets/flexboxgrid.css';
import './App.scss';
import FirstCard from './components/FirstCard/FirstCard';
import SecondCard from './components/SecondCard/SecondCard';

const App = () => (
  <div className="App">
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <FirstCard />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SecondCard />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default App;
