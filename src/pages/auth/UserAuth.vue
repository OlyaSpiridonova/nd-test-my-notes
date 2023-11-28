<template>
  <base-dialog :show="true" @close="handleClose">
    <login-card />
  </base-dialog>
</template>

<script>
import LoginCard from "@/components/LoginCard.vue";
export default {
  data() {
    return {};
  },
  components: {
    LoginCard,
  },
  methods: {
    handleClose() {
      this.$router.replace("/");
    },
  },
};
</script>
