// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function t(t){return Object.keys(Object(t))}var e=void 0!==Object.keys;var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return r&&"symbol"==typeof Symbol.toStringTag}var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,e){return null!=t&&i.call(t,e)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var f=n()?function(t){var e,r,n;if(null==t)return o.call(t);r=t[l],e=u(t,l);try{t[l]=void 0}catch(e){return o.call(t)}return n=o.call(t),e?t[l]=r:delete t[l],n}:function(t){return o.call(t)};function c(t){return"[object Arguments]"===f(t)}var a=function(){return c(arguments)}(),p="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,g=Object.defineProperty,y=Object.prototype,b=y.toString,v=y.__defineGetter__,d=y.__defineSetter__,m=y.__lookupGetter__,_=y.__lookupSetter__;s=function(){try{return p({},"x",{}),!0}catch(t){return!1}}()?g:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===b.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===b.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(m.call(t,e)||_.call(t,e)?(n=t.__proto__,t.__proto__=y,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&v&&v.call(t,e,r.get),u&&d&&d.call(t,e,r.set),t};var h=s;function j(t,e,r){h(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function w(t){return"string"==typeof t}var O=String.prototype.valueOf;var S=n();function E(t){return"object"==typeof t&&(t instanceof String||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function P(t){return w(t)||E(t)}function T(t){return"number"==typeof t}j(P,"isPrimitive",w),j(P,"isObject",E);var I=Number,x=I.prototype.toString;var A=n();function V(t){return"object"==typeof t&&(t instanceof I||(A?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function k(t){return T(t)||V(t)}function N(t){return t!=t}function B(t){return T(t)&&N(t)}function F(t){return V(t)&&N(t.valueOf())}function L(t){return B(t)||F(t)}j(k,"isPrimitive",T),j(k,"isObject",V),j(L,"isPrimitive",B),j(L,"isObject",F);var G=Number.POSITIVE_INFINITY,Y=I.NEGATIVE_INFINITY,C=Math.floor;function M(t){return C(t)===t}function X(t){return t<G&&t>Y&&M(t)}function H(t){return T(t)&&X(t)}function W(t){return V(t)&&X(t.valueOf())}function D(t){return H(t)||W(t)}j(D,"isPrimitive",H),j(D,"isObject",W);var R=Object.prototype.propertyIsEnumerable;var U=!R.call("beep","0");function q(t,e){var r;return null!=t&&(!(r=R.call(t,e))&&U&&P(t)?!B(e=+e)&&H(e)&&e>=0&&e<t.length:r)}var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var J=a?c:function(t){return null!==t&&"object"==typeof t&&!z(t)&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!q(t,"callee")},K=Array.prototype.slice;function Q(t){return null!==t&&"object"==typeof t}j(Q,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!z(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Q));var Z=q((function(){}),"prototype"),$=!q({toString:null},"toString");function tt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&M(t.length)&&t.length>=0&&t.length<=9007199254740991}function et(t,e,r){var n,o;if(!tt(t)&&!w(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!H(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;o=r}else(o=n+r)<0&&(o=0)}else o=0;if(L(e)){for(;o<n;o++)if(L(t[o]))return o}else for(;o<n;o++)if(t[o]===e)return o;return-1}var rt=/./;function nt(t){return"boolean"==typeof t}var ot=Boolean.prototype.toString;var it=n();function ut(t){return"object"==typeof t&&(t instanceof Boolean||(it?function(t){try{return ot.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function lt(t){return nt(t)||ut(t)}function ft(){return new Function("return this;")()}j(lt,"isPrimitive",nt),j(lt,"isObject",ut);var ct="object"==typeof self?self:null,at="object"==typeof window?window:null,pt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},st="object"==typeof pt?pt:null;var gt=function(t){if(arguments.length){if(!nt(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ft()}if(ct)return ct;if(at)return at;if(st)return st;throw new Error("unexpected error. Unable to resolve global object.")}(),yt=gt.document&&gt.document.childNodes,bt=Int8Array;function vt(){return/^\s*function\s*([^(]*)/i}var dt=/^\s*function\s*([^(]*)/i;function mt(t){var e,r,n,o;if(("Object"===(r=f(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=dt.exec(n.toString()))return e[1]}return Q(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}j(vt,"REGEXP",dt);var _t="function"==typeof rt||"object"==typeof bt||"function"==typeof yt?function(t){return mt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?mt(t).toLowerCase():e};function ht(t){return t.constructor&&t.constructor.prototype===t}var jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wt="undefined"==typeof window?void 0:window;var Ot=function(){var t;if("undefined"===_t(wt))return!1;for(t in wt)try{-1===et(jt,t)&&u(wt,t)&&null!==wt[t]&&"object"===_t(wt[t])&&ht(wt[t])}catch(t){return!0}return!1}(),St="undefined"!=typeof window;var Et=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Pt=e?function(){return 2!==(t(arguments)||"").length}(1,2)?function(e){return J(e)?t(K.call(e)):t(e)}:t:function(t){var e,r,n,o,i,l,f;if(o=[],J(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!Q(t))return o;r=Z&&n}for(i in t)r&&"prototype"===i||!u(t,i)||o.push(String(i));if($)for(e=function(t){if(!1===St&&!Ot)return ht(t);try{return ht(t)}catch(t){return!1}}(t),f=0;f<Et.length;f++)l=Et[f],e&&"constructor"===l||!u(t,l)||o.push(String(l));return o};function Tt(t){return"function"===_t(t)}var It,xt=Object.getPrototypeOf;It=Tt(Object.getPrototypeOf)?xt:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===f(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var At=It;var Vt=Object.prototype;function kt(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!z(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),At(t))}(t),!e||!u(t,"constructor")&&u(e,"constructor")&&Tt(e.constructor)&&"[object Function]"===f(e.constructor)&&u(e,"isPrototypeOf")&&Tt(e.isPrototypeOf)&&(e===Vt||function(t){var e;for(e in t)if(!u(t,e))return!1;return!0}(t)))}var Nt=["same","promoted","bool","signed_integer","unsigned_integer","integral","floating_point","real_floating_point","complex_floating_point","real","numeric","default"];function Bt(){return Nt.slice()}function Ft(){return{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integral:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11}}function Lt(t,e,r){h(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}j(Bt,"enum",Ft),function(t,e){var r,n,o;for(r=Pt(e),o=0;o<r.length;o++)Lt(t,n=r[o],e[n])}(Bt,{same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integral:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11});var Gt=function(t,e){var r,n,o,i,l,f,c,a=!0;if(!Q(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!kt(e))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+e+"`.");if(u(e,"duplicates")&&!nt(a=e.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(n=(r=Pt(t)).length,l={},a)for(c=0;c<n;c++)u(l,i=t[o=r[c]])?(f=l[i],z(f)?l[i].push(o):l[i]=[f,o]):l[i]=o;else for(c=0;c<n;c++)l[t[o=r[c]]]=o;return l}({same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integral:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11},{duplicates:!1});var Yt={same:0,promoted:1,bool:2,signed_integer:3,unsigned_integer:4,integral:5,floating_point:6,real_floating_point:7,complex_floating_point:8,real:9,numeric:10,default:11};function Ct(t){var e=typeof t;return"number"===e?function(t){var e=Gt[t];return"string"==typeof e?e:null}(t)?t:null:"string"===e?function(t){var e=Yt[t];return"number"==typeof e?e:null}(t):null}export{Ct as default};
//# sourceMappingURL=mod.js.map
