import { useState } from 'react';
import './Pica.scss';

const Pica = () => {
  const [picaValue, SetpicaValue] = useState('');
  const addpica = () => {
    SetpicaValue(`${picaValue}pica`);
  };
  return (
    <section className="Pica">
      <button
        className="PicaButton"
        type="button"
        onClick={addpica}
      >
        Pievienot pica
      </button>
      <span className="PicaText">
        Man garšo :
        {picaValue}
      </span>
    </section>
  );
};

export default Pica;
