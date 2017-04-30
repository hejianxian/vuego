import sinon from 'sinon';

import Button from 'src/components/css/button/button';
import { beforeEachHooks, mount, afterEachHooks } from 'vue-unit';

describe('Button.vue', () => {
  beforeEach(beforeEachHooks);

  it('should render large button', () => {
    const vm = mount(Button, {
      large: true,
    });
    expect(vm.$el.classList.contains('v-button--large')).to.be.true;
  });

  it('should render small button', () => {
    const vm = mount(Button, {
      small: true,
    });
    expect(vm.$el.classList.contains('v-button--small')).to.be.true;
  });

  it('should render round-style button', () => {
    const vm = mount(Button, {
      round: true,
    });
    expect(vm.$el.classList.contains('v-button--round')).to.be.true;
  });

  it('should render outline-style button', () => {
    const vm = mount(Button, {
      outline: true,
    });
    expect(vm.$el.classList.contains('v-button--outline')).to.be.true;
  });

  it('show trigger click event', () => {
    const ComponentWithEvent = {
      template: `<v-button @click="$emit('foo', 'hello')"></v-button>`,
      components: {
        [Button.name]: Button
      }
    };

    it('listens for events', () => {
      const listener = sinon.spy();
      const vm = mount(ComponentWithEvent, {}, { foo: listener });
      simulate(vm.$el, 'click');
      expect(listener).to.have.been.calledWith('hello');
    });
  });

  afterEach(afterEachHooks);
});
