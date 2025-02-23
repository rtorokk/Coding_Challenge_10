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
    constructor(orderId, product, quantity) {// Setting up constructor
        this.orderId = orderId;// Setting up orderId
        this.product = product;// Setting up product
        this.quantity = quantity;// Setting up quantity
        this.product.updateStock(quantity);// Updating the stock
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }
}

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 3: Creating an Invenotry Class

class Inventory { // Creating a class inventory
    constructor() {
        this.products = [];// Setting up products
        this.orders = [];// Setting up orders
    }
    addProduct(product) { // Creating a method addProduct
        this.products.push(product); // Adding product
    }
    listProducts() { // Creating a method listProducts
        return this.products.forEach(product => console.log(product.getDetails())); // Listing the products
    }
    placeOrder(orderId, product, quantity) { // Creating a method placeOrder for Task 4
        if (product.stock >= quantity) { // Checking if the stock is enough
            let order = new Order(orderId, product, quantity); // Creating a new order
            this.orders.push(order); // Adding the order
        } else {
            return "Insufficient stock"; // If the stock is not enough
}
    }
    listOrders() { // Creating a method listOrders for Task 4
        this.orders.forEach(order => console.log(order.getOrderDetails())); // Listing the orders
    }
    restockProduct(productId, quantity) { // Creating a method restockProduct for Task 5
        let product = this.products.find(product => product.id === productId); // Finding the product
        product.stock += quantity; // Restocking the product
    }
};

const inventory = new Inventory(); // Creating a new inventory
inventory.addProduct(prod1); // Adding product
inventory.listProducts(); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

// Task 4: Implementing Order Management
inventory.placeOrder(601, prod1, 2); // Placing an order
inventory.listOrders(); // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"

// Task 5: Implementing Product Restocking
inventory.restockProduct(101, 5); // Restocking the product
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"