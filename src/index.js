import './theme/vuego.less';

// css components
import Page from './components/css/base/page';
import Content from './components/css/base/content';
import ContentBlock from './components/css/base/content-block';
import BlockTitle from './components/css/base/block-title';
import Header from './components/css/base/header';
import Footer from './components/css/base/footer';

import List from './components/css/list/list';
import Item from './components/css/list/item';
import ItemMedia from './components/css/list/item.media';
import ItemTitle from './components/css/list/item.inner';

import Row from './components/css/grid/grid.row';
import Col from './components/css/grid/grid.col';
import Button from './components/css/button/button';
import ButtonsRow from './components/css/button/buttons.row';

// vue components
import Switch from './components/vue/switch';
import Modal from './components/vue/modal';
import ActionSheet from './components/vue/action-sheet';
import Spinner from './components/vue/spinner';
import Toast from './components/vue/toast';
import Preloader from './components/vue/preloader';
import Radio from './components/vue/radio';
import Checkbox from './components/vue/checkbox';
import PullRefresh from './components/vue/pull-refresh';
import Autocomplete from './components/vue/autocomplete';

// js components
import $Dialog from './components/js/dialog/dialog';
import $Alert from './components/js/dialog/alert';
import $Confirm from './components/js/dialog/confirm';
import $ActionSheet from './components/js/action-sheet/action-sheet';
import $Preloader from './components/js/preloader';
import $Toast from './components/js/toast';

// utils
import initDPR from './utils/dpr';

export default {
  install(Vue) {
    // dpr
    initDPR();

    // css
    Vue.component(Page.name, Page);
    Vue.component(Content.name, Content);
    Vue.component(ContentBlock.name, ContentBlock);
    Vue.component(BlockTitle.name, BlockTitle);
    Vue.component(Header.name, Header);
    Vue.component(Footer.name, Footer);

    Vue.component(List.name, List);
    Vue.component(Item.name, Item);
    Vue.component(ItemMedia.name, ItemMedia);
    Vue.component(ItemTitle.name, ItemTitle);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.component(Button.name, Button);
    Vue.component(ButtonsRow.name, ButtonsRow);

    // vue
    Vue.component(Switch.name, Switch);
    Vue.component(Modal.name, Modal);
    Vue.component(ActionSheet.name, ActionSheet);
    Vue.component(Spinner.name, Spinner);
    Vue.component(Toast.name, Toast);
    Vue.component(Preloader.name, Preloader);
    Vue.component(Radio.name, Radio);
    Vue.component(Checkbox.name, Checkbox);
    Vue.component(PullRefresh.name, PullRefresh);
    Vue.component(Autocomplete.name, Autocomplete);

    // js
    /* eslint no-param-reassign: 0 */
    Vue.prototype.$Dialog = $Dialog;
    Vue.prototype.$Alert = $Alert;
    Vue.prototype.$Confirm = $Confirm;
    Vue.prototype.$ActionSheet = $ActionSheet;
    Vue.prototype.$Preloader = $Preloader;
    Vue.prototype.$Toast = $Toast;
  },
};
