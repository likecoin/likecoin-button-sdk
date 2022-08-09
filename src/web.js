import { LikeCoinButton } from './button';
import { LikeCoinNFTWidget } from './nft-widget';

const buttonElements = document.querySelectorAll('.likecoin-embed.likecoin-button');

if (buttonElements.length) {
  LikeCoinButton.insertStyle();
}

buttonElements.forEach((el) => {
  const {
    likerId,
    iscnId,
    puid,
    isTestnet,
  } = el.dataset;
  const href = el.dataset.href || window.location.href;

  if (!iscnId && !likerId) {
    // eslint-disable-next-line no-console
    console.error('Cannot get data-liker-id attribute from LikeCoin button element');
    return;
  }

  LikeCoinButton.insertIframe(el, {
    likerId,
    iscnId,
    href,
    puid,
    isTestnet,
  });
});

const nftWidgetElements = document.querySelectorAll('.likecoin-embed.likecoin-nft-widget');
nftWidgetElements.forEach((el) => {
  const { iscnId, classId, testnet } = el.dataset;
  if (!iscnId && !classId) {
    // eslint-disable-next-line no-console
    console.error('Cannot get data-iscn-id or data-class-id attribute from LikeCoin NFT Widget element');
    return;
  }
  const isTestnet = testnet !== undefined;
  LikeCoinNFTWidget.insertIframe(el, {
    iscnId,
    classId,
    isTestnet,
  });
});
