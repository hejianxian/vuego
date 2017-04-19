<template>
  <li>
    <label class="v-item__radio v-item__content">
      <input type="radio" v-model="model" :value="val" :disabled="disabled">
      <div class="v-item__inner">
        <div class="v-item__title">{{title}}</div>
      </div>
    </label>
  </li>
</template>

<script>
export default {
  name: 'v-radio',
  props: {
    value: {
      require: true,
    },
    val: {
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
