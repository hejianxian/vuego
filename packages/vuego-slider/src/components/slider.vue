<template>
  <div class="v-slider">
    <div class="v-slider__inner" v-touch-pan="handlePan">
      <div class="v-slider__warp"
        ref="slider"
        :style="position">
        <slot></slot>
      </div>
    </div>
    <div class="v-slider__arrow arrow-left" v-if="!disableArrow" @click="slideTo(index-1)"></div>
    <div class="v-slider__arrow arrow-right" v-if="!disableArrow" @click="slideTo(index+1)"></div>
    <div class="v-slider__dots" v-if="!disableDots">
      <span v-for="dot in itemsNumber + 1" :class="{'active-dot': dot === index + 1}"></span>
    </div>
  </div>
</template>

<script>
import { cssTransform } from '../utils/tools';
import touchPan from '../directives/touch-pan';

export default {
  name: 'v-slider',
  props: {
    disableArrow: {
      type: Boolean,
      default: false,
    },
    disableDots: {
      type: Boolean,
      default: false,
    },
    auto: {
      type: Boolean,
      default: false,
    },
    infinite: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      warpPosition: 0,
      minDistance: 100,
      index: 0,
      itemsNumber: 0,
      itemWidth: 0,
    };
  },
  computed: {
    position() {
      return cssTransform(`translateX(${this.warpPosition}px)`);
    },
  },
  methods: {
    handlePan(e) {
      const deltaX = e.deltaX;
      const distance = e.distance;

      this.warpPosition = (this.index * -this.itemWidth) + deltaX;
      if (e.isFinal) {
        this.setSliderIndex(distance, deltaX);
        this.slideTo();
      }
    },
    slideTo(index) {
      this.index = this.getIndex(index);
      this.warpPosition = this.index * -this.itemWidth;
    },
    setSliderIndex(distance, deltaX) {
      if (distance > this.minDistance) {
        if (deltaX > 0) {
          if (this.index > 0) {
            this.index -= 1;
          }
        } else if (this.index < this.itemsNumber) {
          this.index += 1;
        }
      }
    },
    getIndex(index) {
      if (!index && index !== 0) return this.index;
      if (index < 0) return 0;
      if (index > this.itemsNumber) return this.itemsNumber;
      return index;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.itemsNumber = this.$refs.slider.children.length - 1;
      this.itemWidth = this.$refs.slider.children[0].offsetWidth;
    });
  },
  beforeDestroy() {

  },
  directives: {
    [touchPan.name]: touchPan,
  },
};
</script>

<style lang="less">
/* === Slider === */
.v-slider {
  width: 100%;
  height: 200px;
  position: relative;
  .v-slider__inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      height: 0;
    }
    .v-slider__warp {
      position: absolute;
      left: 0;
      top: 0;
      width: 300%;
      height: 100%;
    }
    .v-slider__item {
      width: 375px;
      height: 100%;
      float: left;
    }
  }
  .v-slider__arrow {
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 100%;
    position: absolute;
    top: 50%;
    color: #fff;
    margin-top: -20px;
    &.arrow-left {
      left: 10px;
    }
    &.arrow-right {
      right: 10px;
    }
    &.arrow-left:before {
      content: '<';
      width: 40px;
      height: 40px;
      display: block;
      line-height: 38px;
      text-align: center;
    }
    &.arrow-right:before {
      content: '>';
      width: 40px;
      height: 40px;
      display: block;
      line-height: 38px;
      text-align: center;
    }
  }
  .v-slider__dots {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    height: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background: #ddd;
      margin: 0 2px;
      &.active-dot {
        background: blue;
      }
    }
  }
}
</style>
