const bakeryData = [
    {
      "id": 1,
      "title": "Chocolate Chip Cookies",
      "price": 3.99,
      "description": "Freshly baked chocolate chip cookies with a soft and chewy texture.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/800px-2ChocolateChipCookies.jpg"
    },
    {
      "id": 2,
      "title": "Blueberry Muffins",
      "price": 2.99,
      "description": "Moist blueberry muffins bursting with juicy blueberries.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/delish-23-03-29-blueberrymuffins-ls-012-index-64358f5ed4f79.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
    },
    {
      "id": 3,
      "title": "Croissants",
      "price": 1.99,
      "description": "Flaky and buttery croissants with a golden crust.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 4,
      "title": "Strawberry Shortcake",
      "price": 4.99,
      "description": "Delicate layers of sponge cake, fresh strawberries, and whipped cream.",
      "image": "https://static01.nyt.com/images/2023/03/13/multimedia/NHJ-Strawberry-Shortcake-qtkw/NHJ-Strawberry-Shortcake-qtkw-threeByTwoMediumAt2X.jpg"
    },
    {
      "id": 5,
      "title": "Cinnamon Rolls",
      "price": 3.49,
      "description": "Warm and gooey cinnamon rolls with a sweet cinnamon swirl and creamy icing.",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2ChocolateChipCookies.jpg/800px-2ChocolateChipCookies.jpg"
    },
    {
      "id": 6,
      "title": "Apple Pie",
      "price": 5.99,
      "description": "Classic apple pie with a flaky crust and a delicious apple filling.",
      "image": "https://hips.hearstapps.com/hmg-prod/images/delish-23-03-29-blueberrymuffins-ls-012-index-64358f5ed4f79.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=1200:*"
    },
    {
      "id": 7,
      "title": "Red Velvet Cupcakes",
      "price": 2.49,
      "description": "Moist and velvety red velvet cupcakes with a creamy cream cheese frosting.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 8,
      "title": "Pain au Chocolat",
      "price": 2.99,
      "description": "French pastry filled with chocolate and layers of buttery, flaky dough.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 9,
      "title": "Cheesecake",
      "price": 4.49,
      "description": "Rich and creamy cheesecake with a buttery graham cracker crust.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 10,
      "title": "Raspberry Danish",
      "price": 1.99,
      "description": "Flaky pastry filled with sweet raspberry jam and topped with icing.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 11,
      "title": "Lemon Bars",
      "price": 3.99,
      "description": "Tangy lemon bars with a buttery shortbread crust and powdered sugar topping.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 12,
      "title": "Banana Bread",
      "price": 2.99,
      "description": "Moist and flavorful banana bread with ripe bananas and a hint of cinnamon.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 13,
      "title": "Black Forest Cake",
      "price": 5.99,
      "description": "Decadent chocolate cake layered with cherries and whipped cream.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 14,
      "title": "Pecan Pie",
      "price": 4.99,
      "description": "Southern-style pecan pie with a buttery crust and a sweet, nutty filling.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 15,
      "title": "Sourdough Bread",
      "price": 3.49,
      "description": "Artisanal sourdough bread with a crispy crust and a tangy, chewy interior.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 16,
      "title": "Carrot Cake",
      "price": 4.49,
      "description": "Moist carrot cake with a creamy cream cheese frosting and a sprinkle of walnuts.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 17,
      "title": "Éclairs",
      "price": 2.99,
      "description": "Classic French pastries filled with vanilla cream and topped with chocolate ganache.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 18,
      "title": "Banana Cream Pie",
      "price": 4.99,
      "description": "Smooth and creamy banana cream pie with a buttery crust and fresh banana slices.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 19,
      "title": "Pumpkin Bread",
      "price": 3.99,
      "description": "Delicious pumpkin bread with warm spices and a drizzle of cream cheese icing.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    },
    {
      "id": 20,
      "title": "Sugar Cookies",
      "price": 2.49,
      "description": "Buttery sugar cookies decorated with colorful icing and sprinkles.",
      "image": "https://static.toiimg.com/thumb/61912818.cms?imgsize=772945&width=800&height=800"
    }
  ];
  
  export default bakeryData;