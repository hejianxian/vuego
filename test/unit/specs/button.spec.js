import Button from 'src/components/css/button/button';
import { getRenderedText, createVue } from '../utils';

describe('Button.vue', () => {
  it('should render large button', () => {
    const el = getRenderedText(Button, {
      large: true,
    });
    expect(el.classList.contains('v-button--large')).to.be.true;
  });

  it('should render small button', () => {
    const el = getRenderedText(Button, {
      small: true,
    });
    expect(el.classList.contains('v-button--small')).to.be.true;
  });

  it('should render round-style button', () => {
     const el = getRenderedText(Button, {
      round: true,
    });
    expect(el.classList.contains('v-button--round')).to.be.true;
  });

  it('should render outline-style button', () => {
     const el = getRenderedText(Button, {
      outline: true,
    });
    expect(el.classList.contains('v-button--outline')).to.be.true;
  });

  it('show trigger click event', done => {
    const vm = createVue({
      template: '<v-button @click.native="handleClick"></v-button>',
      components: {
        [Button.name]: Button
      },
      methods: {
        handleClick() {
          done();
        }
      }
    }, true);

    vm.$el.click();
  })
});
