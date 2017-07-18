<template>
  <v-modal ref="dialog">
    <div class="v-modal-inner">
      <div class="v-modal-title">{{title}}</div>
      <div class="v-modal-text">{{message}}</div>
    </div>
    <div class="v-modal-buttons">
      <span class="v-modal-button" v-for="button in buttons" @click="close(button.action)">{{button.text}}</span>
    </div>
  </v-modal>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
      default: 'Title',
    },
    message: {
      type: String,
      required: true,
      default: 'Message',
    },
    buttons: {
      type: Array,
      required: true,
      default() {
        return [{ text: 'Cancel' }];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    close(action) {
      this.$refs.dialog.close();
      if (action && typeof action === 'function') {
        action.call(this);
      }
    },
  },
  mounted() {
    this.$refs.dialog.show();
    this.$root.vuegoClose = this.close;
  },
};
</script>
