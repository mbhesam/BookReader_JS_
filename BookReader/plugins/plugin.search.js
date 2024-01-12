"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.search.js"],{

/***/ "./src/plugins/search/plugin.search.js":
/*!*********************************************!*\
  !*** ./src/plugins/search/plugin.search.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BookReader_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BookReader/utils.js */ "./src/BookReader/utils.js");
/* harmony import */ var _BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BookReader/PageContainer.js */ "./src/BookReader/PageContainer.js");
/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view.js */ "./src/plugins/search/view.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./src/plugins/search/utils.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
// @ts-check
/* global BookReader */
/**
 * Plugin for Archive.org book search
 * Events fired at various points throughout search processing are published
 * on the document DOM element. These can be subscribed to using jQuery's event
 * binding method `$.fn.on`. All of the events are prefixed with a BookReader
 * namespace. The events are:
 *
 * @event BookReader:SearchStarted - When a search form is submitted, immediately
 *   before an AJAX call is made to request search results
 * @event BookReader:SearchCallback - When the search AJAX call is returned and at
 *   least one result is returned. The event callback receives an object
 *   with the `results`, plugin `options`, and the BookReader `instance`
 * @event BookReader:SearchCallbackError - When the AJAX request returns an error.
 *   Receives the `results` and `instance`
 * @event BookReader:SearchCallbackNotIndexed - When a message is received that
 *   the book has not had OCR text indexed yet. Receives `instance`
 * @event BookReader:SearchCallbackEmpty - When no results found. Receives
 *   `instance`
 * @event BookReader:SearchCanceled - When no results found. Receives
 *   `instance`
 */




/** @typedef {import('../../BookReader/PageContainer').PageContainer} PageContainer */
/** @typedef {import('../../BookReader/BookModel').PageIndex} PageIndex */
/** @typedef {import('../../BookReader/BookModel').LeafNum} LeafNum */
/** @typedef {import('../../BookReader/BookModel').PageNumString} PageNumString */

jQuery.extend(BookReader.defaultOptions, {
  server: 'ia600609.us.archive.org',
  bookId: '',
  subPrefix: '',
  bookPath: '',
  enableSearch: true,
  searchInsideProtocol: 'https',
  searchInsideUrl: '/fulltext/inside.php',
  searchInsidePreTag: '{{{',
  searchInsidePostTag: '}}}',
  initialSearchTerm: null
});

/** @override */
BookReader.prototype.setup = function (super_) {
  return function (options) {
    super_.call(this, options);
    this.searchTerm = '';
    this.searchResults = null;
    this.searchInsideUrl = options.searchInsideUrl;
    this.enableSearch = options.enableSearch;

    // Base server used by some api calls
    this.bookId = options.bookId;
    this.server = options.server;
    this.subPrefix = options.subPrefix;
    this.bookPath = options.bookPath;
    this.searchXHR = null;
    this._cancelSearch.bind(this);
    this.cancelSearchRequest.bind(this);

    /** @type { {[pageIndex: number]: SearchInsideMatchBox[]} } */
    this._searchBoxesByIndex = {};
    this.searchView = undefined;
  };
}(BookReader.prototype.setup);

/** @override */
BookReader.prototype.init = function (super_) {
  return function () {
    super_.call(this);
    // give SearchView the most complete bookreader state
    this.searchView = new _view_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
      br: this,
      searchCancelledCallback: () => {
        this._cancelSearch();
        this.trigger('SearchCanceled', {
          term: this.searchTerm,
          instance: this
        });
      }
    });
    if (this.options.enableSearch && this.options.initialSearchTerm) {
      /**
       * this.search() take two parameter
       * 1. this.options.initialSearchTerm - search term
       * 2. {
       *  goToFirstResult: this.options.goToFirstResult,
       *  suppressFragmentChange: false // always want to change fragment in URL
       * }
       */
      this.search(this.options.initialSearchTerm, {
        goToFirstResult: this.options.goToFirstResult,
        suppressFragmentChange: false
      });
    }
  };
}(BookReader.prototype.init);

