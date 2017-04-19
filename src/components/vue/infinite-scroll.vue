<template>
  <div class="v-infinite-scroll" @scroll="handleScroll">
    <div class="v-infinite-scroll__content">
      <slot></slot>
    </div>
    <div class="v-infinite-scroll__loader">
        <slot name="spinner">
          <v-spinner color="#999" :size="24"></v-spinner>
        </slot>
      </div>
  </div>
</template>

<script>
export default {
  name: 'v-infinite-scroll',
  props: {
    fetcher: {
      type: Function,
      require: true,
    },
    distance: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      disable: false,
    };
  },
  methods: {
    handleScroll() {
      const container = this.$el;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const containerHeight = container.offsetHeight;

      if (scrollHeight - scrollTop - containerHeight < this.distance) {
        if (!this.disable) {
          this.disable = true;
          this.fetcher.call(this, this.handleDone);
        }
      }
    },
    handleDone() {
      this.disable = false;
    },
  },
};
</script>
