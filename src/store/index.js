import Vue from "vue";
import Vuex from "vuex";
import authModule from "./modules/auth/index";
import notesModule from "./modules/notes/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    notes: notesModule,
  },
});
