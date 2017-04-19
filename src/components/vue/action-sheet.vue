<template>
  <transition :name="transition" @after-leave="afterLeave">
    <div class="v-action-sheet" v-show="active" @click="close">
      <div class="v-action-sheet__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'v-action-sheet',
  props: {
    transition: {
      type: String,
      default: 'v-action-sheet',
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
