// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.windows.create({
//     url: ['http://www.google.com', 'http://www.mlb.com'],
//     state: 'maximized',
//     focused: true
//   })
//   console.log('popup')
// })

chrome.commands.onCommand.addListener(function (command) {
  if (command === 'open-sfw') {
    //get saved URLs
    chrome.storage.local.get(null, function (result) {
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
