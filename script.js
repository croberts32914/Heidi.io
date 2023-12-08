let cart = [];
let total = 0;

function addToCart() {
    // You can implement logic to add the selected item to the cart array
    // and update the total price.
    // For simplicity, let's just add a placeholder item.
    const item = {
        name: "Awesome T-Shirt",
        price: 19.99,
    };

    cart.push(item);
    total += item.price;

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById("cartItems");
    const totalElement = document.getElementById("total");

    // Clear previous items
    cartItemsElement.innerHTML = "";

    // Update cart items
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    // Update total
    totalElement.textContent = total.toFixed(2);
}

function checkout() {
    // Implement checkout logic, e.g., redirect to a payment page.
    alert("Checkout feature is not implemented in this example.");
}
