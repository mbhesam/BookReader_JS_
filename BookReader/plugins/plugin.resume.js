"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.resume.js"],{

/***/ "./src/plugins/plugin.resume.js":
/*!**************************************!*\
  !*** ./src/plugins/plugin.resume.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_docCookies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/docCookies.js */ "./src/util/docCookies.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");


/* global BookReader */

/** @deprecated Exposed for backward compatibility */
BookReader.docCookies = _util_docCookies_js__WEBPACK_IMPORTED_MODULE_0__;

/**
 * Plugin to remember the current page number in a cookie
 */
jQuery.extend(BookReader.defaultOptions, {
  enablePageResume: true,
  /** @type {string|null} eg '/', '/details/id' */
  resumeCookiePath: null
});

/** @override */
BookReader.prototype.init = function (super_) {
  return function () {
    super_.call(this);
    if (this.options.enablePageResume) {
      this.bind(BookReader.eventNames.fragmentChange, () => {
        const params = this.paramsFromCurrent();
        this.updateResumeValue(params.index);
      });
    }
  };
}(BookReader.prototype.init);

/**
 * Gets page resume value, for remembering reader's page
 * Can be overridden for different implementation
 *
 * @return {number|null}
 */
BookReader.prototype.getResumeValue = function () {
  const val = BookReader.docCookies.getItem('br-resume');
  if (val !== null) return parseInt(val);else return null;
};

/**
 * Return cookie path using pathname up to /page/... or /mode/...
 * using window.location.pathname for urlPathPart:
 * - matches encoding
 * - ignores querystring part
 * - ignores fragment part (after #)
 * @param {string} urlPathPart - window.location.pathname
 */
BookReader.prototype.getCookiePath = function (urlPathPart) {
  return urlPathPart.match('.+?(?=/page/|/mode/|$)')[0];
};

/**
 * Sets page resume value, for remembering reader's page
 * Can be overridden for different implementation
 *
 * @param {Number} index leaf index
 * @param {string} [cookieName]
 */
BookReader.prototype.updateResumeValue = function (index, cookieName) {
  const ttl = new Date(+new Date() + 12096e5); // 2 weeks
  // For multiple files in item, leave resumeCookiePath blank
  // It's likely we can remove resumeCookiePath using getCookiePath()
  const path = this.options.resumeCookiePath || this.getCookiePath(window.location.pathname);
  BookReader.docCookies.setItem(cookieName || 'br-resume', index, ttl, path, null, false);
};

/***/ }),

/***/ "./src/util/docCookies.js":
/*!********************************!*\
  !*** ./src/util/docCookies.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areCookiesBlocked: function() { return /* binding */ areCookiesBlocked; },
/* harmony export */   getItem: function() { return /* binding */ getItem; },
/* harmony export */   removeItem: function() { return /* binding */ removeItem; },
/* harmony export */   setItem: function() { return /* binding */ setItem; }
/* harmony export */ });
/**
 * Helper module use to get, set and remove item from cookie
 *
 * See more:
 *  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
 *  https://developer.mozilla.org/User:fusionchess
 *  https://github.com/madmurphy/cookies.js
 *  This framework is released under the GNU Public License, version 3 or later.
 *  http://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Check to see if the browser has cookies enabled.
 * Accessing document.cookies errors if eg iframe with sandbox enabled.
 * @returns {boolean}
 */
function areCookiesBlocked(doc = document) {
  try {
    doc.cookie;
    return false;
  } catch (e) {
    return true;
  }
}
const COOKIES_BLOCKED = areCookiesBlocked();

/**
 * Get specific key's value stored in cookie
 *
 * @param {string} sKey
 *
 * @returns {string|null}
 */
function getItem(sKey) {
  if (COOKIES_BLOCKED || !sKey) return null;
  return decodeURIComponent(
  // eslint-disable-next-line no-useless-escape
  document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
}

/**
 * Set specific key's value in cookie
 *
 * @param {string} sKey cookie name
 * @param {string} sValue cookie value
 * @param {string} [vEnd] expire|max-age
 * @param {string} [sPath] path of current item
 * @param {string} [sDomain] domain name
 * @param {boolean} [bSecure]
 *
 * @returns {boolean}
 */
function setItem(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
  if (COOKIES_BLOCKED) return false;
  document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + (vEnd ? `; expires=${vEnd.toUTCString()}` : '') + (sDomain ? `; domain=${sDomain}` : '') + (sPath ? `; path=${sPath}` : '') + (bSecure ? `; secure` : '');
  return true;
}

/**
 * BROKEN Remove specific key's value from cookie
 * @fixme hasItem isn't even implemented! This will always error.
 * @param {string} sKey cookie name
 * @param {string} [sPath] path of current item
 * @param {string} [sDomain]
 *
 * @returns {boolean}
 */
function removeItem(sKey, sPath, sDomain) {
  if (COOKIES_BLOCKED) return false;
  // eslint-disable-next-line
  if (!hasItem(sKey)) return false;
  document.cookie = encodeURIComponent(sKey) + `=; expires=Thu, 01 Jan 1970 00:00:00 GMT` + (sDomain ? `; domain=${sDomain}` : '') + (sPath ? `; path=${sPath}` : '');
  return true;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.resume.js"));
/******/ }
]);
//# sourceMappingURL=plugin.resume.js.map