<template>
  <v-page>
    <v-content>
      <v-content-block>
        <v-button large @click.native="open">Default Toast</v-button>
        <br>
        <v-button large class='danger' @click.native="openCustomToast">Close after 4s</v-button>
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
    open() {
      this.$Toast('发送成功');
    },
    openCustomToast() {
      this.$Toast('4秒后关闭', 4000);
    },
  },
};
</script>
