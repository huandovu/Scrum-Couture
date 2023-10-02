

function filterCategory(category) {
  // Get all clothing items
  const clothingItems = document.querySelectorAll('.clothing-item');

  // Loop through each item and hide/show based on category
  clothingItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
          item.style.display = ''; // Revert to original CSS value
      } else {
          item.style.display = 'none';
      }
  });
}


