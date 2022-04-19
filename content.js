console.log("content.js Loaded!");

const id =  new URLSearchParams(window.location.search).get("id");
if (id) {
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.open("get", "/ajax.php?" + `action=say_thanks&id=${id}`);
  xmlHttp.send(null);
}
