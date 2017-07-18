<template>
  <v-action-sheet ref="actionSheet">
    <div class="v-action-sheet__group">
      <div class="v-action-sheet__label" v-if="title">{{title}}</div>
      <div v-for="button in buttons" class="v-action-sheet__button" @click="close(button.action)">{{button.text}}</div>
    </div>
    <div class="v-action-sheet__group">
      <div class="v-action-sheet__button v-action-sheet__button--bold" @click="close">{{cancel.text}}</div>
    </div>
  </v-action-sheet>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    buttons: {
      type: Array,
      required: true,
    },
    cancel: {
      type: Object,
      default() {
        return {
          text: 'Cancel',
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    close(action) {
      this.$refs.actionSheet.close();
      if (action && typeof action === 'function') {
        action.call(this);
      }
    },
  },
  mounted() {
    this.$refs.actionSheet.show();
    this.$root.vuegoClose = this.close;
  },
};
</script>
