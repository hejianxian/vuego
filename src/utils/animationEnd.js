const animationEnd = (elm, callback) => {
  const events = ['webkitAnimationEnd', 'OAnimationEnd', 'MSAnimationEnd', 'animationend'];

  function fireCallBack(e) {
    callback(e);
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

export default animationEnd;
