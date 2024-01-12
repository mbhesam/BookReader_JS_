(self["webpackChunk_internetarchive_bookreader"] = self["webpackChunk_internetarchive_bookreader"] || []).push([["plugins/plugin.tts.js"],{

/***/ "./src/plugins/tts/AbstractTTSEngine.js":
/*!**********************************************!*\
  !*** ./src/plugins/tts/AbstractTTSEngine.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AbstractTTSEngine; }
/* harmony export */ });
/* harmony import */ var _PageChunkIterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageChunkIterator.js */ "./src/plugins/tts/PageChunkIterator.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/plugins/tts/utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/** @typedef {import('./utils.js').ISO6391} ISO6391 */
/** @typedef {import('./PageChunk.js')} PageChunk */

/**
 * @export
 * @typedef {Object} TTSEngineOptions
 * @property {String} server
 * @property {String} bookPath
 * @property {ISO6391} bookLanguage
 * @property {Function} onLoadingStart
 * @property {Function} onLoadingComplete
 * @property {Function} onDone called when the entire book is done
 * @property {function(PageChunk): PromiseLike} beforeChunkPlay will delay the playing of the chunk
 * @property {function(PageChunk): void} afterChunkPlay fires once a chunk has fully finished
 */

/**
 * @typedef {Object} AbstractTTSSound
 * @property {PageChunk} chunk
 * @property {boolean} loaded
 * @property {number} rate
 * @property {SpeechSynthesisVoice} voice
 * @property {(callback: Function) => void} load
 * @property {() => PromiseLike} play
 * @property {() => Promise} stop
 * @property {() => void} pause
 * @property {() => void} resume
 * @property {() => void} finish force the sound to 'finish'
 * @property {number => void} setPlaybackRate
 * @property {SpeechSynthesisVoice => void} setVoice
 **/

/** Handling bookreader's text-to-speech */
class AbstractTTSEngine {
  /**
   * @protected
   * @param {TTSEngineOptions} options
   */
  constructor(options) {
    _defineProperty(this, "updateBestVoice", () => {
      this.voice = AbstractTTSEngine.getBestBookVoice(this.getVoices(), this.opts.bookLanguage);
    });
    this.playing = false;
    this.paused = false;
    this.opts = options;
    /** @type {PageChunkIterator} */
    this._chunkIterator = null;
    /** @type {AbstractTTSSound} */
    this.activeSound = null;
    this.playbackRate = 1;
    /** Events we can bind to */
    this.events = $({});
    /** @type {SpeechSynthesisVoice} */
    this.voice = null;
    // Listen for voice changes (fired by subclasses)
    this.events.on('voiceschanged', this.updateBestVoice);
    this.events.trigger('voiceschanged');
  }

  /**
   * @abstract
   * @return {boolean}
   */
  static isSupported() {
    throw new Error("Unimplemented abstract class");
  }

  /**
   * @abstract
   * @return {SpeechSynthesisVoice[]}
   */
  getVoices() {
    throw new Error("Unimplemented abstract class");
  }

  /** @abstract */
  init() {
    return null;
  }
  /**
   * @param {number} leafIndex
   * @param {number} numLeafs total number of leafs in the current book
   */
  start(leafIndex, numLeafs) {
    this.playing = true;
    this.paused = false;
    this.opts.onLoadingStart();
    this._chunkIterator = new _PageChunkIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"](numLeafs, leafIndex, {
      server: this.opts.server,
      bookPath: this.opts.bookPath,
      pageBufferSize: 5
    });
    this.step();
    this.events.trigger('start');
  }
  stop() {
    if (this.activeSound) this.activeSound.stop();
    this.playing = false;
    this.paused = true;
    this._chunkIterator = null;
    this.activeSound = null;
    this.events.trigger('stop');
  }

  /** @public */
  pause() {
    const fireEvent = !this.paused && this.activeSound;
    this.paused = true;
    if (this.activeSound) this.activeSound.pause();
    if (fireEvent) this.events.trigger('pause');
  }

  /** @public */
  resume() {
    const fireEvent = this.paused && this.activeSound;
    this.paused = false;
    if (this.activeSound) this.activeSound.resume();
    if (fireEvent) this.events.trigger('resume');
  }
  togglePlayPause() {
    if (this.paused) this.resume();else this.pause();
  }

  /** @public */
  jumpForward() {
    if (this.activeSound) this.activeSound.finish();
  }

  /** @public */
  async jumpBackward() {
    await Promise.all([this.activeSound.stop(), this._chunkIterator.decrement().then(() => this._chunkIterator.decrement())]);
    this.step();
  }

  /** @param {string} voiceURI */
  setVoice(voiceURI) {
    // if the user actively selects a voice, don't re-choose best voice anymore
    // MS Edge fires voices changed randomly very often
    this.events.off('voiceschanged', this.updateBestVoice);
    this.voice = this.getVoices().find(voice => voice.voiceURI === voiceURI);
    // if the current book has a language set, store the selected voice with the book language as a suffix
    if (this.opts.bookLanguage && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.hasLocalStorage)()) {
      localStorage.setItem(`BRtts-voice-${this.opts.bookLanguage}`, this.voice.voiceURI);
    }
    if (this.activeSound) this.activeSound.setVoice(this.voice);
  }

  /** @param {number} newRate */
  setPlaybackRate(newRate) {
    this.playbackRate = newRate;
    if (this.activeSound) this.activeSound.setPlaybackRate(newRate);
  }

  /** @private */
  async step() {
    const chunk = await this._chunkIterator.next();
    if (chunk == _PageChunkIterator_js__WEBPACK_IMPORTED_MODULE_0__["default"].AT_END) {
      this.stop();
      this.opts.onDone();
      return;
    }
    this.opts.onLoadingStart();
    const sound = this.createSound(chunk);
    sound.chunk = chunk;
    sound.rate = this.playbackRate;
    sound.voice = this.voice;
    sound.load(() => this.opts.onLoadingComplete());
    this.opts.onLoadingComplete();
    await this.opts.beforeChunkPlay(chunk);
    if (!this.playing) return;
    const playPromise = await this.playSound(sound).then(() => this.opts.afterChunkPlay(sound.chunk));
    if (this.paused) this.pause();
    await playPromise;
    if (this.playing) return this.step();
  }

  /**
   * @abstract
   * @param {PageChunk} chunk
   * @return {AbstractTTSSound}
   */
  createSound(chunk) {
    throw new Error("Unimplemented abstract class");
  }

  /**
   * @param {AbstractTTSSound} sound
   * @return {PromiseLike} promise called once playing finished
   */
  playSound(sound) {
    this.activeSound = sound;
    if (!this.activeSound.loaded) this.opts.onLoadingStart();
    return this.activeSound.play();
  }

  /** Convenience wrapper for {@see AbstractTTSEngine.getBestVoice} */
  getBestVoice() {
    return AbstractTTSEngine.getBestBookVoice(this.getVoices(), this.opts.bookLanguage);
  }

  /**
   * @private
   * Find the best voice to use given the available voices, the book language, and the user's
   * languages.
   * @param {SpeechSynthesisVoice[]} voices
   * @param {ISO6391} bookLanguage
   * @param {string[]} userLanguages languages in BCP47 format (e.g. en-US). Ordered by preference.
   * @return {SpeechSynthesisVoice | undefined}
   */
  static getBestBookVoice(voices, bookLanguage, userLanguages = navigator.languages) {
    const bookLangVoices = voices.filter(v => v.lang.startsWith(bookLanguage));
    // navigator.languages browser support isn't great yet, so get just 1 language otherwise
    // Sample navigator.languages: ["en-CA", "fr-CA", "fr", "en-US", "en", "de-DE", "de"]
    userLanguages = userLanguages || (navigator.language ? [navigator.language] : []);

    // user languages that match the book language
    const matchingUserLangs = userLanguages.filter(lang => lang.startsWith(bookLanguage));

    // First try to find the last chosen voice from localStorage for the current book language
    return AbstractTTSEngine.getMatchingStoredVoice(bookLangVoices, bookLanguage)
    // Try to find voices that intersect these two sets
    || AbstractTTSEngine.getMatchingVoice(matchingUserLangs, bookLangVoices)
    // no user languages match the books; let's return the best voice for the book language
    || bookLangVoices.find(v => v.default) || bookLangVoices[0]
    // No voices match the book language? let's find a voice in the user's language
    // and ignore book lang
    || AbstractTTSEngine.getMatchingVoice(userLanguages, voices)
    // C'mon! Ok, just read with whatever we got!
    || voices.find(v => v.default) || voices[0];
  }

  /**
   * @private
   * Get the voice last selected by the user for the book language from localStorage.
   * Returns undefined if no voice is stored or found.
   * @param {SpeechSynthesisVoice[]} voices  browser voices to choose from
   * @param {ISO6391} bookLanguage  book language to look for
   * @return {SpeechSynthesisVoice | undefined}
   */
  static getMatchingStoredVoice(voices, bookLanguage) {
    const storedVoice = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.hasLocalStorage)() && localStorage.getItem(`BRtts-voice-${bookLanguage}`);
    return storedVoice ? voices.find(v => v.voiceURI === storedVoice) : undefined;
  }

  /**
     * @private
     * Get the best voice that matches one of the BCP47 languages (order by preference)
     * @param {string[]} languages in BCP 47 format (e.g. 'en-US', or 'en'); ordered by preference
     * @param {SpeechSynthesisVoice[]} voices voices to choose from
     * @return {SpeechSynthesisVoice | undefined}
     */
  static getMatchingVoice(languages, voices) {
    for (const lang of languages) {
      // Chrome Android was returning voice languages like `en_US` instead of `en-US`
      const matchingVoices = voices.filter(v => v.lang.replace('_', '-').startsWith(lang));
      if (matchingVoices.length) {
        return matchingVoices.find(v => v.default) || matchingVoices[0];
      }
    }
  }
}

/***/ }),

/***/ "./src/plugins/tts/FestivalTTSEngine.js":
/*!**********************************************!*\
  !*** ./src/plugins/tts/FestivalTTSEngine.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FestivalTTSEngine; }
/* harmony export */ });
/* harmony import */ var _AbstractTTSEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractTTSEngine.js */ "./src/plugins/tts/AbstractTTSEngine.js");
/* harmony import */ var _BookReader_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../BookReader/utils.js */ "./src/BookReader/utils.js");
/* harmony import */ var soundmanager2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! soundmanager2 */ "./node_modules/soundmanager2/script/soundmanager2.js");
/* harmony import */ var soundmanager2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(soundmanager2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery.browser */ "./node_modules/jquery.browser/dist/jquery.browser.js");
/* harmony import */ var jquery_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_browser__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");


/* global soundManager */



/** @typedef {import("./AbstractTTSEngine.js").TTSEngineOptions} TTSEngineOptions */
/** @typedef {import("./AbstractTTSEngine.js").AbstractTTSSound} AbstractTTSSound */

/**
 * @extends AbstractTTSEngine
 * TTS using Festival endpoint
 **/
class FestivalTTSEngine extends _AbstractTTSEngine_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /** @override */
  static isSupported() {
    return typeof soundManager !== 'undefined' && soundManager.supported();
  }

  /** @param {TTSEngineOptions} options */
  constructor(options) {
    super(options);
    // $.browsers is sometimes undefined on some Android browsers :/
    // Likely related to when $.browser was moved to npm
    /** @type {'mp3' | 'ogg'} format of audio to get */
    this.audioFormat = $.browser?.mozilla ? 'ogg' : 'mp3'; //eslint-disable-line no-jquery/no-browser
  }

  /** @override */
  getVoices() {
    return [{
      default: true,
      lang: "en-US",
      localService: false,
      name: "Festival - English (US)",
      voiceURI: null
    }];
  }

  /** @override */
  init() {
    // setup sound manager
    soundManager.setup({
      debugMode: false,
      // Note, there's a bug in Chrome regarding range requests.
      // Flash is used as a workaround.
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=505707
      preferFlash: true,
      url: '/bookreader/BookReader/soundmanager/swf',
      useHTML5Audio: true,
      //flash 8 version of swf is buggy when calling play() on a sound that is still loading
      flashVersion: 9
    });
  }

  /**
   * @override
   * @param {number} leafIndex
   * @param {number} numLeafs total number of leafs in the current book
   */
  start(leafIndex, numLeafs) {
    let promise = null;

    // Hack for iOS
    if (navigator.userAgent.match(/mobile/i)) {
      promise = this.iOSCaptureUserIntentHack();
    }
    promise = promise || Promise.resolve();
    promise.then(() => super.start(leafIndex, numLeafs));
  }

  /** @override */
  createSound(chunk) {
    return new FestivalTTSSound(this.getSoundUrl(chunk.text));
  }

  /**
   * @private
   * Get URL for audio that says this text
   * @param {String} dataString the thing to say
   * @return {String} url
   */
  getSoundUrl(dataString) {
    return 'https://' + this.opts.server + '/BookReader/BookReaderGetTTS.php?string=' + encodeURIComponent(dataString) + '&format=.' + this.audioFormat;
  }

  /**
   * @private
   * Security restrictions require playback to be triggered
   * by a user click/touch. This intention gets lost in the async calls
   * on iOS, but, for some reason, if we start the audio here, it works.
   * See https://stackoverflow.com/questions/12206631/html5-audio-cant-play-through-javascript-unless-triggered-manually-once
   * @return {PromiseLike}
   */
  async iOSCaptureUserIntentHack() {
    const sound = soundManager.createSound({
      url: SILENCE_1MS[this.audioFormat]
    });
    await new Promise(res => sound.play({
      onfinish: res
    }));
    sound.destruct();
  }
}

/** @extends AbstractTTSSound */
class FestivalTTSSound {
  /** @param {string} soundUrl **/
  constructor(soundUrl) {
    this.soundUrl = soundUrl;
    /** @type {SMSound} */
    this.sound = null;
    this.rate = 1;
    /** @type {function} calling this resolves the "play" promise */
    this._finishResolver = null;
  }
  get loaded() {
    return this.sound && this.sound.loaded;
  }
  load(onload) {
    this.sound = soundManager.createSound({
      url: this.soundUrl,
      // API recommended, but only fires once play started on safari
      onload: () => {
        if (this.rate != 1) this.sound.setPlaybackRate(this.rate);
        onload();
      },
      onresume: async () => {
        await (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_1__.sleep)(25);
        if (this.rate != 1) this.sound.setPlaybackRate(this.rate);
      }
    });
    return this.sound.load();
  }
  async play() {
    await new Promise(res => {
      this._finishResolver = res;
      this.sound.play({
        onfinish: res
      });
    });
    this.sound.destruct();
  }

  /** @override */
  stop() {
    this.sound.stop();
    return Promise.resolve();
  }

  /** @override */
  pause() {
    this.sound.pause();
  }
  /** @override */
  resume() {
    this.sound.resume();
  }
  /** @override */
  setPlaybackRate(rate) {
    this.rate = rate;
    this.sound.setPlaybackRate(rate);
  }

  /** @override */
  finish() {
    this.sound.stop();
    this._finishResolver();
  }
}

/** Needed to capture the audio context for iOS hack. Generated using Audacity. */
const SILENCE_1MS = {
  mp3: 'data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAACAAACcQCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA//////////////////////////////////////////////////////////////////8AAAAeTEFNRTMuOTlyBJwAAAAAAAAAADUgJAaUQQABrgAAAnHIf8sZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQxAADwlwBKGAAACAAAD/AAAAEAAAAH///////////////+UBAMExBTUUzLjk5LjOqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xDEIAPAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqg==',
  ogg: 'data:audio/ogg;base64,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'
};

/***/ }),

/***/ "./src/plugins/tts/PageChunk.js":
/*!**************************************!*\
  !*** ./src/plugins/tts/PageChunk.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageChunk; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/**
 * Class to manage a 'chunk' (approximately a paragraph) of text on a page.
 */
class PageChunk {
  /**
   * @param {number} leafIndex
   * @param {number} chunkIndex
   * @param {string} text
   * @param {DJVURect[]} lineRects
   */
  constructor(leafIndex, chunkIndex, text, lineRects) {
    this.leafIndex = leafIndex;
    this.chunkIndex = chunkIndex;
    this.text = text;
    this.lineRects = lineRects;
  }

  /**
   * @param {string} server
   * @param {string} bookPath
   * @param {number} leafIndex
   * @return {Promise<PageChunk[]>}
   */
  static async fetch(server, bookPath, leafIndex) {
    const chunks = await $.ajax({
      type: 'GET',
      url: `https://${server}/BookReader/BookReaderGetTextWrapper.php`,
      dataType: 'jsonp',
      cache: true,
      data: {
        path: `${bookPath}_djvu.xml`,
        page: leafIndex
      }
    });
    return PageChunk._fromTextWrapperResponse(leafIndex, chunks);
  }

  /**
   * Convert the response from BookReaderGetTextWrapper.php into a {@link PageChunk} instance
   * @param {number} leafIndex
   * @param {Array<[String, ...DJVURect[]]>} chunksResponse
   * @return {PageChunk[]}
   */
  static _fromTextWrapperResponse(leafIndex, chunksResponse) {
    return chunksResponse.map((c, i) => {
      const correctedLineRects = PageChunk._fixChunkRects(c.slice(1));
      const correctedText = PageChunk._removeDanglingHyphens(c[0]);
      return new PageChunk(leafIndex, i, correctedText, correctedLineRects);
    });
  }

  /**
   * @private
   * Sometimes the first rectangle will be ridiculously wide/tall. Find those and fix them
   * *NOTE*: Modifies the original array and returns it.
   * *NOTE*: This should probably be fixed on the petabox side, and then removed here
   * Has 2 problems:
   *  - If the rect is the last rect on the page (and hence the only rect in the array),
   *    the rect's size isn't fixed
   * - Because this relies on the second rect, there's a chance it won't be the right
   *   width
   * @param {DJVURect[]} rects
   * @return {DJVURect[]}
   */
  static _fixChunkRects(rects) {
    if (rects.length < 2) return rects;
    const [firstRect, secondRect] = rects;
    const [left, bottom, right] = firstRect;
    const width = right - left;
    const secondHeight = secondRect[1] - secondRect[3];
    const secondWidth = secondRect[2] - secondRect[0];
    const secondRight = secondRect[2];
    if (width > secondWidth * 30) {
      // Set the end to be the same
      firstRect[2] = secondRight;
      // And the top to be the same height
      firstRect[3] = bottom - secondHeight;
    }
    return rects;
  }

  /**
   * Remove "dangling" hyphens from read aloud text to avoid TTS stuttering
   * @param {string} text
   * @return {string}
   */
  static _removeDanglingHyphens(text) {
    // Some books mis-OCR a dangling hyphen as a ¬ (mathematical not sign) . Since in math
    // the not sign should not appear followed by a space, we think we can safely assume
    // this should be replaced.
    return text.replace(/[-¬]\s+/g, '');
  }
}

/**
 * @typedef {[number, number, number, number]} DJVURect
 * coords are in l,b,r,t order
 */

/***/ }),

/***/ "./src/plugins/tts/PageChunkIterator.js":
/*!**********************************************!*\
  !*** ./src/plugins/tts/PageChunkIterator.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PageChunkIterator; }
/* harmony export */ });
/* harmony import */ var _PageChunk_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageChunk.js */ "./src/plugins/tts/PageChunk.js");


/**
 * Class that iterates over the page chunks of a book; caching/buffering
 * as much as possible to try to ensure a smooth experience.
 */
class PageChunkIterator {
  /**
   * @param {number} pageCount total number of pages
   * @param {number} start page to start on
   * @param {PageChunkIteratorOptions} opts
   */
  constructor(pageCount, start, opts) {
    this.pageCount = pageCount;
    this.opts = Object.assign({}, DEFAULT_OPTS, opts);
    /** Position in the chunk sequence */
    this._cursor = {
      page: start,
      chunk: 0
    };
    /** @type {Object<number, PageChunk[]>} leaf index -> chunks*/
    this._bufferedPages = {};
    /** @type {Object<number, PromiseLike<PageChunk[]>} leaf index -> chunks*/
    this._bufferingPages = {};
    /**
     * @type {Promise} promise that manages cursor modifications so that they
     * happen in order triggered as opposed to order the server responds
     **/
    this._cursorLock = Promise.resolve();
  }

  /**
   * Get the next chunk
   * @return {PromiseLike<"__PageChunkIterator.AT_END__" | PageChunk>}
   */
  next() {
    return this._cursorLock = this._cursorLock.then(() => this._nextUncontrolled());
  }

  /**
   * Sends the cursor back 1
   * @return {Promise}
   **/
  decrement() {
    return this._cursorLock = this._cursorLock.then(() => this._decrementUncontrolled());
  }

  /**
   * Gets without ensuring synchronization. Since this iterator has a lot of async
   * code, calling e.g. "next" twice (before the first call to next has finished)
   * would cause the system to be in a weird state. To avoid that, we make sure calls
   * to next and decrement (functions that modify the cursor) are synchronized,
   * so that regardless how long it takes for one to respond, they'll always be executed
   * in the correct order.
   * @return {PromiseLike<"__PageChunkIterator.AT_END__" | PageChunk>}
   */
  async _nextUncontrolled() {
    if (this._cursor.page == this.pageCount) {
      return Promise.resolve(PageChunkIterator.AT_END);
    }
    this._recenterBuffer(this._cursor.page);
    const chunks = await this._fetchPageChunks(this._cursor.page);
    if (this._cursor.chunk == chunks.length) {
      this._cursor.page++;
      this._cursor.chunk = 0;
      return this._nextUncontrolled();
    }
    return chunks[this._cursor.chunk++];
  }

  /**
   * Decrements without ensuring synchronization. (See {@link PageChunkIterator._nextUncontrolled});
   * @return {Promise}
   */
  _decrementUncontrolled() {
    let cursorChangePromise = Promise.resolve();
    if (this._cursor.chunk > 0) {
      this._cursor.chunk--;
    } else if (this._cursor.page > 0) {
      this._cursor.page--;
      // Go back possibly multiple pages, because pages can be blank
      cursorChangePromise = this._fetchPageChunks(this._cursor.page).then(prevPageChunks => {
        if (prevPageChunks.length == 0) return this._decrementUncontrolled();else this._cursor.chunk = prevPageChunks.length - 1;
      });
    }
    return cursorChangePromise.then(() => this._fetchPageChunks(this._cursor.page));
  }

  /**
   * Recenter the buffer around the provided page index
   * @param {number} index
   */
  _recenterBuffer(index) {
    const start = Math.max(0, index - this.opts.pageBufferSize);
    const end = Math.min(this.pageCount, index + this.opts.pageBufferSize + 1);
    for (let i = start; i < end; i++) {
      this._fetchPageChunks(i);
    }
    this._removePageFromBuffer(start - 1);
    this._removePageFromBuffer(end + 1);
  }

  /**
   * @param {number} index
   */
  _removePageFromBuffer(index) {
    delete this._bufferingPages[index];
    delete this._bufferedPages[index];
  }

  /**
   * Fetches the chunks on a page; checks the buffer, so it won't make unnecessary
   * requests if it's called multiple times for the same index.
   * @param {number} index
   * @return {Promise<PageChunk[]>}
   */
  _fetchPageChunks(index) {
    if (index in this._bufferingPages) return this._bufferingPages[index];
    if (index in this._bufferedPages) return Promise.resolve(this._bufferedPages[index]);
    this._bufferingPages[index] = this._fetchPageChunksDirect(index).then(chunks => {
      delete this._bufferingPages[index];
      this._bufferedPages[index] = chunks;
      return chunks;
    });
    return this._bufferingPages[index];
  }

  /**
   * Fetches a page without checking buffer
   * @param {number} index
   */
  _fetchPageChunksDirect(index) {
    return _PageChunk_js__WEBPACK_IMPORTED_MODULE_0__["default"].fetch(this.opts.server, this.opts.bookPath, index);
  }
}
PageChunkIterator.AT_END = "__PageChunkIterator.AT_END__";

/** @type {PageChunkIteratorOptions} */
const DEFAULT_OPTS = {
  server: null,
  bookPath: null,
  pageBufferSize: 2
};

/**
 * @typedef {Object} PageChunkIteratorOptions
 * @property {string} server
 * @property {string} bookPath
 * @property {number} [pageBufferSize] number of pages to buffer before/after the current page
 */

/***/ }),

/***/ "./src/plugins/tts/WebTTSEngine.js":
/*!*****************************************!*\
  !*** ./src/plugins/tts/WebTTSEngine.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebTTSSound: function() { return /* binding */ WebTTSSound; },
/* harmony export */   "default": function() { return /* binding */ WebTTSEngine; }
/* harmony export */ });
/* harmony import */ var _util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/browserSniffing.js */ "./src/util/browserSniffing.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/plugins/tts/utils.js");
/* harmony import */ var _BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../BookReader/utils.js */ "./src/BookReader/utils.js");
/* harmony import */ var _AbstractTTSEngine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AbstractTTSEngine.js */ "./src/plugins/tts/AbstractTTSEngine.js");
/* global br */




/** @typedef {import("./AbstractTTSEngine.js").PageChunk} PageChunk */
/** @typedef {import("./AbstractTTSEngine.js").AbstractTTSSound} AbstractTTSSound */
/** @typedef {import("./AbstractTTSEngine.js").TTSEngineOptions} TTSEngineOptions */

/**
 * @extends AbstractTTSEngine
 * TTS using Web Speech APIs
 **/
class WebTTSEngine extends _AbstractTTSEngine_js__WEBPACK_IMPORTED_MODULE_3__["default"] {
  static isSupported() {
    return typeof window.speechSynthesis !== 'undefined' && !/samsungbrowser/i.test(navigator.userAgent);
  }

  /** @param {TTSEngineOptions} options */
  constructor(options) {
    super(options);

    // SAFARI doesn't have addEventListener on speechSynthesis
    if (speechSynthesis.addEventListener) {
      speechSynthesis.addEventListener('voiceschanged', () => this.events.trigger('voiceschanged'));
    }
  }

  /** @override */
  start(leafIndex, numLeafs) {
    // Need to run in this function to capture user intent to start playing audio
    if ('mediaSession' in navigator) {
      const audio = new Audio(SILENCE_6S_MP3);
      audio.loop = true;
      this.events.on('pause', () => audio.pause());
      this.events.on('resume', () => audio.play());
      // apparently this is what you need to do to make the media session notification go away
      // See https://developers.google.com/web/updates/2017/02/media-session#implementation_notes
      this.events.on('stop', () => audio.src = '');
      audio.play().then(() => {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: br.bookTitle,
          artist: br.options.metadata.filter(m => m.label == 'Author').map(m => m.value)[0],
          // album: 'The Ultimate Collection (Remastered)',
          artwork: [{
            src: br.options.thumbnail,
            type: 'image/jpg'
          }]
        });
        navigator.mediaSession.setActionHandler('play', () => {
          audio.play();
          this.resume();
        });
        navigator.mediaSession.setActionHandler('pause', () => {
          audio.pause();
          this.pause();
        });

        // navigator.mediaSession.setActionHandler('seekbackward', () => this.jumpBackward());
        // navigator.mediaSession.setActionHandler('seekforward', () => this.jumpForward());
        // Some devices only support the previoustrack/nexttrack (e.g. Win10), so show those.
        // Android devices do support the seek actions, but we don't want to show both buttons
        // and have them do the same thing.
        navigator.mediaSession.setActionHandler('previoustrack', () => this.jumpBackward());
        navigator.mediaSession.setActionHandler('nexttrack', () => this.jumpForward());
      });
    }
    return super.start(leafIndex, numLeafs);
  }

  /** @override */
  getVoices() {
    const voices = speechSynthesis.getVoices();
    if (voices.filter(v => v.default).length != 1) {
      // iOS bug where the default system voice is sometimes
      // missing from the list
      voices.unshift({
        voiceURI: 'bookreader.SystemDefault',
        name: 'System Default',
        // Not necessarily true, but very likely
        lang: navigator.language,
        default: true,
        localService: true
      });
    }
    return voices;
  }

  /** @override */
  createSound(chunk) {
    return new WebTTSSound(chunk.text);
  }
}

/** @extends AbstractTTSSound */
class WebTTSSound {
  /** @param {string} text **/
  constructor(text) {
    this.text = text;
    this.loaded = false;
    this.paused = false;
    this.started = false;
    /** Whether the audio was stopped with a .stop() call */
    this.stopped = false;
    this.rate = 1;

    /** @type {SpeechSynthesisUtterance} */
    this.utterance = null;

    /** @type {SpeechSynthesisVoice} */
    this.voice = null;
    this._lastEvents = {
      /** @type {SpeechSynthesisEvent} */
      pause: null,
      /** @type {SpeechSynthesisEvent} */
      boundary: null,
      /** @type {SpeechSynthesisEvent} */
      start: null
    };

    /** Store where we are in the text. Only works on some browsers. */
    this._charIndex = 0;

    /** @type {Function} resolve function called when playback finished */
    this._finishResolver = null;

    /** @type {Promise} promise resolved by _finishResolver */
    this._finishPromise = null;
  }

