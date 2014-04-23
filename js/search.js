(function() {
  chrome.contextMenus.create({
    "id": "quick_rurema_search",
    "type": "normal",
    "title": "Quickるりまサーチ",
    "contexts": ["selection"]
  });
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var base_url = "http://docs.ruby-lang.org/ja/search/";
    var query = "query:" + info.selectionText;
    var url = encodeURI(base_url + query + "/");
    chrome.tabs.create({url: url}, function(tab) {});
  });
})();
