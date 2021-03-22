import "./styles.css";
async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  let jj = JSON.parse(myText);
  let s =
    '<table class="table"><!---<thead><tr><th scope="col">ip</th><th scope="col">ip</th></tr></thead>---><tbody>';
  for (let i = 0; i < jj.length; i++) {
    s +=
      "<tr><td>" +
      jj[i].id +
      '<br><span class="time">' +
      jj[i].time +
      '</span>&nbsp;<span class="ip">' +
      jj[i].ip +
      "</span></td></tr>";
  }
  s += "</tbody></table>";
  localStorage.setItem("_fetched_data", s);
}
getText("https://track.mail.shubh.online/api/index.php");
document.getElementById("app").innerHTML = localStorage.getItem(
  "_fetched_data"
);
