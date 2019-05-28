var url = document.getElementById("url")
var site = document.getElementById("site")
var listShown = false

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
  if (!listShown) {

    chrome.storage.local.get(null, function (result) {
      var list = document.getElementById('list')
      var urls = Object.keys(result)
      urls.forEach(s => {
        //create link
        var link = document.createElement('A')
        link.href = 'https://' + result[s]
        link.target = "_blank" //new tab
        var text = document.createTextNode(s)
        link.appendChild(text)
        console.log(link)

        //create li
        var node = document.createElement('li')
        node.appendChild(link)
        list.appendChild(node)
      })
    })
    listShown = true
  }
}