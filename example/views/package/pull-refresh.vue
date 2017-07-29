<template>
  <v-el class="pull-refresh-preview">
    <v-pull-refresh :refresher="scroll">
      <h1>12323</h1>
      <h1>12323</h1>
      <h1>12323</h1>
      <h1>12323</h1>
      <h1>12323</h1>
      <h1>12323</h1>
      <h1>12323</h1>
      <h1>12323</h1>
    </v-pull-refresh>
  </v-el>
</template>

<script>
export default {
  methods: {
    scroll(done) {
      console.log('scroll');
      setTimeout(() => {
        done();
      }, 2500);
    },
  },
};
</script>

<style lang="less">
.pull-refresh-preview {
  h1 {
    margin: 0;
    font-size: 16px;
    font-weight: 400;
    line-height: 50px;
    border-bottom: 1px solid #ddd;
    padding-left: 15px;
    background: #f9f9f9;
  }
}
</style>
