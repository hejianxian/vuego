<template>
  <v-page>
    <v-content>
      <v-content-block>
        <v-button large @click.native="showDialog">Default Dialog</v-button>
        <br>
        <v-button large class="info" @click.native="showCustomDialg">Custom Dialog</v-button>
        <br>
        <v-button large class="success" @click.native="showConfirm">Confirm</v-button>
        <br>
        <v-button large class="warning" @click.native="showAlert">Alert</v-button>
      </v-content-block>
    </v-content>
  </v-page>
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
    showCustomDialg() {
      this.$Dialog.create({
        title: 'Custom Dialog',
        message: 'Test message',
        buttons: [{
          text: 'Btn1',
        }, {
          text: 'Btn2',
        }, {
          text: 'Btn3',
        }],
      });
    },
    showConfirm() {
      this.$Confirm({
        title: 'Confirm',
        message: 'Test message',
        buttons: [{
          text: 'Cancel',
          action() {
            this.$Alert({
              title: 'Tips',
              message: 'You clicked `Cancel`',
            });
          },
        }, {
          text: 'Yes',
          action() {
            this.$Toast('You clicked `Yes`');
          },
        }],
      });
    },
    showAlert() {
      this.$Alert({
        title: 'Alert',
        message: 'Test message',
        button: {
          text: '确定',
        },
      });
    },
  },
};
</script>
