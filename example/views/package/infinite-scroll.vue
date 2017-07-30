<template>
  <v-page class="infinite-scroll-preview">
    <v-content>
      <v-infinite-scroll :loadmore="loadmore" :disable="disabled" ref="infiniteScroll">
        <ul>
          <li v-for="item in list">{{item.title}}</li>
        </ul>
        <v-spinner slot="spinner" name="bars" :size="30" color="#ffcc00" />
        <span slot="complete">--- 我是有底线的 ---</span>
      </v-infinite-scroll>
      <v-content-block>
        <v-row>
          <v-col>
            <v-button @click.native="toggleScroll(true)">On</v-button>
          </v-col>
          <v-col>
            <v-button class="danger" @click.native="toggleScroll(false)">Off</v-button>
          </v-col>
          <v-col>
            <v-button class="warning" @click.native="complete">Complete</v-button>
          </v-col>
        </v-row>
      </v-content-block>
    </v-content>
  </v-page>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      disabled: false,
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
    toggleScroll(bool) {
      if (bool) {
        this.$refs.infiniteScroll.attach();
      } else {
        this.$refs.infiniteScroll.detach();
      }
    },
    complete() {
      this.$refs.infiniteScroll.complete();
    },
  },
};
</script>

<style lang="less">
.infinite-scroll-preview {
  height: 100%;
  .v-infinite-scroll {
    height: e("calc(100% - 80px)");
    background: #fff;
  }
  ul li {
    line-height: 50px;
    font-size: 16px;
    padding-left: 15px;
    border-bottom: 1px solid #ddd;
  }
}
</style>
