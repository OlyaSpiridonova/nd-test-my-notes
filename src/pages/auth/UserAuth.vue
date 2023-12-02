<template>
  <base-dialog :show="true" @close="handleClose">
    <auth-card login @close="handleClose" />
  </base-dialog>
</template>

<script>
import AuthCard from "@/components/AuthCard.vue";
export default {
  data() {
    return {};
  },
  components: {
    AuthCard,
  },
  methods: {
    handleClose() {
      this.$router.replace("/");
    },
  },
};
</script>
