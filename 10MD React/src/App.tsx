import React from 'react';
import './App.scss';
import './assets/normalize.css';
import './assets/flexboxgrid.css';
import Task from './components/Task/Task';
import VegetablesListFirst from './components/VegetablesListFirst/VegetablesListFirst';
import VegetablesListSecond from './components/VegetablesListSecond/VegetablesListSecond';

const tasks = [
  {
    id: '1',
    text: 'Do laundry',
    done: true,
  },
  {
    id: '2',
    text: 'Clean house',
    done: false,
  },
  {
    id: '3',
    text: 'Make pica and deliver to Ketijas house',
    done: true,
  },
];

const vegetables = [
  {
    id: '1',
    title: 'Cucumber',
    description: 'It is green',
    backgroundColor: 'green',
    available: true,
  },
  {
    id: '2',
    title: 'Carrot',
    description: 'It is orange',
    backgroundColor: 'orange',
    available: false,
  },
  {
    id: '3',
    title: 'Sweet pepper',
    description: 'It is in many colors',
    backgroundColor: 'yellow',
    available: true,
  },
];

const showTasks = (taskArr: any[]) => {
  const result = taskArr.map((item) => {
    if (!item.done) {
      return <Task id={item.id} text={item.text} done={item.done} />;
    }
    return <s><Task id={item.id} text={item.text} done={item.done} /></s>;
  });
  return result;
};

const App = () => (
  <div className="container container-fluid">
    <div className="container-box">
      <div className="row">
        <div className="col-md-12">
          {showTasks(tasks)}
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          {showTasks(tasks).filter((item) => item.props.done === false)}
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <VegetablesListFirst vegetables={vegetables} />
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <VegetablesListSecond vegetables={vegetables.filter((item) => item.available)} />
        </div>
      </div>
    </div>
  </div>
);

export default App;
