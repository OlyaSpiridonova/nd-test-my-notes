<template>
  <div class="notes">
    <div class="notes__block">
      <base-note-card
        v-for="note in notes"
        :title="note.title"
        :content="note.content"
        :id="note.id"
        :key="note.id"
      />
    </div>
    <base-dialog :show="isNewNote" @close="handleClose">
      <new-note-card @close-dialog="handleClose" />
    </base-dialog>
    <base-button mode="circle" class="notes__btn" @click="addNewNote">
      <img src="../assets/add.svg" alt="add new notes" />
    </base-button>
  </div>
</template>

<script>
import NewNoteCard from "@/components/NewNoteCard.vue";
import BaseNoteCard from "@/components/ui/BaseNoteCard.vue";
export default {
  data() {
    return {
      isNewNote: false,
    };
  },
  components: { NewNoteCard, BaseNoteCard },
  methods: {
    addNewNote() {
      this.isNewNote = true;
    },
    handleClose() {
      this.isNewNote = false;
    },
    async loadNotes() {
      try {
        await this.$store.dispatch("getNotes");
      } catch (error) {
        this.error = error.message || "Something went wrong!";
      }
    },
  },
  computed: {
    notes() {
      return this.$store.getters.notes;
    },
  },
  created() {
    this.loadNotes();
  },
};
</script>

<style lang="scss" scoped>
.notes {
  &__block {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 40px 160px;
    gap: 40px;
    @media (max-width: 1919px) {
      padding: 40px 80px;
      gap: 20px;
    }
    @media (max-width: 1365px) {
      padding: 40px;
    }
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  &__btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    box-shadow: 0px 15px 46px -10px rgba(0, 0, 0, 0.6);
  }
}
</style>
