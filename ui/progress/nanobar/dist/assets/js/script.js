!function e(t,n,r){function i(a,u){if(!n[a]){if(!t[a]){var c="function"==typeof require&&require;if(!u&&c)return c(a,!0);if(o)return o(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var d=n[a]={exports:{}};t[a][0].call(d.exports,function(e){var n=t[a][1][e];return i(n||e)},d,d.exports,e,t,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(e,t,n){!function(e){"use strict";function r(){var e=document.getElementById("nanobarcss");if(null===e){if(e=document.createElement("style"),e.type="text/css",e.id="nanobarcss",document.head.insertBefore(e,document.head.firstChild),!e.styleSheet)return e.appendChild(document.createTextNode(u));e.styleSheet.cssText=u}}function i(e,t){e.classList?e.classList.add(t):e.className+=" "+t}function o(e){function t(){var t=a-u;t<.1&&t>-.1?(n(u),c=0,100===a&&(o.style.height=0,setTimeout(function(){e(o)},300))):(n(a-t/4),setTimeout(r,16))}function n(e){a=e,o.style.width=a+"%"}function r(e){e>=0?(u=e,c||(c=1,t())):c&&t()}var o=document.createElement("div"),a=0,u=0,c=0,s={el:o,go:r};return i(o,"bar"),s}function a(e){function t(e){u.removeChild(e)}function n(){var e=o(t);u.appendChild(e.el),a=e.go}e=e||{};var a,u=document.createElement("div"),c={el:u,go:function(e){a(e),100===e&&n()}};return r(),i(u,"nanobar"),e.id&&(u.id=e.id),e.classname&&i(u,e.classname),e.target?(u.style.position="relative",e.target.insertBefore(u,e.target.firstChild)):(u.style.position="fixed",document.getElementsByTagName("body")[0].appendChild(u)),n(),c}var u=".nanobar{width:100%;height:4px;z-index:9999;top:0}.bar{width:0;height:100%;transition:height .3s;background:#000}";"object"==typeof n?t.exports=a:"function"==typeof define&&define.amd?define([],function(){return a}):e.Nanobar=a}(this)},{}],2:[function(e,t,n){"use strict";(new(function(e){return e&&e.__esModule?e:{default:e}}(e("nanobar")).default)).go(50)},{nanobar:1}]},{},[2]);
//# sourceMappingURL=script.js.map
