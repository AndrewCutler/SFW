var sfwButton = document.getElementById('safe')
sfwButton.onclick = function (el) {
  chrome.windows.create({ url: ['http://www.google.com', 'http://www.mlb.com'], state: 'maximized', focused: true })
}