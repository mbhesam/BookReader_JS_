"use strict";
(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["ia-bookreader-bundle.js"],{

/***/ "./node_modules/@internetarchive/field-parsers/dist/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanParser: function() { return /* reexport safe */ _src_field_types_boolean__WEBPACK_IMPORTED_MODULE_0__.BooleanParser; },
/* harmony export */   ByteParser: function() { return /* reexport safe */ _src_field_types_byte__WEBPACK_IMPORTED_MODULE_1__.ByteParser; },
/* harmony export */   DateParser: function() { return /* reexport safe */ _src_field_types_date__WEBPACK_IMPORTED_MODULE_2__.DateParser; },
/* harmony export */   DurationParser: function() { return /* reexport safe */ _src_field_types_duration__WEBPACK_IMPORTED_MODULE_3__.DurationParser; },
/* harmony export */   ListParser: function() { return /* reexport safe */ _src_field_types_list__WEBPACK_IMPORTED_MODULE_6__.ListParser; },
/* harmony export */   MediaTypeParser: function() { return /* reexport safe */ _src_field_types_mediatype__WEBPACK_IMPORTED_MODULE_4__.MediaTypeParser; },
/* harmony export */   NumberParser: function() { return /* reexport safe */ _src_field_types_number__WEBPACK_IMPORTED_MODULE_5__.NumberParser; },
/* harmony export */   PageProgressionParser: function() { return /* reexport safe */ _src_field_types_page_progression__WEBPACK_IMPORTED_MODULE_7__.PageProgressionParser; },
/* harmony export */   StringParser: function() { return /* reexport safe */ _src_field_types_string__WEBPACK_IMPORTED_MODULE_8__.StringParser; }
/* harmony export */ });
/* harmony import */ var _src_field_types_boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/field-types/boolean */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/boolean.js");
/* harmony import */ var _src_field_types_byte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/field-types/byte */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/byte.js");
/* harmony import */ var _src_field_types_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/field-types/date */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/date.js");
/* harmony import */ var _src_field_types_duration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/field-types/duration */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/duration.js");
/* harmony import */ var _src_field_types_mediatype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/field-types/mediatype */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/mediatype.js");
/* harmony import */ var _src_field_types_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/field-types/number */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/number.js");
/* harmony import */ var _src_field_types_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/field-types/list */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/list.js");
/* harmony import */ var _src_field_types_page_progression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/field-types/page-progression */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/page-progression.js");
/* harmony import */ var _src_field_types_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/field-types/string */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/string.js");









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/boolean.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/boolean.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanParser: function() { return /* binding */ BooleanParser; }
/* harmony export */ });
class BooleanParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue === 'string' &&
            (rawValue === 'false' || rawValue === '0')) {
            return false;
        }
        return Boolean(rawValue);
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
BooleanParser.shared = new BooleanParser();
//# sourceMappingURL=boolean.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/byte.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/byte.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByteParser: function() { return /* binding */ ByteParser; }
/* harmony export */ });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/number.js");

/**
 * The ByteParser is a unit-specific NumberParser
 * that returns a value in bytes
 *
 * @export
 * @class ByteParser
 * @implements {FieldParserInterface<Byte>}
 */
class ByteParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        const parser = _number__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared;
        return parser.parseValue(rawValue);
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
ByteParser.shared = new ByteParser();
//# sourceMappingURL=byte.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/date.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/date.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateParser: function() { return /* binding */ DateParser; }
/* harmony export */ });
class DateParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        // try different date parsing
        return this.parseJSDate(rawValue) || this.parseBracketDate(rawValue);
    }
    // handles "[yyyy]" format
    parseBracketDate(rawValue) {
        if (typeof rawValue !== 'string')
            return undefined;
        const yearMatch = rawValue.match(/\[([0-9]{4})\]/);
        if (!yearMatch || yearMatch.length < 2) {
            return undefined;
        }
        return this.parseJSDate(yearMatch[1]);
    }
    parseJSDate(rawValue) {
        if (typeof rawValue !== 'string')
            return undefined;
        let parsedValue = rawValue;
        // fix for Safari not supporting `yyyy-mm-dd HH:MM:SS` format, insert a `T` into the space
        if (parsedValue.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}\s{1}[0-9]{2}:[0-9]{2}:[0-9]{2}$/)) {
            parsedValue = parsedValue.replace(' ', 'T');
        }
        const parsed = Date.parse(parsedValue);
        if (Number.isNaN(parsed)) {
            return undefined;
        }
        let date = new Date(parsedValue);
        // the `Date(string)` constructor parses some strings as GMT and some in the local timezone
        // this attempts to detect cases that get parsed as GMT and adjusts accordingly
        const dateWithTimeZone = parsedValue.indexOf('Z') > -1 || // ISO8601 with GMT timezone
            parsedValue.indexOf('+') > -1 || // ISO8601 with positive timezone offset
            parsedValue.match(/^[0-9]{4}$/) || // just the year, ie `2020`
            parsedValue.match(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/) || // YYYY-MM-DD format
            parsedValue.match(/^.*?-[0-9]{2}:[0-9]{2}$/) || // `YYYY-MM-DDTHH:mm:ss-00:00` format
            parsedValue.match(/^.*?-[0-9]{4}$/); // `YYYY-MM-DDTHH:mm:ss-0000` format
        if (dateWithTimeZone) {
            date = new Date(date.getTime() + date.getTimezoneOffset() * 1000 * 60);
        }
        return date;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
DateParser.shared = new DateParser();
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/duration.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/duration.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DurationParser: function() { return /* binding */ DurationParser; }
/* harmony export */ });
/**
 * Parses duration format to a `Duration` (number of seconds with decimal)
 *
 * Can parse hh:mm:ss.ms, hh:mm:ss, mm:ss, mm:ss.ms, and s.ms formats
 */
class DurationParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue === 'number')
            return rawValue;
        if (typeof rawValue === 'boolean')
            return undefined;
        const componentArray = rawValue.split(':');
        let seconds;
        // if there are no colons in the string, we can assume it's in sss.ms format so just parse it
        if (componentArray.length === 1) {
            seconds = this.parseNumberFormat(componentArray[0]);
        }
        else {
            seconds = this.parseColonSeparatedFormat(componentArray);
        }
        return seconds;
    }
    /**
     * Parse sss.ms format
     *
     * @param rawValue
     * @returns
     */
    parseNumberFormat(rawValue) {
        let seconds = parseFloat(rawValue);
        if (Number.isNaN(seconds))
            seconds = undefined;
        return seconds;
    }
    /**
     * Parse hh:mm:ss.ms format
     *
     * @param componentArray
     * @returns
     */
    parseColonSeparatedFormat(componentArray) {
        // if any of the hh:mm:ss components are NaN, just return undefined
        let hasNaNComponent = false;
        const parsedValue = componentArray
            .map((element, index) => {
            const componentValue = parseFloat(element);
            if (Number.isNaN(componentValue)) {
                hasNaNComponent = true;
                return 0;
            }
            const exponent = componentArray.length - 1 - index;
            const multiplier = 60 ** exponent;
            return componentValue * Math.floor(multiplier);
        })
            .reduce((a, b) => a + b, 0);
        return hasNaNComponent ? undefined : parsedValue;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
DurationParser.shared = new DurationParser();
//# sourceMappingURL=duration.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/list.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/list.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ListParser: function() { return /* binding */ ListParser; }
/* harmony export */ });
class ListParser {
    constructor(parser, options) {
        this.separators = [';', ','];
        this.parser = parser;
        if (options && options.separators) {
            this.separators = options.separators;
        }
    }
    /** @inheritdoc */
    parseValue(rawValue) {
        const stringifiedValue = String(rawValue);
        let results = [];
        for (const separator of this.separators) {
            results = stringifiedValue.split(separator);
            if (results.length > 1)
                break;
        }
        return this.parseListValues(results);
    }
    parseListValues(rawValues) {
        const trimmed = rawValues.map(s => s.trim());
        const parsed = trimmed.map(rawValue => this.parser.parseValue(rawValue));
        const result = [];
        parsed.forEach(p => {
            if (p !== undefined)
                result.push(p);
        });
        return result;
    }
}
//# sourceMappingURL=list.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/mediatype.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/mediatype.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaTypeParser: function() { return /* binding */ MediaTypeParser; }
/* harmony export */ });
class MediaTypeParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue !== 'string')
            return undefined;
        return rawValue;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
MediaTypeParser.shared = new MediaTypeParser();
//# sourceMappingURL=mediatype.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/number.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/number.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberParser: function() { return /* binding */ NumberParser; }
/* harmony export */ });
class NumberParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue === 'number')
            return rawValue;
        if (typeof rawValue === 'boolean')
            return undefined;
        const value = parseFloat(rawValue);
        if (Number.isNaN(value)) {
            return undefined;
        }
        return value;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
NumberParser.shared = new NumberParser();
//# sourceMappingURL=number.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/page-progression.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/page-progression.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageProgressionParser: function() { return /* binding */ PageProgressionParser; }
/* harmony export */ });
class PageProgressionParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        if (typeof rawValue !== 'string')
            return undefined;
        return rawValue;
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
PageProgressionParser.shared = new PageProgressionParser();
//# sourceMappingURL=page-progression.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/field-parsers/dist/src/field-types/string.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/field-parsers/dist/src/field-types/string.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringParser: function() { return /* binding */ StringParser; }
/* harmony export */ });
class StringParser {
    /** @inheritdoc */
    parseValue(rawValue) {
        return String(rawValue);
    }
}
// use a shared static instance for performance instead of
// instantiating a new instance for every use
StringParser.shared = new StringParser();
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-activity-indicator/ia-activity-indicator.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-activity-indicator/ia-activity-indicator.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_ia_activity_indicator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ia-activity-indicator.js */ "./node_modules/@internetarchive/ia-activity-indicator/src/ia-activity-indicator.js");


window.customElements.define('ia-activity-indicator', _src_ia_activity_indicator_js__WEBPACK_IMPORTED_MODULE_0__.IAActivityIndicator);


/***/ }),

/***/ "./node_modules/@internetarchive/ia-activity-indicator/src/ia-activity-indicator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-activity-indicator/src/ia-activity-indicator.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IAActivityIndicator: function() { return /* binding */ IAActivityIndicator; },
/* harmony export */   IAActivityIndicatorMode: function() { return /* binding */ IAActivityIndicatorMode; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


const IAActivityIndicatorMode = Object.freeze({
  processing: 'processing',
  complete: 'complete',
});

class IAActivityIndicator extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get properties() {
    return {
      mode: { type: String },
    };
  }

  constructor() {
    super();
    this.mode = IAActivityIndicatorMode.processing;
  }

  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div class="${this.mode}">
        <svg
          viewBox="0 0 120 120"
          preserveAspectRatio="none"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          aria-labelledby="indicatorTitle indicatorDescription"
        >
          <title id="indicatorTitle">Activity Indicator</title>
          <desc id="indicatorDescription">
            A rotating activity indicator with three dots in the middle.
          </desc>
          <g
            id="icons/check-ring---squared"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <path
              id="completed-ring"
              class="loaded-indicator"
              d="M60,10 C70.5816709,10 80.3955961,13.2871104 88.4763646,18.8959201 L78.3502633,29.0214223 C72.9767592,25.8315427 66.7022695,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 L95.995,59.46 L108.327675,47.128668 C109.350926,50.9806166 109.925886,55.015198 109.993301,59.1731586 L110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <polygon
              id="check"
              class="loaded-indicator"
              transform="translate(75.000000, 41.500000) rotate(44.000000) translate(-75.000000, -41.500000) "
              points="96 85 54 85 54 65 76 64.999 76 -2 96 -2"
            ></polygon>
            <path
              id="activity-ring"
              class="activity-indicator"
              d="M60,10 C69.8019971,10 78.9452178,12.8205573 86.6623125,17.6943223 L76.4086287,27.9484118 C71.4880919,25.4243078 65.9103784,24 60,24 C40.117749,24 24,40.117749 24,60 C24,79.882251 40.117749,96 60,96 C79.882251,96 96,79.882251 96,60 C96,53.3014663 94.1704984,47.0302355 90.9839104,41.6587228 L101.110332,31.5326452 C106.715332,39.6116982 110,49.4222615 110,60 C110,87.6142375 87.6142375,110 60,110 C32.3857625,110 10,87.6142375 10,60 C10,32.3857625 32.3857625,10 60,10 Z"
            ></path>
            <g
              id="activity-dots"
              class="activity-indicator"
              transform="translate(40.000000, 55.000000)"
            >
              <circle id="left-dot" cx="5" cy="5" r="5"></circle>
              <circle id="middle-dot" cx="20" cy="5" r="5"></circle>
              <circle id="right-dot" cx="35" cy="5" r="5"></circle>
            </g>
          </g>
        </svg>
      </div>
    `;
  }

  static get styles() {
    const checkmarkColorCss = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`var(--activityIndicatorCheckmarkColor, #31A481)`;
    const completedRingColorCss = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`var(--activityIndicatorCompletedRingColor, #31A481)`;
    const loadingRingColorCss = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`var(--activityIndicatorLoadingRingColor, #333333)`;
    const loadingDotColorCss = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`var(--activityIndicatorLoadingDotColor, #333333)`;

    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
      #completed-ring {
        fill: ${completedRingColorCss};
      }

      #check {
        fill: ${checkmarkColorCss};
      }

      #activity-ring {
        fill: ${loadingRingColorCss};
      }

      #activity-dots {
        fill: ${loadingDotColorCss};
      }

      .activity-indicator {
        opacity: 0;
        transition: opacity 0.25s ease-out;
      }

      .processing .activity-indicator {
        opacity: 1;
      }

      .loaded-indicator {
        opacity: 1;
        transition: opacity 0.25s ease-out;
      }

      .processing .loaded-indicator {
        opacity: 0;
      }

      .image {
        border: 1px solid red;
        display: inline-block;
      }

      .processing #activity-ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
      }

      .processing #left-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.2s;
      }

      .processing #middle-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.4s;
      }

      .processing #right-dot {
        opacity: 0;
        animation: dot 1.3s infinite;
        animation-delay: 0.6s;
      }

      @keyframes rotate {
        0% {
          transform: rotate(-360deg);
        }
        100% {
          /* This frame is supposed to be inferred, but Safari doesn't rotate it unless we're explicit */
          transform: rotate(0deg);
        }
      }

      @keyframes dot {
        0% {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
    `;
  }
}




/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IaMenuSlider: function() { return /* reexport safe */ _src_menu_slider_ia_menu_slider__WEBPACK_IMPORTED_MODULE_2__.IaMenuSlider; },
/* harmony export */   IauxSharingOptions: function() { return /* reexport safe */ _src_menus_share_panel__WEBPACK_IMPORTED_MODULE_3__.IauxSharingOptions; },
/* harmony export */   IauxSortFilesButton: function() { return /* reexport safe */ _src_menus_viewable_files__WEBPACK_IMPORTED_MODULE_4__.IauxSortFilesButton; },
/* harmony export */   IauxViewableFiles: function() { return /* reexport safe */ _src_menus_viewable_files__WEBPACK_IMPORTED_MODULE_4__.IauxViewableFiles; },
/* harmony export */   ItemNavigator: function() { return /* reexport safe */ _src_iaux_item_navigator__WEBPACK_IMPORTED_MODULE_0__.ItemNavigator; },
/* harmony export */   MenuButton: function() { return /* reexport safe */ _src_menu_slider_menu_button__WEBPACK_IMPORTED_MODULE_1__.MenuButton; },
/* harmony export */   iauxShareIcon: function() { return /* reexport safe */ _src_menus_share_panel__WEBPACK_IMPORTED_MODULE_3__.iauxShareIcon; },
/* harmony export */   viewableFilesIcon: function() { return /* reexport safe */ _src_menus_viewable_files__WEBPACK_IMPORTED_MODULE_4__.viewableFilesIcon; }
/* harmony export */ });
/* harmony import */ var _src_iaux_item_navigator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/iaux-item-navigator */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/iaux-item-navigator.js");
/* harmony import */ var _src_menu_slider_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/menu-slider/menu-button */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/menu-button.js");
/* harmony import */ var _src_menu_slider_ia_menu_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/menu-slider/ia-menu-slider */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/ia-menu-slider.js");
/* harmony import */ var _src_menus_share_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/menus/share-panel */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-panel.js");
/* harmony import */ var _src_menus_viewable_files__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/menus/viewable-files */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/viewable-files.js");



// side menus




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/iaux-item-navigator.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/iaux-item-navigator.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemNavigator: function() { return /* binding */ ItemNavigator; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _internetarchive_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internetarchive/search-service */ "./node_modules/@internetarchive/search-service/dist/index.js");
/* harmony import */ var _internetarchive_icon_ellipses_icon_ellipses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/icon-ellipses/icon-ellipses */ "./node_modules/@internetarchive/icon-ellipses/icon-ellipses.js");
/* harmony import */ var _menu_slider_ia_menu_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-slider/ia-menu-slider */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/ia-menu-slider.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/loader.js");
/* harmony import */ var _no_theater_available__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./no-theater-available */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/no-theater-available.js");








let ItemNavigator = class ItemNavigator extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.viewAvailable = true;
        this.baseHost = 'archive.org';
        this.signedIn = false;
        this.menuContents = [];
        this.menuShortcuts = [];
        this.viewportInFullscreen = null;
        this.menuOpened = false;
        this.loaded = false;
        this.openMenuState = 'shift';
    }
    disconnectedCallback() {
        this.removeResizeObserver();
    }
    updated(changed) {
        if (changed.has('sharedObserver')) {
            const oldObserver = changed.get('sharedObserver');
            oldObserver === null || oldObserver === void 0 ? void 0 : oldObserver.removeObserver(this.resizeObserverConfig);
            this.setResizeObserver();
        }
    }
    /** Shared observer */
    handleResize(entry) {
        const { width } = entry.contentRect;
        if (width <= 600) {
            this.openMenuState = 'overlay';
            return;
        }
        this.openMenuState = 'shift';
    }
    setResizeObserver() {
        var _a, _b;
        (_a = this.sharedObserver) === null || _a === void 0 ? void 0 : _a.addObserver(this.resizeObserverConfig);
        (_b = this.sharedObserver) === null || _b === void 0 ? void 0 : _b.addObserver({
            target: this.headerSlot,
            handler: {
                handleResize: ({ contentRect }) => {
                    if (contentRect.height) {
                        this.requestUpdate();
                    }
                },
            },
        });
    }
    removeResizeObserver() {
        var _a;
        (_a = this.sharedObserver) === null || _a === void 0 ? void 0 : _a.removeObserver(this.resizeObserverConfig);
    }
    get resizeObserverConfig() {
        return {
            handler: this,
            target: this.frame,
        };
    }
    /** End shared observer */
    get loaderTitle() {
        return this.viewportInFullscreen ? 'Internet Archive' : '';
    }
    get loadingArea() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div class="loading-area">
        <div class="loading-view">
          <ia-itemnav-loader
            .loaderMessage=${this.loaderTitle}
          ></ia-itemnav-loader>
        </div>
      </div>
    `;
    }
    slotChange(e, type) {
        var _a;
        const slottedContent = (_a = e.target.assignedNodes()) === null || _a === void 0 ? void 0 : _a[0];
        this.dispatchEvent(new CustomEvent('slotChange', {
            detail: { slot: slottedContent, type },
        }));
        this.requestUpdate();
    }
    render() {
        var _a, _b;
        const displayReaderClass = this.loaded ? '' : 'hidden';
        const headerHeight = ((_b = (_a = this.headerSlot) === null || _a === void 0 ? void 0 : _a.assignedNodes()[0]) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div id="frame" class=${this.menuClass}>
        <slot
          name="header"
          style=${`height: ${headerHeight}px`}
          @slotchange=${(e) => this.slotChange(e, 'header')}
        ></slot>
        <div class="menu-and-reader">
          ${this.shouldRenderMenu ? this.renderSideMenu : lit__WEBPACK_IMPORTED_MODULE_0__.nothing}
          <div id="reader" class=${displayReaderClass}>
            ${this.renderViewport}
          </div>
          ${!this.loaded ? this.loadingArea : lit__WEBPACK_IMPORTED_MODULE_0__.nothing}
        </div>
      </div>
    `;
    }
    get noTheaterView() {
        var _a, _b;
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<ia-no-theater-available
      .identifier=${(_b = (_a = this.item) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.identifier}
      @loadingStateUpdated=${this.loadingStateUpdated}
    ></ia-no-theater-available>`;
    }
    get renderViewport() {
        if (!this.viewAvailable) {
            return this.noTheaterView;
        }
        const slotVisibility = !this.loaded ? 'opacity: 0;' : 'opacity: 1;';
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div slot="main" style=${slotVisibility}>
        <slot
          name="main"
          @slotchange=${(e) => this.slotChange(e, 'main')}
        ></slot>
      </div>
    `;
    }
    loadingStateUpdated(e) {
        const { loaded } = e.detail;
        this.loaded = loaded !== null && loaded !== void 0 ? loaded : false;
    }
    /** Fullscreen Management */
    manageViewportFullscreen(e) {
        const fullscreenStatus = !!e.detail.isFullScreen;
        this.viewportInFullscreen = !fullscreenStatus ? null : fullscreenStatus;
        const event = new CustomEvent('fullscreenToggled', {
            detail: e.detail,
        });
        this.dispatchEvent(event);
    }
    /** End Fullscreen Management */
    /** Side menu */
    get shouldRenderMenu() {
        var _a;
        return !!((_a = this.menuContents) === null || _a === void 0 ? void 0 : _a.length);
    }
    toggleMenu() {
        this.menuOpened = !this.menuOpened;
    }
    closeMenu() {
        this.menuOpened = false;
    }
    setOpenMenu(e) {
        const { id } = e.detail;
        this.openMenu = id !== this.openMenu ? id : undefined;
    }
    setMenuContents(e) {
        const updatedContents = [...e.detail];
        this.menuContents = updatedContents;
    }
    setMenuShortcuts(e) {
        this.menuShortcuts = [...e.detail];
    }
    /** Toggles Side Menu & Sets viewable subpanel  */
    manageSideMenuEvents(e) {
        const { menuId, action } = e.detail;
        if (!menuId) {
            return;
        }
        if (action === 'open') {
            this.openShortcut(menuId);
        }
        else if (action === 'toggle') {
            this.openMenu = menuId;
            this.toggleMenu();
        }
    }
    get menuToggleButton() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <button
        class="toggle-menu"
        @click=${this.toggleMenu}
        title="Toggle theater side panels"
      >
        <div>
          <ia-icon-ellipses
            style="width: var(--iconWidth); height: var(--iconHeight);"
          ></ia-icon-ellipses>
        </div>
      </button>
    `;
    }
    get selectedMenuId() {
        return this.openMenu || '';
    }
    get renderSideMenu() {
        const drawerState = this.menuOpened ? '' : 'hidden';
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <nav>
        <div class="minimized">${this.shortcuts} ${this.menuToggleButton}</div>
        <div id="menu" class=${drawerState}>
          <ia-menu-slider
            .menus=${this.menuContents}
            .selectedMenu=${this.selectedMenuId}
            @menuTypeSelected=${this.setOpenMenu}
            @menuSliderClosed=${this.closeMenu}
            manuallyHandleClose
            open
          ></ia-menu-slider>
        </div>
      </nav>
    `;
    }
    /** End Side menu */
    /** Menu Shortcuts */
    openShortcut(selectedMenuId = '') {
        this.openMenu = selectedMenuId;
        this.menuOpened = true;
    }
    get shortcuts() {
        const shortcuts = this.menuShortcuts.map(({ icon, id }) => {
            if (id === 'fullscreen') {
                return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `${icon}`;
            }
            return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <button class="shortcut ${id}" @click="${() => this.openShortcut(id)}">
          ${icon}
        </button>
      `;
        });
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<div class="shortcuts">${shortcuts}</div>`;
    }
    /** End Menu Shortcuts */
    /** Misc Render */
    get menuClass() {
        var _a, _b;
        const hasMenuOrShortcuts = ((_a = this.menuContents) === null || _a === void 0 ? void 0 : _a.length) || ((_b = this.menuShortcuts) === null || _b === void 0 ? void 0 : _b.length);
        const drawerState = this.menuOpened && hasMenuOrShortcuts ? 'open' : '';
        const fullscreenState = this.viewportInFullscreen ? 'fullscreen' : '';
        return `${drawerState} ${fullscreenState} ${this.openMenuState}`;
    }
    static get styles() {
        const subnavWidth = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--menuWidth, 320px)`;
        const transitionTiming = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--animationTiming, 200ms)`;
        const transitionEffect = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `transform ${transitionTiming} ease-out`;
        const menuMargin = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--theaterMenuMargin, 42px)`;
        const theaterBg = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--theaterBgColor, #000)`;
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
      :host,
      #frame,
      .menu-and-reader {
        position: relative;
        overflow: hidden;
        display: block;
      }

      :host,
      #frame,
      .loading-area,
      .loading-view {
        min-height: inherit;
        height: inherit;
      }

      slot {
        display: block;
        width: 100%;
      }

      slot * {
        display: block;
        height: inherit;
      }

      #frame {
        background-color: ${theaterBg};
        color-scheme: dark;
        display: flex;
        flex-direction: column;
      }

      #frame.fullscreen {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
      }

      .loading-view {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loading-area {
        width: 100%;
      }

      ia-itemnav-loader {
        display: block;
        width: 100%;
      }

      .hidden {
        display: none !important;
      }

      button {
        cursor: pointer;
        padding: 0;
        border: 0;
      }

      button:focus,
      button:active {
        outline: none;
      }

      .menu-and-reader {
        position: relative;
        display: flex;
        flex: 1;
      }

      nav button {
        background: none;
      }

      nav .minimized {
        background: rgba(0, 0, 0, 0.7);
        padding-top: 6px;
        position: absolute;
        width: ${menuMargin};
        z-index: 2;
        left: 0;
        border-bottom-right-radius: 5%;
      }

      nav .minimized button {
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin-bottom: 0.2rem;
        margin: auto;
        display: inline-flex;
        vertical-align: middle;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        width: ${menuMargin};
        height: ${menuMargin};
      }

      nav .minimized button.toggle-menu > * {
        border: 2px solid var(--iconStrokeColor);
        border-radius: var(--iconWidth);
        width: var(--iconWidth);
        height: var(--iconHeight);
        margin: auto;
      }

      ia-icon-ellipses {
        width: var(--iconWidth);
        height: var(--iconHeight);
      }

      #menu {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 3;
        overflow: hidden;
        transform: translateX(-${subnavWidth});
        width: ${subnavWidth};
        transform: translateX(calc(${subnavWidth} * -1));
        transition: ${transitionEffect};
      }

      #reader {
        position: relative;
        z-index: 1;
        transform: translateX(0);
        width: 100%;
        display: flex;
      }

      #reader > * {
        width: 100%;
        display: flex;
        flex: 1;
      }

      .open.overlay #reader {
        transition: none;
      }

      .open #menu {
        width: ${subnavWidth};
        transform: translateX(0);
        transition: ${transitionEffect};
      }

      .open.shift #reader {
        width: calc(100% - ${subnavWidth});
        margin-left: ${subnavWidth};
        transition: ${transitionEffect};
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({
        type: Object,
        converter: (value) => {
            if (value && typeof value === 'string') {
                return new _internetarchive_search_service__WEBPACK_IMPORTED_MODULE_2__.MetadataResponse(JSON.parse(atob(value)));
            }
            return value;
        },
    })
], ItemNavigator.prototype, "item", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], ItemNavigator.prototype, "viewAvailable", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], ItemNavigator.prototype, "baseHost", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], ItemNavigator.prototype, "signedIn", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], ItemNavigator.prototype, "menuContents", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], ItemNavigator.prototype, "menuShortcuts", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true, attribute: true })
], ItemNavigator.prototype, "viewportInFullscreen", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], ItemNavigator.prototype, "menuOpened", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true })
], ItemNavigator.prototype, "openMenu", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ attribute: false })
], ItemNavigator.prototype, "modal", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ attribute: false })
], ItemNavigator.prototype, "sharedObserver", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true, attribute: true })
], ItemNavigator.prototype, "loaded", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.state)()
], ItemNavigator.prototype, "openMenuState", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('#frame')
], ItemNavigator.prototype, "frame", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('slot[name="header"]')
], ItemNavigator.prototype, "headerSlot", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('slot[name="main"]')
], ItemNavigator.prototype, "mainSlot", void 0);
ItemNavigator = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('iaux-item-navigator')
], ItemNavigator);

//# sourceMappingURL=iaux-item-navigator.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/loader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/loader.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IAItemNavLoader: function() { return /* binding */ IAItemNavLoader; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");

/* eslint-disable class-methods-use-this */


let IAItemNavLoader = class IAItemNavLoader extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.loaderMessage = '';
    }
    get bookIconSvg() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.svg) `
      <g class="bookIcon" transform="matrix(1 0 0 -1 28 67.362264)">
        <path d="m44.71698 31.6981124v-29.99320678s-18.0956599.30735848-18.6322637-.7171698c-.0633962-.12226414-1.890566-.59207545-2.9745282-.59207545-1.3228302 0-3.5122641 0-4.1286791.74547168-.9707547 1.17452827-18.82811278.71660375-18.82811278.71660375v30.040754l1.83849052.7867924.29094339-28.48188608s15.94981097.15339622 17.09094297-1.10716978c.8145283-.90056602 4.997547-.91641507 5.3450942-.3526415.9611321 1.55716977 14.7101883 1.31716978 17.6077354 1.45981128l.3266038 28.22830118z"/>
        <path d="m40.1129424 33.5957539h-12.8337733c-1.8690565 0-3.1098112-.7545283-3.9299999-1.6279245v-26.70452764l1.2362264-.00792453c.4584906.72962262 3.0922641 1.39415091 3.0922641 1.39415091h10.1298111s1.0381131.01754717 1.5141509.47377357c.5643396.54056602.7913207 1.36981129.7913207 1.36981129z"/>
        <path d="m17.3354713 33.5957539h-12.8337733v-25.37660316s0-.75283017.49358489-1.14113205c.52867924-.41433961 1.3415094-.42849055 1.3415094-.42849055h10.59905631s2.2075471-.52698112 3.0928301-1.39415091l1.2.00792453v26.74245214c-.8201886.8581132-2.0530188 1.59-3.8932074 1.59"/>
      </g>
    `;
    }
    get icon() {
        return this.bookIconSvg;
    }
    get loader() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.svg) `
    <svg
      height="100"
      viewBox="0 0 100 100"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="item-loading"
    >
      <title id="item-loading">Currently loading viewer.</title>
      <desc>Please wait while we load theater.</desc>
      <g fill="#333" fill-rule="evenodd" class="book-icon">
        ${this.icon}
        <path
          class="ring"
          d="m17.8618849 11.6970233c18.5864635-15.59603144 45.6875867-15.59603102 64.2740497.000001 1.9271446 1.6170806 2.1785128 4.4902567.5614466 6.4174186-1.6170661 1.9271618-4.4902166 2.1785323-6.4173612.5614517-15.1996922-12.75416882-37.3625282-12.75416916-52.5622206-.000001-15.19969387 12.7541707-19.04823077 34.5805019-9.1273354 51.7641499 9.9208955 17.183646 30.7471499 24.7638499 49.3923323 17.9774983 18.6451823-6.7863521 29.7266014-25.9801026 26.2811129-45.5206248-.436848-2.4775114 1.2174186-4.8400696 3.6949079-5.2769215 2.4774893-.4368518 4.8400264 1.2174296 5.2768744 3.694941 4.2132065 23.8945096-9.3373563 47.3649806-32.137028 55.6634567-22.799672 8.2984758-48.2663986-.9707372-60.39785211-21.9832155-12.1314534-21.012481-7.42539173-47.7021198 11.16107351-63.2981544z"
          fill-rule="nonzero"
        />
      </g>
    </svg>
    `;
    }
    render() {
        const title = this.loaderMessage
            ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<h2>${this.loaderMessage}</h2>`
            : lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div class="place-holder">
        ${title} ${this.loader}
        <h3>Loading viewer</h3>
      </div>
    `;
    }
    static get styles() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
      .place-holder {
        width: 30%;
        margin: auto;
        text-align: center;
        color: var(--primaryTextColor);
      }

      .place-holder {
        position: relative;
      }

      .place-holder svg {
        display: block;
        width: 60%;
        max-width: 100px;
        height: auto;
        margin: auto;
      }

      svg * {
        fill: var(--primaryTextColor);
      }

      svg .ring {
        animation: rotate 1.3s infinite linear;
        transform-origin: 50px 50px;
        transform-box: fill-box;
        display: block; // transform won't work on inline style
      }

      @keyframes rotate {
        0% {
          -moz-transform: rotate(-360deg);
          -webkit-transform: rotate(-360deg);
          transform: rotate(-360deg);
        }
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], IAItemNavLoader.prototype, "loaderMessage", void 0);
IAItemNavLoader = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('ia-itemnav-loader')
], IAItemNavLoader);

//# sourceMappingURL=loader.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/ia-menu-slider.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/ia-menu-slider.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IaMenuSlider: function() { return /* binding */ IaMenuSlider; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _styles_menu_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/menu-slider */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/styles/menu-slider.js");
/* harmony import */ var _internetarchive_icon_collapse_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/icon-collapse-sidebar */ "./node_modules/@internetarchive/icon-collapse-sidebar/icon-collapse-sidebar.js");
/* harmony import */ var _menu_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-button */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/menu-button.js");






const sliderEvents = {
    closeDrawer: 'menuSliderClosed',
};
let IaMenuSlider = class IaMenuSlider extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.menus = [];
        this.open = false;
        this.manuallyHandleClose = false;
        this.selectedMenu = '';
        this.selectedMenuAction = lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
        this.animateMenuOpen = false;
    }
    static get styles() {
        return _styles_menu_slider__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    updated() {
        const { actionButton } = this.selectedMenuDetails || {};
        const actionButtonHasChanged = actionButton !== this.selectedMenuAction;
        if (actionButtonHasChanged) {
            this.selectedMenuAction = actionButton || lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
        }
    }
    /**
     * Event handler, captures state of selected menu
     */
    setSelectedMenu({ detail }) {
        const { id } = detail;
        this.selectedMenu = this.selectedMenu === id ? '' : id;
        const { actionButton } = this.selectedMenuDetails || {};
        this.selectedMenuAction = actionButton || lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    /**
     * closes menu drawer
     */
    closeMenu() {
        if (!this.manuallyHandleClose) {
            this.open = false;
        }
        const { closeDrawer } = sliderEvents;
        const drawerClosed = new CustomEvent(closeDrawer, {
            detail: this.selectedMenuDetails,
        });
        this.dispatchEvent(drawerClosed);
    }
    get selectedMenuDetails() {
        const selectedMenu = this.menus.find(menu => menu.id === this.selectedMenu);
        return selectedMenu;
    }
    get selectedMenuComponent() {
        const menuItem = this.selectedMenuDetails;
        return menuItem && (menuItem === null || menuItem === void 0 ? void 0 : menuItem.component)
            ? menuItem.component
            : (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) ``;
    }
    /* render */
    get sliderDetailsClass() {
        const animate = this.animateMenuOpen ? 'animate' : '';
        const state = this.open ? 'open' : '';
        return `${animate} ${state}`;
    }
    get selectedMenuClass() {
        return this.selectedMenu ? 'open' : '';
    }
    get menuItems() {
        return this.menus.map((menu) => (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <li>
          <menu-button
            @menuTypeSelected=${this.setSelectedMenu}
            .icon=${menu.icon}
            .label=${menu.label}
            .menuDetails=${menu.menuDetails}
            .buttonId=${menu.id}
            .selected=${menu.id === this.selectedMenu}
            .followable=${menu.followable}
            .href=${menu.href}
          ></menu-button>
        </li>
      `);
    }
    get renderMenuHeader() {
        const { label = '', menuDetails = '' } = this.selectedMenuDetails || {};
        const headerClass = this.selectedMenuAction ? 'with-secondary-action' : '';
        const actionBlock = this.selectedMenuAction
            ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<span class="custom-action">${this.selectedMenuAction}</span>`
            : lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <header class="${headerClass}">
        <div class="details">
          <h3>${label}</h3>
          <span class="extra-details">${menuDetails}</span>
        </div>
        ${actionBlock} ${this.closeButton}
      </header>
    `;
    }
    get closeButton() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <button
        class="close"
        aria-label="Close this menu"
        @click=${this.closeMenu}
      >
        <ia-icon-collapse-sidebar></ia-icon-collapse-sidebar>
      </button>
    `;
    }
    /** @inheritdoc */
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div class="main">
        <div class="menu ${this.sliderDetailsClass}">
          ${this.closeButton}
          <ul class="menu-list">
            ${this.menuItems}
          </ul>
          <div
            class="content ${this.selectedMenuClass}"
            @menuTypeSelected=${this.setSelectedMenu}
          >
            ${this.renderMenuHeader}
            <section>
              <div class="selected-menu">${this.selectedMenuComponent}</div>
            </section>
          </div>
        </div>
      </div>
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], IaMenuSlider.prototype, "menus", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], IaMenuSlider.prototype, "open", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], IaMenuSlider.prototype, "manuallyHandleClose", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], IaMenuSlider.prototype, "selectedMenu", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Object })
], IaMenuSlider.prototype, "selectedMenuAction", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], IaMenuSlider.prototype, "animateMenuOpen", void 0);
IaMenuSlider = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('ia-menu-slider')
], IaMenuSlider);

