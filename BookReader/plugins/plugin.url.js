"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.url.js"],{

/***/ "./src/plugins/url/UrlPlugin.js":
/*!**************************************!*\
  !*** ./src/plugins/url/UrlPlugin.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UrlPlugin: function() { return /* binding */ UrlPlugin; }
/* harmony export */ });
class UrlPlugin {
  constructor(options = {}) {
    this.bookReaderOptions = options;

    // the canonical order of elements is important in the path and query string
    this.urlSchema = [{
      name: 'page',
      position: 'path',
      default: 'n0'
    }, {
      name: 'mode',
      position: 'path',
      default: '2up'
    }, {
      name: 'search',
      position: 'path',
      deprecated_for: 'q'
    }, {
      name: 'q',
      position: 'query_param'
    }, {
      name: 'sort',
      position: 'query_param'
    }, {
      name: 'view',
      position: 'query_param'
    }, {
      name: 'admin',
      position: 'query_param'
    }];
    this.urlState = {};
    this.urlMode = this.bookReaderOptions.urlMode || 'hash';
    this.urlHistoryBasePath = this.bookReaderOptions.urlHistoryBasePath || '/';
    this.urlLocationPollId = null;
    this.oldLocationHash = null;
    this.oldUserHash = null;
  }

  /**
   * Parse JSON object URL state to string format
   * Arrange path names in an order that it is positioned on the urlSchema
   * @param {Object} urlState
   * @returns {string}
   */
  urlStateToUrlString(urlState) {
    const searchParams = new URLSearchParams();
    const pathParams = {};
    Object.keys(urlState).forEach(key => {
      let schema = this.urlSchema.find(schema => schema.name === key);
      if (schema?.deprecated_for) {
        schema = this.urlSchema.find(schemaKey => schemaKey.name === schema.deprecated_for);
      }
      if (schema?.position == 'path') {
        pathParams[schema?.name] = urlState[key];
      } else {
        searchParams.append(schema?.name || key, urlState[key]);
      }
    });
    const strPathParams = this.urlSchema.filter(s => s.position == 'path').map(schema => pathParams[schema.name] ? `${schema.name}/${encodeURIComponent(pathParams[schema.name])}` : '').join('/');

    // replace consecutive slashes with a single slash + remove trailing slashes
    const strStrippedTrailingSlash = `${strPathParams.replace(/\/+/g, '/').replace(/\/+$/, '')}`;
    const concatenatedPath = `${strStrippedTrailingSlash}?${searchParams.toString()}`;
    return searchParams.toString() ? concatenatedPath : `${strStrippedTrailingSlash}`;
  }

  /**
   * Parse string URL and add it in the current urlState
   * Example:
   *  /page/n7/mode/2up => {page: 'n7', mode: '2up'}
   *  /page/n7/mode/2up/search/hello => {page: 'n7', mode: '2up', q: 'hello'}
   * @param {string} urlString
   * @returns {object}
   */
  urlStringToUrlState(urlString) {
    const urlState = {};

    // Fetch searchParams from given {str}
    // Note: whole URL path is needed for URL parsing
    const urlPath = new URL(urlString, 'http://example.com');
    const urlSearchParamsObj = Object.fromEntries(urlPath.searchParams.entries());
    const splitUrlMatches = urlPath.pathname.match(/[^\\/]+\/[^\\/]+/g);
    const urlStrSplitSlashObj = splitUrlMatches ? Object.fromEntries(splitUrlMatches.map(x => x.split('/'))) : {};
    const doesKeyExists = (_object, _key) => {
      return Object.keys(_object).some(value => value == _key);
    };

    // Add path objects to urlState
    this.urlSchema.filter(schema => schema.position == 'path').forEach(schema => {
      const hasPropertyKey = doesKeyExists(urlStrSplitSlashObj, schema.name);
      const hasDeprecatedKey = doesKeyExists(schema, 'deprecated_for') && hasPropertyKey;

      // Not in the URL
      if (!hasPropertyKey && !hasDeprecatedKey) {
        return;
      }
      const urlStateParam = hasDeprecatedKey ? schema.deprecated_for : schema.name;
      urlState[urlStateParam] = decodeURIComponent(urlStrSplitSlashObj[schema.name]);
    });

    // Add searchParams to urlState
    Object.entries(urlSearchParamsObj).forEach(([key, value]) => {
      urlState[key] = value;
    });
    return urlState;
  }

  /**
   * Add or update key-value to the urlState
   * @param {string} key
   * @param {string} val
   */
  setUrlParam(key, value) {
    this.urlState[key] = value;
    this.pushToAddressBar();
  }

  /**
   * Delete key-value to the urlState
   * @param {string} key
   */
  removeUrlParam(key) {
    delete this.urlState[key];
    this.pushToAddressBar();
  }

