const sum = function sum(a, b) {
  return a + b;
};

// Arrow Function
const arrowSum = (a, b) => a + b;

console.log(sum(6, 10));
console.log(arrowSum(6, 10));

const saldacao = (name) => {
  if (name) {
    return `Olá ${name} Seja bem vindo!`;
  }
};

console.log(saldacao("Marcio"));