//# sourceMappingURL=ia-menu-slider.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/menu-button.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/menu-button.js ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuButton: function() { return /* binding */ MenuButton; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _styles_menu_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/menu-button */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/styles/menu-button.js");




let MenuButton = class MenuButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.icon = '';
        this.href = '';
        this.label = '';
        this.menuDetails = '';
        this.buttonId = '';
        this.selected = false;
        this.followable = false;
    }
    static get styles() {
        return _styles_menu_button__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
    onClick(e) {
        e.preventDefault();
        this.dispatchMenuTypeSelectedEvent();
    }
    dispatchMenuTypeSelectedEvent() {
        this.dispatchEvent(new CustomEvent('menuTypeSelected', {
            bubbles: true,
            composed: true,
            detail: {
                id: this.buttonId,
            },
        }));
    }
    get buttonClass() {
        return this.selected ? 'selected' : '';
    }
    get iconClass() {
        return this.selected ? 'active' : '';
    }
    get menuItem() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <span class="icon ${this.iconClass}"> ${this.icon} </span>
      <span class="label">${this.label}</span>
      <span class="menu-details">${this.menuDetails}</span>
    `;
    }
    get linkButton() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <a
        href="${this.href}"
        class="menu-item ${this.buttonClass}"
        @click=${this.followable ? undefined : this.onClick}
        >${this.menuItem}</a
      >
    `;
    }
    get clickButton() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <button class="menu-item ${this.buttonClass}" @click=${this.onClick}>
        ${this.menuItem}
      </button>
    `;
    }
    render() {
        return this.href ? this.linkButton : this.clickButton;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], MenuButton.prototype, "icon", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], MenuButton.prototype, "href", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], MenuButton.prototype, "label", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], MenuButton.prototype, "menuDetails", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], MenuButton.prototype, "buttonId", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], MenuButton.prototype, "selected", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean })
], MenuButton.prototype, "followable", void 0);
MenuButton = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('menu-button')
], MenuButton);

//# sourceMappingURL=menu-button.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/styles/menu-button.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/styles/menu-button.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
  a {
    display: inline-block;
    text-decoration: none;
  }

  .menu-item {
    display: inline-flex;
    width: 100%;
    padding: 0;
    font-size: 1.6rem;
    text-align: left;
    background: transparent;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    cursor: pointer;
  }

  button.menu-item {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  .menu-item:focus {
    outline: none;
  }

  .label {
    display: var(--menuButtonLabelDisplay, none);
    padding: 0;
    font-weight: 400;
    color: var(--primaryTextColor);
    text-align: left;
    vertical-align: middle;
    margin-left: 1rem;
  }

  .menu-details {
    color: var(--primaryTextColor);
    display: inline-block;
    margin-left: 0.5rem;
    font-style: italic;
    font-size: 1.5rem;
  }

  .menu-item > .icon {
    position: relative;
    display: inline-flex;
    z-index: 2;
    min-width: 4.2rem;
    max-width: 4.2rem;
    height: 4.2rem;
    vertical-align: middle;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .menu-item.selected .icon {
    background-color: var(--activeButtonBg);
    border-radius: 1rem 0 0 1rem;
  }

  .icon .fill-color {
    fill: #999;
  }

  .icon.active .fill-color {
    fill: #fff;
  }
`);
//# sourceMappingURL=menu-button.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/styles/menu-slider.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menu-slider/styles/menu-slider.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

const menuButtonWidth = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `42px`;
const sliderWidth = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--menuWidth, 320px)`;
const transitionTiming = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--animationTiming, 200ms)`;
/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
  .main {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .animate {
    transition: transform ${transitionTiming} ease-out;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${sliderWidth};
    padding: 0.5rem 0.5rem 0 0;
    box-sizing: border-box;
    font-size: 1.4rem;
    color: var(--primaryTextColor);
    background: var(--menuSliderBg);
    transform: translateX(calc(${sliderWidth} * -1));
  }

  .menu > button.close {
    right: 0.7rem;
  }

  button {
    outline: none;
    cursor: pointer;
  }

  header {
    margin: 0 0 0.5rem 0;
  }

  header * {
    margin: 0;
    display: inline-block;
  }
  header button {
    outline: none;
    cursor: pointer;
  }

  header.with-secondary-action .details {
    width: 80%;
  }

  header .details {
    font-weight: bold;
    width: 88%;
  }

  header .custom-action > *,
  button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
    --iconWidth: var(--menuSliderHeaderIconWidth);
    --iconHeight: var(--menuSliderHeaderIconHeight);
  }

  header .custom-action,
  button.close {
    position: absolute;
  }
  button.close {
    right: 0.5rem;
  }

  button.close * {
    float: right;
  }

  .content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: ${menuButtonWidth};
    z-index: 1;
    transform: translateX(calc(${sliderWidth} * -1));
    transition: transform ${transitionTiming} ease-out;
    background: var(--activeButtonBg);
    border-right: 0.2rem solid;
    border-color: var(--subpanelRightBorderColor);
    padding: 0.5rem 0 0 0.5rem;
    display: flex;
    flex-direction: column;
  }

  .open {
    transform: translateX(0);
  }

  .menu-list {
    padding: 0;
    margin: 0;
    list-style: none;
    background: var(--menuSliderBg);
  }
  .menu-list li {
    margin-bottom: 0.2rem;
  }

  .content > section {
    overflow: auto;
    overscroll-behavior: contain;
  }
`);
//# sourceMappingURL=menu-slider.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-panel.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-panel.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IauxSharingOptions: function() { return /* binding */ IauxSharingOptions; },
/* harmony export */   iauxShareIcon: function() { return /* binding */ iauxShareIcon; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/directives/class-map.js */ "./node_modules/lit/directives/class-map.js");
/* harmony import */ var lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/if-defined.js */ "./node_modules/lit/directives/if-defined.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _internetarchive_icon_link_icon_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internetarchive/icon-link/icon-link */ "./node_modules/@internetarchive/icon-link/icon-link.js");
/* harmony import */ var _internetarchive_icon_share_icon_share__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internetarchive/icon-share/icon-share */ "./node_modules/@internetarchive/icon-share/icon-share.js");
/* harmony import */ var _share_providers_email__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share-providers/email */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/email.js");
/* harmony import */ var _share_providers_facebook__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./share-providers/facebook */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/facebook.js");
/* harmony import */ var _share_providers_pinterest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./share-providers/pinterest */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/pinterest.js");
/* harmony import */ var _share_providers_tumblr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./share-providers/tumblr */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/tumblr.js");
/* harmony import */ var _share_providers_twitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./share-providers/twitter */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/twitter.js");

/* eslint-disable lit-a11y/click-events-have-key-events */
/* eslint-disable lit-a11y/list */











const copyToClipboard = (options) => {
    const currentTarget = options.currentTarget;
    const textarea = currentTarget.querySelector('textarea');
    const note = currentTarget.querySelector('small');
    textarea.select();
    document.execCommand('copy');
    textarea.blur();
    note.classList.add('visible');
    clearTimeout(note.timeout);
    note.timeout = setTimeout(() => note.classList.remove('visible'), 4000);
};
const iauxShareIcon = (0,lit__WEBPACK_IMPORTED_MODULE_2__.html) `<ia-icon-share
  style="width: var(--iconWidth); height: var(--iconHeight);"
></ia-icon-share>`;
let IauxSharingOptions = class IauxSharingOptions extends lit__WEBPACK_IMPORTED_MODULE_2__.LitElement {
    constructor() {
        super(...arguments);
        this.baseHost = 'archive.org';
        this.creator = '';
        this.description = '';
        this.embedOptionsVisible = false;
        this.identifier = '';
        this.sharingOptions = [];
        this.type = '';
        this.renderHeader = false;
        this.fileSubPrefix = '';
    }
    updated(changed) {
        if (changed.has('sharingOptions') && !this.sharingOptions.length) {
            this.loadProviders();
        }
    }
    loadProviders() {
        const { baseHost, creator, description, identifier, type, fileSubPrefix } = this;
        const params = {
            baseHost,
            creator,
            description,
            identifier,
            type,
            fileSubPrefix,
        };
        this.sharingOptions = [
            new _share_providers_twitter__WEBPACK_IMPORTED_MODULE_10__["default"](params),
            new _share_providers_facebook__WEBPACK_IMPORTED_MODULE_7__["default"](params),
            new _share_providers_tumblr__WEBPACK_IMPORTED_MODULE_9__["default"](params),
            new _share_providers_pinterest__WEBPACK_IMPORTED_MODULE_8__["default"](params),
            new _share_providers_email__WEBPACK_IMPORTED_MODULE_6__["default"](params),
        ];
    }
    get sharingItems() {
        return this.sharingOptions.map(option => (0,lit__WEBPACK_IMPORTED_MODULE_2__.html) `<li>
          <a
            class="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_1__.ifDefined)(option.class)}"
            href="${option.url}"
            target="_blank"
          >
            ${option.icon} ${option.name}
          </a>
        </li>`);
    }
    get embedOption() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_2__.html) `<li>
      <a href="#" @click=${this.toggleEmbedOptions}>
        <ia-icon-link></ia-icon-link>
        Get an embeddable link
      </a>
    </li>`;
    }
    get iframeEmbed() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_2__.html) `&lt;iframe
    src="https://${this.baseHost}/embed/${this.identifier}" width="560"
    height="384" frameborder="0" webkitallowfullscreen="true"
    mozallowfullscreen="true" allowfullscreen&gt;&lt;/iframe&gt;`;
    }
    get bbcodeEmbed() {
        return `[archiveorg ${this.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`;
    }
    get helpURL() {
        return `https://${this.baseHost}/help/audio.php?identifier=${this.identifier}`;
    }
    toggleEmbedOptions(e) {
        e.preventDefault();
        this.embedOptionsVisible = !this.embedOptionsVisible;
    }
    get header() {
        const header = (0,lit__WEBPACK_IMPORTED_MODULE_2__.html) `<header><h3>Share this ${this.type}</h3></header>`;
        return this.renderHeader ? header : lit__WEBPACK_IMPORTED_MODULE_2__.nothing;
    }
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_2__.html) `
      ${this.header}
      <ul>
        ${this.sharingItems} ${this.embedOption}
        <div
          class=${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__.classMap)({ visible: this.embedOptionsVisible, embed: true })}
        >
          <h4>Embed</h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly>${this.iframeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <h4>
            Embed for wordpress.com hosted blogs and archive.org item
            &lt;description&gt; tags
          </h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly>${this.bbcodeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <p>
            Want more?
            <a href=${this.helpURL}
              >Advanced embedding details, examples, and help</a
            >!
          </p>
        </div>
      </ul>
    `;
    }
    get providerIcon() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_2__.html) `<ia-icon-share
      style="width: var(--iconWidth); height: var(--iconHeight);"
    ></ia-icon-share>`;
    }
    static get styles() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_2__.css) `
      :host {
        display: block;
        height: 100%;
        overflow-y: auto;
        font-size: 1.4rem;
        box-sizing: border-box;
      }

      header {
        display: flex;
        align-items: baseline;
      }

      h3 {
        padding: 0;
        margin: 0 1rem 0 0;
        font-size: 1.6rem;
      }

      h4 {
        font-size: 1.4rem;
      }

      ul {
        padding: 0 0 2rem 0;
        list-style: none;
      }

      li {
        padding: 0 0 1rem 0;
      }

      li a {
        font-size: 1.6rem;
        text-decoration: none;
        color: var(--shareLinkColor);
      }

      li a * {
        display: inline-block;
        padding: 0.2rem;
        margin-right: 1rem;
        vertical-align: middle;
        border: 1px solid var(--shareIconBorder);
        border-radius: 7px;
        background: var(--shareIconBg);
      }

      .embed {
        display: none;
      }
      .embed.visible {
        display: block;
        width: 95%;
      }

      .embed a {
        color: var(--shareLinkColor);
      }

      .code {
        position: relative;
      }

      textarea {
        display: block;
        width: 100%;
        height: 120px;
        padding: 0.8rem 1rem;
        box-sizing: border-box;
        resize: none;
        cursor: pointer;
        font:
          normal 1.4rem 'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif;
        color: var(--textareaColor, #fff);
        background: var(--textareaBg, #151515);
      }

      small {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3rem;
        padding: 0.5rem 1rem;
        box-sizing: border-box;
        font:
          normal 1.2rem/2rem 'Helvetica Neue',
          Helvetica,
          Arial,
          sans-serif;
        color: var(--textareaBg, #151515);
        background: var(--textareaColor, #fff);
        opacity: 0;
        transition: opacity 300ms linear;
      }
      small.visible {
        opacity: 1;
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: String })
], IauxSharingOptions.prototype, "baseHost", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: String })
], IauxSharingOptions.prototype, "creator", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: String })
], IauxSharingOptions.prototype, "description", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Boolean })
], IauxSharingOptions.prototype, "embedOptionsVisible", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: String })
], IauxSharingOptions.prototype, "identifier", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Array })
], IauxSharingOptions.prototype, "sharingOptions", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: String })
], IauxSharingOptions.prototype, "type", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: Boolean })
], IauxSharingOptions.prototype, "renderHeader", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.property)({ type: String })
], IauxSharingOptions.prototype, "fileSubPrefix", void 0);
IauxSharingOptions = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.customElement)('iaux-in-share-panel')
], IauxSharingOptions);

//# sourceMappingURL=share-panel.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/email.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/email.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internetarchive_icon_email_icon_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-email/icon-email */ "./node_modules/@internetarchive/icon-email/icon-email.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/provider.js");



/* harmony default export */ __webpack_exports__["default"] = (class extends _provider__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(params) {
        super(params);
        this.name = 'Email';
        this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<ia-icon-email></ia-icon-email>`;
        this.class = 'email';
    }
    get url() {
        return `mailto:?body=https://${this.baseHost}/details/${this.itemPath}&subject=${this.description} : ${this.creator}${this.promoCopy}`;
    }
});
//# sourceMappingURL=email.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/facebook.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/facebook.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internetarchive_icon_facebook_icon_facebook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-facebook/icon-facebook */ "./node_modules/@internetarchive/icon-facebook/icon-facebook.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/provider.js");



/* harmony default export */ __webpack_exports__["default"] = (class extends _provider__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(params) {
        super(params);
        this.name = 'Facebook';
        this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<ia-icon-facebook></ia-icon-facebook>`;
        this.class = 'facebook';
    }
    get url() {
        return `https://www.facebook.com/sharer/sharer.php?u=https://${this.baseHost}/details/${this.itemPath}`;
    }
});
//# sourceMappingURL=facebook.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/pinterest.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/pinterest.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internetarchive_icon_pinterest_icon_pinterest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-pinterest/icon-pinterest */ "./node_modules/@internetarchive/icon-pinterest/icon-pinterest.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/provider.js");



/* harmony default export */ __webpack_exports__["default"] = (class extends _provider__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(params) {
        super(params);
        this.name = 'Pinterest';
        this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<ia-icon-pinterest></ia-icon-pinterest>`;
        this.class = 'pinterest';
    }
    get url() {
        return `http://www.pinterest.com/pin/create/button/?url=https://${this.baseHost}/details/${this.itemPath}&description=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
    }
});
//# sourceMappingURL=pinterest.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/provider.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/provider.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Provider; }
/* harmony export */ });
class Provider {
    constructor(params) {
        this.promoCopy =
            ' : Free Download, Borrow, and Streaming : Internet Archive';
        this.description = (params === null || params === void 0 ? void 0 : params.description) || '';
        this.creator = (params === null || params === void 0 ? void 0 : params.creator) || '';
        this.fileSubPrefix = (params === null || params === void 0 ? void 0 : params.fileSubPrefix) || '';
        this.identifier = (params === null || params === void 0 ? void 0 : params.identifier) || '';
        this.baseHost = (params === null || params === void 0 ? void 0 : params.baseHost) || '';
    }
    get encodedDescription() {
        return this.encodeString(this.description);
    }
    get encodedCreator() {
        return this.encodeString(this.creator);
    }
    get encodedPromoCopy() {
        return this.encodeString(this.promoCopy);
    }
    get itemPath() {
        const encodedFileSubPrefix = this.fileSubPrefix
            ? encodeURIComponent(this.fileSubPrefix)
            : '';
        return encodedFileSubPrefix
            ? `${this.identifier}/${encodedFileSubPrefix}`
            : this.identifier;
    }
    get url() {
        return `https://${this.baseHost}/details/${this.itemPath}`;
    }
    encodeString(str) {
        if (!str)
            return '';
        return encodeURIComponent(str.replace(/\s/g, '+')).replace(/%2B/g, '+');
    }
}
//# sourceMappingURL=provider.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/tumblr.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/tumblr.js ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _internetarchive_icon_tumblr_icon_tumblr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-tumblr/icon-tumblr */ "./node_modules/@internetarchive/icon-tumblr/icon-tumblr.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/provider.js");



/* harmony default export */ __webpack_exports__["default"] = (class extends _provider__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(params) {
        super(params);
        this.name = 'Tumblr';
        this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<ia-icon-tumblr></ia-icon-tumblr>`;
        this.class = 'tumblr';
    }
    get url() {
        return `https://www.tumblr.com/share/video?embed=%3Ciframe+width%3D%22640%22+height%3D%22480%22+frameborder%3D%220%22+allowfullscreen+src%3D%22https%3A%2F%2F${this.baseHost}%2Fembed%2F%22+webkitallowfullscreen%3D%22true%22+mozallowfullscreen%3D%22true%22%26gt%3B%26lt%3B%2Fiframe%3E&name=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
    }
});
//# sourceMappingURL=tumblr.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/twitter.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/twitter.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TwitterProvider; }
/* harmony export */ });
/* harmony import */ var _internetarchive_icon_twitter_icon_twitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/icon-twitter/icon-twitter */ "./node_modules/@internetarchive/icon-twitter/icon-twitter.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./provider */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-providers/provider.js");



class TwitterProvider extends _provider__WEBPACK_IMPORTED_MODULE_2__["default"] {
    constructor(params) {
        super(params);
        this.name = 'Twitter';
        this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_1__.html) `<ia-icon-twitter></ia-icon-twitter>`;
        this.class = 'twitter';
    }
    get url() {
        return `https://twitter.com/intent/tweet?url=https://${this.baseHost}/details/${this.itemPath}&via=internetarchive&text=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
    }
}
//# sourceMappingURL=twitter.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/viewable-files.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/viewable-files.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IauxSortFilesButton: function() { return /* binding */ IauxSortFilesButton; },
/* harmony export */   IauxViewableFiles: function() { return /* binding */ IauxViewableFiles; },
/* harmony export */   viewableFilesIcon: function() { return /* binding */ viewableFilesIcon; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit/directives/repeat.js */ "./node_modules/lit/directives/repeat.js");

/* eslint-disable max-classes-per-file */
/* eslint-disable lit-a11y/list */



// sort icons
const sortAscIcon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
  <svg
    name="sort-asc"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        d="m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m10.3846154 11.0769231 2.7692308 5.5384615 2.7692307-5.5384615m-2.7692307 4.1538461v-13.15384612"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.661538"
        transform="matrix(1 0 0 -1 0 18.692308)"
      />
    </g>
  </svg>
`;
const sortDescIcon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
  <svg
    name="sort-desc"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fill-rule="evenodd">
      <path
        d="m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z"
        fill="#fff"
        fill-rule="nonzero"
      />
      <path
        d="m10.3846154 11.0769231 2.7692308 5.5384615 2.7692307-5.5384615m-2.7692307 4.1538461v-13.15384612"
        stroke="#fff"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.661538"
      />
    </g>
  </svg>
`;
const sortNeutralIcon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
  <svg
    name="sort-neutral"
    height="18"
    viewBox="0 0 18 18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="#fff" fill-rule="evenodd">
      <path
        d="m2.32514544 8.30769231.7756949-2.08468003h2.92824822l.75630252 2.08468003h1.01809955l-2.70523594-6.92307693h-1.01809955l-2.69553976 6.92307693zm3.41305753-2.86037492h-2.34647705l1.17323853-3.22883h.01939237z"
        fill-rule="nonzero"
      />
      <path
        d="m7.1689722 16.6153846v-.7756949h-4.4117647l4.29541047-5.3716871v-.77569491h-5.06140918v.77569491h3.97543633l-4.30510666 5.3716871v.7756949z"
        fill-rule="nonzero"
      />
      <circle cx="13" cy="9" r="2" />
    </g>
  </svg>
`;
/* icon for menu shortcut & menu icon */
const viewableFilesIcon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
  <svg
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby="volumesTitleID volumesDescID"
  >
    <title id="volumesTitleID">Viewable Files</title>
    <g fill="#ffffff">
      <path
        fill="#ffffff"
        d="m9.83536396 0h10.07241114c.1725502.47117517.3378411.76385809.4958725.87804878.1295523.11419069.3199719.1998337.5712586.25692905.2512868.05709534.4704647.08564301.6575337.08564301h.2806036v15.24362526h-4.3355343v3.8106985h-4.44275v3.7250554h-12.01318261c-.27306495 0-.50313194-.085643-.69020098-.256929-.18706903-.1712861-.30936193-.3425721-.36687867-.5138581l-.06449694-.2785477v-14.2159091c0-.32815965.08627512-.5922949.25882537-.79240577.17255024-.20011086.34510049-.32150776.51765073-.36419068l.25882537-.0640244h3.36472977v-2.54767184c0-.31374722.08627513-.57067627.25882537-.77078714.17255025-.20011086.34510049-.32150776.51765074-.36419068l.25882536-.06402439h3.36472978v-2.56929047c0-.32815964.08627512-.5922949.25882537-.79240576.17255024-.20011087.34510049-.31430156.51765073-.34257207zm10.78355264 15.6294346v-13.53076498c-.2730649-.08536585-.4456152-.16380266-.5176507-.23531042-.1725502-.1424612-.2730649-.27078714-.3015441-.38497783v13.36031043h-9.87808272c0 .0144124-.02149898.0144124-.06449694 0-.04299795-.0144124-.08962561.006929-.13988296.0640244-.05025735.0570953-.07538603.1427383-.07538603.256929s.02149898.210643.06449694.289357c.04299795.078714.08599591.1322062.12899387.1604767l.06449693.0216187h10.71905571zm-10.2449613-2.4412417h7.98003v-11.60421286h-7.98003zm1.6827837-9.41990022h4.6153002c.1725502 0 .3199718.05349224.4422647.16047672s.1834393.23891353.1834393.39578714c0 .15687362-.0611464.28519956-.1834393.38497783s-.2697145.1496674-.4422647.1496674h-4.6153002c-.1725503 0-.3199719-.04988913-.4422647-.1496674-.1222929-.09977827-.1834394-.22810421-.1834394-.38497783 0-.15687361.0611465-.28880266.1834394-.39578714.1222928-.10698448.2697144-.16047672.4422647-.16047672zm-6.08197737 13.50997782h7.72120467v-.8131929h-3.79610541c-.27306495 0-.49950224-.085643-.67931188-.256929-.17980964-.1712861-.29847284-.3425721-.35598958-.5138581l-.06449694-.2785477v-10.02023282h-2.82530086zm6.77217827-11.36890243h3.2139578c.1295522 0 .240956.05709534.3342113.17128603.0932554.11419069.139883.24972284.139883.40659645 0 .15687362-.0466276.28880267-.139883.39578714-.0932553.10698448-.2046591.16047672-.3342113.16047672h-3.2139578c-.1295523 0-.2373264-.05349224-.3233223-.16047672-.0859959-.10698447-.1289938-.23891352-.1289938-.39578714 0-.15687361.0429979-.29240576.1289938-.40659645s.19377-.17128603.3233223-.17128603zm-11.15043132 15.11557653h7.69942646v-.7491685h-3.79610539c-.25854616 0-.48135376-.0892462-.66842279-.2677384-.18706904-.1784922-.30936193-.3605876-.36687868-.546286l-.06449694-.2569291v-10.04101994h-2.80352266zm14.62237682-4.5606985h-.8191949v2.1410754h-9.89986085s-.04299796.0285477-.12899387.085643c-.08599592.0570954-.12201369.1427384-.10805331.2569291 0 .1141907.01786928.210643.05360784.289357.03573856.0787139.07538603.125.1189424.138858l.06449694.0432373h10.71905575v-2.9542683zm-4.3991936 3.8106985h-.8191949v2.077051h-9.8563045c0 .0144124-.02149898.0144124-.06449694 0-.04299795-.0144125-.08962561.0105321-.13988296.0748337-.05025735.0643015-.07538603.1607538-.07538603.289357 0 .1141906.02149898.2070399.06449694.2785476.04299795.0715078.08599591.1141907.12899387.1280488l.06449693.0216186h10.69811519v-2.8686252z"
      />
    </g>
  </svg>
`;
/* <iaux-in-sort-files-button> side panel header button */
let IauxSortFilesButton = class IauxSortFilesButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.fileListRaw = [];
        this.fileListSorted = [];
        this.sortOrderBy = 'default';
    }
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<div class="sort-multi-file-list">${this.sortButton}</div>`;
    }
    get sortButton() {
        const sortIcons = {
            default: (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <button
          class="sort-by neutral-icon"
          aria-label="Sort volumes in initial order"
          @click=${() => this.sortVolumes('title_asc')}
        >
          ${sortNeutralIcon}
        </button>
      `,
            title_asc: (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <button
          class="sort-by asc-icon"
          aria-label="Sort volumes in ascending order"
          @click=${() => this.sortVolumes('title_desc')}
        >
          ${sortAscIcon}
        </button>
      `,
            title_desc: (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
        <button
          class="sort-by desc-icon"
          aria-label="Sort volumes in descending order"
          @click=${() => this.sortVolumes('default')}
        >
          ${sortDescIcon}
        </button>
      `,
        };
        return sortIcons[this.sortOrderBy];
    }
    sortVolumes(sortType) {
        this.sortOrderBy = sortType;
        let sortedFiles = [];
        sortedFiles = this.fileListRaw.sort((a, b) => {
            if (sortType === 'title_asc')
                return a.title.localeCompare(b.title);
            if (sortType === 'title_desc')
                return b.title.localeCompare(a.title);
            return a.orig_sort - b.orig_sort;
        });
        this.dispatchEvent(new CustomEvent('fileListSorted', {
            detail: {
                sortType,
                sortedFiles,
            },
            bubbles: true,
            composed: true,
        }));
        this.fileListSorted = sortedFiles;
    }
    static get styles() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
      button.sort-by {
        padding: 0px;
        background-color: transparent;
        border: 0px;
        --iconWidth: var(--menuSliderHeaderIconWidth);
        --iconHeight: var(--menuSliderHeaderIconHeight);
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], IauxSortFilesButton.prototype, "fileListRaw", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], IauxSortFilesButton.prototype, "fileListSorted", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true })
], IauxSortFilesButton.prototype, "sortOrderBy", void 0);
IauxSortFilesButton = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('iaux-in-sort-files-button')
], IauxSortFilesButton);

/* <iaux-in-viewable-files-panel> side panel menu */
let IauxViewableFiles = class IauxViewableFiles extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.baseHost = 'archive.org';
        this.sortOrderBy = 'default';
        this.subPrefix = '';
        this.fileList = [];
        this.addSortToUrl = false;
    }
    firstUpdated() {
        const activeFile = this.shadowRoot.querySelector('.content.active');
        // allow for css animations to run before scrolling to active file
        setTimeout(() => {
            // scroll active file into view if needed
            // note: `scrollIntoViewIfNeeded` handles auto-scroll gracefully for Chrome, Safari
            // Firefox does not have this capability yet as it does not support `scrollIntoViewIfNeeded`
            activeFile === null || activeFile === void 0 ? void 0 : activeFile.scrollIntoViewIfNeeded(true);
            // Todo: support `scrollIntoView` or `parentContainer.crollTop = x` for FF & "IE 11"
            // currently, the hard `position: absolutes` misaligns subpanel when `scrollIntoView` is applied :(
        }, 350);
    }
    volumeItemWithImageTitle(item) {
        const hrefUrl = this.fileUrl(item);
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <li class="content active">
        <div class="separator"></div>
        <a class="container" href="${hrefUrl}">
          <div class="image">
            <img src="${item.image}" alt="preview" />
          </div>
          <div class="text">
            <p class="item-title">${item.title}</p>
            <small>by: ${item.author}</small>
          </div>
        </a>
      </li>
    `;
    }
    fileUrl(item) {
        const baseUrl = `//${this.baseHost}${item.url_path}`;
        let hrefUrl = baseUrl;
        if (this.addSortToUrl) {
            hrefUrl =
                this.sortOrderBy === 'default'
                    ? `${baseUrl}`
                    : `${baseUrl}?sort=${this.sortOrderBy}`;
        }
        return hrefUrl;
    }
    get pdfLabel() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<span class="pdf-label"
      ><span class="sr-only">view this</span> PDF</span
    >`;
    }
    fileLi(item) {
        var _a;
        const activeClass = this.subPrefix === item.file_subprefix ? ' active' : '';
        const hrefUrl = this.fileUrl(item);
        const isPdf = ((_a = item.file_source) !== null && _a !== void 0 ? _a : '').match(/^[^+]+\.pdf$/i);
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <li>
        <div class="separator"></div>
        <div class="content${activeClass}">
          <a href=${hrefUrl}>
            <p class="item-title">
              ${item.title}${isPdf ? this.pdfLabel : lit__WEBPACK_IMPORTED_MODULE_0__.nothing}
            </p>
          </a>
        </div>
      </li>
    `;
    }
    get fileListTemplate() {
        const filesDisplay = (0,lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_2__.repeat)(this.fileList, file => file === null || file === void 0 ? void 0 : file.file_prefix, this.fileLi.bind(this));
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <ul>
        ${filesDisplay}
        <div class="separator"></div>
      </ul>
    `;
    }
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) ` ${this.fileList.length ? this.fileListTemplate : lit__WEBPACK_IMPORTED_MODULE_0__.nothing} `;
    }
    static get styles() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
      :host {
        display: block;
        overflow-y: auto;
        box-sizing: border-box;
        color: var(--primaryTextColor);
        margin-top: 14px;
        margin-bottom: 2rem;
        --activeBorderWidth: 2px;
      }

      a {
        color: #ffffff;
        text-decoration: none;
      }

      img {
        width: 35px;
        height: 45px;
      }

      ul {
        padding: 0;
        list-style: none;
        margin: var(--activeBorderWidth) 0.5rem 1rem 0;
      }

      ul > li:first-child .separator {
        display: none;
      }

      li {
        cursor: pointer;
        outline: none;
        position: relative;
      }

      li .content {
        padding: 2px 0 4px 2px;
        border: var(--activeBorderWidth) solid transparent;
        padding: 0.2rem 0 0.4rem 0.2rem;
      }

      li .content.active {
        border: var(--activeBorderWidth) solid #538bc5;
      }

      li.content a {
        display: flex;
      }

      small {
        font-style: italic;
        white-space: initial;
      }

      .container {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .item-title {
        margin-block-start: 0em;
        margin-block-end: 0em;
        font-size: 14px;
        font-weight: bold;
        word-wrap: break-word;
        padding-left: 5px;
      }

      .separator {
        background-color: var(--secondaryBGColor);
        width: 98%;
        margin: 1px auto;
        height: 1px;
      }

      .text {
        padding-left: 10px;
      }

      .icon {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-left: 0.7rem;
        border: 1px solid var(--primaryTextColor);
        border-radius: 2px;
        background: var(--activeButtonBg) 50% 50% no-repeat;
      }

      .pdf-label {
        border: 1px solid;
        padding: 2px 5px;
        border-radius: 20px;
        display: inline-block;
        margin-left: 5px;
        font-size: 0.9rem;
      }

      .pdf-label .sr-only {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        padding: 0;
        border: 0;
        height: 1px;
        width: 1px;
        overflow: hidden;
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], IauxViewableFiles.prototype, "baseHost", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], IauxViewableFiles.prototype, "sortOrderBy", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], IauxViewableFiles.prototype, "subPrefix", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Array })
], IauxViewableFiles.prototype, "fileList", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Boolean, reflect: true })
], IauxViewableFiles.prototype, "addSortToUrl", void 0);
IauxViewableFiles = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('iaux-in-viewable-files-panel')
], IauxViewableFiles);

//# sourceMappingURL=viewable-files.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/ia-item-navigator/dist/src/no-theater-available.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@internetarchive/ia-item-navigator/dist/src/no-theater-available.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IANoTheaterAvailable: function() { return /* binding */ IANoTheaterAvailable; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");



let IANoTheaterAvailable = class IANoTheaterAvailable extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        this.identifier = '';
    }
    emitLoaded() {
        this.dispatchEvent(new CustomEvent('loadingStateUpdated', {
            detail: { loaded: true },
        }));
    }
    updated(changed) {
        if (changed.has('identifier')) {
            this.emitLoaded();
        }
    }
    get downloadUrl() {
        return `/download/${this.identifier}`;
    }
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <section>
        <h2>THERE IS NO PREVIEW AVAILABLE FOR THIS ITEM</h2>
        <p>
          This item does not appear to have any files that can be experienced on
          Archive.org. <br />
          Please download files in this item to interact with them on your
          computer.
        </p>
        <a href=${this.downloadUrl}>Show all files</a>
      </section>
    `;
    }
    static get styles() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
      :host {
        color: var(--primaryTextColor, #fff);
        text-align: center;
      }
      section {
        width: 100%;
        margin: 5%;
        padding: 0 5%;
      }
      p {
        font-size: 1.4rem;
      }
      a {
        color: var(--primaryTextColor, #fff);
        background-color: rgb(25, 72, 128);
        min-height: 35px;
        outline: none;
        cursor: pointer;
        line-height: normal;
        border-radius: 0.4rem;
        text-align: center;
        vertical-align: middle;
        font-size: 1.4rem;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        display: inline-block;
        padding: 0.85rem 1.2rem;
        border: 1px solid rgb(197, 209, 223);
        white-space: nowrap;
        appearance: auto;
        box-sizing: border-box;
        user-select: none;
        text-decoration: none;
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String })
], IANoTheaterAvailable.prototype, "identifier", void 0);
IANoTheaterAvailable = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('ia-no-theater-available')
], IANoTheaterAvailable);

//# sourceMappingURL=no-theater-available.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/icon-bookmark/icon-bookmark.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-bookmark/icon-bookmark.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_icon_bookmark_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/icon-bookmark.js */ "./node_modules/@internetarchive/icon-bookmark/src/icon-bookmark.js");


