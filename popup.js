console.log("Popup.js Loaded!");

const statusText = document.querySelector("#auto-on-status");
if (statusText) {
  chrome.storage.sync.get("autoThanks", ({ autoThanks }) => {
    console.log("autoThanks initial ==>", autoThanks);
    if (!autoThanks) {
      statusText.innerText = "Off";
      statusText.style.color = "#d33";
    } else {
      statusText.innerText = "On";
      statusText.style.color = "#3d3";
    }
  });
}

const triggerAutoBtn = document.querySelector("#trigger-auto-btn");
if (triggerAutoBtn) {
  triggerAutoBtn.addEventListener("click", () => {
    chrome.storage.sync.get("autoThanks", ({ autoThanks }) => {
      console.log("autoThanks before switch ==>", autoThanks);
      if (autoThanks) {
        statusText.innerText = "Off";
        statusText.style.color = "#d33";
        chrome.storage.sync.set({ autoThanks: false });
      } else {
        statusText.innerText = "On";
        statusText.style.color = "#3d3";
        chrome.storage.sync.set({ autoThanks: true });
      }
    });
  });
}
