const products = [
  { name: "camisa", price: 10.99, category: "Roupas" },
  { name: "Caleira Eletrica", price: 49.99, category: "Eletro" },
  { name: "Fogão", price: 400.0, category: "Eletro" },
  { name: "Calça Jeans", price: 50.99, category: "Roupas" },
];

products.map((product) => {
  if (product.category === "Roupas") {
    product.promotion = true;
  } 
});


 console.log(products)

 // MAP FUNCIONA IGUAL O FILTER SO PODENDO MANIPULAR OS DADOS JUNTAMENTE AO FILTRO