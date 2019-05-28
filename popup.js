var urls = []
var url = document.getElementById("url")

//add URL
var addBtn = document.getElementById("add")
addBtn.onclick = function () {
  chrome.storage.local.set({ 'url': url.value }, function () {
    console.log('URL ' + url.value + ' saved.')
  })
  return false
}

//retrieve URLs
var showBtn = document.getElementById('show')
showBtn.onclick = function () {
  chrome.storage.local.get(['url'], function (result) {
    var list = document.getElementById('list')
    var node = document.createElement('LI')
    var text = document.createTextNode(result.url)
    node.appendChild(text)
    list.appendChild(node)
  })
}