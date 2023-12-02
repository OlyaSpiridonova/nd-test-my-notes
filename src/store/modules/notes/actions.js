export default {
  async createNote(context, payload) {
    const token = context.rootGetters.token;
    context.commit("setNoteError", null);
    const userId = context.rootGetters.userId;

    const response = await fetch(process.env.VUE_APP_URL + "notes", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: userId,
        title: payload.titleNote,
        content: payload.textNote,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to Fetch!");
      context.commit("setNoteError", responseData.message);

      throw error;
    }
  },
  async getNotes(context) {
    const token = context.rootGetters.token;
    const response = await fetch(process.env.VUE_APP_URL + "notes", {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to Fetch!");
      throw error;
    }
    context.commit("setNotes", responseData);
  },

  async deleteNote(context, payload) {
    const token = context.rootGetters.token;
    context.commit("deleteNotes", payload);
    const response = await fetch(`${process.env.VUE_APP_URL}notes/${payload}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to Fetch!");
      throw error;
    }
  },
};
