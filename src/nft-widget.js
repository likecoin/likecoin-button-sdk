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
      isTestnet,
    } = config;
    if (!iscnId && !classId) {
      throw new Error('Missing iscnId or classId');
    }
    this.target = target;
    this.iscnId = iscnId;
    this.classId = classId;
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
      isTestnet: this.isTestnet,
    });
  }

  static insertIframe(container, {
    iscnId,
    classId,
    isTestnet,
  } = {}) {
    let src = `${getLikeCoinWidgetBaseURL(isTestnet)}/in/embed/nft`;
    if (iscnId) {
      src = `${src}/iscn/${encodeURIComponent(iscnId)}`;
    } else if (classId) {
      src = `${src}/class/${classId}`;
    } else {
      throw new Error('Missing iscnId or classId');
    }
    const widgetId = uuidv4();
    src = `${src}?wid=${widgetId}`;
    const iframe = createWidgetIframe(src);
    // Set initial width same as wrapper width
    iframe.style.width = `${container.clientWidth}px`;
    iframe.style.maxWidth = '480px';
    clearElementChildren(container);
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
}

export default LikeCoinNFTWidget;
