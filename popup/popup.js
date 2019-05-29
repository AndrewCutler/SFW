var url = document.getElementById("url")
var site = document.getElementById("site")
var listShown = false

//add URL
var addBtn = document.getElementById("add")
addBtn.onclick = function () {
  var list = document.getElementById('list')
  //first get previous urls
  // chrome.storage.local.get(null, function (result) {
  //   var urls = Object.keys(result)
  //   urls.forEach(s => {
  //     addSiteToList(s, result[s])
  //   })
  //   listShown = true
  // })
  showURLs()
  //then add new one
  chrome.storage.local.set({ [site.value]: url.value }, function () {
    addSiteToList(site.value, url.value)
  })
}

//retrieve URLs
var showBtn = document.getElementById('show')
showBtn.onclick = function () {
  var list = document.getElementById('list')
  //show list of URLs
  if (!listShown) {
    showURLs()
  }
  //otherwise, collapse list
  else {
    while (list.hasChildNodes()) list.removeChild(list.lastChild)
    listShown = false
  }
}

//add site li to list ul
function addSiteToList(site, url) {
  //create link
  var link = document.createElement('A')
  link.href = 'https://' + url
  link.target = "_blank" //new tab
  link.title = "Open link"
  var text = document.createTextNode(site)
  link.appendChild(text)

  //create remove button for li element
  var remove = document.createElement('span')
  remove.setAttribute("id", site)
  remove.className = "removable"
  remove.title = "Remove URL from SFW"
  var removeText = document.createTextNode('×')
  remove.appendChild(removeText)
  //remove function onclick event
  remove.onclick = function () {
    chrome.storage.local.remove(site)
    //remove li from list in DOM
    list.removeChild(document.getElementById("li-" + site))
  }

  //create li and add to list ul
  var node = document.createElement('li')
  node.setAttribute("id", "li-" + site)
  node.appendChild(link)
  node.appendChild(remove)
  list.appendChild(node)
}

function showURLs() {
  //empty ul first
  while (list.hasChildNodes()) list.removeChild(list.lastChild)
  //populate ul
  chrome.storage.local.get(null, function (result) {
    var urls = Object.keys(result)
    urls.forEach(s => {
      addSiteToList(s, result[s])
    })
    listShown = true
  })
}