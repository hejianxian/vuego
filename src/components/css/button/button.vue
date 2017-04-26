<template>
  <button
    class="v-button"
    :class="[isLarge, isSmall, isRound, isOutline]">
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
  },
  computed: {
    isLarge() {
      return this.large ? 'v-button--large' : '';
    },
    isSmall() {
      return this.small ? 'v-button--small' : '';
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