  /**
   * Get key-value from the urlState
   * @param {string} key
   * @return {string}
   */
  getUrlParam(key) {
    return this.urlState[key];
  }

  /**
   * Push URL params to addressbar
   */
  pushToAddressBar() {
    const urlStrPath = this.urlStateToUrlString(this.urlState);
    const concatenatedPath = urlStrPath !== '/' ? urlStrPath : '';
    if (this.urlMode == 'history') {
      if (!window.history || !window.history.replaceState) {
        this.options.urlMode = 'hash';
      } else {
        const newUrlPath = `${this.urlHistoryBasePath}${concatenatedPath}`.trim().replace(/(\/+)/g, '/');
        try {
          window.history.replaceState({}, null, newUrlPath);
        } catch (e) {
          // DOMException on Chrome when in sandboxed iframe
          this.urlMode = 'hash';
        }
      }
    }
    if (this.urlMode == 'hash') {
      window.location.replace('#' + concatenatedPath);
    }
    this.oldLocationHash = urlStrPath;
  }

  /**
   * Get the url and check if it has changed
   * If it was changeed, update the urlState
   */
  listenForHashChanges() {
    this.oldLocationHash = window.location.hash.substr(1);
    if (this.urlLocationPollId) {
      clearInterval(this.urlLocationPollId);
      this.urlLocationPollId = null;
    }

    // check if the URL changes
    const updateHash = () => {
      const newFragment = window.location.hash.substr(1);
      const hasFragmentChange = newFragment != this.oldLocationHash;
      if (!hasFragmentChange) {
        return;
      }
      this.urlState = this.urlStringToUrlState(newFragment);
    };
    this.urlLocationPollId = setInterval(updateHash, 500);
  }

  /**
   * Will read either the hash or URL and return the bookreader fragment
   */
  pullFromAddressBar(location = window.location) {
    const path = this.urlMode === 'history' ? location.pathname.substr(this.urlHistoryBasePath.length) + location.search : location.hash.substr(1);
    this.urlState = this.urlStringToUrlState(path);
  }
}

/***/ }),

/***/ "./src/plugins/url/plugin.url.js":
/*!***************************************!*\
  !*** ./src/plugins/url/plugin.url.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookreaderUrlPlugin: function() { return /* binding */ BookreaderUrlPlugin; }
/* harmony export */ });
/* harmony import */ var _UrlPlugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UrlPlugin */ "./src/plugins/url/UrlPlugin.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* global BookReader */



/**
 * Plugin for URL management in BookReader
 * Note read more about the url "fragment" here:
 * https://openlibrary.org/dev/docs/bookurls
 */

jQuery.extend(BookReader.defaultOptions, {
  enableUrlPlugin: true,
  bookId: '',
  /** @type {string} Defaults can be a urlFragment string */
  defaults: null,
  updateWindowTitle: false,
  /** @type {'history' | 'hash'} */
  urlMode: 'hash',
  /**
   * When using 'history' mode, this part of the URL is kept constant
   * @example /details/plato/
   */
  urlHistoryBasePath: '/',
  /** Only these params will be reflected onto the URL */
  urlTrackedParams: ['page', 'search', 'mode', 'region', 'highlight', 'view'],
  /** If true, don't update the URL when `page == n0 (eg "/page/n0")` */
  urlTrackIndex0: false
});

/** @override */
BookReader.prototype.setup = function (super_) {
  return function (options) {
    super_.call(this, options);
    this.bookId = options.bookId;
    this.defaults = options.defaults;
    this.locationPollId = null;
    this.oldLocationHash = null;
    this.oldUserHash = null;
  };
}(BookReader.prototype.setup);

/** @override */
BookReader.prototype.init = function (super_) {
  return function () {
    if (this.options.enableUrlPlugin) {
      this.bind(BookReader.eventNames.PostInit, () => {
        const {
          updateWindowTitle,
          urlMode
        } = this.options;
        if (updateWindowTitle) {
          document.title = this.shortTitle(this.bookTitle, 50);
        }
        if (urlMode === 'hash') {
          this.urlStartLocationPolling();
        }
      });
      this.bind(BookReader.eventNames.fragmentChange, this.urlUpdateFragment.bind(this));
    }
    super_.call(this);
  };
}(BookReader.prototype.init);

/**
 * Returns a shortened version of the title with the maximum number of characters
 * @param {number} maximumCharacters
 * @return {string}
 */
BookReader.prototype.shortTitle = function (maximumCharacters) {
  if (this.bookTitle.length < maximumCharacters) {
    return this.bookTitle;
  }
  const title = `${this.bookTitle.substr(0, maximumCharacters - 3)}...`;
  return title;
};