  /** @override **/
  load(onload) {
    this.loaded = false;
    this.started = false;
    this.utterance = new SpeechSynthesisUtterance(this.text.slice(this._charIndex));
    // iOS bug where the default system voice is sometimes
    // missing from the list
    if (this.voice?.voiceURI !== 'bookreader.SystemDefault') {
      this.utterance.voice = this.voice;
    }
    // Need to also set lang (for some reason); won't set voice on Chrome@Android otherwise
    if (this.voice) this.utterance.lang = this.voice.lang;
    this.utterance.rate = this.rate;

    // Useful for debugging things
    if (location.toString().indexOf('_debugReadAloud=true') != -1) {
      this.utterance.addEventListener('pause', () => console.log('pause'));
      this.utterance.addEventListener('resume', () => console.log('resume'));
      this.utterance.addEventListener('start', () => console.log('start'));
      this.utterance.addEventListener('end', () => console.log('end'));
      this.utterance.addEventListener('error', () => console.log('error'));
      this.utterance.addEventListener('boundary', () => console.log('boundary'));
      this.utterance.addEventListener('mark', () => console.log('mark'));
      this.utterance.addEventListener('finish', () => console.log('finish'));
    }

    // Keep track of the speech synthesis events that come in; they have useful info
    // about progress (like charIndex)
    this.utterance.addEventListener('start', ev => this._lastEvents.start = ev);
    this.utterance.addEventListener('boundary', ev => this._lastEvents.boundary = ev);
    this.utterance.addEventListener('pause', ev => this._lastEvents.pause = ev);

    // Update our state
    this.utterance.addEventListener('start', () => {
      this.started = true;
      this.stopped = false;
      this.paused = false;
    });
    this.utterance.addEventListener('pause', () => this.paused = true);
    this.utterance.addEventListener('resume', () => this.paused = false);
    this.utterance.addEventListener('end', ev => {
      if (!this.paused && !this.stopped) {
        // Trigger a new event, finish, which only fires when audio fully completed
        this.utterance.dispatchEvent(new CustomEvent('finish', ev));
      }
    });
    this.loaded = true;
    onload && onload();
  }

  /**
   * Run whenever properties have changed. Tries to restart in the same spot it
   * left off.
   * @return {Promise<void>}
   */
  async reload() {
    // We'll restore the pause state, so copy it here
    const wasPaused = this.paused;
    // Use recent event to determine where we'll restart from
    // Browser support for this is mixed, but it degrades to restarting the chunk
    // and that's ok
    const recentEvent = this._lastEvents.boundary || this._lastEvents.pause;
    if (recentEvent) {
      this._charIndex = this.text.indexOf(recentEvent.target.text) + recentEvent.charIndex;
    }

    // We can't modify the utterance object, so we have to make a new one
    await this.stop();
    this.load();
    // Instead of playing and immediately pausing, we don't start playing. Note
    // this is a requirement because pause doesn't work consistently across
    // browsers.
    if (!wasPaused) this.play();
  }
  play() {
    this._finishPromise = this._finishPromise || new Promise(res => this._finishResolver = res);
    this.utterance.addEventListener('finish', this._finishResolver);

    // clear the queue
    speechSynthesis.cancel();
    // reset pause state
    speechSynthesis.resume();
    // Speak
    speechSynthesis.speak(this.utterance);
    const isLocalVoice = this.utterance.voice && this.utterance.voice.localService;
    if ((0,_util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_0__.isChrome)() && !isLocalVoice) this._chromePausingBugFix();
    return this._finishPromise;
  }

  /** @return {Promise} */
  stop() {
    // 'end' won't fire if already stopped
    let endPromise = Promise.resolve();
    if (!this.stopped) {
      endPromise = Promise.race([(0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.promisifyEvent)(this.utterance, 'end'),
      // Safari triggers an error when you call cancel mid-sound
      (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.promisifyEvent)(this.utterance, 'error')]);
    }
    this.stopped = true;
    speechSynthesis.cancel();
    return endPromise;
  }
  async finish() {
    await this.stop();
    this.utterance.dispatchEvent(new Event('finish'));
  }

  /**
   * @override
   * Will fire a pause event unless already paused
   **/
  async pause() {
    if (this.paused) return;
    const pausePromise = (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.promisifyEvent)(this.utterance, 'pause');
    speechSynthesis.pause();

    // There are a few awful browser cases:
    // 1. Pause works and fires
    // 2. Pause doesn't work and doesn't fire
    // 3. Pause works but doesn't fire
    const pauseMightNotWork = (0,_util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_0__.isFirefox)() && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isAndroid)();
    const pauseMightNotFire = (0,_util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_0__.isChrome)() || pauseMightNotWork;
    if (pauseMightNotFire) {
      // wait for it just in case
      const timeoutPromise = (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.sleep)(100).then(() => 'timeout');
      const result = await Promise.race([pausePromise, timeoutPromise]);
      // We got our pause event; nothing to do!
      if (result != 'timeout') return;
      this.utterance.dispatchEvent(new CustomEvent('pause', this._lastEvents.start));

      // if pause might not work, then we'll stop entirely and restart later
      if (pauseMightNotWork) this.stop();
    }
  }
  async resume() {
    if (!this.started) {
      this.play();
      return;
    }
    if (!this.paused) return;

    // Browser cases:
    // 1. Resume works + fires
    // 2. Resume works + doesn't fire (Chrome Desktop)
    // 3. Resume doesn't work + doesn't fire (Chrome/FF Android)
    const resumeMightNotWork = (0,_util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_0__.isChrome)() && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isAndroid)() || (0,_util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_0__.isFirefox)() && (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.isAndroid)();
    const resumeMightNotFire = (0,_util_browserSniffing_js__WEBPACK_IMPORTED_MODULE_0__.isChrome)() || resumeMightNotWork;

    // Try resume
    const resumePromise = (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.promisifyEvent)(this.utterance, 'resume');
    speechSynthesis.resume();
    if (resumeMightNotFire) {
      const result = await Promise.race([resumePromise, (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.sleep)(100).then(() => 'timeout')]);
      if (result != 'timeout') return;
      this.utterance.dispatchEvent(new CustomEvent('resume', {}));
      if (resumeMightNotWork) {
        await this.reload();
        this.play();
      }
    }
  }
  setPlaybackRate(rate) {
    this.rate = rate;
    this.reload();
  }

  /** @param {SpeechSynthesisVoice} voice */
  setVoice(voice) {
    this.voice = voice;
    this.reload();
  }
  /**
   * @private
   * Chrome has a bug where it only plays 15 seconds of TTS and then
   * suddenly stops (see https://bugs.chromium.org/p/chromium/issues/detail?id=679437 )
   * We avoid this (as described here: https://bugs.chromium.org/p/chromium/issues/detail?id=679437#c15 )
   * by pausing after 14 seconds and ~instantly resuming.
   */
  async _chromePausingBugFix() {
    const timeoutPromise = (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.sleep)(14000).then(() => 'timeout');
    const pausePromise = (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.promisifyEvent)(this.utterance, 'pause').then(() => 'paused');
    const endPromise = (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.promisifyEvent)(this.utterance, 'end').then(() => 'ended');
    const result = await Promise.race([timeoutPromise, pausePromise, endPromise]);
    if (location.toString().indexOf('_debugReadAloud=true') != -1) {
      console.log(`CHROME-PAUSE-HACK: ${result}`);
    }
    switch (result) {
      case 'ended':
        // audio was stopped/finished; nothing to do
        break;
      case 'paused':
        // audio was paused; wait for resume
        // Chrome won't let you resume the audio if 14s have passed 🤷‍
        // We could do the same as before (but resume+pause instead of pause+resume),
        // but that means we'd _constantly_ be running in the background. So in that
        // case, let's just restart the chunk
        await Promise.race([(0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.promisifyEvent)(this.utterance, 'resume'), (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.sleep)(14000).then(() => 'timeout')]);
        result == 'timeout' ? this.reload() : this._chromePausingBugFix();
        break;
      case 'timeout':
        // We hit Chrome's secret cut off time. Pause/resume
        // to be able to keep TTS-ing
        speechSynthesis.pause();
        await (0,_BookReader_utils_js__WEBPACK_IMPORTED_MODULE_2__.sleep)(25);
        speechSynthesis.resume();
        this._chromePausingBugFix();
        break;
    }
  }
}

/**
 * According to https://developers.google.com/web/updates/2017/02/media-session#implementation_notes , it needs to be at least 5 seconds
 * long to allow usage of the media sessions api
 */
const SILENCE_6S_MP3 = 'data:audio/mp3;base64,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';

/***/ }),

/***/ "./src/plugins/tts/plugin.tts.js":
/*!***************************************!*\
  !*** ./src/plugins/tts/plugin.tts.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FestivalTTSEngine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FestivalTTSEngine.js */ "./src/plugins/tts/FestivalTTSEngine.js");
/* harmony import */ var _WebTTSEngine_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WebTTSEngine.js */ "./src/plugins/tts/WebTTSEngine.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/plugins/tts/utils.js");
/* harmony import */ var _tooltip_dict_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tooltip_dict.js */ "./src/plugins/tts/tooltip_dict.js");
/* harmony import */ var _BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../BookReader/PageContainer.js */ "./src/BookReader/PageContainer.js");
/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "jquery");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "jquery");
/* global BookReader */
/**
 * Plugin for Text to Speech in BookReader
 */





/** @typedef {import('./PageChunk.js').default} PageChunk */
/** @typedef {import("./AbstractTTSEngine.js").default} AbstractTTSEngine */

// Default options for TTS
jQuery.extend(BookReader.defaultOptions, {
  server: 'ia600609.us.archive.org',
  bookPath: '',
  enableTtsPlugin: true
});

// Extend the constructor to add TTS properties
BookReader.prototype.setup = function (super_) {
  return function (options) {
    super_.call(this, options);
    if (this.options.enableTtsPlugin) {
      /** @type { {[pageIndex: number]: Array<{ l: number, r: number, t: number, b: number }>} } */
      this._ttsBoxesByIndex = {};
      let TTSEngine = _WebTTSEngine_js__WEBPACK_IMPORTED_MODULE_1__["default"].isSupported() ? _WebTTSEngine_js__WEBPACK_IMPORTED_MODULE_1__["default"] : _FestivalTTSEngine_js__WEBPACK_IMPORTED_MODULE_0__["default"].isSupported() ? _FestivalTTSEngine_js__WEBPACK_IMPORTED_MODULE_0__["default"] : null;
      if (/_forceTTSEngine=(festival|web)/.test(location.toString())) {
        const engineName = location.toString().match(/_forceTTSEngine=(festival|web)/)[1];
        TTSEngine = {
          festival: _FestivalTTSEngine_js__WEBPACK_IMPORTED_MODULE_0__["default"],
          web: _WebTTSEngine_js__WEBPACK_IMPORTED_MODULE_1__["default"]
        }[engineName];
      }
      if (TTSEngine) {
        /** @type {AbstractTTSEngine} */
        this.ttsEngine = new TTSEngine({
          server: options.server,
          bookPath: options.bookPath,
          bookLanguage: (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.toISO6391)(options.bookLanguage),
          onLoadingStart: this.showProgressPopup.bind(this, 'Loading audio...'),
          onLoadingComplete: this.removeProgressPopup.bind(this),
          onDone: this.ttsStop.bind(this),
          beforeChunkPlay: this.ttsBeforeChunkPlay.bind(this),
          afterChunkPlay: this.ttsSendChunkFinishedAnalyticsEvent.bind(this)
        });
      }
    }
  };
}(BookReader.prototype.setup);
BookReader.prototype.init = function (super_) {
  return function () {
    if (this.options.enableTtsPlugin) {
      // Bind to events

      this.bind(BookReader.eventNames.PostInit, () => {
        this.$('.BRicon.read').click(() => {
          this.ttsToggle();
          return false;
        });
        if (this.ttsEngine) {
          this.ttsEngine.init();
          if (/[?&]_autoReadAloud=show/.test(location.toString())) {
            this.ttsStart(false); // false flag is to initiate read aloud controls
          }
        }
      });

      // This is fired when the hash changes by one of the other plugins!
      // i.e. it will fire every time the page changes -_-
      // this.bind(BookReader.eventNames.stop, function(e, br) {
      //     this.ttsStop();
      // }.bind(this));
    }

    super_.call(this);
  };
}(BookReader.prototype.init);

/** @override */
BookReader.prototype._createPageContainer = function (super_) {
  return function (index) {
    const pageContainer = super_.call(this, index);
    if (this.options.enableTtsPlugin && pageContainer.page && index in this._ttsBoxesByIndex) {
      const pageIndex = pageContainer.page.index;
      (0,_BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_4__.renderBoxesInPageContainerLayer)('ttsHiliteLayer', this._ttsBoxesByIndex[pageIndex], pageContainer.page, pageContainer.$container[0]);
    }
    return pageContainer;
  };
}(BookReader.prototype._createPageContainer);

// Extend buildMobileDrawerElement
BookReader.prototype.buildMobileDrawerElement = function (super_) {
  return function () {
    const $el = super_.call(this);
    if (this.options.enableTtsPlugin && this.ttsEngine) {
      $el.find('.BRmobileMenu__moreInfoRow').after($(`
        <li>
            <span>
                <span class="DrawerIconWrapper"><img class="DrawerIcon" src="${this.imagesBaseURL}icon_speaker_open.svg" alt="info-speaker"/></span>
                Read Aloud
            </span>
            <div>
                <span class="larger">Press to toggle read aloud</span>
                <br/>
                <button class="BRicon read"></button>
            </div>
        </li>`));
    }
    return $el;
  };
}(BookReader.prototype.buildMobileDrawerElement);

// Extend initNavbar
BookReader.prototype.initNavbar = function (super_) {
  return function () {
    const $el = super_.call(this);
    if (this.options.enableTtsPlugin && this.ttsEngine) {
      this.refs.$BRReadAloudToolbar = $(`
        <ul class="read-aloud">
          <li>
            <select class="playback-speed" name="playback-speed" title="${_tooltip_dict_js__WEBPACK_IMPORTED_MODULE_3__.en.playbackSpeed}">
              <option value="0.25">0.25x</option>
              <option value="0.5">0.5x</option>
              <option value="0.75">0.75x</option>
              <option value="1.0" selected>1.0x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="1.75">1.75x</option>
              <option value="2">2x</option>
            </select>
          </li>
          <li>
            <button type="button" name="review" title="${_tooltip_dict_js__WEBPACK_IMPORTED_MODULE_3__.en.review}">
              <div class="icon icon-review"></div>
            </button>
          </li>
          <li>
            <button type="button" name="play" title="${_tooltip_dict_js__WEBPACK_IMPORTED_MODULE_3__.en.play}">
              <div class="icon icon-play"></div>
              <div class="icon icon-pause"></div>
            </button>
          </li>
          <li>
            <button type="button" name="advance" title="${_tooltip_dict_js__WEBPACK_IMPORTED_MODULE_3__.en.advance}">
              <div class="icon icon-advance"></div>
            </button>
          </li>
          <li>
            <select class="playback-voices" name="playback-voice" style="display: none" title="Change read aloud voices">
            </select>
          </li>
        </ul>
      `);
      $el.find('.BRcontrols').prepend(this.refs.$BRReadAloudToolbar);
      const renderVoiceOption = voices => {
        return voices.map(voice => `<option value="${voice.voiceURI}">${voice.lang} - ${voice.name}</option>`).join('');
      };
      const voiceSortOrder = (a, b) => `${a.lang} - ${a.name}`.localeCompare(`${b.lang} - ${b.name}`);
      const renderVoicesMenu = voicesMenu => {
        voicesMenu.empty();
        const bookLanguage = this.ttsEngine.opts.bookLanguage;
        const bookLanguages = this.ttsEngine.getVoices().filter(v => v.lang.startsWith(bookLanguage)).sort(voiceSortOrder);
        const otherLanguages = this.ttsEngine.getVoices().filter(v => !v.lang.startsWith(bookLanguage)).sort(voiceSortOrder);
        if (this.ttsEngine.getVoices().length > 1) {
          voicesMenu.append($(`<optgroup label="Book Language (${bookLanguage})"> ${renderVoiceOption(bookLanguages)} </optgroup>`));
          voicesMenu.append($(`<optgroup label="Other Languages"> ${renderVoiceOption(otherLanguages)} </optgroup>`));
          voicesMenu.val(this.ttsEngine.voice.voiceURI);
          voicesMenu.show();
        } else {
          voicesMenu.hide();
        }
      };
      const voicesMenu = this.refs.$BRReadAloudToolbar.find('[name=playback-voice]');
      renderVoicesMenu(voicesMenu);
      voicesMenu.on("change", ev => this.ttsEngine.setVoice(voicesMenu.val()));
      this.ttsEngine.events.on('pause resume start', () => this.ttsUpdateState());
      this.ttsEngine.events.on('voiceschanged', () => renderVoicesMenu(voicesMenu));
      this.refs.$BRReadAloudToolbar.find('[name=play]').on("click", this.ttsPlayPause.bind(this));
      this.refs.$BRReadAloudToolbar.find('[name=advance]').on("click", this.ttsJumpForward.bind(this));
      this.refs.$BRReadAloudToolbar.find('[name=review]').on("click", this.ttsJumpBackward.bind(this));
      const $rateSelector = this.refs.$BRReadAloudToolbar.find('select[name="playback-speed"]');
      $rateSelector.on("change", ev => this.ttsEngine.setPlaybackRate(parseFloat($rateSelector.val())));
      $(`<li>
          <button class="BRicon read js-tooltip" title="${_tooltip_dict_js__WEBPACK_IMPORTED_MODULE_3__.en.readAloud}">
            <div class="icon icon-read-aloud"></div>
            <span class="BRtooltip">${_tooltip_dict_js__WEBPACK_IMPORTED_MODULE_3__.en.readAloud}</span>
          </button>
        </li>`).insertBefore($el.find('.BRcontrols .BRicon.zoom_out').closest('li'));
    }
    return $el;
  };
}(BookReader.prototype.initNavbar);

// ttsToggle()
//______________________________________________________________________________
BookReader.prototype.ttsToggle = function () {
  if (this.autoStop) this.autoStop();
  if (this.ttsEngine.playing) {
    this.ttsStop();
  } else {
    this.ttsStart();
  }
};

// ttsStart(
//______________________________________________________________________________
BookReader.prototype.ttsStart = function (startTTSEngine = true) {
  if (this.constModeThumb == this.mode) this.switchMode(this.constMode1up);
  this.refs.$BRReadAloudToolbar.addClass('visible');
  this.$('.BRicon.read').addClass('unread active');
  this.ttsSendAnalyticsEvent('Start');
  if (startTTSEngine) this.ttsEngine.start(this.currentIndex(), this.book.getNumLeafs());
};
BookReader.prototype.ttsJumpForward = function () {
  if (this.ttsEngine.paused) {
    this.ttsEngine.resume();
  }
  this.ttsEngine.jumpForward();
};
BookReader.prototype.ttsJumpBackward = function () {
  if (this.ttsEngine.paused) {
    this.ttsEngine.resume();
  }
  this.ttsEngine.jumpBackward();
};
BookReader.prototype.ttsUpdateState = function () {
  const isPlaying = !(this.ttsEngine.paused || !this.ttsEngine.playing);
  this.$('.read-aloud [name=play]').toggleClass('playing', isPlaying);
};
BookReader.prototype.ttsPlayPause = function () {
  if (!this.ttsEngine.playing) {
    this.ttsToggle();
  } else {
    this.ttsEngine.togglePlayPause();
    this.ttsUpdateState();
  }
};

// ttsStop()
//______________________________________________________________________________
BookReader.prototype.ttsStop = function () {
  this.refs.$BRReadAloudToolbar.removeClass('visible');
  this.$('.BRicon.read').removeClass('unread active');
  this.ttsSendAnalyticsEvent('Stop');
  this.ttsEngine.stop();
  this.ttsRemoveHilites();
  this.removeProgressPopup();
};

/**
 * @param {PageChunk} chunk
 * @return {PromiseLike<void>} returns once the flip is done
 */
BookReader.prototype.ttsBeforeChunkPlay = async function (chunk) {
  await this.ttsMaybeFlipToIndex(chunk.leafIndex);
  this.ttsHighlightChunk(chunk);
  this.ttsScrollToChunk(chunk);
};

/**
 * @param {PageChunk} chunk
 */
BookReader.prototype.ttsSendChunkFinishedAnalyticsEvent = function (chunk) {
  this.ttsSendAnalyticsEvent('ChunkFinished-Words', (0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.approximateWordCount)(chunk.text));
};

/**
 * Flip the page if the provided leaf index is not visible
 * @param {Number} leafIndex
 */
BookReader.prototype.ttsMaybeFlipToIndex = async function (leafIndex) {
  if (this.constMode2up != this.mode) {
    this.jumpToIndex(leafIndex);
  } else {
    await this._modes.mode2Up.mode2UpLit.jumpToIndex(leafIndex);
  }
};

/**
 * @param {PageChunk} chunk
 */
BookReader.prototype.ttsHighlightChunk = function (chunk) {
  // The poorly-named variable leafIndex
  const pageIndex = chunk.leafIndex;
  this.ttsRemoveHilites();

  // group by index; currently only possible to have chunks on one page :/
  this._ttsBoxesByIndex = {
    [pageIndex]: chunk.lineRects.map(([l, b, r, t]) => ({
      l,
      r,
      b,
      t
    }))
  };

  // update any already created pages
  for (const [pageIndexString, boxes] of Object.entries(this._ttsBoxesByIndex)) {
    const pageIndex = parseFloat(pageIndexString);
    const page = this.book.getPage(pageIndex);
    const pageContainers = this.getActivePageContainerElementsForIndex(pageIndex);
    pageContainers.forEach(container => (0,_BookReader_PageContainer_js__WEBPACK_IMPORTED_MODULE_4__.renderBoxesInPageContainerLayer)('ttsHiliteLayer', boxes, page, container));
  }
};

/**
 * @param {PageChunk} chunk
 */
BookReader.prototype.ttsScrollToChunk = function (chunk) {
  // It behaves weird if used in thumb mode
  if (this.constModeThumb == this.mode) return;
  $(`.pagediv${chunk.leafIndex} .ttsHiliteLayer rect`).last()?.[0]?.scrollIntoView({
    // Only vertically center the highlight if we're in 1up or in full screen. In
    // 2up, if we're not fullscreen, the whole body gets scrolled around to try to
    // center the highlight 🙄 See:
    // https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move/11041376
    // Note: nearest doesn't quite work great, because the ReadAloud toolbar is now
    // full-width, and covers up the last line of the highlight.
    block: this.constMode1up == this.mode || this.isFullscreenActive ? 'center' : 'nearest',
    inline: 'center',
    behavior: 'smooth'
  });
};

// ttsRemoveHilites()
//______________________________________________________________________________
BookReader.prototype.ttsRemoveHilites = function () {
  $(this.getActivePageContainerElements()).find('.ttsHiliteLayer').remove();
  this._ttsBoxesByIndex = {};
};

/**
 * @private
 * Send an analytics event with an optional value. Also attaches the book's language.
 * @param {string} action
 * @param {number} [value]
 */
BookReader.prototype.ttsSendAnalyticsEvent = function (action, value) {
  if (this.archiveAnalyticsSendEvent) {
    const extraValues = {};
    const mediaLanguage = this.ttsEngine.opts.bookLanguage;
    if (mediaLanguage) extraValues.mediaLanguage = mediaLanguage;
    this.archiveAnalyticsSendEvent('BRReadAloud', action, value, extraValues);
  }
};

/***/ }),

/***/ "./src/plugins/tts/tooltip_dict.js":
/*!*****************************************!*\
  !*** ./src/plugins/tts/tooltip_dict.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   en: function() { return /* binding */ en; },
/* harmony export */   es: function() { return /* binding */ es; }
/* harmony export */ });
const en = {
  advance: 'Advance 10 seconds',
  play: 'Play',
  playbackSpeed: 'Playback speed',
  readAloud: 'Read this book aloud',
  review: 'Review 10 seconds'
};
const es = {
  advance: 'Avance 10 segundos',
  play: 'Jugar',
  playbackSpeed: 'Velocidad de reproducción',
  readAloud: 'Lee este libro en voz alta',
  review: 'Revisar 10 segundos'
};

/***/ }),

/***/ "./src/plugins/tts/utils.js":
/*!**********************************!*\
  !*** ./src/plugins/tts/utils.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   approximateWordCount: function() { return /* binding */ approximateWordCount; },
/* harmony export */   hasLocalStorage: function() { return /* binding */ hasLocalStorage; },
/* harmony export */   isAndroid: function() { return /* binding */ isAndroid; },
/* harmony export */   toISO6391: function() { return /* binding */ toISO6391; }
/* harmony export */ });
/* harmony import */ var iso_language_codes_js_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iso-language-codes/js/data.js */ "./node_modules/iso-language-codes/js/data.js");


/**
 * Use regex to approximate word count in a string
 * @param {string} text
 * @return {number}
 */
function approximateWordCount(text) {
  const m = text.match(/\S+/g);
  return m ? m.length : 0;
}

/**
 * Checks whether the current browser is on android
 * @param {string} [userAgent]
 * @return {boolean}
 */
function isAndroid(userAgent = navigator.userAgent) {
  return /android/i.test(userAgent);
}

/**
 * @typedef {string} ISO6391
 * Language code in ISO 639-1 format. e.g. en, fr, zh
 **/

/** Each lang is an array, with each index mapping to a different property */
const COLUMN_TO_LANG_INDEX = {
  'Name': 0,
  'Endonym': 1,
  'ISO 639-1': 2,
  'ISO 639-2/T': 3,
  'ISO 639-2/B': 4
};

/**
 * @param {string} language in some format
 * @return {ISO6391?}
 */
function toISO6391(language) {
  if (!language) return null;
  language = language.toLowerCase();
  return searchForISO6391(language, ['ISO 639-1']) || searchForISO6391(language, ['ISO 639-2/B']) || searchForISO6391(language, ['ISO 639-2/T', 'Endonym', 'Name']);
}

/**
 * Searches for the given long in the given columns.
 * @param {string} language
 * @param {Array<keyof COLUMN_TO_LANG_INDEX>} columnsToSearch
 * @return {ISO6391?}
 */
function searchForISO6391(language, columnsToSearch) {
  for (let i = 0; i < iso_language_codes_js_data_js__WEBPACK_IMPORTED_MODULE_0__["default"].length; i++) {
    for (let colI = 0; colI < columnsToSearch.length; colI++) {
      const column = columnsToSearch[colI];
      const columnValue = iso_language_codes_js_data_js__WEBPACK_IMPORTED_MODULE_0__["default"][i][COLUMN_TO_LANG_INDEX[column]];
      if (columnValue.split(', ').map(x => x.toLowerCase()).indexOf(language) != -1) {
        return iso_language_codes_js_data_js__WEBPACK_IMPORTED_MODULE_0__["default"][i][COLUMN_TO_LANG_INDEX['ISO 639-1']];
      }
    }
  }
  return null;
}

/**
 * Checks whether the current browser supports localStorage or
 * if the current context has access to it.
 * @return {boolean}
 */
function hasLocalStorage() {
  try {
    return !!window.localStorage;
  } catch (e) {
    // Will throw in sandboxed iframe
    // DOMException: Window.localStorage getter: Forbidden in a sandboxed document without the 'allow-same-origin' flag.
    return false;
  }
}

/***/ }),

