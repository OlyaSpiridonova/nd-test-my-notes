<template>
  <div class="newNote">
    <h2 class="h2">Добавление заметки</h2>
    <form ref="newNote" @submit.prevent="submitNewNote" class="newNote__form">
      <div class="newNote__form-control">
        <label class="text-small" for="titleNote">Название заметки</label>
        <input
          class="text-small"
          maxlength="100"
          type="text"
          id="titleNote"
          v-model.trim="titleNote"
          placeholder="Введите название"
        />
        <span class="newNote__form-control-length text-small">{{
          titleNote.length + "/100"
        }}</span>
      </div>
      <div class="newNote__form-control">
        <label class="text-small" for="textNote">Текст заметки</label>
        <div class="newNote__textBlock">
          <textarea
            class="text-small"
            wrap="soft"
            rows="5"
            maxlength="255"
            id="textNote"
            v-model.trim="textNote"
            placeholder="Введите текст"
          />
          <span class="newNote__form-control-length text-small">{{
            textNote.length + "/255"
          }}</span>
        </div>
      </div>
    </form>
    <div class="newNote__active">
      <base-button @click="submitNewNote" class="text-normal" mode="mobile"
        >Добавить</base-button
      >
    </div>
    <ul v-if="createNoteErrors" class="newNote__errors">
      <li
        class="newNote__errors-item text-small-red"
        v-for="error in createNoteErrors"
        :key="error"
      >
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleNote: "",
      textNote: "",
      errors: null,
    };
  },
  emits: ["close-dialog"],
  methods: {
    async submitNewNote() {
      const actionPayload = {
        titleNote: this.titleNote,
        textNote: this.textNote,
      };
      try {
        await this.$store.dispatch("createNote", actionPayload);
        await this.$store.dispatch("getNotes");
        this.$refs.newNote.reset();
        this.$emit("close-dialog");
      } catch (error) {
        this.errors = error;
      }
    },
  },
  computed: {
    createNoteErrors() {
      return this.$store.getters.notesErrors;
    },
  },
};
</script>

<style lang="scss" scoped>
.newNote {
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
      textarea {
        padding: 28px;
        height: 316px;
        border-radius: var(--border-radius-input);
        resize: none;
      }

      &-length {
        padding: 0 24px;
        margin-left: auto;
      }
    }
  }

  &__textBlock {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__active {
    display: flex;
    justify-content: flex-end;
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
