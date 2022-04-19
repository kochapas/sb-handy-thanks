chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ autoThanks: false });
  console.log("SB Handy Thanks installed!");
});