window.customElements.define('icon-bookmark', _src_icon_bookmark_js__WEBPACK_IMPORTED_MODULE_0__.IAIconBookmark);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-bookmark/src/icon-bookmark.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-bookmark/src/icon-bookmark.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IAIconBookmark: function() { return /* binding */ IAIconBookmark; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


class IAIconBookmark extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
      :host {
        width: var(--iconWidth, 'auto');
        height: var(--iconHeight, 'auto');
      }

      #hollow,
      #plus,
      #minus {
        display: none;
      }

      .hollow #filled,
      .plus #filled,
      .minus #filled {
        display: none;
      }

      .hollow #hollow,
      .plus #hollow,
      .minus #hollow {
        display: block;
      }

      .plus #plus {
        display: block;
      }

      .minus #minus {
        display: block;
      }

      .fill-color {
        fill: var(--iconFillColor);
      }

      .stroke-color {
        stroke: var(--iconStrokeColor);
      }
    `;
  }

  static get properties() {
    return {
      state: { type: String },
    };
  }

  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div class=${this.state}>
        <svg
          height="24"
          viewBox="0 0 16 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="bookmarkTitleID bookmarDescID"
        >
          <title id="bookmarkTitleID">Bookmark icon</title>
          <desc id="bookmarkDescID">An outline of the shape of a bookmark</desc>
          <path
            id="filled"
            d="m1 0h14c.5522847 0 1 .44771525 1 1v23l-8-5.4545455-8 5.4545455v-23c0-.55228475.44771525-1 1-1z"
            class="fill-color"
            fill-rule="evenodd"
          />
          <g class="fill-color" fill-rule="evenodd">
            <path
              id="hollow"
              d="m15 0c.5522847 0 1 .44771525 1 1v23l-8-5.4545455-8 5.4545455v-23c0-.55228475.44771525-1 1-1zm-2 2h-10c-.51283584 0-.93550716.38604019-.99327227.88337887l-.00672773.11662113v18l6-4.3181818 6 4.3181818v-18c0-.51283584-.3860402-.93550716-.8833789-.99327227z"
            />
            <path
              id="plus"
              d="m8.75 6v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25z"
              fill-rule="nonzero"
            />
            <path id="minus" d="m11 8.25v1.5h-6v-1.5z" fill-rule="nonzero" />
          </g>
        </svg>
      </div>
    `;
  }
}




/***/ }),

/***/ "./node_modules/@internetarchive/icon-close/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-close/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 40 40"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="closeTitleID closeDescID"
>
  <title id="closeTitleID">Close icon</title>
  <desc id="closeDescID">A line drawing of an X</desc>
  <path d="m29.1923882 10.8076118c.5857864.5857865.5857864 1.535534 0 2.1213204l-7.0711162 7.0703398 7.0711162 7.0717958c.5857864.5857864.5857864 1.5355339 0 2.1213204-.5857865.5857864-1.535534.5857864-2.1213204 0l-7.0717958-7.0711162-7.0703398 7.0711162c-.5857864.5857864-1.5355339.5857864-2.1213204 0-.5857864-.5857865-.5857864-1.535534 0-2.1213204l7.0706602-7.0717958-7.0706602-7.0703398c-.5857864-.5857864-.5857864-1.5355339 0-2.1213204.5857865-.5857864 1.535534-.5857864 2.1213204 0l7.0703398 7.0706602 7.0717958-7.0706602c.5857864-.5857864 1.5355339-.5857864 2.1213204 0z" class="fill-color" fill-rule="evenodd"/>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-collapse-sidebar/icon-collapse-sidebar.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-collapse-sidebar/icon-collapse-sidebar.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-collapse-sidebar/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconCollapseSidebar extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-collapse-sidebar', IAIconCollapseSidebar);

/* harmony default export */ __webpack_exports__["default"] = (IAIconCollapseSidebar);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-collapse-sidebar/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-collapse-sidebar/index.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 18 18"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="collapseSidebarTitleID collapseSidebarDescID"
>
  <title id="collapseSidebarTitleID">Collapse sidebar</title>
  <desc id="collapseSidebarDescID">A circle with a left pointing chevron</desc>
  <path d="m9 0c4.9705627 0 9 4.02943725 9 9 0 4.9705627-4.0294373 9-9 9-4.97056275 0-9-4.0294373-9-9 0-4.97056275 4.02943725-9 9-9zm1.6976167 5.28352881c-.365258-.3556459-.9328083-.37581056-1.32099801-.06558269l-.09308988.0844372-3 3.08108108-.08194436.09533317c-.27484337.36339327-.26799482.87009349.01656959 1.22592581l.084491.09308363 3 2.91891889.09533796.0818904c.3633964.2746544.8699472.2677153 1.2256839-.0167901l.093059-.0844712.0818904-.095338c.2746544-.3633964.2677153-.8699472-.0167901-1.2256839l-.0844712-.093059-2.283355-2.2222741 2.3024712-2.36338332.0819252-.09530804c.2997677-.39632298.2644782-.96313393-.1007797-1.31877983z" fill-rule="evenodd" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-dl/icon-dl.js":
/*!**********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-dl/icon-dl.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-dl/index.js");



class IAIconDl extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
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
    return _index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

customElements.define('ia-icon-dl', IAIconDl);

/* harmony default export */ __webpack_exports__["default"] = (IAIconDl);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-dl/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-dl/index.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="downloadTitleID downloadDescID"
>
  <title id="downloadTitleID">Download icon</title>
  <desc id="downloadDescID">An arrow pointing downward at an empty document tray</desc>
  <g class="fill-color">

    <path d="m50 80 33.3333333-43.3333333h-20v-36.6666667h-26.6666666v36.6666667h-20zm50 20v-13.3333333h-100v13.3333333z"/>
  </g>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-edit-pencil/icon-edit-pencil.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-edit-pencil/icon-edit-pencil.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-edit-pencil/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconEditPencil extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-edit-pencil', IAIconEditPencil);

/* harmony default export */ __webpack_exports__["default"] = (IAIconEditPencil);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-edit-pencil/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-edit-pencil/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" aria-labelledby="editPencilTitleID editPencilDescID"><title id="editPencilTitleID">Pencil icon</title><desc id="editPencilDescID">An illustration of a pencil, used to represent an edit action</desc><path class="fill-color" d="m15.6111048 9.3708338-9.52237183 9.5222966-5.14363353 1.0897111c-.42296707.0896082-.83849202-.1806298-.92810097-.6035935-.02266463-.1069795-.02266463-.2175207 0-.3245001l1.08971974-5.1435929 9.52237189-9.52229656zm-10.89310224 5.9110366-2.78094924-.5403869-.67567462 3.166657.83033407.8303275 3.16668096-.6756703zm14.82724244-12.05935921c.6114418.61143705.6055516 1.6086709-.0131615 2.22737904l-2.2405581 2.24054036-4.9820147-4.98197536 2.2405581-2.24054036c.618713-.61870814 1.6159506-.62460252 2.2273925-.01316547z" fill-rule="evenodd"/></svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-ellipses/icon-ellipses.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-ellipses/icon-ellipses.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-ellipses/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconEllipses extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-ellipses', IAIconEllipses);

/* harmony default export */ __webpack_exports__["default"] = (IAIconEllipses);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-ellipses/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-ellipses/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 40 40"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="ellipsesTitleID ellipsesDescID"
>
  <title id="ellipsesTitleID">Ellipses icon</title>
  <desc id="ellipsesDescID">An illustration of text ellipses.</desc>
  <path class="fill-color" d="m10.5 17.5c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5c-1.38071187 0-2.5-1.1192881-2.5-2.5s1.11928813-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5zm9.5 0c1.3807119 0 2.5 1.1192881 2.5 2.5s-1.1192881 2.5-2.5 2.5-2.5-1.1192881-2.5-2.5 1.1192881-2.5 2.5-2.5z" fill-rule="evenodd"/>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-email/icon-email.js":
/*!****************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-email/icon-email.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-email/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconEmail extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-email', IAIconEmail);

/* harmony default export */ __webpack_exports__["default"] = (IAIconEmail);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-email/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-email/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="emailTitleID emailDescID">
  <title id="emailTitleID">Email icon</title>
  <desc id="emailDescID">An illustration of an envelope</desc>
  <path d="m32 7.04156803v19.91686397c0 .5752421-.4763773 1.041568-1.0640184 1.041568h-27.87196316c-.58764116 0-1.06401844-.4663259-1.06401844-1.041568v-19.91686397c0-.57524214.47637728-1.04156803 1.06401844-1.04156803h27.87196316c.5876411 0 1.0640184.46632589 1.0640184 1.04156803zm-26.25039901 1.19676167 10.04327011 10.1323738c.5135662.4194048.8817166.6291071 1.1044511.6291071.1198794 0 .2695514-.0503424.4490158-.1510273.1794644-.100685.3291364-.2013699.4490158-.3020548l.1798191-.1510273 10.1198794-10.15841306zm16.77212271 9.7303286 6.8831353 6.7889404v-13.5778809zm-17.92871075-6.6379131v13.350819l6.78098955-6.6629107zm22.09008685 14.2059464-5.9074304-5.8588202-.9757049.9551179-.3594018.3295984c-.0342324.0304241-.0665646.0587822-.0969964.0850743l-.1597867.1329606c-.0684912.0540844-.1198794.0895749-.1541644.1064714-.6674943.3687151-1.3523675.5530727-2.0546196.5530727-.65047 0-1.3782586-.218035-2.1833659-.6541048l-.6682036-.4520405-1.0278418-1.0311524-5.95850326 5.832781z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-facebook/icon-facebook.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-facebook/icon-facebook.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-facebook/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconFacebook extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-facebook', IAIconFacebook);

/* harmony default export */ __webpack_exports__["default"] = (IAIconFacebook);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-facebook/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-facebook/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="facebookTitleID facebookDescID">
  <title id="facebookTitleID">Facebook icon</title>
  <desc id="facebookDescID">A lowercase f</desc>
  <path d="m30.91057 19.2442068.2670004-5.3339402h-5.7329237c-.0890001-3.4962895.25183-5.42243459 1.0224903-5.77843514.3560005-.17800028.8004955-.28925046 1.333485-.33375053s1.0442346-.0520853 1.5337353-.02275571c.4895008.02932959 1.045246.01466479 1.6672356-.04399439.0890001-1.59997977.1335002-3.24445961.1335002-4.93343953-2.1633102-.20732987-3.6742898-.28115953-4.5329389-.22148898-2.8146294.17800028-4.7847688 1.25965538-5.9104183 3.2449653-.1780003.3256596-.3261653.68873971-.444495 1.08924034-.1183298.40050062-.2144095.76358074-.2882391 1.08924034-.0738297.32565959-.125915.7848194-.1562559 1.37747942-.030341.59266002-.052591 1.04474028-.0667501 1.35624078-.0141592.3115005-.0217444.8449956-.0227558 1.6004854v1.5777298h-3.8229605v5.3339401h3.8669549v14.622824h5.8224296c0-.3560006-.0146648-1.6819003-.0439944-3.9776994-.0293296-2.295799-.0515796-4.2957737-.0667501-5.9999241s-.0075853-3.2525506.0227557-4.6452005h5.4219289z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-ia-logo/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-ia-logo/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  class="ia-logo"
  viewBox="0 0 27 30"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="logoTitleID logoDescID"
>
  <title id="logoTitleID">Internet Archive logo</title>
  <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <mask id="mask-2" class="fill-color">
      <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>
    </mask>
    <use class="fill-color" xlink:href="#path-1"></use>
    <g mask="url(#mask-2)" class="fill-color">
      <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>
    </g>
  </g>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-link/icon-link.js":
/*!**************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-link/icon-link.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-link/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconLink extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-link', IAIconLink);

/* harmony default export */ __webpack_exports__["default"] = (IAIconLink);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-link/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-link/index.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="linkTitleID linkDescID">
  <title id="linkTitleID">Link icon</title>
  <desc id="linkDescID">Two chain links linked together</desc>
  <path d="m7.80511706 12.3659763c1.2669254-2.2579539 4.09819784-2.9949938 6.41200864-1.7733458l.2295791.12871 1.6067188.9559859 3.5467013-6.31849361c1.2682451-2.26030597 4.104098-2.99652769 6.4192376-1.76952182l.2223501.12488594 3.2168204 1.91103915c2.2770002 1.3527136 3.1866331 4.21502324 2.0564431 6.51290984l-.1198433.2278304-5.2002499 9.2680474c-1.2669254 2.2579539-4.0981978 2.9949938-6.4120086 1.7733458l-.2295791-.12871-1.6096554-.9558482-3.5437647 6.3183559c-1.2682451 2.260306-4.104098 2.9965277-6.41923761 1.7695218l-.22235013-.1248859-3.21682032-1.9110392c-2.27700024-1.3527136-3.18663314-4.2150232-2.05644312-6.5129098l.11984332-.2278304zm13.93955474-5.73311741-3.563271 6.35055051c1.889633 1.4530595 2.5776248 4.0429866 1.5410255 6.156875l-.1223014.2328355-.4183304.7430134 1.6096554.9558483c1.1431442.6791157 2.5155496.3977368 3.1667361-.5628389l.0921501-.1491451 5.2002498-9.2680474c.5752467-1.0252226.2110342-2.4011579-.8559335-3.14755806l-.1742742-.11247814-3.2168203-1.91103915c-1.1402863-.67741793-2.5086889-.39913772-3.1618387.55564729zm-11.79500786 7.00714351-5.20024982 9.2680474c-.57524673 1.0252226-.21103426 2.4011579.85593348 3.1475581l.17427416.1124781 3.21682032 1.9110392c1.14028632.6774179 2.50868892.3991377 3.16183872-.5556473l.0970474-.1563368 3.5622708-6.3513198c-1.8888875-1.4532134-2.5764504-4.042623-1.5400057-6.1561456l.1222818-.2327956.4153938-.7428758-1.6067188-.9559859c-1.1431442-.6791157-2.5155496-.3977368-3.1667361.5628389zm6.97653866 1.5796652-.3817806.6812386c-.5117123.9119895-.2800268 2.1014993.528439 2.8785267l.382717-.6803391c.5119098-.9123415.2798478-2.1024176-.5293754-2.8794262z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-magnify-minus/icon-magnify-minus.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-magnify-minus/icon-magnify-minus.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-magnify-minus/index.js");



class IAIconMagnifyMinus extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
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
    return _index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

customElements.define('ia-icon-magnify-minus', IAIconMagnifyMinus);

/* harmony default export */ __webpack_exports__["default"] = (IAIconMagnifyMinus);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-magnify-minus/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-magnify-minus/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="magnify-minusTitleID magnify-minusDescID"
>
  <title id="magnify-minusTitleID">Zoom out</title>
  <desc id="magnify-minusDescID">Take a look further.</desc>
  <g
    class="fill-color"
    fill="none"
    fill-rule="nonzero"
  >
    <path d="m2.3239824 87.3815869 25.8938394-23.8143095c-4.5929593-6.6937643-6.889439-14.1059452-6.889439-22.2365428 0-7.1360431 1.7567382-13.7186647 5.2702146-19.7478649 3.5134763-6.0292002 8.2852035-10.8003118 14.3151815-14.31333499 6.029978-3.51302314 12.6134488-5.26953471 19.7504125-5.26953471s13.7204346 1.75651157 19.7504126 5.26953471c6.029978 3.51302319 10.8017051 8.28413479 14.3151815 14.31333499 3.5134763 6.0292002 5.2702145 12.6118218 5.2702145 19.7478649s-1.7567382 13.7324143-5.2702145 19.7891137c-3.5134764 6.0566994-8.2852035 10.8415607-14.3151815 14.3545838-6.029978 3.5130232-12.6134489 5.2695347-19.7504126 5.2695347-8.5762743 0-16.3217363-2.5723212-23.2363861-7.7169637l-26.3063807 24.2302349c-1.27200216 1.1618413-2.76631826 1.742762-4.48294825 1.742762-1.826641 0-3.38971397-.6496687-4.68921892-1.949006s-1.94925743-2.8622087-1.94925743-4.688614c0-1.9364022.7746608-3.5955208 2.3239824-4.9773557zm58.3436469-19.9162976c7.1919692 0 13.3331041-2.5585716 18.4234048-7.6757149s7.635451-11.2712357 7.635451-18.4622772-2.5451503-13.3313843-7.635451-18.4210284-11.2314356-7.6344661-18.4234048-7.6344661-13.3331042 2.544822-18.4234049 7.6344661-7.635451 11.2299869-7.635451 18.4210284 2.5451503 13.3451339 7.635451 18.4622772 11.2314357 7.6757149 18.4234049 7.6757149zm-14.9374313-21.3256316h31.2878163v-9.5422233h-31.2878163z"/>
  </g>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-magnify-plus/icon-magnify-plus.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-magnify-plus/icon-magnify-plus.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-magnify-plus/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconMagnifyPlus extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-magnify-plus', IAIconMagnifyPlus);

/* harmony default export */ __webpack_exports__["default"] = (IAIconMagnifyPlus);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-magnify-plus/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-magnify-plus/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="magnify-plusTitleID magnify-plusDescID"
>
  <title id="magnify-plusTitleID">Zoom in</title>
  <desc id="magnify-plusDescID">Take a look closer.</desc>
  <g
    class="fill-color"
    fill="none"
    fill-rule="nonzero"
  >
    <path d="m2.40305276 87.4017263 25.81133064-23.7730295c-4.5356618-6.5723551-6.8034928-14.000283-6.8034928-22.2837838 0-7.1236734 1.7429868-13.6948847 5.2289603-19.7136338 3.4859736-6.0187491 8.2577006-10.7953163 14.3151813-14.32970144 6.0574806-3.53438517 12.6547027-5.30157776 19.7916662-5.30157776 10.8429591 0 20.0964884 3.85236545 27.760588 11.5570964 7.6640996 7.7047309 11.4950036 16.9684802 11.4927136 27.791248 0 10.8799585-3.8309059 20.1574336-11.4927136 27.8324254-7.6618077 7.6749917-16.915337 11.5124876-27.760588 11.5124876-8.6312796 0-16.431747-2.5678624-23.4014021-7.7035871l-26.1413636 24.188234c-1.21699671 1.2147305-2.73881553 1.8220957-4.56545649 1.8220957s-3.3897139-.6485425-4.68921882-1.9456276c-1.29950493-1.297085-1.94925739-2.8572473-1.94925739-4.6804867 0-1.8781426.80216353-3.5343852 2.4064906-4.9687279zm58.34020784-19.878343c7.1369635 0 13.264347-2.5678623 18.3821503-7.7035871 5.1178034-5.1357247 7.676705-11.2928753 7.676705-18.4714518s-2.5589016-13.3082755-7.676705-18.3890972c-5.1178033-5.0808217-11.2451868-7.6212325-18.3821503-7.6212325-7.2469746 0-13.4156121 2.5404108-18.5059127 7.6212325s-7.6354509 11.2105207-7.6354509 18.3890972 2.5589016 13.3357271 7.676705 18.4714518c5.1178033 5.1357248 11.2726895 7.7035871 18.4646586 7.7035871zm-13.3594607-21.8685793h10.206958v10.1879511h7.2194718v-10.1879511h10.206958v-7.206028h-10.206958v-10.187951h-7.2194718v10.187951h-10.206958z"/>
  </g>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-pinterest/icon-pinterest.js":
/*!************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-pinterest/icon-pinterest.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-pinterest/index.js");



class IAIconPinterest extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
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
    return _index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

customElements.define('ia-icon-pinterest', IAIconPinterest);

/* harmony default export */ __webpack_exports__["default"] = (IAIconPinterest);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-pinterest/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-pinterest/index.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="pinterestTitleID pinterestDescID">
  <title id="pinterestTitleID">Pinterest icon</title>
  <desc id="pinterestDescID">A stylized letter p</desc>
  <path d="m11.9051049 30.5873434.653491-1.0742755.4207845-.839975c.2805229-.591861.5371377-1.2533214.7698443-1.9843813.2327065-.7310599.4659444-1.6029125.6997135-2.6155579.2337692-1.0126455.4128151-1.752206.5371377-2.2186817.0308151.030815.0775689.0855382.1402615.1641697.0626927.0786314.1094465.1333547.1402615.1641697.1243227.1870153.2178304.311338.280523.372968 1.1210293.964829 2.3817888 1.4631823 3.7822785 1.4950599 1.4939973 0 2.8790795-.3426843 4.1552465-1.0280529 2.1166733-1.1826593 3.6733633-3.1128487 4.6700699-5.7905679.4048457-1.1518444.6848374-2.5996192.8399751-4.3433245.1243226-1.587505-.0781002-3.0974411-.6072685-4.5298084-.903199-2.36638128-2.5528653-4.20306294-4.948999-5.51004497-1.276167-.65349101-2.5990879-1.05833667-3.9687625-1.21453696-1.525875-.21783034-3.1293188-.17107651-4.8103315.14026149-2.7701643.52916833-5.02709913 1.743174-6.77080442 3.64201699-1.99235065 2.14748836-2.98852598 4.62225355-2.98852598 7.42429545 0 2.9571797.9494215 5.0584455 2.84826449 6.3037975l.83997504.4207845c.12432268 0 .22526845.0154075.3028373.0462225s.1551377.0074381.23270656-.0701308c.07756885-.0775688.13229208-.1243226.16416969-.1402614s.07066204-.0860696.11635328-.2103923c.04569124-.1243226.07703756-.2098609.09403895-.2566147.01700139-.0467539.04834771-.1476996.09403895-.3028373s.06906816-.2486454.07013074-.280523l.14026149-.5132295c.06269263-.311338.09403895-.5291684.09403895-.653491-.03081502-.1243227-.12432268-.2799917-.28052297-.467007-.15620029-.1870154-.23376915-.2959305-.23270656-.3267455-.62267599-.8096914-.9494215-1.7904592-.98023652-2.9423035-.03081502-1.55669.28052297-2.9731185.93401399-4.24928547 1.18265932-2.45882635 3.17501002-3.93741618 5.97705192-4.43576949 1.6183201-.311338 3.1356943-.25661476 4.5521228.16416969 1.4164285.42078446 2.5135496 1.09765239 3.2913633 2.03060379.8405063 1.02752164 1.3229208 2.28828114 1.4472435 3.78227848.1243227 1.4004897-.0313463 2.9725872-.467007 4.7162925-.3740306 1.3696746-.9186065 2.5528653-1.6337275 3.5495719-.9967066 1.245352-2.0863896 1.8834355-3.269049 1.9142505-1.7118277.0626926-2.7547568-.6375522-3.1287874-2.1007345-.0935077-.4664757 0-1.2134744.2805229-2.240996.7469987-2.5842117 1.1359055-3.9384788 1.1667206-4.0628015.1870153-1.0275216.2024228-1.7904591.0462225-2.2888124-.1870153-.65349104-.5759222-1.15928246-1.1667205-1.51737429-.5907984-.35809182-1.2756357-.39687625-2.054512-.11635327-1.1826594.43566067-1.9610044 1.40048968-2.335035 2.89448706-.311338 1.306982-.2491767 2.6299028.186484 3.9687625 0 .0626926.0313463.1402615.094039.2327065.0626926.0924451.0940389.1700139.0940389.2327066 0 .0935076-.0313463.2491766-.0940389.467007-.0626927.2178303-.094039.3580918-.094039.4207844-.0935076.4356607-.3038999 1.3308903-.6311767 2.6856887-.3272768 1.3547985-.5838915 2.3897582-.7698443 3.1048793-.7778136 3.2068876-1.12049796 5.5881451-1.02805289 7.1437725l.37296809 2.7558194c.653491-.591861 1.2294131-1.2299445 1.7277664-1.9142505z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-search/icon-search.js":
/*!******************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-search/icon-search.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-search/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconSearch extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-search', IAIconSearch);

/* harmony default export */ __webpack_exports__["default"] = (IAIconSearch);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-search/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-search/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="searchTitleID searchDescID"
>
  <title id="searchTitleID">Search icon</title>
  <desc id="searchDescID">Search for something.</desc>
  <path
    class="fill-color"
    fill="none"
    d="m17.0555551 41.3194459c0-12.7430552 10.3541664-23.1027772 23.0847216-23.1027772 12.7166664 0 23.0777773 10.359722 23.0777773 23.1027772 0 12.7361108-10.3611109 23.0986106-23.0777773 23.0986106-12.7305552 0-23.0847216-10.3624998-23.0847216-23.0986106zm-17.24305512 0c0 22.2916661 18.04583292 40.3472213 40.32777672 40.3472213 8.9208332 0 17.145833-2.9319449 23.8194439-7.8527776l24.1513883 24.0777771c1.2125 1.1402778 2.8430555 1.8430556 4.6374999 1.8430556 3.7444443 0 6.7805554-3.0361111 6.7805554-6.7791665 0-2.0652778-.9222222-3.9069444-2.3736111-5.1499999l-23.718055-23.7458328c4.4152777-6.4791665 7.0152776-14.3055552 7.0152776-22.7402772 0-22.2791661-18.0458328-40.34861006-40.312499-40.34861006-22.2819438 0-40.32777672 18.06944396-40.32777672 40.34861006z" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-share/icon-share.js":
/*!****************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-share/icon-share.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-share/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconShare extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-share', IAIconShare);

/* harmony default export */ __webpack_exports__["default"] = (IAIconShare);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-share/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@internetarchive/icon-share/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="shareTitleID shareDescID"
>
  <title id="shareTitleID">Share icon</title>
  <desc id="shareDescID">A square with an arrow arcing out from the center of the square</desc>
  <g class="fill-color">
    <path d="M70.6784759,10 L70.6784759,21.3240186 C64.5020053,21.66334 58.9104278,22.5826126 53.9037433,24.0818363 C48.8970588,25.5810601 44.8495989,27.4085163 41.7613636,29.5642049 C38.6731283,31.7198935 35.9982175,34.0552229 33.736631,36.5701929 C31.4750446,39.085163 29.8217469,41.5657574 28.776738,44.011976 C27.7317291,46.4581947 26.9173351,48.6848525 26.3335561,50.6919494 C25.7497772,52.6990464 25.4088681,54.3324462 25.3108289,55.592149 L25.2372995,57.4085163 C29.0296346,54.1661122 33.1751337,51.5524507 37.6737968,49.5675316 C42.1724599,47.5826126 46.2934492,46.3118208 50.0367647,45.7551564 C53.7800802,45.1984919 57.2571301,44.8713684 60.4679144,44.7737858 C63.6786988,44.6762031 66.1831551,44.7726769 67.9812834,45.0632069 L70.6784759,45.499002 L70.6784759,57.4051896 L100,33.3765802 L70.6784759,10 Z M76.4438503,62.4883566 L82.8609626,57.1157685 C82.9099822,57.0669772 82.9946524,57.0303837 83.1149733,57.005988 C83.2352941,56.9815924 83.4536542,56.9571967 83.7700535,56.9328011 C84.0864528,56.9084054 84.3905971,56.9449989 84.6824866,57.0425815 C84.9743761,57.1401641 85.217246,57.2854291 85.4110963,57.4783766 C85.6049465,57.671324 85.7263815,57.8409847 85.7754011,57.9873586 L85.8489305,58.2035928 L85.8489305,90 L0,90 L0,17.910845 L43.1784759,17.910845 C43.2765152,17.9596363 43.410205,18.0317143 43.5795455,18.1270792 C43.7488859,18.222444 43.9438503,18.4519849 44.1644385,18.8157019 C44.3850267,19.1794189 44.469697,19.5542249 44.4184492,19.9401198 C44.4184492,20.2794411 44.3092692,20.582169 44.0909091,20.8483034 C43.872549,21.1144378 43.6664439,21.3206919 43.4725936,21.4670659 L43.1818182,21.6134398 C40.557041,23.06609 38.2954545,24.396762 36.3970588,25.6054558 L30.7820856,29.8170326 L11.5274064,29.8170326 L11.5274064,78.1669993 L74.1811497,78.1669993 L74.1811497,65.5355955 C74.1811497,65.1009093 74.3995098,64.6407186 74.8362299,64.1550233 L76.4438503,62.4883566 Z" id="Shape"></path>
  </g>
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-tumblr/icon-tumblr.js":
/*!******************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-tumblr/icon-tumblr.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-tumblr/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconTumblr extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-tumblr', IAIconTumblr);

/* harmony default export */ __webpack_exports__["default"] = (IAIconTumblr);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-tumblr/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-tumblr/index.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="tumblrTitleID tumblrDescID">
  <title id="tumblrTitleID">Tumblr icon</title>
  <desc id="tumblrDescID">A lowercase letter t</desc>
  <path d="m8.50321407 8.54544475v5.32088575c.15641786.0310693.6819176.0310693 1.57649923 0 .8945816-.0310693 1.3574071.0160703 1.3884764.1414189.0942792 1.5695354.1333837 3.2253149.1173133 4.9673385-.0160703 1.7420236-.0316049 3.3426283-.0466039 4.8018141s.2046288 2.824628.6588835 4.0963267c.4542546 1.2716986 1.1999178 2.2209194 2.2369897 2.8476622 1.2556283.784232 2.9896167 1.207953 5.2019653 1.271163 2.2123485.0632099 4.1659648-.2506972 5.8608487-.9417213-.0310693-.3449764-.0230341-1.4045467.0241055-3.1787109.0471397-1.7741643-.0080351-2.75499-.1655244-2.9424772-3.5472571 1.0360005-5.697467.6904885-6.4506298-1.0365361-.7220934-1.6638147-.8635123-4.9909084-.4242566-9.981281v-.046604h6.7318605v-5.32088568h-6.7318605v-6.54383772h-4.0497228c-.2828378 1.28669763-.6122795 2.35376743-.9883252 3.20120941-.3760457.84744199-.98029 1.60060471-1.812733 2.25948817-.832443.65888347-1.87594303 1.01993018-3.1305 1.08314014z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-twitter/icon-twitter.js":
/*!********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-twitter/icon-twitter.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-twitter/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");



class IAIconTwitter extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
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

customElements.define('ia-icon-twitter', IAIconTwitter);

/* harmony default export */ __webpack_exports__["default"] = (IAIconTwitter);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-twitter/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-twitter/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" aria-labelledby="twitterTitleID twitterDescID">
  <title id="twitterTitleID">Twitter icon</title>
  <desc id="twitterDescID">The Twitter logo, a cartoon bird</desc>
  <path d="m31.5297453 8.76273313c-.3135031.40766104-.7447036.83083673-1.2936015 1.26952707-.5488979.4386904-.9169698.7837578-1.1042157 1.0352022.1562166 2.319709-.1417719 4.5297454-.8939653 6.6301092-.7521935 2.1003638-1.8023754 3.9182538-3.1505457 5.45367-1.3481704 1.5354162-2.9627648 2.8284828-4.8437835 3.8791996-1.8810186 1.0507169-3.8321207 1.7483416-5.8533062 2.092874s-4.1215493.2894286-6.30109136-.1653114c-2.17954205-.45474-4.2092874-1.3401455-6.08923604-2.6562165 2.72737.4697196 5.67408517-.2514445 8.8401455-2.1634924-3.0719024-.7521935-4.88979241-2.2881447-5.45367-4.6078537 1.12882516.0631287 1.86550396.0631287 2.21003638 0-2.91568586-1.2850417-4.38904344-3.3693558-4.42007276-6.2529424.21934517.0310293.53284828.1487267.94050931.3530922s.78375775.3060133 1.12829017.3049433c-.81532206-.7211641-1.41076396-1.9045581-1.7863257-3.5501819-.37556173-1.64562376-.17173122-3.17355015.61149155-4.58377912 1.81789001 1.88101862 3.6908838 3.36989086 5.61898138 4.46661672 1.92809757 1.0967259 4.22426707 1.7547614 6.88850847 1.9741066-.2503745-1.1908838-.1722662-2.32719882.2343248-3.40894502.4065911-1.0817462 1.0416221-1.93612241 1.9050931-2.56312861.863471-.62700621 1.8114702-1.0817462 2.8439975-1.36421999 1.0325272-.28247378 2.0827091-.27444896 3.1505456.02407447s1.9767815.87042585 2.726835 1.71570726c1.3791997-.37663172 2.6802911-.87845068 3.9032742-1.50545688-.0310293.37663171-.1407019.74470361-.3290178 1.1042157-.1883158.35951209-.3530922.62593623-.4943291.79927242s-.3841216.4317355-.728654.77519795c-.3445324.34346244-.5638776.57832227-.6580355.70457949.2193452-.09415792.6895998-.23539482 1.410764-.42371067.7211641-.18831586 1.2069334-.39214638 1.4573079-.61149155 0 .44350524-.1567516.86668093-.4702547 1.27434196z" class="fill-color" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-visual-adjustment/icon-visual-adjustment.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-visual-adjustment/icon-visual-adjustment.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/@internetarchive/icon-visual-adjustment/index.js");



class IAIconVisualAdjustment extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
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
    return _index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
}

customElements.define('ia-icon-visual-adjustment', IAIconVisualAdjustment);

/* harmony default export */ __webpack_exports__["default"] = (IAIconVisualAdjustment);


/***/ }),

/***/ "./node_modules/@internetarchive/icon-visual-adjustment/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@internetarchive/icon-visual-adjustment/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
<svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  aria-labelledby="visualAdjustmentTitleID visualAdjustmentDescID"
>
  <title id="visualAdjustmentTitleID">Visual adjustment</title>
  <desc id="visualAdjustmentDescID">A circle with its left hemisphere filled</desc>
  <path class="fill-color" d="m12 0c6.627417 0 12 5.372583 12 12s-5.372583 12-12 12-12-5.372583-12-12 5.372583-12 12-12zm0 2v20l.2664041-.0034797c5.399703-.1412166 9.7335959-4.562751 9.7335959-9.9965203 0-5.5228475-4.4771525-10-10-10z" fill-rule="evenodd" />
