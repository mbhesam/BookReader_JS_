/* global BookReader, BookReaderJSIAinit */
// import { extraVolOptions, custvolumesManifest } from './ia-multiple-volumes-manifest.js';

/**
 * This is how Internet Archive loads bookreader
 */
const urlParams = new URLSearchParams(window.location.search);

const ocaid = urlParams.get('ocaid');
const openFullImmersionTheater = urlParams.get('view') === 'theater';
const ui = urlParams.get('ui');
const autoflip = urlParams.get('autoflip');
const searchTerm = urlParams.get('q');

const iaBookReader = document.querySelector('ia-bookreader');

const downloadListWithLCP = [
  [
    "lcpPDF",
    "link to lcp pdf"
  ],
  [
    "lcpEPUB",
    "link to lcp epub"
  ]
];

if (openFullImmersionTheater) {
  $(document.body).addClass('BRfullscreenActive');
  iaBookReader.fullscreen = openFullImmersionTheater;
}

const modal = document.querySelector('modal-manager');
iaBookReader.modal = modal;

// Override options coming from IA
BookReader.optionOverrides.imagesBaseURL = '/BookReader/images/';

const initializeBookReader = (brManifest) => {
  console.log('initializeBookReader', brManifest);

  const customAutoflipParams = {
    autoflip: !!autoflip,
    flipSpeed: urlParams.flipSpeed || 2000,
    flipDelay: urlParams.flipDelay || 5000
  };

  const options = {
    el: '#BookReader',
    /* Url plugin - IA uses History mode for URL */
    // commenting these out as demo uses hash mode
    // keeping them here for reference
    // urlHistoryBasePath: `/details/{$ocaid}/`,
    // resumeCookiePath: `/details/{$ocaid}/`,
    // urlMode: 'history',
    // Only reflect these params onto the URL
    // urlTrackedParams: ['page', 'search', 'mode'],
    /* End url plugin */
    enableBookTitleLink: false,
    bookUrlText: null,
    startFullscreen: openFullImmersionTheater,
    initialSearchTerm: searchTerm ? searchTerm : '',
    // leaving this option commented out bc we change given user agent on archive.org
    // onePage: { autofit: <?=json_encode($this->ios ? 'width' : 'auto')?> },
    showToolbar: false,
    /* Multiple volumes */
    // To show multiple volumes:
    enableMultipleBooks: true, // turn this on
    multipleBooksList: {
      "by_subprefix": {
        "test1": {
          "url_path": "/test2",
          "file_subprefix": "کتاب اول",
          "orig_sort":2,
          "title": "کتاب اول",
        },
        "test3": {
          "url_path": "/test2",
          "file_subprefix": "کتاب اول",
          "orig_sort": 3,
          "title": "کتاب 444",
        },
        "test2": {
          "url_path": "/test2",
          "file_subprefix": "کتاب اول",
          "orig_sort": 1,
          "title": "کتاب 123",
        },
      }
    }, // populate this  // TODO: get sample blob and tie into demo
    /* End multiple volumes */
    enableBookmarks: false, // turn this on
    enableFSLogoShortcut: true,
  };

  // we want to show item as embedded when ?ui=embed is in URI
  if (ui === 'embed') {
    options.mode = 1;
    options.ui = 'embed';
  }

  // we expect this at the global level
  BookReaderJSIAinit(brManifest, options);
  // BookReaderJSIAinit(brManifest.data, options);

  // const isRestricted = brManifest.data.isRestricted;
  // window.dispatchEvent(new CustomEvent('contextmenu', { detail: { isRestricted } }));
  // if (customAutoflipParams.autoflip) {
  //   window.br.autoToggle(customAutoflipParams);
  // }
};

window.initializeBookReader = initializeBookReader;

const fetchBookManifestAndInitializeBookreader = async () => {
  // iaBookReader.item = iaMetadata;

  // const jsiaParams = {
  //   format: 'jsonp',
  //   itemPath: iaMetadata.dir,
  //   id: iaMetadata.metadata.identifier,
  //   server: iaMetadata.server,
  // };

  // const jp2File = iaMetadata.files.find(f => f.name.endsWith('_jp2.zip'))
  // if (jp2File) {
  //   jsiaParams.subPrefix = jp2File.name.replace('_jp2.zip', '');
  // }
  const iaManifestUrl = `http://api.hesamhelperdomain.ir/api/bookreader/bnr/bnr10007/bnr10007-1.pdf`
  // const iaManifestUrl = `https://ia800900.us.archive.org/BookReader/BookReaderJSIA.php?format=jsonp&itemPath=%2F25%2Fitems%2Ftheworksofplato01platiala&id=theworksofplato01platiala&server=ia800900.us.archive.org&subPrefix=theworksofplato01platiala`;

  const manifest = await fetch(iaManifestUrl).then(response => response.json());

  const contentListUrl = `http://api.hesamhelperdomain.ir/api/show_attachments/bnr/bnr100/`
  const tableOfContent = await fetch(contentListUrl).then(response => response.json());
  
  // initializeBookReader({brOptions: manifest.data.brOptions});
  initializeBookReader({brOptions: {
    ...manifest,
    // "lendingInfo": {},
    // "imagesBaseURL": "https://esm.archive.org/@internetarchive/bookreader@5.0.0-77/BookReader/images/",
    // "enableExperimentalControls": true,
    // "enablePageResume": true,
    // "el": "#BookReader",
    // "enableBookTitleLink": false,
    // "bookUrlText": null,
    // "startFullscreen": false,
    // "initialSearchTerm": "",
    // "showToolbar": false,
    // "enableMultipleBooks": false,
    // "multipleBooksList": [],
    // "enableBookmarks": false,
    // "enableFSLogoShortcut": true,
    "enableChaptersPlugin": false,
    // "table_of_contents": tableOfContent.attachments
    // "bookPath": "/25/items/theworksofplato01platiala/theworksofplato01platiala",
    // "imageFormat": "jp2",
    // "server": "ia800900.us.archive.org",
    // "subPrefix": "theworksofplato01platiala",
    // "zip": "/25/items/theworksofplato01platiala/theworksofplato01platiala_jp2.zip",
    // "bookTitle": "The works of Plato : a new and literal version, chiefly from the text of Stallbaum",
    // "ppi": "400",
    // "titleLeaf": 1,
    // "coverLeaf": 1,
    // "defaultStartLeaf": 1,
    // "pageProgression": "lr",
    // "vars": {
    //     "bookId": "theworksofplato01platiala",
    //     "bookPath": "/25/items/theworksofplato01platiala/theworksofplato01platiala",
    //     "server": "ia800900.us.archive.org",
    //     "subPrefix": "theworksofplato01platiala"
    // },
    // "plugins": {
    //     "textSelection": {
    //         "enabled": true,
    //         "singlePageDjvuXmlUrl": "https://{{server}}/BookReader/BookReaderGetTextWrapper.php?path={{bookPath|urlencode}}_djvu.xml&mode=djvu_xml&page={{pageIndex}}"
    //     }
    // },
  }});
  // initializeBookReader(manifest);
};

// Temp; Circumvent bug in BookReaderJSIA code
window.Sentry = null;
window.logError = function(e) {
  console.error(e);
};

fetchBookManifestAndInitializeBookreader()