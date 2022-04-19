console.log("Popup.js Loaded!");

// const statusText = document.querySelector("#auto-on-status");
const autoThanksCheckbox = document.getElementById("auto-thanks");
if (autoThanksCheckbox) {
  chrome.storage.sync.get("autoThanks", ({ autoThanks }) => {
    console.log("autoThanks initial ==>", autoThanks);
    if (!autoThanks) {
      autoThanksCheckbox.checked = false;
      // statusText.innerText = "Off";
      // statusText.style.color = "#d33";
    } else {
      autoThanksCheckbox.checked = true;
      // statusText.innerText = "On";
      // statusText.style.color = "#3d3";
    }
  });
}

if (autoThanksCheckbox) {
  autoThanksCheckbox.addEventListener("click", () => {
    chrome.storage.sync.get("autoThanks", ({ autoThanks }) => {
      console.log("autoThanks before switch ==>", autoThanks);
      if (autoThanks) {
        autoThanksCheckbox.checked = false;
        // statusText.innerText = "Off";
        // statusText.style.color = "#d33";
        chrome.storage.sync.set({ autoThanks: false });
      } else {
        autoThanksCheckbox.checked = true;
        // statusText.innerText = "On";
        // statusText.style.color = "#3d3";
        chrome.storage.sync.set({ autoThanks: true });
      }
    });
  });
}
