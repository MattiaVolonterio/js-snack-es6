const result = document.getElementById("result");

const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

const newTeams = [];

teams.forEach((team) => {
  team.score = generateRandomNumber(10, 1);
  team.foul = generateRandomNumber(10, 1);

  const { name, foul } = team;

  const newTeam = {
    name,
    foul,
  };

  result.innerHTML += `
  <li>
  La squadra ${name} ha subito ${foul} falli
  </li>
  `;

  newTeams.push(newTeam);
});

console.log(teams);

console.log(newTeams);

// ## FUNZIONI

function generateRandomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
