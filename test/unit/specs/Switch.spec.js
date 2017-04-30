import Switch from 'src/components/vue/switch';
import { beforeEachHooks, mount, afterEachHooks } from 'vue-unit';

describe('Switch.vue', () => {
  beforeEach(beforeEachHooks);

  it('should render disabled switch', () => {
    const vm = mount(Switch, {
      value: true,
      disabled: true
    });
    const $checkbox = vm.$el.querySelector('input[type="checkbox"]');

    expect($checkbox.value).to.equal('on');
    expect($checkbox.disabled).to.be.true;
  });

  afterEach(afterEachHooks)
});
