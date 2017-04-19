import Vue from 'vue';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default.js';
import comp from './components/photo-browser.vue';

const PhotoBrowser = {
  getRenderedText(Component, propsData) {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData }).$mount();
    return vm.$el;
  },

  inserHtml() {
    if (document.querySelectorAll('.pswp').length > 0) {
      return;
    }
    document.body.appendChild(PhotoBrowser.getRenderedText(comp, {}));
  },

  open(items, index) {
    PhotoBrowser.inserHtml();
    var pswpElement = document.querySelectorAll('.pswp')[0];

    if (typeof index === undefined) index = 0;

    var options = {
      // history & focus options are disabled on CodePen
      history: false,
      focus: false,
      showAnimationDuration: 0,
      hideAnimationDuration: 0,
      index: index,
      errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">图片</a> 加载失败.</div>',
      shareEl: false
    };

    items.forEach(item => {
      item.w = 0;
      item.h = 0;
    });

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);

    gallery.listen('gettingData', function(index, item) {
      if (!item.w || !item.h) { // unknown size
        var img = new Image();
        img.onload = function() { // will get size after load
          item.w = this.width;
          item.h = this.height;
          gallery.updateSize(true);
        }
        img.src = item.src; // let's download image
      }
    });

    gallery.init();
  }
};

export default PhotoBrowser;
