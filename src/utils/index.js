// 节流,控制函数执行的节奏
const createThrottle = (fn, delay = 100) => {
  let status = 'START';
  return () => {
    if (status === 'WAITING') {
      return;
    }
    status = 'WAITING';
    setTimeout(() => {
      fn && fn();
      status = 'START';
    }, delay);
  }
}

/**
 * 监听页面滚动，执行相对应的函数
 * @param {Function} func 函数
 * @param {Number} THRESHOLD 时间阈值
 */
export const listenScroll = (func, THRESHOLD = 50) => {
    const throttle = createThrottle(() => {
      func && typeof func === 'function' ? func() : null;
    });

    window.addEventListener('scroll', () => {
      const offsetHeight = document.documentElement.offsetHeight;
      const screenHeight = window.screen.height;
      const scrollY = window.scrollY;
      const gap = offsetHeight - screenHeight - scrollY;
      if (gap < THRESHOLD) {
        throttle();
      }
    });
};

/**
 * 防抖:一个动作在某一段时间内执行，再次执行会打断上一次执行
 * 应用:输入框输入值，频繁请求接口
 * @param {Function} fn 函数
 * @param {Number} delay 时间阈值
 */
export const createDebounce = (fn, delay = 100) => {
  let timer = null;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn && fn();
    }, delay);
  }
}

// module.exports导出，require引入
// module.exports = {
//   listenScroll
// };

