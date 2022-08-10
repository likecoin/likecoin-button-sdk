import { v4 as uuidv4 } from 'uuid';
import {
  clearElementChildren,
  createWidgetIframe,
  getLikeCoinWidgetBaseURL,
  setElementSize,
} from './common';

export class LikeCoinNFTWidget {
  constructor(config = {}) {
    const {
      target,
      iscnId,
      classId,
      isResponsive,
      isTestnet,
    } = config;
    if (!iscnId && !classId) {
      throw new Error('Missing iscnId or classId');
    }
    this.target = target;
    this.iscnId = iscnId;
    this.classId = classId;
    this.isResponsive = !!isResponsive;
    this.isTestnet = isTestnet;
  }

  mount() {
    let target;
    if (this.target instanceof HTMLElement === false) {
      target = document.querySelector(this.target);
    }
    if (!target) {
      throw new Error('Cannot find target');
    }
    LikeCoinNFTWidget.insertIframe(target, {
      iscnId: this.iscnId,
      classId: this.classId,
      isResponsive: this.isResponsive,
      isTestnet: this.isTestnet,
    });
  }

  static insertIframe(container, {
    iscnId,
    classId,
    isResponsive = false,
    isTestnet,
  } = {}) {
    const qs = new URLSearchParams();
    let src = `${getLikeCoinWidgetBaseURL(isTestnet)}/in/embed`;
    if (iscnId) {
      src = `${src}/iscn/button`;
      qs.set('iscn_id', iscnId);
    } else if (classId) {
      src = `${src}/nft/class/${classId}`;
    } else {
      throw new Error('Missing iscnId or classId');
    }
    const widgetId = uuidv4();
    qs.set('wid', widgetId);
    if (isResponsive) {
      qs.set('responsive', '1');
    }
    src = `${src}?${qs.toString()}`;

    const iframe = createWidgetIframe(src);
    if (isResponsive) {
      // Set initial width same as wrapper width
      iframe.style.width = `${container.clientWidth}px`;
      iframe.style.maxWidth = '480px';

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
    } else {
      iframe.style.width = '360px';
      iframe.style.height = '480px';
    }
    clearElementChildren(container);
    container.appendChild(iframe);

    return iframe;
  }
}

export default LikeCoinNFTWidget;
