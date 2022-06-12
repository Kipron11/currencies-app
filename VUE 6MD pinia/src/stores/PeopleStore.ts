import { defineStore } from "pinia";
import type { PeopleResultsModel } from "@/Models/PeopleModel";
import axios from "axios";

export const usePeopleStore = defineStore({
  id: "peopleStore",
  state: () => ({
    people: [] as PeopleResultsModel[],
  }),
  getters: {
    getPeople: (state) => state.people,
  },
  actions: {
    async fetchPeople(pageNum: number | string) {
      try {
        const data = await axios.get(`https://swapi.dev/api/people/${pageNum}`);
        this.people = data.data.results;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
});
