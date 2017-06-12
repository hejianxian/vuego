<template>
  <v-page>
    <v-content>
      <v-content-block>
        <v-button large @click.native="showDialog">Dialog</v-button>
        <br>
        <v-button large class="success" @click.native="showConfirm">Confirm</v-button>
        <br>
        <v-button large class="warning" @click.native="showAlert">Alert</v-button>
      </v-content-block>
    </v-content>
  <v-page>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showDialog() {
      this.$Dialog.create();
    },
    showConfirm() {
      this.$Confirm();
    },
    showAlert() {
      this.$Alert();
    },
  },
};
</script>
