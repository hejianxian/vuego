import gridCol from 'src/components/css/grid/grid.col';
import gridRow from 'src/components/css/grid/grid.row';
import { beforeEachHooks, mount, afterEachHooks } from 'vue-unit';

describe('Grid.vue', () => {
  beforeEach(beforeEachHooks);

  it('should create v-col--auto className', () => {
    const vm = mount(gridCol, {});
    expect(vm.$el.classList.contains('v-col--auto')).to.be.true;
  });

  it('should create v-col--x className', () => {
    const vm = mount(gridCol, { col: '50' });
    expect(vm.$el.classList.contains('v-col--50')).to.be.true;
  });

  it('should create v-row--no-gutter className', () => {
    const vm = mount(gridRow, { noGutter: true });
    expect(vm.$el.classList.contains('v-row--no-gutter')).to.be.true;
  });

  afterEach(afterEachHooks);
})
