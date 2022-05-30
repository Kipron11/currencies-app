import './Animals.scss';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import {
  addAnimalInfo, addInputValueAsOption, filterAnimals, getAllspecies,
} from '../reducer/animalSlice';
import { AppDispatch, RootState } from '../store';

import Header from './Header';

const Animals = () => {
  const dispatch = useDispatch<AppDispatch>();
  const animals = useSelector((state: RootState) => state.animals.animals);
  const input = useSelector((state: RootState) => state.animals.input);
  const species = useSelector((state: RootState) => state.animals.species);

  return (
    <section className="animals__page">
      <Header />
      <div className="filter__buttons">
        {localStorage.length > 0 && (
          <button
            className="button"
            onClick={() => {
              dispatch(filterAnimals('All Species'));
            }}
          >
            All Species

          </button>
        )}
        {animals && species.map((specie) => (
          <div key={Math.random()}>
            <button
              onClick={() => {
                dispatch(filterAnimals(`${specie}`));
              }}
              className="button"
            >
              {specie}

            </button>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Animals;
