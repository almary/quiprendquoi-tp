if (navigator.clipboard) {
  document.querySelectorAll("[data-clipboard]").forEach($clipboardEl => {
    const $button = document.createElement("button");
    $button.classList.add("subtitle__content--button");
    $button.innerHTML = "Copier l'url";
    $clipboardEl.parentNode.append($button);

    $button.addEventListener(
      "click",
      copyToClipboard.bind(this, $clipboardEl, $button)
    );
  });
} else {
  console.warn("Pas de support de l'api clipboard");
}

function copyToClipboard($clipboardEl, $button) {
  navigator.clipboard
    .writeText($clipboardEl.getAttribute("data-clipboard"))
    .then(() => {
      $button.innerHTML = "Copié !";
      setTimeout(() => ($button.innerHTML = "Copier l'url"), 2000);
    })
    .catch(err => console.warn(err));
}
