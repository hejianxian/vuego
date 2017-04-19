<template>
  <li>
    <label class="v-item__checkbox v-item__content">
      <input type="checkbox" :value="value" v-model="model" :disabled="disabled">
      <div class="v-item__media">
        <i class="icon icon-form-checkbox"></i>
      </div>
      <div class="v-item__inner">
        <div class="v-item__title">{{title}}</div>
      </div>
    </label>
  </li>
</template>

<script>
export default {
  name: 'v-checkbox',
  props: {
    value: {
      require: true,
    },
    disabled: Boolean,
    title: String,
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
