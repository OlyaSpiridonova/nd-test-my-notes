<template>
  <div class="registration">
    <h2 class="h2">Регистрация</h2>
    <form @submit.prevent="submitForm" class="registration__form">
      <div class="registration__form-control">
        <label class="text-small" for="email">E-mail</label>
        <input
          class="text-small"
          type="text"
          id="email"
          v-model.trim="email"
          placeholder="Введите значение"
        />
      </div>
      <div class="registration__form-control">
        <label class="text-small" for="password">Пароль</label>
        <input
          class="text-small"
          type="password"
          id="password"
          v-model.trim="password"
          placeholder="Введите пароль"
        />
      </div>
      <div class="registration__form-control">
        <label class="text-small" for="repeatPassword">Пароль ещё раз</label>
        <input
          class="text-small"
          type="password"
          id="repeatPassword"
          v-model.trim="confirmPassword"
          placeholder="Введите пароль"
        />
      </div>
    </form>
    <div class="registration__active">
      <div class="registration__active-reg">
        <span class="text-small">У вас есть аккаунт? </span>
        <base-button link to="/login" mode="link">Войдите</base-button>
      </div>
      <base-button to @click="submitForm" class="text-normal" mode="mobile"
        >Зарегистрироваться</base-button
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
      confirmPassword: "",
    };
  },
  methods: {
    async submitForm() {
      const actionPayload = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      try {
        await this.$store.dispatch("registration", actionPayload);
        // const redirectURL = "/";
        // this.$router.replace(redirectURL);
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
.registration {
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
