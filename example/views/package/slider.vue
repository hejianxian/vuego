<template>
  <v-page>
    <v-content>
      <v-content-block>
        <v-slider>
          <v-slide-item class="a a1">1</v-slide-item>
          <v-slide-item class="a a2">2</v-slide-item>
          <v-slide-item class="a a3">3</v-slide-item>
        </v-slider>
      </v-content-block>
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
.a {
  text-align: center;
  font-size: 30px;
  line-height: 200px;
  color: #fff;
  &.a1 {
    background: palevioletred;
  }
  &.a2 {
    background: cornflowerblue;
  }
  &.a3 {
    background: yellowgreen;
  }
}
</style>
