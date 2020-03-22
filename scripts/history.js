// //Wait for the dom
window.onload = setupHistoryButton;

//Button delete history
function setupHistoryButton() {
  var deleteHistoryButton = document.getElementById("deleteHistory");
  if (deleteHistoryButton) {
    deleteHistoryButton.addEventListener("click", deleteHistory);
  }
}

function deleteHistory() {
  localStorage.removeItem("createdHistory");
  removeHistoryLinks();
}

//

function isPartyPage(url) {
  return /party\/[a-zA-Z0-9]*$/.test(url);
}

if (isPartyPage(window.location.href) == true) {
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
      $a.onload = "print()";
      $a.innerHTML = urlHistory[i];
      $historyEl.append($a);
    }
  });
}

function removeHistoryLinks() {
  var historyLinks = document.getElementsByClassName("history__link");
  while (historyLinks.length > 0) {
    historyLinks[0].parentNode.removeChild(historyLinks[0]);
  }
}
