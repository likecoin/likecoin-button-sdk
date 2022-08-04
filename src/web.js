import { createWidgetIframe, createNFTWidgetIframe, clearElementChildren } from './common';

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

buttonElements.forEach((el) => {
  const { likerId, iscnId, puid } = el.dataset;
  const href = el.dataset.href || window.location.href;

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

  clearElementChildren(el);
  // Inject a spacer for maintaining the aspect ratio for the `<iframe/>`
  el.appendChild(document.createElement('div'));
  const iframe = createWidgetIframe(src);
  el.appendChild(iframe);
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
  createNFTWidgetIframe(el, {
    classId,
    isTestnet,
  });
});
