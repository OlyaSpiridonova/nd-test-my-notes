<template>
  <header class="header">
    <nav class="header__nav">
      <router-link to="/">
        <img src="../../assets/logo.svg" alt="logo" class="header__logo" />
      </router-link>
      <div v-if="userId" class="header__user">
        <span class="text-small">{{ userEmail }}</span>
        <img src="../../assets/user.svg" alt="user" />
      </div>
      <base-button v-else to="/login" @click="handleToLogin">
        <img src="../../assets/enterIcon.svg" alt="enter" />
        <span class="text-normal">Вход</span>
      </base-button>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
    };
  },
  methods: {
    handleToLogin() {
      this.$router.replace("/login");
    },
  },
  computed: {
    userId() {
      return this.$store.getters.userId;
    },
    userEmail() {
      return this.$store.getters.userEmail;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 40px 160px;

  @media (max-width: 1366px) {
    padding: 20px 80px;
  }
  @media (max-width: 767px) {
    padding: 20px 40px;
  }
  @media (max-width: 759px) {
    padding: 20px;
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__logo {
    @media (max-width: 779px) {
      height: 36px;
    }
  }
  &__user {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
