import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state() {
    return {
      notes: null,
      noteErrors: null,
    };
  },
  getters,
  actions,
  mutations,
};
