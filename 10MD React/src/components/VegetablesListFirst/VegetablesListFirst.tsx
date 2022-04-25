import React, { FC } from 'react';
import './vegetablesListFirst.scss';
import VegetableCard from '../VegetableCard/VegetableCard';

type VegetablesListFirstProps = {
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

const VegetablesListFirst: FC<VegetablesListFirstProps> = ({
  vegetables,
}) => (
  <div className="list-container">
    {vegetables.map((item) => createCard(item))}
  </div>
);

export default VegetablesListFirst;
