<template>
  <v-page header footer>
    <v-header class="custom-toolbar">Header</v-header>
    <v-content>
      <v-block-title>block title</v-block-title>
      <v-content-block>
        <p>Content block</p>
      </v-content-block>
    </v-content>
    <v-footer class="custom-toolbar">Footer</v-footer>
  </v-page>
</template>

<script>
export default {

};
</script>

<style lang="less">
.custom-toolbar {
  background: #ccc;
  text-align: center;
  line-height: 44px;
  font-size: 16px;
  font-weight: bold;
}
</style>
