
const shoppingCart = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    // Add the item to the shopping cart array
  console.log('item added');
  shoppingCart.push({ name: itemName, price: itemPrice });
  
    alert(`${itemName} added to the cart.`);    
}

// Function to update the shopping cart contents in the HTML
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear the existing cart items
    cartList.innerHTML = '';

    // Iterate through the shoppingCart array and create list items for each item
    let total = 0;
    shoppingCart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        // Calculate the total price
        total += item.price;
    });

    // Update the cart total
    cartTotal.textContent = `$${total.toFixed(2)}`;
}