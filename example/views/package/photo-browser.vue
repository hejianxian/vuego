<template>
  <v-el class="content">
    <div class="content-block">
      <v-button large class="info" @click.native="open">Open Photo Browser</v-button>
    </div>
  </v-el>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    open() {
      this.$PhotoSwipe([{
        src: 'https://avatars1.githubusercontent.com/u/6087438?v=3&s=460',
      }, {
        src: 'https://avatars1.githubusercontent.com/u/6087438?v=3&s=460',
      }]);
    },
  },
};
</script>
