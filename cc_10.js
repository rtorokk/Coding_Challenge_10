// Task 1: Creating a Product Class

class Product { // Creating a class product
    constructor(name, id, price, stock) { // Setting up constructor
        this.name = name; // Setting up name
        this.id = id; // Setting up id
        this.price = price; // Setting up price
        this.stock = stock; // Setting up stock
    }
    getDetails() { // Creating a method getDetails
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`; // Returning the details of the product
    }
    updateStock(quantity) { // Creating a method updateStock
        this.stock -= quantity; // Updating the stock
    }
};

const prod1 = new Product("laptop", 101, 1200, 10); // Creating a new product
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3);// Updating the stock
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"