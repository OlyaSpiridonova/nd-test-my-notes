<template>
  <base-dialog :show="true" @close="handleClose">
    <registration-card />
  </base-dialog>
</template>

<script>
import RegistrationCard from "@/components/RegistrationCard.vue";
export default {
  data() {
    return {};
  },
  components: {
    RegistrationCard,
  },
  methods: {
    handleClose() {
      this.$router.replace("/");
    },
  },
};
</script>
