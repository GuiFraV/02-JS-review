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