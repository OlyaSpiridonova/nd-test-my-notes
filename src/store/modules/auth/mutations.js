export default {
  setUser(state, payload) {
    state.userId = payload.userId;
    state.userEmail = payload.userEmail;
  },
};
