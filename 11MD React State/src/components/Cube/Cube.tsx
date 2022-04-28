import './Cube.scss';
import { useState } from 'react';

const Cube = () => {
  const [color, setColor] = useState('bisque');
  const CubeCollorArr = ['yellow', ' purple', ' orange', 'bisque'];
  const changeBoxColor = () => setColor(CubeCollorArr[Math.floor(Math.random() * CubeCollorArr.length)]);

  const [CubeSpanValue, SetCubeSpanValue] = useState('Nav Nospiests');
  const ChangeCubeSpan = () => {
    if (CubeSpanValue !== 'Nospiests') {
      SetCubeSpanValue('Nospiests');
    } else {
      SetCubeSpanValue('Nav Nospiests');
    }
  };
  return (
    <section className="Cube">
      <div className="Buttons">

        <button
          className="CubeButtons__Button"
          onClick={changeBoxColor}
        >
          Mainit kuba krasu
        </button>

        <button
          className="CubeButtons__Button"
          onClick={ChangeCubeSpan}
        >
          Mainit tekstu uz nospiests
        </button>
      </div>
      <div className="CubeAndSpan">
        <div className="ColoredCube " style={{ background: color }} />
        <span className="CubeSpan">{CubeSpanValue}</span>
      </div>
    </section>
  );
};
export default Cube;
