// Function to add a product to the cart
function addToCart(id, name, price) {
    // Get the existing cart from localStorage or create a new one
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the product already exists in the cart
    let product = cart.find(item => item.id === id);

    if (product) {
        // If the product exists, increase the quantity
        product.quantity += 1;
    } else {
        // Otherwise, add a new product to the cart
        cart.push({
            id: id,
            name: name,
            price: price,
            quantity: 1
        });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count in the header
    updateCartCount();
}

// Function to update the cart count display
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);
