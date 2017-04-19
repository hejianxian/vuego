import Hammer from 'hammerjs';

export default {
  name: 'touch-pan',
  bind(el, binding) {
    const hammertime = new Hammer(el, {});
    hammertime.on('pan', (ev) => {
      if (binding.value) {
        binding.value(ev);
      }
    });
  },
  inserted() {

  },
  update() {

  },
  componentUpdated() {

  },
  unbind() {},
};
