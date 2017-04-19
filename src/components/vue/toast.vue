<template>
  <div class="v-toast">
    <div class="v-toast__content">
      <i class="icon"></i>
      <span class="v-toast_message">{{message}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-toast',
  props: {
    message: String,
  },
};
</script>
