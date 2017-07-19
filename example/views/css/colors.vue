<template>
  <v-page>
    <v-content>
      <v-block-title>Default Color</v-block-title>
      <v-content-block>
        <ul>
          <li class="color__item blue">#1A98FF</li>
          <li class="color__item lightblue">#B8DFFF</li>
          <li class="color__item red">#FF2929</li>
          <li class="color__item orange">#FFB825</li>
          <li class="color__item green">#73C613</li>
          <li class="color__item gray">#999999</li>
          <li class="color__item black">#222222</li>
        </ul>
      </v-content-block>
    </v-content>
  </v-page>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
  ul {
    padding: 0;
  }
  .color__item {
    width: 100%;
    height: 40px;
    list-style: none;
    font-size: 12px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    margin-bottom: 5px;
    &.blue {
      background: #1A98FF;
    }
    &.lightblue {
      background: #B8DFFF;
    }
    &.black {
      background: #222222;
    }
    &.red {
      background: #FF2929;
    }
    &.orange {
      background: #FFB825;
    }
    &.green {
      background: #73C613;
    }
    &.gray {
      background: #999999;
    }
  }
</style>