/** @override */
BookReader.prototype.buildToolbarElement = function (super_) {
  return function () {
    const $el = super_.call(this);
    if (!this.enableSearch) {
      return;
    }
    if (this.searchView.dom.toolbarSearch) {
      $el.find('.BRtoolbarSectionInfo').after(this.searchView.dom.toolbarSearch);
    }
    return $el;
  };
}(BookReader.prototype.buildToolbarElement);

/** @override */
BookReader.prototype._createPageContainer = function (super_) {
  return function (index) {
    const pageContainer = super_.call(this, index);
    if (this.enableSearch && pageContainer.page && index in this._searchBoxesByIndex) {
      const pageIndex = pageContainer.page.index;
      const boxes = this._searchBoxesByIndex[pageIndex];
      (0,_BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_1__.renderBoxesInPageContainerLayer)('searchHiliteLayer', boxes, pageContainer.page, pageContainer.$container[0], boxes.map(b => `match-index-${b.matchIndex}`));
    }
    return pageContainer;
  };
}(BookReader.prototype._createPageContainer);

/**
 * @typedef {object} SearchOptions
 * @property {boolean} goToFirstResult
 * @property {boolean} disablePopup
 * @property {(null|function)} error - @deprecated at v.5.0
 * @property {(null|function)} success - @deprecated at v.5.0
 */

/**
 * Submits search request
 *
 * @param {string} term
 * @param {SearchOptions} overrides
 */