</svg>
`);


/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalConfig: function() { return /* reexport safe */ _src_modal_config__WEBPACK_IMPORTED_MODULE_0__.ModalConfig; },
/* harmony export */   ModalManager: function() { return /* reexport safe */ _src_modal_manager__WEBPACK_IMPORTED_MODULE_1__.ModalManager; },
/* harmony export */   ModalManagerHostBridge: function() { return /* reexport safe */ _src_modal_manager_host_bridge__WEBPACK_IMPORTED_MODULE_3__.ModalManagerHostBridge; },
/* harmony export */   ModalManagerMode: function() { return /* reexport safe */ _src_modal_manager_mode__WEBPACK_IMPORTED_MODULE_2__.ModalManagerMode; },
/* harmony export */   ModalTemplate: function() { return /* reexport safe */ _src_modal_template__WEBPACK_IMPORTED_MODULE_4__.ModalTemplate; }
/* harmony export */ });
/* harmony import */ var _src_modal_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/modal-config */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-config.js");
/* harmony import */ var _src_modal_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/modal-manager */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager.js");
/* harmony import */ var _src_modal_manager_mode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/modal-manager-mode */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js");
/* harmony import */ var _src_modal_manager_host_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/modal-manager-host-bridge */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-host-bridge.js");
/* harmony import */ var _src_modal_template__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/modal-template */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-template.js");





//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-config.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-config.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalConfig: function() { return /* binding */ ModalConfig; }
/* harmony export */ });
/**
 * Configuration to show a modal
 *
 * @export
 * @class ModalConfig
 */
class ModalConfig {
    constructor(options) {
        var _a, _b, _c, _d, _e, _f, _g;
        this.title = options === null || options === void 0 ? void 0 : options.title;
        this.subtitle = options === null || options === void 0 ? void 0 : options.subtitle;
        this.headline = options === null || options === void 0 ? void 0 : options.headline;
        this.message = options === null || options === void 0 ? void 0 : options.message;
        this.headerColor = (_a = options === null || options === void 0 ? void 0 : options.headerColor) !== null && _a !== void 0 ? _a : '#55A183';
        this.bodyColor = (_b = options === null || options === void 0 ? void 0 : options.bodyColor) !== null && _b !== void 0 ? _b : '#f5f5f7';
        this.showProcessingIndicator = (_c = options === null || options === void 0 ? void 0 : options.showProcessingIndicator) !== null && _c !== void 0 ? _c : false;
        this.processingImageMode = (_d = options === null || options === void 0 ? void 0 : options.processingImageMode) !== null && _d !== void 0 ? _d : 'complete';
        this.showCloseButton = (_e = options === null || options === void 0 ? void 0 : options.showCloseButton) !== null && _e !== void 0 ? _e : true;
        this.showHeaderLogo = (_f = options === null || options === void 0 ? void 0 : options.showHeaderLogo) !== null && _f !== void 0 ? _f : true;
        this.closeOnBackdropClick = (_g = options === null || options === void 0 ? void 0 : options.closeOnBackdropClick) !== null && _g !== void 0 ? _g : true;
    }
}
//# sourceMappingURL=modal-config.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-host-bridge.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-host-bridge.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalManagerHostBridge: function() { return /* binding */ ModalManagerHostBridge; }
/* harmony export */ });
/* harmony import */ var throttle_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! throttle-debounce */ "./node_modules/throttle-debounce/esm/index.js");
/* harmony import */ var _modal_manager_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-manager-mode */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js");


/**
 * The `ModalManagerHostBridge` is a bridge between the `ModalManager` and the
 * host that sets up environment-specific changes when the modal opens and closes.
 *
 * For instance, when the modal opens, this adds a class to the `<body>` tag for styling
 * and adds a `resize` listener to fix a Safari shadow root issue.
 *
 * Consumers can create their own `ModalManagerHostBridgeInterface` classes and pass
 * them into the `ModalManager` if this one does not work for their environment.
 *
 * @export
 * @class ModalManagerHostBridge
 * @implements {ModalManagerHostBridgeInterface}
 */
class ModalManagerHostBridge {
    constructor(modalManager) {
        this.windowResizeThrottler = (0,throttle_debounce__WEBPACK_IMPORTED_MODULE_0__.throttle)(100, this.updateModalContainerHeight, { noLeading: false, noTrailing: false }).bind(this);
        this.modalManager = modalManager;
    }
    /**
     * Handle the mode change
     *
     * @private
     * @memberof ModalManager
     */
    handleModeChange(mode) {
        switch (mode) {
            case _modal_manager_mode__WEBPACK_IMPORTED_MODULE_1__.ModalManagerMode.Open:
                this.startResizeListener();
                this.stopDocumentScroll();
                break;
            case _modal_manager_mode__WEBPACK_IMPORTED_MODULE_1__.ModalManagerMode.Closed:
                this.stopResizeListener();
                this.resumeDocumentScroll();
                break;
        }
    }
    // This is a workaround for Safari. Safari does not update shadowRoot elements calculated
    // based on the viewport size (ie. `calc(100vh - 10px)`). It does an initial calculation correctly,
    // but resizing the window does not cause the calculation to update. Firefox and Chrome both handle
    // this correctly.
    // It doesn't matter what css variable you set, it is just forcing Safari to do an update.
    // Also note that the value has to change on each update for Safari to do the update,
    // ie. you can't just set a static value.
    updateModalContainerHeight() {
        this.modalManager.style.setProperty('--containerHeight', `${window.innerHeight}px`);
    }
    stopDocumentScroll() {
        document.body.classList.add('modal-manager-open');
    }
    resumeDocumentScroll() {
        document.body.classList.remove('modal-manager-open');
    }
    startResizeListener() {
        window.addEventListener('resize', this.windowResizeThrottler);
    }
    stopResizeListener() {
        window.removeEventListener('resize', this.windowResizeThrottler);
    }
}
//# sourceMappingURL=modal-manager-host-bridge.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalManagerMode: function() { return /* binding */ ModalManagerMode; }
/* harmony export */ });
/**
 * Various modes the modal can be in
 *
 * @export
 * @enum {number}
 */
var ModalManagerMode;
(function (ModalManagerMode) {
    ModalManagerMode["Open"] = "open";
    ModalManagerMode["Closed"] = "closed";
})(ModalManagerMode || (ModalManagerMode = {}));
//# sourceMappingURL=modal-manager-mode.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-manager.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalManager: function() { return /* binding */ ModalManager; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _modal_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-template */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-template.js");
/* harmony import */ var _modal_manager_host_bridge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-manager-host-bridge */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-host-bridge.js");
/* harmony import */ var _modal_manager_mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-manager-mode */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-manager-mode.js");






let ModalManager = class ModalManager extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        /**
         * The current mode of the ModalManager
         *
         * Current options are `modal` or `closed`
         *
         * @type {ModalManagerMode}
         * @memberof ModalManager
         */
        this.mode = _modal_manager_mode__WEBPACK_IMPORTED_MODULE_4__.ModalManagerMode.Closed;
        /**
         * Thie hostBridge handles environmental-specific interactions such as adding classes
         * to the body tag or event listeners needed to support the modal manager in the host environment.
         *
         * There is a default `ModalManagerHostBridge`, but consumers can override it with a custom
         * `ModalManagerHostBridgeInterface`
         *
         * @type {ModalManagerHostBridgeInterface}
         * @memberof ModalManager
         */
        this.hostBridge = new _modal_manager_host_bridge__WEBPACK_IMPORTED_MODULE_3__.ModalManagerHostBridge(this);
        /**
         * Whether the modal should close if the user taps on the backdrop
         *
         * @private
         * @memberof ModalManager
         */
        this.closeOnBackdropClick = true;
    }
    /** @inheritdoc */
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div class="container">
        <div class="backdrop" @click=${this.backdropClicked}></div>
        <modal-template
          @closeButtonPressed=${this.closeButtonPressed}
          tabindex="0"
        >
          ${this.customModalContent}
        </modal-template>
      </div>
    `;
    }
    /** @inheritdoc */
    getMode() {
        return this.mode;
    }
    /** @inheritdoc */
    closeModal() {
        this.mode = _modal_manager_mode__WEBPACK_IMPORTED_MODULE_4__.ModalManagerMode.Closed;
    }
    /**
     * Call the userClosedModalCallback and reset it if it exists
     *
     * @private
     * @memberof ModalManager
     */
    callUserClosedModalCallback() {
        // we assign the callback to a temp var and undefine it before calling it
        // otherwise, we run into the potential for an infinite loop if the
        // callback triggers another `showModal()`, which would execute `userClosedModalCallback`
        const callback = this.userClosedModalCallback;
        this.userClosedModalCallback = undefined;
        if (callback)
            callback();
    }
    /** @inheritdoc */
    showModal(options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.closeOnBackdropClick = options.config.closeOnBackdropClick;
            this.userClosedModalCallback = options.userClosedModalCallback;
            this.modalTemplate.config = options.config;
            this.customModalContent = options.customModalContent;
            this.mode = _modal_manager_mode__WEBPACK_IMPORTED_MODULE_4__.ModalManagerMode.Open;
            yield this.modalTemplate.updateComplete;
            this.modalTemplate.focus();
        });
    }
    /** @inheritdoc */
    updated(changed) {
        /* istanbul ignore else */
        if (changed.has('mode')) {
            this.handleModeChange();
        }
    }
    /**
     * Called when the backdrop is clicked
     *
     * @private
     * @memberof ModalManager
     */
    backdropClicked() {
        if (this.closeOnBackdropClick) {
            this.closeModal();
            this.callUserClosedModalCallback();
        }
    }
    /**
     * Handle the mode change
     *
     * @private
     * @memberof ModalManager
     */
    handleModeChange() {
        this.hostBridge.handleModeChange(this.mode);
        this.emitModeChangeEvent();
    }
    /**
     * Emit a modeChange event
     *
     * @private
     * @memberof ModalManager
     */
    emitModeChangeEvent() {
        const event = new CustomEvent('modeChanged', {
            detail: { mode: this.mode },
        });
        this.dispatchEvent(event);
    }
    /**
     * Called when the modal close button is pressed. Closes the modal.
     *
     * @private
     * @memberof ModalManager
     */
    closeButtonPressed() {
        this.closeModal();
        this.callUserClosedModalCallback();
    }
    /** @inheritdoc */
    static get styles() {
        const modalBackdropColor = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalBackdropColor, rgba(10, 10, 10, 0.9))`;
        const modalBackdropZindex = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalBackdropZindex, 1000)`;
        const modalWidth = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalWidth, 32rem)`;
        const modalMaxWidth = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalMaxWidth, 95%)`;
        const modalZindex = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalZindex, 2000)`;
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
      .container {
        width: 100%;
        height: 100%;
      }

      .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        background-color: ${modalBackdropColor};
        width: 100%;
        height: 100%;
        z-index: ${modalBackdropZindex};
      }

      modal-template {
        outline: 0;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        z-index: ${modalZindex};
        width: ${modalWidth};
        max-width: ${modalMaxWidth};
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: String, reflect: true })
], ModalManager.prototype, "mode", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Object })
], ModalManager.prototype, "customModalContent", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Object })
], ModalManager.prototype, "hostBridge", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.query)('modal-template')
], ModalManager.prototype, "modalTemplate", void 0);
ModalManager = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('modal-manager')
], ModalManager);

//# sourceMappingURL=modal-manager.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/modal-manager/dist/src/modal-template.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/modal-manager/dist/src/modal-template.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModalTemplate: function() { return /* binding */ ModalTemplate; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var _internetarchive_ia_activity_indicator_ia_activity_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internetarchive/ia-activity-indicator/ia-activity-indicator */ "./node_modules/@internetarchive/ia-activity-indicator/ia-activity-indicator.js");
/* harmony import */ var _internetarchive_icon_close_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/icon-close/index.js */ "./node_modules/@internetarchive/icon-close/index.js");
/* harmony import */ var _internetarchive_icon_ia_logo_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internetarchive/icon-ia-logo/index.js */ "./node_modules/@internetarchive/icon-ia-logo/index.js");
/* harmony import */ var _modal_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-config */ "./node_modules/@internetarchive/modal-manager/dist/src/modal-config.js");







let ModalTemplate = class ModalTemplate extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
    constructor() {
        super(...arguments);
        /**
         * The ModalConfig that displayed the template
         *
         * @type {ModalConfig}
         * @memberof ModalTemplate
         */
        this.config = new _modal_config__WEBPACK_IMPORTED_MODULE_5__.ModalConfig();
    }
    /** @inheritdoc */
    render() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <div class="modal-wrapper">
        <div class="modal-container">
          <header style="background-color: ${this.config.headerColor}">
            ${this.config.showCloseButton ? this.closeButtonTemplate : ''}
            ${this.config.showHeaderLogo
            ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<div class="logo-icon">${_internetarchive_icon_ia_logo_index_js__WEBPACK_IMPORTED_MODULE_4__["default"]}</div>`
            : lit__WEBPACK_IMPORTED_MODULE_0__.nothing}
            ${this.config.title
            ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<h1 class="title">${this.config.title}</h1>`
            : ''}
            ${this.config.subtitle
            ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `<h2 class="subtitle">${this.config.subtitle}</h2>`
            : ''}
          </header>
          <section
            class="modal-body"
            style="background-color: ${this.config.bodyColor}"
          >
            <div class="content">
              <div
                class="processing-logo ${this.config.showProcessingIndicator
            ? ''
            : 'hidden'}"
              >
                <ia-activity-indicator
                  .mode=${this.config.processingImageMode}
                ></ia-activity-indicator>
              </div>
              ${this.config.headline
            ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) ` <h1 class="headline">${this.config.headline}</h1> `
            : ''}
              ${this.config.message
            ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) ` <p class="message">${this.config.message}</p> `
            : ''}

              <div class="slot-container">
                <slot> </slot>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
    }
    /**
     * Dispatch the `closeButtonPressed` event to the consumer
     *
     * @private
     * @memberof ModalTemplate
     */
    handleCloseButton() {
        const event = new Event('closeButtonPressed');
        this.dispatchEvent(event);
    }
    /**
     * The close button template
     *
     * @readonly
     * @private
     * @type {TemplateResult}
     * @memberof ModalTemplate
     */
    get closeButtonTemplate() {
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html) `
      <button
        type="button"
        class="close-button"
        tabindex="0"
        @click=${this.handleCloseButton}
      >
        ${_internetarchive_icon_close_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]}
      </button>
    `;
    }
    /** @inheritdoc */
    static get styles() {
        const modalLogoSize = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalLogoSize, 6.5rem)`;
        const processingImageSize = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--processingImageSize, 7.5rem)`;
        const modalCornerRadius = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalCornerRadius, 1rem)`;
        const modalBorder = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalBorder, 2px solid black)`;
        // if the content of the modal is too big to fit on screen, this sets the bottom margin
        // it's not exact, but a close estimation
        const modalBottomMarginCss = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalBottomMargin, 2.5rem)`;
        const modalTopMarginCss = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalTopMargin, 5rem)`;
        const modalHeaderBottomPaddingCss = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalHeaderBottomPadding, 0.5em)`;
        const modalBottomPadding = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalBottomPadding, 2rem)`;
        const scrollOffset = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalScrollOffset, 5px)`;
        const titleFontSize = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalTitleFontSize, 1.8rem)`;
        const subtitleFontSize = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalSubtitleFontSize, 1.4rem)`;
        const headlineFontSize = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalHeadlineFontSize, 1.6rem)`;
        const messageFontSize = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalMessageFontSize, 1.4rem)`;
        const titleLineHeight = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalTitleLineHeight, normal)`;
        const subtitleLineHeight = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalSubtitleLineHeight, normal)`;
        const headlineLineHeight = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalHeadlineLineHeight, normal)`;
        const messageLineHeight = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `var(--modalMessageLineHeight, normal)`;
        return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css) `
      .processing-logo {
        margin: auto;
        width: ${processingImageSize};
        height: ${processingImageSize};
      }

      .processing-logo.hidden {
        height: 1rem;
      }

      .processing-logo.hidden ia-activity-indicator {
        display: none;
      }

      .modal-wrapper {
        outline: none;
      }

      .modal-container {
        border-radius: ${modalCornerRadius};
        width: 100%;
        margin-top: ${modalTopMarginCss};
      }

      header {
        position: relative;
        background-color: #36a483;
        color: white;
        border-radius: calc(${modalCornerRadius}) calc(${modalCornerRadius}) 0 0;
        border: ${modalBorder};
        border-bottom: 0;
        text-align: center;
        padding-bottom: ${modalHeaderBottomPaddingCss};
      }

      .title {
        margin: 0;
        padding: 0;
        font-size: ${titleFontSize};
        font-weight: bold;
        line-height: ${titleLineHeight};
      }

      .subtitle {
        margin: 0;
        padding: 0;
        font-weight: normal;
        padding-top: 0;
        font-size: ${subtitleFontSize};
        line-height: ${subtitleLineHeight};
      }

      .modal-body {
        background-color: #f5f5f7;
        border-radius: 0 0 calc(${modalCornerRadius}) calc(${modalCornerRadius});
        border: ${modalBorder};
        border-top: 0;
        padding: 0 1rem calc(${modalBottomPadding} - ${scrollOffset}) 1rem;
        color: #333;
        margin-bottom: 2.5rem;
        min-height: 5rem;
      }

      .content {
        overflow-y: auto;
        max-height: calc(100vh - (16.5rem + ${modalBottomMarginCss}));
        min-height: 5rem;
        padding: 0 0 calc(${scrollOffset}) 0;
      }

      .headline {
        font-size: ${headlineFontSize};
        font-weight: bold;
        text-align: center;
        line-height: ${headlineLineHeight};
        margin: 0;
        padding: 0;
      }

      .message {
        margin: 1rem 0 0 0;
        text-align: center;
        font-size: ${messageFontSize};
        line-height: ${messageLineHeight};
      }

      .logo-icon {
        border-radius: 100%;
        border: 3px solid #fff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 2px 2px 0 rgba(0, 0, 0, 0.08);
        width: ${modalLogoSize};
        height: ${modalLogoSize};
        margin: -2.9rem auto 0.5rem auto;
        background-color: black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo-icon svg {
        width: calc(${modalLogoSize} * 0.65);
        height: calc(${modalLogoSize} * 0.65);
      }

      .logo-icon svg .fill-color {
        fill: white;
      }

      .logo-icon svg .stroke-color {
        stroke: red;
      }

      .close-button {
        position: absolute;
        right: 1.2rem;
        top: 1.2rem;
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
        border: 0;
        padding: 0;
        cursor: pointer;
        background-color: white;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.18),
          0 4px 4px 0 rgba(0, 0, 0, 0.08);
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }

      slot::slotted(.sr-only) {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
      }
    `;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.property)({ type: Object })
], ModalTemplate.prototype, "config", void 0);
ModalTemplate = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.customElement)('modal-template')
], ModalTemplate);

//# sourceMappingURL=modal-template.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanField: function() { return /* reexport safe */ _src_models_metadata_fields_field_types_boolean__WEBPACK_IMPORTED_MODULE_6__.BooleanField; },
/* harmony export */   ByteField: function() { return /* reexport safe */ _src_models_metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_7__.ByteField; },
/* harmony export */   DateField: function() { return /* reexport safe */ _src_models_metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_3__.DateField; },
/* harmony export */   DefaultSearchBackend: function() { return /* reexport safe */ _src_search_backend_default_search_backend__WEBPACK_IMPORTED_MODULE_14__.DefaultSearchBackend; },
/* harmony export */   DurationField: function() { return /* reexport safe */ _src_models_metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_8__.DurationField; },
/* harmony export */   File: function() { return /* reexport safe */ _src_models_file__WEBPACK_IMPORTED_MODULE_1__.File; },
/* harmony export */   MediaTypeField: function() { return /* reexport safe */ _src_models_metadata_fields_field_types_mediatype__WEBPACK_IMPORTED_MODULE_10__.MediaTypeField; },
/* harmony export */   Metadata: function() { return /* reexport safe */ _src_models_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata; },
/* harmony export */   MetadataField: function() { return /* reexport safe */ _src_models_metadata_fields_metadata_field__WEBPACK_IMPORTED_MODULE_11__.MetadataField; },
/* harmony export */   MetadataResponse: function() { return /* reexport safe */ _src_responses_metadata_metadata_response__WEBPACK_IMPORTED_MODULE_12__.MetadataResponse; },
/* harmony export */   NumberField: function() { return /* reexport safe */ _src_models_metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_4__.NumberField; },
/* harmony export */   PageProgressionField: function() { return /* reexport safe */ _src_models_metadata_fields_field_types_page_progression__WEBPACK_IMPORTED_MODULE_9__.PageProgressionField; },
/* harmony export */   Review: function() { return /* reexport safe */ _src_models_review__WEBPACK_IMPORTED_MODULE_2__.Review; },
/* harmony export */   SearchParams: function() { return /* reexport safe */ _src_search_params__WEBPACK_IMPORTED_MODULE_16__.SearchParams; },
/* harmony export */   SearchResponse: function() { return /* reexport safe */ _src_responses_search_search_response__WEBPACK_IMPORTED_MODULE_13__.SearchResponse; },
/* harmony export */   SearchService: function() { return /* reexport safe */ _src_search_service__WEBPACK_IMPORTED_MODULE_15__.SearchService; },
/* harmony export */   StringField: function() { return /* reexport safe */ _src_models_metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_5__.StringField; }
/* harmony export */ });
/* harmony import */ var _src_models_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/models/metadata */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata.js");
/* harmony import */ var _src_models_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/models/file */ "./node_modules/@internetarchive/search-service/dist/src/models/file.js");
/* harmony import */ var _src_models_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/models/review */ "./node_modules/@internetarchive/search-service/dist/src/models/review.js");
/* harmony import */ var _src_models_metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/date */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/date.js");
/* harmony import */ var _src_models_metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/number */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/number.js");
/* harmony import */ var _src_models_metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/string */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/string.js");
/* harmony import */ var _src_models_metadata_fields_field_types_boolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/boolean */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/boolean.js");
/* harmony import */ var _src_models_metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/byte */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/byte.js");
/* harmony import */ var _src_models_metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/duration */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/duration.js");
/* harmony import */ var _src_models_metadata_fields_field_types_page_progression__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/page-progression */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/page-progression.js");
/* harmony import */ var _src_models_metadata_fields_field_types_mediatype__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/models/metadata-fields/field-types/mediatype */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/mediatype.js");
/* harmony import */ var _src_models_metadata_fields_metadata_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/models/metadata-fields/metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");
/* harmony import */ var _src_responses_metadata_metadata_response__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/responses/metadata/metadata-response */ "./node_modules/@internetarchive/search-service/dist/src/responses/metadata/metadata-response.js");
/* harmony import */ var _src_responses_search_search_response__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/responses/search/search-response */ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response.js");
/* harmony import */ var _src_search_backend_default_search_backend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/search-backend/default-search-backend */ "./node_modules/@internetarchive/search-service/dist/src/search-backend/default-search-backend.js");
/* harmony import */ var _src_search_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/search-service */ "./node_modules/@internetarchive/search-service/dist/src/search-service.js");
/* harmony import */ var _src_search_params__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/search-params */ "./node_modules/@internetarchive/search-service/dist/src/search-params.js");

















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/file.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/file.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   File: function() { return /* binding */ File; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");

/**
 * This represents an Internet Archive File
 *
 * @export
 * @class File
 */
class File {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(json) {
        this.name = json.name;
        this.source = json.source;
        this.btih = json.btih;
        this.md5 = json.md5;
        this.format = json.format;
        this.mtime = json.mtime;
        this.crc32 = json.crc32;
        this.sha1 = json.sha1;
        this.original = json.original;
        this.title = json.title;
        this.length = json.length
            ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DurationParser.shared.parseValue(json.length)
            : undefined;
        this.size = json.size ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.ByteParser.shared.parseValue(json.size) : undefined;
        this.height = json.height
            ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared.parseValue(json.height)
            : undefined;
        this.width = json.width
            ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared.parseValue(json.width)
            : undefined;
        this.track = json.track
            ? _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared.parseValue(json.track)
            : undefined;
        this.external_identifier = json['external-identifier'];
        this.creator = json.creator;
        this.album = json.album;
    }
}
//# sourceMappingURL=file.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/boolean.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/boolean.js ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanField: function() { return /* binding */ BooleanField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class BooleanField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.BooleanParser.shared, rawValue);
    }
}
//# sourceMappingURL=boolean.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/byte.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/byte.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ByteField: function() { return /* binding */ ByteField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


/**
 * ByteField is a unit-specific number field that
 * returns a value in bytes
 *
 * @export
 * @class ByteField
 * @extends {MetadataField<Byte, ByteParser>}
 */
class ByteField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.ByteParser.shared, rawValue);
    }
}
//# sourceMappingURL=byte.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/date.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/date.js ***!
  \**********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateField: function() { return /* binding */ DateField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class DateField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DateParser.shared, rawValue);
    }
}
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/duration.js":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/duration.js ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DurationField: function() { return /* binding */ DurationField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


/**
 * The DurationField parses different duration formats
 * and returns a `Duration`, which is a number in seconds
 * with decimals.
 *
 * @export
 * @class DurationField
 * @extends {MetadataField<Duration, DurationParser>}
 */
class DurationField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DurationParser.shared, rawValue);
    }
}
//# sourceMappingURL=duration.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/mediatype.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/mediatype.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MediaTypeField: function() { return /* binding */ MediaTypeField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class MediaTypeField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.MediaTypeParser.shared, rawValue);
    }
}
//# sourceMappingURL=mediatype.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/number.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/number.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NumberField: function() { return /* binding */ NumberField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class NumberField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.NumberParser.shared, rawValue);
    }
}
//# sourceMappingURL=number.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/page-progression.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/page-progression.js ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageProgressionField: function() { return /* binding */ PageProgressionField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class PageProgressionField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.PageProgressionParser.shared, rawValue);
    }
}
//# sourceMappingURL=page-progression.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/string.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/string.js ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringField: function() { return /* binding */ StringField; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* harmony import */ var _metadata_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../metadata-field */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js");


class StringField extends _metadata_field__WEBPACK_IMPORTED_MODULE_1__.MetadataField {
    constructor(rawValue) {
        super(_internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.StringParser.shared, rawValue);
    }
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/metadata-field.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataField: function() { return /* binding */ MetadataField; }
/* harmony export */ });
/**
 * The MetadataField is responsible for three things:
 * 1. Take in some raw data (strings, arrays, numbers, etc)
 * 2. Normalize the input to an array of the input,
 *    ie. [string, string], [number, number], [Date, Date], etc
 * 3. Cast the values to their expected `Type`
 *
 * This class gets instiated with a `Type` and a parser of that type. For instance, the
 * `DateField` is a subclass of `MetadataField` with a `Type` of `Date` and a `DateParser`.
 *
 * When using a `DateField`, you can pass it a string date and it will cast it to a javascript Date,
 * ie:
 *
 * ```
 * const dateField = new DateField('2020-02-13')
 * dateField.value = Date(2020-02-13) // native javascript Date object
 * dateField.values = [Date(2020-02-13)] // the normalized array of values
 * dateField.rawValue = '2020-02-13' // the raw string that was passed in
 * ```
 *
 * @class MetadataField
 * @template Type The type of metadata this is (string, number, Date, etc)
 * @template FieldParserInterfaceType The parser for that type (StringParser, NumberParser, etc)
 */
class MetadataField {
    constructor(parser, rawValue) {
        /**
         * The array of all values for the field.
         *
         * Many fields only contain a single value and
         * can be accessed via the `.value` getter
         *
         * @type {Type[]}
         * @memberof MetadataField
         */
        this.values = [];
        this.parser = parser;
        this.rawValue = rawValue;
        this.processRawValue();
    }
    /**
     * The first value if there are multiple or the only value if there is one
     *
     * @readonly
     * @type {(Type | undefined)}
     * @memberof MetadataField
     */
    get value() {
        return this.values.length > 0 ? this.values[0] : undefined;
    }
    processRawValue() {
        if (this.rawValue === undefined) {
            return;
        }
        if (Array.isArray(this.rawValue)) {
            this.rawValue.forEach(value => {
                this.parseAndPersistValue(value);
            });
        }
        else {
            this.parseAndPersistValue(this.rawValue);
        }
    }
    parseAndPersistValue(value) {
        const parsedValue = this.parser.parseValue(value);
        if (parsedValue !== undefined) {
            this.values.push(parsedValue);
        }
    }
}
//# sourceMappingURL=metadata-field.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/metadata.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/metadata.js ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Metadata: function() { return /* binding */ Metadata; }
/* harmony export */ });
/* harmony import */ var _metadata_fields_field_types_boolean__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metadata-fields/field-types/boolean */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/boolean.js");
/* harmony import */ var _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata-fields/field-types/date */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/date.js");
/* harmony import */ var _metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata-fields/field-types/duration */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/duration.js");
/* harmony import */ var _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata-fields/field-types/number */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/number.js");
/* harmony import */ var _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata-fields/field-types/string */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/string.js");
/* harmony import */ var _metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metadata-fields/field-types/byte */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/byte.js");
/* harmony import */ var _metadata_fields_field_types_mediatype__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata-fields/field-types/mediatype */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata-fields/field-types/mediatype.js");
/* eslint-disable @typescript-eslint/no-explicit-any */







/**
 * Metadata is an expansive model that describes an Item.
 *
 * The fields in here get casted to their respective field types. See `metadata-fields/field-type`.
 *
 * Add additional fields as needed.
 *
 * @export
 * @class Metadata
 */
class Metadata {
    constructor(json) {
        this.rawMetadata = json;
        this.identifier = json.identifier;
        this.addeddate = json.addeddate ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.addeddate) : undefined;
        this.publicdate = json.publicdate
            ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.publicdate)
            : undefined;
        this.indexdate = json.indexdate ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.indexdate) : undefined;
        this.audio_codec = json.audio_codec
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.audio_codec)
            : undefined;
        this.audio_sample_rate = json.audio_sample_rate
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.audio_sample_rate)
            : undefined;
        this.collection = json.collection
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.collection)
            : undefined;
        this.collections_raw = json.collections_raw
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.collections_raw)
            : undefined;
        this.collection_size = json.collection_size
            ? new _metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_5__.ByteField(json.collection_size)
            : undefined;
        this.contributor = json.contributor
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.contributor)
            : undefined;
        this.coverage = json.coverage ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.coverage) : undefined;
        this.creator = json.creator ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.creator) : undefined;
        this.date = json.date ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.date) : undefined;
        this.description = json.description
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.description)
            : undefined;
        this.downloads = json.downloads
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.downloads)
            : undefined;
        this.duration = json.duration
            ? new _metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_2__.DurationField(json.duration)
            : undefined;
        this.files_count = json.files_count
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.files_count)
            : undefined;
        this.item_count = json.item_count
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.item_count)
            : undefined;
        this.item_size = json.item_size ? new _metadata_fields_field_types_byte__WEBPACK_IMPORTED_MODULE_5__.ByteField(json.item_size) : undefined;
        this.language = json.language ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.language) : undefined;
        this.length = json.length ? new _metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_2__.DurationField(json.length) : undefined;
        this.lineage = json.lineage ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.lineage) : undefined;
        this.mediatype = json.mediatype
            ? new _metadata_fields_field_types_mediatype__WEBPACK_IMPORTED_MODULE_6__.MediaTypeField(json.mediatype)
            : undefined;
        this.month = json.month ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.month) : undefined;
        this.noindex = json.noindex ? new _metadata_fields_field_types_boolean__WEBPACK_IMPORTED_MODULE_0__.BooleanField(json.noindex) : undefined;
        this.notes = json.notes ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.notes) : undefined;
        this.num_favorites = json.num_favorites
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.num_favorites)
            : undefined;
        this.num_reviews = json.num_reviews
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.num_reviews)
            : undefined;
        this.runtime = json.runtime ? new _metadata_fields_field_types_duration__WEBPACK_IMPORTED_MODULE_2__.DurationField(json.runtime) : undefined;
        this.scanner = json.scanner ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.scanner) : undefined;
        this.source = json.source ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.source) : undefined;
        this.start_localtime = json.start_localtime
            ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.start_localtime)
            : undefined;
        this.start_time = json.start_time
            ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.start_time)
            : undefined;
        this.stop_time = json.stop_time ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.stop_time) : undefined;
        this.subject = json.subject ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.subject) : undefined;
        this.taper = json.taper ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.taper) : undefined;
        this.title = json.title ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.title) : undefined;
        this.track = json.track ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.track) : undefined;
        this.transferer = json.transferer
            ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.transferer)
            : undefined;
        this.type = json.type ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.type) : undefined;
        this.uploader = json.uploader ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.uploader) : undefined;
        this.utc_offset = json.utc_offset
            ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.utc_offset)
            : undefined;
        this.venue = json.venue ? new _metadata_fields_field_types_string__WEBPACK_IMPORTED_MODULE_4__.StringField(json.venue) : undefined;
        this.week = json.week ? new _metadata_fields_field_types_number__WEBPACK_IMPORTED_MODULE_3__.NumberField(json.week) : undefined;
        this.year = json.year ? new _metadata_fields_field_types_date__WEBPACK_IMPORTED_MODULE_1__.DateField(json.year) : undefined;
    }
}
//# sourceMappingURL=metadata.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/models/review.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/models/review.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Review: function() { return /* binding */ Review; }
/* harmony export */ });
/* harmony import */ var _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/field-parsers */ "./node_modules/@internetarchive/field-parsers/dist/index.js");
/* eslint-disable @typescript-eslint/no-explicit-any */

class Review {
    constructor(json) {
        this.reviewbody = json.reviewbody;
        this.reviewtitle = json.reviewtitle;
        this.reviewer = json.reviewer;
        this.reviewdate = _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DateParser.shared.parseValue(json.reviewdate);
        this.createdate = _internetarchive_field_parsers__WEBPACK_IMPORTED_MODULE_0__.DateParser.shared.parseValue(json.createdate);
        this.stars = json.stars ? parseFloat(json.stars) : undefined;
    }
}
//# sourceMappingURL=review.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/responses/metadata/metadata-response.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/responses/metadata/metadata-response.js ***!
  \*******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MetadataResponse: function() { return /* binding */ MetadataResponse; }
/* harmony export */ });
/* harmony import */ var _models_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/file */ "./node_modules/@internetarchive/search-service/dist/src/models/file.js");
/* harmony import */ var _models_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/metadata */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata.js");
/* harmony import */ var _models_review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/review */ "./node_modules/@internetarchive/search-service/dist/src/models/review.js");
/* eslint-disable @typescript-eslint/no-explicit-any */



/**
 * The main top-level reponse when fetching Metadata
 *
 * @export
 * @class MetadataResponse
 */
class MetadataResponse {
    constructor(json) {
        var _a, _b;
        this.rawResponse = json;
        this.created = json.created;
        this.d1 = json.d1;
        this.d2 = json.d2;
        this.dir = json.dir;
        this.files = (_a = json.files) === null || _a === void 0 ? void 0 : _a.map((file) => new _models_file__WEBPACK_IMPORTED_MODULE_0__.File(file));
        this.files_count = json.files_count;
        this.item_last_updated = json.item_last_updated;
        this.item_size = json.item_size;
        this.metadata = new _models_metadata__WEBPACK_IMPORTED_MODULE_1__.Metadata(json.metadata);
        this.server = json.server;
        this.uniq = json.uniq;
        this.workable_servers = json.workable_servers;
        this.speech_vs_music_asr = json.speech_vs_music_asr;
        this.reviews = (_b = json.reviews) === null || _b === void 0 ? void 0 : _b.map((entry) => new _models_review__WEBPACK_IMPORTED_MODULE_2__.Review(entry));
    }
}
//# sourceMappingURL=metadata-response.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response-details.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response-details.js ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResponseDetails: function() { return /* binding */ SearchResponseDetails; }
/* harmony export */ });
/* harmony import */ var _models_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/metadata */ "./node_modules/@internetarchive/search-service/dist/src/models/metadata.js");

/**
 * This is the search response details inside the SearchResponse object that contains
 * the search results, under the `docs` key.
 *
 * @export
 * @class Response
 */
class SearchResponseDetails {
    constructor(json) {
        this.numFound = json.numFound;
        this.start = json.start;
        this.docs = json.docs.map((doc) => new _models_metadata__WEBPACK_IMPORTED_MODULE_0__.Metadata(doc));
        this.aggregations = json.aggregations;
    }
}
//# sourceMappingURL=search-response-details.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchResponse: function() { return /* binding */ SearchResponse; }
/* harmony export */ });
/* harmony import */ var _search_response_details__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-response-details */ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response-details.js");

/**
 * The top-level response model when retrieving a response from the advanced search endpoint.
 *
 * @export
 * @class SearchResponse
 */
class SearchResponse {
    constructor(json) {
        this.rawResponse = json;
        this.responseHeader = json.responseHeader;
        this.response = new _search_response_details__WEBPACK_IMPORTED_MODULE_0__.SearchResponseDetails(json.response);
    }
}
//# sourceMappingURL=search-response.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/search-backend/default-search-backend.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/search-backend/default-search-backend.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultSearchBackend: function() { return /* binding */ DefaultSearchBackend; }
/* harmony export */ });
/* harmony import */ var _search_service_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../search-service-error */ "./node_modules/@internetarchive/search-service/dist/src/search-service-error.js");

/**
 * The DefaultSearchBackend performs a `window.fetch` request to archive.org
 */
class DefaultSearchBackend {
    constructor(baseUrl = 'archive.org') {
        this.baseUrl = baseUrl;
    }
    async performSearch(params) {
        const urlSearchParam = params.asUrlSearchParams;
        const queryAsString = urlSearchParam.toString();
        const url = `https://${this.baseUrl}/advancedsearch.php?${queryAsString}`;
        return this.fetchUrl(url);
    }
    async fetchMetadata(identifier) {
        const url = `https://${this.baseUrl}/metadata/${identifier}`;
        return this.fetchUrl(url);
    }
    async fetchUrl(url) {
        let response;
        // first try the fetch and return a networkError if it fails
        try {
            response = await fetch(url);
        }
        catch (err) {
            const message = err instanceof Error ? err.message : err;
            return this.getErrorResult(_search_service_error__WEBPACK_IMPORTED_MODULE_0__.SearchServiceErrorType.networkError, message);
        }
        // then try json decoding and return a decodingError if it fails
        try {
            const json = await response.json();
            // the advanced search endpoint doesn't return an HTTP Error 400
            // and instead returns an HTTP 200 with an `error` key in the payload
            const error = json['error'];
            if (error) {
                const forensics = json['forensics'];
                return this.getErrorResult(_search_service_error__WEBPACK_IMPORTED_MODULE_0__.SearchServiceErrorType.searchEngineError, error, forensics);
            }
            else {
                // success
                return { success: json };
            }
        }
        catch (err) {
            const message = err instanceof Error ? err.message : err;
            return this.getErrorResult(_search_service_error__WEBPACK_IMPORTED_MODULE_0__.SearchServiceErrorType.decodingError, message);
        }
    }
    getErrorResult(errorType, message, details) {
        const error = new _search_service_error__WEBPACK_IMPORTED_MODULE_0__.SearchServiceError(errorType, message, details);
        const result = { error };
        return result;
    }
}
//# sourceMappingURL=default-search-backend.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/search-params.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/search-params.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AggregateSearchParams: function() { return /* binding */ AggregateSearchParams; },
/* harmony export */   SearchParams: function() { return /* binding */ SearchParams; },
/* harmony export */   SortDirection: function() { return /* binding */ SortDirection; },
/* harmony export */   SortParam: function() { return /* binding */ SortParam; }
/* harmony export */ });
class AggregateSearchParams {
    constructor(searchParams) {
        this.searchParams = searchParams;
    }
    /**
     * Generates a query parameter from the given aggregate search params
     *
     * Example:
     *
     * [
     *  {
     *    "terms": {
     *      "field": "collection",
     *      "size":10
     *    }
     *  },
     *  {
     *    "terms": {
     *      "field": "subjectSorter",
     *      "size": 10
     *    }
     *  }
     * ]
     *
     * @returns {Record<string, AggregateSearchParam>[]}
     * @memberof AggregateSearchParams
     */
    get asSearchParams() {
        return this.searchParams.map(param => {
            return {
                terms: param,
            };
        });
    }
}
var SortDirection;
(function (SortDirection) {
    SortDirection["Asc"] = "asc";
    SortDirection["Desc"] = "desc";
})(SortDirection || (SortDirection = {}));
class SortParam {
    constructor(field, direction) {
        this.field = field;
        this.direction = direction;
    }
    get asString() {
        return `${this.field} ${this.direction}`;
    }
}
/**
 * SearchParams provides an encapsulation to all of the search parameters
 * available for searching.
 *
 * It also provides an `asUrlSearchParams` method for converting the
 * parameters to an IA-style query string. ie. it converts the `fields` array
 * to `fl=identifier,collection` and `sort` to `sort=date+desc,downloads+asc`
 */
