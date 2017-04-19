<template>
  <div class="v-preloader">
    <div class="v-preloader__content">
      <v-spinner class="v-preloader__spinner" :name="spinner" :color="color"></v-spinner>
      <span v-if="message">{{message}}</span>
    </div>
  </div>
</template>

<script>
import vSpinner from './spinner';

export default {
  name: 'v-preloader',
  props: {
    spinner: {
      type: String,
    },
    message: {
      type: String,
    },
    color: {
      type: String,
      default: '#fff',
    },
  },
  components: {
    vSpinner,
  },
};
</script>
