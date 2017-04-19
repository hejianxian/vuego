<template>
  <ul class="v-list" :class="[isInset]"><slot></slot></ul>
</template>

<script>
export default {
  name: 'v-list',
  props: {
    inset: {
      type: Boolean,
    },
    media: {
      type: Boolean,
    },
  },
  computed: {
    isInset() {
      return this.inset ? 'v-list--inset' : '';
    },
  },
};
</script>
