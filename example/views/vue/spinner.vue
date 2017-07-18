<template>
  <v-page>
    <v-content>
      <div class="content-block spinner-preview">
        <v-spinner :size="30" color="#007aff"></v-spinner>
        <v-spinner name="bars" :size="30" color="#ffcc00"></v-spinner>
        <v-spinner name="balls" :size="40" color="#5ac8fa"></v-spinner>
        <v-spinner name="cubes" :size="50" color="#4cd964"></v-spinner>
        <v-spinner name="bubbles" :size="60" color="#ff9500"></v-spinner>
        <v-spinner name="spin" :size="28" color="#000"></v-spinner>
      </div>
    </v-content>
  </v-page>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less">
.spinner-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
