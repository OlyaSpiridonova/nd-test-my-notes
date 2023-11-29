export default {
  async createNote(context, payload) {
    let url = "http://localhost:8080/api/notes";
    const userId = context.rootGetters.userId;

    const response = await fetch(url, {
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
      const error = new Error(
        responseData.message || "Failed to authentication"
      );
      throw error;
    }
  },

  async getNotes(context) {
    const response = await fetch("http://localhost:8080/api/notes");
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to Fetch!");
      throw error;
    }
    context.commit("setNotes", responseData);
  },

  async deleteNote(context, payload) {
    context.commit("deleteNotes", payload);

    const response = await fetch(`http://localhost:8080/api/notes/${payload}`, {
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
