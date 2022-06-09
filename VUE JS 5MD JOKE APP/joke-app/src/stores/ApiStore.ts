import {createStore} from "vuex";
import joke from "./modules/joke";

export default createStore({
  modules: {
    joke,
  },
});