class SearchParams {
    constructor(options) {
        this.query = options.query;
        this.sort = options.sort;
        this.rows = options.rows;
        this.page = options.page;
        this.fields = options.fields;
        this.aggregations = options.aggregations;
    }
    /**
     * Return a URLSearchParams representation of the parameters for use in network requests.
     *
     * @readonly
     * @type {URLSearchParams}
     * @memberof SearchParams
     */
    get asUrlSearchParams() {
        const params = new URLSearchParams();
        params.append('q', this.query);
        params.append('output', 'json');
        if (this.rows) {
            params.append('rows', String(this.rows));
        }
        if (this.page) {
            params.append('page', String(this.page));
        }
        if (this.fields) {
            params.append('fl', this.fields.join(','));
        }
        if (this.sort) {
            const sortStrings = this.sort.map(sort => sort.asString);
            params.append('sort', sortStrings.join(','));
        }
        if (this.aggregations) {
            const searchParams = this.aggregations.asSearchParams;
            const stringified = JSON.stringify(searchParams);
            params.append('user_aggs', stringified);
        }
        return params;
    }
}
//# sourceMappingURL=search-params.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/search-service-error.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/search-service-error.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchServiceError: function() { return /* binding */ SearchServiceError; },
/* harmony export */   SearchServiceErrorType: function() { return /* binding */ SearchServiceErrorType; }
/* harmony export */ });
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
var SearchServiceErrorType;
(function (SearchServiceErrorType) {
    SearchServiceErrorType["networkError"] = "SearchService.NetworkError";
    SearchServiceErrorType["itemNotFound"] = "SearchService.ItemNotFound";
    SearchServiceErrorType["decodingError"] = "SearchService.DecodingError";
    SearchServiceErrorType["searchEngineError"] = "SearchService.SearchEngineError";
})(SearchServiceErrorType || (SearchServiceErrorType = {}));
class SearchServiceError extends Error {
    constructor(type, message, details) {
        super(message);
        this.name = type;
        this.type = type;
        this.details = details;
    }
}
//# sourceMappingURL=search-service-error.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/search-service/dist/src/search-service.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@internetarchive/search-service/dist/src/search-service.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchService: function() { return /* binding */ SearchService; }
/* harmony export */ });
/* harmony import */ var _responses_search_search_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./responses/search/search-response */ "./node_modules/@internetarchive/search-service/dist/src/responses/search/search-response.js");
/* harmony import */ var _responses_metadata_metadata_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responses/metadata/metadata-response */ "./node_modules/@internetarchive/search-service/dist/src/responses/metadata/metadata-response.js");
/* harmony import */ var _search_backend_default_search_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-backend/default-search-backend */ "./node_modules/@internetarchive/search-service/dist/src/search-backend/default-search-backend.js");
/* harmony import */ var _search_service_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-service-error */ "./node_modules/@internetarchive/search-service/dist/src/search-service-error.js");




/**
 * The Search Service is responsible for taking the raw response provided by
 * the Search Backend and modeling it as a `SearchResponse` or `MetadataResponse`
 * object, depending on the type of response.
 */
class SearchService {
    constructor(searchBackend) {
        this.searchBackend = searchBackend;
    }
    /** @inheritdoc */
    async search(params) {
        const rawResponse = await this.searchBackend.performSearch(params);
        if (rawResponse.error) {
            return rawResponse;
        }
        const modeledResponse = new _responses_search_search_response__WEBPACK_IMPORTED_MODULE_0__.SearchResponse(rawResponse.success);
        return { success: modeledResponse };
    }
    /** @inheritdoc */
    async fetchMetadata(identifier) {
        var _a;
        const rawResponse = await this.searchBackend.fetchMetadata(identifier);
        if (rawResponse.error) {
            return rawResponse;
        }
        if (((_a = rawResponse.success) === null || _a === void 0 ? void 0 : _a.metadata) === undefined) {
            return {
                error: new _search_service_error__WEBPACK_IMPORTED_MODULE_3__.SearchServiceError(_search_service_error__WEBPACK_IMPORTED_MODULE_3__.SearchServiceErrorType.itemNotFound),
            };
        }
        const modeledResponse = new _responses_metadata_metadata_response__WEBPACK_IMPORTED_MODULE_1__.MetadataResponse(rawResponse.success);
        return { success: modeledResponse };
    }
}
SearchService.default = new SearchService(new _search_backend_default_search_backend__WEBPACK_IMPORTED_MODULE_2__.DefaultSearchBackend());
//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/shared-resize-observer/dist/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@internetarchive/shared-resize-observer/dist/index.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedResizeObserver: function() { return /* reexport safe */ _src_shared_resize_observer__WEBPACK_IMPORTED_MODULE_0__.SharedResizeObserver; }
/* harmony export */ });
/* harmony import */ var _src_shared_resize_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/shared-resize-observer */ "./node_modules/@internetarchive/shared-resize-observer/dist/src/shared-resize-observer.js");

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@internetarchive/shared-resize-observer/dist/src/shared-resize-observer.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@internetarchive/shared-resize-observer/dist/src/shared-resize-observer.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedResizeObserver: function() { return /* binding */ SharedResizeObserver; }
/* harmony export */ });
/** @inheritdoc */
class SharedResizeObserver {
    constructor() {
        /**
         * This is the ResizeObserver that dispatches
         * callbacks to all of the handlers.
         *
         * @private
         * @memberof SharedResizeObserver
         */
        this.resizeObserver = new ResizeObserver(entries => {
            // This requestAnimationFrame is to throttle the refresh rate,
            // otherwise you get a bunch of
            // `ResizeObserver loop completed with undelivered notifications` errors
            // The errors are not harmful, but they happen a lot, see:
            // https://stackoverflow.com/a/58701523
            // https://github.com/souporserious/react-measure/issues/104
            // https://github.com/WICG/resize-observer/issues/38
            window.requestAnimationFrame(() => {
                for (const entry of entries) {
                    const handlers = this.resizeHandlers.get(entry.target);
                    handlers === null || handlers === void 0 ? void 0 : handlers.forEach(handler => {
                        handler.handleResize(entry);
                    });
                }
            });
        });
        /**
         * A map of all of the observed elements and their resize handlers
         *
         * @private
         * @type {Map<
         *     Element,
         *     Set<SharedResizeObserverResizeHandlerInterface>
         *   >}
         * @memberof SharedResizeObserver
         */
        this.resizeHandlers = new Map();
    }
    /** @inheritdoc */
    shutdown() {
        this.resizeHandlers.forEach((handlers, target) => {
            this.resizeObserver.unobserve(target);
        });
        this.resizeHandlers.clear();
    }
    /** @inheritdoc */
    addObserver(options) {
        var _a;
        const handlers = (_a = this.resizeHandlers.get(options.target)) !== null && _a !== void 0 ? _a : new Set();
        handlers.add(options.handler);
        this.resizeHandlers.set(options.target, handlers);
        this.resizeObserver.observe(options.target, options.options);
    }
    /** @inheritdoc */
    removeObserver(options) {
        const handlers = this.resizeHandlers.get(options.target);
        if (!handlers)
            return;
        handlers.delete(options.handler);
        if (handlers.size === 0) {
            this.resizeObserver.unobserve(options.target);
            this.resizeHandlers.delete(options.target);
        }
    }
}
//# sourceMappingURL=shared-resize-observer.js.map

/***/ }),

/***/ "./src/BookNavigator/assets/bookmark-colors.js":
/*!*****************************************************!*\
  !*** ./src/BookNavigator/assets/bookmark-colors.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
  .blue {
    --iconFillColor: var(--blueBookmarkColor, #0023f5);
  }

  .red {
    --iconFillColor: var(--redBookmarkColor, #eb3223);
  }

  .green {
    --iconFillColor: var(--greenBookmarkColor, #75ef4c);
  }
`);

/***/ }),

/***/ "./src/BookNavigator/assets/button-base.js":
/*!*************************************************!*\
  !*** ./src/BookNavigator/assets/button-base.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
  .ia-button {
    min-height: 3rem;
    border: none;
    outline: none;
    cursor: pointer;
    color: var(--primaryTextColor);
    line-height: normal;
    border-radius: .4rem;
    text-align: center;
    vertical-align: middle;
    font-size: 1.4rem;
    display: inline-block;
    padding: .6rem 1.2rem;
    border: 1px solid transparent;

    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }

  .ia-button.link,
  .ia-button.external {
    min-height: unset;
    text-decoration: none;
  }

  .ia-button:disabled,
  .ia-button.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .ia-button.transparent {
    background-color: transparent;
  }
  
  .ia-button.slim {
    padding: 0;
  }

  .ia-button.primary {
    background-color: var(--primaryCTAFill);
    border-color: var(--primaryCTABorder);
  }

  .ia-button.cancel {
    background-color: var(--primaryErrorCTAFill);
    border-color: var(--primaryErrorCTABorder);
  }

  .ia-button.external {
    background: var(--secondaryCTAFill);
    border-color: var(--secondaryCTABorder);
  }
`);

/***/ }),

/***/ "./src/BookNavigator/assets/ia-logo.js":
/*!*********************************************!*\
  !*** ./src/BookNavigator/assets/ia-logo.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.svg)`
  <svg class="ia-logo" width="27" height="30" viewBox="0 0 27 30" xmlns="http://www.w3.org/2000/svg" aria-labelledby="logoTitleID logoDescID">
    <title id="logoTitleID">Internet Archive logo</title>
    <desc id="logoDescID">A line drawing of the Internet Archive headquarters building façade.</desc>
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <mask id="mask-2" fill="white">
        <path d="M26.6666667,28.6046512 L26.6666667,30 L0,30 L0.000283687943,28.6046512 L26.6666667,28.6046512 Z M25.6140351,26.5116279 L25.6140351,28.255814 L1.05263158,28.255814 L1.05263158,26.5116279 L25.6140351,26.5116279 Z M3.62469203,7.6744186 L3.91746909,7.82153285 L4.0639977,10.1739544 L4.21052632,13.9963932 L4.21052632,17.6725617 L4.0639977,22.255044 L4.03962296,25.3421929 L3.62469203,25.4651163 L2.16024641,25.4651163 L1.72094074,25.3421929 L1.55031755,22.255044 L1.40350877,17.6970339 L1.40350877,14.0211467 L1.55031755,10.1739544 L1.68423854,7.80887484 L1.98962322,7.6744186 L3.62469203,7.6744186 Z M24.6774869,7.6744186 L24.9706026,7.82153285 L25.1168803,10.1739544 L25.2631579,13.9963932 L25.2631579,17.6725617 L25.1168803,22.255044 L25.0927809,25.3421929 L24.6774869,25.4651163 L23.2130291,25.4651163 L22.7736357,25.3421929 L22.602418,22.255044 L22.4561404,17.6970339 L22.4561404,14.0211467 L22.602418,10.1739544 L22.7369262,7.80887484 L23.0420916,7.6744186 L24.6774869,7.6744186 Z M9.94042303,7.6744186 L10.2332293,7.82153285 L10.3797725,10.1739544 L10.5263158,13.9963932 L10.5263158,17.6725617 L10.3797725,22.255044 L10.3556756,25.3421929 L9.94042303,25.4651163 L8.47583122,25.4651163 L8.0362015,25.3421929 L7.86556129,22.255044 L7.71929825,17.6970339 L7.71929825,14.0211467 L7.86556129,10.1739544 L8.00005604,7.80887484 L8.30491081,7.6744186 L9.94042303,7.6744186 Z M18.0105985,7.6744186 L18.3034047,7.82153285 L18.449948,10.1739544 L18.5964912,13.9963932 L18.5964912,17.6725617 L18.449948,22.255044 L18.425851,25.3421929 L18.0105985,25.4651163 L16.5460067,25.4651163 L16.1066571,25.3421929 L15.9357367,22.255044 L15.7894737,17.6970339 L15.7894737,14.0211467 L15.9357367,10.1739544 L16.0702315,7.80887484 L16.3753664,7.6744186 L18.0105985,7.6744186 Z M25.6140351,4.53488372 L25.6140351,6.97674419 L1.05263158,6.97674419 L1.05263158,4.53488372 L25.6140351,4.53488372 Z M13.0806755,0 L25.9649123,2.93331338 L25.4484139,3.8372093 L0.771925248,3.8372093 L0,3.1041615 L13.0806755,0 Z" id="path-1"></path>
      </mask>
      <use fill="#FFFFFF" xlink:href="#path-1"></use>
      <g mask="url(#mask-2)" fill="#FFFFFF">
        <path d="M0,0 L26.6666667,0 L26.6666667,30 L0,30 L0,0 Z" id="swatch"></path>
      </g>
    </g>
  </svg>
`);

/***/ }),

/***/ "./src/BookNavigator/assets/icon_checkmark.js":
/*!****************************************************!*\
  !*** ./src/BookNavigator/assets/icon_checkmark.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");


// Original SVG object for reference
// <svg height="10" viewBox="0 0 13 10" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m4.33333333 10-4.33333333-4.16666667 1.73333333-1.66666666 2.6 2.5 6.93333337-6.66666667 1.7333333 1.66666667z" fill="#fff" fill-rule="evenodd"/></svg>

/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEwIiB2aWV3Qm94PSIwIDAgMTMgMTAiIHdpZHRoPSIxMyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNC4zMzMzMzMzMyAxMC00LjMzMzMzMzMzLTQuMTY2NjY2NjcgMS43MzMzMzMzMy0xLjY2NjY2NjY2IDIuNiAyLjUgNi45MzMzMzMzNy02LjY2NjY2NjY3IDEuNzMzMzMzMyAxLjY2NjY2NjY3eiIgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+`);

/***/ }),

/***/ "./src/BookNavigator/assets/icon_close.js":
/*!************************************************!*\
  !*** ./src/BookNavigator/assets/icon_close.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

/* harmony default export */ __webpack_exports__["default"] = ((0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDAgNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1sYWJlbGxlZGJ5PSJjbG9zZVRpdGxlSUQgY2xvc2VEZXNjSUQiPjxwYXRoIGQ9Ik0yOS4xOTIgMTAuODA4YTEuNSAxLjUgMCAwMTAgMi4xMkwyMi4xMjIgMjBsNy4wNyA3LjA3MmExLjUgMS41IDAgMDEtMi4xMiAyLjEyMWwtNy4wNzMtNy4wNy03LjA3IDcuMDdhMS41IDEuNSAwIDAxLTIuMTIxLTIuMTJsNy4wNy03LjA3My03LjA3LTcuMDdhMS41IDEuNSAwIDAxMi4xMi0yLjEyMUwyMCAxNy44NzhsNy4wNzItNy4wN2ExLjUgMS41IDAgMDEyLjEyMSAweiIgY2xhc3M9ImZpbGwtY29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==`);

/***/ }),

/***/ "./src/BookNavigator/book-navigator.js":
/*!*********************************************!*\
  !*** ./src/BookNavigator/book-navigator.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookNavigator: function() { return /* binding */ BookNavigator; }
/* harmony export */ });
/* harmony import */ var _internetarchive_shared_resize_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @internetarchive/shared-resize-observer */ "./node_modules/@internetarchive/shared-resize-observer/dist/index.js");
/* harmony import */ var _internetarchive_modal_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internetarchive/modal-manager */ "./node_modules/@internetarchive/modal-manager/dist/index.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _search_search_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search-provider.js */ "./src/BookNavigator/search/search-provider.js");
/* harmony import */ var _downloads_downloads_provider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloads/downloads-provider.js */ "./src/BookNavigator/downloads/downloads-provider.js");
/* harmony import */ var _visual_adjustments_visual_adjustments_provider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visual-adjustments/visual-adjustments-provider.js */ "./src/BookNavigator/visual-adjustments/visual-adjustments-provider.js");
/* harmony import */ var _bookmarks_bookmarks_provider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmarks/bookmarks-provider.js */ "./src/BookNavigator/bookmarks/bookmarks-provider.js");
/* harmony import */ var _sharing_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sharing.js */ "./src/BookNavigator/sharing.js");
/* harmony import */ var _viewable_files_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./viewable-files.js */ "./src/BookNavigator/viewable-files.js");
/* harmony import */ var _assets_ia_logo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/ia-logo.js */ "./src/BookNavigator/assets/ia-logo.js");
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars









const events = {
  menuUpdated: 'menuUpdated',
  updateSideMenu: 'updateSideMenu',
  PostInit: 'PostInit',
  ViewportInFullScreen: 'ViewportInFullScreen'
};
class BookNavigator extends lit__WEBPACK_IMPORTED_MODULE_2__.LitElement {
  static get properties() {
    return {
      itemMD: {
        type: Object
      },
      bookReaderLoaded: {
        type: Boolean
      },
      bookreader: {
        type: Object
      },
      bookIsRestricted: {
        type: Boolean
      },
      downloadableTypes: {
        type: Array
      },
      isAdmin: {
        type: Boolean
      },
      lendingInitialized: {
        type: Boolean
      },
      lendingStatus: {
        type: Object
      },
      menuProviders: {
        type: Object
      },
      menuShortcuts: {
        type: Array
      },
      signedIn: {
        type: Boolean
      },
      loaded: {
        type: Boolean
      },
      sharedObserver: {
        type: Object,
        attribute: false
      },
      modal: {
        type: Object,
        attribute: false
      },
      fullscreenBranding: {
        type: Object
      }
    };
  }
  constructor() {
    super();
    this.itemMD = undefined;
    this.loaded = false;
    this.bookReaderCannotLoad = false;
    this.bookReaderLoaded = false;
    this.bookreader = null;
    this.bookIsRestricted = false;
    this.downloadableTypes = [];
    this.isAdmin = false;
    this.lendingInitialized = false;
    this.lendingStatus = {};
    this.menuProviders = {};
    this.menuShortcuts = [];
    this.signedIn = false;
    /** @type {ModalManager} */
    this.modal = undefined;
    /** @type {SharedResizeObserver} */
    this.sharedObserver = undefined;
    this.fullscreenBranding = _assets_ia_logo_js__WEBPACK_IMPORTED_MODULE_9__["default"];
    // Untracked properties
    this.sharedObserverHandler = undefined;
    this.brWidth = 0;
    this.brHeight = 0;
    this.shortcutOrder = [
    /**
     * sets exit FS button (`this.fullscreenBranding1)
     * when `br.options.enableFSLogoShortcut`
     */
    'fullscreen', 'volumes', 'chapters', 'search', 'bookmarks'];
  }
  disconnectedCallback() {
    this.sharedObserver.removeObserver({
      target: this.mainBRContainer,
      handler: this.sharedObserverHandler
    });
  }
  firstUpdated() {
    this.bindEventListeners();
    this.emitPostInit();
    this.loaded = true;
  }
  updated(changed) {
    if (!this.bookreader || !this.itemMD || !this.bookReaderLoaded) {
      return;
    }
    const reload = changed.has('loaded') && this.loaded;
    if (reload || changed.has('itemMD') || changed.has('bookreader') || changed.has('signedIn') || changed.has('isAdmin') || changed.has('modal')) {
      this.initializeBookSubmenus();
    }
    if (changed.has('sharedObserver') && this.bookreader) {
      this.loadSharedObserver();
      this.initializeBookSubmenus();
    }
    if (changed.has('downloadableTypes')) {
      this.initializeBookSubmenus();
    }
  }

  /**
   * Global event emitter for when Book Navigator loads
   */
  emitPostInit() {
    // emit global event when book nav has loaded with current bookreader selector
    this.dispatchEvent(new CustomEvent(`BrBookNav:${events.PostInit}`, {
      detail: {
        brSelector: this.bookreader?.el
      },
      bubbles: true,
      composed: true
    }));
  }

  /**
   *  @typedef {{
   *  baseHost: string,
   *  modal: ModalManager,
   *  sharedObserver: SharedResizeObserver,
   *  bookreader: BookReader,
   *  item: Item,
   *  signedIn: boolean,
   *  isAdmin: boolean,
   *  onProviderChange: (BookReader, object) => void,
   *  }} baseProviderConfig
   *
   * @return {baseProviderConfig}
   */
  get baseProviderConfig() {
    return {
      baseHost: window.location.origin,
      modal: this.modal,
      sharedObserver: this.sharedObserver,
      bookreader: this.bookreader,
      item: this.itemMD,
      signedIn: this.signedIn,
      isAdmin: this.isAdmin,
      onProviderChange: () => {}
    };
  }
  get isWideEnoughToOpenMenu() {
    return this.brWidth >= 640;
  }
  /**
   * Instantiates books submenus & their update callbacks
   *
   * NOTE: we are doing our best to scope bookreader's instance.
   * If your submenu provider uses a bookreader instance to read, manually
   * manipulate BookReader, please update the navigator's instance of it
   * to keep it in sync.
   */
  initializeBookSubmenus() {
    const providers = {
      // share: new SharingProvider(this.baseProviderConfig),
      // visualAdjustments: new VisualAdjustmentProvider({
      //   ...this.baseProviderConfig,
      //   /** Update menu contents */
      //   onProviderChange: () => {
      //     this.updateMenuContents();
      //   },
      // }),
    };
    if (this.shouldShowDownloadsMenu()) {
      providers.downloads = new _downloads_downloads_provider_js__WEBPACK_IMPORTED_MODULE_4__["default"](this.baseProviderConfig);
    }
    if (this.bookreader.options.enableSearch) {
      providers.search = new _search_search_provider_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
        ...this.baseProviderConfig,
        /**
         * Search specific menu updates
         * @param {BookReader} brInstance
         * @param {{ searchCanceled: boolean }} searchUpdates
         */
        onProviderChange: (brInstance = null, searchUpdates = {}) => {
          if (brInstance) {
            /* refresh br instance reference */
            this.bookreader = brInstance;
          }
          this.updateMenuContents();
          if (searchUpdates.openMenu === false) {
            return;
          }
          if (this.isWideEnoughToOpenMenu && !searchUpdates?.searchCanceled) {
            /* open side search menu */
            setTimeout(() => {
              this.updateSideMenu('search', 'open');
            }, 0);
          }
        }
      });
    }
    if (this.bookreader.options.enableBookmarks) {
      providers.bookmarks = new _bookmarks_bookmarks_provider_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
        ...this.baseProviderConfig,
        onProviderChange: bookmarks => {
          const method = Object.keys(bookmarks).length ? 'add' : 'remove';
          this[`${method}MenuShortcut`]('bookmarks');
          this.updateMenuContents();
        }
      });
    }

    // add shortcut for volumes if multipleBooksList exists
    if (this.bookreader.options.enableMultipleBooks) {
      providers.volumes = new _viewable_files_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
        ...this.baseProviderConfig,
        onProviderChange: (brInstance = null, volumesUpdates = {}) => {
          if (brInstance) {
            /* refresh br instance reference */
            this.bookreader = brInstance;
          }
          this.updateMenuContents();
          if (this.isWideEnoughToOpenMenu) {
            /* open side search menu */
            setTimeout(() => {
              this.updateSideMenu('volumes', 'open');
            });
          }
        }
      });
    }
    Object.assign(this.menuProviders, providers);
    this.addMenuShortcut('search');
    this.addMenuShortcut('volumes');
    this.updateMenuContents();
  }

  /** gets element that houses the bookreader in light dom */
  get mainBRContainer() {
    return document.querySelector(this.bookreader?.el);
  }

  /** Fullscreen Shortcut */
  addFullscreenShortcut() {
    const closeFS = {
      icon: this.fullscreenShortcut,
      id: 'fullscreen'
    };
    this.menuShortcuts.push(closeFS);
    this.sortMenuShortcuts();
    this.emitMenuShortcutsUpdated();
  }
  deleteFullscreenShortcut() {
    const updatedShortcuts = this.menuShortcuts.filter(({
      id
    }) => {
      return id !== 'fullscreen';
    });
    this.menuShortcuts = updatedShortcuts;
    this.sortMenuShortcuts();
    this.emitMenuShortcutsUpdated();
  }
  closeFullscreen() {
    this.bookreader.exitFullScreen();
  }
  get fullscreenShortcut() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_2__.html)`
      <button
        @click=${() => this.closeFullscreen()}
        title="Exit fullscreen view"
      >${this.fullscreenBranding}</button>
    `;
  }
  /** End Fullscreen Shortcut */

  /**
   * Open side menu
   * @param {string} menuId
   * @param {('open'|'close'|'toggle')} action
   */
  updateSideMenu(menuId = '', action = 'open') {
    if (!menuId) {
      return;
    }
    const event = new CustomEvent(events.updateSideMenu, {
      detail: {
        menuId,
        action
      }
    });
    this.dispatchEvent(event);
  }

  /**
   * Sets order of menu and emits custom event when done
   */
  updateMenuContents() {
    const {
      search,
      downloads,
      visualAdjustments,
      share,
      bookmarks,
      volumes,
      chapters
    } = this.menuProviders;
    const availableMenus = [volumes, chapters, search, bookmarks, visualAdjustments, share].filter(menu => !!menu);
    if (this.shouldShowDownloadsMenu()) {
      downloads?.update(this.downloadableTypes);
      availableMenus.splice(-2, 0, downloads);
    }
    const event = new CustomEvent(events.menuUpdated, {
      detail: availableMenus
    });
    this.dispatchEvent(event);
  }

  /**
   * Confirms if we should show the downloads menu
   * @returns {bool}
   */
  shouldShowDownloadsMenu() {
    if (!this.downloadableTypes.length) {
      return false;
    }
    if (this.bookIsRestricted === false) {
      return true;
    }
    if (this.isAdmin) {
      return true;
    }
    const {
      user_loan_record = {}
    } = this.lendingStatus;
    const hasNoLoanRecord = Array.isArray(user_loan_record); /* (bc PHP assoc. arrays) */

    if (hasNoLoanRecord) {
      return false;
    }
    const hasValidLoan = user_loan_record.type && user_loan_record.type !== 'SESSION_LOAN';
    return hasValidLoan;
  }

  /**
   * Adds a provider object to the menuShortcuts array property if it isn't
   * already added. menuShortcuts are then sorted by shortcutOrder and
   * a menuShortcutsUpdated event is emitted.
   *
   * @param {string} menuId - a string matching the id property of a provider
   */
  addMenuShortcut(menuId) {
    if (this.menuShortcuts.find(m => m.id === menuId)) {
      // menu is already there
      return;
    }
    if (!this.menuProviders[menuId]) {
      // no provider for this menu
      return;
    }
    this.menuShortcuts.push(this.menuProviders[menuId]);
    this.sortMenuShortcuts();
    this.emitMenuShortcutsUpdated();
  }

  /**
   * Removes a provider object from the menuShortcuts array and emits a
   * menuShortcutsUpdated event.
   *
   * @param {string} menuId - a string matching the id property of a provider
   */
  removeMenuShortcut(menuId) {
    this.menuShortcuts = this.menuShortcuts.filter(m => m.id !== menuId);
    this.emitMenuShortcutsUpdated();
  }

  /**
   * Sorts the menuShortcuts property by comparing each provider's id to
   * the id in each iteration over the shortcutOrder array.
   */
  sortMenuShortcuts() {
    this.menuShortcuts = this.shortcutOrder.reduce((shortcuts, id) => {
      const menu = this.menuShortcuts.find(m => m.id === id);
      if (menu) {
        shortcuts.push(menu);
      }
      return shortcuts;
    }, []);
  }
  emitMenuShortcutsUpdated() {
    const event = new CustomEvent('menuShortcutsUpdated', {
      detail: this.menuShortcuts
    });
    this.dispatchEvent(event);
  }
  emitLoadingStatusUpdate(loaded) {
    const event = new CustomEvent('loadingStateUpdated', {
      detail: {
        loaded
      }
    });
    this.dispatchEvent(event);
  }

  /**
   * Core bookreader event handler registry
   *
   * NOTE: we are trying to keep bookreader's instance in scope
   * Please update Book Navigator's instance reference of it to keep it current
   */
  bindEventListeners() {
    window.addEventListener('BookReader:PostInit', e => {
      this.bookreader = e.detail.props;
      this.bookreader.shell = this;
      this.bookReaderLoaded = true;
      this.bookReaderCannotLoad = false;
      this.emitLoadingStatusUpdate(true);
      this.loadSharedObserver();
      setTimeout(() => {
        this.bookreader.resize();
      }, 0);
    });
    window.addEventListener('BookReader:fullscreenToggled', event => {
      const {
        detail: {
          props: brInstance = null
        }
      } = event;
      if (brInstance) {
        this.bookreader = brInstance;
      }
      this.manageFullScreenBehavior();
    }, {
      passive: true
    });
    window.addEventListener('BookReader:ToggleSearchMenu', event => {
      this.dispatchEvent(new CustomEvent(events.updateSideMenu, {
        detail: {
          menuId: 'search',
          action: 'toggle'
        }
      }));
    });
    window.addEventListener('LendingFlow:PostInit', ({
      detail
    }) => {
      const {
        downloadTypesAvailable,
        lendingStatus,
        isAdmin,
        previewType
      } = detail;
      this.lendingInitialized = true;
      this.downloadableTypes = downloadTypesAvailable;
      this.lendingStatus = lendingStatus;
      this.isAdmin = isAdmin;
      this.bookReaderCannotLoad = previewType === 'singlePagePreview';
      this.emitLoadingStatusUpdate(true);
    });
    window.addEventListener('BRJSIA:PostInit', ({
      detail
    }) => {
      const {
        isRestricted,
        downloadURLs
      } = detail;
      this.bookReaderLoaded = true;
      this.downloadableTypes = downloadURLs;
      this.bookIsRestricted = isRestricted;
    });
    window.addEventListener('contextmenu', e => this.manageContextMenuVisibility(e), {
      capture: true
    });
  }

  /** Display an element's context menu */
  manageContextMenuVisibility(e) {
    window.archive_analytics?.send_event('BookReader', `contextmenu-${this.bookIsRestricted ? 'restricted' : 'unrestricted'}`, e.target?.classList?.value);
    if (!this.bookIsRestricted) {
      return;
    }
    const imagePane = e.target.classList.value.match(/BRscreen|BRpageimage/g);
    if (!imagePane) {
      return;
    }
    e.preventDefault();
    return false;
  }
  loadSharedObserver() {
    this.sharedObserverHandler = {
      handleResize: this.handleResize.bind(this)
    };
    this.sharedObserver?.addObserver({
      target: this.mainBRContainer,
      handler: this.sharedObserverHandler
    });
  }

  /**
   * Uses resize observer to fire BookReader's `resize` functionality
   * We do not want to trigger resize IF:
   *  - book animation is happening
   *  - book is in fullscreen (fullscreen is handled separately)
   *
   * @param { target: HTMLElement, contentRect: DOMRectReadOnly } entry
   */
  handleResize({
    contentRect,
    target
  }) {
    const startBrWidth = this.brWidth;
    const startBrHeight = this.brHeight;
    const {
      animating
    } = this.bookreader;
    if (target === this.mainBRContainer) {
      this.brWidth = contentRect.width;
      this.brHeight = contentRect.height;
    }
    if (!startBrWidth && this.brWidth) {
      // loading up, let's update side menus
      this.initializeBookSubmenus();
    }
    const widthChange = startBrWidth !== this.brWidth;
    const heightChange = startBrHeight !== this.brHeight;
    if (!animating && (widthChange || heightChange)) {
      this.bookreader?.resize();
    }
  }

  /**
   * Manages Fullscreen behavior
   * This makes sure that controls are _always_ in view
   * We need this to accommodate LOAN BAR during fullscreen
   */
  manageFullScreenBehavior() {
    this.emitFullScreenState();
    if (!this.bookreader.options.enableFSLogoShortcut) {
      return;
    }
    const isFullScreen = this.bookreader.isFullscreen();
    if (isFullScreen) {
      this.addFullscreenShortcut();
    } else {
      this.deleteFullscreenShortcut();
    }
  }

  /**
   * Relays fullscreen toggle events
   */
  emitFullScreenState() {
    const isFullScreen = this.bookreader.isFullscreen();
    const event = new CustomEvent('ViewportInFullScreen', {
      detail: {
        isFullScreen
      }
    });
    this.dispatchEvent(event);
  }
  get itemImage() {
    // const identifier = this.itemMD?.metadata.identifier;
    // const url = `https://${this.baseHost}/services/img/${identifier}`;
    return null;
  }
  get placeholder() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_2__.html)`<div class="placeholder">${this.itemImage}</div>`;
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_2__.html)`<div id="book-navigator__root">
      ${this.bookReaderCannotLoad ? this.placeholder : lit__WEBPACK_IMPORTED_MODULE_2__.nothing}
      ${!this.bookReaderCannotLoad ? (0,lit__WEBPACK_IMPORTED_MODULE_2__.html)`<slot name="main"></slot>` : lit__WEBPACK_IMPORTED_MODULE_2__.nothing}
    </div>
  `;
  }
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_2__.css)`
    :host,
    #book-navigator__root,
    slot,
    slot > * {
      display: block;
      height: inherit;
      width: inherit;
    }
    .placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 5%;
    }
    .cover-img {
      max-height: 300px;
    }
  `;
  }
}
customElements.define('book-navigator', BookNavigator);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmark-button.js":
/*!********************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmark-button.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BookmarkButton; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

class BookmarkButton extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
      button {
        -webkit-appearance: none;
        appearance: none;
        outline: 0;
        border: none;
        padding: 0;
        height: 4rem;
        width: 4rem;
        background: transparent;
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' viewBox='0 0 16 24' width='16'%3E%3Cg fill='%23333' fill-rule='evenodd'%3E%3Cpath d='m15 0c.5522847 0 1 .44771525 1 1v23l-8-5.4545455-8 5.4545455v-23c0-.55228475.44771525-1 1-1zm-2 2h-10c-.51283584 0-.93550716.38604019-.99327227.88337887l-.00672773.11662113v18l6-4.3181818 6 4.3181818v-18c0-.51283584-.3860402-.93550716-.8833789-.99327227z'/%3E%3Cpath d='m8.75 6v2.25h2.25v1.5h-2.25v2.25h-1.5v-2.25h-2.25v-1.5h2.25v-2.25z' fill-rule='nonzero'/%3E%3C/g%3E%3C/svg%3E"), pointer;
        position: relative;
      }
      button > * {
        display: block;
        position: absolute;
        top: 0.2rem;
      }
      button.left > * {
        left: 0.2rem;
      }

      button.right > * {
        right: 0.2rem;
      }
    `;
  }
  static get properties() {
    return {
      side: {
        type: String
      },
      state: {
        type: String
      }
    };
  }
  constructor() {
    super();
    this.state = 'hollow';
    this.side = undefined;
  }
  handleClick(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('bookmarkButtonClicked'));
  }
  get title() {
    return `${this.state === 'hollow' ? 'Add' : 'Remove'} bookmark`;
  }
  render() {
    const position = this.side || 'right';
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <button title=${this.title} @click=${this.handleClick} class=${position}>
        <icon-bookmark state=${this.state}></icon-bookmark>
      </button>
    `;
  }
}
customElements.define('bookmark-button', BookmarkButton);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmark-edit.js":
/*!******************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmark-edit.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IABookmarkEdit: function() { return /* binding */ IABookmarkEdit; }
/* harmony export */ });
/* harmony import */ var lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/directives/repeat.js */ "./node_modules/lit/directives/repeat.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _assets_bookmark_colors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/bookmark-colors.js */ "./src/BookNavigator/assets/bookmark-colors.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");




