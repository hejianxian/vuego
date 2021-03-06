import Home from './views/home';

import Layout from './views/css/layout';
import Colors from './views/css/colors';
import Button from './views/css/button';
import Grid from './views/css/grid';
import List from './views/css/list';

import Switch from './views/vue/switch';
import Spinner from './views/vue/spinner';
import Radio from './views/vue/radio';
import Checkbox from './views/vue/checkbox';
import Autocomplete from './views/vue/autocomplete';

import Dialog from './views/js/dialog';
import ActionSheet from './views/js/action-sheet';
import Toast from './views/js/toast';
import Preloader from './views/js/preloader';

import PhotoBrowser from './views/package/photo-browser';
import Slider from './views/package/slider';
import PullRefresh from './views/package/pull-refresh';
import InfiniteScroll from './views/package/infinite-scroll';

const BASE_PATH = process.env.NODE_ENV === 'production' ? '/vuego' : '/';

export default {
  base: BASE_PATH,
  routes: [
    { path: '/', component: Home },
    { path: '/switch', component: Switch },
    { path: '/spinner', component: Spinner },
    { path: '/radio', component: Radio },
    { path: '/checkbox', component: Checkbox },
    { path: '/slider', component: Slider },
    { path: '/autocomplete', component: Autocomplete },
    { path: '/grid', component: Grid },
    { path: '/button', component: Button },
    { path: '/list', component: List },
    { path: '/colors', component: Colors },
    { path: '/layout', component: Layout },
    { path: '/dialog', component: Dialog },
    { path: '/action-sheet', component: ActionSheet },
    { path: '/toast', component: Toast },
    { path: '/preloader', component: Preloader },
    { path: '/photo-browser', component: PhotoBrowser },
    { path: '/pull-refresh', component: PullRefresh },
    { path: '/infinite-scroll', component: InfiniteScroll },
    { path: '*', redirect: '/' },
  ],
};
