const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

const resultVips = vips.map((vip, index) => {
  const vipObject = {
    tableName: "Tavolo Vip",
    vipName: vip,
    tableSeat: index + 1,
  };

  return vipObject;
});

console.log(resultVips);
