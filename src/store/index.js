import { createStore } from "vuex";
import journal from "./journal";

const store = createStore({
  modules: {
    journal,
  },
});

export default store;
