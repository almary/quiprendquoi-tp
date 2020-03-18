if (navigator.share) {
  document.querySelectorAll("[data-share-url]").forEach($shareEl => {
    const $button = document.createElement("button");
    $button.classList.add("subtitle__content--button");
    $button.innerHTML = "Partager";
    $shareEl.parentNode.append($button);

    $button.addEventListener(
      "click",
      shareParty.bind(this, $shareEl, $button)
    );
  });
} else {
  console.warn("Pas de support de l'api share");
}

function shareParty(element) {
  navigator.share({
    title: element.getAttribute("data-share-title"),
    text: element.getAttribute("data-share-text"),
    url: element.getAttribute("data-share-url")
  });
}
