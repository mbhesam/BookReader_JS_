"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.vendor-fullscreen.js"],{

/***/ "./src/plugins/plugin.vendor-fullscreen.js":
/*!*************************************************!*\
  !*** ./src/plugins/plugin.vendor-fullscreen.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bindFullscreenChangeListener: function() { return /* binding */ bindFullscreenChangeListener; },
/* harmony export */   exitFullscreen: function() { return /* binding */ exitFullscreen; },
/* harmony export */   fullscreenAllowed: function() { return /* binding */ fullscreenAllowed; },
/* harmony export */   getFullscreenElement: function() { return /* binding */ getFullscreenElement; },
/* harmony export */   isFullscreenActive: function() { return /* binding */ isFullscreenActive; },
/* harmony export */   isMobile: function() { return /* binding */ isMobile; },
/* harmony export */   requestFullscreen: function() { return /* binding */ requestFullscreen; }
/* harmony export */ });
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/* global BookReader */

/**
 * Toggles browser's native fullscreen mode if available device is not mobile
 */
if (!isMobile()) {
  const EVENT_NAMESPACE = '.bookreader_vendor-fullscreen';
  jQuery.extend(BookReader.defaultOptions, {
    /** @type {boolean} */
    enableVendorFullscreenPlugin: true
  });

  /** @override */
  BookReader.prototype.setup = function (super_) {
    return function (options) {
      super_.call(this, options);
      this.isVendorFullscreenActive = false;
    };
  }(BookReader.prototype.setup);

  /** @override */
  BookReader.prototype.getInitialMode = function (super_) {
    return function (params) {
      let nextMode = super_.call(this, params);
      if (this.isVendorFullscreenActive) {
        nextMode = this.constMode1up;
      }
      return nextMode;
    };
  }(BookReader.prototype.getInitialMode);

  /** @override */
  BookReader.prototype.init = function (super_) {
    return function () {
      super_.call(this);
      if (!fullscreenAllowed()) {
        return;
      }
      // In fullscreen mode the colorbox and overlay need to be inside the fullscreen element to display properly.
      bindFullscreenChangeListener(this, e => {
        e.data.resize();
        e.data.updateBrClasses();
        const cboxOverlay = $('#cboxOverlay');
        const cbox = $('#colorbox');
        if (isFullscreenActive()) {
          // In full screen mode, the colorbox and overlay need
          // to be children of the fullscreen element to display properly.
          const $fullscreen = $(getFullscreenElement());
          $fullscreen.append(cboxOverlay).append(cbox);
        } else {
          // In non-fullscreen mode, the colorbox and overlay need
          // to be children of the main document body.
          $(document.body).append(cboxOverlay).append(cbox);
        }
      });
    };
  }(BookReader.prototype.init);

  /**
   * Start fullscreen mode
   */
  BookReader.prototype.enterFullWindow = function () {
    this.refs.$brContainer.css('opacity', 0);
    const windowWidth = $(window).width();
    if (windowWidth <= this.onePageMinBreakpoint) {
      this.switchMode(this.constMode1up);
    }
    this.isVendorFullscreenActive = true;
    this.updateBrClasses();
    this.resize();
    this.jumpToIndex(this.currentIndex());
    this.refs.$brContainer.animate({
      opacity: 1
    }, 400, 'linear');
    $(document).on(`keyup.${EVENT_NAMESPACE}`, e => {
      if (e.keyCode === 27) this.exitFullScreen();
    });
  };

  /**
   * Exit from fullscreen mode
   */
  BookReader.prototype.exitFullWindow = function () {
    this.refs.$brContainer.css('opacity', 0);
    $(document).off('keyup' + EVENT_NAMESPACE);
    this.isFullscreenActive = false;
    this.updateBrClasses();
    this.resize();
    this.refs.$brContainer.animate({
      opacity: 1
    }, 400, 'linear');
  };

  /**
   * Returns true if fullscreen mode is enabled
   *
   * @returns {boolean}
   */
  BookReader.prototype.isFullscreen = function () {
    return isFullscreenActive() || this.isVendorFullscreenActive;
  };

  /**
   * Toggle screen
   */
  BookReader.prototype.toggleFullscreen = function () {
    if (this.isFullscreen()) {
      if (fullscreenAllowed()) {
        exitFullscreen();
      } else {
        this.exitFullWindow();
      }
    } else {
      if (fullscreenAllowed()) {
        requestFullscreen(this.refs.$br[0]);
      } else {
        this.enterFullWindow();
      }
    }
  };

  /** @deprecated */
  BookReader.util.isMobile = isMobile;

  /** @deprecated */
  BookReader.util.getFullscreenElement = getFullscreenElement;

  /** @deprecated */
  BookReader.util.bindFullscreenChangeListener = bindFullscreenChangeListener;

  /** @deprecated */
  BookReader.util.fullscreenAllowed = fullscreenAllowed;

  /** @deprecated */
  BookReader.util.requestFullscreen = requestFullscreen;

  /** @deprecated */
  BookReader.util.exitFullscreen = exitFullscreen;

  /** @deprecated */
  BookReader.util.isFullscreenActive = isFullscreenActive;
}

/**
 * Returns the DOM element being used for fullscreen.
 *
 * @returns {HTMLElement}
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/fullscreenElement
 */
function getFullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
}

/**
 * Returns true if the document is in fullscreen mode.
 *
 * @returns {boolean}
 */
function isFullscreenActive() {
  const fullscreenElement = getFullscreenElement();
  return fullscreenElement !== null && fullscreenElement !== undefined;
}

/**
 * Exits fullscreen mode.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/exitFullscreen
 */
function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

/**
 * Requests fullscreen mode for the given element
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/requestFullscreen
 */
function requestFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

/**
 * Returns true if fullscreen mode is allowed on this device and document.
 *
 * @returns {boolean}
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenEnabled
 */
function fullscreenAllowed() {
  return document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullScreenEnabled;
}

/**
 * jQuery-style binding to a fullscreenchange event.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/fullscreenchange_event
 */
function bindFullscreenChangeListener(data, fullscreenchangeListener) {
  const event = 'fullscreenchange ';
  const vendor_prefixes = ['webkit', 'moz', 'ms'];
  const all_events = (event + vendor_prefixes.join(event) + event).trim();
  $(document).on(all_events, data, fullscreenchangeListener);
}

/**
 * Returns true if current device is mobile
 *
 * @returns {boolean}
 */
function isMobile() {
  return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.vendor-fullscreen.js"));
/******/ }
]);
//# sourceMappingURL=plugin.vendor-fullscreen.js.map