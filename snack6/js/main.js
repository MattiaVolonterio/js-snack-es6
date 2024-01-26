const products = [
  {
    title: "Mela",
    price: 2.3,
  },
  {
    title: "Banana",
    price: 1.5,
  },
  {
    title: "Mango",
    price: 2,
  },
  {
    title: "Pesca",
    price: 1.8,
  },
  {
    title: "Pera",
    price: 1.5,
  },
  {
    title: "Arancia",
    price: 2.2,
  },
];

let frutta = parseInt(prompt("Quanti frutti vuoi nella macedonia?"));
let totalPrice = 0;

if (!isNaN(frutta) && frutta <= products.length) {
  for (let i = 0; i < frutta; i++) {
    let index = Math.floor(Math.random() * (products.length - 0));
    totalPrice += products[index].price;
  }
} else {
  alert("il numero inserito non è valido");
}

console.log(`La tua macedonia è costata ${totalPrice} €`);
