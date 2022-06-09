import axios from "axios";
import type {ActionContext, Commit} from "vuex";
import type {RootState} from "@/stores/ApiStore";

export interface jokesState {
  data : result;
}

type Context = ActionContext<jokesState, RootState>;

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
  data: {} as result,
  },

  getters: {
    result: (state: jokesState) => state.data,
  },
  actions: {
    async fetchJokes(ctx:Context ,amount = 3, range: number){
      try {
      const res = await axios.get(
        `https://v2.jokeapi.dev/joke/Any?idRange=${range}&amount=${amount}`);
        ctx.commit("updateJokes", res.data);
    }
      catch (error){
        console.log(error)
      }
    },
  },
  mutations: {
    updateJokes(state:jokesState, data:result) {
      state.data = data;
    },
  },
};
