<template>
  <button
    class="v-button"
    :class="[btnSize, isRound, isOutline]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'v-button',
  props: {
    large: Boolean,
    small: Boolean,
    round: Boolean,
    outline: Boolean,
    disabled: Boolean,
  },
  computed: {
    btnSize() {
      if (this.large) {
        return 'v-button--large';
      }
      if (this.small) {
        return 'v-button--small';
      }
      return '';
    },
    isRound() {
      return this.round ? 'v-button--round' : '';
    },
    isOutline() {
      return this.outline ? 'v-button--outline' : '';
    },
  },
};
</script>