BookReader.prototype.search = async function (term = '', overrides = {}) {
  /** @type {SearchOptions} */
  const defaultOptions = {
    goToFirstResult: false,
    /* jump to the first result (default=false) */
    disablePopup: false,
    /* don't show the modal progress (default=false) */
    suppressFragmentChange: false,
    /* don't change the URL on initial load */
    error: null,
    /* optional error handler (default=null) */
    success: null /* optional success handler (default=null) */
  };

  const options = jQuery.extend({}, defaultOptions, overrides);
  this.suppressFragmentChange = options.suppressFragmentChange;
  this.searchCancelled = false;

  // strip slashes, since this goes in the url
  this.searchTerm = term.replace(/\//g, ' ');
  if (!options.suppressFragmentChange) {
    this.trigger(BookReader.eventNames.fragmentChange);
  }

  // Add quotes to the term. This is to compenstate for the backends default OR query
  // term = term.replace(/['"]+/g, '');
  // term = '"' + term + '"';

  // Remove the port and userdir
  const serverPath = this.server.replace(/:.+/, '');
  const baseUrl = `${this.options.searchInsideProtocol}://${serverPath}${this.searchInsideUrl}?`;

  // Remove subPrefix from end of path
  let path = this.bookPath;
  const subPrefixWithSlash = `/${this.subPrefix}`;
  if (this.bookPath.length - this.bookPath.lastIndexOf(subPrefixWithSlash) == subPrefixWithSlash.length) {
    path = this.bookPath.substr(0, this.bookPath.length - subPrefixWithSlash.length);
  }
  const urlParams = {
    item_id: this.bookId,
    doc: this.subPrefix,
    path,
    q: term,
    pre_tag: this.options.searchInsidePreTag,
    post_tag: this.options.searchInsidePostTag
  };

  // NOTE that the API does not expect / (slashes) to be encoded. (%2F) won't work
  const paramStr = $.param(urlParams).replace(/%2F/g, '/');
  const url = `${baseUrl}${paramStr}`;
  const callSearchResultsCallback = searchInsideResults => {
    if (this.searchCancelled) {
      return;
    }
    const responseHasError = searchInsideResults.error || !searchInsideResults.matches.length;
    const hasCustomError = typeof options.error === 'function';
    const hasCustomSuccess = typeof options.success === 'function';
    if (responseHasError) {
      console.error('Search Inside Response Error', searchInsideResults.error || 'matches.length == 0');
      hasCustomError ? options.error.call(this, searchInsideResults, options) : this.BRSearchCallbackError(searchInsideResults, options);
    } else {
      hasCustomSuccess ? options.success.call(this, searchInsideResults, options) : this.BRSearchCallback(searchInsideResults, options);
    }
  };
  this.trigger('SearchStarted', {
    term: this.searchTerm,
    instance: this
  });
  callSearchResultsCallback(await $.ajax({
    url: url,
    dataType: 'jsonp',
    cache: true,
    beforeSend: xhr => {
      this.searchXHR = xhr;
    }
  }));
};

/**
 * cancels AJAX Call
 * emits custom event
 */
BookReader.prototype._cancelSearch = function () {
  this.searchXHR?.abort();
  this.searchView.clearSearchFieldAndResults(false);
  this.searchTerm = '';
  this.searchXHR = null;
  this.searchCancelled = true;
  this.searchResults = [];
};

/**
 * External function to cancel search
 * checks for term & xhr in flight before running
 */
BookReader.prototype.cancelSearchRequest = function () {
  this.searchCancelled = true;
  if (this.searchXHR !== null) {
    this._cancelSearch();
    this.searchView.toggleSearchPending();
    this.trigger('SearchCanceled', {
      term: this.searchTerm,
      instance: this
    });
  }
};

/**
  * @typedef {object} SearchInsideMatchBox
  * @property {number} page
  * @property {number} r
  * @property {number} l
  * @property {number} b
  * @property {number} t
  * @property {HTMLDivElement} [div]
  * @property {number} matchIndex This is a fake field! not part of the API response. The index of the match that contains this box in total search results matches.
  */

/**
 * @typedef {object} SearchInsideMatch
 * @property {number} matchIndex This is a fake field! Not part of the API response. It is added by the JS.
 * @property {string} displayPageNumber (fake field) The page number as it should be displayed in the UI.
 * @property {string} html (computed field) The html-escaped raw html to display in the UI.
 * @property {string} text
 * @property {Array<{ page: number, boxes: SearchInsideMatchBox[] }>} par
 */

/**
 * @typedef {object} SearchInsideResults
 * @property {string} error
 * @property {SearchInsideMatch[]} matches
 * @property {boolean} indexed
 */

/**
 * Search Results return handler
 * @param {SearchInsideResults} results
 * @param {object} options
 * @param {boolean} options.goToFirstResult
 */
BookReader.prototype.BRSearchCallback = function (results, options) {
  (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.marshallSearchResults)(results, pageNum => this.book.getPageNum(this.book.leafNumToIndex(pageNum)), this.options.searchInsidePreTag, this.options.searchInsidePostTag);
  this.searchResults = results || [];
  this.updateSearchHilites();
  this.removeProgressPopup();
  if (options.goToFirstResult) {
    this._searchPluginGoToResult(0);
  }
  this.trigger('SearchCallback', {
    results,
    options,
    instance: this
  });
};

/**
 * Main search results error handler
 * @callback
 * @param {SearchInsideResults} results
 */
BookReader.prototype.BRSearchCallbackError = function (results) {
  this._BRSearchCallbackError(results);
};

/**
 * @private draws search results error
 * @callback
 * @param {SearchInsideResults} results
 * @param {jQuery} $el
 * @param {boolean} fade
 */
BookReader.prototype._BRSearchCallbackError = function (results) {
  this.searchResults = results;
  const basePayload = {
    term: this.searchTerm,
    instance: this
  };
  if (results.error) {
    const payload = Object.assign({}, basePayload, {
      results
    });
    this.trigger('SearchCallbackError', payload);
  } else if (0 == results.matches.length) {
    if (false === results.indexed) {
      this.trigger('SearchCallbackBookNotIndexed', basePayload);
      return;
    }
    this.trigger('SearchCallbackEmpty', basePayload);
  }
};

/**
 * updates search on-page highlights controller
 */
BookReader.prototype.updateSearchHilites = function () {
  /** @type {SearchInsideMatch[]} */
  const matches = this.searchResults?.matches || [];
  /** @type { {[pageIndex: number]: SearchInsideMatchBox[]} } */
  const boxesByIndex = {};

  // Clear any existing svg layers
  this.removeSearchHilites();

  // Group by pageIndex
  for (const match of matches) {
    for (const box of match.par[0].boxes) {
      const pageIndex = this.book.leafNumToIndex(box.page);
      const pageBoxes = boxesByIndex[pageIndex] || (boxesByIndex[pageIndex] = []);
      pageBoxes.push(box);
    }
  }

  // update any already created pages
  for (const [pageIndexString, boxes] of Object.entries(boxesByIndex)) {
    const pageIndex = parseFloat(pageIndexString);
    const page = this.book.getPage(pageIndex);
    const pageContainers = this.getActivePageContainerElementsForIndex(pageIndex);
    for (const container of pageContainers) {
      (0,_BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_1__.renderBoxesInPageContainerLayer)('searchHiliteLayer', boxes, page, container, boxes.map(b => `match-index-${b.matchIndex}`));
    }
  }
  this._searchBoxesByIndex = boxesByIndex;
};

/**
 * remove search highlights
 */
BookReader.prototype.removeSearchHilites = function () {
  $(this.getActivePageContainerElements()).find('.searchHiliteLayer').remove();
};

/**
 * @private
 * Goes to the page specified. If the page is not viewable, tries to load the page
 * FIXME Most of this logic is IA specific, and should be less integrated into here
 * or at least more configurable.
 * @param {number} matchIndex
 */
BookReader.prototype._searchPluginGoToResult = async function (matchIndex) {
  const match = this.searchResults?.matches[matchIndex];
  const book = this.book;
  const pageIndex = book.leafNumToIndex(match.par[0].page);
  const page = book.getPage(pageIndex);
  const onNearbyPage = Math.abs(this.currentIndex() - pageIndex) < 3;
  let makeUnviewableAtEnd = false;
  if (!page.isViewable) {
    const resp = await fetch('/services/bookreader/request_page?' + new URLSearchParams({
      id: this.options.bookId,
      subprefix: this.options.subPrefix,
      leafNum: page.leafNum
    })).then(r => r.json());
    for (const leafNum of resp.value) {
      book.getPage(book.leafNumToIndex(leafNum)).makeViewable();
    }

    // not able to show page; make the page viewable anyways so that it can
    // actually open. On IA, it has a fallback to a special error page.
    if (!resp.value.length) {
      book.getPage(pageIndex).makeViewable();
      makeUnviewableAtEnd = true;
    }

    // Trigger an update of book
    this._modes.mode1Up.mode1UpLit.updatePages();
    if (this.activeMode == this._modes.mode1Up) {
      await this._modes.mode1Up.mode1UpLit.updateComplete;
    }
  }
  /* this updates the URL */
  if (!this._isIndexDisplayed(pageIndex)) {
    this.suppressFragmentChange = false;
    this.jumpToIndex(pageIndex);
  }

  // Reset it to unviewable if it wasn't resolved
  if (makeUnviewableAtEnd) {
    book.getPage(pageIndex).makeViewable(false);
  }

  // Scroll/flash in the ui
  const $boxes = await (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_0__.poll)(() => $(`rect.match-index-${match.matchIndex}`), {
    until: result => result.length > 0
  });
  if ($boxes.length) {
    $boxes.css('animation', 'none');
    $boxes[0].scrollIntoView({
      // Only vertically center the highlight if we're in 1up or in full screen. In
      // 2up, if we're not fullscreen, the whole body gets scrolled around to try to
      // center the highlight 🙄 See:
      // https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move/11041376
      // Note: nearest doesn't quite work great, because the ReadAloud toolbar is now
      // full-width, and covers up the last line of the highlight.
      block: this.constMode1up == this.mode || this.isFullscreenActive ? 'center' : 'nearest',
      inline: 'center',
      behavior: onNearbyPage ? 'smooth' : 'auto'
    });
    // wait for animation to start
    await new Promise(resolve => setTimeout(resolve, 100));
    $boxes.removeAttr("style");
  }
};

/**
 * Removes all search pins
 */
BookReader.prototype.removeSearchResults = function (suppressFragmentChange = false) {
  this.removeSearchHilites(); //be sure to set all box.divs to null
  this.searchTerm = null;
  this.searchResults = null;
  if (!suppressFragmentChange) {
    this.trigger(BookReader.eventNames.fragmentChange);
  }
};

/**
 * Returns true if a search highlight is currently being displayed
 * @returns {boolean}
 */
BookReader.prototype.searchHighlightVisible = function () {
  const results = this.searchResults;
  let visiblePages = [];
  if (null == results) return false;
  if (this.constMode2up == this.mode) {
    visiblePages = [this.twoPage.currentIndexL, this.twoPage.currentIndexR];
  } else if (this.constMode1up == this.mode) {
    visiblePages = [this.currentIndex()];
  } else {
    return false;
  }
  results.matches.some(match => {
    return match.par[0].boxes.some(box => {
      const pageIndex = this.book.leafNumToIndex(box.page);
      if (jQuery.inArray(pageIndex, visiblePages) >= 0) {
        return true;
      }
    });
  });
  return false;
};

/***/ }),

