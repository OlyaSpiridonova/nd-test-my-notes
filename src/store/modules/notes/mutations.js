export default {
  setNotes(state, payload) {
    state.notes = payload;
  },
  deleteNotes(state, payload) {
    state.notes = state.notes.filter((item) => item.id !== payload);
  },
};
