"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.iframe.js"],{

/***/ "./src/plugins/plugin.iframe.js":
/*!**************************************!*\
  !*** ./src/plugins/plugin.iframe.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _attachEventListeners: function() { return /* binding */ _attachEventListeners; }
/* harmony export */ });
/* global BookReader */
/**
 * Plugin for two-way communication between a BookReader in an IFrame and the
 * parent web page
 */

const MESSAGE_TYPE_FRAGMENT_CHANGE = 'bookReaderFragmentChange';
BookReader.prototype.init = function (super_) {
  return function () {
    super_.call(this);
    _attachEventListeners(this);
  };
}(BookReader.prototype.init);

/**
 * @private
 * Using window.postMessage() and event listeners, the plugin notifies the
 * parent window when pages change, and the parent window can also
 * explicitly request a page change by sending its own message.
 *
 * @param {BookReader} br
 * @param {Window?} [parent]
 */
function _attachEventListeners(br, parent = window.parent) {
  // Not embedded, abort
  if (!parent) {
    return;
  }
  br.bind(BookReader.eventNames.fragmentChange, () => {
    const fragment = br.fragmentFromParams(br.paramsFromCurrent());
    parent.postMessage({
      type: MESSAGE_TYPE_FRAGMENT_CHANGE,
      fragment
    }, '*');
  });
  window.addEventListener('message', event => {
    // Not a recognized message type, abort
    if (!event.data || event.data.type !== MESSAGE_TYPE_FRAGMENT_CHANGE) {
      return;
    }
    br.updateFromParams(br.paramsFromFragment(event.data.fragment));
  });
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.iframe.js"));
/******/ }
]);
//# sourceMappingURL=plugin.iframe.js.map