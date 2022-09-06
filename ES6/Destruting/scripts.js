const frutas = ["Laranja", "Maçã", "Mamão", "Goiaba", "Acerola"];

const [f1, f2, f3, f4, f5] = frutas;

const productsDetails = {
  name: "Mouse",
  price: 39.99,
  category: "Perifericos",
  color: "Cinza ",
};

// Separando objeto em variaveis 
const {
  name: productName,
  price,
  category: productCategory,
  color,
} = productsDetails;

console.log(`O nome do produto e ${productName} e custa ${price} Reais, Disponivel apenas na cor ${color}`)