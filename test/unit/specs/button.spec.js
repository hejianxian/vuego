import Button from 'src/components/css/button/button';
import { getRenderedText } from '../utils';

describe('Button.vue', () => {
  it('should render large and round button', () => {
    const el = getRenderedText(Button, {
      large: true,
      round: true,
    });
    expect(el.className.indexOf('v-button--large')).to.not.equal(-1);
    expect(el.className.indexOf('v-button--round')).to.not.equal(-1);
  });
});
