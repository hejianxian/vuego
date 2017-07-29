<template>
  <v-page class="infinite-scroll-preview">
    <v-content>
      <v-infinite-scroll :loadmore="loadmore">
        <ul>
          <li v-for="item in list">{{item.title}}</li>
        </ul>
        <v-spinner slot="spinner" name="bars" :size="30" color="#ffcc00" />
      </v-infinite-scroll>
    </v-content>
  </v-page>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.list = this.mockLists();
  },
  methods: {
    mockLists() {
      const list = [];
      for (let i = 0; i < 20; i += 1) {
        list.push({ title: `item-${i}` });
      }
      return list;
    },
    loadmore(done) {
      setTimeout(() => {
        this.list = this.list.concat(this.mockLists());
        done();
      }, 2000);
    },
  },
};
</script>

<style lang="less">
.infinite-scroll-preview {
  height: 100%;
  ul li {
    line-height: 50px;
    font-size: 16px;
    padding-left: 15px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
