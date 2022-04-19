console.log("content.js Loaded!");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
console.log("id ==>", id);
// sndReq("action=to_thank&id=1782591", "saythankup");
