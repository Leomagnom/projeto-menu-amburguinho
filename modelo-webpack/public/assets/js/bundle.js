(()=>{"use strict";var n,r,o,e,t,a,i,s,c,A,p,u,f,d,l={958:(n,r,o)=>{o.d(r,{A:()=>s});var e=o(354),t=o.n(e),a=o(314),i=o.n(a)()(t());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&family=Passion+One&family=Sriracha&display=swap);"]),i.push([n.id,"\n  :root{\n    --primary-color: rgb(17, 86, 102 );\n    --primary-colo-darker: rgb(9, 48, 56 );\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Open sans', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n} \n\n.container{\n    max-width: 640px;\n    margin: 50px auto;\n    background: #fff;\n    padding: 20px;\n    border-radius:  10px;\n}\n\nform input, form label, form button {\n    display: block;\n    width: 100%;\n   margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\nform input:focus {\n    outline:1px solid var(--primary-color);\n\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color:#fff;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    cursor:pointer;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background: var(--primary-colo-darker);\n\n}\nform button:active {\n    background: red;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:";EAGA;IACI,kCAAkC;IAClC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;AACA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,WAAW;GACZ,mBAAmB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;AACA;IACI,sCAAsC;;AAE1C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,UAAU;IACV,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,sCAAsC;;AAE1C;AACA;IACI,eAAe;AACnB",sourcesContent:["\r\n  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&family=Passion+One&family=Sriracha&display=swap');\r\n\r\n:root{\r\n    --primary-color: rgb(17, 86, 102 );\r\n    --primary-colo-darker: rgb(9, 48, 56 );\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n} \r\n\r\n.container{\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius:  10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n   margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\nform input:focus {\r\n    outline:1px solid var(--primary-color);\r\n\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color:#fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor:pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-colo-darker);\r\n\r\n}\r\nform button:active {\r\n    background: red;\r\n}"],sourceRoot:""}]);const s=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var o="",e=void 0!==r[5];return r[4]&&(o+="@supports (".concat(r[4],") {")),r[2]&&(o+="@media ".concat(r[2]," {")),e&&(o+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),o+=n(r),e&&(o+="}"),r[2]&&(o+="}"),r[4]&&(o+="}"),o})).join("")},r.i=function(n,o,e,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(e)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var A=0;A<n.length;A++){var p=[].concat(n[A]);e&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),o&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=o):p[2]=o),t&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=t):p[4]="".concat(t)),r.push(p))}},r}},354:n=>{n.exports=function(n){var r=n[1],o=n[3];if(!o)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function o(n){for(var o=-1,e=0;e<r.length;e++)if(r[e].identifier===n){o=e;break}return o}function e(n,e){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],A=e.base?c[0]+e.base:c[0],p=a[A]||0,u="".concat(A," ").concat(p);a[A]=p+1;var f=o(u),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)r[f].references++,r[f].updater(d);else{var l=t(d,e);e.byIndex=s,r.splice(s,0,{identifier:u,updater:l,references:1})}i.push(u)}return i}function t(n,r){var o=r.domAPI(r);return o.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;o.update(n=r)}else o.remove()}}n.exports=function(n,t){var a=e(n=n||[],t=t||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=o(a[i]);r[s].references--}for(var c=e(n,t),A=0;A<a.length;A++){var p=o(a[A]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}a=c}}},659:n=>{var r={};n.exports=function(n,o){var e=function(n){if(void 0===r[n]){var o=document.querySelector(n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(n){o=null}r[n]=o}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(o)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,o)=>{n.exports=function(n){var r=o.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(o){!function(n,r,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var t=void 0!==o.layer;t&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,t&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var a=o.sourceMap;a&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},m={};function g(n){var r=m[n];if(void 0!==r)return r.exports;var o=m[n]={id:n,exports:{}};return l[n](o,o.exports,g),o.exports}g.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return g.d(r,{a:r}),r},g.d=(n,r)=>{for(var o in r)g.o(r,o)&&!g.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},g.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),g.nc=void 0,n=g(72),r=g.n(n),o=g(825),e=g.n(o),t=g(659),a=g.n(t),i=g(56),s=g.n(i),c=g(540),A=g.n(c),p=g(113),u=g.n(p),f=g(958),(d={}).styleTagTransform=u(),d.setAttributes=s(),d.insert=a().bind(null,"head"),d.domAPI=e(),d.insertStyleElement=A(),r()(f.A,d),f.A&&f.A.locals&&f.A.locals})();
//# sourceMappingURL=bundle.js.map