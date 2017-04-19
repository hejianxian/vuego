import Vue from 'vue';
import Preloader from '../vue/preloader';

export default function (props) {
  const node = document.createElement('div');
  document.body.appendChild(node);

  const vm = new Vue({
    el: node,
    render: h => h(Preloader, { props }),
  });

  return {
    close() {
      document.body.removeChild(vm.$el);
    },
    isActive() {
      return true;
    },
  };
}
