(function() {
  chrome.contextMenus.create({
    "id": "quick_rurema_search",
    "type": "normal",
    "title": "Quickるりまサーチ",
    "contexts": ["selection"]
  });
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    var base_url = "http://docs.ruby-lang.org/ja/search/";
    var url = encodeURI(base_url + "query:" + info.selectionText);
    chrome.tabs.create({url: url}, function(tab) {});
  });
})();
