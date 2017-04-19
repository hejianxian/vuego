<template>
  <transition :name="transition" @after-leave="afterLeave">
    <div class="v-dialog" v-show="active">
      <div class="v-modal">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'v-modal',
  props: {
    transition: {
      type: String,
      default: 'v-modal',
    },
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    show() {
      this.active = true;
    },
    close() {
      this.active = false;
    },
    afterLeave() {
      this.$el.parentNode.removeChild(this.$el);
    },
  },
};
</script>
