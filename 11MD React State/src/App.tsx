import React from 'react';
import './App.scss';
import './assets/normalize.css';
import './assets/flexboxgrid.css';
import Calc from './components/Calc/Calc';
import Calc2 from './components/Calc/Calc2';
import Pica from './components/Pica/Pica';
import Cube from './components/Cube/Cube';
import Text from './components/Text/Text ';
import NumLine from './components/NumLine/NumLine';
import Cards from './components/Cards/Cards';

const App = () => (
  <>
    <section className="Section--Calc">
      <Calc />
      <Calc2 />
    </section>
    <section className="Section--Pica">
      <Pica />
    </section>
    <section className="Section--Cube">
      <Cube />
    </section>
    <section className="Section--Text">
      <Text />
    </section>
    <section className="Section--NumLine">
      <NumLine />
    </section>
    <section className="Section--Cards">
      <Cards />
    </section>
  </>
);

export default App;
