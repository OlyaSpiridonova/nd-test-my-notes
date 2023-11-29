<template>
  <div class="noteCard">
    <div class="noteCard__title h4">{{ title }}</div>
    <div class="noteCard__content text-normal">{{ content }}</div>
    <div class="noteCard__delete">
      <base-button @click="deleteNote(id)">
        <div class="noteCard__delete-btn">
          <img src="../../assets/close.svg" alt="delete" />
          <span class="text-normal">Удалить</span>
        </div>
      </base-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async deleteNote(id) {
      try {
        await this.$store.dispatch("deleteNote", id);
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.noteCard {
  display: flex;
  flex-direction: column;
  border-radius: 12px 50px 12px 12px;
  width: 507px;
  height: 100%;
  max-height: 480px;
  background: var(--green-light);

  &__title {
    position: relative;
    padding: 20px 56px 20px 28px;
    border-bottom: 1px solid var(--green);
    &:before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      border-width: 0 40px 40px 0;
      border-style: solid;
      border-bottom-left-radius: 12px;
      border-color: var(--green) var(--dark);
      box-shadow: -3px 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
  &__content {
    padding: 20px 28px 28px 28px;
  }
  &__delete {
    display: flex;
    justify-content: flex-end;
    padding: 8px;
    &-btn {
      display: flex;
      align-items: center;
      gap: 12px;
    }
  }
}
</style>
