<template>
  <v-el>
    <div class="content-block-title">Slider</div>
    <v-slider>
      <v-slide-item class="a a1">1</v-slide-item>
      <v-slide-item class="a a2">2</v-slide-item>
      <v-slide-item class="a a3">3</v-slide-item>
    </v-slider>
  </v-el>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less">
.slider-test {
  width: 200px;
  height: 200px;
  background: palevioletred;
}
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
