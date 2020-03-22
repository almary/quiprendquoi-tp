if (typeof party !== "undefined") {
  if (window.fetch) {
    var itemsLength;
    var partyId = document
      .querySelector("[data-party-id]")
      .getAttribute("data-party-id");

    //init items length
    fetch(`http://bastiencalou.fr:3000/party/${partyId}`).then(response => {
      response.json().then(data => {
        itemsLength = data.items.length;
      });
    });

    setInterval(() => {
      fetch(`http://bastiencalou.fr:3000/party/${partyId}`).then(response => {
        response.json().then(data => {
          var items = data.items;

          if (items.length !== itemsLength) {
            document.location.reload(true);
          }
        });
      });
    }, 5000);
  } else {
    console.warn("Pas de support de l'api fetch");
  }
}
