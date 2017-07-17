<template>
  <v-page>
    <v-content>
      <v-content-block>
        <v-button large @click.native="open">Open Toast</v-button>
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
    open() {
      this.$Toast('发送成功');
    },
  },
};
</script>
