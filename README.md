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

### Sujet : Fetch vs Axios

#### Fetch

L'API Fetch permet de réaliser des requêtes HTTP et accéder à leurs réponses. Elle fournit également une méthode globale fetch() qui offre un moyen facile et logique de récupérer des ressources de manière asynchrone.


La méthode fetch() prend un argument obligatoire : le chemin vers la ressource que vous voulez récupérer. Et renvoie une réponse.


Par exemple, une requête basique ressemble à ça : 

```javascript
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
```

#### Axios

Axios est une bibliothèque Javascript utilisée pour effectuer des requêtes http depuis node.js ou XMLHttpRequests depuis le navigateur. Elle prend en charge l'API Promise native (https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).


Selon sa documentation, Axios présente certaines caractéristiques essentielles :

- Il peut être utilisé pour intercepter les demandes et les réponses http.
- Il transforme automatiquement les données des demandes et des réponses.
- Il possède un support intégré pour la progression des téléchargements.
- Il a la possibilité d'annuler des demandes.


Par exemple, une requête basique ressemble à ça : 

```javascript
axios.get('exemple.json')
  .then(function (response) {
    return response;
  })
  .catch(function (error) {
    console.log(error);
  });
```

#### Compatibilité

Un des avantages d'Axios est qu'il est supporté par une énorme majorité de navigateurs. Parmis lesquels on retrouve IE 11 qui fait tourner Axios sans aucun problème.

Fetch quant à lui ne fonctionne pas sur IE 11 (voir https://caniuse.com/#feat=fetch)
Ce qui nous oblige à utiliser un polyfill tel que `whatwg-fetch`.

#### Transformation automatique des data JSON

Axios transforme automatiquement les datas lors de la requête alors qu'en utilisant Fetch, il faut le faire manuellement :

```javascript
// Fetch
fetch("exemple.json")
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```
```javascript
// Axios
axios
  .get("exemple.json")
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
  })
```
#### Interception des requêtes et des réponses

L'une des principales caractéristiques d'Axios est sa capacité à intercepter les requêtes HTTP. Les intercepteurs peuvent être très utiles lorsqu'on veut toucher à des requêtes HTTP. Alors Fetch ne fournit pas de moyen d'intercepter les requêtes HTTP. Il faut réécrire la méthode globale et définir un intercepteur.

#### Conclusion

J'ai listé ici quelques différences majeures entre Axios et Fetch. Finalement, Axios et Fetch permettent globalement de faire les mêmes choses. Les différences s'illustrent seulement dans des cas précis mais sont la plupart du temps contournables. Le choix peut donc être dicté par l'habitude qu'on a d'utiliser un des deux plutôt que l'autre, le besoin de compatibilité (même si Fetch dispose de polyfill), une fonctionnalité précise etc... Les deux choix sont viables dans la grande majorité des cas.
