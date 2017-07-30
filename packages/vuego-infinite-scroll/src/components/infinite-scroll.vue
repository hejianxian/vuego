<template>
  <div class="v-infinite-scroll">
    <div class="v-infinite-scroll__content">
      <slot></slot>
    </div>
    <div class="v-infinite-scroll__loader" v-if="fetching">
      <slot name="spinner"></slot>
    </div>
    <div class="v-infinite-scroll__complete" v-if="completed">
      <slot name="complete"></slot>
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
      default: true,
    },
    distance: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      fetching: false,
      completed: false,
    };
  },
  computed: {
    disabled() {
      if (this.disable && typeof this.disable === 'function') {
        return this.disable(); // bind 'this' first
      }
      return this.disable;
    }
  },
  watch: {
    disabled(val) {
      val ? this.off() : this.on();
    },
  },
  methods: {
    handleScroll() {
      if (this.disabled) return;

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
      this.fetching = false;
      this.disabled = false;
      this.completed = false;
      this.$el.addEventListener('scroll', this.handleScroll);
    },
    detach() {
      this.fetching = false;
      this.disabled = true;
      this.completed = false;
      this.$el.removeEventListener('scroll', this.handleScroll);
    },
    complete() {
      this.completed = true;
      this.fetching = false;
      this.disabled = true;
      this.$el.removeEventListener('scroll', this.handleScroll);
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.disabled) return;
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
  &__loader, &__complete {
    text-align: center;
    padding: 10px 0;
  }
}
</style>
