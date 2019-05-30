chrome.commands.onCommand.addListener(function (command) {
  if (command === 'open-sfw') {
    //get saved URLs
    chrome.storage.sync.get(null, function (result) {
      //array of URLs with https://
      var urls = []
      Object.values(result).forEach(url => {
        urls.push('https://' + url)
      })
      //open new window with URLs
      chrome.windows.create({
        "url": urls,
        "state": 'maximized',
        "focused": true
      })
    })
  }
})