/***/ "./src/plugins/search/utils.js":
/*!*************************************!*\
  !*** ./src/plugins/search/utils.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   marshallSearchResults: function() { return /* binding */ marshallSearchResults; },
/* harmony export */   renderMatch: function() { return /* binding */ renderMatch; }
/* harmony export */ });
/* harmony import */ var _BookReader_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../BookReader/utils.js */ "./src/BookReader/utils.js");


/**
 * @param {string} match
 * @param {string} preTag
 * @param {string} postTag
 * @returns {string}
 */
function renderMatch(match, preTag, postTag) {
  // Search results are returned as a text blob with the hits wrapped in
  // triple mustaches. Hits occasionally include text beyond the search
  // term, so everything within the staches is captured and wrapped.
  const preTagRe = (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)((0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeHTML)(preTag));
  const postTagRe = (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeRegExp)((0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeHTML)(postTag));
  // [^] matches any character, including line breaks
  const regex = new RegExp(`${preTagRe}([^]+?)${postTagRe}`, 'g');
  return (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_0__.escapeHTML)(match).replace(regex, '<mark>$1</mark>')
  // Fix trailing hyphens. This over-corrects but is net useful.
  .replace(/(\b)- /g, '$1');
}

/**
 * Attach some fields to search inside results
 * @param {SearchInsideResults} results
 * @param {(pageNum: LeafNum) => PageNumString} displayPageNumberFn
 * @param {string} preTag
 * @param {string} postTag
 */