/***/ "./node_modules/iso-language-codes/js/data.js":
/*!****************************************************!*\
  !*** ./node_modules/iso-language-codes/js/data.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = [['Serbian', 'српски језик', 'sr', 'srp', 'srp'], ['Romanian, Moldavian, Moldovan', 'Română', 'ro', 'ron', 'rum'], ['Sichuan Yi, Nuosu', 'ꆈꌠ꒿ Nuosuhxop', 'ii', 'iii', 'iii'], ['Tahitian', 'Reo Tahiti', 'ty', 'tah', 'tah'], ['Tagalog', 'Wikang Tagalog', 'tl', 'tgl', 'tgl'], ['Yiddish', 'ייִדיש', 'yi', 'yid', 'yid'], ['Akan', 'Akan', 'ak', 'aka', 'aka'], ['Malay', 'Bahasa Melayu, بهاس ملايو‎', 'ms', 'msa', 'may'], ['Arabic', 'العربية', 'ar', 'ara', 'ara'], ['Norwegian', 'Norsk', 'no', 'nor', 'nor'], ['Ojibwa', 'ᐊᓂᔑᓈᐯᒧᐎᓐ', 'oj', 'oji', 'oji'], ['Fulah', 'Fulfulde, Pulaar, Pular', 'ff', 'ful', 'ful'], ['Persian', 'فارسی', 'fa', 'fas', 'per'], ['Albanian', 'Shqip', 'sq', 'sqi', 'alb'], ['Aymara', 'aymar aru', 'ay', 'aym', 'aym'], ['Azerbaijani', 'azərbaycan dili', 'az', 'aze', 'aze'], ['Chinese', '中文 (Zhōngwén), 汉语, 漢語', 'zh', 'zho', 'chi'], ['Cree', 'ᓀᐦᐃᔭᐍᐏᐣ', 'cr', 'cre', 'cre'], ['Estonian', 'eesti, eesti keel', 'et', 'est', 'est'], ['Guaraní', 'Avañe\'ẽ', 'gn', 'grn', 'grn'], ['Inupiaq', 'Iñupiaq, Iñupiatun', 'ik', 'ipk', 'ipk'], ['Inuktitut', 'ᐃᓄᒃᑎᑐᑦ', 'iu', 'iku', 'iku'], ['Kanuri', 'Kanuri', 'kr', 'kau', 'kau'], ['Komi', 'коми кыв', 'kv', 'kom', 'kom'], ['Kongo', 'Kikongo', 'kg', 'kon', 'kon'], ['Kurdish', 'Kurdî, کوردی‎', 'ku', 'kur', 'kur'], ['Latvian', 'latviešu valoda', 'lv', 'lav', 'lav'], ['Malagasy', 'fiteny malagasy', 'mg', 'mlg', 'mlg'], ['Mongolian', 'Монгол хэл', 'mn', 'mon', 'mon'], ['Oromo', 'Afaan Oromoo', 'om', 'orm', 'orm'], ['Pashto, Pushto', 'پښتو', 'ps', 'pus', 'pus'], ['Quechua', 'Runa Simi, Kichwa', 'qu', 'que', 'que'], ['Sardinian', 'sardu', 'sc', 'srd', 'srd'], ['Swahili', 'Kiswahili', 'sw', 'swa', 'swa'], ['Uzbek', 'Oʻzbek, Ўзбек, أۇزبېك‎', 'uz', 'uzb', 'uzb'], ['Zhuang, Chuang', 'Saɯ cueŋƅ, Saw cuengh', 'za', 'zha', 'zha'], ['Bislama', 'Bislama', 'bi', 'bis', 'bis'], ['Norwegian Bokmål', 'Norsk Bokmål', 'nb', 'nob', 'nob'], ['Norwegian Nynorsk', 'Norsk Nynorsk', 'nn', 'nno', 'nno'], ['Indonesian', 'Bahasa Indonesia', 'id', 'ind', 'ind'], ['Twi', 'Twi', 'tw', 'twi', 'twi'], ['Esperanto', 'Esperanto', 'eo', 'epo', 'epo'], ['Interlingua', 'Interlingua', 'ia', 'ina', 'ina'], ['Interlingue', 'Originally called Occidental; then Interlingue after WWII', 'ie', 'ile', 'ile'], ['Ido', 'Ido', 'io', 'ido', 'ido'], ['Volapük', 'Volapük', 'vo', 'vol', 'vol'], ['Bihari languages', 'भोजपुरी', 'bh', 'bih', 'bih'], ['Hebrew (modern)', 'עברית', 'he', 'heb', 'heb'], ['Sanskrit', 'संस्कृतम्', 'sa', 'san', 'san'], ['Church Slavic, Church Slavonic, Old Church Slavonic, Old Slavonic, Old Bulgarian', 'ѩзыкъ словѣньскъ', 'cu', 'chu', 'chu'], ['Pali', 'पाऴि', 'pi', 'pli', 'pli'], ['Avestan', 'avesta', 'ae', 'ave', 'ave'], ['Latin', 'latine, lingua latina', 'la', 'lat', 'lat'], ['Armenian', 'Հայերեն', 'hy', 'hye', 'arm'], ['Swati', 'SiSwati', 'ss', 'ssw', 'ssw'], ['Tibetan', 'བོད་ཡིག', 'bo', 'bod', 'tib'], ['South Ndebele', 'isiNdebele', 'nr', 'nbl', 'nbl'], ['Slovene', 'Slovenski Jezik, Slovenščina', 'sl', 'slv', 'slv'], ['Oriya', 'ଓଡ଼ିଆ', 'or', 'ori', 'ori'], ['North Ndebele', 'isiNdebele', 'nd', 'nde', 'nde'], ['Nauru', 'Dorerin Naoero', 'na', 'nau', 'nau'], ['Maori', 'te reo Māori', 'mi', 'mri', 'mao'], ['Marathi', 'मराठी', 'mr', 'mar', 'mar'], ['Luba-Katanga', 'Kiluba', 'lu', 'lub', 'lub'], ['Rundi', 'Ikirundi', 'rn', 'run', 'run'], ['Central Khmer', 'ខ្មែរ, ខេមរភាសា, ភាសាខ្មែរ', 'km', 'khm', 'khm'], ['Western Frisian', 'Frysk', 'fy', 'fry', 'fry'], ['Bengali', 'বাংলা', 'bn', 'ben', 'ben'], ['Avaric', 'авар мацӀ, магӀарул мацӀ', 'av', 'ava', 'ava'], ['Abkhazian', 'аҧсуа бызшәа, аҧсшәа', 'ab', 'abk', 'abk'], ['Afar', 'Afaraf', 'aa', 'aar', 'aar'], ['Afrikaans', 'Afrikaans', 'af', 'afr', 'afr'], ['Amharic', 'አማርኛ', 'am', 'amh', 'amh'], ['Aragonese', 'aragonés', 'an', 'arg', 'arg'], ['Assamese', 'অসমীয়া', 'as', 'asm', 'asm'], ['Bambara', 'bamanankan', 'bm', 'bam', 'bam'], ['Bashkir', 'башҡорт теле', 'ba', 'bak', 'bak'], ['Basque', 'euskara, euskera', 'eu', 'eus', 'baq'], ['Belarusian', 'беларуская мова', 'be', 'bel', 'bel'], ['Bosnian', 'bosanski jezik', 'bs', 'bos', 'bos'], ['Breton', 'brezhoneg', 'br', 'bre', 'bre'], ['Bulgarian', 'български език', 'bg', 'bul', 'bul'], ['Burmese', 'ဗမာစာ', 'my', 'mya', 'bur'], ['Catalan, Valencian', 'català, valencià', 'ca', 'cat', 'cat'], ['Chamorro', 'Chamoru', 'ch', 'cha', 'cha'], ['Chechen', 'нохчийн мотт', 'ce', 'che', 'che'], ['Chichewa, Chewa, Nyanja', 'chiCheŵa, chinyanja', 'ny', 'nya', 'nya'], ['Chuvash', 'чӑваш чӗлхи', 'cv', 'chv', 'chv'], ['Cornish', 'Kernewek', 'kw', 'cor', 'cor'], ['Corsican', 'corsu, lingua corsa', 'co', 'cos', 'cos'], ['Croatian', 'hrvatski jezik', 'hr', 'hrv', 'hrv'], ['Czech', 'čeština, český jazyk', 'cs', 'ces', 'cze'], ['Danish', 'dansk', 'da', 'dan', 'dan'], ['Divehi, Dhivehi, Maldivian', 'ދިވެހި', 'dv', 'div', 'div'], ['Dutch, Flemish', 'Nederlands, Vlaams', 'nl', 'nld', 'dut'], ['Dzongkha', 'རྫོང་ཁ', 'dz', 'dzo', 'dzo'], ['English', 'English', 'en', 'eng', 'eng'], ['Ewe', 'Eʋegbe', 'ee', 'ewe', 'ewe'], ['Faroese', 'føroyskt', 'fo', 'fao', 'fao'], ['Fijian', 'vosa Vakaviti', 'fj', 'fij', 'fij'], ['Finnish', 'suomi, suomen kieli', 'fi', 'fin', 'fin'], ['French', 'français, langue française', 'fr', 'fra', 'fre'], ['Galician', 'Galego', 'gl', 'glg', 'glg'], ['Georgian', 'ქართული', 'ka', 'kat', 'geo'], ['German', 'Deutsch', 'de', 'deu', 'ger'], ['Greek (modern)', 'ελληνικά', 'el', 'ell', 'gre'], ['Gujarati', 'ગુજરાતી', 'gu', 'guj', 'guj'], ['Haitian, Haitian Creole', 'Kreyòl ayisyen', 'ht', 'hat', 'hat'], ['Hausa', '(Hausa) هَوُسَ', 'ha', 'hau', 'hau'], ['Herero', 'Otjiherero', 'hz', 'her', 'her'], ['Hindi', 'हिन्दी, हिंदी', 'hi', 'hin', 'hin'], ['Hiri Motu', 'Hiri Motu', 'ho', 'hmo', 'hmo'], ['Hungarian', 'magyar', 'hu', 'hun', 'hun'], ['Irish', 'Gaeilge', 'ga', 'gle', 'gle'], ['Igbo', 'Asụsụ Igbo', 'ig', 'ibo', 'ibo'], ['Icelandic', 'Íslenska', 'is', 'isl', 'ice'], ['Italian', 'Italiano', 'it', 'ita', 'ita'], ['Japanese', '日本語 (にほんご)', 'ja', 'jpn', 'jpn'], ['Javanese', 'ꦧꦱꦗꦮ, Basa Jawa', 'jv', 'jav', 'jav'], ['Kalaallisut, Greenlandic', 'kalaallisut, kalaallit oqaasii', 'kl', 'kal', 'kal'], ['Kannada', 'ಕನ್ನಡ', 'kn', 'kan', 'kan'], ['Kashmiri', 'कश्मीरी, كشميري‎', 'ks', 'kas', 'kas'], ['Kazakh', 'қазақ тілі', 'kk', 'kaz', 'kaz'], ['Kikuyu, Gikuyu', 'Gĩkũyũ', 'ki', 'kik', 'kik'], ['Kinyarwanda', 'Ikinyarwanda', 'rw', 'kin', 'kin'], ['Kirghiz, Kyrgyz', 'Кыргызча, Кыргыз тили', 'ky', 'kir', 'kir'], ['Korean', '한국어', 'ko', 'kor', 'kor'], ['Kuanyama, Kwanyama', 'Kuanyama', 'kj', 'kua', 'kua'], ['Luxembourgish, Letzeburgesch', 'Lëtzebuergesch', 'lb', 'ltz', 'ltz'], ['Ganda', 'Luganda', 'lg', 'lug', 'lug'], ['Limburgan, Limburger, Limburgish', 'Limburgs', 'li', 'lim', 'lim'], ['Lingala', 'Lingála', 'ln', 'lin', 'lin'], ['Lao', 'ພາສາລາວ', 'lo', 'lao', 'lao'], ['Lithuanian', 'lietuvių kalba', 'lt', 'lit', 'lit'], ['Manx', 'Gaelg, Gailck', 'gv', 'glv', 'glv'], ['Macedonian', 'македонски јазик', 'mk', 'mkd', 'mac'], ['Malayalam', 'മലയാളം', 'ml', 'mal', 'mal'], ['Maltese', 'Malti', 'mt', 'mlt', 'mlt'], ['Marshallese', 'Kajin M̧ajeļ', 'mh', 'mah', 'mah'], ['Navajo, Navaho', 'Diné bizaad', 'nv', 'nav', 'nav'], ['Nepali', 'नेपाली', 'ne', 'nep', 'nep'], ['Ndonga', 'Owambo', 'ng', 'ndo', 'ndo'], ['Occitan', 'occitan, lenga d\'òc', 'oc', 'oci', 'oci'], ['Ossetian, Ossetic', 'ирон æвзаг', 'os', 'oss', 'oss'], ['Panjabi, Punjabi', 'ਪੰਜਾਬੀ', 'pa', 'pan', 'pan'], ['Polish', 'język polski, polszczyzna', 'pl', 'pol', 'pol'], ['Portuguese', 'Português', 'pt', 'por', 'por'], ['Romansh', 'Rumantsch Grischun', 'rm', 'roh', 'roh'], ['Russian', 'русский', 'ru', 'rus', 'rus'], ['Sindhi', 'सिन्धी, سنڌي، سندھی‎', 'sd', 'snd', 'snd'], ['Northern Sami', 'Davvisámegiella', 'se', 'sme', 'sme'], ['Samoan', 'gagana fa\'a Samoa', 'sm', 'smo', 'smo'], ['Sango', 'yângâ tî sängö', 'sg', 'sag', 'sag'], ['Gaelic, Scottish Gaelic', 'Gàidhlig', 'gd', 'gla', 'gla'], ['Shona', 'chiShona', 'sn', 'sna', 'sna'], ['Sinhala, Sinhalese', 'සිංහල', 'si', 'sin', 'sin'], ['Slovak', 'Slovenčina, Slovenský Jazyk', 'sk', 'slk', 'slo'], ['Somali', 'Soomaaliga, af Soomaali', 'so', 'som', 'som'], ['Southern Sotho', 'Sesotho', 'st', 'sot', 'sot'], ['Spanish, Castilian', 'Español', 'es', 'spa', 'spa'], ['Sundanese', 'Basa Sunda', 'su', 'sun', 'sun'], ['Swedish', 'Svenska', 'sv', 'swe', 'swe'], ['Tamil', 'தமிழ்', 'ta', 'tam', 'tam'], ['Telugu', 'తెలుగు', 'te', 'tel', 'tel'], ['Tajik', 'тоҷикӣ, toçikī, تاجیکی‎', 'tg', 'tgk', 'tgk'], ['Thai', 'ไทย', 'th', 'tha', 'tha'], ['Tigrinya', 'ትግርኛ', 'ti', 'tir', 'tir'], ['Turkmen', 'Türkmen, Түркмен', 'tk', 'tuk', 'tuk'], ['Tswana', 'Setswana', 'tn', 'tsn', 'tsn'], ['Tongan (Tonga Islands)', 'Faka Tonga', 'to', 'ton', 'ton'], ['Turkish', 'Türkçe', 'tr', 'tur', 'tur'], ['Tsonga', 'Xitsonga', 'ts', 'tso', 'tso'], ['Tatar', 'татар теле, tatar tele', 'tt', 'tat', 'tat'], ['Uighur, Uyghur', 'ئۇيغۇرچە‎, Uyghurche', 'ug', 'uig', 'uig'], ['Ukrainian', 'Українська', 'uk', 'ukr', 'ukr'], ['Urdu', 'اردو', 'ur', 'urd', 'urd'], ['Venda', 'Tshivenḓa', 've', 'ven', 'ven'], ['Vietnamese', 'Tiếng Việt', 'vi', 'vie', 'vie'], ['Walloon', 'Walon', 'wa', 'wln', 'wln'], ['Welsh', 'Cymraeg', 'cy', 'cym', 'wel'], ['Wolof', 'Wollof', 'wo', 'wol', 'wol'], ['Xhosa', 'isiXhosa', 'xh', 'xho', 'xho'], ['Yoruba', 'Yorùbá', 'yo', 'yor', 'yor'], ['Zulu', 'isiZulu', 'zu', 'zul', 'zul']];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/jquery.browser/dist/jquery.browser.js":
/*!************************************************************!*\
  !*** ./node_modules/jquery.browser/dist/jquery.browser.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery Browser Plugin 0.1.0
 * https://github.com/gabceb/jquery-browser-plugin
 *
 * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Modifications Copyright 2015 Gabriel Cebrian
 * https://github.com/gabceb
 *
 * Released under the MIT license
 *
 * Date: 05-07-2015
 */
/*global window: false */

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_RESULT__ = (function ($) {
      return factory($);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(function(jQuery) {
  "use strict";

  function uaMatch( ua ) {
    // If an UA is not provided, default to the current browser UA.
    if ( ua === undefined ) {
      ua = window.navigator.userAgent;
    }
    ua = ua.toLowerCase();

    var match = /(edge)\/([\w.]+)/.exec( ua ) ||
        /(opr)[\/]([\w.]+)/.exec( ua ) ||
        /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
        /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
        /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
        /(msie) ([\w.]+)/.exec( ua ) ||
        ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
        [];

    var platform_match = /(ipad)/.exec( ua ) ||
        /(ipod)/.exec( ua ) ||
        /(windows phone)/.exec( ua ) ||
        /(iphone)/.exec( ua ) ||
        /(kindle)/.exec( ua ) ||
        /(silk)/.exec( ua ) ||
        /(android)/.exec( ua ) ||
        /(win)/.exec( ua ) ||
        /(mac)/.exec( ua ) ||
        /(linux)/.exec( ua ) ||
        /(cros)/.exec( ua ) ||
        /(playbook)/.exec( ua ) ||
        /(bb)/.exec( ua ) ||
        /(blackberry)/.exec( ua ) ||
        [];

    var browser = {},
        matched = {
          browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
          version: match[ 2 ] || match[ 4 ] || "0",
          versionNumber: match[ 4 ] || match[ 2 ] || "0",
          platform: platform_match[ 0 ] || ""
        };

    if ( matched.browser ) {
      browser[ matched.browser ] = true;
      browser.version = matched.version;
      browser.versionNumber = parseInt(matched.versionNumber, 10);
    }

    if ( matched.platform ) {
      browser[ matched.platform ] = true;
    }

    // These are all considered mobile platforms, meaning they run a mobile browser
    if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
      browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
      browser.mobile = true;
    }

    // These are all considered desktop platforms, meaning they run a desktop browser
    if ( browser.cros || browser.mac || browser.linux || browser.win ) {
      browser.desktop = true;
    }

    // Chrome, Opera 15+ and Safari are webkit based browsers
    if ( browser.chrome || browser.opr || browser.safari ) {
      browser.webkit = true;
    }

    // IE11 has a new token so we will assign it msie to avoid breaking changes
    if ( browser.rv || browser.iemobile) {
      var ie = "msie";

      matched.browser = ie;
      browser[ie] = true;
    }

    // Edge is officially known as Microsoft Edge, so rewrite the key to match
    if ( browser.edge ) {
      delete browser.edge;
      var msedge = "msedge";

      matched.browser = msedge;
      browser[msedge] = true;
    }

    // Blackberry browsers are marked as Safari on BlackBerry
    if ( browser.safari && browser.blackberry ) {
      var blackberry = "blackberry";

      matched.browser = blackberry;
      browser[blackberry] = true;
    }

    // Playbook browsers are marked as Safari on Playbook
    if ( browser.safari && browser.playbook ) {
      var playbook = "playbook";

      matched.browser = playbook;
      browser[playbook] = true;
    }

    // BB10 is a newer OS version of BlackBerry
    if ( browser.bb ) {
      var bb = "blackberry";

      matched.browser = bb;
      browser[bb] = true;
    }

    // Opera 15+ are identified as opr
    if ( browser.opr ) {
      var opera = "opera";

      matched.browser = opera;
      browser[opera] = true;
    }

    // Stock Android browsers are marked as Safari on Android.
    if ( browser.safari && browser.android ) {
      var android = "android";

      matched.browser = android;
      browser[android] = true;
    }

    // Kindle browsers are marked as Safari on Kindle
    if ( browser.safari && browser.kindle ) {
      var kindle = "kindle";

      matched.browser = kindle;
      browser[kindle] = true;
    }

     // Kindle Silk browsers are marked as Safari on Kindle
    if ( browser.safari && browser.silk ) {
      var silk = "silk";

      matched.browser = silk;
      browser[silk] = true;
    }

    // Assign the name and platform variable
    browser.name = matched.browser;
    browser.platform = matched.platform;
    return browser;
  }

  // Run the matching process, also assign the function to the returned object
  // for manual, jQuery-free use if desired
  window.jQBrowser = uaMatch( window.navigator.userAgent );
  window.jQBrowser.uaMatch = uaMatch;

  // Only assign to jQuery.browser if jQuery is loaded
  if ( jQuery ) {
    jQuery.browser = window.jQBrowser;
  }

  return window.jQBrowser;
}));


/***/ }),

/***/ "./node_modules/soundmanager2/script/soundmanager2.js":
/*!************************************************************!*\
  !*** ./node_modules/soundmanager2/script/soundmanager2.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_RESULT__;/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20170601
 */

/**
 * About this file
 * -------------------------------------------------------------------------------------
 * This is the fully-commented source version of the SoundManager 2 API,
 * recommended for use during development and testing.
 *
 * See soundmanager2-nodebug-jsmin.js for an optimized build (~11KB with gzip.)
 * http://schillmania.com/projects/soundmanager2/doc/getstarted/#basic-inclusion
 * Alternately, serve this file with gzip for 75% compression savings (~30KB over HTTP.)
 *
 * You may notice <d> and </d> comments in this source; these are delimiters for
 * debug blocks which are removed in the -nodebug builds, further optimizing code size.
 *
 * Also, as you may note: Whoa, reliable cross-platform/device audio support is hard! ;)
 */

