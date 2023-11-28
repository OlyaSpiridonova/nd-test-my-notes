<template>
  <div id="app">
    <main-header />
    <router-view />
  </div>
</template>

<script>
import MainHeader from "./components/layouts/MainHeader.vue";
export default {
  components: {
    MainHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  border: none;
  text-decoration: none;
}
html,
body {
  width: 100%;
  height: 100%;
  background: #0a1f38;
}
#app {
  font-family: "Montserrat", sans-serif;
  background: var(--dark);

  // colors
  --dark: #0a1f38;
  --dark-middle: #1b2f46;
  --dark-light: #2f4056;
  --gray: #9da5af;
  --green-dark: #819400;
  --green-middle: #97ab0d;
  --green: #a5bb0c;
  --green-light: #b1c909;
  --white: #ffffff;

  // border-radius
  --border-radius: 32px;
  --border-radius-dialog: 40px;
  --border-radius-input: 36px;

  .h1 {
    font-size: 104px;
    font-weight: 900;
    line-height: 104px;
    color: var(--white);
    @media (max-width: 759px) {
      font-size: 60px;
      line-height: 64px;
    }
  }

  .h2 {
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 72px;
    color: var(--white);
    @media (max-width: 759px) {
      font-size: 32px;
      line-height: 36px;
    }
  }

  .h3 {
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 48px;
    @media (max-width: 759px) {
      font-size: 24px;
      line-height: 36px;
    }
  }

  .h4 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
    color: var(--white);
  }

  .text-normal {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    overflow: hidden;
    color: var(--white);
    text-overflow: ellipsis;
  }

  .text-small {
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    overflow: hidden;
    color: var(--gray);
    text-overflow: ellipsis;
    white-space: nowrap;
    @media (max-width: 759px) {
      font-size: 14px;
    }
  }

  .text-small-bold {
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    overflow: hidden;
    color: var(--white);
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
