import Vue from 'vue';

export default function (ModalComponent) {
  return {
    create(props) {
      const node = document.createElement('div');
      document.body.appendChild(node);

      const vm = new Vue({
        el: node,
        data() {
          return { props };
        },
        render: h => h(ModalComponent, { props }),
      });

      return {
        close(fn) {
          vm.vuegoClose(fn);
        },
      };
    },
  };
}
