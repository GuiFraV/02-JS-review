const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring

const book = getBook(1);


// const title = book.title;
// const author = book.author;

const {title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

console.log(author, title, genres);

// const primaryGenre = genres[0]
// const secondaryGenre = genres[1]

const [primaryGenre, secondaryGenre, ...otherGenres] = genres

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, 'epic fantasy']
newGenres;

const updatedBook = {...book, moviePublicationDate: '2001-12-19', pages: 1210}
updatedBook;

const film = ["Inception", ["Leonardo DiCaprio", "Ellen Page", ["Christopher Nolan", "Action"]]];
const [titre, [premierActeur, deuxiemeActeur,[realisateur,genre]]] = film
genre

const voiture = [
  "Tesla", "Model 3", 
  { couleur: "rouge", 
    annee: 2020, 
    options: ["GPS", "Toit ouvrant"] 
  }
];

const [
  marque, modele, 
  {couleur,
  annee,
  options: [premierOption, deuxiemeOption]
  }
] = voiture

premierOption

function afficherInfosEtudiant(arrayStudent){
  
  const [prenom, nom, age, [noteMath, noteAnglais, noteHistoire ]] = arrayStudent;

  console.log(`Prénom : ${prenom}`) 
  console.log(`Nom : ${nom}`) 
  console.log(`Âge : ${age}`)
  console.log(`Notge de math : ${noteMath}`)
  console.log(`Note d'anglais : ${noteAnglais}`)
  console.log(`Note d'histoire : ${noteHistoire}`)

} 

const etudiant = ["Emma", "Dupont", 20, [15, 18, 14]];

afficherInfosEtudiant(etudiant)


function somme(...rest){

  let result = 0;

  for(let i = 0 ; i< rest.length; i++){

   result += rest[i];

  }

  console.log(result);
}


somme(1,2,3,4,5,6,7,8,9,10)

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const objFusion = {...obj1, ...obj2}

objFusion

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arrFusion = [...arr1, ...arr2]

arrFusion

function categorieAge(age){


  age < 13 ? console.log("Enfant") :  false

  age >= 13 && age <= 19 ? console.log("Adolescent") : false
  
  age > 19 ? console.log("Adulte") : false


}

// categorieAge(20)

function prixEntree(age, student) {

  age < 5 ? console.log("Gratuit") : false

  student && age > 5 ? console.log('5€') : false

  age > 5 && student == false ? console.log(('10€')) : false


}

// prixEntree(7, true)

function verifierStock(nombre){

  return nombre == 0 ? console.log("En rupture de stock") : 
  nombre >= 1 && nombre <= 5 ? console.log("Stock faible") : 
  nombre > 5 ? console.log("Stock disponible") : 
  false 

}

verifierStock(6)

function prixVente(stock, promotion){

 return promotion ? console.log('20€') :
 stock > 0 && stock < 6 ? console.log('30€') :
 console.log('25€')

}

prixVente(5, false)

const double = (nombre) => nombre*2; 

console.log(double(30))

const some = (first, second) => first + second;

console.log(some(1,8));

const majuscule = (arrayString) => arrayString.map((c) => c.toUpperCase());

console.log(majuscule(['a','b','c']))

const nombresPairs = (array) => array.filter((n) => n%2 == 0 )

console.log(nombresPairs([1,2,3,4]))

function getTotalReviewCount(book){

    const goodreads = book.reviews.goodreads.reviewsCount;
    const librarything = book.reviews.librarything.reviewsCount;
    return goodreads + librarything

}

console.log(getTotalReviewCount(book))

const utilisateur = {
  nom: "Martin",
  adresse: {
    rue: "Rue de la Paix",
    ville: "Paris",
    codePostal: 75000,
    coordonnees: {
      latitude: 48.8566, //ici
      longitude: 2.3522
    }
  }
};

function obtenirLatitude(user){

  return user?.adresse?.coordonnees?.latitude ?? "Latitude non disponible";

}

console.log(obtenirLatitude(utilisateur));

const preferencesUtilisateur = {
  theme: "sombre",
  notifications: {
    email: true,
    sms: false,
    push: {
      actif: true,
      frequence: "quotidien" //ici
    }
  }
};

function frequenceNotificationPush(obj){

  return obj?.notifications?.push?.frequence ?? "Fréquence non définie";

}

console.log(frequenceNotificationPush(preferencesUtilisateur))

const profil = {
  nom: "Dupont",
  contact: {
    email: "dupont@email.com", // ici
    telephone: {
      fixe: "01-23-45-67-89",
      mobile: "06-78-90-12-34" //ici
    }
  },
  preferences: {
    couleurTheme: "bleu",
    newsletter: true //ici
  }
};

// function obtenirEmail(profil){

//   return profil?.contact?.email ?? "Email non disponible"

// }


const obtenirEmail = (profil) => profil?.contact?.email ?? "Email non disponible"; 

console.log(obtenirEmail(profil))

// function obtenirMobile(profil){
  
//   return profil?.contact?.telephone?.mobile ?? "Numéro mobile non disponible"

// }

const obtenirMobile = (profil) => profil?.contact?.telephone?.mobile ?? "Numéro mobile non disponible";

console.log(obtenirMobile(profil))

// function preferenceNewsLetter(profil){
  
//   return profil?.preferences?.newsletter;

// }

const preferenceNewsLetter = (profil) => profil?.preferences?.newsletter;

console.log(preferenceNewsLetter(profil))

const produits = [
  { nom: "Ordinateur", prix: 1000 },
  { nom: "Téléphone", prix: 500 },
  { nom: "Casque", prix: 100 },
  { nom: "Souris", prix: 25 }
];

function augmenterPrix(arr, percent) {
  const pc = 1 + (percent / 100);
  return arr.map((el) => {
    return {
      nom: el.nom,
      prix: el.prix * pc
    };
  });
}

console.log(augmenterPrix(produits, 10));

// function listeNoms(produits){

//   return produits.map((el) => el?.nom )

// }

const listeNoms = (produits) => produits.map((el) => el?.nom)

console.log(listeNoms(produits))

// function prixTVA(produits){

//   const pc = 1 + (20/100);
//   console.log(pc)
//   produits.map((el) => el.tva = el?.prix * pc)
//   return produits

// }

const pc = 1 + (20/100);

const prixTVA = (produits) => produits.map((el) => el.tva = el?.prix * pc)

console.log(prixTVA(produits))

const personnes = [
  { nom: "Martin", age: 35, profession: "Ingénieur" },
  { nom: "Sophie", age: 28, profession: "Designer" },
  { nom: "Lucas", age: 42, profession: "Médecin" },
  { nom: "Julie", age: 19, profession: "Étudiante" },
  { nom: "Pierre", age: 67, profession: "Retraité" }
];

// function plusDeTrenteAns(pers){

//   return pers.filter((el) => el.age > 29)

// }

const plusDeTrenteAns = (pers) => pers.filter((el) => el.age > 29)

console.log(plusDeTrenteAns(personnes))

// function estEtudiant(pers){

//   return pers.filter((el) => el.profession == 'Étudiante')
// }

const estEtudiant = (pers) => pers.filter((el) => el.profession == "Étudiante")

console.log(estEtudiant(personnes))