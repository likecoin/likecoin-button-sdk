import {
  clearElementChildren,
  createWidgetIframe,
  getLikeCoinWidgetBaseURL,
} from './common';

/**
 * LikeButtonSdk Constructor
 * @config liker info likerId:string ref:HtmlElement | string  href?:string
 */
export class LikeCoinButton {
  constructor(config) {
    if (!config || (!config.likerId && !config.iscnId)) throw new Error('Missing config');
    this.likerId = config.likerId;
    this.iscnId = config.iscnId;
    this.ref = config.ref;
    this.href = config.href || (window && window.location.href) || '';
    this.puid = config.puid;
    this.isTestnet = config.isTestnet;
  }

  mount() {
    if (this.ref instanceof HTMLElement === false) {
      this.ref = document.querySelector(`${this.ref}`);
    }
    LikeCoinButton.insertIframe(this.ref, {
      likerId: this.likerId,
      iscnId: this.iscnId,
      href: this.href,
      puid: this.puid,
      isTestnet: this.isTestnet,
    });
    LikeCoinButton.insertStyle();
  }

  static insertIframe(el, {
    likerId,
    iscnId,
    href,
    puid,
    isTestnet,
  } = {}) {
    el.classList.add('likecoin-embed', 'likecoin-button');

    let src = '';
    if (this.iscnId) {
      src = `${getLikeCoinWidgetBaseURL(isTestnet)}/in/embed/iscn/button?iscn_id=${encodeURIComponent(iscnId)}`;
    } else {
      src = `${getLikeCoinWidgetBaseURL(isTestnet)}/in/embed/${likerId}/button?referrer=${encodeURIComponent(href)}`;
    }

    // Apply platform user ID
    if (puid) {
      src = `${src}&puid=${puid}`;
    }

    clearElementChildren(el);
    // Inject a spacer for maintaining the aspect ratio for the `<iframe/>`
    el.appendChild(document.createElement('div'));
    const iframe = createWidgetIframe(src);
    el.appendChild(iframe);
  }

  static insertStyle() {
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
}

export default LikeCoinButton;
