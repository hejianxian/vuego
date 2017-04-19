<template>
  <div
    class="v-pull-refresh__content"
    @touchstart="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend="handleTouchEnd"
    :style="style">
    <div class="v-pull-refresh__layer">
      <div class="loader" v-if="refreshing">loading...</div>
      <div class="arrow message" v-else>{{message}}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { cssTransform, transitionEnd } from 'utils/tools';

export default {
  name: 'v-pull-refresh',
  props: {
    refresher: {
      type: Function,
      require: true,
    },
    distance: {
      type: Number,
      default: 50,
    },
    pullMessage: {
      type: String,
      default: 'Pull down to refresh',
    },
    releaseMessage: {
      type: String,
      default: 'Release to refresh',
    },
    refreshMessage: {
      type: String,
      default: 'Refreshing...',
    },
    refreshIcon: {
      type: String,
      default: 'refresh',
    },
    disable: Boolean,
  },
  data() {
    return {
      container: null,
      refreshing: false,
      start: null,
      identifier: '',
      shouldRefresh: false,
      diff: 0,
    };
  },
  computed: {
    message() {
      return this.shouldRefresh ? this.releaseMessage : this.pullMessage;
    },
    style() {
      return cssTransform(`translate3d(0, ${this.diff}px, 0)`);
    },
  },
  methods: {
    handleTouchStart(e) {
      if (this.refreshing || this.disable) return;

      const t = e.targetTouches[0];
      this.start = {
        y: t.pageY,
        x: t.pageX,
      };
      this.identifier = t.identifier;
    },
    handleTouchMove(e) {
      const container = this.$el;
      const scrollTop = container.scrollTop;

      let diff = 0;
      let moveX = 0;
      let moveY = 0;
      let moveTarget;

      if (this.refreshing || this.disable) return;

      if (this.identifier && e.touches) {
        for (let i = 0; i < e.touches.length; i += i) {
          if (e.touches[i].identifier === this.identifier) {
            moveTarget = e.touches[i];
          }
        }
      }
      if (!moveTarget) moveTarget = e.targetTouches[0];

      moveX = moveTarget.pageX;
      moveY = moveTarget.pageY;
      if (!moveX || !moveY) return;

      diff = moveY - this.start.y;
      if ((diff > 0 && scrollTop <= 0) || scrollTop < 0) {
        this.diff = Math.pow(diff, 0.8);
        this.shouldRefresh = this.diff > this.distance;
      } else {
        this.shouldRefresh = false;
      }
    },
    handleTouchEnd(e) {
      const container = this.$el;

      if (e.changedTouches && e.changedTouches.length > 0 && this.identifier) {
        if (e.changedTouches[0].identifier !== this.identifier) return;
      }
      if (this.refreshing || this.disable) return;

      container.style.transform = '';
      if (!this.shouldRefresh) {
        this.handleFinish();
        return;
      }
      container.classList.add('refreshing');

      this.refreshing = true;
      this.refresher.call(null, this.handleFinish);
    },
    handleFinish() {
      const container = this.$el;

      container.classList.remove('refreshing');
      container.classList.add('refreshdone');
      transitionEnd(container, () => {
        container.classList.remove('refreshdone');
      });
      this.refreshing = false;
    },
  },
};
</script>
