export default {
  async createNote(context, payload) {
    context.commit("setNoteError", null);
    const url = context.rootGetters.baseUrl;
    const userId = context.rootGetters.userId;

    const response = await fetch(url + "notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    const url = context.rootGetters.baseUrl;
    const response = await fetch(url + "notes");
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to Fetch!");
      throw error;
    }
    context.commit("setNotes", responseData);
  },

  async deleteNote(context, payload) {
    const url = context.rootGetters.baseUrl;
    context.commit("deleteNotes", payload);

    const response = await fetch(`${url}notes/${payload}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to Fetch!");
      throw error;
    }
  },
};