class IABookmarkEdit extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get properties() {
    return {
      bookmark: {
        type: Object
      },
      bookmarkColors: {
        type: Array
      },
      renderHeader: {
        type: Boolean
      },
      showBookmark: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this.bookmark = {};
    this.bookmarkColors = [];
    this.renderHeader = false;
    this.showBookmark = true;
  }
  emitSaveEvent(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('saveBookmark', {
      detail: {
        bookmark: this.bookmark
      }
    }));
  }
  emitDeleteEvent() {
    this.dispatchEvent(new CustomEvent('deleteBookmark', {
      detail: {
        id: this.bookmark.id
      }
    }));
  }
  emitColorChangedEvent(colorId) {
    this.dispatchEvent(new CustomEvent('bookmarkColorChanged', {
      detail: {
        bookmarkId: this.bookmark.id,
        colorId
      }
    }));
  }
  changeColorTo(id) {
    this.bookmark.color = id;
    this.emitColorChangedEvent(id);
  }
  updateNote(e) {
    this.bookmark.note = e.currentTarget.value;
  }
  static get headerSection() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`<header>
      <h3>Edit Bookmark</h3>
    </header>`;
  }
  bookmarkColor(color) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <li>
        <input type="radio" name="color" id="color_${color.id}" .value=${color.id} @change=${() => this.changeColorTo(color.id)} ?checked=${this.bookmark.color === color.id}>
        <label for="color_${color.id}">
          <icon-bookmark class=${color.className}></icon-bookmark>
        </label>
      </li>
    `;
  }
  get bookmarkTemplate() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="bookmark">
        <img src=${this.bookmark.thumbnail} />
        <h4>Page ${this.bookmark.page}</h4>
      </div>
    `;
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${this.renderHeader ? IABookmarkEdit.headerSection : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      ${this.showBookmark ? this.bookmarkTemplate : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      <form action="" method="put" @submit=${this.emitSaveEvent}>
        <fieldset>
          <label for="note">Note <small>(optional)</small></label>
          <textarea rows="4" cols="80" name="note" id="note" @change=${this.updateNote}>${this.bookmark.note}</textarea>
          <label for="color">Bookmark color</label>
          <ul>
            ${(0,lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__.repeat)(this.bookmarkColors, color => color.id, this.bookmarkColor.bind(this))}
          </ul>
          <div class="actions">
            <button type="button" class="ia-button cancel" @click=${this.emitDeleteEvent}>Delete</button>
            <input class="ia-button" type="submit" value="Save">
          </div>
        </fieldset>
      </form>
    `;
  }
  static get styles() {
    const bookmarkEditCSS = (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)`
    :host {
      display: block;
      padding: 0 1rem 2rem 1rem;
      color: var(--primaryTextColor);
    }

    small {
      font-style: italic;
    }

    .bookmark {
      display: grid;
      grid-template-columns: 37px 1fr;
      grid-gap: 0 1rem;
      align-items: center;
    }

    h4 {
      margin: 0;
      font-size: 1.4rem;
    }

    fieldset {
      padding: 2rem 0 0 0;
      border: none;
    }

    label {
      display: block;
      font-weight: bold;
    }

    p {
      padding: 0;
      margin: .5rem 0;
      font-size: 1.2rem;
      line-height: 120%;
    }

    textarea {
      width: 100%;
      margin-bottom: 2rem;
      box-sizing: border-box;
      font: normal 1.4rem "Helvetica Neue", Helvetica, Arial, sans-serif;
      resize: vertical;
    }

    ul {
      display: grid;
      grid-template-columns: repeat(3, auto);
      grid-gap: 0 2rem;
      justify-content: start;
      padding: 1rem 0 0 0;
      margin: 0 0 2rem 0;
      list-style: none;
    }

    li input {
      display: none;
    }

    li label {
      display: block;
      min-width: 50px;
      padding-top: .4rem;
      text-align: center;
      border: 1px solid transparent;
      border-radius: 4px;
      cursor: pointer;
    }

    li input:checked + label {
      border-color: var(--primaryTextColor);
    }

    input[type="submit"] {
      background: var(--primaryCTAFill);
      border-color: var(--primaryCTABorder);
    }

    button {
      background: var(--primaryErrorCTAFill);
      border-color: var(--primaryErrorCTABorder);
    }

    .button {
      -webkit-appearance: none;
      appearance: none;
      padding: .5rem 1rem;
      box-sizing: border-box;
      color: var(--primaryTextColor);
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .actions {
      display: grid;
      grid-template-columns: auto auto;
      grid-gap: 0 1rem;
      justify-items: stretch;
    }
    `;
    return [_assets_button_base_js__WEBPACK_IMPORTED_MODULE_3__["default"], _assets_bookmark_colors_js__WEBPACK_IMPORTED_MODULE_2__["default"], bookmarkEditCSS];
  }
}
customElements.define('ia-bookmark-edit', IABookmarkEdit);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmarks-list.js":
/*!*******************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmarks-list.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IABookmarksList: function() { return /* binding */ IABookmarksList; }
/* harmony export */ });
/* harmony import */ var lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/directives/repeat.js */ "./node_modules/lit/directives/repeat.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _bookmark_edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmark-edit.js */ "./src/BookNavigator/bookmarks/bookmark-edit.js");
/* harmony import */ var _internetarchive_icon_edit_pencil_icon_edit_pencil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/icon-edit-pencil/icon-edit-pencil.js */ "./node_modules/@internetarchive/icon-edit-pencil/icon-edit-pencil.js");
/* harmony import */ var _assets_bookmark_colors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/bookmark-colors.js */ "./src/BookNavigator/assets/bookmark-colors.js");





class IABookmarksList extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get properties() {
    return {
      activeBookmarkID: {
        type: Number
      },
      bookmarkColors: {
        type: Array
      },
      defaultBookmarkColor: {
        type: Object
      },
      bookmarks: {
        type: Object
      },
      editedBookmark: {
        type: Object
      },
      renderHeader: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this.activeBookmarkID = undefined;
    this.bookmarkColors = [];
    this.defaultBookmarkColor = {};
    this.bookmarks = {};
    this.editedBookmark = {};
    this.renderHeader = false;
  }
  emitEditEvent(e, bookmark) {
    this.dispatchEvent(new CustomEvent('bookmarkEdited', {
      detail: {
        bookmark
      }
    }));
  }
  emitSelectedEvent(bookmark) {
    this.activeBookmarkID = bookmark.id;
    this.dispatchEvent(new CustomEvent('bookmarkSelected', {
      detail: {
        bookmark
      }
    }));
  }
  emitSaveBookmark(bookmark) {
    this.dispatchEvent(new CustomEvent('saveBookmark', {
      detail: {
        bookmark
      }
    }));
  }
  emitDeleteBookmark(id) {
    this.dispatchEvent(new CustomEvent('deleteBookmark', {
      detail: {
        id
      }
    }));
  }
  emitBookmarkColorChanged({
    detail
  }) {
    const {
      bookmarkId,
      colorId
    } = detail;
    this.dispatchEvent(new CustomEvent('bookmarkColorChanged', {
      detail: {
        bookmarkId,
        colorId
      }
    }));
  }
  emitAddBookmark() {
    this.dispatchEvent(new CustomEvent('addBookmark'));
  }
  editBookmark(e, bookmark) {
    this.emitEditEvent(e, bookmark);
    this.editedBookmark = this.editedBookmark === bookmark ? {} : bookmark;
  }
  saveBookmark({
    detail
  }) {
    const {
      bookmark
    } = detail;
    this.editedBookmark = {};
    this.emitSaveBookmark(bookmark);
  }
  deleteBookmark({
    detail
  }) {
    const {
      id
    } = detail;
    this.editedBookmark = {};
    this.emitDeleteBookmark(id);
  }
  bookmarkColorInfo(colorVal = 0) {
    return this.bookmarkColors.find(labelInfo => labelInfo?.id === colorVal);
  }
  bookmarkItem(bookmark) {
    const editMode = this.editedBookmark.id === bookmark.id;
    const {
      className
    } = this.bookmarkColorInfo(bookmark.color);
    const activeClass = bookmark.id === this.activeBookmarkID ? 'active' : '';
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <li
        @click=${() => this.emitSelectedEvent(bookmark)}
        tabindex="0"
        data-pageIndex=${bookmark.id}
      >
        <div class="separator"></div>
        <div class="content ${activeClass}">
          <button
            class="edit"
            @click=${e => this.editBookmark(e, bookmark)}
            title="Edit this bookmark"
          >
            <ia-icon-edit-pencil></ia-icon-edit-pencil>
          </button>
          <h4>
            <icon-bookmark class=${className}></icon-bookmark>
            <span> Page ${bookmark.page}</span>
          </h4>
          ${!editMode && bookmark.note ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`<p>${bookmark.note}</p>` : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
          ${editMode ? this.editBookmarkComponent : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
        </div>
      </li>
    `;
  }
  get editBookmarkComponent() {
    const showBookmark = false;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <ia-bookmark-edit
        .bookmark=${this.editedBookmark}
        .bookmarkColors=${this.bookmarkColors}
        .defaultBookmarkColor=${this.defaultBookmarkColor}
        .showBookmark=${showBookmark}
        @saveBookmark=${this.saveBookmark}
        @deleteBookmark=${this.deleteBookmark}
        @bookmarkColorChanged=${this.emitBookmarkColorChanged}
      ></ia-bookmark-edit>
    `;
  }
  sortBookmarks() {
    const sortedKeys = Object.keys(this.bookmarks).sort((a, b) => {
      if (+a > +b) {
        return 1;
      }
      if (+a < +b) {
        return -1;
      }
      return 0;
    });
    const sortedBookmarks = sortedKeys.map(key => this.bookmarks[key]);
    return sortedBookmarks;
  }
  get bookmarksCount() {
    const count = this.bookmarks.length;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`<small>(${count})</small>`;
  }
  get headerSection() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`<header>
      <h3>
        Bookmarks
        ${this.bookmarks.length ? this.bookmarksCount : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </h3>
    </header>`;
  }
  get bookmarkslist() {
    const sortedBookmarks = this.sortBookmarks();
    const bookmarks = (0,lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__.repeat)(sortedBookmarks, bookmark => bookmark?.id, this.bookmarkItem.bind(this));
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <ul>
        ${bookmarks}
        <div class="separator"></div>
      </ul>
    `;
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${this.renderHeader ? this.headerSection : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      ${Object.keys(this.bookmarks).length ? this.bookmarkslist : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
    `;
  }
  static get styles() {
    const main = (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)`
      :host {
        display: block;
        overflow-y: auto;
        box-sizing: border-box;
        color: var(--primaryTextColor);
        margin-bottom: 2rem;
        --activeBorderWidth: 2px;
      }

      icon-bookmark {
        width: 16px;
        height: 24px;
      }

      .separator {
        background-color: var(--secondaryBGColor);
        width: 98%;
        margin: 1px auto;
        height: 1px;
      }

      small {
        font-style: italic;
      }

      h4 {
        margin: 0;
        font-size: 1.4rem;
      }
      h4 * {
        display: inline-block;
      }
      h4 icon-bookmark {
        vertical-align: bottom;
      }
      h4 span {
        vertical-align: top;
        padding-top: 1%;
      }

      p {
        padding: 0;
        margin: 5px 0 0 0;
        width: 98%;
        overflow-wrap: break-word;
      }

      ia-bookmark-edit {
        margin: 5px 5px 3px 6px;
      }

      ul {
        padding: 0;
        list-style: none;
        margin: var(--activeBorderWidth) 0.5rem 1rem 0;
      }
      ul > li:first-child .separator {
        display: none;
      }
      li {
        cursor: pointer;
        outline: none;
        position: relative;
      }
      li .content {
        padding: 2px 0 4px 2px;
        border: var(--activeBorderWidth) solid transparent;
        padding: .2rem 0 .4rem .2rem;
      }
      li .content.active {
        border: var(--activeBorderWidth) solid #538bc5;
      }
      li button.edit {
        padding: 5px 2px 0 0;
        background: transparent;
        cursor: pointer;
        height: 40px;
        width: 40px;
        position: absolute;
        right: 2px;
        top: 2px;
        text-align: right;
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        box-sizing: border-box;
        border: none;
      }
      li button.edit > * {
        display: block;
        height: 100%;
        width: 100%;
      }
    `;
    return [main, _assets_bookmark_colors_js__WEBPACK_IMPORTED_MODULE_4__["default"]];
  }
}
customElements.define('ia-bookmarks-list', IABookmarksList);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmarks-loginCTA.js":
/*!***********************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmarks-loginCTA.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");


class BookmarksLogin extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get properties() {
    return {
      url: {
        type: String
      }
    };
  }
  static get styles() {
    return _assets_button_base_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  }
  constructor() {
    super();
    this.url = 'https://archive.org/account/login';
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <p>A free account is required to save and access bookmarks.</p>
      <a class="ia-button link primary" href="${this.url}">Log in</a>
    `;
  }
}
customElements.define('bookmarks-login', BookmarksLogin);

/***/ }),

/***/ "./src/BookNavigator/bookmarks/bookmarks-provider.js":
/*!***********************************************************!*\
  !*** ./src/BookNavigator/bookmarks/bookmarks-provider.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BookmarksProvider; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _delete_modal_actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../delete-modal-actions.js */ "./src/BookNavigator/delete-modal-actions.js");
/* harmony import */ var _bookmark_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bookmark-button.js */ "./src/BookNavigator/bookmarks/bookmark-button.js");
/* harmony import */ var _ia_bookmarks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ia-bookmarks.js */ "./src/BookNavigator/bookmarks/ia-bookmarks.js");
/* harmony import */ var _bookmark_edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bookmark-edit.js */ "./src/BookNavigator/bookmarks/bookmark-edit.js");
/* harmony import */ var _bookmarks_list_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bookmarks-list.js */ "./src/BookNavigator/bookmarks/bookmarks-list.js");
/* harmony import */ var _internetarchive_icon_bookmark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @internetarchive/icon-bookmark */ "./node_modules/@internetarchive/icon-bookmark/icon-bookmark.js");







class BookmarksProvider {
  constructor(options) {
    const {
      baseHost,
      signedIn,
      bookreader,
      modal,
      onProviderChange
    } = options;
    const referrerStr = `referer=${encodeURIComponent(location.href)}`;
    const loginUrl = `https://${baseHost}/account/login?${referrerStr}`;
    this.component = document.createElement('ia-bookmarks');
    this.component.bookreader = bookreader;
    this.component.displayMode = signedIn ? 'bookmarks' : 'login';
    this.component.modal = modal;
    this.component.loginOptions = {
      loginClicked: this.bookmarksLoginClicked,
      loginUrl
    };
    this.bindEvents();
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<icon-bookmark state="hollow" style="--iconWidth: 16px; --iconHeight: 24px;"></icon-bookmark>`;
    this.label = 'Bookmarks';
    this.id = 'bookmarks';
    this.onProviderChange = onProviderChange;
    this.component.setup();
    this.updateMenu(this.component.bookmarks.length);
  }
  updateMenu(count) {
    this.menuDetails = `(${count})`;
  }
  bindEvents() {
    this.component.addEventListener('bookmarksChanged', this.bookmarksChanged.bind(this));
  }
  bookmarksChanged({
    detail
  }) {
    const bookmarksLength = Object.keys(detail.bookmarks).length;
    this.updateMenu(bookmarksLength);
    this.onProviderChange(detail.bookmarks, detail.showSidePanel);
  }
  bookmarksLoginClicked() {
    window.archive_analytics?.send_event_no_sampling('BookReader', `BookmarksLogin`, window.location.path);
  }
}

/***/ }),

/***/ "./src/BookNavigator/bookmarks/ia-bookmarks.js":
/*!*****************************************************!*\
  !*** ./src/BookNavigator/bookmarks/ia-bookmarks.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_modal_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internetarchive/modal-manager */ "./node_modules/@internetarchive/modal-manager/dist/index.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");
/* harmony import */ var _bookmarks_loginCTA_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bookmarks-loginCTA.js */ "./src/BookNavigator/bookmarks/bookmarks-loginCTA.js");

// eslint-disable-next-line no-unused-vars



const api = {
  endpoint: '/services/bookmarks.php',
  headers: {
    'Content-Type': 'application/json'
  },
  delete(page) {
    return fetch(`${this.endpoint}?identifier=${this.identifier}&page_num=${page}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: this.headers
    });
  },
  get(page) {
    return fetch(`${this.endpoint}?identifier=${this.identifier}&page_num=${page}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: this.headers
    });
  },
  getAll() {
    return fetch(`${this.endpoint}?identifier=${this.identifier}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: this.headers
    });
  },
  post(bookmark) {
    return this.sendBookmarkData(bookmark, 'POST');
  },
  put(bookmark) {
    return this.sendBookmarkData(bookmark, 'POST');
  },
  sendBookmarkData(bookmark, method) {
    const notes = {
      note: bookmark.note,
      color: bookmark.color
    };
    return fetch(`${this.endpoint}?identifier=${this.identifier}&page_num=${bookmark.id}`, {
      credentials: 'same-origin',
      method,
      headers: this.headers,
      body: JSON.stringify({
        notes
      })
    });
  }
};
class IABookmarks extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get properties() {
    return {
      activeBookmarkID: {
        type: String
      },
      bookmarks: {
        type: Array
      },
      bookreader: {
        type: Object
      },
      displayMode: {
        type: String
      },
      editedBookmark: {
        type: Object
      },
      deleteModalConfig: {
        type: Object
      },
      modal: {
        attribute: false
      },
      loginOptions: {
        type: Object,
        attribute: false
      }
    };
  }
  static get styles() {
    const mainCss = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
      .bookmarks {
        height: 100%;
        overflow: hidden;
        padding-bottom: 20px;
      }

      .list ia-bookmark-edit {
        display: none;
      }

      .edit ia-bookmarks-list {
        display: none;
      }
    `;
    return [_assets_button_base_js__WEBPACK_IMPORTED_MODULE_2__["default"], mainCss];
  }
  static formatPage(page) {
    return isNaN(+page) ? `(${page.replace(/\D/g, '')})` : page;
  }
  constructor() {
    super();
    this.bookmarks = [];
    this.bookreader = {};
    this.editedBookmark = {};
    /** @type {ModalManager} */
    this.modal = undefined;
    this.loginOptions = {
      loginClicked: () => {},
      loginUrl: ''
    };
    /**
     * Toggles display to either bookmarks or login cta
     * @param {('bookmarks'|'login')} displayMode
     */
    this.displayMode = 'bookmarks';
    this.bookmarkColors = [{
      id: 0,
      className: 'red'
    }, {
      id: 1,
      className: 'blue'
    }, {
      id: 2,
      className: 'green'
    }];

    // eslint-disable-next-line
    this.defaultColor = this.bookmarkColors[0];
    this.api = api;
    this.deleteModalConfig = new _internetarchive_modal_manager__WEBPACK_IMPORTED_MODULE_1__.ModalConfig({
      title: 'Delete Bookmark',
      headline: 'This bookmark contains a note. Deleting it will permanently delete the note. Are you sure?',
      headerColor: '#194880'
    });
  }
  updated(changed) {
    if (changed.has('displayMode')) {
      this.updateDisplay();
    }
    this.emitBookmarksChanged();
  }
  setup() {
    this.api.identifier = this.getIdentifier();
    if (this.displayMode === 'login') {
      return;
    }
    this.fetchUserBookmarks();
    this.setBREventListeners();
  }

  /**
   * get identifier for current book including sub-files
   *
   * @returns Identifer
   */
  getIdentifier() {
    if (this.bookreader.bookId !== this.bookreader.subPrefix) {
      return `${this.bookreader.bookId}/${this.bookreader.subPrefix}`;
    }
    return this.bookreader.bookId;
  }
  updateDisplay() {
    if (this.displayMode === 'bookmarks') {
      this.fetchUserBookmarks();
    }
  }
  async fetchUserBookmarks() {
    if (!this.api.identifier) {
      return;
    }
    await this.fetchBookmarks();
    this.initializeBookmarks();
  }
  setBREventListeners() {
    ['3PageViewSelected'].forEach(event => {
      window.addEventListener(`BookReader:${event}`, e => {
        setTimeout(() => {
          // wait a lil bit so bookreader can draw its DOM to attach onto
          this.renderBookmarkButtons();
        }, 100);
      });
    });
    ['pageChanged', '1PageViewSelected', '2PageViewSelected'].forEach(event => {
      window.addEventListener(`BookReader:${event}`, e => {
        setTimeout(() => {
          // wait a lil bit so bookreader can draw its DOM to attach onto
          this.renderBookmarkButtons();
          this.markActiveBookmark();
        }, 100);
      });
    });
    ['zoomOut', 'zoomIn', 'resize'].forEach(event => {
      window.addEventListener(`BookReader:${event}`, () => {
        this.renderBookmarkButtons();
      });
    });
  }
  initializeBookmarks() {
    this.renderBookmarkButtons();
    this.markActiveBookmark(true);
    this.emitBookmarksChanged();
  }

  /**
   * @typedef {object} Bookmark
   * @property {number} id - bookreader page index, becomes key store
   * @property {number} color - color number
   * @property {string} page - bookmark's page label to display
   * @property {string} note - optional, note that one can add
   * @property {string} thumbnail - optional, image url
   */
  /**
   * Formats bookmark view model
   * @param {Object} bookmarkAttrs
   * @param {number} bookmarkAttrs.leafNum
   * @param {string} bookmarkAttrs.notes
   *
   * @returns Bookmark
   */
  formatBookmark({
    leafNum = '',
    notes = {}
  }) {
    const {
      note = '',
      color
    } = notes;
    const nomalizedParams = {
      note,
      color: this.getBookmarkColor(color) ? color : this.defaultColor.id
    };
    const page = IABookmarks.formatPage(this.bookreader.book.getPageNum(leafNum));
    const thumbnail = this.bookreader.book.getPageURI(`${leafNum}`.replace(/\D/g, ''), 32); // Request thumbnail 1/32 the size of original image
    const bookmark = {
      ...nomalizedParams,
      id: leafNum,
      leafNum,
      page,
      thumbnail
    };
    return bookmark;
  }
  async fetchBookmarks() {
    const resText = await this.api.getAll().then(r => r.text());
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(resText);
    } catch (e) {
      parsedResponse = {
        error: e.message
      };
    }
    const {
      success,
      error = 'Something happened while fetching bookmarks.',
      value: bkmrks = []
    } = parsedResponse;
    if (!success) {
      console?.warn('Error fetching bookmarks', error);
    }
    const bookmarks = {};
    Object.keys(bkmrks).forEach(leafNum => {
      const bookmark = bkmrks[leafNum];
      const formattedLeafNum = parseInt(leafNum, 10);
      const formattedBookmark = this.formatBookmark({
        ...bookmark,
        leafNum: formattedLeafNum
      });
      bookmarks[leafNum] = formattedBookmark;
    });
    this.bookmarks = bookmarks;
    return bookmarks;
  }
  emitBookmarksChanged() {
    this.dispatchEvent(new CustomEvent('bookmarksChanged', {
      bubbles: true,
      composed: true,
      detail: {
        bookmarks: this.bookmarks
      }
    }));
  }
  emitBookmarkButtonClicked() {
    this.dispatchEvent(new CustomEvent('bookmarkButtonClicked', {
      bubbles: true,
      composed: true,
      detail: {
        editedBookmark: this.editedBookmark
      }
    }));
  }
  bookmarkButtonClicked(pageID) {
    if (this.getBookmark(pageID)) {
      this.confirmDeletion(pageID);
    } else {
      this.createBookmark(pageID);
    }
  }
  renderBookmarkButtons() {
    const pages = this.bookreader.$('.BRpagecontainer').not('.BRemptypage').get();
    pages.forEach(pageEl => {
      const existingButton = pageEl.querySelector('.bookmark-button');
      if (existingButton) {
        existingButton.remove();
      }
      const pageID = +pageEl.classList.value.match(/pagediv\d+/)[0].replace(/\D/g, '');
      const pageBookmark = this.getBookmark(pageID);
      const bookmarkState = pageBookmark ? 'filled' : 'hollow';
      // eslint-disable-next-line
      const pageData = this.bookreader.book.getPage(pageID);
      const {
        isViewable
      } = pageData;
      if (!isViewable) {
        return;
      }
      const bookmarkButton = document.createElement('div');
      ['mousedown', 'mouseup'].forEach(event => {
        bookmarkButton.addEventListener(event, e => e.stopPropagation());
      });
      bookmarkButton.classList.add('bookmark-button', bookmarkState);
      if (pageBookmark) {
        bookmarkButton.classList.add(this.getBookmarkColor(pageBookmark.color));
      }
      const pageSide = pageEl.getAttribute('data-side') === 'L' && this.bookreader.mode === this.bookreader.constMode2up ? 'left' : 'right';
      (0,lit__WEBPACK_IMPORTED_MODULE_0__.render)((0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
        <bookmark-button
          @bookmarkButtonClicked=${() => this.bookmarkButtonClicked(pageID)}
          state=${bookmarkState}
          side=${pageSide}
        ></bookmark-button>`, bookmarkButton);
      pageEl.appendChild(bookmarkButton);
    });
  }

  /**
   * Notes which bookmark is active
   *
   * @param {boolean} atSetup - denotes the first time this is fired
   */
  markActiveBookmark(atSetup = false) {
    const {
      mode,
      constMode2up,
      constModeThumb
    } = this.bookreader;
    const currentIndex = this.bookreader.currentIndex();
    if (mode === constModeThumb) {
      // keep active bookmark the same
      // no syncing until we can verify when a bookmark is "in view"
      const requestedPageHasBookmark = this.bookmarks[currentIndex];
      if (atSetup && requestedPageHasBookmark) {
        this.activeBookmarkID = currentIndex;
      }
      return;
    }
    // In 2up, we prefer the right side of the page to bookmark
    // so let's make sure we light that one up.
    if (mode === constMode2up) {
      const pagesInView = this.bookreader.displayedIndices;
      const pagesHaveActiveBookmark = pagesInView.includes(+this.activeBookmarkID);
      if (pagesHaveActiveBookmark) {
        return;
      }
    }

    // If a bookmark exists with the current index, set it as active
    if (this.bookmarks[currentIndex]) {
      this.activeBookmarkID = currentIndex;
      return;
    }

    // No bookmark for this page
    this.activeBookmarkID = '';
  }
  bookmarkEdited({
    detail
  }) {
    const closeEdit = detail.bookmark.id === this.editedBookmark.id;
    this.editedBookmark = closeEdit ? {} : detail.bookmark;
  }

  /**
   * Gets bookmark by pageindex
   * @param {number} id
   */
  getBookmark(id) {
    return this.bookmarks[id];
  }
  getBookmarkColor(id) {
    return this.bookmarkColors.find(m => m.id === id)?.className;
  }

  /**
   * Adds bookmark for current page
   */
  addBookmark() {
    let pageID = this.bookreader.currentIndex();
    if (this.bookreader.mode === this.bookreader.constMode2up) {
      const pagesInView = this.bookreader.displayedIndices;

      // add bookmark to right hand page
      pageID = pagesInView[pagesInView.length - 1];
    }
    this.createBookmark(pageID);
  }

  /**
   * Creates bookmark for a given page
   * @param {number} pageID
   */
  createBookmark(pageID) {
    const existingBookmark = this.getBookmark(pageID);
    if (existingBookmark) {
      this.bookmarkEdited({
        detail: {
          bookmark: existingBookmark
        }
      });
      this.emitBookmarkButtonClicked();
      return;
    }
    this.editedBookmark = this.formatBookmark({
      leafNum: pageID
    });
    this.api.post(this.editedBookmark);
    this.bookmarks[pageID] = this.editedBookmark;
    this.activeBookmarkID = pageID;
    this.disableAddBookmarkButton = true;
    this.renderBookmarkButtons();
    this.emitBookmarkButtonClicked();
  }
  bookmarkSelected({
    detail
  }) {
    const {
      leafNum
    } = detail.bookmark;
    this.bookreader.jumpToPage(`${this.bookreader.book.getPageNum(`${leafNum}`.replace(/\D/g, ''))}`);
    this.activeBookmarkID = leafNum;
  }
  saveBookmark({
    detail
  }) {
    const existingBookmark = this.bookmarks[detail.bookmark.id];
    Object.assign(existingBookmark, detail.bookmark);
    this.api.put(existingBookmark);
    this.editedBookmark = {};
    this.renderBookmarkButtons();
  }
  confirmDeletion(pageID) {
    const existingBookmark = this.getBookmark(pageID);
    if (existingBookmark.note) {
      this.displayDeletionModal(pageID);
      return;
    }
    this.deleteBookmark({
      detail: {
        id: `${pageID}`
      }
    });
  }
  displayDeletionModal(pageID) {
    const customModalContent = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <delete-modal-actions
        .deleteAction=${() => this.deleteBookmark({
      detail: {
        id: `${pageID}`
      }
    })}
        .cancelAction=${() => this.modal.closeModal()}
        .pageID=${pageID}
      ></delete-modal-actions>
    `;
    this.modal.showModal({
      config: this.deleteModalConfig,
      customModalContent
    });
  }
  deleteBookmark({
    detail
  }) {
    const {
      id
    } = detail;
    const currBookmarks = this.bookmarks;
    delete currBookmarks[id];
    this.bookmarks = {
      ...currBookmarks
    };
    this.api.delete(detail.id);
    this.editedBookmark = {};
    this.modal.closeModal();
    this.renderBookmarkButtons();
  }

  /**
   * Tells us if we should allow user to add bookmark via menu panel
   * returns { Boolean }
   */
  get shouldEnableAddBookmarkButton() {
    const pageToCheck = this.bookreader.mode === this.bookreader.constMode2up ? this.bookreader.displayedIndices[this.bookreader.displayedIndices.length - 1] : this.bookreader.currentIndex();
    const pageHasBookmark = this.getBookmark(pageToCheck);
    return !!pageHasBookmark;
  }
  get allowAddingBookmark() {
    return this.bookreader.mode !== this.bookreader.constModeThumb;
  }
  get addBookmarkButton() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <button
        class="ia-button primary"
        tabindex="-1"
        ?disabled=${this.shouldEnableAddBookmarkButton}
        @click=${this.addBookmark}>
        Add bookmark
      </button>
    `;
  }
  get bookmarksList() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <ia-bookmarks-list
        @bookmarkEdited=${this.bookmarkEdited}
        @bookmarkSelected=${this.bookmarkSelected}
        @saveBookmark=${this.saveBookmark}
        @deleteBookmark=${this.deleteBookmark}
        .editedBookmark=${this.editedBookmark}
        .bookmarks=${{
      ...this.bookmarks
    }}
        .activeBookmarkID=${this.activeBookmarkID}
        .bookmarkColors=${this.bookmarkColors}
        .defaultBookmarkColor=${this.defaultColor}>
      </ia-bookmarks-list>
    `;
  }
  get bookmarkHelperMessage() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<p>Please use 1up or 2up view modes to add bookmark.</p>`;
  }
  render() {
    const bookmarks = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      ${this.bookmarksList}
      ${this.allowAddingBookmark ? this.addBookmarkButton : this.bookmarkHelperMessage}
    `;
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <section class="bookmarks">
      ${this.displayMode === 'login' ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<bookmarks-login
        @click=${() => this.loginOptions.loginClicked()}
        .url=${this.loginOptions.loginUrl}></bookmarks-login>` : bookmarks}
      </section>
    `;
  }
}
customElements.define('ia-bookmarks', IABookmarks);

/***/ }),

/***/ "./src/BookNavigator/delete-modal-actions.js":
/*!***************************************************!*\
  !*** ./src/BookNavigator/delete-modal-actions.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeleteModalActions; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");

class DeleteModalActions extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
      div {
        display: flex;
        justify-content: center;
        padding-top: 2rem;
      }

      button {
        appearance: none;
        padding: 0.5rem 1rem;
        margin: 0 .5rem;
        box-sizing: border-box;
        font: 1.3rem "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: var(--primaryTextColor);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        background: var(--primaryCTAFill);
      }

      .delete {
        background: var(--primaryErrorCTAFill);
      }
    `;
  }
  static get properties() {
    return {
      cancelAction: {
        type: Function
      },
      deleteAction: {
        type: Function
      },
      pageID: {
        type: String
      }
    };
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div>
        <button class="delete" @click=${() => this.deleteAction({
      detail: {
        id: `${this.pageID}`
      }
    })}>Delete</button>
        <button @click=${() => this.cancelAction()}>Cancel</button>
      </div>
    `;
  }
}
customElements.define('delete-modal-actions', DeleteModalActions);

/***/ }),

/***/ "./src/BookNavigator/downloads/downloads-provider.js":
/*!***********************************************************!*\
  !*** ./src/BookNavigator/downloads/downloads-provider.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DownloadsProvider; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_icon_dl_icon_dl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internetarchive/icon-dl/icon-dl */ "./node_modules/@internetarchive/icon-dl/icon-dl.js");
/* harmony import */ var _downloads__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./downloads */ "./src/BookNavigator/downloads/downloads.js");



const menuBase = {
  pdf: {
    type: 'Encrypted Adobe PDF',
    url: '#',
    note: 'PDF files contain high quality images of pages.'
  },
  lcppdf: {
    type: 'Get LCP PDF',
    url: '#',
    note: 'PDF files contain high quality images of pages.'
  },
  lcpepub: {
    type: 'Get LCP ePub',
    url: '#',
    note: 'ePub files are smaller in size, but may contain errors.'
  },
  epub: {
    type: 'Encrypted Adobe ePub',
    url: '#',
    note: 'ePub files are smaller in size, but may contain errors.'
  }
};
const publicMenuBase = {
  pdf: "PDF",
  epub: "ePub",
  lcppdf: "LCP PDF",
  lcpepub: "LCP ePub"
};
class DownloadsProvider {
  constructor({
    bookreader
  }) {
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<ia-icon-dl style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-dl>`;
    this.label = 'Downloadable files';
    this.menuDetails = '';
    this.downloads = [];
    this.id = 'downloads';
    this.component = '';
    this.isBookProtected = bookreader?.options?.isProtected || false;
  }
  update(downloadTypes) {
    this.computeAvailableTypes(downloadTypes);
    this.component = this.menu;
    this.component.isBookProtected = this.isBookProtected;
    const ending = this.downloads.length === 1 ? '' : 's';
    this.menuDetails = `(${this.downloads.length} format${ending})`;
  }

  /**
   * Generates Download Menu Info for available types
   * sets global `downloads`
   * @param  availableTypes
   */
  computeAvailableTypes(availableTypes = []) {
    const menuData = availableTypes.reduce((found, incoming = []) => {
      const [type = '', link = ''] = incoming;
      const formattedType = type.toLowerCase();
      const downloadOption = menuBase[formattedType] || null;
      if (downloadOption) {
        const menuButtonText = this.isBookProtected ? menuBase[formattedType].type : publicMenuBase[formattedType];
        const menuInfo = Object.assign({}, downloadOption, {
          url: link,
          type: menuButtonText
        });
        found.push(menuInfo);
      }
      return found;
    }, []);
    this.downloads = menuData;
  }
  get menu() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<ia-book-downloads .downloads=${this.downloads}></ia-book-downloads>`;
  }
}

/***/ }),

/***/ "./src/BookNavigator/downloads/downloads.js":
/*!**************************************************!*\
  !*** ./src/BookNavigator/downloads/downloads.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IABookDownloads: function() { return /* binding */ IABookDownloads; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");


class IABookDownloads extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get properties() {
    return {
      downloads: {
        type: Array
      },
      expiration: {
        type: Number
      },
      renderHeader: {
        type: Boolean
      },
      isBookProtected: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this.downloads = [];
    this.expiration = 0;
    this.renderHeader = false;
    this.isBookProtected = false;
  }
  get formatsCount() {
    const count = this.downloads.length;
    return count ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<p>${count} format${count > 1 ? 's' : ''}</p>` : (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
  }
  get loanExpiryMessage() {
    return this.expiration ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<h2>These files will expire in ${this.expiration} days.</h2>` : (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``;
  }
  renderDownloadOptions() {
    return this.downloads.map(option => (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
        <li>
          <a class="ia-button link primary" href="${option.url}">Get ${option.type}</a>
          ${option.note ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<p>${option.note}</p>` : (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)``}
        </li>
      `);
  }

  /**
   * checks if downloads list contains an LCP option
   * @return {boolean}
   */
  get hasLCPOption() {
    const regex = /^(LCP)/g;
    const lcpAvailable = this.downloads.some(option => option.type?.match(regex));
    return lcpAvailable;
  }
  get header() {
    if (!this.renderHeader) {
      return lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <header>
        <h3>Downloadable files</h3>
        ${this.formatsCount}
      </header>
    `;
  }
  get accessProtectedBook() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <p>To access downloaded books, you need Adobe-compliant software on your device. The Internet Archive will administer this loan, but Adobe may also collect some information.</p>
      <a class="ia-button external primary" href="https://www.adobe.com/solutions/ebook/digital-editions/download.html" rel="noopener noreferrer" target="_blank">Install Adobe Digital Editions</a>
    `;
  }
  get installSimplyEAldikoThoriumMsg() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
    <p>For LCP downloads, make sure you have SimplyE or Aldiko Next installed on mobile or Thorium on desktop.</p>
    <ul>
      <li><a href="https://librarysimplified.org/simplye/" rel="noopener noreferrer nofollow" target="_blank">Install SimplyE</a></li>
      <li><a href="https://www.demarque.com/en-aldiko" rel="noopener noreferrer nofollow" target="_blank">Install Aldiko</a></li>
      <li><a href="https://www.edrlab.org/software/thorium-reader/" rel="noopener noreferrer nofollow" target="_blank">Install Thorium</a></li>
    </ul>
  `;
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      ${this.header}
      ${this.loanExpiryMessage}
      <ul>${this.renderDownloadOptions()}</ul>
      ${this.hasLCPOption ? this.installSimplyEAldikoThoriumMsg : this.isBookProtected ? this.accessProtectedBook : lit__WEBPACK_IMPORTED_MODULE_0__.nothing}
    `;
  }
  static get styles() {
    const mainCss = (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
      :host {
        display: block;
        height: 100%;
        padding: 1.5rem 0;
        overflow-y: auto;
        font-size: 1.4rem;
        box-sizing: border-box;
      }

      a.close ia-icon {
        --iconWidth: 18px;
        --iconHeight: 18px;
      }
      a.close {
        justify-self: end;
      }

      header {
        display: flex;
        align-items: center;
        padding: 0 2rem;
      }
      header p {
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
        font-weight: bold;
        font-style: italic;
      }
      header div {
        display: flex;
        align-items: baseline;
      }      

      h2 {
        font-size: 1.6rem;
      }

      h3 {
        padding: 0;
        margin: 0 1rem 0 0;
        font-size: 1.4rem;
      }

      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }

      p {
        margin: .3rem 0 0 0;
      }

      li,
      ul + p {
        padding-bottom: 1.2rem;
        font-size: 1.2rem;
        line-height: 140%;
      }
    `;
    return [_assets_button_base_js__WEBPACK_IMPORTED_MODULE_1__["default"], mainCss];
  }
}
customElements.define('ia-book-downloads', IABookDownloads);

