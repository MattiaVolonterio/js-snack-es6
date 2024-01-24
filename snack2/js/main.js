const students = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84,
  },
];

// mappo l'array studenti per ottenere un'array di stringhe con i nomi tutti maiuscoli
const studentsUppercased = students.map((student) =>
  student.name.toUpperCase()
);

// Filtro l'array studenti per ottenere un'array di studenti con voti superiori a 70
const studentsHighGrades = students.filter((student) => student.grades > 70);

// Filtro l'array degli studenti con voti più alti di 70 per crearne un'altro in cui abbiano anche un'id maggiore di 120
const studentsHighId = studentsHighGrades.filter((student) => student.id > 120);

console.log("L'array contente i nomi tutti in maiuscolo: ", studentsUppercased);

console.log(
  "L'array contente gli studenti con voti più alti di 70: ",
  studentsHighGrades
);

console.log(
  "L'array contente gli studenti con voti più alti di 70 e id maggiore di 120: ",
  studentsHighId
);
