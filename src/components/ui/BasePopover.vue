<template>
  <div v-if="show" class="popover" @click="click">
    <div class="popover__triangle" />
    <span class="popover__logout text-small-bold" @click="logout">Выйти</span>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
    logout() {
      this.$store.dispatch("logout");
      if (this.$route.path !== "/") {
        this.$router.replace("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.popover {
  position: absolute;
  top: 120px;
  right: 160px;
  display: flex;
  width: 145px;
  height: 108px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  border-radius: 12px;
  background: var(--dark-middle);
  box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
  z-index: 100;
  @media (max-width: 1366px) {
    top: 90px;
    right: 80px;
  }
  @media (max-width: 767px) {
    right: 20px;
  }

  &__logout {
    cursor: pointer;
  }

  &__triangle {
    position: absolute;
    top: -10px;
    right: 20px;
    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 10px solid var(--dark-middle);
  }
}
</style>