(function SM2(window, _undefined) {

/* global Audio, document, window, navigator, define, module, SM2_DEFER, opera, setTimeout, setInterval, clearTimeout, sm2Debugger */

'use strict';

if (!window || !window.document) {

  // Don't cross the [environment] streams. SM2 expects to be running in a browser, not under node.js etc.
  // Additionally, if a browser somehow manages to fail this test, as Egon said: "It would be bad."

  throw new Error('SoundManager requires a browser with window and document objects.');

}

var soundManager = null;

/**
 * The SoundManager constructor.
 *
 * @constructor
 * @param {string} smURL Optional: Path to SWF files
 * @param {string} smID Optional: The ID to use for the SWF container element
 * @this {SoundManager}
 * @return {SoundManager} The new SoundManager instance
 */

function SoundManager(smURL, smID) {

  /**
   * soundManager configuration options list
   * defines top-level configuration properties to be applied to the soundManager instance (eg. soundManager.flashVersion)
   * to set these properties, use the setup() method - eg., soundManager.setup({url: '/swf/', flashVersion: 9})
   */

  this.setupOptions = {

    url: (smURL || null),             // path (directory) where SoundManager 2 SWFs exist, eg., /path/to/swfs/
    flashVersion: 8,                  // flash build to use (8 or 9.) Some API features require 9.
    debugMode: true,                  // enable debugging output (console.log() with HTML fallback)
    debugFlash: false,                // enable debugging output inside SWF, troubleshoot Flash/browser issues
    useConsole: true,                 // use console.log() if available (otherwise, writes to #soundmanager-debug element)
    consoleOnly: true,                // if console is being used, do not create/write to #soundmanager-debug
    waitForWindowLoad: false,         // force SM2 to wait for window.onload() before trying to call soundManager.onload()
    bgColor: '#ffffff',               // SWF background color. N/A when wmode = 'transparent'
    useHighPerformance: false,        // position:fixed flash movie can help increase js/flash speed, minimize lag
    flashPollingInterval: null,       // msec affecting whileplaying/loading callback frequency. If null, default of 50 msec is used.
    html5PollingInterval: null,       // msec affecting whileplaying() for HTML5 audio, excluding mobile devices. If null, native HTML5 update events are used.
    flashLoadTimeout: 1000,           // msec to wait for flash movie to load before failing (0 = infinity)
    wmode: null,                      // flash rendering mode - null, 'transparent', or 'opaque' (last two allow z-index to work)
    allowScriptAccess: 'always',      // for scripting the SWF (object/embed property), 'always' or 'sameDomain'
    useFlashBlock: false,             // *requires flashblock.css, see demos* - allow recovery from flash blockers. Wait indefinitely and apply timeout CSS to SWF, if applicable.
    useHTML5Audio: true,              // use HTML5 Audio() where API is supported (most Safari, Chrome versions), Firefox (MP3/MP4 support varies.) Ideally, transparent vs. Flash API where possible.
    forceUseGlobalHTML5Audio: false,  // if true, a single Audio() object is used for all sounds - and only one can play at a time.
    ignoreMobileRestrictions: false,  // if true, SM2 will not apply global HTML5 audio rules to mobile UAs. iOS > 7 and WebViews may allow multiple Audio() instances.
    html5Test: /^(probably|maybe)$/i, // HTML5 Audio() format support test. Use /^probably$/i; if you want to be more conservative.
    preferFlash: false,               // overrides useHTML5audio, will use Flash for MP3/MP4/AAC if present. Potential option if HTML5 playback with these formats is quirky.
    noSWFCache: false,                // if true, appends ?ts={date} to break aggressive SWF caching.
    idPrefix: 'sound'                 // if an id is not provided to createSound(), this prefix is used for generated IDs - 'sound0', 'sound1' etc.

  };

  this.defaultOptions = {

    /**
     * the default configuration for sound objects made with createSound() and related methods
     * eg., volume, auto-load behaviour and so forth
     */

    autoLoad: false,        // enable automatic loading (otherwise .load() will be called on demand with .play(), the latter being nicer on bandwidth - if you want to .load yourself, you also can)
    autoPlay: false,        // enable playing of file as soon as possible (much faster if "stream" is true)
    from: null,             // position to start playback within a sound (msec), default = beginning
    loops: 1,               // how many times to repeat the sound (position will wrap around to 0, setPosition() will break out of loop when >0)
    onid3: null,            // callback function for "ID3 data is added/available"
    onerror: null,          // callback function for "load failed" (or, playback/network/decode error under HTML5.)
    onload: null,           // callback function for "load finished"
    whileloading: null,     // callback function for "download progress update" (X of Y bytes received)
    onplay: null,           // callback for "play" start
    onpause: null,          // callback for "pause"
    onresume: null,         // callback for "resume" (pause toggle)
    whileplaying: null,     // callback during play (position update)
    onposition: null,       // object containing times and function callbacks for positions of interest
    onstop: null,           // callback for "user stop"
    onfinish: null,         // callback function for "sound finished playing"
    multiShot: true,        // let sounds "restart" or layer on top of each other when played multiple times, rather than one-shot/one at a time
    multiShotEvents: false, // fire multiple sound events (currently onfinish() only) when multiShot is enabled
    position: null,         // offset (milliseconds) to seek to within loaded sound data.
    pan: 0,                 // "pan" settings, left-to-right, -100 to 100
    playbackRate: 1,        // rate at which to play the sound (HTML5-only)
    stream: true,           // allows playing before entire file has loaded (recommended)
    to: null,               // position to end playback within a sound (msec), default = end
    type: null,             // MIME-like hint for file pattern / canPlay() tests, eg. audio/mp3
    usePolicyFile: false,   // enable crossdomain.xml request for audio on remote domains (for ID3/waveform access)
    volume: 100             // self-explanatory. 0-100, the latter being the max.

  };

  this.flash9Options = {

    /**
     * flash 9-only options,
     * merged into defaultOptions if flash 9 is being used
     */

    onfailure: null,        // callback function for when playing fails (Flash 9, MovieStar + RTMP-only)
    isMovieStar: null,      // "MovieStar" MPEG4 audio mode. Null (default) = auto detect MP4, AAC etc. based on URL. true = force on, ignore URL
    usePeakData: false,     // enable left/right channel peak (level) data
    useWaveformData: false, // enable sound spectrum (raw waveform data) - NOTE: May increase CPU load.
    useEQData: false,       // enable sound EQ (frequency spectrum data) - NOTE: May increase CPU load.
    onbufferchange: null,   // callback for "isBuffering" property change
    ondataerror: null       // callback for waveform/eq data access error (flash playing audio in other tabs/domains)

  };

  this.movieStarOptions = {

    /**
     * flash 9.0r115+ MPEG4 audio options,
     * merged into defaultOptions if flash 9+movieStar mode is enabled
     */

    bufferTime: 3,          // seconds of data to buffer before playback begins (null = flash default of 0.1 seconds - if AAC playback is gappy, try increasing.)
    serverURL: null,        // rtmp: FMS or FMIS server to connect to, required when requesting media via RTMP or one of its variants
    onconnect: null,        // rtmp: callback for connection to flash media server
    duration: null          // rtmp: song duration (msec)

  };

  this.audioFormats = {

    /**
     * determines HTML5 support + flash requirements.
     * if no support (via flash and/or HTML5) for a "required" format, SM2 will fail to start.
     * flash fallback is used for MP3 or MP4 if HTML5 can't play it (or if preferFlash = true)
     */

    mp3: {
      type: ['audio/mpeg; codecs="mp3"', 'audio/mpeg', 'audio/mp3', 'audio/MPA', 'audio/mpa-robust'],
      required: true
    },

    mp4: {
      related: ['aac', 'm4a', 'm4b'], // additional formats under the MP4 container
      type: ['audio/mp4; codecs="mp4a.40.2"', 'audio/aac', 'audio/x-m4a', 'audio/MP4A-LATM', 'audio/mpeg4-generic'],
      required: false
    },

    ogg: {
      type: ['audio/ogg; codecs=vorbis'],
      required: false
    },

    opus: {
      type: ['audio/ogg; codecs=opus', 'audio/opus'],
      required: false
    },

    wav: {
      type: ['audio/wav; codecs="1"', 'audio/wav', 'audio/wave', 'audio/x-wav'],
      required: false
    },

    flac: {
      type: ['audio/flac'],
      required: false
    }

  };

  // HTML attributes (id + class names) for the SWF container

  this.movieID = 'sm2-container';
  this.id = (smID || 'sm2movie');

  this.debugID = 'soundmanager-debug';
  this.debugURLParam = /([#?&])debug=1/i;

  // dynamic attributes

  this.versionNumber = 'V2.97a.20170601';
  this.version = null;
  this.movieURL = null;
  this.altURL = null;
  this.swfLoaded = false;
  this.enabled = false;
  this.oMC = null;
  this.sounds = {};
  this.soundIDs = [];
  this.muted = false;
  this.didFlashBlock = false;
  this.filePattern = null;

  this.filePatterns = {
    flash8: /\.mp3(\?.*)?$/i,
    flash9: /\.mp3(\?.*)?$/i
  };

  // support indicators, set at init

  this.features = {
    buffering: false,
    peakData: false,
    waveformData: false,
    eqData: false,
    movieStar: false
  };

  // flash sandbox info, used primarily in troubleshooting

  this.sandbox = {
    // <d>
    type: null,
    types: {
      remote: 'remote (domain-based) rules',
      localWithFile: 'local with file access (no internet access)',
      localWithNetwork: 'local with network (internet access only, no local access)',
      localTrusted: 'local, trusted (local+internet access)'
    },
    description: null,
    noRemote: null,
    noLocal: null
    // </d>
  };

  /**
   * format support (html5/flash)
   * stores canPlayType() results based on audioFormats.
   * eg. { mp3: boolean, mp4: boolean }
   * treat as read-only.
   */

  this.html5 = {
    usingFlash: null // set if/when flash fallback is needed
  };

  // file type support hash
  this.flash = {};

  // determined at init time
  this.html5Only = false;

  // used for special cases (eg. iPad/iPhone/palm OS?)
  this.ignoreFlash = false;

  /**
   * a few private internals (OK, a lot. :D)
   */

  var SMSound,
  sm2 = this, globalHTML5Audio = null, flash = null, sm = 'soundManager', smc = sm + ': ', h5 = 'HTML5::', id, ua = navigator.userAgent, wl = window.location.href.toString(), doc = document, doNothing, setProperties, init, fV, on_queue = [], debugOpen = true, debugTS, didAppend = false, appendSuccess = false, didInit = false, disabled = false, windowLoaded = false, _wDS, wdCount = 0, initComplete, mixin, assign, extraOptions, addOnEvent, processOnEvents, initUserOnload, delayWaitForEI, waitForEI, rebootIntoHTML5, setVersionInfo, handleFocus, strings, initMovie, domContentLoaded, winOnLoad, didDCLoaded, getDocument, createMovie, catchError, setPolling, initDebug, debugLevels = ['log', 'info', 'warn', 'error'], defaultFlashVersion = 8, disableObject, failSafely, normalizeMovieURL, oRemoved = null, oRemovedHTML = null, str, flashBlockHandler, getSWFCSS, swfCSS, toggleDebug, loopFix, policyFix, complain, idCheck, waitingForEI = false, initPending = false, startTimer, stopTimer, timerExecute, h5TimerCount = 0, h5IntervalTimer = null, parseURL, messages = [],
  canIgnoreFlash, needsFlash = null, featureCheck, html5OK, html5CanPlay, html5ErrorCodes, html5Ext, html5Unload, domContentLoadedIE, testHTML5, event, slice = Array.prototype.slice, useGlobalHTML5Audio = false, lastGlobalHTML5URL, hasFlash, detectFlash, badSafariFix, html5_events, showSupport, flushMessages, wrapCallback, idCounter = 0, didSetup, msecScale = 1000,
  is_iDevice = ua.match(/(ipad|iphone|ipod)/i), isAndroid = ua.match(/android/i), isIE = ua.match(/msie|trident/i),
  isWebkit = ua.match(/webkit/i),
  isSafari = (ua.match(/safari/i) && !ua.match(/chrome/i)),
  isOpera = (ua.match(/opera/i)),
  mobileHTML5 = (ua.match(/(mobile|pre\/|xoom)/i) || is_iDevice || isAndroid),
  isBadSafari = (!wl.match(/usehtml5audio/i) && !wl.match(/sm2-ignorebadua/i) && isSafari && !ua.match(/silk/i) && ua.match(/OS\sX\s10_6_([3-7])/i)), // Safari 4 and 5 (excluding Kindle Fire, "Silk") occasionally fail to load/play HTML5 audio on Snow Leopard 10.6.3 through 10.6.7 due to bug(s) in QuickTime X and/or other underlying frameworks. :/ Confirmed bug. https://bugs.webkit.org/show_bug.cgi?id=32159
  hasConsole = (window.console !== _undefined && console.log !== _undefined),
  isFocused = (doc.hasFocus !== _undefined ? doc.hasFocus() : null),
  tryInitOnFocus = (isSafari && (doc.hasFocus === _undefined || !doc.hasFocus())),
  okToDisable = !tryInitOnFocus,
  flashMIME = /(mp3|mp4|mpa|m4a|m4b)/i,
  emptyURL = 'about:blank', // safe URL to unload, or load nothing from (flash 8 + most HTML5 UAs)
  emptyWAV = 'data:audio/wave;base64,/UklGRiYAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQIAAAD//w==', // tiny WAV for HTML5 unloading
  overHTTP = (doc.location ? doc.location.protocol.match(/http/i) : null),
  http = (!overHTTP ? '//' : ''),
  // mp3, mp4, aac etc.
  netStreamMimeTypes = /^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4|m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
  // Flash v9.0r115+ "moviestar" formats
  netStreamTypes = ['mpeg4', 'aac', 'flv', 'mov', 'mp4', 'm4v', 'f4v', 'm4a', 'm4b', 'mp4v', '3gp', '3g2'],
  netStreamPattern = new RegExp('\\.(' + netStreamTypes.join('|') + ')(\\?.*)?$', 'i');

  this.mimePattern = /^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i; // default mp3 set

  // use altURL if not "online"
  this.useAltURL = !overHTTP;

  swfCSS = {
    swfBox: 'sm2-object-box',
    swfDefault: 'movieContainer',
    swfError: 'swf_error', // SWF loaded, but SM2 couldn't start (other error)
    swfTimedout: 'swf_timedout',
    swfLoaded: 'swf_loaded',
    swfUnblocked: 'swf_unblocked', // or loaded OK
    sm2Debug: 'sm2_debug',
    highPerf: 'high_performance',
    flashDebug: 'flash_debug'
  };

  /**
   * HTML5 error codes, per W3C
   * Error code 1, MEDIA_ERR_ABORTED: Client aborted download at user's request.
   * Error code 2, MEDIA_ERR_NETWORK: A network error of some description caused the user agent to stop fetching the media resource, after the resource was established to be usable.
   * Error code 3, MEDIA_ERR_DECODE: An error of some description occurred while decoding the media resource, after the resource was established to be usable.
   * Error code 4, MEDIA_ERR_SRC_NOT_SUPPORTED: Media (audio file) not supported ("not usable.")
   * Reference: https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
   */
  html5ErrorCodes = [
    null,
    'MEDIA_ERR_ABORTED',
    'MEDIA_ERR_NETWORK',
    'MEDIA_ERR_DECODE',
    'MEDIA_ERR_SRC_NOT_SUPPORTED'
  ];

  /**
   * basic HTML5 Audio() support test
   * try...catch because of IE 9 "not implemented" nonsense
   * https://github.com/Modernizr/Modernizr/issues/224
   */

  this.hasHTML5 = (function() {
    try {
      // new Audio(null) for stupid Opera 9.64 case, which throws not_enough_arguments exception otherwise.
      return (Audio !== _undefined && (isOpera && opera !== _undefined && opera.version() < 10 ? new Audio(null) : new Audio()).canPlayType !== _undefined);
    } catch(e) {
      return false;
    }
  }());

  /**
   * Public SoundManager API
   * -----------------------
   */

  /**
   * Configures top-level soundManager properties.
   *
   * @param {object} options Option parameters, eg. { flashVersion: 9, url: '/path/to/swfs/' }
   * onready and ontimeout are also accepted parameters. call soundManager.setup() to see the full list.
   */

  this.setup = function(options) {

    var noURL = (!sm2.url);

    // warn if flash options have already been applied

    if (options !== _undefined && didInit && needsFlash && sm2.ok() && (options.flashVersion !== _undefined || options.url !== _undefined || options.html5Test !== _undefined)) {
      complain(str('setupLate'));
    }

    // TODO: defer: true?

    assign(options);

    if (!useGlobalHTML5Audio) {

      if (mobileHTML5) {

        // force the singleton HTML5 pattern on mobile, by default.
        if (!sm2.setupOptions.ignoreMobileRestrictions || sm2.setupOptions.forceUseGlobalHTML5Audio) {
          messages.push(strings.globalHTML5);
          useGlobalHTML5Audio = true;
        }

      } else if (sm2.setupOptions.forceUseGlobalHTML5Audio) {

        // only apply singleton HTML5 on desktop if forced.
        messages.push(strings.globalHTML5);
        useGlobalHTML5Audio = true;

      }

    }

    if (!didSetup && mobileHTML5) {

      if (sm2.setupOptions.ignoreMobileRestrictions) {

        messages.push(strings.ignoreMobile);

      } else {

        // prefer HTML5 for mobile + tablet-like devices, probably more reliable vs. flash at this point.

        // <d>
        if (!sm2.setupOptions.useHTML5Audio || sm2.setupOptions.preferFlash) {
          // notify that defaults are being changed.
          sm2._wD(strings.mobileUA);
        }
        // </d>

        sm2.setupOptions.useHTML5Audio = true;
        sm2.setupOptions.preferFlash = false;

        if (is_iDevice) {

          // no flash here.
          sm2.ignoreFlash = true;

        } else if ((isAndroid && !ua.match(/android\s2\.3/i)) || !isAndroid) {

          /**
           * Android devices tend to work better with a single audio instance, specifically for chained playback of sounds in sequence.
           * Common use case: exiting sound onfinish() -> createSound() -> play()
           * Presuming similar restrictions for other mobile, non-Android, non-iOS devices.
           */

          // <d>
          sm2._wD(strings.globalHTML5);
          // </d>

          useGlobalHTML5Audio = true;

        }

      }

    }

    // special case 1: "Late setup". SM2 loaded normally, but user didn't assign flash URL eg., setup({url:...}) before SM2 init. Treat as delayed init.

    if (options) {

      if (noURL && didDCLoaded && options.url !== _undefined) {
        sm2.beginDelayedInit();
      }

      // special case 2: If lazy-loading SM2 (DOMContentLoaded has already happened) and user calls setup() with url: parameter, try to init ASAP.

      if (!didDCLoaded && options.url !== _undefined && doc.readyState === 'complete') {
        setTimeout(domContentLoaded, 1);
      }

    }

    didSetup = true;

    return sm2;

  };

  this.ok = function() {

    return (needsFlash ? (didInit && !disabled) : (sm2.useHTML5Audio && sm2.hasHTML5));

  };

  this.supported = this.ok; // legacy

  this.getMovie = function(movie_id) {

    // safety net: some old browsers differ on SWF references, possibly related to ExternalInterface / flash version
    return id(movie_id) || doc[movie_id] || window[movie_id];

  };

  /**
   * Creates a SMSound sound object instance. Can also be overloaded, e.g., createSound('mySound', '/some.mp3');
   *
   * @param {object} oOptions Sound options (at minimum, url parameter is required.)
   * @return {object} SMSound The new SMSound object.
   */

  this.createSound = function(oOptions, _url) {

    var cs, cs_string, options, oSound = null;

    // <d>
    cs = sm + '.createSound(): ';
    cs_string = cs + str(!didInit ? 'notReady' : 'notOK');
    // </d>

    if (!didInit || !sm2.ok()) {
      complain(cs_string);
      return false;
    }

    if (_url !== _undefined) {
      // function overloading in JS! :) ... assume simple createSound(id, url) use case.
      oOptions = {
        id: oOptions,
        url: _url
      };
    }

    // inherit from defaultOptions
    options = mixin(oOptions);

    options.url = parseURL(options.url);

    // generate an id, if needed.
    if (options.id === _undefined) {
      options.id = sm2.setupOptions.idPrefix + (idCounter++);
    }

    // <d>
    if (options.id.toString().charAt(0).match(/^[0-9]$/)) {
      sm2._wD(cs + str('badID', options.id), 2);
    }

    sm2._wD(cs + options.id + (options.url ? ' (' + options.url + ')' : ''), 1);
    // </d>

    if (idCheck(options.id, true)) {
      sm2._wD(cs + options.id + ' exists', 1);
      return sm2.sounds[options.id];
    }

    function make() {

      options = loopFix(options);
      sm2.sounds[options.id] = new SMSound(options);
      sm2.soundIDs.push(options.id);
      return sm2.sounds[options.id];

    }

    if (html5OK(options)) {

      oSound = make();
      // <d>
      if (!sm2.html5Only) {
        sm2._wD(options.id + ': Using HTML5');
      }
      // </d>
      oSound._setup_html5(options);

    } else {

      if (sm2.html5Only) {
        sm2._wD(options.id + ': No HTML5 support for this sound, and no Flash. Exiting.');
        return make();
      }

      // TODO: Move HTML5/flash checks into generic URL parsing/handling function.

      if (sm2.html5.usingFlash && options.url && options.url.match(/data:/i)) {
        // data: URIs not supported by Flash, either.
        sm2._wD(options.id + ': data: URIs not supported via Flash. Exiting.');
        return make();
      }

      if (fV > 8) {
        if (options.isMovieStar === null) {
          // attempt to detect MPEG-4 formats
          options.isMovieStar = !!(options.serverURL || (options.type ? options.type.match(netStreamMimeTypes) : false) || (options.url && options.url.match(netStreamPattern)));
        }
        // <d>
        if (options.isMovieStar) {
          sm2._wD(cs + 'using MovieStar handling');
          if (options.loops > 1) {
            _wDS('noNSLoop');
          }
        }
        // </d>
      }

      options = policyFix(options, cs);
      oSound = make();

      if (fV === 8) {
        flash._createSound(options.id, options.loops || 1, options.usePolicyFile);
      } else {
        flash._createSound(options.id, options.url, options.usePeakData, options.useWaveformData, options.useEQData, options.isMovieStar, (options.isMovieStar ? options.bufferTime : false), options.loops || 1, options.serverURL, options.duration || null, options.autoPlay, true, options.autoLoad, options.usePolicyFile);
        if (!options.serverURL) {
          // We are connected immediately
          oSound.connected = true;
          if (options.onconnect) {
            options.onconnect.apply(oSound);
          }
        }
      }

      if (!options.serverURL && (options.autoLoad || options.autoPlay)) {
        // call load for non-rtmp streams
        oSound.load(options);
      }

    }

    // rtmp will play in onconnect
    if (!options.serverURL && options.autoPlay) {
      oSound.play();
    }

    return oSound;

  };

  /**
   * Destroys a SMSound sound object instance.
   *
   * @param {string} sID The ID of the sound to destroy
   */

  this.destroySound = function(sID, _bFromSound) {

    // explicitly destroy a sound before normal page unload, etc.

    if (!idCheck(sID)) return false;

    var oS = sm2.sounds[sID], i;

    oS.stop();

    // Disable all callbacks after stop(), when the sound is being destroyed
    oS._iO = {};

    oS.unload();

    for (i = 0; i < sm2.soundIDs.length; i++) {
      if (sm2.soundIDs[i] === sID) {
        sm2.soundIDs.splice(i, 1);
        break;
      }
    }

    if (!_bFromSound) {
      // ignore if being called from SMSound instance
      oS.destruct(true);
    }

    oS = null;
    delete sm2.sounds[sID];

    return true;

  };

  /**
   * Calls the load() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {object} oOptions Optional: Sound options
   */

  this.load = function(sID, oOptions) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].load(oOptions);

  };

  /**
   * Calls the unload() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   */

  this.unload = function(sID) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].unload();

  };

  /**
   * Calls the onPosition() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nPosition The position to watch for
   * @param {function} oMethod The relevant callback to fire
   * @param {object} oScope Optional: The scope to apply the callback to
   * @return {SMSound} The SMSound object
   */

  this.onPosition = function(sID, nPosition, oMethod, oScope) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].onposition(nPosition, oMethod, oScope);

  };

  // legacy/backwards-compability: lower-case method name
  this.onposition = this.onPosition;

  /**
   * Calls the clearOnPosition() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nPosition The position to watch for
   * @param {function} oMethod Optional: The relevant callback to fire
   * @return {SMSound} The SMSound object
   */

  this.clearOnPosition = function(sID, nPosition, oMethod) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].clearOnPosition(nPosition, oMethod);

  };

  /**
   * Calls the play() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {object} oOptions Optional: Sound options
   * @return {SMSound} The SMSound object
   */

  this.play = function(sID, oOptions) {

    var result = null,
        // legacy function-overloading use case: play('mySound', '/path/to/some.mp3');
        overloaded = (oOptions && !(oOptions instanceof Object));

    if (!didInit || !sm2.ok()) {
      complain(sm + '.play(): ' + str(!didInit ? 'notReady' : 'notOK'));
      return false;
    }

    if (!idCheck(sID, overloaded)) {

      // no sound found for the given ID. Bail.
      if (!overloaded) return false;

      if (overloaded) {
        oOptions = {
          url: oOptions
        };
      }

      if (oOptions && oOptions.url) {
        // overloading use case, create+play: .play('someID', {url:'/path/to.mp3'});
        sm2._wD(sm + '.play(): Attempting to create "' + sID + '"', 1);
        oOptions.id = sID;
        result = sm2.createSound(oOptions).play();
      }

    } else if (overloaded) {

      // existing sound object case
      oOptions = {
        url: oOptions
      };

    }

    if (result === null) {
      // default case
      result = sm2.sounds[sID].play(oOptions);
    }

    return result;

  };

  // just for convenience
  this.start = this.play;

  /**
   * Calls the setPlaybackRate() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.setPlaybackRate = function(sID, rate, allowOverride) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].setPlaybackRate(rate, allowOverride);

  };

  /**
   * Calls the setPosition() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nMsecOffset Position (milliseconds)
   * @return {SMSound} The SMSound object
   */

  this.setPosition = function(sID, nMsecOffset) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].setPosition(nMsecOffset);

  };

  /**
   * Calls the stop() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.stop = function(sID) {

    if (!idCheck(sID)) return false;

    sm2._wD(sm + '.stop(' + sID + ')', 1);

    return sm2.sounds[sID].stop();

  };

  /**
   * Stops all currently-playing sounds.
   */

  this.stopAll = function() {

    var oSound;
    sm2._wD(sm + '.stopAll()', 1);

    for (oSound in sm2.sounds) {
      if (sm2.sounds.hasOwnProperty(oSound)) {
        // apply only to sound objects
        sm2.sounds[oSound].stop();
      }
    }

  };

  /**
   * Calls the pause() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.pause = function(sID) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].pause();

  };

  /**
   * Pauses all currently-playing sounds.
   */

  this.pauseAll = function() {

    var i;
    for (i = sm2.soundIDs.length - 1; i >= 0; i--) {
      sm2.sounds[sm2.soundIDs[i]].pause();
    }

  };

  /**
   * Calls the resume() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.resume = function(sID) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].resume();

  };

  /**
   * Resumes all currently-paused sounds.
   */

  this.resumeAll = function() {

    var i;
    for (i = sm2.soundIDs.length - 1; i >= 0; i--) {
      sm2.sounds[sm2.soundIDs[i]].resume();
    }

  };

  /**
   * Calls the togglePause() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.togglePause = function(sID) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].togglePause();

  };

  /**
   * Calls the setPan() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nPan The pan value (-100 to 100)
   * @return {SMSound} The SMSound object
   */

  this.setPan = function(sID, nPan) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].setPan(nPan);

  };

  /**
   * Calls the setVolume() method of a SMSound object by ID
   * Overloaded case: pass only volume argument eg., setVolume(50) to apply to all sounds.
   *
   * @param {string} sID The ID of the sound
   * @param {number} nVol The volume value (0 to 100)
   * @return {SMSound} The SMSound object
   */

  this.setVolume = function(sID, nVol) {

    // setVolume(50) function overloading case - apply to all sounds

    var i, j;

    if (sID !== _undefined && !isNaN(sID) && nVol === _undefined) {
      for (i = 0, j = sm2.soundIDs.length; i < j; i++) {
        sm2.sounds[sm2.soundIDs[i]].setVolume(sID);
      }
      return false;
    }

    // setVolume('mySound', 50) case

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].setVolume(nVol);

  };

  /**
   * Calls the mute() method of either a single SMSound object by ID, or all sound objects.
   *
   * @param {string} sID Optional: The ID of the sound (if omitted, all sounds will be used.)
   */

  this.mute = function(sID) {

    var i = 0;

    if (sID instanceof String) {
      sID = null;
    }

    if (!sID) {

      sm2._wD(sm + '.mute(): Muting all sounds');
      for (i = sm2.soundIDs.length - 1; i >= 0; i--) {
        sm2.sounds[sm2.soundIDs[i]].mute();
      }
      sm2.muted = true;

    } else {

      if (!idCheck(sID)) return false;

      sm2._wD(sm + '.mute(): Muting "' + sID + '"');
      return sm2.sounds[sID].mute();

    }

    return true;

  };

  /**
   * Mutes all sounds.
   */

  this.muteAll = function() {

    sm2.mute();

  };

  /**
   * Calls the unmute() method of either a single SMSound object by ID, or all sound objects.
   *
   * @param {string} sID Optional: The ID of the sound (if omitted, all sounds will be used.)
   */

  this.unmute = function(sID) {

    var i;

    if (sID instanceof String) {
      sID = null;
    }

    if (!sID) {

      sm2._wD(sm + '.unmute(): Unmuting all sounds');
      for (i = sm2.soundIDs.length - 1; i >= 0; i--) {
        sm2.sounds[sm2.soundIDs[i]].unmute();
      }
      sm2.muted = false;

    } else {

      if (!idCheck(sID)) return false;

      sm2._wD(sm + '.unmute(): Unmuting "' + sID + '"');

      return sm2.sounds[sID].unmute();

    }

    return true;

  };

  /**
   * Unmutes all sounds.
   */

  this.unmuteAll = function() {

    sm2.unmute();

  };

  /**
   * Calls the toggleMute() method of a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.toggleMute = function(sID) {

    if (!idCheck(sID)) return false;

    return sm2.sounds[sID].toggleMute();

  };

  /**
   * Retrieves the memory used by the flash plugin.
   *
   * @return {number} The amount of memory in use
   */

  this.getMemoryUse = function() {

    // flash-only
    var ram = 0;

    if (flash && fV !== 8) {
      ram = parseInt(flash._getMemoryUse(), 10);
    }

    return ram;

  };

  /**
   * Undocumented: NOPs soundManager and all SMSound objects.
   */

  this.disable = function(bNoDisable) {

    // destroy all functions
    var i;

    if (bNoDisable === _undefined) {
      bNoDisable = false;
    }

    // already disabled?
    if (disabled) return false;

    disabled = true;

    _wDS('shutdown', 1);

    for (i = sm2.soundIDs.length - 1; i >= 0; i--) {
      disableObject(sm2.sounds[sm2.soundIDs[i]]);
    }

    disableObject(sm2);

    // fire "complete", despite fail
    initComplete(bNoDisable);

    event.remove(window, 'load', initUserOnload);

    return true;

  };

  /**
   * Determines playability of a MIME type, eg. 'audio/mp3'.
   */

  this.canPlayMIME = function(sMIME) {

    var result;

    if (sm2.hasHTML5) {
      result = html5CanPlay({
        type: sMIME
      });
    }

    if (!result && needsFlash) {
      // if flash 9, test netStream (movieStar) types as well.
      result = (sMIME && sm2.ok() ? !!((fV > 8 ? sMIME.match(netStreamMimeTypes) : null) || sMIME.match(sm2.mimePattern)) : null); // TODO: make less "weird" (per JSLint)
    }

    return result;

  };

  /**
   * Determines playability of a URL based on audio support.
   *
   * @param {string} sURL The URL to test
   * @return {boolean} URL playability
   */

  this.canPlayURL = function(sURL) {

    var result;

    if (sm2.hasHTML5) {
      result = html5CanPlay({
        url: sURL
      });
    }

    if (!result && needsFlash) {
      result = (sURL && sm2.ok() ? !!(sURL.match(sm2.filePattern)) : null);
    }

    return result;

  };

  /**
   * Determines playability of an HTML DOM &lt;a&gt; object (or similar object literal) based on audio support.
   *
   * @param {object} oLink an HTML DOM &lt;a&gt; object or object literal including href and/or type attributes
   * @return {boolean} URL playability
   */

  this.canPlayLink = function(oLink) {

    if (oLink.type !== _undefined && oLink.type && sm2.canPlayMIME(oLink.type)) return true;

    return sm2.canPlayURL(oLink.href);

  };

  /**
   * Retrieves a SMSound object by ID.
   *
   * @param {string} sID The ID of the sound
   * @return {SMSound} The SMSound object
   */

  this.getSoundById = function(sID, _suppressDebug) {

    if (!sID) return null;

    var result = sm2.sounds[sID];

    // <d>
    if (!result && !_suppressDebug) {
      sm2._wD(sm + '.getSoundById(): Sound "' + sID + '" not found.', 2);
    }
    // </d>

    return result;

  };

  /**
   * Queues a callback for execution when SoundManager has successfully initialized.
   *
   * @param {function} oMethod The callback method to fire
   * @param {object} oScope Optional: The scope to apply to the callback
   */

  this.onready = function(oMethod, oScope) {

    var sType = 'onready',
        result = false;

    if (typeof oMethod === 'function') {

      // <d>
      if (didInit) {
        sm2._wD(str('queue', sType));
      }
      // </d>

      if (!oScope) {
        oScope = window;
      }

      addOnEvent(sType, oMethod, oScope);
      processOnEvents();

      result = true;

    } else {

      throw str('needFunction', sType);

    }

    return result;

  };

  /**
   * Queues a callback for execution when SoundManager has failed to initialize.
   *
   * @param {function} oMethod The callback method to fire
   * @param {object} oScope Optional: The scope to apply to the callback
   */

  this.ontimeout = function(oMethod, oScope) {

    var sType = 'ontimeout',
        result = false;

    if (typeof oMethod === 'function') {

      // <d>
      if (didInit) {
        sm2._wD(str('queue', sType));
      }
      // </d>

      if (!oScope) {
        oScope = window;
      }

      addOnEvent(sType, oMethod, oScope);
      processOnEvents({ type: sType });

      result = true;

    } else {

      throw str('needFunction', sType);

    }

    return result;

  };

  /**
   * Writes console.log()-style debug output to a console or in-browser element.
   * Applies when debugMode = true
   *
   * @param {string} sText The console message
   * @param {object} nType Optional log level (number), or object. Number case: Log type/style where 0 = 'info', 1 = 'warn', 2 = 'error'. Object case: Object to be dumped.
   */

  this._writeDebug = function(sText, sTypeOrObject) {

    // pseudo-private console.log()-style output
    // <d>

    var sDID = 'soundmanager-debug', o, oItem;

    if (!sm2.setupOptions.debugMode) return false;

    if (hasConsole && sm2.useConsole) {
      if (sTypeOrObject && typeof sTypeOrObject === 'object') {
        // object passed; dump to console.
        console.log(sText, sTypeOrObject);
      } else if (debugLevels[sTypeOrObject] !== _undefined) {
        console[debugLevels[sTypeOrObject]](sText);
      } else {
        console.log(sText);
      }
      if (sm2.consoleOnly) return true;
    }

    o = id(sDID);

    if (!o) return false;

    oItem = doc.createElement('div');

    if (++wdCount % 2 === 0) {
      oItem.className = 'sm2-alt';
    }

    if (sTypeOrObject === _undefined) {
      sTypeOrObject = 0;
    } else {
      sTypeOrObject = parseInt(sTypeOrObject, 10);
    }

    oItem.appendChild(doc.createTextNode(sText));

    if (sTypeOrObject) {
      if (sTypeOrObject >= 2) {
        oItem.style.fontWeight = 'bold';
      }
      if (sTypeOrObject === 3) {
        oItem.style.color = '#ff3333';
      }
    }

    // top-to-bottom
    // o.appendChild(oItem);

    // bottom-to-top
    o.insertBefore(oItem, o.firstChild);

    o = null;
    // </d>

    return true;

  };

  // <d>
  // last-resort debugging option
  if (wl.indexOf('sm2-debug=alert') !== -1) {
    this._writeDebug = function(sText) {
      window.alert(sText);
    };
  }
  // </d>

  // alias
  this._wD = this._writeDebug;

  /**
   * Provides debug / state information on all SMSound objects.
   */

  this._debug = function() {

    // <d>
    var i, j;
    _wDS('currentObj', 1);

    for (i = 0, j = sm2.soundIDs.length; i < j; i++) {
      sm2.sounds[sm2.soundIDs[i]]._debug();
    }
    // </d>

  };

  /**
   * Restarts and re-initializes the SoundManager instance.
   *
   * @param {boolean} resetEvents Optional: When true, removes all registered onready and ontimeout event callbacks.
   * @param {boolean} excludeInit Options: When true, does not call beginDelayedInit() (which would restart SM2).
   * @return {object} soundManager The soundManager instance.
   */

  this.reboot = function(resetEvents, excludeInit) {

    // reset some (or all) state, and re-init unless otherwise specified.

    // <d>
    if (sm2.soundIDs.length) {
      sm2._wD('Destroying ' + sm2.soundIDs.length + ' SMSound object' + (sm2.soundIDs.length !== 1 ? 's' : '') + '...');
    }
    // </d>

    var i, j, k;

    for (i = sm2.soundIDs.length - 1; i >= 0; i--) {
      sm2.sounds[sm2.soundIDs[i]].destruct();
    }

    // trash ze flash (remove from the DOM)

    if (flash) {

      try {

        if (isIE) {
          oRemovedHTML = flash.innerHTML;
        }

        oRemoved = flash.parentNode.removeChild(flash);

      } catch(e) {

        // Remove failed? May be due to flash blockers silently removing the SWF object/embed node from the DOM. Warn and continue.

        _wDS('badRemove', 2);

      }

    }

    // actually, force recreate of movie.

    oRemovedHTML = oRemoved = needsFlash = flash = null;

    sm2.enabled = didDCLoaded = didInit = waitingForEI = initPending = didAppend = appendSuccess = disabled = useGlobalHTML5Audio = sm2.swfLoaded = false;

    sm2.soundIDs = [];
    sm2.sounds = {};

    idCounter = 0;
    didSetup = false;

    if (!resetEvents) {
      // reset callbacks for onready, ontimeout etc. so that they will fire again on re-init
      for (i in on_queue) {
        if (on_queue.hasOwnProperty(i)) {
          for (j = 0, k = on_queue[i].length; j < k; j++) {
            on_queue[i][j].fired = false;
          }
        }
      }
    } else {
      // remove all callbacks entirely
      on_queue = [];
    }

    // <d>
    if (!excludeInit) {
      sm2._wD(sm + ': Rebooting...');
    }
    // </d>

    // reset HTML5 and flash canPlay test results

    sm2.html5 = {
      usingFlash: null
    };

    sm2.flash = {};

    // reset device-specific HTML/flash mode switches

    sm2.html5Only = false;
    sm2.ignoreFlash = false;

    window.setTimeout(function() {

      // by default, re-init

      if (!excludeInit) {
        sm2.beginDelayedInit();
      }

    }, 20);

    return sm2;

  };

  this.reset = function() {

    /**
     * Shuts down and restores the SoundManager instance to its original loaded state, without an explicit reboot. All onready/ontimeout handlers are removed.
     * After this call, SM2 may be re-initialized via soundManager.beginDelayedInit().
     * @return {object} soundManager The soundManager instance.
     */

    _wDS('reset');

    return sm2.reboot(true, true);

  };

  /**
   * Undocumented: Determines the SM2 flash movie's load progress.
   *
   * @return {number or null} Percent loaded, or if invalid/unsupported, null.
   */

  this.getMoviePercent = function() {

    /**
     * Interesting syntax notes...
     * Flash/ExternalInterface (ActiveX/NPAPI) bridge methods are not typeof "function" nor instanceof Function, but are still valid.
     * Furthermore, using (flash && flash.PercentLoaded) causes IE to throw "object doesn't support this property or method".
     * Thus, 'in' syntax must be used.
     */

    return (flash && 'PercentLoaded' in flash ? flash.PercentLoaded() : null);

  };

  /**
   * Additional helper for manually invoking SM2's init process after DOM Ready / window.onload().
   */

  this.beginDelayedInit = function() {

    windowLoaded = true;
    domContentLoaded();

    setTimeout(function() {

      if (initPending) return false;

      createMovie();
      initMovie();
      initPending = true;

      return true;

    }, 20);

    delayWaitForEI();

  };

  /**
   * Destroys the SoundManager instance and all SMSound instances.
   */

  this.destruct = function() {

    sm2._wD(sm + '.destruct()');
    sm2.disable(true);

  };

  /**
   * SMSound() (sound object) constructor
   * ------------------------------------
   *
   * @param {object} oOptions Sound options (id and url are required attributes)
   * @return {SMSound} The new SMSound object
   */

  SMSound = function(oOptions) {

    var s = this, resetProperties, add_html5_events, remove_html5_events, stop_html5_timer, start_html5_timer, attachOnPosition, onplay_called = false, onPositionItems = [], onPositionFired = 0, detachOnPosition, applyFromTo, lastURL = null, lastHTML5State, urlOmitted;

    lastHTML5State = {
      // tracks duration + position (time)
      duration: null,
      time: null
    };

    this.id = oOptions.id;

    // legacy
    this.sID = this.id;

    this.url = oOptions.url;
    this.options = mixin(oOptions);

    // per-play-instance-specific options
    this.instanceOptions = this.options;

    // short alias
    this._iO = this.instanceOptions;

    // assign property defaults
    this.pan = this.options.pan;
    this.volume = this.options.volume;

    // whether or not this object is using HTML5
    this.isHTML5 = false;

    // internal HTML5 Audio() object reference
    this._a = null;

    // for flash 8 special-case createSound() without url, followed by load/play with url case
    urlOmitted = (!this.url);

    /**
     * SMSound() public methods
     * ------------------------
     */

    this.id3 = {};

    /**
     * Writes SMSound object parameters to debug console
     */

    this._debug = function() {

      // <d>
      sm2._wD(s.id + ': Merged options:', s.options);
      // </d>

    };

    /**
     * Begins loading a sound per its *url*.
     *
     * @param {object} options Optional: Sound options
     * @return {SMSound} The SMSound object
     */

    this.load = function(options) {

      var oSound = null, instanceOptions;

      if (options !== _undefined) {
        s._iO = mixin(options, s.options);
      } else {
        options = s.options;
        s._iO = options;
        if (lastURL && lastURL !== s.url) {
          _wDS('manURL');
          s._iO.url = s.url;
          s.url = null;
        }
      }

      if (!s._iO.url) {
        s._iO.url = s.url;
      }

      s._iO.url = parseURL(s._iO.url);

      // ensure we're in sync
      s.instanceOptions = s._iO;

      // local shortcut
      instanceOptions = s._iO;

      sm2._wD(s.id + ': load (' + instanceOptions.url + ')');

      if (!instanceOptions.url && !s.url) {
        sm2._wD(s.id + ': load(): url is unassigned. Exiting.', 2);
        return s;
      }

      // <d>
      if (!s.isHTML5 && fV === 8 && !s.url && !instanceOptions.autoPlay) {
        // flash 8 load() -> play() won't work before onload has fired.
        sm2._wD(s.id + ': Flash 8 load() limitation: Wait for onload() before calling play().', 1);
      }
      // </d>

      if (instanceOptions.url === s.url && s.readyState !== 0 && s.readyState !== 2) {
        _wDS('onURL', 1);
        // if loaded and an onload() exists, fire immediately.
        if (s.readyState === 3 && instanceOptions.onload) {
          // assume success based on truthy duration.
          wrapCallback(s, function() {
            instanceOptions.onload.apply(s, [(!!s.duration)]);
          });
        }
        return s;
      }

      // reset a few state properties

      s.loaded = false;
      s.readyState = 1;
      s.playState = 0;
      s.id3 = {};

      // TODO: If switching from HTML5 -> flash (or vice versa), stop currently-playing audio.

      if (html5OK(instanceOptions)) {

        oSound = s._setup_html5(instanceOptions);

        if (!oSound._called_load) {

          s._html5_canplay = false;

          // TODO: review called_load / html5_canplay logic

          // if url provided directly to load(), assign it here.

          if (s.url !== instanceOptions.url) {

            sm2._wD(_wDS('manURL') + ': ' + instanceOptions.url);

            s._a.src = instanceOptions.url;

            // TODO: review / re-apply all relevant options (volume, loop, onposition etc.)

            // reset position for new URL
            s.setPosition(0);

          }

          // given explicit load call, try to preload.

          // early HTML5 implementation (non-standard)
          s._a.autobuffer = 'auto';

          // standard property, values: none / metadata / auto
          // reference: http://msdn.microsoft.com/en-us/library/ie/ff974759%28v=vs.85%29.aspx
          s._a.preload = 'auto';

          s._a._called_load = true;

        } else {

          sm2._wD(s.id + ': Ignoring request to load again');

        }

      } else {

        if (sm2.html5Only) {
          sm2._wD(s.id + ': No flash support. Exiting.');
          return s;
        }

        if (s._iO.url && s._iO.url.match(/data:/i)) {
          // data: URIs not supported by Flash, either.
          sm2._wD(s.id + ': data: URIs not supported via Flash. Exiting.');
          return s;
        }

        try {
          s.isHTML5 = false;
          s._iO = policyFix(loopFix(instanceOptions));
          // if we have "position", disable auto-play as we'll be seeking to that position at onload().
          if (s._iO.autoPlay && (s._iO.position || s._iO.from)) {
            sm2._wD(s.id + ': Disabling autoPlay because of non-zero offset case');
            s._iO.autoPlay = false;
          }
          // re-assign local shortcut
          instanceOptions = s._iO;
          if (fV === 8) {
            flash._load(s.id, instanceOptions.url, instanceOptions.stream, instanceOptions.autoPlay, instanceOptions.usePolicyFile);
          } else {
            flash._load(s.id, instanceOptions.url, !!(instanceOptions.stream), !!(instanceOptions.autoPlay), instanceOptions.loops || 1, !!(instanceOptions.autoLoad), instanceOptions.usePolicyFile);
          }
        } catch(e) {
          _wDS('smError', 2);
          debugTS('onload', false);
          catchError({
            type: 'SMSOUND_LOAD_JS_EXCEPTION',
            fatal: true
          });
        }

      }

      // after all of this, ensure sound url is up to date.
      s.url = instanceOptions.url;

      return s;

    };

    /**
     * Unloads a sound, canceling any open HTTP requests.
     *
     * @return {SMSound} The SMSound object
     */

    this.unload = function() {

      // Flash 8/AS2 can't "close" a stream - fake it by loading an empty URL
      // Flash 9/AS3: Close stream, preventing further load
      // HTML5: Most UAs will use empty URL

      if (s.readyState !== 0) {

        sm2._wD(s.id + ': unload()');

        if (!s.isHTML5) {

          if (fV === 8) {
            flash._unload(s.id, emptyURL);
          } else {
            flash._unload(s.id);
          }

        } else {

          stop_html5_timer();

          if (s._a) {

            s._a.pause();

            // update empty URL, too
            lastURL = html5Unload(s._a);

          }

        }

        // reset load/status flags
        resetProperties();

      }

      return s;

    };

    /**
     * Unloads and destroys a sound.
     */

    this.destruct = function(_bFromSM) {

      sm2._wD(s.id + ': Destruct');

      if (!s.isHTML5) {

        // kill sound within Flash
        // Disable the onfailure handler
        s._iO.onfailure = null;
        flash._destroySound(s.id);

      } else {

        stop_html5_timer();

        if (s._a) {
          s._a.pause();
          html5Unload(s._a);
          if (!useGlobalHTML5Audio) {
            remove_html5_events();
          }
          // break obvious circular reference
          s._a._s = null;
          s._a = null;
        }

      }

      if (!_bFromSM) {
        // ensure deletion from controller
        sm2.destroySound(s.id, true);
      }

    };

    /**
     * Begins playing a sound.
     *
     * @param {object} options Optional: Sound options
     * @return {SMSound} The SMSound object
     */

    this.play = function(options, _updatePlayState) {

      var fN, allowMulti, a, onready,
          audioClone, onended, oncanplay,
          startOK = true;

      // <d>
      fN = s.id + ': play(): ';
      // </d>

      // default to true
      _updatePlayState = (_updatePlayState === _undefined ? true : _updatePlayState);

      if (!options) {
        options = {};
      }

      // first, use local URL (if specified)
      if (s.url) {
        s._iO.url = s.url;
      }

      // mix in any options defined at createSound()
      s._iO = mixin(s._iO, s.options);

      // mix in any options specific to this method
      s._iO = mixin(options, s._iO);

      s._iO.url = parseURL(s._iO.url);

      s.instanceOptions = s._iO;

      // RTMP-only
      if (!s.isHTML5 && s._iO.serverURL && !s.connected) {
        if (!s.getAutoPlay()) {
          sm2._wD(fN + ' Netstream not connected yet - setting autoPlay');
          s.setAutoPlay(true);
        }
        // play will be called in onconnect()
        return s;
      }

      if (html5OK(s._iO)) {
        s._setup_html5(s._iO);
        start_html5_timer();
      }

      if (s.playState === 1 && !s.paused) {

        allowMulti = s._iO.multiShot;

        if (!allowMulti) {

          sm2._wD(fN + 'Already playing (one-shot)', 1);

          if (s.isHTML5) {
            // go back to original position.
            s.setPosition(s._iO.position);
          }

          return s;

        }

        sm2._wD(fN + 'Already playing (multi-shot)', 1);

      }

      // edge case: play() with explicit URL parameter
      if (options.url && options.url !== s.url) {

        // special case for createSound() followed by load() / play() with url; avoid double-load case.
        if (!s.readyState && !s.isHTML5 && fV === 8 && urlOmitted) {

          urlOmitted = false;

        } else {

          // load using merged options
          s.load(s._iO);

        }

      }

      if (!s.loaded) {

        if (s.readyState === 0) {

          sm2._wD(fN + 'Attempting to load');

          // try to get this sound playing ASAP
          if (!s.isHTML5 && !sm2.html5Only) {

            // flash: assign directly because setAutoPlay() increments the instanceCount
            s._iO.autoPlay = true;
            s.load(s._iO);

          } else if (s.isHTML5) {

            // iOS needs this when recycling sounds, loading a new URL on an existing object.
            s.load(s._iO);

          } else {

            sm2._wD(fN + 'Unsupported type. Exiting.');

            return s;

          }

          // HTML5 hack - re-set instanceOptions?
          s.instanceOptions = s._iO;

        } else if (s.readyState === 2) {

          sm2._wD(fN + 'Could not load - exiting', 2);

          return s;

        } else {

          sm2._wD(fN + 'Loading - attempting to play...');

        }

      } else {

        // "play()"
        sm2._wD(fN.substr(0, fN.lastIndexOf(':')));

      }

      if (!s.isHTML5 && fV === 9 && s.position > 0 && s.position === s.duration) {
        // flash 9 needs a position reset if play() is called while at the end of a sound.
        sm2._wD(fN + 'Sound at end, resetting to position: 0');
        options.position = 0;
      }

      /**
       * Streams will pause when their buffer is full if they are being loaded.
       * In this case paused is true, but the song hasn't started playing yet.
       * If we just call resume() the onplay() callback will never be called.
       * So only call resume() if the position is > 0.
       * Another reason is because options like volume won't have been applied yet.
       * For normal sounds, just resume.
       */

      if (s.paused && s.position >= 0 && (!s._iO.serverURL || s.position > 0)) {

        // https://gist.github.com/37b17df75cc4d7a90bf6
        sm2._wD(fN + 'Resuming from paused state', 1);
        s.resume();

      } else {

        s._iO = mixin(options, s._iO);

        /**
         * Preload in the event of play() with position under Flash,
         * or from/to parameters and non-RTMP case
         */
        if (((!s.isHTML5 && s._iO.position !== null && s._iO.position > 0) || (s._iO.from !== null && s._iO.from > 0) || s._iO.to !== null) && s.instanceCount === 0 && s.playState === 0 && !s._iO.serverURL) {

          onready = function() {
            // sound "canplay" or onload()
            // re-apply position/from/to to instance options, and start playback
            s._iO = mixin(options, s._iO);
            s.play(s._iO);
          };

          // HTML5 needs to at least have "canplay" fired before seeking.
          if (s.isHTML5 && !s._html5_canplay) {

            // this hasn't been loaded yet. load it first, and then do this again.
            sm2._wD(fN + 'Beginning load for non-zero offset case');

            s.load({
              // note: custom HTML5-only event added for from/to implementation.
              _oncanplay: onready
            });

          } else if (!s.isHTML5 && !s.loaded && (!s.readyState || s.readyState !== 2)) {

            // to be safe, preload the whole thing in Flash.

            sm2._wD(fN + 'Preloading for non-zero offset case');

            s.load({
              onload: onready
            });

          }

          // otherwise, we're ready to go. re-apply local options, and continue

          s._iO = applyFromTo();

        }

        // sm2._wD(fN + 'Starting to play');

        // increment instance counter, where enabled + supported
        if (!s.instanceCount || s._iO.multiShotEvents || (s.isHTML5 && s._iO.multiShot && !useGlobalHTML5Audio) || (!s.isHTML5 && fV > 8 && !s.getAutoPlay())) {
          s.instanceCount++;
        }

        // if first play and onposition parameters exist, apply them now
        if (s._iO.onposition && s.playState === 0) {
          attachOnPosition(s);
        }

        s.playState = 1;
        s.paused = false;

        s.position = (s._iO.position !== _undefined && !isNaN(s._iO.position) ? s._iO.position : 0);

        if (!s.isHTML5) {
          s._iO = policyFix(loopFix(s._iO));
        }

        if (s._iO.onplay && _updatePlayState) {
          s._iO.onplay.apply(s);
          onplay_called = true;
        }

        s.setVolume(s._iO.volume, true);
        s.setPan(s._iO.pan, true);

        if (s._iO.playbackRate !== 1) {
          s.setPlaybackRate(s._iO.playbackRate);
        }

        if (!s.isHTML5) {

          startOK = flash._start(s.id, s._iO.loops || 1, (fV === 9 ? s.position : s.position / msecScale), s._iO.multiShot || false);

          if (fV === 9 && !startOK) {
            // edge case: no sound hardware, or 32-channel flash ceiling hit.
            // applies only to Flash 9, non-NetStream/MovieStar sounds.
            // http://help.adobe.com/en_US/FlashPlatform/reference/actionscript/3/flash/media/Sound.html#play%28%29
            sm2._wD(fN + 'No sound hardware, or 32-sound ceiling hit', 2);
            if (s._iO.onplayerror) {
              s._iO.onplayerror.apply(s);
            }

          }

        } else if (s.instanceCount < 2) {

            // HTML5 single-instance case

            start_html5_timer();

            a = s._setup_html5();

            s.setPosition(s._iO.position);

            a.play();

          } else {

            // HTML5 multi-shot case

            sm2._wD(s.id + ': Cloning Audio() for instance #' + s.instanceCount + '...');

            audioClone = new Audio(s._iO.url);

            onended = function() {
              event.remove(audioClone, 'ended', onended);
              s._onfinish(s);
              // cleanup
              html5Unload(audioClone);
              audioClone = null;
            };

            oncanplay = function() {
              event.remove(audioClone, 'canplay', oncanplay);
              try {
                audioClone.currentTime = s._iO.position / msecScale;
              } catch(err) {
                complain(s.id + ': multiShot play() failed to apply position of ' + (s._iO.position / msecScale));
              }
              audioClone.play();
            };

            event.add(audioClone, 'ended', onended);

            // apply volume to clones, too
            if (s._iO.volume !== _undefined) {
              audioClone.volume = Math.max(0, Math.min(1, s._iO.volume / 100));
            }

            // playing multiple muted sounds? if you do this, you're weird ;) - but let's cover it.
            if (s.muted) {
              audioClone.muted = true;
            }

            if (s._iO.position) {
              // HTML5 audio can't seek before onplay() event has fired.
              // wait for canplay, then seek to position and start playback.
              event.add(audioClone, 'canplay', oncanplay);
            } else {
              // begin playback at currentTime: 0
              audioClone.play();
            }

          }

      }

      return s;

    };

    // just for convenience
    this.start = this.play;

    /**
     * Stops playing a sound (and optionally, all sounds)
     *
     * @param {boolean} bAll Optional: Whether to stop all sounds
     * @return {SMSound} The SMSound object
     */

    this.stop = function(bAll) {

      var instanceOptions = s._iO,
          originalPosition;

      if (s.playState === 1) {

        sm2._wD(s.id + ': stop()');

        s._onbufferchange(0);
        s._resetOnPosition(0);
        s.paused = false;

        if (!s.isHTML5) {
          s.playState = 0;
        }

        // remove onPosition listeners, if any
        detachOnPosition();

        // and "to" position, if set
        if (instanceOptions.to) {
          s.clearOnPosition(instanceOptions.to);
        }

        if (!s.isHTML5) {

          flash._stop(s.id, bAll);

          // hack for netStream: just unload
          if (instanceOptions.serverURL) {
            s.unload();
          }

        } else if (s._a) {

            originalPosition = s.position;

            // act like Flash, though
            s.setPosition(0);

            // hack: reflect old position for onstop() (also like Flash)
            s.position = originalPosition;

            // html5 has no stop()
            // NOTE: pausing means iOS requires interaction to resume.
            s._a.pause();

            s.playState = 0;

            // and update UI
            s._onTimer();

            stop_html5_timer();

          }

        s.instanceCount = 0;
        s._iO = {};

        if (instanceOptions.onstop) {
          instanceOptions.onstop.apply(s);
        }

      }

      return s;

    };

    /**
     * Undocumented/internal: Sets autoPlay for RTMP.
     *
     * @param {boolean} autoPlay state
     */

    this.setAutoPlay = function(autoPlay) {

      sm2._wD(s.id + ': Autoplay turned ' + (autoPlay ? 'on' : 'off'));
      s._iO.autoPlay = autoPlay;

      if (!s.isHTML5) {
        flash._setAutoPlay(s.id, autoPlay);
        if (autoPlay) {
          // only increment the instanceCount if the sound isn't loaded (TODO: verify RTMP)
          if (!s.instanceCount && s.readyState === 1) {
            s.instanceCount++;
            sm2._wD(s.id + ': Incremented instance count to ' + s.instanceCount);
          }
        }
      }

    };

    /**
     * Undocumented/internal: Returns the autoPlay boolean.
     *
     * @return {boolean} The current autoPlay value
     */

    this.getAutoPlay = function() {

      return s._iO.autoPlay;

    };

    /**
     * Sets the playback rate of a sound (HTML5-only.)
     *
     * @param {number} playbackRate (+/-)
     * @return {SMSound} The SMSound object
     */

    this.setPlaybackRate = function(playbackRate) {

      // Per Mozilla, limit acceptable values to prevent playback from stopping (unless allowOverride is truthy.)
      // https://developer.mozilla.org/en-US/Apps/Build/Audio_and_video_delivery/WebAudio_playbackRate_explained
      var normalizedRate = Math.max(0.5, Math.min(4, playbackRate));

      // <d>
      if (normalizedRate !== playbackRate) {
        sm2._wD(s.id + ': setPlaybackRate(' + playbackRate + '): limiting rate to ' + normalizedRate, 2);
      }
      // </d>

      if (s.isHTML5) {
        try {
          s._iO.playbackRate = normalizedRate;
          s._a.playbackRate = normalizedRate;
        } catch(e) {
          sm2._wD(s.id + ': setPlaybackRate(' + normalizedRate + ') failed: ' + e.message, 2);
        }
      }

      return s;

    };

    /**
     * Sets the position of a sound.
     *
     * @param {number} nMsecOffset Position (milliseconds)
     * @return {SMSound} The SMSound object
     */

    this.setPosition = function(nMsecOffset) {

      if (nMsecOffset === _undefined) {
        nMsecOffset = 0;
      }

      var position, position1K,
          // Use the duration from the instance options, if we don't have a track duration yet.
          // position >= 0 and <= current available (loaded) duration
          offset = (s.isHTML5 ? Math.max(nMsecOffset, 0) : Math.min(s.duration || s._iO.duration, Math.max(nMsecOffset, 0)));

      s.position = offset;
      position1K = s.position / msecScale;
      s._resetOnPosition(s.position);
      s._iO.position = offset;

      if (!s.isHTML5) {

        position = (fV === 9 ? s.position : position1K);

        if (s.readyState && s.readyState !== 2) {
          // if paused or not playing, will not resume (by playing)
          flash._setPosition(s.id, position, (s.paused || !s.playState), s._iO.multiShot);
        }

      } else if (s._a) {

        // Set the position in the canplay handler if the sound is not ready yet
        if (s._html5_canplay) {

          if (s._a.currentTime.toFixed(3) !== position1K.toFixed(3)) {

            /**
             * DOM/JS errors/exceptions to watch out for:
             * if seek is beyond (loaded?) position, "DOM exception 11"
             * "INDEX_SIZE_ERR": DOM exception 1
             */
            sm2._wD(s.id + ': setPosition(' + position1K + ')');

            try {
              s._a.currentTime = position1K;
              if (s.playState === 0 || s.paused) {
                // allow seek without auto-play/resume
                s._a.pause();
              }
            } catch(e) {
              sm2._wD(s.id + ': setPosition(' + position1K + ') failed: ' + e.message, 2);
            }

          }

        } else if (position1K) {

          // warn on non-zero seek attempts
          sm2._wD(s.id + ': setPosition(' + position1K + '): Cannot seek yet, sound not ready', 2);
          return s;

        }

        if (s.paused) {

          // if paused, refresh UI right away by forcing update
          s._onTimer(true);

        }

      }

      return s;

    };

    /**
     * Pauses sound playback.
     *
     * @return {SMSound} The SMSound object
     */

    this.pause = function(_bCallFlash) {

      if (s.paused || (s.playState === 0 && s.readyState !== 1)) return s;

      sm2._wD(s.id + ': pause()');
      s.paused = true;

      if (!s.isHTML5) {
        if (_bCallFlash || _bCallFlash === _undefined) {
          flash._pause(s.id, s._iO.multiShot);
        }
      } else {
        s._setup_html5().pause();
        stop_html5_timer();
      }

      if (s._iO.onpause) {
        s._iO.onpause.apply(s);
      }

      return s;

    };

    /**
     * Resumes sound playback.
     *
     * @return {SMSound} The SMSound object
     */

    /**
     * When auto-loaded streams pause on buffer full they have a playState of 0.
     * We need to make sure that the playState is set to 1 when these streams "resume".
     * When a paused stream is resumed, we need to trigger the onplay() callback if it
     * hasn't been called already. In this case since the sound is being played for the
     * first time, I think it's more appropriate to call onplay() rather than onresume().
     */

    this.resume = function() {

      var instanceOptions = s._iO;

      if (!s.paused) return s;

      sm2._wD(s.id + ': resume()');
      s.paused = false;
      s.playState = 1;

      if (!s.isHTML5) {

        if (instanceOptions.isMovieStar && !instanceOptions.serverURL) {
          // Bizarre Webkit bug (Chrome reported via 8tracks.com dudes): AAC content paused for 30+ seconds(?) will not resume without a reposition.
          s.setPosition(s.position);
        }

        // flash method is toggle-based (pause/resume)
        flash._pause(s.id, instanceOptions.multiShot);

      } else {

        s._setup_html5().play();
        start_html5_timer();

      }

      if (!onplay_called && instanceOptions.onplay) {

        instanceOptions.onplay.apply(s);
        onplay_called = true;

      } else if (instanceOptions.onresume) {

        instanceOptions.onresume.apply(s);

      }

      return s;

    };

    /**
     * Toggles sound playback.
     *
     * @return {SMSound} The SMSound object
     */

    this.togglePause = function() {

      sm2._wD(s.id + ': togglePause()');

      if (s.playState === 0) {
        s.play({
          position: (fV === 9 && !s.isHTML5 ? s.position : s.position / msecScale)
        });
        return s;
      }

      if (s.paused) {
        s.resume();
      } else {
        s.pause();
      }

      return s;

    };

    /**
     * Sets the panning (L-R) effect.
     *
     * @param {number} nPan The pan value (-100 to 100)
     * @return {SMSound} The SMSound object
     */

    this.setPan = function(nPan, bInstanceOnly) {

      if (nPan === _undefined) {
        nPan = 0;
      }

      if (bInstanceOnly === _undefined) {
        bInstanceOnly = false;
      }

      if (!s.isHTML5) {
        flash._setPan(s.id, nPan);
      } // else { no HTML5 pan? }

      s._iO.pan = nPan;

      if (!bInstanceOnly) {
        s.pan = nPan;
        s.options.pan = nPan;
      }

      return s;

    };

    /**
     * Sets the volume.
     *
     * @param {number} nVol The volume value (0 to 100)
     * @return {SMSound} The SMSound object
     */

    this.setVolume = function(nVol, _bInstanceOnly) {

      /**
       * Note: Setting volume has no effect on iOS "special snowflake" devices.
       * Hardware volume control overrides software, and volume
       * will always return 1 per Apple docs. (iOS 4 + 5.)
       * http://developer.apple.com/library/safari/documentation/AudioVideo/Conceptual/HTML-canvas-guide/AddingSoundtoCanvasAnimations/AddingSoundtoCanvasAnimations.html
       */

      if (nVol === _undefined) {
        nVol = 100;
      }

      if (_bInstanceOnly === _undefined) {
        _bInstanceOnly = false;
      }

      if (!s.isHTML5) {

        flash._setVolume(s.id, (sm2.muted && !s.muted) || s.muted ? 0 : nVol);

      } else if (s._a) {

        if (sm2.muted && !s.muted) {
          s.muted = true;
          s._a.muted = true;
        }

        // valid range for native HTML5 Audio(): 0-1
        s._a.volume = Math.max(0, Math.min(1, nVol / 100));

      }

      s._iO.volume = nVol;

      if (!_bInstanceOnly) {
        s.volume = nVol;
        s.options.volume = nVol;
      }

      return s;

    };

    /**
     * Mutes the sound.
     *
     * @return {SMSound} The SMSound object
     */

    this.mute = function() {

      s.muted = true;

      if (!s.isHTML5) {
        flash._setVolume(s.id, 0);
      } else if (s._a) {
        s._a.muted = true;
      }

      return s;

    };

    /**
     * Unmutes the sound.
     *
     * @return {SMSound} The SMSound object
     */

    this.unmute = function() {

      s.muted = false;
      var hasIO = (s._iO.volume !== _undefined);

      if (!s.isHTML5) {
        flash._setVolume(s.id, hasIO ? s._iO.volume : s.options.volume);
      } else if (s._a) {
        s._a.muted = false;
      }

      return s;

    };

    /**
     * Toggles the muted state of a sound.
     *
     * @return {SMSound} The SMSound object
     */

    this.toggleMute = function() {

      return (s.muted ? s.unmute() : s.mute());

    };

    /**
     * Registers a callback to be fired when a sound reaches a given position during playback.
     *
     * @param {number} nPosition The position to watch for
     * @param {function} oMethod The relevant callback to fire
     * @param {object} oScope Optional: The scope to apply the callback to
     * @return {SMSound} The SMSound object
     */

    this.onPosition = function(nPosition, oMethod, oScope) {

      // TODO: basic dupe checking?

      onPositionItems.push({
        position: parseInt(nPosition, 10),
        method: oMethod,
        scope: (oScope !== _undefined ? oScope : s),
        fired: false
      });

      return s;

    };

    // legacy/backwards-compability: lower-case method name
    this.onposition = this.onPosition;

    /**
     * Removes registered callback(s) from a sound, by position and/or callback.
     *
     * @param {number} nPosition The position to clear callback(s) for
     * @param {function} oMethod Optional: Identify one callback to be removed when multiple listeners exist for one position
     * @return {SMSound} The SMSound object
     */

    this.clearOnPosition = function(nPosition, oMethod) {

      var i;

      nPosition = parseInt(nPosition, 10);

      if (isNaN(nPosition)) {
        // safety check
        return;
      }

      for (i = 0; i < onPositionItems.length; i++) {

        if (nPosition === onPositionItems[i].position) {
          // remove this item if no method was specified, or, if the method matches

          if (!oMethod || (oMethod === onPositionItems[i].method)) {

            if (onPositionItems[i].fired) {
              // decrement "fired" counter, too
              onPositionFired--;
            }

            onPositionItems.splice(i, 1);

          }

        }

      }

    };

    this._processOnPosition = function() {

      var i, item, j = onPositionItems.length;

      if (!j || !s.playState || onPositionFired >= j) return false;

      for (i = j - 1; i >= 0; i--) {

        item = onPositionItems[i];

        if (!item.fired && s.position >= item.position) {

          item.fired = true;
          onPositionFired++;
          item.method.apply(item.scope, [item.position]);

          //  reset j -- onPositionItems.length can be changed in the item callback above... occasionally breaking the loop.
          j = onPositionItems.length;

        }

      }

      return true;

    };

    this._resetOnPosition = function(nPosition) {

      // reset "fired" for items interested in this position
      var i, item, j = onPositionItems.length;

      if (!j) return false;

      for (i = j - 1; i >= 0; i--) {

        item = onPositionItems[i];

        if (item.fired && nPosition <= item.position) {
          item.fired = false;
          onPositionFired--;
        }

      }

      return true;

    };

    /**
     * SMSound() private internals
     * --------------------------------
     */

    applyFromTo = function() {

      var instanceOptions = s._iO,
          f = instanceOptions.from,
          t = instanceOptions.to,
          start, end;

      end = function() {

        // end has been reached.
        sm2._wD(s.id + ': "To" time of ' + t + ' reached.');

        // detach listener
        s.clearOnPosition(t, end);

        // stop should clear this, too
        s.stop();

      };

      start = function() {

        sm2._wD(s.id + ': Playing "from" ' + f);

        // add listener for end
        if (t !== null && !isNaN(t)) {
          s.onPosition(t, end);
        }

      };

      if (f !== null && !isNaN(f)) {

        // apply to instance options, guaranteeing correct start position.
        instanceOptions.position = f;

        // multiShot timing can't be tracked, so prevent that.
        instanceOptions.multiShot = false;

        start();

      }

      // return updated instanceOptions including starting position
      return instanceOptions;

    };

    attachOnPosition = function() {

      var item,
          op = s._iO.onposition;

      // attach onposition things, if any, now.

      if (op) {

        for (item in op) {
          if (op.hasOwnProperty(item)) {
            s.onPosition(parseInt(item, 10), op[item]);
          }
        }

      }

    };

    detachOnPosition = function() {

      var item,
          op = s._iO.onposition;

      // detach any onposition()-style listeners.

      if (op) {

        for (item in op) {
          if (op.hasOwnProperty(item)) {
            s.clearOnPosition(parseInt(item, 10));
          }
        }

      }

    };

    start_html5_timer = function() {

      if (s.isHTML5) {
        startTimer(s);
      }

    };

    stop_html5_timer = function() {

      if (s.isHTML5) {
        stopTimer(s);
      }

    };

    resetProperties = function(retainPosition) {

      if (!retainPosition) {
        onPositionItems = [];
        onPositionFired = 0;
      }

      onplay_called = false;

      s._hasTimer = null;
      s._a = null;
      s._html5_canplay = false;
      s.bytesLoaded = null;
      s.bytesTotal = null;
      s.duration = (s._iO && s._iO.duration ? s._iO.duration : null);
      s.durationEstimate = null;
      s.buffered = [];

      // legacy: 1D array
      s.eqData = [];

      s.eqData.left = [];
      s.eqData.right = [];

      s.failures = 0;
      s.isBuffering = false;
      s.instanceOptions = {};
      s.instanceCount = 0;
      s.loaded = false;
      s.metadata = {};

      // 0 = uninitialised, 1 = loading, 2 = failed/error, 3 = loaded/success
      s.readyState = 0;

      s.muted = false;
      s.paused = false;

      s.peakData = {
        left: 0,
        right: 0
      };

      s.waveformData = {
        left: [],
        right: []
      };

      s.playState = 0;
      s.position = null;

      s.id3 = {};

    };

    resetProperties();

    /**
     * Pseudo-private SMSound internals
     * --------------------------------
     */

    this._onTimer = function(bForce) {

      /**
       * HTML5-only _whileplaying() etc.
       * called from both HTML5 native events, and polling/interval-based timers
       * mimics flash and fires only when time/duration change, so as to be polling-friendly
       */

      var duration, isNew = false, time, x = {};

      if (s._hasTimer || bForce) {

        // TODO: May not need to track readyState (1 = loading)

        if (s._a && (bForce || ((s.playState > 0 || s.readyState === 1) && !s.paused))) {

          duration = s._get_html5_duration();

          if (duration !== lastHTML5State.duration) {

            lastHTML5State.duration = duration;
            s.duration = duration;
            isNew = true;

          }

          // TODO: investigate why this goes wack if not set/re-set each time.
          s.durationEstimate = s.duration;

          time = (s._a.currentTime * msecScale || 0);

          if (time !== lastHTML5State.time) {

            lastHTML5State.time = time;
            isNew = true;

          }

          if (isNew || bForce) {

            s._whileplaying(time, x, x, x, x);

          }

        }/* else {

          // sm2._wD('_onTimer: Warn for "'+s.id+'": '+(!s._a?'Could not find element. ':'')+(s.playState === 0?'playState bad, 0?':'playState = '+s.playState+', OK'));

          return false;

        }*/

      }

      return isNew;

    };

    this._get_html5_duration = function() {

      var instanceOptions = s._iO,
          // if audio object exists, use its duration - else, instance option duration (if provided - it's a hack, really, and should be retired) OR null
          d = (s._a && s._a.duration ? s._a.duration * msecScale : (instanceOptions && instanceOptions.duration ? instanceOptions.duration : null)),
          result = (d && !isNaN(d) && d !== Infinity ? d : null);

      return result;

    };

    this._apply_loop = function(a, nLoops) {

      /**
       * boolean instead of "loop", for webkit? - spec says string. http://www.w3.org/TR/html-markup/audio.html#audio.attrs.loop
       * note that loop is either off or infinite under HTML5, unlike Flash which allows arbitrary loop counts to be specified.
       */

      // <d>
      if (!a.loop && nLoops > 1) {
        sm2._wD('Note: Native HTML5 looping is infinite.', 1);
      }
      // </d>

      a.loop = (nLoops > 1 ? 'loop' : '');

    };

    this._setup_html5 = function(options) {

      var instanceOptions = mixin(s._iO, options),
          a = useGlobalHTML5Audio ? globalHTML5Audio : s._a,
          dURL = decodeURI(instanceOptions.url),
          sameURL;

      /**
       * "First things first, I, Poppa..." (reset the previous state of the old sound, if playing)
       * Fixes case with devices that can only play one sound at a time
       * Otherwise, other sounds in mid-play will be terminated without warning and in a stuck state
       */

      if (useGlobalHTML5Audio) {

        if (dURL === decodeURI(lastGlobalHTML5URL)) {
          // global HTML5 audio: re-use of URL
          sameURL = true;
        }

      } else if (dURL === decodeURI(lastURL)) {

        // options URL is the same as the "last" URL, and we used (loaded) it
        sameURL = true;

      }

      if (a) {

        if (a._s) {

          if (useGlobalHTML5Audio) {

            if (a._s && a._s.playState && !sameURL) {

              // global HTML5 audio case, and loading a new URL. stop the currently-playing one.
              a._s.stop();

            }

          } else if (!useGlobalHTML5Audio && dURL === decodeURI(lastURL)) {

            // non-global HTML5 reuse case: same url, ignore request
            s._apply_loop(a, instanceOptions.loops);

            return a;

          }

        }

        if (!sameURL) {

          // don't retain onPosition() stuff with new URLs.

          if (lastURL) {
            resetProperties(false);
          }

          // assign new HTML5 URL

          a.src = instanceOptions.url;

          s.url = instanceOptions.url;

          lastURL = instanceOptions.url;

          lastGlobalHTML5URL = instanceOptions.url;

          a._called_load = false;

        }

      } else {

        if (instanceOptions.autoLoad || instanceOptions.autoPlay) {

          s._a = new Audio(instanceOptions.url);
          s._a.load();

        } else {

          // null for stupid Opera 9.64 case
          s._a = (isOpera && opera.version() < 10 ? new Audio(null) : new Audio());

        }

        // assign local reference
        a = s._a;

        a._called_load = false;

        if (useGlobalHTML5Audio) {

          globalHTML5Audio = a;

        }

      }

      s.isHTML5 = true;

      // store a ref on the track
      s._a = a;

      // store a ref on the audio
      a._s = s;

      add_html5_events();

      s._apply_loop(a, instanceOptions.loops);

      if (instanceOptions.autoLoad || instanceOptions.autoPlay) {

        s.load();

      } else {

        // early HTML5 implementation (non-standard)
        a.autobuffer = false;

        // standard ('none' is also an option.)
        a.preload = 'auto';

      }

      return a;

    };

    add_html5_events = function() {

      if (s._a._added_events) return false;

      var f;

      function add(oEvt, oFn, bCapture) {
        return s._a ? s._a.addEventListener(oEvt, oFn, bCapture || false) : null;
      }

      s._a._added_events = true;

      for (f in html5_events) {
        if (html5_events.hasOwnProperty(f)) {
          add(f, html5_events[f]);
        }
      }

      return true;

    };

    remove_html5_events = function() {

      // Remove event listeners

      var f;

      function remove(oEvt, oFn, bCapture) {
        return (s._a ? s._a.removeEventListener(oEvt, oFn, bCapture || false) : null);
      }

      sm2._wD(s.id + ': Removing event listeners');
      s._a._added_events = false;

      for (f in html5_events) {
        if (html5_events.hasOwnProperty(f)) {
          remove(f, html5_events[f]);
        }
      }

    };

    /**
     * Pseudo-private event internals
     * ------------------------------
     */

    this._onload = function(nSuccess) {

      var fN,
          // check for duration to prevent false positives from flash 8 when loading from cache.
          loadOK = !!nSuccess || (!s.isHTML5 && fV === 8 && s.duration);

      // <d>
      fN = s.id + ': ';
      sm2._wD(fN + (loadOK ? 'onload()' : 'Failed to load / invalid sound?' + (!s.duration ? ' Zero-length duration reported.' : ' -') + ' (' + s.url + ')'), (loadOK ? 1 : 2));

      if (!loadOK && !s.isHTML5) {
        if (sm2.sandbox.noRemote === true) {
          sm2._wD(fN + str('noNet'), 1);
        }
        if (sm2.sandbox.noLocal === true) {
          sm2._wD(fN + str('noLocal'), 1);
        }
      }
      // </d>

      s.loaded = loadOK;
      s.readyState = (loadOK ? 3 : 2);
      s._onbufferchange(0);

      if (!loadOK && !s.isHTML5) {
        // note: no error code from Flash.
        s._onerror();
      }

      if (s._iO.onload) {
        wrapCallback(s, function() {
          s._iO.onload.apply(s, [loadOK]);
        });
      }

      return true;

    };

    this._onerror = function(errorCode, description) {

      // https://html.spec.whatwg.org/multipage/embedded-content.html#error-codes
      if (s._iO.onerror) {
        wrapCallback(s, function() {
          s._iO.onerror.apply(s, [errorCode, description]);
        });
      }

    };

    this._onbufferchange = function(nIsBuffering) {

      // ignore if not playing
      if (s.playState === 0) return false;

      if ((nIsBuffering && s.isBuffering) || (!nIsBuffering && !s.isBuffering)) return false;

      s.isBuffering = (nIsBuffering === 1);

      if (s._iO.onbufferchange) {
        sm2._wD(s.id + ': Buffer state change: ' + nIsBuffering);
        s._iO.onbufferchange.apply(s, [nIsBuffering]);
      }

      return true;

    };

    /**
     * Playback may have stopped due to buffering, or related reason.
     * This state can be encountered on iOS < 6 when auto-play is blocked.
     */

    this._onsuspend = function() {

      if (s._iO.onsuspend) {
        sm2._wD(s.id + ': Playback suspended');
        s._iO.onsuspend.apply(s);
      }

      return true;

    };

    /**
     * flash 9/movieStar + RTMP-only method, should fire only once at most
     * at this point we just recreate failed sounds rather than trying to reconnect
     */

    this._onfailure = function(msg, level, code) {

      s.failures++;
      sm2._wD(s.id + ': Failure (' + s.failures + '): ' + msg);

      if (s._iO.onfailure && s.failures === 1) {
        s._iO.onfailure(msg, level, code);
      } else {
        sm2._wD(s.id + ': Ignoring failure');
      }

    };

    /**
     * flash 9/movieStar + RTMP-only method for unhandled warnings/exceptions from Flash
     * e.g., RTMP "method missing" warning (non-fatal) for getStreamLength on server
     */

    this._onwarning = function(msg, level, code) {

      if (s._iO.onwarning) {
        s._iO.onwarning(msg, level, code);
      }

    };

    this._onfinish = function() {

      // store local copy before it gets trashed...
      var io_onfinish = s._iO.onfinish;

      s._onbufferchange(0);
      s._resetOnPosition(0);

      // reset some state items
      if (s.instanceCount) {

        s.instanceCount--;

        if (!s.instanceCount) {

          // remove onPosition listeners, if any
          detachOnPosition();

          // reset instance options
          s.playState = 0;
          s.paused = false;
          s.instanceCount = 0;
          s.instanceOptions = {};
          s._iO = {};
          stop_html5_timer();

          // reset position, too
          if (s.isHTML5) {
            s.position = 0;
          }

        }

        if (!s.instanceCount || s._iO.multiShotEvents) {
          // fire onfinish for last, or every instance
          if (io_onfinish) {
            sm2._wD(s.id + ': onfinish()');
            wrapCallback(s, function() {
              io_onfinish.apply(s);
            });
          }
        }

      }

    };

    this._whileloading = function(nBytesLoaded, nBytesTotal, nDuration, nBufferLength) {

      var instanceOptions = s._iO;

      s.bytesLoaded = nBytesLoaded;
      s.bytesTotal = nBytesTotal;
      s.duration = Math.floor(nDuration);
      s.bufferLength = nBufferLength;

      if (!s.isHTML5 && !instanceOptions.isMovieStar) {

        if (instanceOptions.duration) {
          // use duration from options, if specified and larger. nobody should be specifying duration in options, actually, and it should be retired.
          s.durationEstimate = (s.duration > instanceOptions.duration) ? s.duration : instanceOptions.duration;
        } else {
          s.durationEstimate = parseInt((s.bytesTotal / s.bytesLoaded) * s.duration, 10);
        }

      } else {

        s.durationEstimate = s.duration;

      }

      // for flash, reflect sequential-load-style buffering
      if (!s.isHTML5) {
        s.buffered = [{
          start: 0,
          end: s.duration
        }];
      }

      // allow whileloading to fire even if "load" fired under HTML5, due to HTTP range/partials
      if ((s.readyState !== 3 || s.isHTML5) && instanceOptions.whileloading) {
        instanceOptions.whileloading.apply(s);
      }

    };

    this._whileplaying = function(nPosition, oPeakData, oWaveformDataLeft, oWaveformDataRight, oEQData) {

      var instanceOptions = s._iO,
          eqLeft;

      // flash safety net
      if (isNaN(nPosition) || nPosition === null) return false;

      // Safari HTML5 play() may return small -ve values when starting from position: 0, eg. -50.120396875. Unexpected/invalid per W3, I think. Normalize to 0.
      s.position = Math.max(0, nPosition);

      s._processOnPosition();

      if (!s.isHTML5 && fV > 8) {

        if (instanceOptions.usePeakData && oPeakData !== _undefined && oPeakData) {
          s.peakData = {
            left: oPeakData.leftPeak,
            right: oPeakData.rightPeak
          };
        }

        if (instanceOptions.useWaveformData && oWaveformDataLeft !== _undefined && oWaveformDataLeft) {
          s.waveformData = {
            left: oWaveformDataLeft.split(','),
            right: oWaveformDataRight.split(',')
          };
        }

        if (instanceOptions.useEQData) {
          if (oEQData !== _undefined && oEQData && oEQData.leftEQ) {
            eqLeft = oEQData.leftEQ.split(',');
            s.eqData = eqLeft;
            s.eqData.left = eqLeft;
            if (oEQData.rightEQ !== _undefined && oEQData.rightEQ) {
              s.eqData.right = oEQData.rightEQ.split(',');
            }
          }
        }

      }

      if (s.playState === 1) {

        // special case/hack: ensure buffering is false if loading from cache (and not yet started)
        if (!s.isHTML5 && fV === 8 && !s.position && s.isBuffering) {
          s._onbufferchange(0);
        }

        if (instanceOptions.whileplaying) {
          // flash may call after actual finish
          instanceOptions.whileplaying.apply(s);
        }

      }

      return true;

    };

    this._oncaptiondata = function(oData) {

      /**
       * internal: flash 9 + NetStream (MovieStar/RTMP-only) feature
       *
       * @param {object} oData
       */

      sm2._wD(s.id + ': Caption data received.');

      s.captiondata = oData;

      if (s._iO.oncaptiondata) {
        s._iO.oncaptiondata.apply(s, [oData]);
      }

    };

    this._onmetadata = function(oMDProps, oMDData) {

      /**
       * internal: flash 9 + NetStream (MovieStar/RTMP-only) feature
       * RTMP may include song title, MovieStar content may include encoding info
       *
       * @param {array} oMDProps (names)
       * @param {array} oMDData (values)
       */

      sm2._wD(s.id + ': Metadata received.');

      var oData = {}, i, j;

      for (i = 0, j = oMDProps.length; i < j; i++) {
        oData[oMDProps[i]] = oMDData[i];
      }

      s.metadata = oData;

      if (s._iO.onmetadata) {
        s._iO.onmetadata.call(s, s.metadata);
      }

    };

    this._onid3 = function(oID3Props, oID3Data) {

      /**
       * internal: flash 8 + flash 9 ID3 feature
       * may include artist, song title etc.
       *
       * @param {array} oID3Props (names)
       * @param {array} oID3Data (values)
       */

      sm2._wD(s.id + ': ID3 data received.');

      var oData = [], i, j;

      for (i = 0, j = oID3Props.length; i < j; i++) {
        oData[oID3Props[i]] = oID3Data[i];
      }

      s.id3 = mixin(s.id3, oData);

      if (s._iO.onid3) {
        s._iO.onid3.apply(s);
      }

    };

    // flash/RTMP-only

    this._onconnect = function(bSuccess) {

      bSuccess = (bSuccess === 1);
      sm2._wD(s.id + ': ' + (bSuccess ? 'Connected.' : 'Failed to connect? - ' + s.url), (bSuccess ? 1 : 2));
      s.connected = bSuccess;

      if (bSuccess) {

        s.failures = 0;

        if (idCheck(s.id)) {
          if (s.getAutoPlay()) {
            // only update the play state if auto playing
            s.play(_undefined, s.getAutoPlay());
          } else if (s._iO.autoLoad) {
            s.load();
          }
        }

        if (s._iO.onconnect) {
          s._iO.onconnect.apply(s, [bSuccess]);
        }

      }

    };

    this._ondataerror = function(sError) {

      // flash 9 wave/eq data handler
      // hack: called at start, and end from flash at/after onfinish()
      if (s.playState > 0) {
        sm2._wD(s.id + ': Data error: ' + sError);
        if (s._iO.ondataerror) {
          s._iO.ondataerror.apply(s);
        }
      }

    };

    // <d>
    this._debug();
    // </d>

  }; // SMSound()

  /**
   * Private SoundManager internals
   * ------------------------------
   */

  getDocument = function() {

    return (doc.body || doc.getElementsByTagName('div')[0]);

  };

  id = function(sID) {

    return doc.getElementById(sID);

  };

  mixin = function(oMain, oAdd) {

    // non-destructive merge
    var o1 = (oMain || {}), o2, o;

    // if unspecified, o2 is the default options object
    o2 = (oAdd === _undefined ? sm2.defaultOptions : oAdd);

    for (o in o2) {

      if (o2.hasOwnProperty(o) && o1[o] === _undefined) {

        if (typeof o2[o] !== 'object' || o2[o] === null) {

          // assign directly
          o1[o] = o2[o];

        } else {

          // recurse through o2
          o1[o] = mixin(o1[o], o2[o]);

        }

      }

    }

    return o1;

  };

  wrapCallback = function(oSound, callback) {

    /**
     * 03/03/2013: Fix for Flash Player 11.6.602.171 + Flash 8 (flashVersion = 8) SWF issue
     * setTimeout() fix for certain SMSound callbacks like onload() and onfinish(), where subsequent calls like play() and load() fail when Flash Player 11.6.602.171 is installed, and using soundManager with flashVersion = 8 (which is the default).
     * Not sure of exact cause. Suspect race condition and/or invalid (NaN-style) position argument trickling down to the next JS -> Flash _start() call, in the play() case.
     * Fix: setTimeout() to yield, plus safer null / NaN checking on position argument provided to Flash.
     * https://getsatisfaction.com/schillmania/topics/recent_chrome_update_seems_to_have_broken_my_sm2_audio_player
     */
    if (!oSound.isHTML5 && fV === 8) {
      window.setTimeout(callback, 0);
    } else {
      callback();
    }

  };

  // additional soundManager properties that soundManager.setup() will accept

  extraOptions = {
    onready: 1,
    ontimeout: 1,
    defaultOptions: 1,
    flash9Options: 1,
    movieStarOptions: 1
  };

  assign = function(o, oParent) {

    /**
     * recursive assignment of properties, soundManager.setup() helper
     * allows property assignment based on whitelist
     */

    var i,
        result = true,
        hasParent = (oParent !== _undefined),
        setupOptions = sm2.setupOptions,
        bonusOptions = extraOptions;

    // <d>

    // if soundManager.setup() called, show accepted parameters.

    if (o === _undefined) {

      result = [];

      for (i in setupOptions) {

        if (setupOptions.hasOwnProperty(i)) {
          result.push(i);
        }

      }

      for (i in bonusOptions) {

        if (bonusOptions.hasOwnProperty(i)) {

          if (typeof sm2[i] === 'object') {
            result.push(i + ': {...}');
          } else if (sm2[i] instanceof Function) {
            result.push(i + ': function() {...}');
          } else {
            result.push(i);
          }

        }

      }

      sm2._wD(str('setup', result.join(', ')));

      return false;

    }

    // </d>

    for (i in o) {

      if (o.hasOwnProperty(i)) {

        // if not an {object} we want to recurse through...

        if (typeof o[i] !== 'object' || o[i] === null || o[i] instanceof Array || o[i] instanceof RegExp) {

          // check "allowed" options

          if (hasParent && bonusOptions[oParent] !== _undefined) {

            // valid recursive / nested object option, eg., { defaultOptions: { volume: 50 } }
            sm2[oParent][i] = o[i];

          } else if (setupOptions[i] !== _undefined) {

            // special case: assign to setupOptions object, which soundManager property references
            sm2.setupOptions[i] = o[i];

            // assign directly to soundManager, too
            sm2[i] = o[i];

          } else if (bonusOptions[i] === _undefined) {

            // invalid or disallowed parameter. complain.
            complain(str((sm2[i] === _undefined ? 'setupUndef' : 'setupError'), i), 2);

            result = false;

          } else if (sm2[i] instanceof Function) {

            /**
             * valid extraOptions (bonusOptions) parameter.
             * is it a method, like onready/ontimeout? call it.
             * multiple parameters should be in an array, eg. soundManager.setup({onready: [myHandler, myScope]});
             */
            sm2[i].apply(sm2, (o[i] instanceof Array ? o[i] : [o[i]]));

          } else {

            // good old-fashioned direct assignment
            sm2[i] = o[i];

          }

        } else if (bonusOptions[i] === _undefined) {

          // recursion case, eg., { defaultOptions: { ... } }

          // invalid or disallowed parameter. complain.
          complain(str((sm2[i] === _undefined ? 'setupUndef' : 'setupError'), i), 2);

          result = false;

        } else {

          // recurse through object
          return assign(o[i], i);

        }

      }

    }

    return result;

  };

  function preferFlashCheck(kind) {

    // whether flash should play a given type
    return (sm2.preferFlash && hasFlash && !sm2.ignoreFlash && (sm2.flash[kind] !== _undefined && sm2.flash[kind]));

  }

  /**
   * Internal DOM2-level event helpers
   * ---------------------------------
   */

  event = (function() {

    // normalize event methods
    var old = (window.attachEvent),
    evt = {
      add: (old ? 'attachEvent' : 'addEventListener'),
      remove: (old ? 'detachEvent' : 'removeEventListener')
    };

    // normalize "on" event prefix, optional capture argument
    function getArgs(oArgs) {

      var args = slice.call(oArgs),
          len = args.length;

      if (old) {
        // prefix
        args[1] = 'on' + args[1];
        if (len > 3) {
          // no capture
          args.pop();
        }
      } else if (len === 3) {
        args.push(false);
      }

      return args;

    }

    function apply(args, sType) {

      // normalize and call the event method, with the proper arguments
      var element = args.shift(),
          method = [evt[sType]];

      if (old) {
        // old IE can't do apply().
        element[method](args[0], args[1]);
      } else {
        element[method].apply(element, args);
      }

    }

    function add() {
      apply(getArgs(arguments), 'add');
    }

    function remove() {
      apply(getArgs(arguments), 'remove');
    }

    return {
      add: add,
      remove: remove
    };

  }());

  /**
   * Internal HTML5 event handling
   * -----------------------------
   */

  function html5_event(oFn) {

    // wrap html5 event handlers so we don't call them on destroyed and/or unloaded sounds

    return function(e) {

      var s = this._s,
          result;

      if (!s || !s._a) {
        // <d>
        if (s && s.id) {
          sm2._wD(s.id + ': Ignoring ' + e.type);
        } else {
          sm2._wD(h5 + 'Ignoring ' + e.type);
        }
        // </d>
        result = null;
      } else {
        result = oFn.call(this, e);
      }

      return result;

    };

  }

  html5_events = {

    // HTML5 event-name-to-handler map

    abort: html5_event(function() {

      sm2._wD(this._s.id + ': abort');

    }),

    // enough has loaded to play

    canplay: html5_event(function() {

      var s = this._s,
          position1K;

      if (s._html5_canplay) {
        // this event has already fired. ignore.
        return;
      }

      s._html5_canplay = true;
      sm2._wD(s.id + ': canplay');
      s._onbufferchange(0);

      // position according to instance options
      position1K = (s._iO.position !== _undefined && !isNaN(s._iO.position) ? s._iO.position / msecScale : null);

      // set the position if position was provided before the sound loaded
      if (this.currentTime !== position1K) {
        sm2._wD(s.id + ': canplay: Setting position to ' + position1K);
        try {
          this.currentTime = position1K;
        } catch(ee) {
          sm2._wD(s.id + ': canplay: Setting position of ' + position1K + ' failed: ' + ee.message, 2);
        }
      }

      // hack for HTML5 from/to case
      if (s._iO._oncanplay) {
        s._iO._oncanplay();
      }

    }),

    canplaythrough: html5_event(function() {

      var s = this._s;

      if (!s.loaded) {
        s._onbufferchange(0);
        s._whileloading(s.bytesLoaded, s.bytesTotal, s._get_html5_duration());
        s._onload(true);
      }

    }),

    durationchange: html5_event(function() {

      // durationchange may fire at various times, probably the safest way to capture accurate/final duration.

      var s = this._s,
          duration;

      duration = s._get_html5_duration();

      if (!isNaN(duration) && duration !== s.duration) {

        sm2._wD(this._s.id + ': durationchange (' + duration + ')' + (s.duration ? ', previously ' + s.duration : ''));

        s.durationEstimate = s.duration = duration;

      }

    }),

    // TODO: Reserved for potential use
    /*
    emptied: html5_event(function() {

      sm2._wD(this._s.id + ': emptied');

    }),
    */

    ended: html5_event(function() {

      var s = this._s;

      sm2._wD(s.id + ': ended');

      s._onfinish();

    }),

    error: html5_event(function() {

      var description = (html5ErrorCodes[this.error.code] || null);
      sm2._wD(this._s.id + ': HTML5 error, code ' + this.error.code + (description ? ' (' + description + ')' : ''));
      this._s._onload(false);
      this._s._onerror(this.error.code, description);

    }),

    loadeddata: html5_event(function() {

      var s = this._s;

      sm2._wD(s.id + ': loadeddata');

      // safari seems to nicely report progress events, eventually totalling 100%
      if (!s._loaded && !isSafari) {
        s.duration = s._get_html5_duration();
      }

    }),

    loadedmetadata: html5_event(function() {

      sm2._wD(this._s.id + ': loadedmetadata');

    }),

    loadstart: html5_event(function() {

      sm2._wD(this._s.id + ': loadstart');
      // assume buffering at first
      this._s._onbufferchange(1);

    }),

    play: html5_event(function() {

      // sm2._wD(this._s.id + ': play()');
      // once play starts, no buffering
      this._s._onbufferchange(0);

    }),

    playing: html5_event(function() {

      sm2._wD(this._s.id + ': playing ' + String.fromCharCode(9835));
      // once play starts, no buffering
      this._s._onbufferchange(0);

    }),

    progress: html5_event(function(e) {

      // note: can fire repeatedly after "loaded" event, due to use of HTTP range/partials

      var s = this._s,
          i, j, progStr, buffered = 0,
          isProgress = (e.type === 'progress'),
          ranges = e.target.buffered,
          // firefox 3.6 implements e.loaded/total (bytes)
          loaded = (e.loaded || 0),
          total = (e.total || 1);

      // reset the "buffered" (loaded byte ranges) array
      s.buffered = [];

      if (ranges && ranges.length) {

        // if loaded is 0, try TimeRanges implementation as % of load
        // https://developer.mozilla.org/en/DOM/TimeRanges

        // re-build "buffered" array
        // HTML5 returns seconds. SM2 API uses msec for setPosition() etc., whether Flash or HTML5.
        for (i = 0, j = ranges.length; i < j; i++) {
          s.buffered.push({
            start: ranges.start(i) * msecScale,
            end: ranges.end(i) * msecScale
          });
        }

        // use the last value locally
        buffered = (ranges.end(0) - ranges.start(0)) * msecScale;

        // linear case, buffer sum; does not account for seeking and HTTP partials / byte ranges
        loaded = Math.min(1, buffered / (e.target.duration * msecScale));

        // <d>
        if (isProgress && ranges.length > 1) {
          progStr = [];
          j = ranges.length;
          for (i = 0; i < j; i++) {
            progStr.push((e.target.buffered.start(i) * msecScale) + '-' + (e.target.buffered.end(i) * msecScale));
          }
          sm2._wD(this._s.id + ': progress, timeRanges: ' + progStr.join(', '));
        }

        if (isProgress && !isNaN(loaded)) {
          sm2._wD(this._s.id + ': progress, ' + Math.floor(loaded * 100) + '% loaded');
        }
        // </d>

      }

      if (!isNaN(loaded)) {

        // TODO: prevent calls with duplicate values.
        s._whileloading(loaded, total, s._get_html5_duration());
        if (loaded && total && loaded === total) {
          // in case "onload" doesn't fire (eg. gecko 1.9.2)
          html5_events.canplaythrough.call(this, e);
        }

      }

    }),

    ratechange: html5_event(function() {

      sm2._wD(this._s.id + ': ratechange');

    }),

    suspend: html5_event(function(e) {

      // download paused/stopped, may have finished (eg. onload)
      var s = this._s;

      sm2._wD(this._s.id + ': suspend');
      html5_events.progress.call(this, e);
      s._onsuspend();

    }),

    stalled: html5_event(function() {

      sm2._wD(this._s.id + ': stalled');

    }),

    timeupdate: html5_event(function() {

      this._s._onTimer();

    }),

    waiting: html5_event(function() {

      var s = this._s;

      // see also: seeking
      sm2._wD(this._s.id + ': waiting');

      // playback faster than download rate, etc.
      s._onbufferchange(1);

    })

  };

  html5OK = function(iO) {

    // playability test based on URL or MIME type

    var result;

    if (!iO || (!iO.type && !iO.url && !iO.serverURL)) {

      // nothing to check
      result = false;

    } else if (iO.serverURL || (iO.type && preferFlashCheck(iO.type))) {

      // RTMP, or preferring flash
      result = false;

    } else {

      // Use type, if specified. Pass data: URIs to HTML5. If HTML5-only mode, no other options, so just give 'er
      result = ((iO.type ? html5CanPlay({ type: iO.type }) : html5CanPlay({ url: iO.url }) || sm2.html5Only || iO.url.match(/data:/i)));

    }

    return result;

  };

  html5Unload = function(oAudio) {

    /**
     * Internal method: Unload media, and cancel any current/pending network requests.
     * Firefox can load an empty URL, which allegedly destroys the decoder and stops the download.
     * https://developer.mozilla.org/En/Using_audio_and_video_in_Firefox#Stopping_the_download_of_media
     * However, Firefox has been seen loading a relative URL from '' and thus requesting the hosting page on unload.
     * Other UA behaviour is unclear, so everyone else gets an about:blank-style URL.
     */

    var url;

    if (oAudio) {

      // Firefox and Chrome accept short WAVe data: URIs. Chome dislikes audio/wav, but accepts audio/wav for data: MIME.
      // Desktop Safari complains / fails on data: URI, so it gets about:blank.
      url = (isSafari ? emptyURL : (sm2.html5.canPlayType('audio/wav') ? emptyWAV : emptyURL));

      oAudio.src = url;

      // reset some state, too
      if (oAudio._called_unload !== _undefined) {
        oAudio._called_load = false;
      }

    }

    if (useGlobalHTML5Audio) {

      // ensure URL state is trashed, also
      lastGlobalHTML5URL = null;

    }

    return url;

  };

  html5CanPlay = function(o) {

    /**
     * Try to find MIME, test and return truthiness
     * o = {
     *  url: '/path/to/an.mp3',
     *  type: 'audio/mp3'
     * }
     */

    if (!sm2.useHTML5Audio || !sm2.hasHTML5) return false;

    var url = (o.url || null),
        mime = (o.type || null),
        aF = sm2.audioFormats,
        result,
        offset,
        fileExt,
        item;

    // account for known cases like audio/mp3

    if (mime && sm2.html5[mime] !== _undefined) return (sm2.html5[mime] && !preferFlashCheck(mime));

    if (!html5Ext) {

      html5Ext = [];

      for (item in aF) {

        if (aF.hasOwnProperty(item)) {

          html5Ext.push(item);

          if (aF[item].related) {
            html5Ext = html5Ext.concat(aF[item].related);
          }

        }

      }

      html5Ext = new RegExp('\\.(' + html5Ext.join('|') + ')(\\?.*)?$', 'i');

    }

    // TODO: Strip URL queries, etc.
    fileExt = (url ? url.toLowerCase().match(html5Ext) : null);

    if (!fileExt || !fileExt.length) {

      if (!mime) {

        result = false;

      } else {

        // audio/mp3 -> mp3, result should be known
        offset = mime.indexOf(';');

        // strip "audio/X; codecs..."
        fileExt = (offset !== -1 ? mime.substr(0, offset) : mime).substr(6);

      }

    } else {

      // match the raw extension name - "mp3", for example
      fileExt = fileExt[1];

    }

    if (fileExt && sm2.html5[fileExt] !== _undefined) {

      // result known
      result = (sm2.html5[fileExt] && !preferFlashCheck(fileExt));

    } else {

      mime = 'audio/' + fileExt;
      result = sm2.html5.canPlayType({ type: mime });

      sm2.html5[fileExt] = result;

      // sm2._wD('canPlayType, found result: ' + result);
      result = (result && sm2.html5[mime] && !preferFlashCheck(mime));
    }

    return result;

  };

  testHTML5 = function() {

    /**
     * Internal: Iterates over audioFormats, determining support eg. audio/mp3, audio/mpeg and so on
     * assigns results to html5[] and flash[].
     */

    if (!sm2.useHTML5Audio || !sm2.hasHTML5) {

      // without HTML5, we need Flash.
      sm2.html5.usingFlash = true;
      needsFlash = true;

      return false;

    }

    // double-whammy: Opera 9.64 throws WRONG_ARGUMENTS_ERR if no parameter passed to Audio(), and Webkit + iOS happily tries to load "null" as a URL. :/
    var a = (Audio !== _undefined ? (isOpera && opera.version() < 10 ? new Audio(null) : new Audio()) : null),
        item, lookup, support = {}, aF, i;

    function cp(m) {

      var canPlay, j,
          result = false,
          isOK = false;

      if (!a || typeof a.canPlayType !== 'function') return result;

      if (m instanceof Array) {

        // iterate through all mime types, return any successes

        for (i = 0, j = m.length; i < j; i++) {

          if (sm2.html5[m[i]] || a.canPlayType(m[i]).match(sm2.html5Test)) {

            isOK = true;
            sm2.html5[m[i]] = true;

            // note flash support, too
            sm2.flash[m[i]] = !!(m[i].match(flashMIME));

          }

        }

        result = isOK;

      } else {

        canPlay = (a && typeof a.canPlayType === 'function' ? a.canPlayType(m) : false);
        result = !!(canPlay && (canPlay.match(sm2.html5Test)));

      }

      return result;

    }

    // test all registered formats + codecs

    aF = sm2.audioFormats;

    for (item in aF) {

      if (aF.hasOwnProperty(item)) {

        lookup = 'audio/' + item;

        support[item] = cp(aF[item].type);

        // write back generic type too, eg. audio/mp3
        support[lookup] = support[item];

        // assign flash
        if (item.match(flashMIME)) {

          sm2.flash[item] = true;
          sm2.flash[lookup] = true;

        } else {

          sm2.flash[item] = false;
          sm2.flash[lookup] = false;

        }

        // assign result to related formats, too

        if (aF[item] && aF[item].related) {

          for (i = aF[item].related.length - 1; i >= 0; i--) {

            // eg. audio/m4a
            support['audio/' + aF[item].related[i]] = support[item];
            sm2.html5[aF[item].related[i]] = support[item];
            sm2.flash[aF[item].related[i]] = support[item];

          }

        }

      }

    }

    support.canPlayType = (a ? cp : null);
    sm2.html5 = mixin(sm2.html5, support);

    sm2.html5.usingFlash = featureCheck();
    needsFlash = sm2.html5.usingFlash;

    return true;

  };

  strings = {

    // <d>
    notReady: 'Unavailable - wait until onready() has fired.',
    notOK: 'Audio support is not available.',
    domError: sm + 'exception caught while appending SWF to DOM.',
    spcWmode: 'Removing wmode, preventing known SWF loading issue(s)',
    swf404: smc + 'Verify that %s is a valid path.',
    tryDebug: 'Try ' + sm + '.debugFlash = true for more security details (output goes to SWF.)',
    checkSWF: 'See SWF output for more debug info.',
    localFail: smc + 'Non-HTTP page (' + doc.location.protocol + ' URL?) Review Flash player security settings for this special case:\nhttp://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html\nMay need to add/allow path, eg. c:/sm2/ or /users/me/sm2/',
    waitFocus: smc + 'Special case: Waiting for SWF to load with window focus...',
    waitForever: smc + 'Waiting indefinitely for Flash (will recover if unblocked)...',
    waitSWF: smc + 'Waiting for 100% SWF load...',
    needFunction: smc + 'Function object expected for %s',
    badID: 'Sound ID "%s" should be a string, starting with a non-numeric character',
    currentObj: smc + '_debug(): Current sound objects',
    waitOnload: smc + 'Waiting for window.onload()',
    docLoaded: smc + 'Document already loaded',
    onload: smc + 'initComplete(): calling soundManager.onload()',
    onloadOK: sm + '.onload() complete',
    didInit: smc + 'init(): Already called?',
    secNote: 'Flash security note: Network/internet URLs will not load due to security restrictions. Access can be configured via Flash Player Global Security Settings Page: http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager04.html',
    badRemove: smc + 'Failed to remove Flash node.',
    shutdown: sm + '.disable(): Shutting down',
    queue: smc + 'Queueing %s handler',
    smError: 'SMSound.load(): Exception: JS-Flash communication failed, or JS error.',
    fbTimeout: 'No flash response, applying .' + swfCSS.swfTimedout + ' CSS...',
    fbLoaded: 'Flash loaded',
    fbHandler: smc + 'flashBlockHandler()',
    manURL: 'SMSound.load(): Using manually-assigned URL',
    onURL: sm + '.load(): current URL already assigned.',
    badFV: sm + '.flashVersion must be 8 or 9. "%s" is invalid. Reverting to %s.',
    as2loop: 'Note: Setting stream:false so looping can work (flash 8 limitation)',
    noNSLoop: 'Note: Looping not implemented for MovieStar formats',
    needfl9: 'Note: Switching to flash 9, required for MP4 formats.',
    mfTimeout: 'Setting flashLoadTimeout = 0 (infinite) for off-screen, mobile flash case',
    needFlash: smc + 'Fatal error: Flash is needed to play some required formats, but is not available.',
    gotFocus: smc + 'Got window focus.',
    policy: 'Enabling usePolicyFile for data access',
    setup: sm + '.setup(): allowed parameters: %s',
    setupError: sm + '.setup(): "%s" cannot be assigned with this method.',
    setupUndef: sm + '.setup(): Could not find option "%s"',
    setupLate: sm + '.setup(): url, flashVersion and html5Test property changes will not take effect until reboot().',
    noURL: smc + 'Flash URL required. Call soundManager.setup({url:...}) to get started.',
    sm2Loaded: 'SoundManager 2: Ready. ' + String.fromCharCode(10003),
    reset: sm + '.reset(): Removing event callbacks',
    mobileUA: 'Mobile UA detected, preferring HTML5 by default.',
    globalHTML5: 'Using singleton HTML5 Audio() pattern for this device.',
    ignoreMobile: 'Ignoring mobile restrictions for this device.'
    // </d>

  };

  str = function() {

    // internal string replace helper.
    // arguments: o [,items to replace]
    // <d>

    var args,
        i, j, o,
        sstr;

    // real array, please
    args = slice.call(arguments);

    // first argument
    o = args.shift();

    sstr = (strings && strings[o] ? strings[o] : '');

    if (sstr && args && args.length) {
      for (i = 0, j = args.length; i < j; i++) {
        sstr = sstr.replace('%s', args[i]);
      }
    }

    return sstr;
    // </d>

  };

  loopFix = function(sOpt) {

    // flash 8 requires stream = false for looping to work
    if (fV === 8 && sOpt.loops > 1 && sOpt.stream) {
      _wDS('as2loop');
      sOpt.stream = false;
    }

    return sOpt;

  };

  policyFix = function(sOpt, sPre) {

    if (sOpt && !sOpt.usePolicyFile && (sOpt.onid3 || sOpt.usePeakData || sOpt.useWaveformData || sOpt.useEQData)) {
      sm2._wD((sPre || '') + str('policy'));
      sOpt.usePolicyFile = true;
    }

    return sOpt;

  };

  complain = function(sMsg) {

    // <d>
    if (hasConsole && console.warn !== _undefined) {
      console.warn(sMsg);
    } else {
      sm2._wD(sMsg);
    }
    // </d>

  };

  doNothing = function() {

    return false;

  };

  disableObject = function(o) {

    var oProp;

    for (oProp in o) {
      if (o.hasOwnProperty(oProp) && typeof o[oProp] === 'function') {
        o[oProp] = doNothing;
      }
    }

    oProp = null;

  };

  failSafely = function(bNoDisable) {

    // general failure exception handler

    if (bNoDisable === _undefined) {
      bNoDisable = false;
    }

    if (disabled || bNoDisable) {
      sm2.disable(bNoDisable);
    }

  };

  normalizeMovieURL = function(movieURL) {

    var urlParams = null, url;

    if (movieURL) {

      if (movieURL.match(/\.swf(\?.*)?$/i)) {

        urlParams = movieURL.substr(movieURL.toLowerCase().lastIndexOf('.swf?') + 4);

        // assume user knows what they're doing
        if (urlParams) return movieURL;

      } else if (movieURL.lastIndexOf('/') !== movieURL.length - 1) {

        // append trailing slash, if needed
        movieURL += '/';

      }

    }

    url = (movieURL && movieURL.lastIndexOf('/') !== -1 ? movieURL.substr(0, movieURL.lastIndexOf('/') + 1) : './') + sm2.movieURL;

    if (sm2.noSWFCache) {
      url += ('?ts=' + new Date().getTime());
    }

    return url;

  };

  setVersionInfo = function() {

    // short-hand for internal use

    fV = parseInt(sm2.flashVersion, 10);

    if (fV !== 8 && fV !== 9) {
      sm2._wD(str('badFV', fV, defaultFlashVersion));
      sm2.flashVersion = fV = defaultFlashVersion;
    }

    // debug flash movie, if applicable

    var isDebug = (sm2.debugMode || sm2.debugFlash ? '_debug.swf' : '.swf');

    if (sm2.useHTML5Audio && !sm2.html5Only && sm2.audioFormats.mp4.required && fV < 9) {
      sm2._wD(str('needfl9'));
      sm2.flashVersion = fV = 9;
    }

    sm2.version = sm2.versionNumber + (sm2.html5Only ? ' (HTML5-only mode)' : (fV === 9 ? ' (AS3/Flash 9)' : ' (AS2/Flash 8)'));

    // set up default options
    if (fV > 8) {

      // +flash 9 base options
      sm2.defaultOptions = mixin(sm2.defaultOptions, sm2.flash9Options);
      sm2.features.buffering = true;

      // +moviestar support
      sm2.defaultOptions = mixin(sm2.defaultOptions, sm2.movieStarOptions);
      sm2.filePatterns.flash9 = new RegExp('\\.(mp3|' + netStreamTypes.join('|') + ')(\\?.*)?$', 'i');
      sm2.features.movieStar = true;

    } else {

      sm2.features.movieStar = false;

    }

    // regExp for flash canPlay(), etc.
    sm2.filePattern = sm2.filePatterns[(fV !== 8 ? 'flash9' : 'flash8')];

    // if applicable, use _debug versions of SWFs
    sm2.movieURL = (fV === 8 ? 'soundmanager2.swf' : 'soundmanager2_flash9.swf').replace('.swf', isDebug);

    sm2.features.peakData = sm2.features.waveformData = sm2.features.eqData = (fV > 8);

  };

  setPolling = function(bPolling, bHighPerformance) {

    if (!flash) {
      return;
    }

    flash._setPolling(bPolling, bHighPerformance);

  };

  initDebug = function() {

    // starts debug mode, creating output <div> for UAs without console object

    // allow force of debug mode via URL
    // <d>
    if (sm2.debugURLParam.test(wl)) {
      sm2.setupOptions.debugMode = sm2.debugMode = true;
    }

    if (id(sm2.debugID)) {
      return;
    }

    var oD, oDebug, oTarget, oToggle, tmp;

    if (sm2.debugMode && !id(sm2.debugID) && (!hasConsole || !sm2.useConsole || !sm2.consoleOnly)) {

      oD = doc.createElement('div');
      oD.id = sm2.debugID + '-toggle';

      oToggle = {
        position: 'fixed',
        bottom: '0px',
        right: '0px',
        width: '1.2em',
        height: '1.2em',
        lineHeight: '1.2em',
        margin: '2px',
        textAlign: 'center',
        border: '1px solid #999',
        cursor: 'pointer',
        background: '#fff',
        color: '#333',
        zIndex: 10001
      };

      oD.appendChild(doc.createTextNode('-'));
      oD.onclick = toggleDebug;
      oD.title = 'Toggle SM2 debug console';

      if (ua.match(/msie 6/i)) {
        oD.style.position = 'absolute';
        oD.style.cursor = 'hand';
      }

      for (tmp in oToggle) {
        if (oToggle.hasOwnProperty(tmp)) {
          oD.style[tmp] = oToggle[tmp];
        }
      }

      oDebug = doc.createElement('div');
      oDebug.id = sm2.debugID;
      oDebug.style.display = (sm2.debugMode ? 'block' : 'none');

      if (sm2.debugMode && !id(oD.id)) {
        try {
          oTarget = getDocument();
          oTarget.appendChild(oD);
        } catch(e2) {
          throw new Error(str('domError') + ' \n' + e2.toString());
        }
        oTarget.appendChild(oDebug);
      }

    }

    oTarget = null;
    // </d>

  };

  idCheck = this.getSoundById;

  // <d>
  _wDS = function(o, errorLevel) {

    return (!o ? '' : sm2._wD(str(o), errorLevel));

  };

  toggleDebug = function() {

    var o = id(sm2.debugID),
    oT = id(sm2.debugID + '-toggle');

    if (!o) {
      return;
    }

    if (debugOpen) {
      // minimize
      oT.innerHTML = '+';
      o.style.display = 'none';
    } else {
      oT.innerHTML = '-';
      o.style.display = 'block';
    }

    debugOpen = !debugOpen;

  };

  debugTS = function(sEventType, bSuccess, sMessage) {

    // troubleshooter debug hooks

    if (window.sm2Debugger !== _undefined) {
      try {
        sm2Debugger.handleEvent(sEventType, bSuccess, sMessage);
      } catch(e) {
        // oh well
        return false;
      }
    }

    return true;

  };
  // </d>

  getSWFCSS = function() {

    var css = [];

    if (sm2.debugMode) {
      css.push(swfCSS.sm2Debug);
    }

    if (sm2.debugFlash) {
      css.push(swfCSS.flashDebug);
    }

    if (sm2.useHighPerformance) {
      css.push(swfCSS.highPerf);
    }

    return css.join(' ');

  };

  flashBlockHandler = function() {

    // *possible* flash block situation.

    var name = str('fbHandler'),
        p = sm2.getMoviePercent(),
        css = swfCSS,
        error = {
          type: 'FLASHBLOCK'
        };

    if (sm2.html5Only) {
      // no flash, or unused
      return;
    }

    if (!sm2.ok()) {

      if (needsFlash) {
        // make the movie more visible, so user can fix
        sm2.oMC.className = getSWFCSS() + ' ' + css.swfDefault + ' ' + (p === null ? css.swfTimedout : css.swfError);
        sm2._wD(name + ': ' + str('fbTimeout') + (p ? ' (' + str('fbLoaded') + ')' : ''));
      }

      sm2.didFlashBlock = true;

      // fire onready(), complain lightly
      processOnEvents({
        type: 'ontimeout',
        ignoreInit: true,
        error: error
      });

      catchError(error);

    } else {

      // SM2 loaded OK (or recovered)

      // <d>
      if (sm2.didFlashBlock) {
        sm2._wD(name + ': Unblocked');
      }
      // </d>

      if (sm2.oMC) {
        sm2.oMC.className = [getSWFCSS(), css.swfDefault, css.swfLoaded + (sm2.didFlashBlock ? ' ' + css.swfUnblocked : '')].join(' ');
      }

    }

  };

  addOnEvent = function(sType, oMethod, oScope) {

    if (on_queue[sType] === _undefined) {
      on_queue[sType] = [];
    }

    on_queue[sType].push({
      method: oMethod,
      scope: (oScope || null),
      fired: false
    });

  };

  processOnEvents = function(oOptions) {

    // if unspecified, assume OK/error

    if (!oOptions) {
      oOptions = {
        type: (sm2.ok() ? 'onready' : 'ontimeout')
      };
    }

    // not ready yet.
    if (!didInit && oOptions && !oOptions.ignoreInit) return false;

    // invalid case
    if (oOptions.type === 'ontimeout' && (sm2.ok() || (disabled && !oOptions.ignoreInit))) return false;

    var status = {
          success: (oOptions && oOptions.ignoreInit ? sm2.ok() : !disabled)
        },

        // queue specified by type, or none
        srcQueue = (oOptions && oOptions.type ? on_queue[oOptions.type] || [] : []),

        queue = [], i, j,
        args = [status],
        canRetry = (needsFlash && !sm2.ok());

    if (oOptions.error) {
      args[0].error = oOptions.error;
    }

    for (i = 0, j = srcQueue.length; i < j; i++) {
      if (srcQueue[i].fired !== true) {
        queue.push(srcQueue[i]);
      }
    }

    if (queue.length) {

      // sm2._wD(sm + ': Firing ' + queue.length + ' ' + oOptions.type + '() item' + (queue.length === 1 ? '' : 's'));
      for (i = 0, j = queue.length; i < j; i++) {

        if (queue[i].scope) {
          queue[i].method.apply(queue[i].scope, args);
        } else {
          queue[i].method.apply(this, args);
        }

        if (!canRetry) {
          // useFlashBlock and SWF timeout case doesn't count here.
          queue[i].fired = true;

        }

      }

    }

    return true;

  };

  initUserOnload = function() {

    window.setTimeout(function() {

      if (sm2.useFlashBlock) {
        flashBlockHandler();
      }

      processOnEvents();

      // call user-defined "onload", scoped to window

      if (typeof sm2.onload === 'function') {
        _wDS('onload', 1);
        sm2.onload.apply(window);
        _wDS('onloadOK', 1);
      }

      if (sm2.waitForWindowLoad) {
        event.add(window, 'load', initUserOnload);
      }

    }, 1);

  };

  detectFlash = function() {

    /**
     * Hat tip: Flash Detect library (BSD, (C) 2007) by Carl "DocYes" S. Yestrau
     * http://featureblend.com/javascript-flash-detection-library.html / http://featureblend.com/license.txt
     */

    // this work has already been done.
    if (hasFlash !== _undefined) return hasFlash;

    var hasPlugin = false, n = navigator, obj, type, types, AX = window.ActiveXObject;

    // MS Edge 14 throws an "Unspecified Error" because n.plugins is inaccessible due to permissions
    var nP;

    try {
      nP = n.plugins;
    } catch(e) {
      nP = undefined;
    }

    if (nP && nP.length) {

      type = 'application/x-shockwave-flash';
      types = n.mimeTypes;

      if (types && types[type] && types[type].enabledPlugin && types[type].enabledPlugin.description) {
        hasPlugin = true;
      }

    } else if (AX !== _undefined && !ua.match(/MSAppHost/i)) {

      // Windows 8 Store Apps (MSAppHost) are weird (compatibility?) and won't complain here, but will barf if Flash/ActiveX object is appended to the DOM.
      try {
        obj = new AX('ShockwaveFlash.ShockwaveFlash');
      } catch(e) {
        // oh well
        obj = null;
      }

      hasPlugin = (!!obj);

      // cleanup, because it is ActiveX after all
      obj = null;

    }

    hasFlash = hasPlugin;

    return hasPlugin;

  };

  featureCheck = function() {

    var flashNeeded,
        item,
        formats = sm2.audioFormats,
        // iPhone <= 3.1 has broken HTML5 audio(), but firmware 3.2 (original iPad) + iOS4 works.
        isSpecial = (is_iDevice && !!(ua.match(/os (1|2|3_0|3_1)\s/i)));

    if (isSpecial) {

      // has Audio(), but is broken; let it load links directly.
      sm2.hasHTML5 = false;

      // ignore flash case, however
      sm2.html5Only = true;

      // hide the SWF, if present
      if (sm2.oMC) {
        sm2.oMC.style.display = 'none';
      }

    } else if (sm2.useHTML5Audio) {

        if (!sm2.html5 || !sm2.html5.canPlayType) {
          sm2._wD('SoundManager: No HTML5 Audio() support detected.');
          sm2.hasHTML5 = false;
        }

        // <d>
        if (isBadSafari) {
          sm2._wD(smc + 'Note: Buggy HTML5 Audio in Safari on this OS X release, see https://bugs.webkit.org/show_bug.cgi?id=32159 - ' + (!hasFlash ? ' would use flash fallback for MP3/MP4, but none detected.' : 'will use flash fallback for MP3/MP4, if available'), 1);
        }
        // </d>

      }

    if (sm2.useHTML5Audio && sm2.hasHTML5) {

      // sort out whether flash is optional, required or can be ignored.

      // innocent until proven guilty.
      canIgnoreFlash = true;

      for (item in formats) {

        if (formats.hasOwnProperty(item)) {

          if (formats[item].required) {

            if (!sm2.html5.canPlayType(formats[item].type)) {

              // 100% HTML5 mode is not possible.
              canIgnoreFlash = false;
              flashNeeded = true;

            } else if (sm2.preferFlash && (sm2.flash[item] || sm2.flash[formats[item].type])) {

              // flash may be required, or preferred for this format.
              flashNeeded = true;

            }

          }

        }

      }

    }

    // sanity check...
    if (sm2.ignoreFlash) {
      flashNeeded = false;
      canIgnoreFlash = true;
    }

    sm2.html5Only = (sm2.hasHTML5 && sm2.useHTML5Audio && !flashNeeded);

    return (!sm2.html5Only);

  };

  parseURL = function(url) {

    /**
     * Internal: Finds and returns the first playable URL (or failing that, the first URL.)
     * @param {string or array} url A single URL string, OR, an array of URL strings or {url:'/path/to/resource', type:'audio/mp3'} objects.
     */

    var i, j, urlResult = 0, result;

    if (url instanceof Array) {

      // find the first good one
      for (i = 0, j = url.length; i < j; i++) {

        if (url[i] instanceof Object) {

          // MIME check
          if (sm2.canPlayMIME(url[i].type)) {
            urlResult = i;
            break;
          }

        } else if (sm2.canPlayURL(url[i])) {

          // URL string check
          urlResult = i;
          break;

        }

      }

      // normalize to string
      if (url[urlResult].url) {
        url[urlResult] = url[urlResult].url;
      }

      result = url[urlResult];

    } else {

      // single URL case
      result = url;

    }

    return result;

  };


  startTimer = function(oSound) {

    /**
     * attach a timer to this sound, and start an interval if needed
     */

    if (!oSound._hasTimer) {

      oSound._hasTimer = true;

      if (!mobileHTML5 && sm2.html5PollingInterval) {

        if (h5IntervalTimer === null && h5TimerCount === 0) {

          h5IntervalTimer = setInterval(timerExecute, sm2.html5PollingInterval);

        }

        h5TimerCount++;

      }

    }

  };

  stopTimer = function(oSound) {

    /**
     * detach a timer
     */

    if (oSound._hasTimer) {

      oSound._hasTimer = false;

      if (!mobileHTML5 && sm2.html5PollingInterval) {

        // interval will stop itself at next execution.

        h5TimerCount--;

      }

    }

  };

  timerExecute = function() {

    /**
     * manual polling for HTML5 progress events, ie., whileplaying()
     * (can achieve greater precision than conservative default HTML5 interval)
     */

    var i;

    if (h5IntervalTimer !== null && !h5TimerCount) {

      // no active timers, stop polling interval.

      clearInterval(h5IntervalTimer);

      h5IntervalTimer = null;

      return;

    }

    // check all HTML5 sounds with timers

    for (i = sm2.soundIDs.length - 1; i >= 0; i--) {

      if (sm2.sounds[sm2.soundIDs[i]].isHTML5 && sm2.sounds[sm2.soundIDs[i]]._hasTimer) {
        sm2.sounds[sm2.soundIDs[i]]._onTimer();
      }

    }

  };

  catchError = function(options) {

    options = (options !== _undefined ? options : {});

    if (typeof sm2.onerror === 'function') {
      sm2.onerror.apply(window, [{
        type: (options.type !== _undefined ? options.type : null)
      }]);
    }

    if (options.fatal !== _undefined && options.fatal) {
      sm2.disable();
    }

  };

  badSafariFix = function() {

    // special case: "bad" Safari (OS X 10.3 - 10.7) must fall back to flash for MP3/MP4
    if (!isBadSafari || !detectFlash()) {
      // doesn't apply
      return;
    }

    var aF = sm2.audioFormats, i, item;

    for (item in aF) {

      if (aF.hasOwnProperty(item)) {

        if (item === 'mp3' || item === 'mp4') {

          sm2._wD(sm + ': Using flash fallback for ' + item + ' format');
          sm2.html5[item] = false;

          // assign result to related formats, too
          if (aF[item] && aF[item].related) {
            for (i = aF[item].related.length - 1; i >= 0; i--) {
              sm2.html5[aF[item].related[i]] = false;
            }
          }

        }

      }

    }

  };

  /**
   * Pseudo-private flash/ExternalInterface methods
   * ----------------------------------------------
   */

  this._setSandboxType = function(sandboxType) {

    // <d>
    // Security sandbox according to Flash plugin
    var sb = sm2.sandbox;

    sb.type = sandboxType;
    sb.description = sb.types[(sb.types[sandboxType] !== _undefined ? sandboxType : 'unknown')];

    if (sb.type === 'localWithFile') {

      sb.noRemote = true;
      sb.noLocal = false;
      _wDS('secNote', 2);

    } else if (sb.type === 'localWithNetwork') {

      sb.noRemote = false;
      sb.noLocal = true;

    } else if (sb.type === 'localTrusted') {

      sb.noRemote = false;
      sb.noLocal = false;

    }
    // </d>

  };

  this._externalInterfaceOK = function(swfVersion) {

    // flash callback confirming flash loaded, EI working etc.
    // swfVersion: SWF build string

    if (sm2.swfLoaded) {
      return;
    }

    var e;

    debugTS('swf', true);
    debugTS('flashtojs', true);
    sm2.swfLoaded = true;
    tryInitOnFocus = false;

    if (isBadSafari) {
      badSafariFix();
    }

    // complain if JS + SWF build/version strings don't match, excluding +DEV builds
    // <d>
    if (!swfVersion || swfVersion.replace(/\+dev/i, '') !== sm2.versionNumber.replace(/\+dev/i, '')) {

      e = sm + ': Fatal: JavaScript file build "' + sm2.versionNumber + '" does not match Flash SWF build "' + swfVersion + '" at ' + sm2.url + '. Ensure both are up-to-date.';

      // escape flash -> JS stack so this error fires in window.
      setTimeout(function() {
        throw new Error(e);
      }, 0);

      // exit, init will fail with timeout
      return;

    }
    // </d>

    // IE needs a larger timeout
    setTimeout(init, isIE ? 100 : 1);

  };

  /**
   * Private initialization helpers
   * ------------------------------
   */

  createMovie = function(movieID, movieURL) {

    // ignore if already connected
    if (didAppend && appendSuccess) return false;

    function initMsg() {

      // <d>

      var options = [],
          title,
          msg = [],
          delimiter = ' + ';

      title = 'SoundManager ' + sm2.version + (!sm2.html5Only && sm2.useHTML5Audio ? (sm2.hasHTML5 ? ' + HTML5 audio' : ', no HTML5 audio support') : '');

      if (!sm2.html5Only) {

        if (sm2.preferFlash) {
          options.push('preferFlash');
        }

        if (sm2.useHighPerformance) {
          options.push('useHighPerformance');
        }

        if (sm2.flashPollingInterval) {
          options.push('flashPollingInterval (' + sm2.flashPollingInterval + 'ms)');
        }

        if (sm2.html5PollingInterval) {
          options.push('html5PollingInterval (' + sm2.html5PollingInterval + 'ms)');
        }

        if (sm2.wmode) {
          options.push('wmode (' + sm2.wmode + ')');
        }

        if (sm2.debugFlash) {
          options.push('debugFlash');
        }

        if (sm2.useFlashBlock) {
          options.push('flashBlock');
        }

      } else if (sm2.html5PollingInterval) {
          options.push('html5PollingInterval (' + sm2.html5PollingInterval + 'ms)');
        }

      if (options.length) {
        msg = msg.concat([options.join(delimiter)]);
      }

      sm2._wD(title + (msg.length ? delimiter + msg.join(', ') : ''), 1);

      showSupport();

      // </d>

    }

    if (sm2.html5Only) {

      // 100% HTML5 mode
      setVersionInfo();

      initMsg();
      sm2.oMC = id(sm2.movieID);
      init();

      // prevent multiple init attempts
      didAppend = true;

      appendSuccess = true;

      return false;

    }

    // flash path
    var remoteURL = (movieURL || sm2.url),
    localURL = (sm2.altURL || remoteURL),
    swfTitle = 'JS/Flash audio component (SoundManager 2)',
    oTarget = getDocument(),
    extraClass = getSWFCSS(),
    isRTL = null,
    html = doc.getElementsByTagName('html')[0],
    oEmbed, oMovie, tmp, movieHTML, oEl, s, x, sClass;

    isRTL = (html && html.dir && html.dir.match(/rtl/i));
    movieID = (movieID === _undefined ? sm2.id : movieID);

    function param(name, value) {
      return '<param name="' + name + '" value="' + value + '" />';
    }

    // safety check for legacy (change to Flash 9 URL)
    setVersionInfo();
    sm2.url = normalizeMovieURL(overHTTP ? remoteURL : localURL);
    movieURL = sm2.url;

    sm2.wmode = (!sm2.wmode && sm2.useHighPerformance ? 'transparent' : sm2.wmode);

    if (sm2.wmode !== null && (ua.match(/msie 8/i) || (!isIE && !sm2.useHighPerformance)) && navigator.platform.match(/win32|win64/i)) {
      /**
       * extra-special case: movie doesn't load until scrolled into view when using wmode = anything but 'window' here
       * does not apply when using high performance (position:fixed means on-screen), OR infinite flash load timeout
       * wmode breaks IE 8 on Vista + Win7 too in some cases, as of January 2011 (?)
       */
      messages.push(strings.spcWmode);
      sm2.wmode = null;
    }

    oEmbed = {
      name: movieID,
      id: movieID,
      src: movieURL,
      quality: 'high',
      allowScriptAccess: sm2.allowScriptAccess,
      bgcolor: sm2.bgColor,
      pluginspage: http + 'www.macromedia.com/go/getflashplayer',
      title: swfTitle,
      type: 'application/x-shockwave-flash',
      wmode: sm2.wmode,
      // http://help.adobe.com/en_US/as3/mobile/WS4bebcd66a74275c36cfb8137124318eebc6-7ffd.html
      hasPriority: 'true'
    };

    if (sm2.debugFlash) {
      oEmbed.FlashVars = 'debug=1';
    }

    if (!sm2.wmode) {
      // don't write empty attribute
      delete oEmbed.wmode;
    }

    if (isIE) {

      // IE is "special".
      oMovie = doc.createElement('div');
      movieHTML = [
        '<object id="' + movieID + '" data="' + movieURL + '" type="' + oEmbed.type + '" title="' + oEmbed.title + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',
        param('movie', movieURL),
        param('AllowScriptAccess', sm2.allowScriptAccess),
        param('quality', oEmbed.quality),
        (sm2.wmode ? param('wmode', sm2.wmode) : ''),
        param('bgcolor', sm2.bgColor),
        param('hasPriority', 'true'),
        (sm2.debugFlash ? param('FlashVars', oEmbed.FlashVars) : ''),
        '</object>'
      ].join('');

    } else {

      oMovie = doc.createElement('embed');
      for (tmp in oEmbed) {
        if (oEmbed.hasOwnProperty(tmp)) {
          oMovie.setAttribute(tmp, oEmbed[tmp]);
        }
      }

    }

    initDebug();
    extraClass = getSWFCSS();
    oTarget = getDocument();

    if (oTarget) {

      sm2.oMC = (id(sm2.movieID) || doc.createElement('div'));

      if (!sm2.oMC.id) {

        sm2.oMC.id = sm2.movieID;
        sm2.oMC.className = swfCSS.swfDefault + ' ' + extraClass;
        s = null;
        oEl = null;

        if (!sm2.useFlashBlock) {
          if (sm2.useHighPerformance) {
            // on-screen at all times
            s = {
              position: 'fixed',
              width: '8px',
              height: '8px',
              // >= 6px for flash to run fast, >= 8px to start up under Firefox/win32 in some cases. odd? yes.
              bottom: '0px',
              left: '0px',
              overflow: 'hidden'
            };
          } else {
            // hide off-screen, lower priority
            s = {
              position: 'absolute',
              width: '6px',
              height: '6px',
              top: '-9999px',
              left: '-9999px'
            };
            if (isRTL) {
              s.left = Math.abs(parseInt(s.left, 10)) + 'px';
            }
          }
        }

        if (isWebkit) {
          // soundcloud-reported render/crash fix, safari 5
          sm2.oMC.style.zIndex = 10000;
        }

        if (!sm2.debugFlash) {
          for (x in s) {
            if (s.hasOwnProperty(x)) {
              sm2.oMC.style[x] = s[x];
            }
          }
        }

        try {

          if (!isIE) {
            sm2.oMC.appendChild(oMovie);
          }

          oTarget.appendChild(sm2.oMC);

          if (isIE) {
            oEl = sm2.oMC.appendChild(doc.createElement('div'));
            oEl.className = swfCSS.swfBox;
            oEl.innerHTML = movieHTML;
          }

          appendSuccess = true;

        } catch(e) {

          throw new Error(str('domError') + ' \n' + e.toString());

        }

      } else {

        // SM2 container is already in the document (eg. flashblock use case)
        sClass = sm2.oMC.className;
        sm2.oMC.className = (sClass ? sClass + ' ' : swfCSS.swfDefault) + (extraClass ? ' ' + extraClass : '');
        sm2.oMC.appendChild(oMovie);

        if (isIE) {
          oEl = sm2.oMC.appendChild(doc.createElement('div'));
          oEl.className = swfCSS.swfBox;
          oEl.innerHTML = movieHTML;
        }

        appendSuccess = true;

      }

    }

    didAppend = true;

    initMsg();

    // sm2._wD(sm + ': Trying to load ' + movieURL + (!overHTTP && sm2.altURL ? ' (alternate URL)' : ''), 1);

    return true;

  };

  initMovie = function() {

    if (sm2.html5Only) {
      createMovie();
      return false;
    }

    // attempt to get, or create, movie (may already exist)
    if (flash) return false;

    if (!sm2.url) {

      /**
       * Something isn't right - we've reached init, but the soundManager url property has not been set.
       * User has not called setup({url: ...}), or has not set soundManager.url (legacy use case) directly before init time.
       * Notify and exit. If user calls setup() with a url: property, init will be restarted as in the deferred loading case.
       */

       _wDS('noURL');
       return false;

    }

    // inline markup case
    flash = sm2.getMovie(sm2.id);

    if (!flash) {

      if (!oRemoved) {

        // try to create
        createMovie(sm2.id, sm2.url);

      } else {

        // try to re-append removed movie after reboot()
        if (!isIE) {
          sm2.oMC.appendChild(oRemoved);
        } else {
          sm2.oMC.innerHTML = oRemovedHTML;
        }

        oRemoved = null;
        didAppend = true;

      }

      flash = sm2.getMovie(sm2.id);

    }

    if (typeof sm2.oninitmovie === 'function') {
      setTimeout(sm2.oninitmovie, 1);
    }

    // <d>
    flushMessages();
    // </d>

    return true;

  };

  delayWaitForEI = function() {

    setTimeout(waitForEI, 1000);

  };

  rebootIntoHTML5 = function() {

    // special case: try for a reboot with preferFlash: false, if 100% HTML5 mode is possible and useFlashBlock is not enabled.

    window.setTimeout(function() {

      complain(smc + 'useFlashBlock is false, 100% HTML5 mode is possible. Rebooting with preferFlash: false...');

      sm2.setup({
        preferFlash: false
      }).reboot();

      // if for some reason you want to detect this case, use an ontimeout() callback and look for html5Only and didFlashBlock == true.
      sm2.didFlashBlock = true;

      sm2.beginDelayedInit();

    }, 1);

  };

  waitForEI = function() {

    var p,
        loadIncomplete = false;

    if (!sm2.url) {
      // No SWF url to load (noURL case) - exit for now. Will be retried when url is set.
      return;
    }

    if (waitingForEI) {
      return;
    }

    waitingForEI = true;
    event.remove(window, 'load', delayWaitForEI);

    if (hasFlash && tryInitOnFocus && !isFocused) {
      // Safari won't load flash in background tabs, only when focused.
      _wDS('waitFocus');
      return;
    }

    if (!didInit) {
      p = sm2.getMoviePercent();
      if (p > 0 && p < 100) {
        loadIncomplete = true;
      }
    }

    setTimeout(function() {

      p = sm2.getMoviePercent();

      if (loadIncomplete) {
        // special case: if movie *partially* loaded, retry until it's 100% before assuming failure.
        waitingForEI = false;
        sm2._wD(str('waitSWF'));
        window.setTimeout(delayWaitForEI, 1);
        return;
      }

      // <d>
      if (!didInit) {

        sm2._wD(sm + ': No Flash response within expected time. Likely causes: ' + (p === 0 ? 'SWF load failed, ' : '') + 'Flash blocked or JS-Flash security error.' + (sm2.debugFlash ? ' ' + str('checkSWF') : ''), 2);

        if (!overHTTP && p) {

          _wDS('localFail', 2);

          if (!sm2.debugFlash) {
            _wDS('tryDebug', 2);
          }

        }

        if (p === 0) {

          // if 0 (not null), probably a 404.
          sm2._wD(str('swf404', sm2.url), 1);

        }

        debugTS('flashtojs', false, ': Timed out' + (overHTTP ? ' (Check flash security or flash blockers)' : ' (No plugin/missing SWF?)'));

      }
      // </d>

      // give up / time-out, depending

      if (!didInit && okToDisable) {

        if (p === null) {

          // SWF failed to report load progress. Possibly blocked.

          if (sm2.useFlashBlock || sm2.flashLoadTimeout === 0) {

            if (sm2.useFlashBlock) {

              flashBlockHandler();

            }

            _wDS('waitForever');

          } else if (!sm2.useFlashBlock && canIgnoreFlash) {

            // no custom flash block handling, but SWF has timed out. Will recover if user unblocks / allows SWF load.
            rebootIntoHTML5();

          } else {

            _wDS('waitForever');

            // fire any regular registered ontimeout() listeners.
            processOnEvents({
              type: 'ontimeout',
              ignoreInit: true,
              error: {
                type: 'INIT_FLASHBLOCK'
              }
            });

          }

        } else if (sm2.flashLoadTimeout === 0) {

          // SWF loaded? Shouldn't be a blocking issue, then.

          _wDS('waitForever');

        } else if (!sm2.useFlashBlock && canIgnoreFlash) {

          rebootIntoHTML5();

        } else {

          failSafely(true);

        }

      }

    }, sm2.flashLoadTimeout);

  };

  handleFocus = function() {

    function cleanup() {
      event.remove(window, 'focus', handleFocus);
    }

    if (isFocused || !tryInitOnFocus) {
      // already focused, or not special Safari background tab case
      cleanup();
      return true;
    }

    okToDisable = true;
    isFocused = true;
    _wDS('gotFocus');

    // allow init to restart
    waitingForEI = false;

    // kick off ExternalInterface timeout, now that the SWF has started
    delayWaitForEI();

    cleanup();
    return true;

  };

  flushMessages = function() {

    // <d>

    // SM2 pre-init debug messages
    if (messages.length) {
      sm2._wD('SoundManager 2: ' + messages.join(' '), 1);
      messages = [];
    }

    // </d>

  };

  showSupport = function() {

    // <d>

    flushMessages();

    var item, tests = [];

    if (sm2.useHTML5Audio && sm2.hasHTML5) {
      for (item in sm2.audioFormats) {
        if (sm2.audioFormats.hasOwnProperty(item)) {
          tests.push(item + ' = ' + sm2.html5[item] + (!sm2.html5[item] && needsFlash && sm2.flash[item] ? ' (using flash)' : (sm2.preferFlash && sm2.flash[item] && needsFlash ? ' (preferring flash)' : (!sm2.html5[item] ? ' (' + (sm2.audioFormats[item].required ? 'required, ' : '') + 'and no flash support)' : ''))));
        }
      }
      sm2._wD('SoundManager 2 HTML5 support: ' + tests.join(', '), 1);
    }

    // </d>

  };

  initComplete = function(bNoDisable) {

    if (didInit) return false;

    if (sm2.html5Only) {
      // all good.
      _wDS('sm2Loaded', 1);
      didInit = true;
      initUserOnload();
      debugTS('onload', true);
      return true;
    }

    var wasTimeout = (sm2.useFlashBlock && sm2.flashLoadTimeout && !sm2.getMoviePercent()),
        result = true,
        error;

    if (!wasTimeout) {
      didInit = true;
    }

    error = {
      type: (!hasFlash && needsFlash ? 'NO_FLASH' : 'INIT_TIMEOUT')
    };

    sm2._wD('SoundManager 2 ' + (disabled ? 'failed to load' : 'loaded') + ' (' + (disabled ? 'Flash security/load error' : 'OK') + ') ' + String.fromCharCode(disabled ? 10006 : 10003), disabled ? 2 : 1);

    if (disabled || bNoDisable) {

      if (sm2.useFlashBlock && sm2.oMC) {
        sm2.oMC.className = getSWFCSS() + ' ' + (sm2.getMoviePercent() === null ? swfCSS.swfTimedout : swfCSS.swfError);
      }

      processOnEvents({
        type: 'ontimeout',
        error: error,
        ignoreInit: true
      });

      debugTS('onload', false);
      catchError(error);

      result = false;

    } else {

      debugTS('onload', true);

    }

    if (!disabled) {

      if (sm2.waitForWindowLoad && !windowLoaded) {

        _wDS('waitOnload');
        event.add(window, 'load', initUserOnload);

      } else {

        // <d>
        if (sm2.waitForWindowLoad && windowLoaded) {
          _wDS('docLoaded');
        }
        // </d>

        initUserOnload();

      }

    }

    return result;

  };

  /**
   * apply top-level setupOptions object as local properties, eg., this.setupOptions.flashVersion -> this.flashVersion (soundManager.flashVersion)
   * this maintains backward compatibility, and allows properties to be defined separately for use by soundManager.setup().
   */

  setProperties = function() {

    var i,
        o = sm2.setupOptions;

    for (i in o) {

      if (o.hasOwnProperty(i)) {

        // assign local property if not already defined

        if (sm2[i] === _undefined) {

          sm2[i] = o[i];

        } else if (sm2[i] !== o[i]) {

          // legacy support: write manually-assigned property (eg., soundManager.url) back to setupOptions to keep things in sync
          sm2.setupOptions[i] = sm2[i];

        }

      }

    }

  };


  init = function() {

    // called after onload()

    if (didInit) {
      _wDS('didInit');
      return false;
    }

    function cleanup() {
      event.remove(window, 'load', sm2.beginDelayedInit);
    }

    if (sm2.html5Only) {

      if (!didInit) {
        // we don't need no steenking flash!
        cleanup();
        sm2.enabled = true;
        initComplete();
      }

      return true;

    }

    // flash path
    initMovie();

    try {

      // attempt to talk to Flash
      flash._externalInterfaceTest(false);

      /**
       * Apply user-specified polling interval, OR, if "high performance" set, faster vs. default polling
       * (determines frequency of whileloading/whileplaying callbacks, effectively driving UI framerates)
       */
      setPolling(true, (sm2.flashPollingInterval || (sm2.useHighPerformance ? 10 : 50)));

      if (!sm2.debugMode) {
        // stop the SWF from making debug output calls to JS
        flash._disableDebug();
      }

      sm2.enabled = true;
      debugTS('jstoflash', true);

      if (!sm2.html5Only) {
        // prevent browser from showing cached page state (or rather, restoring "suspended" page state) via back button, because flash may be dead
        // http://www.webkit.org/blog/516/webkit-page-cache-ii-the-unload-event/
        event.add(window, 'unload', doNothing);
      }

    } catch(e) {

      sm2._wD('js/flash exception: ' + e.toString());

      debugTS('jstoflash', false);

      catchError({
        type: 'JS_TO_FLASH_EXCEPTION',
        fatal: true
      });

      // don't disable, for reboot()
      failSafely(true);

      initComplete();

      return false;

    }

    initComplete();

    // disconnect events
    cleanup();

    return true;

  };

  domContentLoaded = function() {

    if (didDCLoaded) return false;

    didDCLoaded = true;

    // assign top-level soundManager properties eg. soundManager.url
    setProperties();

    initDebug();

    if (!hasFlash && sm2.hasHTML5) {

      sm2._wD('SoundManager 2: No Flash detected' + (!sm2.useHTML5Audio ? ', enabling HTML5.' : '. Trying HTML5-only mode.'), 1);

      sm2.setup({
        useHTML5Audio: true,
        // make sure we aren't preferring flash, either
        // TODO: preferFlash should not matter if flash is not installed. Currently, stuff breaks without the below tweak.
        preferFlash: false
      });

    }

    testHTML5();

    if (!hasFlash && needsFlash) {

      messages.push(strings.needFlash);

      // TODO: Fatal here vs. timeout approach, etc.
      // hack: fail sooner.
      sm2.setup({
        flashLoadTimeout: 1
      });

    }

    if (doc.removeEventListener) {
      doc.removeEventListener('DOMContentLoaded', domContentLoaded, false);
    }

    initMovie();

    return true;

  };

  domContentLoadedIE = function() {

    if (doc.readyState === 'complete') {
      domContentLoaded();
      doc.detachEvent('onreadystatechange', domContentLoadedIE);
    }

    return true;

  };

  winOnLoad = function() {

    // catch edge case of initComplete() firing after window.load()
    windowLoaded = true;

    // catch case where DOMContentLoaded has been sent, but we're still in doc.readyState = 'interactive'
    domContentLoaded();

    event.remove(window, 'load', winOnLoad);

  };

  // sniff up-front
  detectFlash();

  // focus and window load, init (primarily flash-driven)
  event.add(window, 'focus', handleFocus);
  event.add(window, 'load', delayWaitForEI);
  event.add(window, 'load', winOnLoad);

  if (doc.addEventListener) {

    doc.addEventListener('DOMContentLoaded', domContentLoaded, false);

  } else if (doc.attachEvent) {

    doc.attachEvent('onreadystatechange', domContentLoadedIE);

  } else {

    // no add/attachevent support - safe to assume no JS -> Flash either
    debugTS('onload', false);
    catchError({
      type: 'NO_DOM2_EVENTS',
      fatal: true
    });

  }

} // SoundManager()

