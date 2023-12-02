export default {
  async auth(context, payload) {
    context.commit("setError", null);
    const response = await fetch(process.env.VUE_APP_URL + "auth", {
      method: "POST",
      headers: {
        accept: "application/json",
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
    context.commit("setToken", responseData.accessToken);
    localStorage.setItem("token", responseData.accessToken);
  },

  async getAuthUser(context) {
    context.commit("setError", null);
    const token = context.rootGetters.token;
    const response = await fetch(process.env.VUE_APP_URL + "auth", {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
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
        accept: "application/json",
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

  async logout(context) {
    const token = context.rootGetters.token;
    const response = await fetch(process.env.VUE_APP_URL + "auth", {
      method: "DELETE",
      headers: {
        accept: "*/*",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = new Error("Failed to logout");
      throw error;
    }
    context.commit("setToken", null);
    context.commit("setUser", {
      userId: null,
      userEmail: null,
    });
    context.commit("setNotes", null);
    localStorage.clear();
  },

  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("localId");
    const userEmail = localStorage.getItem("localEmail");

    if (userId && userEmail && token) {
      context.commit("setToken", token);
      context.commit("setUser", {
        userId: userId,
        userEmail: userEmail,
      });
    }
  },
};