function marshallSearchResults(results, displayPageNumberFn, preTag, postTag) {
  // Attach matchIndex to a few things to make it easier to identify
  // an active/selected match
  for (const [index, match] of results.matches.entries()) {
    match.matchIndex = index;
    match.displayPageNumber = displayPageNumberFn(match.par[0].page);
    match.html = renderMatch(match.text, preTag, postTag);
    for (const par of match.par) {
      for (const box of par.boxes) {
        box.matchIndex = index;
      }
    }
  }
}

/***/ }),

/***/ "./src/plugins/search/view.js":
/*!************************************!*\
  !*** ./src/plugins/search/view.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
class SearchView {
  /**
   * @param {object} params
   * @param {object} params.br The BookReader instance
   * @param {function} params.cancelSearch callback when a user wants to cancel search
   *
   * @event BookReader:SearchResultsCleared - when the search results nav gets cleared
   * @event BookReader:ToggleSearchMenu - when search results menu should toggle
   */
  constructor({
    br,
    searchCancelledCallback = () => {}
  }) {
    this.br = br;
    this.matches = [];
    this.cacheDOMElements();
    this.bindEvents();
    this.cancelSearch = searchCancelledCallback;
  }
  cacheDOMElements() {
    this.dom = {};
    // Search input within the top toolbar. Will be removed once the mobile menu is replaced.
    this.dom.toolbarSearch = this.buildToolbarSearch();
  }

  /**
   * @param {string} query
   */
  setQuery(query) {
    this.br.$('[name="query"]').val(query);
  }
  emptyMatches() {
    this.matches = [];
  }
  removeResultPins() {
    this.br.$('.BRnavpos .BRsearch').remove();
  }
  clearSearchFieldAndResults(dispatchEventWhenComplete = true) {
    this.br.removeSearchResults();
    this.removeResultPins();
    this.emptyMatches();
    this.setQuery('');
    this.teardownSearchNavigation();
    if (dispatchEventWhenComplete) {
      this.br.trigger('SearchResultsCleared');
    }
  }
  toggleSidebar() {
    this.br.trigger('ToggleSearchMenu');
  }
  renderSearchNavigation() {
    const selector = 'BRsearch-navigation';
    $('.BRnav').before(`
      <div class="${selector}">
        <button class="toggle-sidebar">
          <h4>
            <span class="icon icon-search"></span> Results
          </h4>
        </button>
        <div class="pagination">
          <button class="prev" title="Previous result"><span class="icon icon-chevron hflip"></span></button>
          <span data-id="resultsCount">${this.resultsPosition()}</span>
          <button class="next" title="Next result"><span class="icon icon-chevron"></button>
        </div>
        <button class="clear" title="Clear search results">
          <span class="icon icon-close"></span>
        </button>
      </div>
    `);
    this.dom.searchNavigation = $(`.${selector}`);
  }
  resultsPosition() {
    let positionMessage = `${this.matches.length} result${this.matches.length === 1 ? '' : 's'}`;
    if (~this.currentMatchIndex) {
      positionMessage = `${this.currentMatchIndex + 1} / ${this.matches.length}`;
    }
    return positionMessage;
  }
  bindSearchNavigationEvents() {
    if (!this.dom.searchNavigation) {
      return;
    }
    const namespace = 'searchNavigation';
    this.dom.searchNavigation.on(`click.${namespace}`, '.clear', this.clearSearchFieldAndResults.bind(this)).on(`click.${namespace}`, '.prev', this.showPrevResult.bind(this)).on(`click.${namespace}`, '.next', this.showNextResult.bind(this)).on(`click.${namespace}`, '.toggle-sidebar', this.toggleSidebar.bind(this)).on(`click.${namespace}`, false);
  }
  showPrevResult() {
    if (this.currentMatchIndex === 0) {
      return;
    }
    if (this.br.mode === this.br.constModeThumb) {
      this.br.switchMode(this.br.constMode1up);
    }
    if (!~this.currentMatchIndex) {
      this.currentMatchIndex = this.getClosestMatchIndex((start, end, comparator) => end[0] > comparator) + 1;
    }
    this.br.$('.BRnavline .BRsearch').eq(--this.currentMatchIndex).click();
    this.updateResultsPosition();
    this.updateSearchNavigationButtons();
  }
  showNextResult() {
    if (this.currentMatchIndex + 1 === this.matches.length) {
      return;
    }
    if (this.br.mode === this.br.constModeThumb) {
      this.br.switchMode(this.br.constMode1up);
    }
    if (!~this.currentMatchIndex) {
      this.currentMatchIndex = this.getClosestMatchIndex((start, end, comparator) => start[start.length - 1] > comparator) - 1;
    }
    this.br.$('.BRnavline .BRsearch').eq(++this.currentMatchIndex).click();
    this.updateResultsPosition();
    this.updateSearchNavigationButtons();
  }

  /**
   * Obtains closest match based on the logical comparison function passed in.
   * When the comparison function returns true, the starting (left) half of the
   * matches array is used in the binary split, else the ending (right) half is
   * used. A recursive call is made to perform the same split and comparison
   * on the winning half of the matches. This is traditionally known as binary
   * search (https://en.wikipedia.org/wiki/Binary_search_algorithm), and in
   * most cases (medium to large search result arrays) should outperform
   * traversing the array from start to finish. In the case of small arrays,
   * the speed difference is negligible.
   *
   * @param {function} comparisonFn
   * @return {number} matchIndex
   */
  getClosestMatchIndex(comparisonFn) {
    const matchPages = this.matches.map(m => m.par[0].page);
    const currentPage = this.br.currentIndex() + 1;
    const closestTo = (pool, comparator) => {
      if (pool.length === 1) {
        return pool[0];
      }
      const start = pool.slice(0, pool.length / 2);
      const end = pool.slice(pool.length / 2);
      return closestTo(comparisonFn(start, end, comparator) ? start : end, comparator);
    };
    const closestPage = closestTo(matchPages, currentPage);
    return this.matches.indexOf(this.matches.find(m => m.par[0].page === closestPage));
  }
  updateResultsPosition() {
    if (!this.dom.searchNavigation) return;
    this.dom.searchNavigation.find('[data-id=resultsCount]').text(this.resultsPosition());
  }
  updateSearchNavigationButtons() {
    if (!this.dom.searchNavigation) return;
    this.dom.searchNavigation.find('.prev').attr('disabled', !this.currentMatchIndex);
    this.dom.searchNavigation.find('.next').attr('disabled', this.currentMatchIndex + 1 === this.matches.length);
  }
  teardownSearchNavigation() {
    if (!this.dom.searchNavigation) {
      this.dom.searchNavigation = $('.BRsearch-navigation');
    }
    if (!this.dom.searchNavigation.length) {
      return;
    }
    this.dom.searchNavigation.off('.searchNavigation').remove();
    this.dom.searchNavigation = null;
    this.br.resize();
  }
  setCurrentMatchIndex() {
    let matchingSearchResult;
    if (this.br.mode === this.br.constModeThumb) {
      this.currentMatchIndex = -1;
      return;
    }
    if (this.br.mode === this.br.constMode2up) {
      matchingSearchResult = this.find2upMatchingSearchResult();
    } else {
      matchingSearchResult = this.find1upMatchingSearchResult();
    }
    this.currentMatchIndex = this.matches.indexOf(matchingSearchResult);
  }
  find1upMatchingSearchResult() {
    return this.matches.find(m => this.br.currentIndex() === m.par[0].page - 1);
  }
  find2upMatchingSearchResult() {
    return this.matches.find(m => this.br._isIndexDisplayed(m.par[0].page - 1));
  }
  updateSearchNavigation() {
    if (!this.matches.length) {
      return;
    }
    this.setCurrentMatchIndex();
    this.updateResultsPosition();
    this.updateSearchNavigationButtons();
  }

  /**
   * @param {boolean} bool
   */
  togglePinsFor(bool) {
    const pinsVisibleState = bool ? 'visible' : 'hidden';
    this.br.refs.$BRfooter.find('.BRsearch').css({
      visibility: pinsVisibleState
    });
  }
  buildToolbarSearch() {
    const toolbarSearch = document.createElement('span');
    toolbarSearch.classList.add('BRtoolbarSection', 'BRtoolbarSectionSearch');
    toolbarSearch.innerHTML = `
      <form class="BRbooksearch desktop">
        <input type="search" name="query" class="BRsearchInput" value="" placeholder="Search inside"/>
        <button type="submit" class="BRsearchSubmit">
          <img src="${this.br.imagesBaseURL}icon_search_button.svg" />
        </button>
      </form>
    `;
    return toolbarSearch;
  }

  /**
   * @param {array} matches
   */
  renderPins(matches) {
    matches.forEach(match => {
      const pageIndex = this.br.book.leafNumToIndex(match.par[0].page);
      const uiStringSearch = "Search result"; // i18n
      const percentThrough = this.br.constructor.util.cssPercentage(pageIndex, this.br.book.getNumLeafs() - 1);
      let html = match.html;
      if (html.length > 200) {
        const start = Math.max(0, html.indexOf('<mark>') - 100);
        if (start != 0) {
          html = '…' + match.html.substring(start)
          // Make sure at word boundary though
          .replace(/^\S+/, '');
        }
      }
      // draw marker
      $('<div>').addClass('BRsearch').css({
        left: percentThrough
      }).attr('title', uiStringSearch).append(`
          <div class="BRquery">
            <main>${html}</main>
            <footer>Page ${match.displayPageNumber}</footer>
          </div>
        `).appendTo(this.br.$('.BRnavline')).on("mouseenter", event => {
        // remove from other markers then turn on just for this
        // XXX should be done when nav slider moves
        const marker = event.currentTarget;
        const tooltip = marker.querySelector('.BRquery');
        const tooltipOffset = tooltip.getBoundingClientRect();
        const targetOffset = marker.getBoundingClientRect();
        const boxSizeAdjust = parseInt(getComputedStyle(tooltip).paddingLeft) * 2;
        if (tooltipOffset.x - boxSizeAdjust < 0) {
          tooltip.style.setProperty('transform', `translateX(-${targetOffset.left - boxSizeAdjust}px)`);
        }
        $('.BRsearch,.BRchapter').removeClass('front');
        $(event.target).addClass('front');
      }).on("mouseleave", event => $(event.target).removeClass('front')).on("click", () => {
        this.br._searchPluginGoToResult(match.matchIndex);
      });
    });
  }

  /**
   * @param {boolean} bool
   */
  toggleSearchPending(bool) {
    if (bool) {
      this.br.showProgressPopup("Search results will appear below...", () => this.progressPopupClosed());
    } else {
      this.br.removeProgressPopup();
    }
  }

  /**
   * Primary callback when user cancels search popup
   */
  progressPopupClosed() {
    this.toggleSearchPending();
    this.cancelSearch();
  }
  renderErrorModal(textIsProcessing = false) {
    const errorDetails = `${!textIsProcessing ? 'The text may still be processing. ' : ''}Please try again.`;
    this.renderModalMessage(`
      Sorry, there was an error with your search.
      <br />
      ${errorDetails}
    `);
    this.delayModalRemovalFor(4000);
  }
  renderBookNotIndexedModal() {
    this.renderModalMessage(`
      <p>
         This book hasn't been indexed for searching yet.
         We've just started indexing it, so search should be available soon.
         <br />
         Please try again later. Thanks!
      </p>
    `);
    this.delayModalRemovalFor(5000);
  }
  renderResultsEmptyModal() {
    this.renderModalMessage('No matches were found.');
    this.delayModalRemovalFor(2000);
  }

  /**
   * @param {string} messageHTML The innerHTML string used to popupate the modal contents
   */
  renderModalMessage(messageHTML) {
    const modal = document.createElement('div');
    modal.classList.add('BRprogresspopup', 'search_modal');
    modal.innerHTML = messageHTML;
    document.querySelector(this.br.el).append(modal);
  }

  /**
   * @param {number} timeoutMS
   */
  delayModalRemovalFor(timeoutMS) {
    setTimeout(this.br.removeProgressPopup.bind(this.br), timeoutMS);
  }

  /**
   * @param {Event} e
   */
  submitHandler(e) {
    e.preventDefault();
    const query = e.target.querySelector('[name="query"]').value;
    if (!query.length) {
      return false;
    }
    this.br.search(query);
    this.emptyMatches();
    this.toggleSearchPending(true);
    return false;
  }

  /**
   * @param {Event} e
   * @param {object} properties
   *   @param {object} properties.results
   *   @param {object} properties.options
   */
  handleSearchCallback(e, {
    results,
    options
  }) {
    this.matches = results.matches;
    this.setCurrentMatchIndex();
    this.teardownSearchNavigation();
    this.renderSearchNavigation();
    this.bindSearchNavigationEvents();
    this.renderPins(results.matches);
    this.toggleSearchPending(false);
    if (options.goToFirstResult) {
      $(document).one('BookReader:pageChanged', () => {
        this.br.resize();
      });
    } else {
      this.br.resize();
    }
  }
  handleSearchStarted() {
    this.emptyMatches();
    this.br.removeSearchHilites();
    this.removeResultPins();
    this.toggleSearchPending(true);
    this.teardownSearchNavigation();
    this.setQuery(this.br.searchTerm);
  }

  /**
   * Event listener for: `BookReader:SearchCallbackError`
   * @param {CustomEvent} event
   */
  handleSearchCallbackError(event = {}) {
    this.toggleSearchPending(false);
    const isIndexed = event?.detail?.props?.results?.indexed;
    this.renderErrorModal(isIndexed);
  }
  handleSearchCallbackBookNotIndexed() {
    this.toggleSearchPending(false);
    this.renderBookNotIndexedModal();
  }
  handleSearchCallbackEmpty() {
    this.toggleSearchPending(false);
    this.renderResultsEmptyModal();
  }
  bindEvents() {
    const namespace = 'BookReader:';
    window.addEventListener(`${namespace}SearchCallbackError`, this.handleSearchCallbackError.bind(this));
    $(document).on(`${namespace}SearchCallback`, this.handleSearchCallback.bind(this)).on(`${namespace}SearchStarted`, this.handleSearchStarted.bind(this)).on(`${namespace}SearchCallbackBookNotIndexed`, this.handleSearchCallbackBookNotIndexed.bind(this)).on(`${namespace}SearchCallbackEmpty`, this.handleSearchCallbackEmpty.bind(this)).on(`${namespace}pageChanged`, this.updateSearchNavigation.bind(this));
    this.dom.toolbarSearch.querySelector('form').addEventListener('submit', this.submitHandler.bind(this));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SearchView);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/search/plugin.search.js"));
/******/ }
]);
//# sourceMappingURL=plugin.search.js.map