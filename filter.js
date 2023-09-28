const btns = [
  {
    id: 1,
    name: 'Sweatpants'
  },
  {
    id: 2,
    name: 'Hoodies'
  },
  {
    id: 3,
    name: 'Denim Jackets'
  },

  {
    id: 4,
    name: 'Denim Pants'
  },

  {
    id: 5,
    name: 'Crewnecks'
  },

  {
    id: 6,
    name: 'Cardigans'
  },

  {
    id: 7,
    name: 'Button Ups'
  }


]

const filters = [...new Set(btns.map((btn) => { return btn }))]

document.getElementById('btns').innerHTML = filters.map((btn) => {
  var { name, id } = btn;
  return (
    "<button class='category-btn' onclick='filterItems(" + (id) + `)'>${name}</button>`
  )
}).join('');

const product = [

  {
    id: 1,///Sweatpants
    image: 'WinterCatalog2024/BlackSweatpant.png',
    title: 'Black Sweatpant',
    price: 29.99,
    category: 'Sweatpants',
    description: 'testing'
  },
  {
    id: 2,///Hoodies
    image: 'WinterCatalog2024/BlackHoodie.png',
    title: 'Black Hoodie',
    price: 59.99,
    category: 'Hoodie',
    description: 'testing'
  },
  {
    id: 5,///Crewneck
    image: 'WinterCatalog2024/BlackCrewneck.png',
    title: 'Black Crewneck',
    price: 59.99,
    category: 'Crewneck',
    description: 'testing'
  },
  {
    id: 3,///DenimJacket
    image: 'WinterCatalog2024/BlackJeansJacket.png',
    title: 'Black Jeans Jacket',
    price: 59.99,
    category: 'DenimJackets',
    description: 'testing'
  },
  {
    id: 7,///ButtonUp
    image: 'WinterCatalog2024/BlackSilkShirt.png',
    title: 'Black Silk Shirt',
    price: 59.99,
    category: 'ButtonUp',
    description: 'testing'
  },
  {
    id: 1,///Sweatpants
    image: 'WinterCatalog2024/BlackSweatpant.png',
    title: 'Black Sweatpant',
    price: 59.99,
    category: 'Sweatpants',
    description: 'testing'
  },
  {
    id: 4,///DenimPants
    image: 'WinterCatalog2024/BlueJeans.png',
    title: 'Blue Jeans',
    price: 59.99,
    category: 'DenimPants',
    description: 'testing'
  },
  {
    id: 3,///DenimJacket
    image: 'WinterCatalog2024/BlueJeansJacket.png',
    title: 'Blue Jeans Jacket',
    price: 59.99,
    category: 'DenimJacket',
    description: 'testing'
  },
  {
    id: 2,///Hoodies
    image: 'WinterCatalog2024/BlueZipupHoodie.png',
    title: 'Blue Zipup Hoodie',
    price: 59.99,
    category: 'Hoodie',
    description: 'testing'
  },
  {
    id: 6,///Cardigan
    image: 'WinterCatalog2024/BrownCardigan.png',
    title: 'Brown Cardigan',
    price: 59.99,
    category: 'Cardigan',
    description: 'testing'
  },
  {
    id: 5,///Crewneck
    image: 'WinterCatalog2024/BrownCrewneck.png',
    title: 'Brown Crewneck',
    price: 59.99,
    category: 'Crewneck',
    description: 'testing'
  },
  {
    id: 4,///DenimPants
    image: 'WinterCatalog2024/BrownJeans.png',
    title: 'Brown Jeans',
    price: 59.99,
    category: 'DenimPants',
    description: 'testing'
  },
  {
    id: 7,///ButtonUp
    image: 'WinterCatalog2024/BrownSilkShirt.png',
    title: 'Brown Silk Shirt',
    price: 59.99,
    category: 'ButtonUp',
    description: 'A silk shirt is the epitome of luxurious comfort, draping you in smooth elegance and timeless style..'
  },
  {
    id: 2,///Hoodies
    image: 'WinterCatalog2024/BrownZipupHoodie.png',
    title: 'Brown Zipup Hoodie',
    price: 59.99,
    category: 'Hoodie',
    description: 'testing'
  },
  {
    id: 6,///Cardigan
    image: 'WinterCatalog2024/CoffeeCardigan.png',
    title: 'Coffee Cardigan',
    price: 59.99,
    category: 'Cardigan',
    description: 'testing'
  },
  {
    id: 5,///Crewneck
    image: 'WinterCatalog2024/ForestGreenCrewneck.png',
    title: 'Forest Green Crewneck',
    price: 59.99,
    category: 'Crewneck',
    description: 'testing'
  },
  {
    id: 5,///Crewneck
    image: 'WinterCatalog2024/GreyCrewneck.png',
    title: 'Grey Crewneck',
    price: 59.99,
    category: 'Crewneck',
    description: 'testing'
  },
  {
    id: 2,///Hoodies
    image: 'WinterCatalog2024/GreyHoodie.png',
    title: 'Grey Hoodie',
    price: 59.99,
    category: 'Hoodie',
    description: 'testing'
  },
  {
    id: 1,///Sweatpant
    image: 'WinterCatalog2024/GreySweatpant.png',
    title: "Grey Sweatpant",
    price: 59.99,
    category: 'Sweatpant',
    description: "testing"
  },
  {
    id: 5,///Crewneck
    image: 'WinterCatalog2024/NavyCrewneck.png',
    title: 'Navy Crewneck',
    price: 59.99,
    category: 'Crewneck',
    description: 'testing'
  },
  {
    id: 5,///Crewneck
    image: 'WinterCatalog2024/OrangeCrewneck.png',
    title: 'Orange Crewneck',
    price: 59.99,
    category: 'Crewneck',
    description: 'testing'
  },
  {
    id: 2,///Hoodies
    image: 'WinterCatalog2024/VintageWashHoodie.png',
    title: 'Vintage Wash Hoodie',
    price: 59.99,
    category: 'Hoodie',
    description: 'testing'
  },
  {
    id: 5,///Hoodies
    image: 'WinterCatalog2024/VintageWashCrewneck.png',
    title: 'Vintage Wash Crewneck',
    price: 59.99,
    category: 'Crewneck',
    description: 'testing'
  }
];

const categories = [...new Set(product.map((item) => { return item }))]

const filterItems = (a) => {
  const flterCategories = categories.filter(item);
  function item(value) {
    if (value.id == a) {
      return (
        value.id
      )
    }
  }
  displayItem(flterCategories)
}


const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
    var { image, title, price, description } = item;
    return (
      `<div class='box'>
      <div class='filterBox'>
			<img class='filterImages' src=${image} onclick="showDescription('${title}', '${description}', '${price}');"></img>
      </div>
      <div class='bottom'>
      <h2>${title}</h2>
      <button class="cart-btn">Add to cart</button>
      </div>
			</div>`)
  }).join('');
}
displayItem(categories);