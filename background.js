chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.windows.create({
    "url": ['http://www.google.com', 'http://www.mlb.com'],
    "state": 'maximized',
    "focused": true
  })

});