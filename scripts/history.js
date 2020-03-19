var splicedURL = window.location.href.split("/");

if (splicedURL[3] == "party") {
  createdHistory(window.location.href);
}

function createdHistory(searchParam) {
  var urlHistory = JSON.parse(localStorage.getItem("createdHistory") || "[]");

  //check if url is already stored
  if (urlHistory.indexOf(window.location.href) > -1) {
    return;
  } else {
    var updatedHistory = urlHistory.concat(searchParam);
    localStorage.setItem("createdHistory", JSON.stringify(updatedHistory));
  }
}

var urlHistory = JSON.parse(localStorage.getItem("createdHistory") || "[]");

if (urlHistory.length !== 0) {
  document.querySelectorAll(".history").forEach($historyEl => {
    for (let i = 0; i < urlHistory.length; i++) {
      const $a = document.createElement("a");
      $a.classList.add("history__link");
      $a.href = urlHistory[i];
      $a.innerHTML = urlHistory[i];
      $historyEl.append($a);
    }
  });
}
