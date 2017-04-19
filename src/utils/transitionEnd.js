const transitionEnd = (elm, callback) => {
  const events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];

  function fireCallBack(e) {
    if (e.target !== this) return;

    callback.call(this, e);
    for (let i = 0; i < events.length; i += 1) {
      elm.removeEventListener(events[i], fireCallBack, false);
    }
  }
  if (callback) {
    for (let i = 0; i < events.length; i += 1) {
      elm.addEventListener(events[i], fireCallBack, false);
    }
  }
};

export default transitionEnd;
