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
  var list = document.getElementById('list')
  if (!listShown) {

    chrome.storage.local.get(null, function (result) {
      var urls = Object.keys(result)
      urls.forEach(s => {
        //create link
        var link = document.createElement('A')
        link.href = 'https://' + result[s]
        link.target = "_blank" //new tab
        link.title = "Open link"
        var text = document.createTextNode(s)
        link.appendChild(text)

        //create remove button
        var remove = document.createElement('span')
        remove.setAttribute("id", s)
        remove.className = "removable"
        remove.title = "Remove URL from SFW"
        var removeText = document.createTextNode('×')
        remove.appendChild(removeText)
        remove.onclick = function () {
          chrome.storage.local.remove(s)
        }

        //create li
        var node = document.createElement('li')
        node.appendChild(link)
        node.appendChild(remove)
        list.appendChild(node)
      })
    })
    listShown = true
  }
  else {
    while (list.hasChildNodes()) list.removeChild(list.lastChild)
    listShown = false
  }
}

