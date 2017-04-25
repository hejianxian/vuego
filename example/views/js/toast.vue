<template>
  <div class="content">
    <div class="content-block">
      <v-button large class="info" @click.native="open">Open Toast</v-button>
    </div>
  </div>
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
