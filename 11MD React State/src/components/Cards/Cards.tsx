import './Cards.scss';
import { useState } from 'react';

const Cards = () => {
  const cardDetails = [
    {
      id: 1,
      title: 'First card',
    },
    {
      id: 2,
      title: 'Second card',
    },
    {
      id: 3,
      title: 'Third card',
    },
    {
      id: 4,
      title: 'Fourth card',
    },
    {
      id: 5,
      title: 'Fifth card',
    },
    {
      id: 6,
      title: 'Sixth card',
    },
  ];
  const [cardLibrary, setCardLibrary] = useState(cardDetails);
  const buttonArray = [
    {
      id: 1,
      text: 'Reset',
      // onClick: () => {
      //   setCardLibrary(cardDetails);
      // },
    },
    {
      id: 2,
      text: 'Remove all',
      // onClick: () => {
      //   setCardLibrary([]);
      // },
    },
    {
      id: 3,
      text: 'Make all titles UPPERCASE',
      onClick: () => {
        // setCardLibrary(cardDetails.map((card) => ({ id: 1, title: card.title.toUpperCase() })));
      },
    },
  ];

  return (
    <section className="Cards">
      <div className="Cards__Buttons">
        {buttonArray.map((button) => (
          <button
            key={button.id}
            onClick={button.onClick}
          >
            {' '}
            {button.text}
          </button>
        ))}
      </div>
      <div className="Cards__Block">
        {cardDetails.map((card) => (

          <div className="Cards__Block--Card">

            <button className="Cards__Block--Button">X</button>

            <p>
              ID:
              {card.id}
            </p>
            <br />
            <p>
              TITLE:
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
