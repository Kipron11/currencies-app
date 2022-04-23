import React from 'react';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Buttons from './components/Buttons-line/buttons-line';
import Buttons1 from './components/Buttons-1-line/buttons-1-line';
import ImageLine from './components/imageLine/ImageLine';
import TitleLine from './components/titleLine/TitleLine';
import Buttons2 from './components/Buttons-2-line/buttons-2-line';

const btnLibrary = [{
  id: '1',
  title: 'Button 1',
  backgroundColor: 'orange',
},
{
  id: '2',
  title: 'Button 2',
  backgroundColor: 'blue',
},
{
  id: '3',
  title: 'Button 3',
  backgroundColor: 'green',
},
{
  id: '4',
  title: 'Button 4',
  backgroundColor: 'teal',
}];

const App = () => (
  <div className="container">

    <div>
      <div className="nav">
        <Navigation text="Link 1" />
        <Navigation text="Link 2" />
        <Navigation text="Link 3" />
      </div>
    </div>

    <div>
      <div className="buttons">
        <Buttons />
        <Buttons />
        <Buttons />
      </div>
    </div>

    <div>
      <div className="buttons-1">
        <Buttons1 text="Button 1" />
        <Buttons1 text="Button 2" />
        <Buttons1 text="Button 3" />
      </div>
    </div>

    <div>
      <div className="image-line">
        <ImageLine picture="https://i.pinimg.com/564x/e2/dd/88/e2dd88046b3ccb68edbd93d33ccf5c49.jpg" />
        <ImageLine picture="https://i.pinimg.com/564x/e2/dd/88/e2dd88046b3ccb68edbd93d33ccf5c49.jpg" />
        <ImageLine picture="https://i.pinimg.com/564x/e2/dd/88/e2dd88046b3ccb68edbd93d33ccf5c49.jpg" />
        <ImageLine picture="https://i.pinimg.com/564x/e2/dd/88/e2dd88046b3ccb68edbd93d33ccf5c49.jpg" />
      </div>
    </div>

    <div>
      <div className="title-line">
        <TitleLine classList="title-line__card" title="TITLE" description="DESCRIPTION..." button="ACTION" />
        <TitleLine classList="title-line__card" title="TITLE" description="DESCRIPTION..." button="ACTION" />
        <TitleLine classList="title-line__card" title="TITLE" description="DESCRIPTION..." button="ACTION" />
      </div>
    </div>

    <div>
      <div className="title-line title-line__pos">
        <TitleLine
          classList="title-line__card"
          title="TITLE 1"
          description="DESCRIPTION 1..."
          button="ACTION"
        />
        <TitleLine
          classList="title-line__card"
          title="TITLE 2 "
          description="DESCRIPTION 2..."
          button="ACTION"
        />
        <TitleLine
          classList="title-line__card"
          title="TITLE 3"
          description="DESCRIPTION 3..."
          button="ACTION"
        />
      </div>
    </div>

    <div>
      <div className="buttons-2">
        {btnLibrary.map((item) => (
          <Buttons2
            id={item.id}
            title={item.title}
            background={item.backgroundColor}
          />
        ))}
      </div>
    </div>
  </div>

);

export default App;
