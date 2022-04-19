// Move sayThanks tr to the top of the table to make it more "Handy"
const centerTbody = document.querySelector("center tbody");
if (centerTbody) {
  const lastTr = centerTbody.querySelector("tr:last-child");
  centerTbody.innerHTML = lastTr.innerHTML + centerTbody.innerHTML;
}

// Fetch the ID from URL parameter and send a "thanks" request to the server.
const id =  new URLSearchParams(window.location.search).get("id");
if (id) {
  chrome.storage.sync.get("autoThanks", ({ autoThanks }) => {
    console.log("autoThanks is on! Thanks to torrent ID ==>", id);
    if (autoThanks) {
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.open("get", "/ajax.php?" + `action=say_thanks&id=${id}`);
      xmlHttp.send(null);
    }
  });
}
