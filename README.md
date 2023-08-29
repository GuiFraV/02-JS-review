# Exercices JavaScript ES6

Ces exercices couvrent les méthodes et techniques ES6 de JavaScript. La maîtrise de ces concepts est essentielle pour comprendre et utiliser efficacement des bibliothèques et frameworks modernes comme React.

## Sommaire

- [Destructuring](#destructuring)
- [Rest / Spread Operator](#rest--spread-operator)
- [Opérateurs ternaires](#opérateurs-ternaires)
- [Arrow Functions](#arrow-functions)
- [Optional Chaining](#optional-chaining)
- [Méthodes .map(), .filter(), et .reduce()](#méthodes-map-filter-et-reduce)

### Destructuring

Le destructuring permet d'extraire des données de tableaux ou d'objets en utilisant une syntaxe qui reflète la structure des tableaux et objets.

```javascript
const livre = ["Harry Potter", "J.K. Rowling", 1997, "Fantastique"];
const [titre, auteur, year, genre='inconnu'] = livre;
const livre = ["Harry Potter", "J.K. Rowling", 1997, "Fantastique"];
const [titre, auteur, year, genre='inconnu'] = livre;
```

### Rest / Spread Operator

Les opérateurs Rest et Spread sont des outils puissants pour travailler avec des tableaux et des objets.

Exemple :

```javascript
const obj1 = { a: 1, b: 2 };
const objFusion = {...obj1, c: 3};
```
### Opérateurs ternaires
L'opérateur ternaire est une manière concise d'effectuer des vérifications conditionnelles.

Exemple :

```javascript
const age = 20;
const categorie = age < 18 ? "mineur" : "majeur";
```

### Arrow Functions
Les fonctions fléchées offrent une syntaxe plus courte pour écrire des fonctions.

Exemple :

```javascript
const double = nombre => nombre * 2;
```

### Optional Chaining
L'optional chaining est une manière sûre d'accéder aux propriétés imbriquées d'un objet.

Exemple :

```javascript
const user = {};
const ville = user?.adresse?.ville;
```

### Méthodes .map(), .filter(), et .reduce()
Ces méthodes sont essentielles pour transformer, filtrer et agréger des données dans des tableaux.

Exemple :

```javascript
const nombres = [1, 2, 3, 4];
const doubles = nombres.map(n => n * 2);
```

### Pourquoi ces méthodes sont-elles essentielles pour React ?

React est une bibliothèque JavaScript qui repose fortement sur les concepts ES6 et les versions ultérieures de JavaScript. Que ce soit pour définir des composants sous forme de fonctions fléchées, utiliser le destructuring pour gérer les props ou encore utiliser .map() pour afficher des listes, ces techniques sont omniprésentes dans le développement React.

## Gestion de l'asynchronicité en JavaScript

JavaScript offre plusieurs méthodes pour gérer les opérations asynchrones, telles que les requêtes réseau. Deux des méthodes les plus populaires sont les Promesses et `async/await`.

### Promesse API

Les Promesses sont un moyen de gérer les opérations asynchrones sans tomber dans l'enfer des callbacks. Elles peuvent être en trois états : en attente, résolues ou rejetées.

```javascript
// Exemple utilisant la Promesse API
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((res) => res.json())
.then((data) => console.log(data));
```

Dans cet exemple, la méthode fetch() renvoie une promesse. La méthode .then() est utilisée pour gérer la résolution de cette promesse. La première .then() convertit la réponse en JSON, et la seconde .then() affiche les données.

### Fonctions async/await

Les fonctions async/await sont une amélioration syntaxique apportée par ES7 pour rendre le code asynchrone plus lisible et similaire à un code synchrone traditionnel.

```javascript
async function getTodos(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  console.log(data);
  return data;
}
```

Dans cet exemple, la déclaration async signifie que la fonction renvoie toujours une promesse. L'opérateur await est utilisé pour attendre qu'une promesse soit résolue. Cette approche rend le code asynchrone plus structuré et évite l'enfer des callbacks.