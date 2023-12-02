export default {
  setToken(state, payload) {
    state.token = payload;
  },
  setUser(state, payload) {
    state.userId = payload.userId;
    state.userEmail = payload.userEmail;
  },
  setError(state, payload) {
    if (Array.isArray(payload) || payload === null) {
      state.errors = payload;
    } else {
      state.errors = [payload];
    }
  },
};