/***/ }),

/***/ "./src/BookNavigator/search/search-provider.js":
/*!*****************************************************!*\
  !*** ./src/BookNavigator/search/search-provider.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SearchProvider; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_icon_search_icon_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internetarchive/icon-search/icon-search */ "./node_modules/@internetarchive/icon-search/icon-search.js");
/* harmony import */ var _search_results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-results */ "./src/BookNavigator/search/search-results.js");



/** @typedef {import('@/src/plugins/search/plugin.search.js').SearchInsideMatch} SearchInsideMatch */

let searchState = {
  query: '',
  results: [],
  resultsCount: 0,
  queryInProgress: false,
  errorMessage: ''
};
class SearchProvider {
  constructor({
    onProviderChange,
    bookreader
  }) {
    /* search menu events */
    this.onBookSearchInitiated = this.onBookSearchInitiated.bind(this);
    /* bookreader search events */
    this.onSearchStarted = this.onSearchStarted.bind(this);
    this.onSearchRequestError = this.onSearchRequestError.bind(this);
    this.onSearchResultsClicked = this.onSearchResultsClicked.bind(this);
    this.onSearchResultsChange = this.onSearchResultsChange.bind(this);
    this.onSearchResultsCleared = this.onSearchResultsCleared.bind(this);
    this.searchCanceledInMenu = this.searchCanceledInMenu.bind(this);

    /* class methods */
    this.bindEventListeners = this.bindEventListeners.bind(this);
    this.getMenuDetails = this.getMenuDetails.bind(this);
    this.getComponent = this.getComponent.bind(this);
    this.updateMenu = this.updateMenu.bind(this);
    this.onProviderChange = onProviderChange;
    /** @type {import('@/src/BookReader.js').default} */
    this.bookreader = bookreader;
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<ia-icon-search style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-search>`;
    this.label = 'Search inside';
    this.menuDetails = this.getMenuDetails();
    this.id = 'search';
    this.component = this.getComponent();
    this.bindEventListeners();
  }
  getMenuDetails() {
    const {
      resultsCount,
      query,
      queryInProgress
    } = searchState;
    if (queryInProgress || !query) {
      return lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
    }
    const unit = resultsCount === 1 ? 'result' : 'results';
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`(${resultsCount} ${unit})`;
  }
  bindEventListeners() {
    window.addEventListener('BookReader:SearchStarted', this.onSearchStarted);
    window.addEventListener('BookReader:SearchCallback', this.onSearchResultsChange);
    window.addEventListener('BookReader:SearchCallbackEmpty', event => {
      this.onSearchRequestError(event, 'noResults');
    });
    window.addEventListener('BookReader:SearchCallbackNotIndexed', event => {
      this.onSearchRequestError(event, 'notIndexed');
    });
    window.addEventListener('BookReader:SearchCallbackError', event => {
      this.onSearchRequestError(event);
    });
    window.addEventListener('BookReader:SearchResultsCleared', () => {
      this.onSearchResultsCleared();
    });
    window.addEventListener('BookReader:SearchCanceled', e => {
      this.onSearchCanceled(e);
    });
  }

  /**
   * Cancel search handler
   * resets `searchState`
   */
  onSearchCanceled() {
    searchState = {
      query: '',
      results: [],
      resultsCount: 0,
      queryInProgress: false,
      errorMessage: ''
    };
    const updateMenuFor = {
      searchCanceled: true
    };
    this.updateMenu(updateMenuFor);
    if (this.bookreader.urlPlugin) {
      this.updateSearchInUrl();
    }
  }
  onSearchStarted(e) {
    const {
      term = '',
      instance
    } = e.detail.props;
    if (instance) {
      this.bookreader = instance;
    }
    searchState.query = term;
    searchState.results = [];
    searchState.resultsCount = 0;
    searchState.queryInProgress = true;
    searchState.errorMessage = '';
    this.updateMenu();
  }
  onBookSearchInitiated({
    detail
  }) {
    searchState.query = detail.query;
    this.bookreader.search(searchState.query);
  }
  onSearchRequestError(event, errorType = 'default') {
    const {
      detail: {
        props = {}
      }
    } = event;
    const {
      instance = null
    } = props;
    if (instance) {
      /* keep bookreader instance reference up-to-date */
      this.bookreader = instance;
    }
    const errorMessages = {
      noResults: '0 results',
      notIndexed: `This book hasn't been indexed for searching yet.  We've just started indexing it,
       so search should be available soon.  Please try again later.  Thanks!`,
      default: 'Sorry, there was an error with your search.  Please try again.'
    };
    const messageToShow = errorMessages[errorType] ?? errorMessages.default;
    searchState.query = instance?.searchResults?.q || '';
    searchState.results = [];
    searchState.resultsCount = 0;
    searchState.queryInProgress = false;
    searchState.errorMessage = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<p class="error">${messageToShow}</p>`;
    this.updateMenu();
  }
  onSearchResultsChange({
    detail: {
      props = {}
    }
  }) {
    const {
      instance = null,
      results: searchResults = []
    } = props;
    if (instance) {
      /* keep bookreader instance reference up-to-date */
      this.bookreader = instance;
    }
    const results = searchResults.matches || [];
    const resultsCount = results.length;
    const query = searchResults.q;
    const queryInProgress = false;
    searchState = {
      results,
      resultsCount,
      query,
      queryInProgress,
      errorMessage: ''
    };
    this.updateMenu();
  }
  searchCanceledInMenu() {
    this.bookreader?.cancelSearchRequest();
  }
  onSearchResultsCleared() {
    searchState = {
      query: '',
      results: [],
      resultsCount: 0,
      queryInProgress: false,
      errorMessage: ''
    };
    this.updateMenu({
      openMenu: false
    });
    this.bookreader?.searchView?.clearSearchFieldAndResults(false);
    if (this.bookreader.urlPlugin) {
      this.updateSearchInUrl();
    }
  }

  /** update URL `q=<term>` query param in URL */
  updateSearchInUrl() {
    if (this.bookreader.urlPlugin) {
      this.bookreader.urlPlugin.pullFromAddressBar();
      if (searchState.query) {
        this.bookreader.urlPlugin.setUrlParam('q', searchState.query);
      } else {
        this.bookreader.urlPlugin.removeUrlParam('q');
      }
    }
  }

  /**
   * Relays how to update side menu given the context of a search update
    @param {{searchCanceled: boolean}} searchUpdates
   */
  updateMenu(searchUpdates = {}) {
    this.menuDetails = this.getMenuDetails();
    this.component = this.getComponent();
    this.onProviderChange(this.bookreader, searchUpdates);
  }
  getComponent() {
    const {
      query,
      results,
      queryInProgress,
      errorMessage
    } = searchState;
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
    <ia-book-search-results
      .query=${query}
      .results=${results}
      .errorMessage=${errorMessage}
      ?queryInProgress=${queryInProgress}
      ?renderSearchAllFiles=${false}
      @resultSelected=${this.onSearchResultsClicked}
      @bookSearchInitiated=${this.onBookSearchInitiated}
      @bookSearchResultsCleared=${this.onSearchResultsCleared}
      @bookSearchCanceled=${this.searchCanceledInMenu}
    ></ia-book-search-results>
  `;
  }

  /**
   * @param {{ detail: {match: SearchInsideMatch} }} param0
   */
  onSearchResultsClicked({
    detail
  }) {
    this.bookreader._searchPluginGoToResult(detail.match.matchIndex);
  }
}

/***/ }),

/***/ "./src/BookNavigator/search/search-results.js":
/*!****************************************************!*\
  !*** ./src/BookNavigator/search/search-results.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IABookSearchResults: function() { return /* binding */ IABookSearchResults; }
/* harmony export */ });
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit/directives/unsafe-html.js */ "./node_modules/lit/directives/unsafe-html.js");
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_ia_activity_indicator_ia_activity_indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internetarchive/ia-activity-indicator/ia-activity-indicator */ "./node_modules/@internetarchive/ia-activity-indicator/ia-activity-indicator.js");
/* harmony import */ var _assets_icon_checkmark_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icon_checkmark.js */ "./src/BookNavigator/assets/icon_checkmark.js");
/* harmony import */ var _assets_icon_close_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icon_close.js */ "./src/BookNavigator/assets/icon_close.js");
/* harmony import */ var _assets_button_base_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/button-base.js */ "./src/BookNavigator/assets/button-base.js");
/* eslint-disable class-methods-use-this */






/** @typedef {import('@/src/plugins/search/plugin.search.js').SearchInsideMatch} SearchInsideMatch */

class IABookSearchResults extends lit__WEBPACK_IMPORTED_MODULE_1__.LitElement {
  static get properties() {
    return {
      results: {
        type: Array
      },
      query: {
        type: String
      },
      queryInProgress: {
        type: Boolean
      },
      renderHeader: {
        type: Boolean
      },
      renderSearchAllFiles: {
        type: Boolean
      },
      displayResultImages: {
        type: Boolean
      },
      errorMessage: {
        type: String
      }
    };
  }
  constructor() {
    super();

    /** @type {SearchInsideMatch[]} */
    this.results = [];
    this.query = '';
    this.queryInProgress = false;
    this.renderHeader = false;
    this.renderSearchAllFields = false;
    this.displayResultImages = false;
    this.errorMessage = '';
    this.bindBookReaderListeners();
  }

  /** @inheritdoc */
  updated() {
    this.focusOnInputIfNecessary();
  }
  bindBookReaderListeners() {
    document.addEventListener('BookReader:SearchCallback', this.setResults.bind(this));
  }

  /**
   * Provide immediate input focus if there aren't any results displayed
   */
  focusOnInputIfNecessary() {
    if (this.results.length) {
      return;
    }
    const searchInput = this.shadowRoot.querySelector('input[type=\'search\']');
    searchInput.focus();
  }
  setResults({
    detail
  }) {
    this.results = detail.results;
  }
  setQuery(e) {
    this.query = e.currentTarget.value;
    if (!this.query) {
      this.cancelSearch();
    }
  }
  performSearch(e) {
    e.preventDefault();
    const input = e.currentTarget.querySelector('input[type="search"]');
    if (!input || !input.value) {
      return;
    }
    this.dispatchEvent(new CustomEvent('bookSearchInitiated', {
      bubbles: true,
      composed: true,
      detail: {
        query: this.query
      }
    }));
  }

  /**
   * @param {SearchInsideMatch} match
   */
  selectResult(match) {
    this.dispatchEvent(new CustomEvent('resultSelected', {
      bubbles: true,
      composed: true,
      detail: {
        match
      }
    }));
    this.dispatchEvent(new CustomEvent('closeMenu', {
      bubbles: true,
      composed: true
    }));
  }
  cancelSearch() {
    this.queryInProgress = false;
    this.dispatchSearchCanceled();
  }
  dispatchSearchCanceled() {
    this.dispatchEvent(new Event('bookSearchCanceled'));
  }
  get resultsCount() {
    const count = this.results.length;
    return count ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`<p>(${count} result${count > 1 ? 's' : ''})</p>` : lit__WEBPACK_IMPORTED_MODULE_1__.nothing;
  }
  get headerSection() {
    const header = (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`<header>
      <h3>Search inside</h3>
      ${this.resultsCount}
    </header>`;
    return this.renderHeader ? header : lit__WEBPACK_IMPORTED_MODULE_1__.nothing;
  }
  get searchMultipleControls() {
    const controls = (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <input name="all_files" id="all_files" type="checkbox" />
      <label class="checkbox" for="all_files">Search all files</label>
    `;
    return this.renderSearchAllFiles ? controls : lit__WEBPACK_IMPORTED_MODULE_1__.nothing;
  }
  get loadingIndicator() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <div class="loading">
        <ia-activity-indicator mode="processing"></ia-activity-indicator>
        <p>Searching</p>
        <button class="ia-button external cancel-search" @click=${this.cancelSearch}>Cancel</button>
      </div>
    `;
  }
  get resultsSet() {
    const resultsClass = this.displayResultImages ? 'show-image' : '';
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <ul class="results ${resultsClass}">
        ${this.results.map(match => (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
            <li @click=${this.selectResult.bind(this, match)}>
              ${match.cover ? (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`<img src="${match.cover}" />` : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
              <h4>${match.title || lit__WEBPACK_IMPORTED_MODULE_1__.nothing}</h4>
              <p class="page-num">Page ${match.displayPageNumber}</p>
              <p>${(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.unsafeHTML)(match.html)}</p>
            </li>
          `)}
      </ul>
    `;
  }
  get searchForm() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <form action="" method="get" @submit=${this.performSearch}>
        <fieldset>
          ${this.searchMultipleControls}
          <input
            type="search"
            name="query"
            alt="Search inside this book."
            @keyup=${this.setQuery}
            @search=${this.setQuery}
            .value=${this.query}
          />
        </fieldset>
      </form>
    `;
  }
  get setErrorMessage() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      <p class="error-message">${this.errorMessage}</p>
    `;
  }
  get searchCTA() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`<p class="search-cta"><em>Please enter text to search for</em></p>`;
  }
  render() {
    const showSearchCTA = !this.queryInProgress && !this.errorMessage && !this.queryInProgress && !this.results.length;
    return (0,lit__WEBPACK_IMPORTED_MODULE_1__.html)`
      ${this.headerSection}
      ${this.searchForm}
      <div class="results-container">
        ${this.queryInProgress ? this.loadingIndicator : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${this.errorMessage ? this.setErrorMessage : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${this.results.length ? this.resultsSet : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
        ${showSearchCTA ? this.searchCTA : lit__WEBPACK_IMPORTED_MODULE_1__.nothing}
      </div>
    `;
  }
  static get styles() {
    const searchResultText = (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)`var(--searchResultText, #adaedc)`;
    const searchResultBg = (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)`var(--searchResultBg, #272958)`;
    const searchResultBorder = (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)`var(--searchResultBorder, #adaedc)`;
    const activeButtonBg = (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)`(--tertiaryBGColor, #333)`;
    const mainCSS = (0,lit__WEBPACK_IMPORTED_MODULE_1__.css)`
      :host {
        display: block;
        height: 100%;
        padding: 1.5rem 1rem 2rem 0;
        overflow-y: auto;
        font-size: 1.4rem;
        box-sizing: border-box;
      }

      mark {
        padding: 0 .2rem;
        color: ${searchResultText};
        background: ${searchResultBg};
        border: 1px solid ${searchResultBorder};
        border-radius: 2px;
      }

      h3 {
        padding: 0;
        margin: 0 1rem 0 0;
        font-size: 2rem;
      }

      header {
        display: flex;
        align-items: center;
        padding: 0 2rem 0 0;
      }
      header p {
        padding: 0;
        margin: 0;
        font-size: 1.2rem;
        font-weight: bold;
        font-style: italic;
      }

      fieldset {
        padding: 0 0 1rem 0;
        border: none;
      }

      [type="checkbox"] {
        display: none;
      }

      label {
        display: block;
        text-align: center;
      }

      label.checkbox {
        padding-bottom: .5rem;
        font-size: 1.6rem;
        line-height: 150%;
        vertical-align: middle;
      }

      label.checkbox:after {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-left: .7rem;
        content: "";
        border-radius: 2px;
      }
      :checked + label.checkbox:after {
        background-image: url('${_assets_icon_checkmark_js__WEBPACK_IMPORTED_MODULE_3__["default"]}');
      }

      label.checkbox[for="all_files"]:after {
        background: ${activeButtonBg} 50% 50% no-repeat;
        border: 1px solid var(--primaryTextColor);
      }

      [type="search"] {
        color: var(--primaryTextColor);
        border: 1px solid var(--primaryTextColor);
        -webkit-appearance: textfield;
        width: 100%;
        height: 3rem;
        padding: 0 1.5rem;
        box-sizing: border-box;
        font: normal 1.6rem "Helvetica qNeue", Helvetica, Arial, sans-serif;
        border-radius: 1.5rem;
        background: transparent;
      }
      [type="search"]:focus {
        outline: none;
      }
      [type="search"]::-webkit-search-cancel-button {
        width: 18px;
        height: 18px;
        -webkit-appearance: none;
        appearance: none;
        -webkit-mask: url('${_assets_icon_close_js__WEBPACK_IMPORTED_MODULE_4__["default"]}') 0 0 no-repeat;
        mask: url('${_assets_icon_close_js__WEBPACK_IMPORTED_MODULE_4__["default"]}') 0 0 no-repeat;
        -webkit-mask-size: 100%;
        mask-size: 100%;
        background: #fff;
      }

      p.page-num {
        font-weight: bold;
        padding-bottom: 0;
      }

      p.search-cta {
        text-align: center;
      }

      .results-container {
        padding-bottom: 2rem;
      }

      ul {
        padding: 0 0 2rem 0;
        margin: 0;
        list-style: none;
      }

      ul.show-image li {
        display: grid;
      }

      li {
        cursor: pointer;
        grid-template-columns: 30px 1fr;
        grid-gap: 0 .5rem;
      }

      li img {
        display: block;
        width: 100%;
      }

      li h4 {
        grid-column: 2 / 3;
        padding: 0 0 2rem 0;
        margin: 0;
        font-weight: normal;
      }

      li p {
        grid-column: 2 / 3;
        padding: 0 0 1.5rem 0;
        margin: 0;
        font-size: 1.2rem;
      }

      .loading {
        text-align: center;
      }

      .loading p {
        padding: 0 0 1rem 0;
        margin: 0;
        font-size: 1.2rem;
      }

      ia-activity-indicator {
        display: block;
        width: 40px;
        height: 40px;
        margin: 0 auto;
      }
    `;
    return [_assets_button_base_js__WEBPACK_IMPORTED_MODULE_5__["default"], mainCSS];
  }
}
customElements.define('ia-book-search-results', IABookSearchResults);

/***/ }),

/***/ "./src/BookNavigator/sharing.js":
/*!**************************************!*\
  !*** ./src/BookNavigator/sharing.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SharingProvider; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_ia_item_navigator_dist_src_menus_share_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internetarchive/ia-item-navigator/dist/src/menus/share-panel */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/share-panel.js");



class SharingProvider {
  constructor({
    item,
    baseHost,
    bookreader
  }) {
    const {
      identifier,
      creator,
      title
    } = item?.metadata;
    const creatorToUse = Array.isArray(creator) ? creator[0] : creator;
    const subPrefix = bookreader.options.subPrefix || '';
    const label = `Share this book`;
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`${_internetarchive_ia_item_navigator_dist_src_menus_share_panel__WEBPACK_IMPORTED_MODULE_1__.iauxShareIcon}`;
    this.label = label;
    this.id = 'share';
    this.component = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<iaux-in-share-panel
      .identifier=${identifier}
      .type=${`book`}
      .creator=${creatorToUse}
      .description=${title}
      .baseHost=${baseHost}
      .fileSubPrefix=${subPrefix}
    ></iaux-in-share-panel>`;
  }
}

/***/ }),

/***/ "./src/BookNavigator/viewable-files.js":
/*!*********************************************!*\
  !*** ./src/BookNavigator/viewable-files.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ViewableFilesProvider; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_ia_item_navigator_dist_src_menus_viewable_files__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internetarchive/ia-item-navigator/dist/src/menus/viewable-files */ "./node_modules/@internetarchive/ia-item-navigator/dist/src/menus/viewable-files.js");




/**
 * * @typedef { 'title_asc' | 'title_desc' | 'default'} SortTypesT
 */
const sortTypes = {
  title_asc: 'title_asc',
  title_desc: 'title_desc',
  default: 'default'
};
class ViewableFilesProvider {
  /**
   * @param {import('../BookReader').default} bookreader
   */
  constructor({
    baseHost,
    bookreader,
    onProviderChange
  }) {
    /** @type {import('../BookReader').default} */
    this.bookreader = bookreader;
    this.onProviderChange = onProviderChange;
    this.baseHost = baseHost;
    const files = bookreader.options.multipleBooksList.by_subprefix;
    this.viewableFiles = Object.keys(files).map(item => files[item]);
    this.volumeCount = Object.keys(files).length;
    this.id = "volumes";
    this.label = `Viewable files (${this.volumeCount})`;
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`${_internetarchive_ia_item_navigator_dist_src_menus_viewable_files__WEBPACK_IMPORTED_MODULE_1__.viewableFilesIcon}`;
    this.sortOrderBy = sortTypes.default;
    this.component = document.createElement("iaux-in-viewable-files-panel");
    this.component.addSortToUrl = true;
    this.component.subPrefix = bookreader.options.subPrefix || "";
    this.component.baseHost = baseHost;
    this.component.fileList = [...this.viewableFiles];
    this.sortFilesComponent = document.createElement("iaux-in-sort-files-button");
    this.sortFilesComponent.fileListRaw = this.viewableFiles;
    this.sortFilesComponent.addEventListener('fileListSorted', e => this.handleFileListSorted(e));
    this.actionButton = this.sortFilesComponent;

    // get sort state from query param
    if (this.bookreader.urlPlugin) {
      this.bookreader.urlPlugin.pullFromAddressBar();
      const urlSortValue = this.bookreader.urlPlugin.getUrlParam('sort');
      if (urlSortValue === sortTypes.title_asc || urlSortValue === sortTypes.title_desc) {
        this.sortOrderBy = urlSortValue;
      }
    }
    this.sortFilesComponent.sortVolumes(this.sortOrderBy);
    this.onProviderChange(this.bookreader);
  }

  /** @param { SortTypesT } sortType */
  async handleFileListSorted(event) {
    const {
      sortType,
      sortedFiles
    } = event.detail;
    this.viewableFiles = sortedFiles;
    this.sortOrderBy = sortType;

    // update the component
    this.component.fileList = [...this.viewableFiles];
    await this.component.updateComplete;
    if (this.bookreader.urlPlugin) {
      this.bookreader.urlPlugin.pullFromAddressBar();
      if (this.sortOrderBy !== sortTypes.default) {
        this.bookreader.urlPlugin.setUrlParam('sort', this.sortOrderBy);
      } else {
        this.bookreader.urlPlugin.removeUrlParam('sort');
      }
    }
    this.onProviderChange(this.bookreader);
    this.multipleFilesClicked(this.sortOrderBy);
  }

  /**
   * @param { SortTypesT } orderBy
   */
  multipleFilesClicked(orderBy) {
    window.archive_analytics?.send_event('BookReader', `VolumesSort|${orderBy}`, window.location.path);
  }
}

/***/ }),

/***/ "./src/BookNavigator/visual-adjustments/visual-adjustments-provider.js":
/*!*****************************************************************************!*\
  !*** ./src/BookNavigator/visual-adjustments/visual-adjustments-provider.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VisualAdjustmentsProvider; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_icon_visual_adjustment_icon_visual_adjustment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internetarchive/icon-visual-adjustment/icon-visual-adjustment */ "./node_modules/@internetarchive/icon-visual-adjustment/icon-visual-adjustment.js");
/* harmony import */ var _visual_adjustments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visual-adjustments */ "./src/BookNavigator/visual-adjustments/visual-adjustments.js");



const visualAdjustmentOptions = [{
  id: 'brightness',
  name: 'Adjust brightness',
  active: false,
  min: 0,
  max: 150,
  step: 1,
  value: 100
}, {
  id: 'contrast',
  name: 'Adjust contrast',
  active: false,
  min: 0,
  max: 150,
  step: 1,
  value: 100
}, {
  id: 'invert',
  name: 'Inverted colors (dark mode)',
  active: false
}, {
  id: 'grayscale',
  name: 'Grayscale',
  active: false
}];
class VisualAdjustmentsProvider {
  constructor(options) {
    const {
      onProviderChange,
      bookreader
    } = options;
    this.onProviderChange = onProviderChange;
    this.bookContainer = bookreader.refs.$brContainer;
    this.bookreader = bookreader;
    this.onAdjustmentChange = this.onAdjustmentChange.bind(this);
    this.optionUpdateComplete = this.optionUpdateComplete.bind(this);
    this.updateOptionsCount = this.updateOptionsCount.bind(this);
    this.onZoomIn = this.onZoomIn.bind(this);
    this.onZoomOut = this.onZoomOut.bind(this);
    this.activeCount = 0;
    this.icon = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<ia-icon-visual-adjustment style="width: var(--iconWidth); height: var(--iconHeight);"></ia-icon-visual-adjustment>`;
    this.label = 'Visual Adjustments';
    this.menuDetails = this.updateOptionsCount();
    this.id = 'adjustment';
    this.component = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <ia-book-visual-adjustments
        .options=${visualAdjustmentOptions}
        @visualAdjustmentOptionChanged=${this.onAdjustmentChange}
        @visualAdjustmentZoomIn=${this.onZoomIn}
        @visualAdjustmentZoomOut=${this.onZoomOut}
      ></ia-book-visual-adjustments>
    `;
  }
  onZoomIn() {
    this.bookreader.zoom(1);
  }
  onZoomOut() {
    this.bookreader.zoom(-1);
  }
  onAdjustmentChange(event) {
    const {
      detail
    } = event;
    const adjustments = {
      brightness: value => `brightness(${value}%)`,
      contrast: value => `contrast(${value}%)`,
      grayscale: () => 'grayscale(100%)',
      invert: () => 'invert(100%)'
    };
    const filters = detail.options.reduce((values, option) => {
      const newValue = `${option.active ? adjustments[option.id](option.value) : ''}`;
      return newValue ? [...values, newValue] : values;
    }, []).join(' ');
    this.bookContainer.css('filter', filters);
    this.optionUpdateComplete(event);
  }
  optionUpdateComplete(event) {
    this.activeCount = event.detail.activeCount;
    this.updateOptionsCount(event);
    this.onProviderChange();
  }
  updateOptionsCount() {
    this.menuDetails = `(${this.activeCount} active)`;
  }
}

/***/ }),

/***/ "./src/BookNavigator/visual-adjustments/visual-adjustments.js":
/*!********************************************************************!*\
  !*** ./src/BookNavigator/visual-adjustments/visual-adjustments.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IABookVisualAdjustments: function() { return /* binding */ IABookVisualAdjustments; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit/directives/repeat.js */ "./node_modules/lit/directives/repeat.js");
/* harmony import */ var _assets_icon_checkmark_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icon_checkmark.js */ "./src/BookNavigator/assets/icon_checkmark.js");
/* harmony import */ var _internetarchive_icon_magnify_minus_icon_magnify_minus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/icon-magnify-minus/icon-magnify-minus */ "./node_modules/@internetarchive/icon-magnify-minus/icon-magnify-minus.js");
/* harmony import */ var _internetarchive_icon_magnify_plus_icon_magnify_plus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internetarchive/icon-magnify-plus/icon-magnify-plus */ "./node_modules/@internetarchive/icon-magnify-plus/icon-magnify-plus.js");






const namespacedEvent = eventName => `visualAdjustment${eventName}`;
const events = {
  optionChange: namespacedEvent("OptionChanged"),
  zoomIn: namespacedEvent("ZoomIn"),
  zoomOut: namespacedEvent("ZoomOut")
};
class IABookVisualAdjustments extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get properties() {
    return {
      activeCount: {
        type: Number
      },
      options: {
        type: Array
      },
      renderHeader: {
        type: Boolean
      },
      showZoomControls: {
        type: Boolean
      }
    };
  }
  constructor() {
    super();
    this.activeCount = 0;
    this.options = [];
    this.renderHeader = false;
    this.showZoomControls = true;
  }
  firstUpdated() {
    this.activeCount = this.activeOptions.length;
    this.emitOptionChangedEvent();
  }

  /** Gets list of active options
   * @return array
   */
  get activeOptions() {
    return this.options.reduce((results, option) => option.active ? [...results, option.id] : results, []);
  }

  /**
   * Returns blob that will be emitted by event
   */
  prepareEventDetails(changedOptionId = "") {
    return {
      options: this.options,
      activeCount: this.activeCount,
      changedOptionId
    };
  }

  /**
   * Fires custom event when options change
   * Provides state details: { options, activeCount, changedOptionId }
   *
   * @param { string } changedOptionId
   */
  emitOptionChangedEvent(changedOptionId = "") {
    const detail = this.prepareEventDetails(changedOptionId);
    this.dispatchEvent(new CustomEvent(events.optionChange, {
      bubbles: true,
      composed: true,
      detail
    }));
  }
  emitZoomIn() {
    this.dispatchEvent(new CustomEvent(events.zoomIn));
  }
  emitZoomOut() {
    this.dispatchEvent(new CustomEvent(events.zoomOut));
  }

  /**
   * Updates adjustment & component state
   * updates params of available ajdustment options list
   * updates active adjustment count
   * triggers custom event
   * @param { string } optionName
   */
  changeActiveStateFor(optionName) {
    const updatedOptions = [...this.options];
    const checkedOption = updatedOptions.find(option => option.id === optionName);
    checkedOption.active = !checkedOption.active;
    this.options = updatedOptions;
    this.activeCount = this.activeOptions.length;
    this.emitOptionChangedEvent(checkedOption.id);
  }
  setRangeValue(id, value) {
    const updatedOptions = [...this.options];
    updatedOptions.find(o => o.id === id).value = value;
    this.options = [...updatedOptions];
  }

  /* render */
  rangeSlider(option) {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div class=${`range${option.active ? " visible" : ""}`}>
        <input
          type="range"
          name="${option.id}_range"
          min=${option.min || 0}
          max=${option.max || 100}
          step=${option.step || 1}
          .value=${option.value}
          @input=${e => this.setRangeValue(option.id, e.target.value)}
          @change=${() => this.emitOptionChangedEvent()}
        />
        <p>${option.value}%</p>
      </div>
    `;
  }
  adjustmentCheckbox(option) {
    const formID = `adjustment_${option.id}`;
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<li>
      <label for="${formID}">
        <span class="name">${option.name}</span>
        <input
          type="checkbox"
          name="${formID}"
          id="${formID}"
          @change=${() => this.changeActiveStateFor(option.id)}
          ?checked=${option.active}
        />
        <span class="icon"></span>
      </label>
      ${option.value !== undefined ? this.rangeSlider(option) : lit__WEBPACK_IMPORTED_MODULE_0__.nothing}
    </li>`;
  }
  get headerSection() {
    const activeAdjustments = this.activeCount ? (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<p>(${this.activeCount} active)</p>` : lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
    const header = (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`<header>
      <h3>Visual adjustments</h3>
      ${activeAdjustments}
    </header>`;
    return this.renderHeader ? header : lit__WEBPACK_IMPORTED_MODULE_0__.nothing;
  }
  get zoomControls() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <h4>Zoom</h4>
      <button class="zoom_out" @click=${this.emitZoomOut} title="zoom out">
        <ia-icon-magnify-minus></ia-icon-magnify-minus>
      </button>
      <button class="zoom_in" @click=${this.emitZoomIn} title="zoom in">
        <ia-icon-magnify-plus></ia-icon-magnify-plus>
      </button>
    `;
  }

  /** @inheritdoc */
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      ${this.headerSection}
      <ul>
        ${(0,lit_directives_repeat_js__WEBPACK_IMPORTED_MODULE_1__.repeat)(this.options, option => option.id, this.adjustmentCheckbox.bind(this))}
      </ul>
      ${this.showZoomControls ? this.zoomControls : lit__WEBPACK_IMPORTED_MODULE_0__.nothing}
    `;
  }
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
    :host {
      display: block;
      height: 100%;
      overflow-y: auto;
      font-size: 1.4rem;
      box-sizing: border-box;
    }

    header {
      display: flex;
      align-items: baseline;
    }

    h3 {
      padding: 0;
      margin: 0 1rem 0 0;
      font-size: 1.6rem;
    }

