<template>
  <router-link v-if="link" :to="to" :class="mode">
    <slot></slot>
  </router-link>
  <button v-else :class="mode" @click="click">
    <slot></slot>
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: "/",
    },
  },
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  height: 56px;
  gap: 12px;
  color: var(--white);
  border-radius: var(--border-radius);
  background: var(--green-light);
  &:hover {
    background-color: var(--green-middle);
  }
  &:active {
    background-color: var(--green-dark);
  }
}

a {
  color: var(--green-light);
  &:hover {
    color: var(--white);
  }
}

.disabled {
  background: var(--gray);
}
.circle {
  position: absolute;
  width: 56px;
}
.mobile {
  @media (max-width: 759px) {
    width: 100%;
  }
}
</style>
