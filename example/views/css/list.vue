<template>
  <div class="content list-page">
    <div class="content-block-title">List</div>
    <v-list>
      <v-item v-for="item in lists" :key="item">
        <v-item-title>{{item}}</v-item-title>
      </v-item>
    </v-list>
    <div class="content-block-title">Icon List</div>
    <v-list>
      <v-item v-for="item in lists" :key="item">
        <v-item-media>
          <i class="icon icon-mock"></i>
        </v-item-media>
        <v-item-title>{{item}}</v-item-title>
      </v-item>
    </v-list>
    <div class="content-block-title">Inset List</div>
    <v-list inset>
      <v-item v-for="item in lists" :key="item">
        <v-item-media>
          <i class="icon icon-mock"></i>
        </v-item-media>
        <v-item-title>{{item}}</v-item-title>
      </v-item>
    </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: ['apple', 'android', 'window'],
    };
  },
};
</script>

<style lang="less">
.list-page{
  height: 100%;
  background: #EFEFF4;
}
.icon.icon-mock{
  background: #eee;
  border-radius: 4px;
}
</style>
