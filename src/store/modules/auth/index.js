import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state() {
    return {
      userId: null,
      userEmail: null,
      errors: null,
    };
  },
  getters,
  actions,
  mutations,
};
