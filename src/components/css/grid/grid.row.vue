<template>
  <div class="v-row" :class="noGutterStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-row',
  props: {
    noGutter: Boolean,
  },
  computed: {
    noGutterStyle() {
      return this.noGutter ? 'v-row--no-gutter' : '';
    },
  },
};
</script>
