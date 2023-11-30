export default {
  async auth(context, payload) {
    context.commit("setError", null);
    const response = await fetch(process.env.VUE_APP_URL + "auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || "Failed to authentication"
      );
      context.commit("setError", responseData.message);
      throw error;
    }
    context.commit("setUser", {
      userId: responseData.id,
      userEmail: responseData.email,
    });
    localStorage.setItem("localId", responseData.id);
    localStorage.setItem("localEmail", responseData.email);
  },

  async registration(context, payload) {
    context.commit("setError", null);
    const response = await fetch(process.env.VUE_APP_URL + "reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
        confirm_password: payload.confirmPassword,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to registration");
      context.commit("setError", responseData.message);
      throw error;
    }

    context.commit("setUser", {
      userId: responseData.id,
      userEmail: responseData.email,
    });
  },

  logout(context) {
    context.commit("setUser", {
      userId: null,
      userEmail: null,
    });
    context.commit("setNotes", null);
    localStorage.removeItem("localId");
    localStorage.removeItem("localEmail");
  },

  tryLogin(context) {
    const userId = localStorage.getItem("localId");
    const userEmail = localStorage.getItem("localEmail");

    if (userId && userEmail) {
      context.commit("setUser", {
        userId: userId,
        userEmail: userEmail,
      });
    }
  },
};
