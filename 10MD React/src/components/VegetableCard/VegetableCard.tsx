import React, { FC } from 'react';
import './vegetableCard.scss';

type VegetableCardProps = {
    id: string,
    title: string,
    description: string,
    backgroundColor: string,
    available: boolean,
}

const VegetableCard: FC<VegetableCardProps> = ({
  id, title, description, backgroundColor, available,
}) => (
  available ? (
    <div className="vegetable-card" id={id} style={{ backgroundColor }}>
      <span className="vegetable-card__heading">{title}</span>
      <span className="vegetable-card__span">{id}</span>
      <p className="vegetable-card__desc">{description}</p>
    </div>
  ) : (
    <div className="vegetable-card__unavailable" id={id}>
      <h3>Not available</h3>
    </div>
  )
);

export default VegetableCard;
