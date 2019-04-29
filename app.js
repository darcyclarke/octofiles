
/* global chrome */

chrome.runtime.onMessage.addListener(function(message) {
  if (message === 'runContentScript'){
    chrome.tabs.insertCSS({ file: 'styles.css' })
    chrome.tabs.executeScript({ file: 'inject.js' })
  }
 })

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.create({ url: `https://github.com/darcyclarke/octopics/issues/new?octofiles` })
})
