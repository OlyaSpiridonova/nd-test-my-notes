export default {
  async auth(context, payload) {
    let url = "http://localhost:8080/api/auth";

    const response = await fetch(url, {
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
      throw error;
    }
    context.commit("setUser", {
      userId: responseData.id,
      userEmail: responseData.email,
    });
  },

  async registration(context, payload) {
    let url = "http://localhost:8080/api/reg";

    const response = await fetch(url, {
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
  },
};
