# Qui prend quoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées

- Ajout d'un design (commit `style`, tous les fichiers dans `/style`)
- Modification d'un événement (commit `update event`)
- Suppression d'un événement (commit `delete event`)
- Événements récemment consultés + accès rapide (commit `récemment consultés`)
- Ajout/suppression d'items (commit `Etape 17`)
- Requête fetch toutes les 5 secondes sur la page party, recharge la page si la liste des items a changé (commit `fetch`)

## Article personnel

### Sujet : Axios vs Fetch

Ce TP nous fait utiliser Axios et Fetch qui permettent de faire des requêtes HTTP.

Axios est une librairie alors que Fetch est une API.

#### Fetch

L'API Fetch permet de réaliser des requêtes HTTP et accéder à leurs réponses. Elle fournit également une méthode globale fetch() qui offre un moyen facile et logique de récupérer des ressources de manière asynchrone.


La méthode fetch() prend un argument obligatoire : le chemin vers la ressource que vous voulez récupérer. Et renvoie une réponse.


Par exemple, une requête basique ressemble à ça : 

``
fetch('exemple.json')
  .then((response) => {
    return response.json()
  })
  .then( (data) => {
    return data;
  })
  .catch((err) =>{
    console.log(err)
  })
``

#### Axios

Axios est une bibliothèque Javascript utilisée pour effectuer des requêtes http depuis node.js ou XMLHttpRequests depuis le navigateur. Elle prend en charge l'API Promise native (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).


Selon sa documentation, Axios présente certaines caractéristiques essentielles :

Il peut être utilisé pour intercepter les demandes et les réponses http.
Il transforme automatiquement les données des demandes et des réponses.
Il possède un support intégré pour la progression des téléchargements.
Il a la possibilité d'annuler des demandes.


Par exemple, une requête basique ressemble à ça : 

``
axios.get('exemple.json')
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
``

#### Compatibilité

Un des avantages d'Axios est qu'il est supporté par une énorme majorité de navigateurs. Parmis lesquels on retrouve IE 11 qui fait tourner Axios sans aucun problème.

Fetch quant à lui ne fonctionne pas sur IE 11 (voir https://caniuse.com/#feat=fetch)
Ce qui nous oblige à utiliser un polyfill tel que `whatwg-fetch`.

#### Transformation automatique des data JSON

Axios transforme automatiquement les datas lors de la requête alors qu'en utilisant Fetch, il faut le faire manuellement :

``
// Fetch
fetch("exemple.json")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
``
``
// Axios
axios
  .get("exemple.json")
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
``

Plan en cas de panne d'inspiration :

- Description du sujet choisi (sa définition, son but...)
- Exemple d'utitlisation ou d'implémentation (bout de code si pertinent, capture d'écran...)
- Conclusion : avantages, inconvénients et cas d'usage
