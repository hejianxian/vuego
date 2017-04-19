<template>
  <v-el class="content">
    <div class="content-block">
      <v-button large @click.native="openDefault">Open Preloader</v-button>
    </div>
    <div class="content-block">
      <v-button large @click.native="openWithMessage" class="info">Open Preloader With Message</v-button>
    </div>
  </v-el>
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
