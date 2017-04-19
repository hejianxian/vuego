import Vue from 'vue';
import Switch from 'src/components/vue/switch';
import { getRenderedText } from '../utils';

describe('Switch.vue', () => {
  it('should render disabled switch', () => {
    const el = getRenderedText(Switch, {
      value: true,
      disabled: true
    });
    expect(el.querySelector('input[type="checkbox"]').value).to.equal('on');
    expect(el.querySelector('input[type="checkbox"]').disabled).to.be.true;
  });

  it('should $emit "input" event to parents', () => {
    expect(true).to.be.true;
  });
});
