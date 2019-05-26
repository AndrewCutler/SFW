// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.windows.create({
//     url: ['http://www.google.com', 'http://www.mlb.com'],
//     state: 'maximized',
//     focused: true
//   })
//   console.log('popup')
// })

chrome.commands.onCommand.addListener(function(command) {
  if (command === 'open-sfw') {
    chrome.windows.create({
      url: ['http://www.google.com', 'http://www.mlb.com'],
      state: 'maximized',
      focused: true
    })
  }
})
