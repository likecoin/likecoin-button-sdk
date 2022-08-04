import { v4 as uuidv4 } from 'uuid';
import { getLikeCoinWidgetBaseURL, setElementSize } from './common';

const buttonElements = document.querySelectorAll('.likecoin-embed.likecoin-button');

if (buttonElements.length) {
  const style = document.createElement('style');
  style.innerHTML = `
  .likecoin-button {
    position: relative;
    width: 100%;
    max-width: 485px;
    max-height: 240px;
    margin: 0 auto;
  }
  .likecoin-button > div {
    padding-top: 49.48454%;
  }
  .likecoin-button > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  `;
  document.body.appendChild(style);
}

buttonElements.forEach((div) => {
  const { likerId, iscnId, puid } = div.dataset;
  const href = div.dataset.href || window.location.href;

  if (!iscnId && !likerId) {
    // eslint-disable-next-line no-console
    console.error('Cannot get data-liker-id attribute from LikeCoin button element');
    return;
  }

  let src = iscnId
    ? `https://button.like.co/in/embed/iscn/button?iscn_id=${encodeURIComponent(
      iscnId,
    )}`
    : `https://button.like.co/in/embed/${likerId}/button?referrer=${encodeURIComponent(
      href,
    )}`;

  // Get platform user ID, e.g. Author
  if (puid) {
    src = `${src}&puid=${puid}`;
  }

  // eslint-disable-next-line no-param-reassign
  div.textContent = ''; // clear all children before injecting
  // Inject a spacer for maintaining the aspect ratio for the `<iframe/>`
  div.appendChild(document.createElement('div'));

  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', src);
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute('scrolling', 'no');
  div.appendChild(iframe);
});

const nftWidgetElements = document.querySelectorAll('.likecoin-embed.likecoin-nft-widget');
nftWidgetElements.forEach((el) => {
  const { classId, testnet } = el.dataset;
  if (!classId) {
    // eslint-disable-next-line no-console
    console.error('Cannot get data-class-id attribute from LikeCoin NFT Widget element');
    return;
  }
  const isTestnet = testnet !== undefined;
  const widgetId = uuidv4();
  const src = `${getLikeCoinWidgetBaseURL(isTestnet)}/in/embed/nft/class/${classId}?wid=${widgetId}`;
  el.childNodes.forEach((child) => el.removeChild(child));
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', src);
  iframe.setAttribute('frameborder', 0);
  iframe.setAttribute('scrolling', 'no');
  // Set initial width same as wrapper width
  iframe.style.width = `${el.clientWidth}px`;
  iframe.style.maxWidth = '480px';
  el.appendChild(iframe);

  window.addEventListener('resize', () => {
    window.requestAnimationFrame(() => {
      setElementSize(iframe, { width: el.clientWidth });
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
});
