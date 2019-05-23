chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(
    null,
    // { file: "openTabs.js" });
    // { code: `windows.getAll(function(windows){ alert(typeof windows} )})` }
    { code: `alert('clicked')` }
  )
});