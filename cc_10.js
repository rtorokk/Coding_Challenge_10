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

// Task 2: Creating an Order Class

class Order { // Creating a class order
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(quantity);
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"
