console.log("Popup.js Loaded!");

const autoThanksCheckbox = document.getElementById("auto-thanks");
if (autoThanksCheckbox) {
  // Set initial checkbox value based on user's setting.
  chrome.storage.sync.get("autoThanks", ({ autoThanks }) => {
    console.log("autoThanks initial ==>", autoThanks);
    autoThanksCheckbox.checked = autoThanks ? true : false;
  });

  // Add event listener to autoThanksCheckbox.
  autoThanksCheckbox.addEventListener("click", () => {
    chrome.storage.sync.get("autoThanks", ({ autoThanks }) => {
      console.log("autoThanks before switch ==>", autoThanks);
      const newAutoThanks = autoThanks ? false : true;
      autoThanksCheckbox.checked = newAutoThanks;
      chrome.storage.sync.set({ autoThanks: newAutoThanks });
      console.log("autoThanks after switch ==>", newAutoThanks);
    });
  });
}
