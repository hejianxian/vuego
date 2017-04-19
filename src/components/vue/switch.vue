<template>
  <label class="v-switch">
    <input type="checkbox" v-model="model" :disabled="disabled">
    <div class="v-switch__checkbox"></div>
  </label>
</template>

<script>
// TODO: Add swipe event
export default {
  name: 'v-switch',
  props: {
    value: {
      type: Boolean,
      require: true,
    },
    disabled: Boolean,
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
