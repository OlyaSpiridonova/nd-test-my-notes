export default {
  userId(state) {
    return state.userId;
  },
  userEmail(state) {
    return state.userEmail;
  },
  isAuthenticated(state) {
    return !!state.userId;
  },
};
