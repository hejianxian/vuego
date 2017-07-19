<template>
  <v-page>
    <v-content>
      <v-content-block>
        <v-button large @click.native="openDefault">Open Preloader</v-button>
      </v-content-block>
      <v-content-block>
        <v-button large class="warning" @click.native="openWithMessage">Open Preloader With Message</v-button>
      </v-content-block>
    </v-content>
  </v-page>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openDefault() {
      const loader = this.$Preloader();
      setTimeout(() => {
        loader.close();
      }, 3000);
    },
    openWithMessage() {
      const loaderWithMsg = this.$Preloader({
        spinner: 'spin',
        message: '加载中...',
        color: '#F7BA2A',
      });
      console.log(loaderWithMsg.isActive());
      setTimeout(() => {
        loaderWithMsg.close();
      }, 2000);
    },
  },
};
</script>
