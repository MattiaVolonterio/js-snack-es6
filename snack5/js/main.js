let cars = [
  {
    color: "purple",
    type: "minivan",
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    capacity: 5,
  },
  {
    color: "yellow",
    type: "minivan",
    capacity: 9,
  },
  {
    color: "green",
    type: "smart",
    capacity: 2,
  },
];

const userInput = parseInt(
  prompt("Inserisci il numero di passeggeri per trovare un veicolo adatto")
);

let postiDisponibiliMassimi = cars[0].capacity;

const massimoCapacita = cars.forEach((car) => {
  if (car.capacity > postiDisponibiliMassimi) {
    postiDisponibiliMassimi = car.capacity;
  }
});

if (!isNaN(userInput) && postiDisponibiliMassimi > userInput) {
  const maxCars = cars.filter((car) => {
    return userInput <= car.capacity;
  });

  let macchina = maxCars[0];

  const primaMacchinaUtile = maxCars.forEach((car) => {
    if (macchina.capacity > car.capacity) {
      macchina = car;
    }
  });

  console.log(macchina);
} else {
  alert("devi inserire un numero oppure ci sono troppi passeggeri");
}
