import components from './main';

export default {
  install(Vue) {
    /* eslint no-undef: 0 */
    Vue.component(components.Slider.name, components.Slider);
    Vue.component(components.SliderItem.name, components.SliderItem);
  },
};
