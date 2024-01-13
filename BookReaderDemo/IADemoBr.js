/* global BookReader, BookReaderJSIAinit */
// import { extraVolOptions, custvolumesManifest } from './ia-multiple-volumes-manifest.js';

/**
 * This is how Internet Archive loads bookreader
 */
const apiEndpoint = 'http://api.hesamhelperdomain.ir';
const urlParams = new URLSearchParams(window.location.search);

const ocaid = urlParams.get('ocaid');
const openFullImmersionTheater = urlParams.get('view') === 'theater';
const ui = urlParams.get('ui');
const autoflip = urlParams.get('autoflip');
const searchTerm = urlParams.get('q');


const getUrlParams = () => {
  const urlParts = window.location.href.split('/');
  // const urlParts = window.location.href.split('/');
  return {
    collection: urlParts[3],
    entity: urlParts[4],
    pdfName: urlParts[5]
  }
}

const iaBookReader = document.querySelector('ia-bookreader');

if (openFullImmersionTheater) {
  $(document.body).addClass('BRfullscreenActive');
  iaBookReader.fullscreen = openFullImmersionTheater;
}

const modal = document.querySelector('modal-manager');
iaBookReader.modal = modal;

// Override options coming from IA
BookReader.optionOverrides.imagesBaseURL = '/BookReader/images/';

const generateMultipleBooksData = (bookArray) => {
  const { attachments } = bookArray;
  let multipleBooks = {
    by_subprefix: {}
  }

  const params = getUrlParams();

  attachments.forEach(element => {
    multipleBooks.by_subprefix[element] = {
      url_path: `/${params.collection}/${params.entity}/${element}`,
      title: element,
    }
  });
  return multipleBooks;
}

const addDownloadSection = () => {
  const bookNav = iaBookReader.shadowRoot.querySelector('book-navigator');
  const urlParams = getUrlParams();

  const downloadList = [
    [
      "PDF",
      `${apiEndpoint}/download/${urlParams.collection}/${urlParams.entity}/${urlParams.pdfName}`
    ],
  ];

  bookNav.downloadableTypes = downloadList;
  bookNav.updateMenuContents();
}

const initializeBookReader = (brManifest, tableOfContents) => {

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
    multipleBooksList: generateMultipleBooksData(tableOfContents),
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
  // await bookNav.updateComplete;
  addDownloadSection();
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

  const urlParams = getUrlParams();

  const iaManifestUrl = `${apiEndpoint}/api/bookreader/${urlParams.collection}/${urlParams.entity}/${urlParams.pdfName}`
  const manifest = await fetch(iaManifestUrl).then(response => response.json());

  const contentListUrl = `${apiEndpoint}/api/show_attachments/${urlParams.collection}/${urlParams.entity}/`
  const tableOfContent = await fetch(contentListUrl).then(response => response.json());
  
  // initializeBookReader({brOptions: manifest.data.brOptions});
  initializeBookReader({brOptions: {
    ...manifest
  }}, tableOfContent);
  // initializeBookReader(manifest);
};

// Temp; Circumvent bug in BookReaderJSIA code
window.Sentry = null;
window.logError = function(e) {
  console.error(e);
};

fetchBookManifestAndInitializeBookreader()