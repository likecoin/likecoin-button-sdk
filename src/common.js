
export function getLikeCoinWidgetBaseURL(isTestnet = false) {
  return isTestnet
    ? 'https://button.rinkeby.like.co'
    : 'https://button.like.co';
}

export function clearElementChildren(element) {
  element.childNodes.forEach((child) => element.removeChild(child));
}

export function createWidgetIframe(src) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', src);
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute('scrolling', 'no');
  return iframe;
}

export function setElementSize(el, {
  width,
  height,
}) {
  if (width) {
    // eslint-disable-next-line no-param-reassign
    el.style.width = `${width}px`;
  }
  if (height) {
    // eslint-disable-next-line no-param-reassign
    el.style.height = `${height}px`;
  }
}
