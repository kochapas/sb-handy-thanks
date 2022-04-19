// Move sayThanks tr to the top of the table to make it more "Handy"
const centerTbody = document.querySelector("center>table>tbody");
if (centerTbody) {
  const sayThanks = centerTbody.querySelector("tr #saythanks");
  if (sayThanks) {
    centerTbody.innerHTML =
      sayThanks.parentElement.innerHTML + centerTbody.innerHTML;
  } else {
    centerTbody.innerHTML =
      `<tr>
        <td class="heading" valign="top" align="right">Thanks</td>
        <td valign="top" align="left">
          <img src="pic/smilies/thumbsup.gif">
          Thanks เรียบร้อยแล้ว
        </td>
      </tr>` + centerTbody.innerHTML;
  }
}

// Fetch the ID from URL parameter and send a "thanks" request to the server.
const id =  new URLSearchParams(window.location.search).get("id");
if (id) {
  chrome.storage.sync.get("autoThanks", ({ autoThanks }) => {
    if (autoThanks) {
      console.log("autoThanks is on! Thanks to torrent ID ==>", id);
      const xmlHttp = new XMLHttpRequest();
      xmlHttp.open("get", "/ajax.php?" + `action=say_thanks&id=${id}`);
      xmlHttp.send(null);
    }
  });
}
