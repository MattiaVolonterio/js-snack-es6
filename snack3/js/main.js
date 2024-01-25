const result = document.getElementById("result");

const bicycles = [
  {
    name: "Bicicletta 1",
    weight: 15,
  },
  {
    name: "Bicicletta 2",
    weight: 7,
  },
  {
    name: "Bicicletta 3",
    weight: 8,
  },
  {
    name: "Bicicletta 4",
    weight: 1,
  },
  {
    name: "Bicicletta 5",
    weight: 4,
  },
  {
    name: "Bicicletta 6",
    weight: 10,
  },
  {
    name: "Bicicletta 7",
    weight: 6,
  },
  {
    name: "Bicicletta 8",
    weight: 2,
  },
];

let lighterBicicle = bicycles[0];

bicycles.forEach((bicycle) => {
  if (bicycle.weight < lighterBicicle.weight) {
    lighterBicicle = bicycle;
  }
});

const { name, weight } = lighterBicicle;

console.log(
  `La bicicletta che si chiama: ${name} e con peso ${weight} kg è la più leggera`
);

result.innerText = `La bicicletta che si chiama ${name} e con peso ${weight} kg è la più leggera`;
