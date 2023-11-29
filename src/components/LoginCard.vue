<template>
  <div class="login">
    <h2 class="h2">Вход в ваш аккаунт</h2>
    <form @submit.prevent="submitForm" class="login__form">
      <div class="login__form-control">
        <label class="text-small" for="email">E-mail</label>
        <input
          class="text-small"
          type="text"
          id="email"
          v-model.trim="email"
          placeholder="Введите значение"
        />
      </div>
      <div class="login__form-control">
        <label class="text-small" for="password">Пароль</label>
        <input
          class="text-small"
          type="password"
          id="password"
          v-model.trim="password"
          placeholder="Введите пароль"
        />
      </div>
    </form>
    <div class="login__active">
      <div class="login__active-reg">
        <span class="text-small">У вас нет аккаунта? </span>
        <base-button link to="/registration" mode="link"
          >Зарегистрируйтесь</base-button
        >
      </div>
      <base-button @click="submitForm" class="text-normal" mode="mobile"
        >Войти</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from "./ui/BaseButton.vue";
export default {
  components: { BaseButton },
  data() {
    return {
      email: "",
      password: "",
      isValid: true,
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async submitForm() {
      const actionPayload = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("auth", actionPayload);
        this.$router.replace("/notes");
      } catch (error) {
        this.error = error.message || "Failed to authenticate, try later...";
      }
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  gap: 40px;
  flex-direction: column;
  @media (max-width: 759px) {
    gap: 28px;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 24px;

    &-control {
      display: flex;
      flex-direction: column;
      gap: 8px;
      label {
        padding: 0 24px;
      }
      input {
        padding: 0 28px;
        height: 72px;
        border-radius: var(--border-radius-input);
      }
    }
  }

  &__active {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 759px) {
      flex-direction: column-reverse;
      gap: 12px;
    }

    &-reg {
      display: flex;
      align-items: center;
      gap: 4px;
      @media (max-width: 1366px) {
        align-items: flex-start;
        flex-direction: column;
      }
      @media (max-width: 960px) {
        align-items: center;
        flex-direction: row;
      }
    }
  }
}
</style>
