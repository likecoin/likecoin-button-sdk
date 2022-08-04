export function getLikeCoinWidgetBaseURL(isTestnet) {
  return isTestnet
    ? 'https://button.rinkeby.like.co'
    : 'https://button.like.co';
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
