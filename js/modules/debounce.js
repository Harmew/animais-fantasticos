export default function debounce(callback, delay) {
  let timer;
  return (...arg) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...arg);
      timer = null;
    }, delay);
  };
}
