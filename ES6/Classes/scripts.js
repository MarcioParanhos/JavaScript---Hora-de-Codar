class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  productDiscount(discount) {
    return this.price * (100 - discount / 100);
  }
}

const camisa = new Product("Mahalo", 20)
console.log(camisa.name)
console.log(camisa)