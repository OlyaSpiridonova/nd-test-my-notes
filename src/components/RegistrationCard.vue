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
          ref="password"
          class="text-small"
          type="password"
          id="password"
          v-model.trim="password"
          placeholder="Введите пароль"
        />
        <div
          class="registration__form-control-password"
          :class="{ notVisible: isVisiblePassword }"
          @click="changeVisiblePassword('password')"
        >
          <img src="../assets/onPassword.svg" alt="password" />
        </div>
      </div>
      <div class="registration__form-control">
        <label class="text-small" for="repeatPassword">Пароль ещё раз</label>
        <input
          ref="confirmPassword"
          class="text-small"
          type="password"
          id="repeatPassword"
          v-model.trim="confirmPassword"
          placeholder="Введите пароль"
        />
        <div
          class="registration__form-control-password"
          :class="{ notVisible: isVisibleConfirmPassword }"
          @click="changeVisiblePassword('confirmPassword')"
        >
          <img src="../assets/onPassword.svg" alt="password" />
        </div>
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
    <ul v-if="RegistrationErrors" class="registration__errors">
      <li
        class="registration__errors-item text-small-red"
        v-for="error in RegistrationErrors"
        :key="error"
      >
        {{ error }}
      </li>
    </ul>
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
      isVisiblePassword: false,
      isVisibleConfirmPassword: false,
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
        this.$router.replace("/notes");
      } catch (error) {
        this.error = error.message || "Failed to authenticate, try later...";
      }
    },
    handleError() {
      this.error = null;
    },
    changeVisiblePassword(inputRef) {
      if (this.$refs[inputRef].getAttribute("type") === "password") {
        this.$refs[inputRef].setAttribute("type", "text");
        inputRef === "password"
          ? (this.isVisiblePassword = true)
          : (this.isVisibleConfirmPassword = true);
      } else {
        this.$refs[inputRef].setAttribute("type", "password");
        inputRef === "password"
          ? (this.isVisiblePassword = false)
          : (this.isVisibleConfirmPassword = false);
      }
    },
  },
  computed: {
    RegistrationErrors() {
      return this.$store.getters.errors;
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
      position: relative;
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
      &-password.notVisible {
        &::after {
          opacity: 0;
        }
      }
      &-password {
        position: absolute;
        right: 16px;
        top: 67px;
        cursor: pointer;
        &::after {
          position: absolute;
          content: "";
          top: 7px;
          right: 9px;
          width: 23px;
          height: 2px;
          background: var(--green-light);
          transform: rotate(45deg);
          opacity: 1;
        }
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
  &__errors {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &-item {
      padding: 8px 20px;
      background: rgba(255, 116, 97, 0.1);
      border-radius: 24px;
    }
  }
}
</style>
