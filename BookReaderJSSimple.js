//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
function instantiateBookReader(selector, extraOptions) {

  var urlParts = window.location.href.split('/');
  fetch(`http://api.hesamhelperdomain.ir/api/bookreader/${urlParts[3]}/${urlParts[4]}/${urlParts[5]}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    }
  }).then((res) => {
    if (!res.ok) {
      throw new Error('error here');
    }
    return res.json()
  }).then(options => {

    selector = selector || '#BookReader';
    extraOptions = extraOptions || {};

    $.extend(options, extraOptions);
    var br = new BookReader(options);
    br.init();


  });
}
