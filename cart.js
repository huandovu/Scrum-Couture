let shoppingCart = loadCartFromLocalStorage(); // Load cart data from local storage

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
    
    shoppingCart.push({ name: itemName, price: itemPrice });

    
    saveCartToLocalStorage();

    alert(`${itemName} added to the cart.`);
    updateCart();
}

// Function to update the shopping cart contents in the HTML
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');


    cartList.innerHTML = '';

    // Iterate through the shoppingCart array and create list items for each item
    let total = 0;
    shoppingCart.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        
        total += item.price;
    });

    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Function to load the cart data from local storage
function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('shoppingCart');
    return cartData ? JSON.parse(cartData) : [];
}

// Function to save the cart data to local storage
function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

function checkout()
{
    clearInputFields();
    shoppingCart = [];
    updateCart();
    localStorage.removeItem('shoppingCart');
    console.log("checkout completed");
    alert(' Checkout completed ');
}

function clearInputFields() {
    const inputElements = document.querySelectorAll('input');
    inputElements.forEach((input) => {
        input.value = ''; 
    });
}


window.addEventListener('load', updateCart);

