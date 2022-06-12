import { defineStore } from "pinia";
import type { FilmsResultsModel } from "@/Models/FilmsModel";
import axios from "axios";

export const useFilmsStore = defineStore({
  id: "filmsStore",
  state: () => ({
    films: [] as FilmsResultsModel[],
  }),
  getters: {
    getFilms: (state) => state.films,
  },
  actions: {
    async fetchFilms() {
      try {
        const data = await axios.get("https://swapi.dev/api/films");
        this.films = data.data.results;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
