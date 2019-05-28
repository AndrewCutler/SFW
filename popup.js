var url = document.getElementById("url")
var site = document.getElementById("site")

//add URL
var addBtn = document.getElementById("add")
addBtn.onclick = function () {
  chrome.storage.local.set({ [site.value]: url.value }, function () {
    console.log('URL ' + url.value + ' saved.')
  })
  return false
}

//retrieve URLs
var showBtn = document.getElementById('show')
showBtn.onclick = function () {
  chrome.storage.local.get(null, function (result) {
    console.log(result)
    var list = document.getElementById('list')
    var urls = Object.keys(result)
    urls.forEach(s => {
      var node = document.createElement('LI')
      var text = document.createTextNode(s)
      node.appendChild(text)
      list.appendChild(node)
    })
  })
}