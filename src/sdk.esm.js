
/**
 * LikeButtonSdk Constructor
 * @config liker info likerId:string ref:HtmlElement | string  href?:string
 */

class LikeCoinButton {
  constructor(config) {
    this.likerId = config.likerId;
    this.ref = config.ref;
    this.href = config.href ? config.href : window.location.href;
    this.likeStyleElement = null;
    this.insertStyle();
  }

  mount() {
    if (this.ref instanceof HTMLElement === false) {
      this.ref = document.querySelector(`${this.ref}`);
    }
    // set like user info
    this.ref.classList.add('likecoin-embed', 'likecoin-button');
    this.ref.setAttribute('data-liker-id', this.likerId);
    this.ref.setAttribute('data-href', this.href);

    this.href = encodeURIComponent(this.href);
    const src = `https://button.like.co/in/embed/${this.likerId}/button?referrer=${this.href}`;
    this.ref.appendChild(document.createElement('div'));
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', src);
    iframe.setAttribute('frameborder', 0);
    iframe.setAttribute('scrolling', 'no');
    this.ref.appendChild(iframe);
  }

  insertStyle() {
    this.likeStyleElement = document.createElement('style');
    this.likeStyleElement.innerHTML = `
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
    document.body.appendChild(this.likeStyleElement);
  }
}

export default LikeCoinButton;
