/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
n1 = 10;
n2 = 20;
const sum = n1 + n2;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
const random = Math.floor(Math.random() * 21);
console.log(random);
/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
const me = {};
me;
(me.name = "kassandra"), (me.surname = "falsitta"), (me.age = 23);
console.log(me);
/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
delete me.age;
console.log(me);
/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
me.skills = ["html", "css"];
console.log(me);
/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
me.skills.push("js");
console.log(me);
/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
me.skills.pop();
console.log(me);
// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
const dice = function () {
  return Math.ceil(Math.random() * 6);
};
console.log(dice());
/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
const whoIsBigger = (n1, n2) => {
  if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};

console.log(whoIsBigger(3, 10));
/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
const splitMe = (str) => {
  return str.split(" ");
};

console.log(splitMe("i love coding"));
/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
const deleteOne = (str, booln) => {
  if (booln === true) {
    return str.slice(1);
  } else if (booln === false) {
    return str.slice(0, -1);
  } else {
    return "devi inserire un valore booleano";
  }
};

console.log(deleteOne("ciao", false));
/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
const onlyLetters = (str) => {
  const arrs = str.split(" ");

  for (let i = 0; i < arrs.length; i++) {
    return str
      .replace(1, "")
      .replace(2, "")
      .replace(3, "")
      .replace(4, "")
      .replace(5, "")
      .replace(6, "")
      .replace(7, "")
      .replace(8, "")
      .replace(9, "")
      .replace(10, "")
      .replace(0, "");
  }
};

console.log(onlyLetters("I have 4 dogs"));

// console.log(onlyLetters("i have 4 dog"));
/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
const isThisAnEmail = function (str) {
  if (str.includes("@") && str.includes(".")) {
    return true;
  } else {
    return false;
  }
};
console.log(isThisAnEmail("kassy@gmail.com"));
/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
const whatDayIsIt = function () {
  const date = new Date();
  const dayOfDate = date.getDate();
  console.log(` oggi è il ${dayOfDate} del mese `);
};
whatDayIsIt();
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
const rollTheDices = function (num) {
  const object = {};
  object.sum = 0;
  object.values = [];
  for (let i = 0; i < num; i++) {
    const recallFunction = dice();
    object.values.push(recallFunction);
    object.sum += recallFunction;
  }
  console.log(object);
};
rollTheDices(6);
/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
const howManyDays = function (date) {
  const option = [
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    },
  ];

  const arrData1 = [];
  const arrDataCreate = [];
  const date2 = new Date();
  const todayDate = date2.toLocaleString(undefined, option[1]).split(",")[0]; //un casino lo so :')
  let date1 = date.split(" ");
  const dateCreate = todayDate.split("/");
  console.log(dateCreate);
  for (let i = 0; i < date1.length; i++) {
    const numberDate1 = parseInt(date1[i]);
    arrData1.push(numberDate1);
    const numberDataCreate = parseInt(dateCreate[i]);
    arrDataCreate.push(numberDataCreate);
  }
  console.log(arrData1);
  console.log(arrDataCreate);
  const differenza = [];
  for (let i = 0; i < arrData1.length; i++) {
    if (arrData1[i] < arrDataCreate[i]) {
      differenza.push(arrDataCreate[i] - arrData1[i]);
      console.log("ciao");
      // const sum = arrData1[i] - arrDataCreate[i]

      // differenza.push(sum);

      //
      //   ;
      //   console.log("ciao");
      //
    } else {
      differenza.push(arrData1[i] - arrDataCreate[i]);
    }
  }
  console.log(differenza[0]);
  console.log(
    `la differenza è: ${differenza[0]} giorni,  ${differenza[1]} mesi e ${differenza[2]}  anno/anni`
  );
};
howManyDays("12 5 2023");
/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
const isTodayMyBirthday = function (day) {
  if (day === "25 novembre" || day === "25 Novembre") {
    return true;
  } else {
    return false;
  }
};

console.log(isTodayMyBirthday("25 Novembre"));
// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
const deleteProp = (obj, str) => {
  delete obj[str];

  console.log(obj);
};

deleteProp({ name: "giorgio", surname: "matteotti" }, "surname");
/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
const newestMovie = () => {
  let arrMax = [0];
  for (const movie of movies) {
    const movieYear = parseInt(movie.Year);
    if (movieYear > arrMax) {
      arrMax = movieYear;
    }
  }
  console.log(arrMax);
};

newestMovie();
/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
const countMovies = function (movie) {
  console.log(movie.length);
};
countMovies(movies);
/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

const onlyTheYears = () => {
  const yearMovie = [];
  for (const movie of movies) {
    yearMovie.push(movie.Year);
  }
  console.log(yearMovie);
};
onlyTheYears();
/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
const onlyInLastMillennium = () => {
  for (const movie of movies) {
    const numberYearMovie = parseInt(movie.Year);
    if (numberYearMovie < 2000) {
      console.log(movie);
    }
  }
};
onlyInLastMillennium();

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
const sumAllTheYears = () => {
  let sum = 0;
  for (const movie of movies) {
    const numberYearMovie = parseInt(movie.Year);
    sum += numberYearMovie;
  }
  console.log(sum);
};
sumAllTheYears();
/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
const searchByTitle = (str) => {
  for (const movie of movies) {
    if (movie.Title === str) {
      console.log(movie);
    }
  }
};
searchByTitle("Avengers: Endgame");

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
const searchAndDivide = (str) => {
  for (const movie of movies) {
    const match = [];
    const unmatch = [];

    if (movie.Title === str) {
      match.push(movie);
    } else {
      unmatch.push(movie);
    }
    console.log(match);
    console.log(unmatch);
  }
};

searchAndDivide("Avengers: Endgame");
/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
let movie = [];
const removeIndex = (n) => {
  parseInt(n);
  const movieSplice = movies.splice(n, movies.length);
  const movieSplice2 = movies.splice(0, n - 1);
  movie = movieSplice.concat(movieSplice2);
  console.log(movie);
};

removeIndex("2");
// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
const idcontainer = () => {
  const container = document.getElementById("containter");
  console.log(container);
};

idcontainer();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
const td1 = document.querySelectorAll("td");
const tdnn = () => {
  for (const td2 of td1) {
    console.log(td2);
  }
};

tdnn();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
const innerTextTd = () => {
  for (const td2 of td1) {
    console.log((td2.innerText = "sono una td"));
  }
};
innerTextTd();
/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
const link = document.querySelectorAll("a");
const colorRed = () => {
  for (const li of link) {
    li.style.backgroundColor = "red";
  }
};
colorRed();
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
const list = document.createElement("li");
list.className = "list";
const ol = document.querySelector("#myList");
const myList = () => {
  list.innerText = "sono una lista";

  ol.appendChild(list);
};

myList();
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
const removeList = () => {
  list.remove();
};

removeList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const tr1 = document.querySelectorAll("tr");
const allTr = () => {
  for (const tr of tr1) {
    tr.className = "test";
  }
};

allTr();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

const halfTree = (n) => {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
};

halfTree(6);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
const tree = (n) => {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j <= i; j++) {
      document.write("*");
    }
    document.write("<br>");
  }
};

tree(3);
/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
const isItPrime = (n) => {
  const numberofNumber = parseInt(n);
  if (
    numberofNumber / numberofNumber === 0 &&
    numberofNumber > 0 == 4 &&
    numberofNumber / 1 === 0
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isItPrime("6");
/* Questo array viene usato per gli esercizi. Non modificarlo. */
