<template>
  <v-page>
    <v-content>
      <v-content-block>
        <v-button large @click.native="open">Open Photo Browser</v-button>
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
