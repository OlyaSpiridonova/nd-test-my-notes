import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

export default {
  state() {
    return {
      baseUrl: "http://localhost:8080/api/",
      userId: null,
      userEmail: null,
      errors: null,
    };
  },
  getters,
  actions,
  mutations,
};
