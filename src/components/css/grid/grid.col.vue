<template>
  <div :class="className">
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
    className() {
      return `col-${this.col}`;
    },
  },
};
</script>
