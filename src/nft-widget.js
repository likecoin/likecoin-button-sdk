
import { createNFTWidgetIframe } from './common';

export class LikeCoinNFTWidget {
  constructor(config = {}) {
    const {
      target,
      classId,
      isTestnet = false,
    } = config;
    if (!classId) {
      throw new Error('Missing classId');
    }
    this.target = target;
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
    createNFTWidgetIframe(target, {
      classId: this.classId,
      isTestnet: this.isTestnet,
    });
  }
}

export default LikeCoinNFTWidget;
