import axios from "axios";
import type {Commit} from "vuex";

export type oneJoke = {
  'category': string,
  'type': string,
  "setup": string,
  "delivery": string,
  "flags": {
    "nsfw": boolean,
    "religious": boolean,
    "political": boolean,
    "racist": boolean,
    "sexist": boolean,
    "explicit": boolean
  },
  id: number,
  safe: boolean,
  lang: string,
}

export type result = {
  error:boolean,
  amount:number,
  jokes:oneJoke[]
}




export default {
  state: {
    jokes: [],
  },
  getters: {
    allJokes(state : {jokes : result}) {
      return state.jokes.jokes;
    },
    jokesCount(state : {jokes : result}) {
      return state.jokes.amount;
    },
  },
  actions: {
    async fetchJokes(amount = 3, range: number , {commit} : {commit:Commit}) {
      try{
      const res = await axios.get(
        "https://v2.jokeapi.dev/joke/Any?idRange=" + range + "&amount=" + amount);
        commit("updateJokes", res.data);
    }
      catch (error){
        console.log(error)
      }
    },
  },
  mutations: {
    updateJokes(state:{jokes: result}, jokes:result) {
      state.jokes = jokes;
    },
  },
};
