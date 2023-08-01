// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).resolve=e()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&i.call(t,e)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var f,c=n()?function(t){var e,r,n;if(null==t)return o.call(t);r=t[l],e=u(t,l);try{t[l]=void 0}catch(e){return o.call(t)}return n=o.call(t),e?t[l]=r:delete t[l],n}:function(t){return o.call(t)};function a(t){return"[object Arguments]"===c(t)}f=function(){return a(arguments)}();var p=f,s="function"==typeof Object.defineProperty?Object.defineProperty:null;var g,y=Object.defineProperty,b=Object.prototype,v=b.toString,m=b.__defineGetter__,d=b.__defineSetter__,_=b.__lookupGetter__,h=b.__lookupSetter__;g=function(){try{return s({},"x",{}),!0}catch(t){return!1}}()?y:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===v.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===v.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(_.call(t,e)||h.call(t,e)?(n=t.__proto__,t.__proto__=b,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&m&&m.call(t,e,r.get),u&&d&&d.call(t,e,r.set),t};var j=g;function w(t,e,r){j(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function O(t){return"string"==typeof t}var S=String.prototype.valueOf;var E=n();function P(t){return"object"==typeof t&&(t instanceof String||(E?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===c(t)))}function T(t){return O(t)||P(t)}function I(t){return"number"==typeof t}w(T,"isPrimitive",O),w(T,"isObject",P);var x=Number,A=x.prototype.toString;var V=n();function k(t){return"object"==typeof t&&(t instanceof x||(V?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===c(t)))}function N(t){return I(t)||k(t)}function B(t){return t!=t}function F(t){return I(t)&&B(t)}function L(t){return k(t)&&B(t.valueOf())}function G(t){return F(t)||L(t)}w(N,"isPrimitive",I),w(N,"isObject",k),w(G,"isPrimitive",F),w(G,"isObject",L);var Y=Number.POSITIVE_INFINITY,C=x.NEGATIVE_INFINITY,M=Math.floor;function X(t){return M(t)===t}function H(t){return t<Y&&t>C&&X(t)}function W(t){return I(t)&&H(t)}function D(t){return k(t)&&H(t.valueOf())}function R(t){return W(t)||D(t)}w(R,"isPrimitive",W),w(R,"isObject",D);var U=Object.prototype.propertyIsEnumerable;var q=!U.call("beep","0");function z(t,e){var r;return null!=t&&(!(r=U.call(t,e))&&q&&T(t)?!F(e=+e)&&W(e)&&e>=0&&e<t.length:r)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===c(t)};var K=p?a:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!z(t,"callee")},Q=Array.prototype.slice;function Z(t){return null!==t&&"object"==typeof t}w(Z,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!J(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Z));var $=z((function(){}),"prototype"),tt=!z({toString:null},"toString");function et(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&X(t.length)&&t.length>=0&&t.length<=9007199254740991}function rt(t,e,r){var n,o;if(!et(t)&&!O(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!W(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(G(e)){for(;o<n;o++)if(G(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var nt=/./;function ot(t){return"boolean"==typeof t}var it=Boolean.prototype.toString;var ut=n();function lt(t){return"object"==typeof t&&(t instanceof Boolean||(ut?function(t){try{return it.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===c(t)))}function ft(t){return ot(t)||lt(t)}function ct(){return new Function("return this;")()}w(ft,"isPrimitive",ot),w(ft,"isObject",lt);var at="object"==typeof self?self:null,pt="object"==typeof window?window:null,st="object"==typeof global?global:null;var gt=function(t){if(arguments.length){if(!ot(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ct()}if(at)return at;if(pt)return pt;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),yt=gt.document&&gt.document.childNodes,bt=Int8Array;function vt(){return/^\s*function\s*([^(]*)/i}var mt=/^\s*function\s*([^(]*)/i;function dt(t){var e,r,n,o;if(("Object"===(r=c(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=mt.exec(n.toString()))return e[1]}return Z(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}w(vt,"REGEXP",mt);var _t="function"==typeof nt||"object"==typeof bt||"function"==typeof yt?function(t){return dt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?dt(t).toLowerCase():e};function ht(t){return t.constructor&&t.constructor.prototype===t}var jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wt="undefined"==typeof window?void 0:window;var Ot=function(){var t;if("undefined"===_t(wt))return!1;for(t in wt)try{-1===rt(jt,t)&&u(wt,t)&&null!==wt[t]&&"object"===_t(wt[t])&&ht(wt[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var Et,Pt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Et=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return K(e)?t(Q.call(e)):t(e)}:t:function(t){var e,r,n,o,i,l,f;if(o=[],K(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!Z(t))return o;r=$&&n}for(i in t)r&&"prototype"===i||!u(t,i)||o.push(String(i));if(tt)for(e=function(t){if(!1===St&&!Ot)return ht(t);try{return ht(t)}catch(t){return!1}}(t),f=0;f<Pt.length;f++)l=Pt[f],e&&"constructor"===l||!u(t,l)||o.push(String(l));return o};var Tt=Et;function It(t){return"function"===_t(t)}var xt,At=Object.getPrototypeOf;xt=It(Object.getPrototypeOf)?At:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===c(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Vt=xt;var kt=Object.prototype;function Nt(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),Vt(t))}(t),!e||!u(t,"constructor")&&u(e,"constructor")&&It(e.constructor)&&"[object Function]"===c(e.constructor)&&u(e,"isPrototypeOf")&&It(e.isPrototypeOf)&&(e===kt||function(t){var e;for(e in t)if(!u(t,e))return!1;return!0}(t)))}var Bt=["same","promoted","bool","signed_integer","unsigned_integer","integer","floating_point","real_floating_point","complex_floating_point","real","numeric","default"];function Ft(){return Bt.slice()}function Lt(){return{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11}}function Gt(t,e,r){j(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}w(Ft,"enum",Lt),function(t,e){var r,n,o;for(r=Tt(e),o=0;o<r.length;o++)Gt(t,n=r[o],e[n])}(Ft,{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11});var Yt=function(t,e){var r,n,o,i,l,f,c,a=!0;if(!Z(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Nt(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(u(e,"duplicates")&&!ot(a=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(n=(r=Tt(t)).length,l={},a)for(c=0;c<n;c++)u(l,i=t[o=r[c]])?(f=l[i],J(f)?l[i].push(o):l[i]=[f,o]):l[i]=o;else for(c=0;c<n;c++)l[t[o=r[c]]]=o;return l}({same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11},{duplicates:!1});var Ct={same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integer:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11};return function(t){var e=typeof t;return"number"===e?function(t){var e=Yt[t];return"string"==typeof e?e:null}(t)?t:null:"string"===e?function(t){var e=Ct[t];return"number"==typeof e?e:null}(t):null}}));
//# sourceMappingURL=index.js.map
