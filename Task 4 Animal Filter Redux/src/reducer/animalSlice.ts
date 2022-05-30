import { createSlice } from '@reduxjs/toolkit';

export const animalSlice = createSlice({
  name: 'animal',
  initialState: {
    animals: localStorage.getItem('animals') ? JSON.parse(localStorage.getItem('animals') || '[]') : [] as object[],
    input: [] as string[],
    species: [] as string[],
  },
  reducers: {
    addAnimalInfo: (state, action) => {
      state.animals = [...state.animals, action.payload];
      localStorage.setItem('animals', JSON.stringify(state.animals));
    },

    addInputValueAsOption: (state, action) => {
      state.input = [...state.input, action.payload];
    },

    filterAnimals: (state, action) => {
      const notFiltered = JSON.parse(localStorage.getItem('animals') || '[]');
      if (action.payload === 'All Species') {
        state.animals = notFiltered;
      } else {
        state.animals = notFiltered.filter((animal: { animalspecies: string
        }) => animal.animalspecies === action.payload);
      }
    },

    getAllspecies: (state) => {
      const speciesArray = state.animals.map((animal: { animalspecies: string }) => animal.animalspecies);
      const speciesWithoutDuplicates = () => speciesArray.filter(
        (species: string, index: number) => speciesArray.indexOf(species) === index,
      );
      state.species = speciesWithoutDuplicates();
    },
  },
});

export const {
  addAnimalInfo, addInputValueAsOption, filterAnimals, getAllspecies,
} = animalSlice.actions;

export default animalSlice.reducer;