    header p {
      padding: 0;
      margin: 0;
      font-size: 1.2rem;
      font-weight: bold;
      font-style: italic;
    }

    ul {
      padding: 1rem 2rem 0 0;
      list-style: none;
      margin-top: 0;
    }

    [type="checkbox"] {
      display: none;
    }

    label {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      font-size: 1.4rem;
      font-weight: bold;
      line-height: 150%;
      vertical-align: middle;
    }

    .icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin-left: .7rem;
      border: 1px solid var(--primaryTextColor);
      border-radius: 2px;
      background: var(--activeButtonBg) 50% 50% no-repeat;
    }
    :checked + .icon {
      background-image: url('${_assets_icon_checkmark_js__WEBPACK_IMPORTED_MODULE_2__["default"]}');
    }

    .range {
      display: none;
      padding-top: .5rem;
    }
    .range.visible {
      display: flex;
    }

    .range p {
      margin-left: 1rem;
    }

    h4 {
      padding: 1rem 0;
      margin: 0;
      font-size: 1.4rem;
    }

    button {
      -webkit-appearance: none;
      appearance: none;
      border: none;
      border-radius: 0;
      background: transparent;
      outline: none;
      cursor: pointer;
      --iconFillColor: var(--primaryTextColor);
      --iconStrokeColor: var(--primaryTextColor);
      height: 4rem;
      width: 4rem;
    }

    button * {
      display: inline-block;
    }`;
  }
}
customElements.define('ia-book-visual-adjustments', IABookVisualAdjustments);

/***/ }),

/***/ "./src/ia-bookreader/ia-bookreader.js":
/*!********************************************!*\
  !*** ./src/ia-bookreader/ia-bookreader.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IaBookReader: function() { return /* binding */ IaBookReader; }
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _internetarchive_ia_item_navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @internetarchive/ia-item-navigator */ "./node_modules/@internetarchive/ia-item-navigator/dist/index.js");
/* harmony import */ var _BookNavigator_book_navigator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BookNavigator/book-navigator.js */ "./src/BookNavigator/book-navigator.js");
/* harmony import */ var _internetarchive_modal_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @internetarchive/modal-manager */ "./node_modules/@internetarchive/modal-manager/dist/index.js");
/* harmony import */ var _internetarchive_shared_resize_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internetarchive/shared-resize-observer */ "./node_modules/@internetarchive/shared-resize-observer/dist/index.js");
/**
 * BookReaderTemplate to load BookNavigator components
 */




// eslint-disable-next-line no-unused-vars



class IaBookReader extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static get properties() {
    return {
      item: {
        type: Object
      },
      baseHost: {
        type: String
      },
      signedIn: {
        type: Boolean
      },
      fullscreen: {
        type: Boolean,
        reflect: true,
        attribute: true
      },
      sharedObserver: {
        type: Object,
        attribute: false
      },
      modal: {
        type: Object,
        attribute: false
      },
      loaded: {
        type: Boolean
      },
      menuShortcuts: {
        type: Array
      },
      menuContents: {
        type: Array
      }
    };
  }
  constructor() {
    super();
    this.item = undefined;
    this.bookreader = undefined;
    this.baseHost = 'archive.org';
    this.fullscreen = false;
    this.signedIn = false;
    /** @type {ModalManager} */
    this.modal = undefined;
    /** @type {SharedResizeObserver} */
    this.sharedObserver = undefined;
    this.loaded = false;
    this.menuShortcuts = [];
    this.menuContents = [];
    this.openMenuName = '';
  }
  updated() {
    if (!this.modal) {
      this.setModalManager();
    }
    if (!this.sharedObserver) {
      this.sharedObserver = new _internetarchive_shared_resize_observer__WEBPACK_IMPORTED_MODULE_4__.SharedResizeObserver();
    }
  }
  get itemNav() {
    return this.shadowRoot.querySelector('iaux-item-navigator');
  }

  /** Creates modal DOM & attaches to `<body>` */
  setModalManager() {
    let modalManager = document.querySelector('modal-manager');
    if (!modalManager) {
      modalManager = document.createElement('modal-manager');
      document.body.appendChild(modalManager);
    }
    this.modal = modalManager;
  }
  manageFullscreen(e) {
    const {
      detail
    } = e;
    const fullscreen = !!detail.isFullScreen;
    this.fullscreen = fullscreen;
    this.dispatchEvent(new CustomEvent('fullscreenStateUpdated', {
      detail: {
        fullscreen
      }
    }));
  }
  loadingStateUpdated(e) {
    const {
      loaded
    } = e.detail;
    this.loaded = loaded || null;
    this.dispatchEvent(new CustomEvent('loadingStateUpdated', {
      detail: {
        loaded
      }
    }));
  }
  setMenuShortcuts(e) {
    this.menuShortcuts = [...e.detail];
  }
  setMenuContents(e) {
    const updatedContents = [...e.detail];
    this.menuContents = updatedContents;
  }
  manageSideMenuEvents(e) {
    const {
      menuId,
      action
    } = e.detail;
    if (!menuId) {
      return;
    }
    this.openMenuName = menuId;
    if (action === 'open') {
      this.itemNav?.openShortcut(menuId);
    } else if (action === 'toggle') {
      this.itemNav?.toggleMenu();
    }
  }
  render() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.html)`
      <div class="main-component">
        <iaux-item-navigator
          ?viewportInFullscreen=${this.fullscreen}
          .basehost=${this.baseHost}
          .item=${this.item}
          .modal=${this.modal}
          .loaded=${this.loaded}
          .sharedObserver=${this.sharedObserver}
          ?signedIn=${this.signedIn}
          .menuShortcuts=${this.menuShortcuts}
          .menuContents=${this.menuContents}
          .openMenu=${this.openMenuName}
        >
          <div slot="header">
            <slot name="header"></slot>
          </div>
          <div slot="main">
            <book-navigator
              .modal=${this.modal}
              .baseHost=${this.baseHost}
              .itemMD=${this.item}
              ?signedIn=${this.signedIn}
              ?sideMenuOpen=${this.menuOpened}
              .sharedObserver=${this.sharedObserver}
              @ViewportInFullScreen=${this.manageFullscreen}
              @loadingStateUpdated=${this.loadingStateUpdated}
              @updateSideMenu=${this.manageSideMenuEvents}
              @menuUpdated=${this.setMenuContents}
              @menuShortcutsUpdated=${this.setMenuShortcuts}
            >
              <div slot="main">
                <slot name="main"></slot>
              </div>
            </book-navigator>
          </div>
        </iaux-item-navigator>
      </div>
    `;
  }
  static get styles() {
    return (0,lit__WEBPACK_IMPORTED_MODULE_0__.css)`
      :host {
        display: block;
        --primaryBGColor: var(--black, #000);
        --secondaryBGColor: #222;
        --tertiaryBGColor: #333;
        --primaryTextColor: var(--white, #fff);
        --primaryCTAFill: #194880;
        --primaryCTABorder: #c5d1df;
        --secondaryCTAFill: #333;
        --secondaryCTABorder: #999;
        --primaryErrorCTAFill: #e51c26;
        --primaryErrorCTABorder: #f8c6c8;
        background-color: var(--primaryBGColor);
        position: relative;
      }

      :host([fullscreen]),
      iaux-item-navigator[viewportinfullscreen] {
        position: fixed;
        inset: 0;
        height: 100%;
        min-height: unset;
      }

      .main-component {
        height: 100%;
        width: 100%;
        min-height: inherit;
      }

      div[slot="header"],
      div[slot="main"] {
        display: flex;
        width: 100%;
      }

      slot {
        display: block;
        flex: 1;
      }

      iaux-item-navigator {
        min-height: var(--br-height, inherit);
        height: var(--br-height, inherit);
        display: block;
        width: 100%;
        color: var(--primaryTextColor);
        --menuButtonLabelDisplay: block;
        --menuWidth: 320px;
        --menuSliderBg: var(--secondaryBGColor);
        --activeButtonBg: var(--tertiaryBGColor);
        --subpanelRightBorderColor: var(--secondaryCTABorder);
        --animationTiming: 100ms;
        --iconFillColor: var(--primaryTextColor);
        --iconStrokeColor: var(--primaryTextColor);
        --menuSliderHeaderIconHeight: 2rem;
        --menuSliderHeaderIconWidth: 2rem;
        --iconWidth: 2.4rem;
        --iconHeight: 2.4rem;
        --shareLinkColor: var(--primaryTextColor);
        --shareIconBorder: var(--primaryTextColor);
        --shareIconBg: var(--secondaryBGColor);
        --activityIndicatorLoadingDotColor: var(--primaryTextColor);
        --activityIndicatorLoadingRingColor: var(--primaryTextColor);
      }
    `;
  }
}
window.customElements.define("ia-bookreader", IaBookReader);

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __assign: function() { return /* binding */ __assign; },
/* harmony export */   __asyncDelegator: function() { return /* binding */ __asyncDelegator; },
/* harmony export */   __asyncGenerator: function() { return /* binding */ __asyncGenerator; },
/* harmony export */   __asyncValues: function() { return /* binding */ __asyncValues; },
/* harmony export */   __await: function() { return /* binding */ __await; },
/* harmony export */   __awaiter: function() { return /* binding */ __awaiter; },
/* harmony export */   __classPrivateFieldGet: function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   __classPrivateFieldIn: function() { return /* binding */ __classPrivateFieldIn; },
/* harmony export */   __classPrivateFieldSet: function() { return /* binding */ __classPrivateFieldSet; },
/* harmony export */   __createBinding: function() { return /* binding */ __createBinding; },
/* harmony export */   __decorate: function() { return /* binding */ __decorate; },
/* harmony export */   __exportStar: function() { return /* binding */ __exportStar; },
/* harmony export */   __extends: function() { return /* binding */ __extends; },
/* harmony export */   __generator: function() { return /* binding */ __generator; },
/* harmony export */   __importDefault: function() { return /* binding */ __importDefault; },
/* harmony export */   __importStar: function() { return /* binding */ __importStar; },
/* harmony export */   __makeTemplateObject: function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   __metadata: function() { return /* binding */ __metadata; },
/* harmony export */   __param: function() { return /* binding */ __param; },
/* harmony export */   __read: function() { return /* binding */ __read; },
/* harmony export */   __rest: function() { return /* binding */ __rest; },
/* harmony export */   __spread: function() { return /* binding */ __spread; },
/* harmony export */   __spreadArray: function() { return /* binding */ __spreadArray; },
/* harmony export */   __spreadArrays: function() { return /* binding */ __spreadArrays; },
/* harmony export */   __values: function() { return /* binding */ __values; }
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "./node_modules/lit-html/development/directive-helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/lit-html/development/directive-helpers.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateResultType: function() { return /* binding */ TemplateResultType; },
/* harmony export */   clearPart: function() { return /* binding */ clearPart; },
/* harmony export */   getCommittedValue: function() { return /* binding */ getCommittedValue; },
/* harmony export */   getDirectiveClass: function() { return /* binding */ getDirectiveClass; },
/* harmony export */   insertPart: function() { return /* binding */ insertPart; },
/* harmony export */   isCompiledTemplateResult: function() { return /* binding */ isCompiledTemplateResult; },
/* harmony export */   isDirectiveResult: function() { return /* binding */ isDirectiveResult; },
/* harmony export */   isPrimitive: function() { return /* binding */ isPrimitive; },
/* harmony export */   isSingleExpression: function() { return /* binding */ isSingleExpression; },
/* harmony export */   isTemplateResult: function() { return /* binding */ isTemplateResult; },
/* harmony export */   removePart: function() { return /* binding */ removePart; },
/* harmony export */   setChildPartValue: function() { return /* binding */ setChildPartValue; },
/* harmony export */   setCommittedValue: function() { return /* binding */ setCommittedValue; }
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var _a, _b;

const {
  _ChildPart: ChildPart
} = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__._$LH;
const ENABLE_SHADYDOM_NOPATCH = true;
const wrap = ENABLE_SHADYDOM_NOPATCH && ((_a = window.ShadyDOM) === null || _a === void 0 ? void 0 : _a.inUse) && ((_b = window.ShadyDOM) === null || _b === void 0 ? void 0 : _b.noPatch) === true ? window.ShadyDOM.wrap : node => node;
/**
 * Tests if a value is a primitive value.
 *
 * See https://tc39.github.io/ecma262/#sec-typeof-operator
 */
const isPrimitive = value => value === null || typeof value != 'object' && typeof value != 'function';
const TemplateResultType = {
  HTML: 1,
  SVG: 2
};
/**
 * Tests if a value is a TemplateResult or a CompiledTemplateResult.
 */
const isTemplateResult = (value, type) => type === undefined ?
// This property needs to remain unminified.
(value === null || value === void 0 ? void 0 : value['_$litType$']) !== undefined : (value === null || value === void 0 ? void 0 : value['_$litType$']) === type;
/**
 * Tests if a value is a CompiledTemplateResult.
 */
const isCompiledTemplateResult = value => {
  var _a;
  return ((_a = value === null || value === void 0 ? void 0 : value['_$litType$']) === null || _a === void 0 ? void 0 : _a.h) != null;
};
/**
 * Tests if a value is a DirectiveResult.
 */
const isDirectiveResult = value =>
// This property needs to remain unminified.
(value === null || value === void 0 ? void 0 : value['_$litDirective$']) !== undefined;
/**
 * Retrieves the Directive class for a DirectiveResult
 */
const getDirectiveClass = value =>
// This property needs to remain unminified.
value === null || value === void 0 ? void 0 : value['_$litDirective$'];
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */
const isSingleExpression = part => part.strings === undefined;
const createMarker = () => document.createComment('');
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */
const insertPart = (containerPart, refPart, part) => {
  var _a;
  const container = wrap(containerPart._$startNode).parentNode;
  const refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
  if (part === undefined) {
    const startNode = wrap(container).insertBefore(createMarker(), refNode);
    const endNode = wrap(container).insertBefore(createMarker(), refNode);
    part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
  } else {
    const endNode = wrap(part._$endNode).nextSibling;
    const oldParent = part._$parent;
    const parentChanged = oldParent !== containerPart;
    if (parentChanged) {
      (_a = part._$reparentDisconnectables) === null || _a === void 0 ? void 0 : _a.call(part, containerPart);
      // Note that although `_$reparentDisconnectables` updates the part's
      // `_$parent` reference after unlinking from its current parent, that
      // method only exists if Disconnectables are present, so we need to
      // unconditionally set it here
      part._$parent = containerPart;
      // Since the _$isConnected getter is somewhat costly, only
      // read it once we know the subtree has directives that need
      // to be notified
      let newConnectionState;
      if (part._$notifyConnectionChanged !== undefined && (newConnectionState = containerPart._$isConnected) !== oldParent._$isConnected) {
        part._$notifyConnectionChanged(newConnectionState);
      }
    }
    if (endNode !== refNode || parentChanged) {
      let start = part._$startNode;
      while (start !== endNode) {
        const n = wrap(start).nextSibling;
        wrap(container).insertBefore(start, refNode);
        start = n;
      }
    }
  }
  return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */
const setChildPartValue = (part, value, directiveParent = part) => {
  part._$setValue(value, directiveParent);
  return part;
};
// A sentinel value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.
const RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */
const setCommittedValue = (part, value = RESET_VALUE) => part._$committedValue = value;
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being committed.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */
const getCommittedValue = part => part._$committedValue;
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */
const removePart = part => {
  var _a;
  (_a = part._$notifyConnectionChanged) === null || _a === void 0 ? void 0 : _a.call(part, false, true);
  let start = part._$startNode;
  const end = wrap(part._$endNode).nextSibling;
  while (start !== end) {
    const n = wrap(start).nextSibling;
    wrap(start).remove();
    start = n;
  }
};
const clearPart = part => {
  part._$clear();
};

/***/ }),

/***/ "./node_modules/lit-html/development/directives/class-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/class-map.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classMap: function() { return /* binding */ classMap; }
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


class ClassMapDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
  constructor(partInfo) {
    var _a;
    super(partInfo);
    if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE || partInfo.name !== 'class' || ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
      throw new Error('`classMap()` can only be used in the `class` attribute ' + 'and must be the only part in the attribute.');
    }
  }
  render(classInfo) {
    // Add spaces to ensure separation from static classes
    return ' ' + Object.keys(classInfo).filter(key => classInfo[key]).join(' ') + ' ';
  }
  update(part, [classInfo]) {
    var _a, _b;
    // Remember dynamic classes on the first render
    if (this._previousClasses === undefined) {
      this._previousClasses = new Set();
      if (part.strings !== undefined) {
        this._staticClasses = new Set(part.strings.join(' ').split(/\s/).filter(s => s !== ''));
      }
      for (const name in classInfo) {
        if (classInfo[name] && !((_a = this._staticClasses) === null || _a === void 0 ? void 0 : _a.has(name))) {
          this._previousClasses.add(name);
        }
      }
      return this.render(classInfo);
    }
    const classList = part.element.classList;
    // Remove old classes that no longer apply
    // We use forEach() instead of for-of so that we don't require down-level
    // iteration.
    this._previousClasses.forEach(name => {
      if (!(name in classInfo)) {
        classList.remove(name);
        this._previousClasses.delete(name);
      }
    });
    // Add or remove classes based on their classMap value
    for (const name in classInfo) {
      // We explicitly want a loose truthy check of `value` because it seems
      // more convenient that '' and 0 are skipped.
      const value = !!classInfo[name];
      if (value !== this._previousClasses.has(name) && !((_b = this._staticClasses) === null || _b === void 0 ? void 0 : _b.has(name))) {
        if (value) {
          classList.add(name);
          this._previousClasses.add(name);
        } else {
          classList.remove(name);
          this._previousClasses.delete(name);
        }
      }
    }
    return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
  }
}
/**
 * A directive that applies dynamic CSS classes.
 *
 * This must be used in the `class` attribute and must be the only part used in
 * the attribute. It takes each property in the `classInfo` argument and adds
 * the property name to the element's `classList` if the property value is
 * truthy; if the property value is falsey, the property name is removed from
 * the element's `class`.
 *
 * For example `{foo: bar}` applies the class `foo` if the value of `bar` is
 * truthy.
 *
 * @param classInfo
 */
const classMap = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(ClassMapDirective);

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

/***/ "./node_modules/lit-html/development/directives/repeat.js":
/*!****************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/repeat.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   repeat: function() { return /* binding */ repeat; }
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */



// Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)
const generateMap = (list, start, end) => {
  const map = new Map();
  for (let i = start; i <= end; i++) {
    map.set(list[i], i);
  }
  return map;
};
class RepeatDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
  constructor(partInfo) {
    super(partInfo);
    if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
      throw new Error('repeat() can only be used in text expressions');
    }
  }
  _getValuesAndKeys(items, keyFnOrTemplate, template) {
    let keyFn;
    if (template === undefined) {
      template = keyFnOrTemplate;
    } else if (keyFnOrTemplate !== undefined) {
      keyFn = keyFnOrTemplate;
    }
    const keys = [];
    const values = [];
    let index = 0;
    for (const item of items) {
      keys[index] = keyFn ? keyFn(item, index) : index;
      values[index] = template(item, index);
      index++;
    }
    return {
      values,
      keys
    };
  }
  render(items, keyFnOrTemplate, template) {
    return this._getValuesAndKeys(items, keyFnOrTemplate, template).values;
  }
  update(containerPart, [items, keyFnOrTemplate, template]) {
    var _a;
    // Old part & key lists are retrieved from the last update (which may
    // be primed by hydration)
    const oldParts = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.getCommittedValue)(containerPart);
    const {
      values: newValues,
      keys: newKeys
    } = this._getValuesAndKeys(items, keyFnOrTemplate, template);
    // We check that oldParts, the committed value, is an Array as an
    // indicator that the previous value came from a repeat() call. If
    // oldParts is not an Array then this is the first render and we return
    // an array for lit-html's array handling to render, and remember the
    // keys.
    if (!Array.isArray(oldParts)) {
      this._itemKeys = newKeys;
      return newValues;
    }
    // In SSR hydration it's possible for oldParts to be an array but for us
    // to not have item keys because the update() hasn't run yet. We set the
    // keys to an empty array. This will cause all oldKey/newKey comparisons
    // to fail and execution to fall to the last nested brach below which
    // reuses the oldPart.
    const oldKeys = (_a = this._itemKeys) !== null && _a !== void 0 ? _a : this._itemKeys = [];
    // New part list will be built up as we go (either reused from
    // old parts or created for new keys in this update). This is
    // saved in the above cache at the end of the update.
    const newParts = [];
    // Maps from key to index for current and previous update; these
    // are generated lazily only when needed as a performance
    // optimization, since they are only required for multiple
    // non-contiguous changes in the list, which are less common.
    let newKeyToIndexMap;
    let oldKeyToIndexMap;
    // Head and tail pointers to old parts and new values
    let oldHead = 0;
    let oldTail = oldParts.length - 1;
    let newHead = 0;
    let newTail = newValues.length - 1;
    // Overview of O(n) reconciliation algorithm (general approach
    // based on ideas found in ivi, vue, snabbdom, etc.):
    //
    // * We start with the list of old parts and new values (and
    //   arrays of their respective keys), head/tail pointers into
    //   each, and we build up the new list of parts by updating
    //   (and when needed, moving) old parts or creating new ones.
    //   The initial scenario might look like this (for brevity of
    //   the diagrams, the numbers in the array reflect keys
    //   associated with the old parts or new values, although keys
    //   and parts/values are actually stored in parallel arrays
    //   indexed using the same head/tail pointers):
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [ ,  ,  ,  ,  ,  ,  ]
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
    //                                      item order
    //      newHead ^                 ^ newTail
    //
    // * Iterate old & new lists from both sides, updating,
    //   swapping, or removing parts at the head/tail locations
    //   until neither head nor tail can move.
    //
    // * Example below: keys at head pointers match, so update old
    //   part 0 in-place (no need to move it) and record part 0 in
    //   the `newParts` list. The last thing we do is advance the
    //   `oldHead` and `newHead` pointers (will be reflected in the
    //   next diagram).
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //      newHead ^                 ^ newTail
    //
    // * Example below: head pointers don't match, but tail
    //   pointers do, so update part 6 in place (no need to move
    //   it), and record part 6 in the `newParts` list. Last,
    //   advance the `oldTail` and `oldHead` pointers.
    //
    //         oldHead v              v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
    //                                      & newTail
    //         newHead ^              ^ newTail
    //
    // * If neither head nor tail match; next check if one of the
    //   old head/tail items was removed. We first need to generate
    //   the reverse map of new keys to index (`newKeyToIndexMap`),
    //   which is done once lazily as a performance optimization,
    //   since we only hit this case if multiple non-contiguous
    //   changes were made. Note that for contiguous removal
    //   anywhere in the list, the head and tails would advance
    //   from either end and pass each other before we get to this
    //   case and removals would be handled in the final while loop
    //   without needing to generate the map.
    //
    // * Example below: The key at `oldTail` was removed (no longer
    //   in the `newKeyToIndexMap`), so remove that part from the
    //   DOM and advance just the `oldTail` pointer.
    //
    //         oldHead v           v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
    //         newHead ^           ^ newTail
    //
    // * Once head and tail cannot move, any mismatches are due to
    //   either new or moved items; if a new key is in the previous
    //   "old key to old index" map, move the old part to the new
    //   location, otherwise create and insert a new part. Note
    //   that when moving an old part we null its position in the
    //   oldParts array if it lies between the head and tail so we
    //   know to skip it when the pointers get there.
    //
    // * Example below: neither head nor tail match, and neither
    //   were removed; so find the `newHead` key in the
    //   `oldKeyToIndexMap`, and move that old part's DOM into the
    //   next head position (before `oldParts[oldHead]`). Last,
    //   null the part in the `oldPart` array since it was
    //   somewhere in the remaining oldParts still to be scanned
    //   (between the head and tail pointers) so that we know to
    //   skip that old part on future iterations.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
    //                                      newHead
    //         newHead ^           ^ newTail
    //
    // * Note that for moves/insertions like the one above, a part
    //   inserted at the head pointer is inserted before the
    //   current `oldParts[oldHead]`, and a part inserted at the
    //   tail pointer is inserted before `newParts[newTail+1]`. The
    //   seeming asymmetry lies in the fact that new parts are
    //   moved into place outside in, so to the right of the head
    //   pointer are old parts, and to the right of the tail
    //   pointer are new parts.
    //
    // * We always restart back from the top of the algorithm,
    //   allowing matching and simple updates in place to
    //   continue...
    //
    // * Example below: the head pointers once again match, so
    //   simply update part 1 and record it in the `newParts`
    //   array.  Last, advance both head pointers.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //            newHead ^        ^ newTail
    //
    // * As mentioned above, items that were moved as a result of
    //   being stuck (the final else clause in the code below) are
    //   marked with null, so we always advance old pointers over
    //   these so we're comparing the next actual old value on
    //   either end.
    //
    // * Example below: `oldHead` is null (already placed in
    //   newParts), so advance `oldHead`.
    //
    //            oldHead v     v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
    //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //               newHead ^     ^ newTail
    //
    // * Note it's not critical to mark old parts as null when they
    //   are moved from head to tail or tail to head, since they
    //   will be outside the pointer range and never visited again.
    //
    // * Example below: Here the old tail key matches the new head
    //   key, so the part at the `oldTail` position and move its
    //   DOM to the new head position (before `oldParts[oldHead]`).
    //   Last, advance `oldTail` and `newHead` pointers.
    //
    //               oldHead v  v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
    //                                     advance oldTail & newHead
    //               newHead ^     ^ newTail
    //
    // * Example below: Old and new head keys match, so update the
    //   old head part in place, and advance the `oldHead` and
    //   `newHead` pointers.
    //
    //               oldHead v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
    //                                      newHead
    //                  newHead ^  ^ newTail
    //
    // * Once the new or old pointers move past each other then all
    //   we have left is additions (if old list exhausted) or
    //   removals (if new list exhausted). Those are handled in the
    //   final while loops at the end.
    //
    // * Example below: `oldHead` exceeded `oldTail`, so we're done
    //   with the main loop.  Create the remaining part and insert
    //   it at the new head position, and the update is complete.
    //
    //                   (oldHead > oldTail)
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //                     newHead ^ newTail
    //
    // * Note that the order of the if/else clauses is not
    //   important to the algorithm, as long as the null checks
    //   come first (to ensure we're always working on valid old
    //   parts) and that the final else clause comes last (since
    //   that's where the expensive moves occur). The order of
    //   remaining clauses is is just a simple guess at which cases
    //   will be most common.
    //
    // * Note, we could calculate the longest
    //   increasing subsequence (LIS) of old items in new position,
    //   and only move those not in the LIS set. However that costs
    //   O(nlogn) time and adds a bit more code, and only helps
    //   make rare types of mutations require fewer moves. The
    //   above handles removes, adds, reversal, swaps, and single
    //   moves of contiguous items in linear time, in the minimum
    //   number of moves. As the number of multiple moves where LIS
    //   might help approaches a random shuffle, the LIS
    //   optimization becomes less helpful, so it seems not worth
    //   the code at this point. Could reconsider if a compelling
    //   case arises.
    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        // `null` means old part at head has already been used
        // below; skip
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        // `null` means old part at tail has already been used
        // below; skip
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        // Old head matches new head; update in place
        newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        // Old tail matches new tail; update in place
        newParts[newTail] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        // Old head matches new tail; update and move to new tail
        newParts[newTail] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldParts[oldHead], newValues[newTail]);
        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, newParts[newTail + 1], oldParts[oldHead]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        // Old tail matches new head; update and move to new head
        newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldParts[oldTail], newValues[newHead]);
        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, oldParts[oldHead], oldParts[oldTail]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === undefined) {
          // Lazily generate key-to-index maps, used for removals &
          // moves below
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }
        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          // Old head is no longer in new list; remove
          (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.removePart)(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          // Old tail is no longer in new list; remove
          (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.removePart)(oldParts[oldTail]);
          oldTail--;
        } else {
          // Any mismatches at this point are due to additions or
          // moves; see if we have an old part we can reuse and move
          // into place
          const oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          const oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;
          if (oldPart === null) {
            // No old part for this value; create a new one and
            // insert it
            const newPart = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, oldParts[oldHead]);
            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            // Reuse old part
            newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(oldPart, newValues[newHead]);
            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, oldParts[oldHead], oldPart);
            // This marks the old part as having been used, so that
            // it will be skipped in the first two checks above
            oldParts[oldIndex] = null;
          }
          newHead++;
        }
      }
    }
    // Add parts for any remaining new values
    while (newHead <= newTail) {
      // For all remaining additions, we insert before last new
      // tail, since old pointers are no longer valid
      const newPart = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.insertPart)(containerPart, newParts[newTail + 1]);
      (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setChildPartValue)(newPart, newValues[newHead]);
      newParts[newHead++] = newPart;
    }
    // Remove any remaining unused old parts
    while (oldHead <= oldTail) {
      const oldPart = oldParts[oldHead++];
      if (oldPart !== null) {
        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.removePart)(oldPart);
      }
    }
    // Save order of new parts for next round
    this._itemKeys = newKeys;
    // Directly set part value, bypassing it's dirty-checking
    (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_2__.setCommittedValue)(containerPart, newParts);
    return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
  }
}
/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * and removals.
 *
 * The `keyFn` takes two parameters, the item and its index, and returns a unique key value.
 *
 * ```js
 * html`
 *   <ol>
 *     ${repeat(this.items, (item) => item.id, (item, index) => {
 *       return html`<li>${index}: ${item.name}</li>`;
 *     })}
 *   </ol>
 * `
 * ```
 *
 * **Important**: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */
const repeat = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(RepeatDirective);

/***/ }),

/***/ "./node_modules/lit-html/development/directives/unsafe-html.js":
/*!*********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/unsafe-html.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsafeHTMLDirective: function() { return /* binding */ UnsafeHTMLDirective; },
/* harmony export */   unsafeHTML: function() { return /* binding */ unsafeHTML; }
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const HTML_RESULT = 1;
class UnsafeHTMLDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
  constructor(partInfo) {
    super(partInfo);
    this._value = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
    if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
      throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`);
    }
  }
  render(value) {
    if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing || value == null) {
      this._templateResult = undefined;
      return this._value = value;
    }
    if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange) {
      return value;
    }
    if (typeof value != 'string') {
      throw new Error(`${this.constructor.directiveName}() called with a non-string value`);
    }
    if (value === this._value) {
      return this._templateResult;
    }
    this._value = value;
    const strings = [value];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    strings.raw = strings;
    // WARNING: impersonating a TemplateResult like this is extremely
    // dangerous. Third-party directives should not do this.
    return this._templateResult = {
      // Cast to a known set of integers that satisfy ResultType so that we
      // don't have to export ResultType and possibly encourage this pattern.
      // This property needs to remain unminified.
      ['_$litType$']: this.constructor.resultType,
      strings,
      values: []
    };
  }
}
UnsafeHTMLDirective.directiveName = 'unsafeHTML';
UnsafeHTMLDirective.resultType = HTML_RESULT;
/**
 * Renders the result as HTML, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeHTML = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(UnsafeHTMLDirective);

/***/ }),

/***/ "./node_modules/lit/directives/class-map.js":
/*!**************************************************!*\
  !*** ./node_modules/lit/directives/class-map.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   classMap: function() { return /* reexport safe */ lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__.classMap; }
/* harmony export */ });
/* harmony import */ var lit_html_directives_class_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/class-map.js */ "./node_modules/lit-html/development/directives/class-map.js");


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


/***/ }),

/***/ "./node_modules/lit/directives/repeat.js":
/*!***********************************************!*\
  !*** ./node_modules/lit/directives/repeat.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   repeat: function() { return /* reexport safe */ lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__.repeat; }
/* harmony export */ });
/* harmony import */ var lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/repeat.js */ "./node_modules/lit-html/development/directives/repeat.js");


/***/ }),

/***/ "./node_modules/lit/directives/unsafe-html.js":
/*!****************************************************!*\
  !*** ./node_modules/lit/directives/unsafe-html.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnsafeHTMLDirective: function() { return /* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.UnsafeHTMLDirective; },
/* harmony export */   unsafeHTML: function() { return /* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.unsafeHTML; }
/* harmony export */ });
/* harmony import */ var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/unsafe-html.js */ "./node_modules/lit-html/development/directives/unsafe-html.js");


/***/ }),

/***/ "./node_modules/throttle-debounce/esm/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/throttle-debounce/esm/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: function() { return /* binding */ debounce; },
/* harmony export */   throttle: function() { return /* binding */ throttle; }
/* harmony export */ });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param {number} delay -                  A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher)
 *                                            are most useful.
 * @param {Function} callback -               A function to be executed after delay milliseconds. The `this` context and all arguments are passed through,
 *                                            as-is, to `callback` when the throttled-function is executed.
 * @param {object} [options] -              An object to configure options.
 * @param {boolean} [options.noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds
 *                                            while the throttled-function is being called. If noTrailing is false or unspecified, callback will be executed
 *                                            one final time after the last throttled-function call. (After the throttled-function has not been called for
 *                                            `delay` milliseconds, the internal counter is reset).
 * @param {boolean} [options.noLeading] -   Optional, defaults to false. If noLeading is false, the first throttled-function call will execute callback
 *                                            immediately. If noLeading is true, the first the callback execution will be skipped. It should be noted that
 *                                            callback will never executed if both noLeading = true and noTrailing = true.
 * @param {boolean} [options.debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is
 *                                            false (at end), schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function} A new, throttled, function.
 */
function throttle (delay, callback, options) {
  var _ref = options || {},
      _ref$noTrailing = _ref.noTrailing,
      noTrailing = _ref$noTrailing === void 0 ? false : _ref$noTrailing,
      _ref$noLeading = _ref.noLeading,
      noLeading = _ref$noLeading === void 0 ? false : _ref$noLeading,
      _ref$debounceMode = _ref.debounceMode,
      debounceMode = _ref$debounceMode === void 0 ? undefined : _ref$debounceMode;
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */


  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel(options) {
    var _ref2 = options || {},
        _ref2$upcomingOnly = _ref2.upcomingOnly,
        upcomingOnly = _ref2$upcomingOnly === void 0 ? false : _ref2$upcomingOnly;

    clearExistingTimeout();
    cancelled = !upcomingOnly;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }

    var self = this;
    var elapsed = Date.now() - lastExec;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, arguments_);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (!noLeading && debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`
       * and noLeading != true.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      if (noLeading) {
        /*
         * In throttle mode with noLeading, if `delay` time has
         * been exceeded, update `lastExec` and schedule `callback`
         * to execute after `delay` ms.
         */
        lastExec = Date.now();

        if (!noTrailing) {
          timeoutID = setTimeout(debounceMode ? clear : exec, delay);
        }
      } else {
        /*
         * In throttle mode without noLeading, if `delay` time has been exceeded, execute
         * `callback`.
         */
        exec();
      }
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

/* eslint-disable no-undefined */
/**
 * Debounce execution of a function. Debouncing, unlike throttling,
 * guarantees that a function is only executed a single time, either at the
 * very beginning of a series of calls, or at the very end.
 *
 * @param {number} delay -               A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param {Function} callback -          A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                        to `callback` when the debounced-function is executed.
 * @param {object} [options] -           An object to configure options.
 * @param {boolean} [options.atBegin] -  Optional, defaults to false. If atBegin is false or unspecified, callback will only be executed `delay` milliseconds
 *                                        after the last debounced-function call. If atBegin is true, callback will be executed only at the first debounced-function call.
 *                                        (After the throttled-function has not been called for `delay` milliseconds, the internal counter is reset).
 *
 * @returns {Function} A new, debounced function.
 */

function debounce (delay, callback, options) {
  var _ref = options || {},
      _ref$atBegin = _ref.atBegin,
      atBegin = _ref$atBegin === void 0 ? false : _ref$atBegin;

  return throttle(delay, callback, {
    debounceMode: atBegin !== false
  });
}


//# sourceMappingURL=index.js.map


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ia-bookreader/ia-bookreader.js"));
/******/ }
]);
//# sourceMappingURL=ia-bookreader-bundle.js.map