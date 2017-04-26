import gridCol from 'src/components/css/grid/grid.col';
import gridRow from 'src/components/css/grid/grid.row';
import { getRenderedText, createVue } from '../utils';

describe('Grid.vue', () => {
  it('should create v-col--auto className', () => {
    const el = getRenderedText(gridCol, {});

    expect(el.classList.contains('v-col--auto')).to.be.true;
  });

  it('should create v-col--x className', () => {
    const el = getRenderedText(gridCol, {
      col: '50'
    });

    expect(el.classList.contains('v-col--50')).to.be.true;
  });

  it('should create v-row--no-gutter className', () => {
    const el = getRenderedText(gridRow, {
      noGutter: true
    });

    expect(el.classList.contains('v-row--no-gutter')).to.be.true;
  });
})
