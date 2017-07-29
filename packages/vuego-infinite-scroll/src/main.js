import InfiniteScroll from './components/infinite-scroll.vue';

export default {
  install(Vue) {
    /* eslint no-undef: 0 */
    Vue.component(InfiniteScroll.name, InfiniteScroll);
  },
};
