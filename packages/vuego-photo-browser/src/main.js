import PhotoBrowser from './photo-browser';

export default {
  install(Vue) {
    /* eslint no-undef: 0 */
    Vue.prototype.$PhotoSwipe = PhotoBrowser.open;
  },
};
