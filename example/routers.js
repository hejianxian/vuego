import Home from './views/home';

import Switch from './views/vue/switch';
import Spinner from './views/vue/spinner';
import Radio from './views/vue/radio';
import Checkbox from './views/vue/checkbox';
import PullRefresh from './views/vue/pull-refresh';
import InfiniteScroll from './views/vue/infinite-scroll';
import Autocomplete from './views/vue/autocomplete';

import Button from './views/css/button';
import Grid from './views/css/grid';
import List from './views/css/list';
import Colors from './views/css/colors';

import Dialog from './views/js/dialog';
import ActionSheet from './views/js/action-sheet';
import Toast from './views/js/toast';
import Preloader from './views/js/preloader';

import PhotoBrowser from './views/package/photo-browser';
import Slider from './views/package/slider';


export default {
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/switch', component: Switch },
    { path: '/spinner', component: Spinner },
    { path: '/radio', component: Radio },
    { path: '/checkbox', component: Checkbox },
    { path: '/pull-refresh', component: PullRefresh },
    { path: '/infinite-scroll', component: InfiniteScroll },
    { path: '/slider', component: Slider },
    { path: '/autocomplete', component: Autocomplete },
    { path: '/grid', component: Grid },
    { path: '/button', component: Button },
    { path: '/list', component: List },
    { path: '/colors', component: Colors },
    { path: '/dialog', component: Dialog },
    { path: '/action-sheet', component: ActionSheet },
    { path: '/toast', component: Toast },
    { path: '/preloader', component: Preloader },
    { path: '/photo-browser', component: PhotoBrowser },
    { path: '*', redirect: '/' },
  ],
};
