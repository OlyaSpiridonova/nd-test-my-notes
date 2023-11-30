export default {
  setNotes(state, payload) {
    state.notes = payload;
  },
  deleteNotes(state, payload) {
    state.notes = state.notes.filter((item) => item.id !== payload);
  },
  setNoteError(state, payload) {
    if (Array.isArray(payload) || payload === null) {
      state.noteErrors = payload;
    } else {
      state.noteErrors = [payload];
    }
  },
};