/**
 * Starts polling of window.location to see hash fragment changes
 */
BookReader.prototype.urlStartLocationPolling = function () {
  this.oldLocationHash = this.urlReadFragment();
  if (this.locationPollId) {
    clearInterval(this.locationPollId);
    this.locationPollId = null;
  }
  const updateHash = () => {
    const newFragment = this.urlReadFragment();
    const hasFragmentChange = newFragment != this.oldLocationHash && newFragment != this.oldUserHash;
    if (!hasFragmentChange) {
      return;
    }
    const params = this.paramsFromFragment(newFragment);
    const updateParams = () => this.updateFromParams(params);
    this.trigger(BookReader.eventNames.stop);
    if (this.animating) {
      // Queue change if animating
      if (this.autoStop) this.autoStop();
      this.animationFinishedCallback = updateParams;
    } else {
      // update immediately
      updateParams();
    }
    this.oldUserHash = newFragment;
  };
  this.locationPollId = setInterval(updateHash, 500);
};

/**
 * Update URL from the current parameters.
 * Call this instead of manually using window.location.replace
 */
BookReader.prototype.urlUpdateFragment = function () {
  const allParams = this.paramsFromCurrent();
  const {
    urlTrackIndex0,
    urlTrackedParams
  } = this.options;
  if (!urlTrackIndex0 && typeof allParams.index !== 'undefined' && allParams.index === 0) {
    delete allParams.index;
    delete allParams.page;
  }
  const params = urlTrackedParams.reduce((validParams, paramName) => {
    if (paramName in allParams) {
      validParams[paramName] = allParams[paramName];
    }
    return validParams;
  }, {});
  const newFragment = this.fragmentFromParams(params, this.options.urlMode);
  const currFragment = this.urlReadFragment();
  const currQueryString = this.getLocationSearch();
  const newQueryString = this.queryStringFromParams(params, currQueryString, this.options.urlMode);
  if (currFragment === newFragment && currQueryString === newQueryString) {
    return;
  }
  if (this.options.urlMode === 'history') {
    if (!window.history || !window.history.replaceState) {
      this.options.urlMode = 'hash';
    } else {
      const baseWithoutSlash = this.options.urlHistoryBasePath.replace(/\/+$/, '');
      const newFragmentWithSlash = newFragment === '' ? '' : `/${newFragment}`;
      const newUrlPath = `${baseWithoutSlash}${newFragmentWithSlash}${newQueryString}`;
      try {
        window.history.replaceState({}, null, newUrlPath);
        this.oldLocationHash = newFragment + newQueryString;
      } catch (e) {
        // DOMException on Chrome when in sandboxed iframe
        this.options.urlMode = 'hash';
      }
    }
  }
  if (this.options.urlMode === 'hash') {
    const newQueryStringSearch = this.urlParamsFiltersOnlySearch(this.readQueryString());
    window.location.replace('#' + newFragment + newQueryStringSearch);
    this.oldLocationHash = newFragment + newQueryStringSearch;
  }
};

/**
 * @private
 * Filtering query parameters to select only book search param (?q=foo)
   This needs to be updated/URL system modified if future query params are to be added
 * @param {string} url
 * @return {string}
 * */
BookReader.prototype.urlParamsFiltersOnlySearch = function (url) {
  const params = new URLSearchParams(url);
  return params.has('q') ? `?${new URLSearchParams({
    q: params.get('q')
  })}` : '';
};

/**
 * Will read either the hash or URL and return the bookreader fragment
 * @return {string}
 */
BookReader.prototype.urlReadFragment = function () {
  const {
    urlMode,
    urlHistoryBasePath
  } = this.options;
  if (urlMode === 'history') {
    return window.location.pathname.substr(urlHistoryBasePath.length);
  } else {
    return window.location.hash.substr(1);
  }
};

/**
 * Will read the hash return the bookreader fragment
 * @return {string}
 */
BookReader.prototype.urlReadHashFragment = function () {
  return window.location.hash.substr(1);
};
class BookreaderUrlPlugin extends BookReader {
  init() {
    if (this.options.enableUrlPlugin) {
      this.urlPlugin = new _UrlPlugin__WEBPACK_IMPORTED_MODULE_0__.UrlPlugin(this.options);
      this.bind(BookReader.eventNames.PostInit, () => {
        const {
          urlMode
        } = this.options;
        if (urlMode === 'hash') {
          this.urlPlugin.listenForHashChanges();
        }
      });
    }
    super.init();
  }
}
window.BookReader = BookreaderUrlPlugin;
/* harmony default export */ __webpack_exports__["default"] = (BookreaderUrlPlugin);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/url/plugin.url.js"));
/******/ }
]);
//# sourceMappingURL=plugin.url.js.map