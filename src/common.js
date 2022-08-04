import { v4 as uuidv4 } from 'uuid';

export function getLikeCoinWidgetBaseURL(isTestnet) {
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

export function createNFTWidgetIframe(container, {
  classId,
  isTestnet = false,
} = {}) {
  clearElementChildren(container);
  const widgetId = uuidv4();
  const src = `${getLikeCoinWidgetBaseURL(isTestnet)}/in/embed/nft/class/${classId}?wid=${widgetId}`;
  const iframe = createWidgetIframe(src);
  // Set initial width same as wrapper width
  iframe.style.width = `${container.clientWidth}px`;
  iframe.style.maxWidth = '480px';
  container.appendChild(iframe);

  window.addEventListener('resize', () => {
    window.requestAnimationFrame(() => {
      setElementSize(iframe, { width: container.clientWidth });
    });
  });

  window.addEventListener('message', (event) => {
    if (
      event.data
      && event.data.widgetId === widgetId
      && event.data.type === 'likecoin-nft-widget-resize'
    ) {
      const { height } = event.data;
      if (height) {
        setElementSize(iframe, { height });
      }
    }
  });
  return iframe;
}
