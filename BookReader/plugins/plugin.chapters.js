"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.chapters.js"],{

/***/ "./node_modules/@internetarchive/icon-toc/icon-toc.js":
/*!************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-toc/icon-toc.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-toc/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconToc extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  render() {
    return _index_js__WEBPACK_IMPORTED_MODULE_0__["default"];
  }
}

customElements.define('ia-icon-toc', IAIconToc);

/* harmony default export */ __webpack_exports__["default"] = (IAIconToc);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-toc/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-toc/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="tocTitleID tocDescID"
>
  <title id="tocTitleID">Table of contents icon</title>
  <desc id="tocDescID">An illustration of three text list items</desc>
  <g class="fill-color" fill-rule="evenodd"><rect height="3" rx="1.5" width="18" x="6"/><rect height="3" rx="1.5" width="18" x="6" y="21"/><rect height="3" rx="1.5" width="18" x="6" y="14"/><rect height="3" rx="1.5" width="18" x="6" y="7"/><rect height="3" rx="1.5" width="4"/><rect height="3" rx="1.5" width="4" y="21"/><rect height="3" rx="1.5" width="4" y="14"/><rect height="3" rx="1.5" width="4" y="7"/></g>
</svg>
`);


/***/ }),

/***/ "./src/plugins/plugin.chapters.js":
/*!****************************************!*\
  !*** ./src/plugins/plugin.chapters.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BRChaptersPanel: function() { return /* binding */ BRChaptersPanel; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");
/* harmony import */ var _internetarchive_icon_toc_icon_toc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internetarchive/icon-toc/icon-toc */ "./node_modules/@internetarchive/icon-toc/icon-toc.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }
function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }
function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }
function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }
function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }
function _hasDecorators(element) { return element.decorators && element.decorators.length; }
function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }
function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
/* global BookReader */





/** @typedef {import('@/src/BookNavigator/book-navigator.js').BookNavigator} BookNavigator */

/**
 * Plugin for chapter markers in BookReader. Fetches from openlibrary.org
 * Could be forked, or extended to alter behavior
 */

// jQuery.extend(BookReader.defaultOptions, {
//   olHost: 'https://openlibrary.org',
//   enableChaptersPlugin: true,
//   bookId: '',
// });

/** @override Extend to call Open Library for TOC */
BookReader.prototype.init = function (super_) {
  return function () {
    super_.call(this);
    if (this.options.enableChaptersPlugin && this.ui !== 'embed') {
      this._chapterInit();
    }
  };
}(BookReader.prototype.init);
BookReader.prototype._chapterInit = async function () {
  let rawTableOfContents = null;
  // Prefer IA TOC for now, until we update the second half to check for
  // `openlibrary_edition` on the IA metadata instead of making a bunch of
  // requests to OL.
  if (this.options.table_of_contents?.length) {
    rawTableOfContents = this.options.table_of_contents;
  }
  if (rawTableOfContents) {
    this._tocEntries = rawTableOfContents;
    // .map(rawTOCEntry => (Object.assign({}, rawTOCEntry, {
    //   pageIndex: (
    //     typeof(rawTOCEntry.leaf) == 'number' ? this.book.leafNumToIndex(rawTOCEntry.leaf) :
    //       rawTOCEntry.pagenum ? this.book.getPageIndex(rawTOCEntry.pagenum) :
    //         undefined
    //   ),
    // })));
    this._chaptersRender(this._tocEntries);
    // this.bind(BookReader.eventNames.pageChanged, () => this._chaptersUpdateCurrent());
  }
};

/**
 * Update the table of contents based on array of TOC entries.
 */
BookReader.prototype._chaptersRender = function () {
  const shell = /** @type {BookNavigator} */this.shell;
  shell.menuProviders['chapters'] = {
    id: 'chapters',
    icon: (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<ia-icon-toc style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-toc>`,
    label: 'جلدهای دیگر',
    component: (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<br-chapters-panel
      .contents="${this._tocEntries}"
      .jumpToPage="${pageIndex => {
      this._chaptersUpdateCurrent(pageIndex);
      this.jumpToIndex(pageIndex);
    }}"
      @connected="${e => {
      this._chaptersPanel = e.target;
      this._chaptersUpdateCurrent();
    }}"
    />`
  };
  shell.addMenuShortcut('chapters');
  shell.updateMenuContents();
  this._tocEntries.forEach((tocEntry, i) => this._chaptersRenderMarker(tocEntry, i));
};

/**
 * @typedef {Object} TocEntry
 * Table of contents entry as defined by Open Library, with some extra values for internal use
 * @property {number} [level]
 * @property {string} [label]
 * @property {string} [title]
 * @property {PageString} [pagenum]
 * @property {LeafNum} [leaf]
 * @property {number} [pageIndex] - Added
 *
 * @example {
 *   "pagenum": "17",
 *   "level": 1,
 *   "label": "CHAPTER I",
 *   "title": "THE COUNTRY AND THE MISSION"
 * }
 */

/**
 * @param {TocEntry} tocEntry
 * @param {number} entryIndex
 */
BookReader.prototype._chaptersRenderMarker = function (tocEntry, entryIndex) {
  if (tocEntry.pageIndex == undefined) return;

  //creates a string with non-void tocEntry.label and tocEntry.title
  const chapterStr = [tocEntry.label, tocEntry.title].filter(x => x).join(' ') || `Chapter ${entryIndex + 1}`;
  const percentThrough = BookReader.util.cssPercentage(tocEntry.pageIndex, this.book.getNumLeafs() - 1);
  $(`<div></div>`).append($('<div />').text(chapterStr).append($('<div class="BRchapterPage" />').text(this.book.getPageName(tocEntry.pageIndex)))).addClass('BRchapter').css({
    left: percentThrough
  }).appendTo(this.$('.BRnavline')).on("mouseenter", event => {
    // remove hover effect from other markers then turn on just for this
    const marker = event.currentTarget;
    const tooltip = marker.querySelector('div');
    const tooltipOffset = tooltip.getBoundingClientRect();
    const targetOffset = marker.getBoundingClientRect();
    const boxSizeAdjust = parseInt(getComputedStyle(tooltip).paddingLeft) * 2;
    if (tooltipOffset.x - boxSizeAdjust < 0) {
      tooltip.style.setProperty('transform', `translateX(-${targetOffset.left - boxSizeAdjust}px)`);
    }
    this.$('.BRsearch,.BRchapter').removeClass('front');
    $(event.target).addClass('front');
  }).on("mouseleave", event => $(event.target).removeClass('front')).on('click', () => {
    this._chaptersUpdateCurrent(tocEntry.pageIndex);
    this.jumpToIndex(tocEntry.pageIndex);
  });
  this.$('.BRchapter, .BRsearch').each((i, el) => {
    const $el = $(el);
    $el.on("mouseenter", () => $el.addClass('front')).on("mouseleave", () => $el.removeClass('front'));
  });
};

/**
 * This makes a call to OL API and calls the given callback function with the
 * response from the API.
 *
 * @param {string} olHost
 * @param {string} ocaid
 */
BookReader.prototype.getOpenLibraryRecord = async function (olHost, ocaid) {
  // Try looking up by ocaid first, then by source_record
  const baseURL = `${olHost}/query.json?type=/type/edition&*=`;
  const fetchUrlByBookId = `${baseURL}&ocaid=${ocaid}`;
  let data = await $.ajax({
    url: fetchUrlByBookId,
    dataType: 'jsonp'
  });
  if (!data || !data.length) {
    // try sourceid
    data = await $.ajax({
      url: `${baseURL}&source_records=ia:${ocaid}`,
      dataType: 'jsonp'
    });
  }
  return data?.[0];
};

/**
 * @private
 * Highlights the current chapter based on current page
 * @param {PageIndex} curIndex
 */
BookReader.prototype._chaptersUpdateCurrent = function (curIndex = this.mode == 2 ? Math.max(...this.displayedIndices) : this.firstIndex) {
  const tocEntriesIndexed = this._tocEntries.filter(el => el.pageIndex != undefined).reverse();
  const currChapter = tocEntriesIndexed[
  // subtract one so that 2up shows the right label
  tocEntriesIndexed.findIndex(chapter => chapter.pageIndex <= curIndex)];
  if (this._chaptersPanel) {
    this._chaptersPanel.currentChapter = currChapter;
  }
};
let BRChaptersPanel = _decorate([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('br-chapters-panel')], function (_initialize, _LitElement) {
  class BRChaptersPanel extends _LitElement {
    /** @type {TocEntry[]} */

    /** @type {TocEntry?} */

    /** @type {(pageIndex: PageIndex) => void} */

    /**
     * @param {TocEntry[]} contents
     */
    constructor(contents) {
      super();
      _initialize(this);
      this.contents = contents;
    }

    /**
     * @param {TocEntry} tocEntry
     */
  }
  return {
    F: BRChaptersPanel,
    d: [{
      kind: "field",
      decorators: [(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
        type: Array
      })],
      key: "contents",
      value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
        type: Object
      })],
      key: "currentChapter",
      value() {
        return {};
      }
    }, {
      kind: "field",
      key: "jumpToPage",
      value() {
        return () => {};
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
    <ol>
      ${this.contents.map(tocEntry => this.renderTOCEntry(tocEntry))}
    </ol>
    `;
      }
    }, {
      kind: "method",
      key: "renderTOCEntry",
      value: function renderTOCEntry(tocEntry) {
        const chapterTitle = [tocEntry.label, tocEntry.title].filter(x => x).join(' ');
        const clickable = tocEntry.pageIndex != undefined;
        // note the click-tracking won't work...
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
    <li
      class="
        BRtable-contents-el
        ${clickable ? 'clickable' : ''}
        ${tocEntry == this.currentChapter ? 'current' : ''}
      "
      style="${(0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_3__.styleMap)({
          marginLeft: (tocEntry.level - 1) * 10 + 'px'
        })}"
      data-event-click-tracking="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_2__.ifDefined)(clickable ? "BRTOCPanel|GoToChapter" : undefined)}"
      @click="${() => this.jumpToPage(tocEntry.pageIndex)}"
    >
      ${chapterTitle}
      ${tocEntry.pagenum ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
        <br />
        <span class="BRTOCElementPage">Pagggge ${tocEntry.pagenum}</span>
      ` : lit__WEBPACK_IMPORTED_MODULE_0__.nothing}
    </li>`;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(BRChaptersPanel.prototype), "connectedCallback", this).call(this);
        this.dispatchEvent(new CustomEvent('connected'));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProperties) {
        if (changedProperties.has('currentChapter')) {
          this.shadowRoot.querySelector('li.current')?.scrollIntoView({
            block: 'nearest',
            behavior: 'smooth'
          });
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
      ol {
        padding: 0;
        margin: 0;
        margin-right: 5px;
      }
      li {
        padding: 10px;
        overflow: hidden;
        border-radius: 4px;
      }
      li.clickable {
        font-weight: normal;
        cursor: pointer;
        transition: background-color 0.2s;
      }

      li.clickable:not(.current):hover {
        background-color: rgba(255,255,255, 0.05);
      }

      li.current {
        background-color: rgba(255,255,255,0.9);
        color: #333;
      }

      .BRTOCElementPage {
        font-size: 0.85em;
        opacity: .8;
      }`;
      }
    }]
  };
}, lit__WEBPACK_IMPORTED_MODULE_0__.LitElement);

/***/ }),

/***/ "./node_modules/lit-html/development/directives/if-defined.js":
/*!********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/if-defined.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ifDefined: function() { return /* binding */ ifDefined; }
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */
const ifDefined = value => value !== null && value !== void 0 ? value : _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;

/***/ }),

/***/ "./node_modules/lit/directives/if-defined.js":
/*!***************************************************!*\
  !*** ./node_modules/lit/directives/if-defined.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ifDefined: function() { return /* reexport safe */ lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__.ifDefined; }
/* harmony export */ });
/* harmony import */ var lit_html_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/if-defined.js */ "./node_modules/lit-html/development/directives/if-defined.js");


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/plugin.chapters.js"));
/******/ }
]);
//# sourceMappingURL=plugin.chapters.js.map