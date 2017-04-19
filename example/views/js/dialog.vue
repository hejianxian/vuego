<template>
  <v-el class="content">
    <div class="content-block">
      <v-row>
        <v-col col="33">
          <v-button class="info" @click.native="showDialog">Dialog</v-button>
        </v-col>
        <v-col col="33">
          <v-button class="success" @click.native="showConfirm">Confirm</v-button>
        </v-col>
        <v-col col="33">
          <v-button class="warning" @click.native="showAlert">Alert</v-button>
        </v-col>
      </v-row>
    </div>
  </v-el>
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
