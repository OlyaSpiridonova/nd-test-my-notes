<template>
  <div>
    <div v-if="show" @click="tryClose" class="backdrop"></div>
    <transition name="dialog">
      <dialog open v-if="show">
        <base-button class="close_btn" mode="circle" @click="tryClose">
          <img src="../../assets/close.svg" alt="close" />
        </base-button>
        <section>
          <slot></slot>
        </section>
      </dialog>
    </transition>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
  emits: ["close"],
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    fixed: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    tryClose() {
      if (this.fixed) return;
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  opacity: 0.7;
  background-color: var(--dark);
  z-index: 10;
}

dialog {
  top: 164px;
  width: 780px;
  z-index: 100;
  padding: 80px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: var(--border-radius-dialog);
  background: var(--dark-middle, #1b2f46);
  @media (max-width: 1366px) {
    top: 34px;
    width: 594px;
    padding: 56px;
  }
  @media (max-width: 960px) {
    top: 220px;
    width: 688px;
    padding: 56px;
  }
  @media (max-width: 759px) {
    top: 0;
    width: 352px;
    padding: 96px 16px 24px 16px;
  }
}

header {
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0 0;
}

.close_btn {
  top: 20px;
  right: 20px;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.dialog-enter-active {
  transition: all 0.3s ease-in-out;
}

.dialog-leave-active {
  transition: all 0.3s ease-in;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
