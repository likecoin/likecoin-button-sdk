!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function i(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return e?"https://button.rinkeby.like.co":"https://button.like.co"}function r(e){e.childNodes.forEach((function(t){return e.removeChild(t)}))}function o(e){var t=document.createElement("iframe");return t.setAttribute("src",e),t.setAttribute("frameborder",0),t.setAttribute("scrolling","no"),t}function a(e,t){var n=t.width,i=t.height;n&&(e.style.width="".concat(n,"px")),i&&(e.style.height="".concat(i,"px"))}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}n.r(t);var c,d=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t||!t.likerId&&!t.iscnId)throw new Error("Missing config");this.likerId=t.likerId,this.iscnId=t.iscnId,this.ref=t.ref,this.href=t.href||window&&window.location.href||"",this.puid=t.puid,this.isTestnet=t.isTestnet}var t,n,a;return t=e,a=[{key:"insertIframe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.likerId,a=t.iscnId,s=t.href,c=t.puid,d=t.isTestnet;e.classList.add("likecoin-embed","likecoin-button");var u="";u=a?"".concat(i(d),"/in/embed/iscn/button?iscn_id=").concat(encodeURIComponent(a)):"".concat(i(d),"/in/embed/").concat(n,"/button?referrer=").concat(encodeURIComponent(s)),c&&(u="".concat(u,"&puid=").concat(c)),r(e),e.appendChild(document.createElement("div"));var l=o(u);e.appendChild(l)}},{key:"insertStyle",value:function(){var e=document.createElement("style");e.innerHTML="\n      .likecoin-button {\n        position: relative;\n        width: 100%;\n        max-width: 485px;\n        max-height: 240px;\n        margin: 0 auto;\n      }\n      .likecoin-button > div {\n        padding-top: 49.48454%;\n      }\n      .likecoin-button > iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    ",document.body.appendChild(e)}}],(n=[{key:"mount",value:function(){this.ref instanceof HTMLElement==0&&(this.ref=document.querySelector("".concat(this.ref))),e.insertIframe(this.ref,{likerId:this.likerId,iscnId:this.iscnId,href:this.href,puid:this.puid,isTestnet:this.isTestnet}),e.insertStyle()}}])&&s(t.prototype,n),a&&s(t,a),e}(),u=new Uint8Array(16);function l(){if(!c&&!(c="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(u)}var f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var h=function(e){return"string"==typeof e&&f.test(e)},p=[],m=0;m<256;++m)p.push((m+256).toString(16).substr(1));var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(p[e[t+0]]+p[e[t+1]]+p[e[t+2]]+p[e[t+3]]+"-"+p[e[t+4]]+p[e[t+5]]+"-"+p[e[t+6]]+p[e[t+7]]+"-"+p[e[t+8]]+p[e[t+9]]+"-"+p[e[t+10]]+p[e[t+11]]+p[e[t+12]]+p[e[t+13]]+p[e[t+14]]+p[e[t+15]]).toLowerCase();if(!h(n))throw TypeError("Stringified UUID is invalid");return n};var y=function(e,t,n){var i=(e=e||{}).random||(e.rng||l)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=i[r];return t}return v(i)};function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b(this,e);var n=t.target,i=t.classId,r=t.isTestnet;if(!i)throw new Error("Missing classId");this.target=n,this.classId=i,this.isTestnet=r}var t,n,s;return t=e,s=[{key:"insertIframe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.classId,s=t.isTestnet;r(e);var c=y(),d="".concat(i(s),"/in/embed/nft/class/").concat(n,"?wid=").concat(c),u=o(d);return u.style.width="".concat(e.clientWidth,"px"),u.style.maxWidth="480px",e.appendChild(u),window.addEventListener("resize",(function(){window.requestAnimationFrame((function(){a(u,{width:e.clientWidth})}))})),window.addEventListener("message",(function(e){if(e.data&&e.data.widgetId===c&&"likecoin-nft-widget-resize"===e.data.type){var t=e.data.height;t&&a(u,{height:t})}})),u}}],(n=[{key:"mount",value:function(){var t;if(this.target instanceof HTMLElement==0&&(t=document.querySelector(this.target)),!t)throw new Error("Cannot find target");e.insertIframe(t,{classId:this.classId,isTestnet:this.isTestnet})}}])&&g(t.prototype,n),s&&g(t,s),e}(),I=document.querySelectorAll(".likecoin-embed.likecoin-button");I.length&&d.insertStyle(),I.forEach((function(e){var t=e.dataset,n=t.likerId,i=t.iscnId,r=t.puid,o=t.isTestnet,a=e.dataset.href||window.location.href;i||n?d.insertIframe(e,{likerId:n,iscnId:i,href:a,puid:r,isTestnet:o}):console.error("Cannot get data-liker-id attribute from LikeCoin button element")})),document.querySelectorAll(".likecoin-embed.likecoin-nft-widget").forEach((function(e){var t=e.dataset,n=t.classId,i=t.testnet;if(n){var r=void 0!==i;w.insertIframe(e,{classId:n,isTestnet:r})}else console.error("Cannot get data-class-id attribute from LikeCoin NFT Widget element")}))}]);