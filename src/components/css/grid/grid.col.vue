<template>
  <div :class="vColStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-col',
  props: {
    col: {
      type: String,
      default: 'auto',
    },
  },
  computed: {
    vColStyle() {
      return `v-col--${this.col}`;
    },
  },
};
</script>
