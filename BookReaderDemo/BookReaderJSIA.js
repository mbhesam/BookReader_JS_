/**
 * This is a JavaScript script which contains functions for initing BookReader.
 * This is used by the public API, BookReaderJSIA.php.
 * There are clients who rely on BookReaderJSIA.php. So changes made, must be
 * backwards compatible. However, this file and the function BookReaderJSIAinit
 * are not advertised as part of the public API, so they can be decoupled.
 */

/*
Example Usage:

$(function() {
  $.getScript('//archive.org/bookreader/BookReaderJSIA.js')
  .done(function(script, textStatus) {
    $.ajax({
      url: '<JSIA DATA URL>',
      type: 'GET',
      dataType: 'jsonp'
    }).then(function(response) {
      BookReaderJSIAinit(response.data);
    });
  })
  .fail(function(jqxhr, settings, exception) {
    console.log('Error initializing bookreader');
  });
});
*/

/**
 * @param {data} JSIA payload
 */
window.BookReaderJSIAinit = (function() {
  /**
   * Builds options object used to instantiate BookReader
   * @param  {Object} data
   * @param  {Object} extraOptions
   * @return {Object}
   */
  function buildOptions(data, initialOptions, extraOptions) {
    var options = initialOptions || {};

    // TODO check if the first true arg is correct.
    // It was recently removed from BookReader.js
    jQuery.extend(true, options, buildMetadataOptions(data));
    jQuery.extend(true, options, buildLendingInfoOptions(data));
    jQuery.extend(true, options, buildEmbedOptions(data));
    jQuery.extend(true, options, buildImageFetchingOptions(data));

    // options.bookUrl = data.bookUrl;

    // if (data.lendingInfo.isOpenLibraryLending) {
    //   options.bookUrlText = options.bookTitle + '<br>&larr; Back to book details on Open Library';
    //   options.bookUrlTitle = 'Go to this book\'s page on Open Library';
    //   options.bookUrlMoreInfo = 'More information on Open Library';
    // } else {
    //   options.bookUrlText = options.bookTitle +'<br>&larr; Back to item details';
    //   options.bookUrlTitle = 'Go to this book\'s page on Archive.org';
    //   options.bookUrlMoreInfo = 'More information on Archive.org';
    // }

    // NOTE: update all occurrences with e.g. BR_VERSION=5.0.0-73 vr update-br-version
    var BR_ESM = 'https://esm.archive.org/@internetarchive/bookreader@5.0.0-77';
    options.imagesBaseURL = BR_ESM + '/BookReader/images/';

    // For plugins
    // options.olHost = data.olHost;

    // protected attempts to block downloading of images
    // options.protected = data.lendingInfo.shouldProtectImages;
    // options.thumbnail = '//archive.org/download/' + data.id + '/page/cover_t.jpg';
    options.enableExperimentalControls = true;
    options.enablePageResume = true;

    if (!isNaN(parseInt(options.defaultStartLeaf))) {
      // defaultStartLeaf takes precedence over the titleLeaf as the starting page.
      // Business logic determines whether it's Cover, Title, or another value.
      // Note that options.titleLeaf as used in BR really means "default leaf", whether
      // or not it's the title page leaf.
      options.titleLeaf = options.defaultStartLeaf;
    }

    if (extraOptions) {
      jQuery.extend(options, extraOptions);
    }

    return options;
  }

  /**
   * Builds medatadata which populates info window
   * @param  {Object} data
   * @return {Object} a subset of options
   */
  function buildMetadataOptions(data) {
    var options = {};

    var metadata = [];
    // var bookTitle = Array(data.metadata.title).join(', ');
    var bookTitle = 'data.metadata.title';
    if (bookTitle) {
      metadata.push({label: 'Title', value: bookTitle, extraValueClass: 'larger'});
    }
    // if (data.metadata.creator) {
    //   metadata.push({
    //     label: 'Author',
    //     value: Array(data.metadata.creator).join(', '),
    //     extraValueClass: 'larger'
    //   });
    // }
    // if (data.metadata.publishDate) {
    //   metadata.push({label: 'Publish Data', value: data.metadata.publishDate, extraValueClass: ''});
    // }
    // if (data.metadata.collection && data.metadata.collection.length > 0) {
    //   var colHtml = $.map(data.metadata.collection, function(v) {
    //     return '<a href="/details/'+v+'">'+v+'</a>';
    //   }).join(', ');
    //   metadata.push({label: 'Collections', value: colHtml, extraValueClass: ''});
    // }
    // if (data.metadata.sponsor && data.metadata.contributor
    //     && data.metadata.sponsor == data.metadata.contributor) {
    //   // Prevents redundant display
    //   metadata.push({label: 'Sponsor &amp; Contributor', value: data.metadata.sponsor, extraValueClass: ''});
    // } else {
    //   if (data.metadata.sponsor)
    //     metadata.push({label: 'Sponsor', value: data.metadata.sponsor, extraValueClass: ''});
    //   if (data.metadata.contributor)
    //     metadata.push({label: 'Contributor', value: data.metadata.contributor, extraValueClass: ''});
    // }
    // options.metadata = metadata;

    // if (data.metadata.language) {
    //   var language = typeof(data.metadata.language) == 'string' ? data.metadata.language :
    //                  data.metadata[0] ? data.metadata[0] :
    //                  null;
    //   options.bookLanguage = language;
    // }

    return options;
  }

  /**
   * Builds lending info "options"
   * @param  {Object} data
   * @return {Object} a subset of options
   */
  function buildLendingInfoOptions(data) {
    var options = {};
    var lendingInfo = {};
    // if (data.lendingInfo.loanId) {
    //   lendingInfo.loanId = data.lendingInfo.loanId;
    // }
    options.lendingInfo = lendingInfo;
    return options;
  }

  /**
   * Builds the custom embed options
   * @param  {Object} data
   * @return {Object} an subset of options
   */
  function buildEmbedOptions(data) {
    var options = {};

    // getEmbedURL
    //________
    // Returns a URL for an embedded version of the current book
    var getEmbedURL = function(br, viewParams) {
      // We could generate a URL hash fragment here but for now we just leave at defaults
      var url = 'https://' + window.location.host + '/stream/' + data.id;
      if (data.subPrefix != data.id) { // Only include if needed
        url += '/' + urlencodePath(data.subPrefix);
      }
      url += '?ui=embed';
      if (typeof(viewParams) != 'undefined') {
        url += '#' + br.fragmentFromParams(viewParams);
      }
      return url;
    }

    // getEmbedCode
    //________
    // Returns the embed code HTML fragment suitable for copy and paste
    options.getEmbedCode = function(frameWidth, frameHeight, viewParams) {
      return "<iframe src='" + getEmbedURL(this, viewParams) + "' width='"
              + frameWidth + "' height='" + frameHeight
              + "' frameborder='0' ></iframe>";
    }
    return options;
  }

  function buildImageFetchingOptions(data) {
    var options = [];

    // Augment image URI's with page scaling and rotating
    var builtInGetPageURI = BookReader.prototype.getPageURI;
    options.getPageURI = function(index, reduce, rotate) {
      if ('undefined' == typeof(reduce))
        reduce = 1;
      if ('undefined' == typeof(rotate))
        rotate = 0;
      // IA only supports power of 2 reduces
      reduce = Math.pow(2, Math.floor(Math.log2(Math.max(1, reduce))));
      var uri = builtInGetPageURI.call(this, index, reduce, rotate);
      if (!uri) {
        // This means that the search result "page number/index" is larger than the
        // preview sample set.
        // BR basically diffs search results against a full set of page leaves
        // This is the thing that makes the string "page N of N" in the desktop results pop up
        // It also uses the leaf info to draw the links of the results preview
        // so we will have to craft this
        return '';
      }
      uri = uri + (uri.indexOf('?') > -1 ? '&' : '?');
      uri = uri + 'scale=' + reduce + '&rotate=' + rotate;
      return uri;
    };

    return options;
  }

  /**
   * Adds more features to BookReader prototype
   * @param {Object} data
   */
  function extendBookReaderPrototype(data) {
    // Override resume token, to take user into account
    // Get's the page resume value, for remembering reader's page
    var superGetResumeValue = BookReader.prototype.getResumeValue;
    BookReader.prototype.getResumeValue = function() {
      var val = null;
      // if (data.lendingInfo.userid && BookReader.docCookies) {
      //   val = BookReader.docCookies.getItem('br-resume-' + data.lendingInfo.userid);
      // }
      if (val === null) {
        // when superGetResumeValue is available, let's assume first page WEBDEV-5205
        val = superGetResumeValue ? superGetResumeValue.call(this) : 0;
      }
      if (val !== null)
        val = parseInt(val);
      return val;
    }

    // Set's the page resume value, for remembering reader's page
    var superUpdateResumeValue = BookReader.prototype.updateResumeValue;
    BookReader.prototype.updateResumeValue = function(index) {
      var cookieName = data.lendingInfo.userid ? 'br-resume-' + data.lendingInfo.userid : null;
      superUpdateResumeValue.call(this, index, cookieName);
    }
  }

  /**
   * emit custom event when JSIA completes
   * @param {Object} postInitOptions
   * @param {String} postInitOptions.brVersion
   * @param {Array} postInitOptions.downloadURLs
   * @param {Boolean} postInitOptions.isRestricted
   */
  function emitBRJSIAPostInit(postInitOptions) {
    if (!CustomEvent) { return; }

    var event = new CustomEvent('BRJSIA:PostInit', {
      bubbles: true,
      captures: true,
      detail: postInitOptions
    });
    document.dispatchEvent(event);
  }

  /**
   * emit custom event when lending bar starts
   * @param {Object} lendingInfo
   * @param {Array} downloadUrls.downloadURLs
   */
  function emitLendingActionBarInitEvent(lendingInfo, downloadUrls) {
    if (!CustomEvent) { return; }

    var lendingStatus = lendingInfo.lendingStatus;
    var event = new CustomEvent('LendingFlow:PostInit', {
      bubbles: true,
      captures: true,
      detail: {
        downloadTypesAvailable: downloadUrls || [],
        lendingStatus: lendingStatus || {},
        isAdmin: lendingInfo.isAdmin
      }
    });
    document.dispatchEvent(event);
  }

  /**
   * This function is called with the response from JSIA.
   * @param {Object} data
   * @param {Object} (optional) extraOptions
   */
  return function(jsiaResponseData, extraOptions) {
    console.log('heeere', jsiaResponseData);
    var data = jsiaResponseData.data;
    // Ultimately, the brOptions will be passed from the server
    // and little to no processing should happen here in JS
    var brOptions = jsiaResponseData.brOptions;
    // var lendingInfo = jsiaResponseData.lendingInfo;
    var lendingInfo = {};
    // var lendingStatus = lendingInfo.lendingStatus || {};
    // var metadata = jsiaResponseData.metadata;

    // Attach to data for convenience
    // data.lendingInfo = lendingInfo;
    // data.lendingInfo = lendingInfo;
    // data.metadata = metadata;
    window.onerror = logError;

    var options = buildOptions(data, brOptions, extraOptions);

    if (!BookReader.version) {
      if (window.Sentry) {
        Sentry.captureMessage('BookReader.version not defined');
        alert('You have a really old version of BookReader that we no longer support.');
        return;
      }
    }

    extendBookReaderPrototype(data);
    var br = new BookReader(options);
    window.br = br; // for legacy support and debugging

    // Lending toolbar should be visible in following cases:-
    // 1. if lendingInfo has isPrintDisabledOnly
    // 2. if book has isRestricted for some reason but not is_login_required status (As per WEBDEV-3414, if user has logged in and book is in is_login_required, user can freely access that book)
    // 3. if lendingInfo has isLendingRequired and isBrowserBorrowable

    // var isLending = lendingInfo.isPrintDisabledOnly
    //   || (data.isRestricted && !lendingStatus.is_login_required)
    //   || (lendingInfo.isLendingRequired && lendingInfo.isBrowserBorrowable);
    var isLending = false;

    if (window.Sentry) {
      Sentry.setTag("br_version", BookReader.version);
      Sentry.setTag("borrowable_book", isLending);
    }

    var publicBook = !isLending;
    var isEmbedded = options.ui === 'embed';

    if (isLending) {
      // attach extra link/meta tags
      $('<link>',{
        rel: 'stylesheet',
        type: 'text/css',
        href: '/bookreader/print.css',
        media: 'print'
      }).appendTo('head');
    }

    // emitBRJSIAPostInit({
    //   brVersion: BookReader.version,
    //   downloadURLs: data.downloadUrls,
    //   isRestricted: data.isRestricted,
    // });

    var brInit = function brInit() {
      setTimeout(function() { br.init(); }, 100);
    }

    var lendingBarPostInit = function lendingBarPostInit() {
      setTimeout(function() {
        emitLendingActionBarInitEvent(lendingInfo, data.downloadUrls);
        brInit();
      }, 100);
    }

    // start public book rendering.
    if (publicBook) {
      brInit();

      // if (isEmbedded) {
      //   // we want to show book-title-bar for embedded items
      //   injectNewLendingBarComponent(function() {}, lendingInfo, options, 'title');
      // }
      return;
    }
    // end public book rendering.

    // start lending book rendering.
    var loadLendableBR = function loadLendableBR(error) {
      // If no search access token, disable search
      // Todo: make errorMessage a br.property constant here and in SearchInsideAccess.js
      if (error && typeof(error) !== 'undefined' && error.errorMessage === 'no access token') {
        br.options.enableSearch = false;
      }

      var barType = isEmbedded ? 'title' : 'action';
      // injectNewLendingBarComponent(lendingBarPostInit, lendingInfo, options, barType);
    };

    // allow search inside a borrowable book
    if (window.SearchInsideAccess) {
      this.searchInside = new SearchInsideAccess(br, metadata.identifier, loadLendableBR);
      this.searchInside.init();
    } else {
      loadLendableBR();
    }

    // Add Sentry context here
    if (window.Sentry) {
      Sentry.setContext("Lending info", {
        available_to_browse: lendingStatus.available_to_browse || '',
        available_to_borrow: lendingStatus.available_to_borrow || '',
        available_to_waitlist: lendingStatus.available_to_waitlist || '',
        user_has_browsed: lendingStatus.user_has_browsed || '',
        user_has_borrowed: lendingStatus.user_has_borrowed || '',
        user_on_waitlist: lendingStatus.user_on_waitlist || '',
        user_can_claim_waitlist: lendingStatus.user_can_claim_waitlist || '',
      });
    }
  }
})();
