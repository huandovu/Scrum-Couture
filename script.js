// script.js

// Function to show the item description
function showDescription(itemName, itemDescription, itemPrice) {
  // Create a new window with the description, price, and an "Add to Cart" button
  const descriptionWindow = window.open('', 'DescriptionWindow', 'width=400,height=300');

  // Write the description, price, and button into the new window
  descriptionWindow.document.write(`
        <html>
        <head>
            <title>${itemName}</title>
        </head>
        <body>
            <h2>${itemName}</h2>
            <p>${itemDescription}</p>
            <p>Price: $${itemPrice.toFixed(2)}</p>
            <button onclick="addToCart('${itemName}', ${itemPrice})">Add to Cart</button>
        </body>
        </html>
    `);

  // Close the previous description window if it exists
  if (window.descriptionWindow && !window.descriptionWindow.closed) {
    window.descriptionWindow.close();
  }

  // Store the reference to the new window
  window.descriptionWindow = descriptionWindow;
}
