import React, { FC } from 'react';
import './vegetablesListSecond.scss';
import VegetableCard from '../VegetableCard/VegetableCard';

type VegetablesListSecondProps = {
  vegetables: object[];
}

const createCard = (vegetableEl: any) => (
  <VegetableCard
    id={vegetableEl.id}
    title={vegetableEl.title}
    description={vegetableEl.description}
    backgroundColor={vegetableEl.backgroundColor}
    available={vegetableEl.available}
  />
);

const VegetablesListSecond: FC<VegetablesListSecondProps> = ({
  vegetables,
}) => (
  <div className="list-container">
    {vegetables.map((item) => createCard(item))}
  </div>
);

export default VegetablesListSecond;
