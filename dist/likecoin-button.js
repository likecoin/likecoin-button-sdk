!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["likecoin-button"]=e():t.LikeCoinButton=e()}(this,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}n.r(e);var r=function(){function t(e){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),!e||!e.likerId&&!e.iscnId)throw new Error("Missing config");this.likerId=e.likerId,this.iscnId=e.iscnId,this.ref=e.ref,this.href=e.href||window&&window.location.href||"",this.puid=e.puid,this.likeStyleElement=null,this.insertStyle()}var e,n,r;return e=t,(n=[{key:"mount",value:function(){var t="";this.ref instanceof HTMLElement==0&&(this.ref=document.querySelector("".concat(this.ref))),this.ref.classList.add("likecoin-embed","likecoin-button"),this.iscnId?(this.ref.setAttribute("data-iscn-id",this.iscnId),t="https://button.like.co/in/embed/iscn/button?iscn_id=".concat(encodeURIComponent(this.iscnId))):(this.ref.setAttribute("data-liker-id",this.likerId),this.ref.setAttribute("data-href",this.href),this.ref.setAttribute("data-puid",this.puid),t="https://button.like.co/in/embed/".concat(this.likerId,"/button?referrer=").concat(encodeURIComponent(this.href))),this.puid&&(t="".concat(t,"&puid=").concat(this.puid)),this.ref.textContent="",this.ref.appendChild(document.createElement("div"));var e=document.createElement("iframe");e.setAttribute("src",t),e.setAttribute("frameborder",0),e.setAttribute("scrolling","no"),this.ref.appendChild(e)}},{key:"insertStyle",value:function(){this.likeStyleElement=document.createElement("style"),this.likeStyleElement.innerHTML="\n            .likecoin-button {\n            position: relative;\n            width: 100%;\n            max-width: 485px;\n            max-height: 240px;\n            margin: 0 auto;\n            }\n            .likecoin-button > div {\n            padding-top: 49.48454%;\n            }\n            .likecoin-button > iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            }\n        ",document.body.appendChild(this.likeStyleElement)}}])&&i(e.prototype,n),r&&i(e,r),t}();e.default=r}]).default}));