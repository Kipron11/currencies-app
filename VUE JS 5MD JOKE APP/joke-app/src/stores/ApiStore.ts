import {createStore} from "vuex";
import jokes from "./modules/jokes";



export default createStore({
  modules: {
    jokes,
  },
});
