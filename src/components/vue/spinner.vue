<template>
  <div>
    <component :is="'v-' + name" :size="size" :color="color"></component>
  </div>
</template>

<script>
import vBalls from './svg-spinners/balls';
import vBars from './svg-spinners/bars';
import vBubbles from './svg-spinners/bubbles';
import vCubes from './svg-spinners/cubes';
import vSpokes from './svg-spinners/spokes';
import vSpin from './svg-spinners/spin';

export default {
  name: 'v-spinner',
  props: {
    name: {
      type: String,
      default: 'spokes',
    },
    size: {
      type: Number,
      default: 32,
    },
    color: {
      type: String,
      default: 'white',
    },
  },
  components: {
    vBalls,
    vBars,
    vBubbles,
    vCubes,
    vSpokes,
    vSpin,
  },
};
</script>
