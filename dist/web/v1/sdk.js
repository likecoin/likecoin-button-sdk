!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o;n.r(e);var i=new Uint8Array(16);function r(){if(!o&&!(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}var a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(t){return"string"==typeof t&&a.test(t)},c=[],u=0;u<256;++u)c.push((u+256).toString(16).substr(1));var l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(c[t[e+0]]+c[t[e+1]]+c[t[e+2]]+c[t[e+3]]+"-"+c[t[e+4]]+c[t[e+5]]+"-"+c[t[e+6]]+c[t[e+7]]+"-"+c[t[e+8]]+c[t[e+9]]+"-"+c[t[e+10]]+c[t[e+11]]+c[t[e+12]]+c[t[e+13]]+c[t[e+14]]+c[t[e+15]]).toLowerCase();if(!d(n))throw TypeError("Stringified UUID is invalid");return n};var s=function(t,e,n){var o=(t=t||{}).random||(t.rng||r)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var i=0;i<16;++i)e[n+i]=o[i];return e}return l(o)};function f(t){return t?"https://button.rinkeby.like.co":"https://button.like.co"}function p(t){t.childNodes.forEach((function(e){return t.removeChild(e)}))}function m(t){var e=document.createElement("iframe");return e.setAttribute("src",t),e.setAttribute("frameborder",0),e.setAttribute("scrolling","no"),e}function h(t,e){var n=e.width,o=e.height;n&&(t.style.width="".concat(n,"px")),o&&(t.style.height="".concat(o,"px"))}var b=document.querySelectorAll(".likecoin-embed.likecoin-button");if(b.length){var v=document.createElement("style");v.innerHTML="\n  .likecoin-button {\n    position: relative;\n    width: 100%;\n    max-width: 485px;\n    max-height: 240px;\n    margin: 0 auto;\n  }\n  .likecoin-button > div {\n    padding-top: 49.48454%;\n  }\n  .likecoin-button > iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n  ",document.body.appendChild(v)}b.forEach((function(t){var e=t.dataset,n=e.likerId,o=e.iscnId,i=e.puid,r=t.dataset.href||window.location.href;if(o||n){var a=o?"https://button.like.co/in/embed/iscn/button?iscn_id=".concat(encodeURIComponent(o)):"https://button.like.co/in/embed/".concat(n,"/button?referrer=").concat(encodeURIComponent(r));i&&(a="".concat(a,"&puid=").concat(i)),p(t),t.appendChild(document.createElement("div"));var d=m(a);t.appendChild(d)}else console.error("Cannot get data-liker-id attribute from LikeCoin button element")})),document.querySelectorAll(".likecoin-embed.likecoin-nft-widget").forEach((function(t){var e=t.dataset,n=e.classId,o=e.testnet;n?function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.classId,o=e.isTestnet,i=void 0!==o&&o;p(t);var r=s(),a="".concat(f(i),"/in/embed/nft/class/").concat(n,"?wid=").concat(r),d=m(a);d.style.width="".concat(t.clientWidth,"px"),d.style.maxWidth="480px",t.appendChild(d),window.addEventListener("resize",(function(){window.requestAnimationFrame((function(){h(d,{width:t.clientWidth})}))})),window.addEventListener("message",(function(t){if(t.data&&t.data.widgetId===r&&"likecoin-nft-widget-resize"===t.data.type){var e=t.data.height;e&&h(d,{height:e})}}))}(t,{classId:n,isTestnet:void 0!==o}):console.error("Cannot get data-class-id attribute from LikeCoin NFT Widget element")}))}]);