// SM2_DEFER details: http://www.schillmania.com/projects/soundmanager2/doc/getstarted/#lazy-loading

if (window.SM2_DEFER === _undefined || !SM2_DEFER) {
  soundManager = new SoundManager();
}

/**
 * SoundManager public interfaces
 * ------------------------------
 */

if ( true && module && typeof module.exports === 'object') {

  /**
   * commonJS module
   */

  module.exports.SoundManager = SoundManager;
  module.exports.soundManager = soundManager;

} else if (true) {

  /**
   * AMD - requireJS
   * basic usage:
   * require(["/path/to/soundmanager2.js"], function(SoundManager) {
   *   SoundManager.getInstance().setup({
   *     url: '/swf/',
   *     onready: function() { ... }
   *   })
   * });
   *
   * SM2_DEFER usage:
   * window.SM2_DEFER = true;
   * require(["/path/to/soundmanager2.js"], function(SoundManager) {
   *   SoundManager.getInstance(function() {
   *     var soundManager = new SoundManager.constructor();
   *     soundManager.setup({
   *       url: '/swf/',
   *       ...
   *     });
   *     ...
   *     soundManager.beginDelayedInit();
   *     return soundManager;
   *   })
   * });
   */

  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    /**
     * Retrieve the global instance of SoundManager.
     * If a global instance does not exist it can be created using a callback.
     *
     * @param {Function} smBuilder Optional: Callback used to create a new SoundManager instance
     * @return {SoundManager} The global SoundManager instance
     */
    function getInstance(smBuilder) {
      if (!window.soundManager && smBuilder instanceof Function) {
        var instance = smBuilder(SoundManager);
        if (instance instanceof SoundManager) {
          window.soundManager = instance;
        }
      }
      return window.soundManager;
    }
    return {
      constructor: SoundManager,
      getInstance: getInstance
    };
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

}

// standard browser case

// constructor
window.SoundManager = SoundManager;

/**
 * note: SM2 requires a window global due to Flash, which makes calls to window.soundManager.
 * Flash may not always be needed, but this is not known until async init and SM2 may even "reboot" into Flash mode.
 */

// public API, flash callbacks etc.
window.soundManager = soundManager;

}(window));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/plugins/tts/plugin.tts.js"));
/******/ }
]);
//# sourceMappingURL=plugin.tts.js.map