<template>
  <div class="v-infinite-scroll">
    <div class="v-infinite-scroll__content">
      <slot></slot>
    </div>
    <div class="v-infinite-scroll__loader" v-if="fetching">
      <slot name="spinner"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-infinite-scroll',
  props: {
    loadmore: {
      type: Function,
      require: true,
    },
    disable: {
      type: [ Function, Boolean ],
      default: false,
    },
    distance: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      disabled: false,
      fetching: false,
    };
  },
  methods: {
    handleScroll() {
      const container = this.$el;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight;
      const containerHeight = container.offsetHeight;

      if (scrollHeight - scrollTop - containerHeight < this.distance) {
        if (!this.fetching) {
          this.fetching = true;
          this.loadmore.call(this, this.done);
        }
      }
    },
    done() {
      this.fetching = false;
    },
    attach() {
      this.fetching = true;
      this.disabled = false;
    },
    detach() {
      this.fetching = false;
      this.disabled = true;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$el.addEventListener('scroll', this.handleScroll);
    });
  },
  beforeDestroy () {
    this.$el.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="less">
.v-infinite-scroll {
  height: 100%;
  overflow-y: auto;
  &__loader {
    text-align: center;
    padding: 10px 0;
  }
}
</style>
