import guppy from './productsImages/guppy.jpg';
import gourami from './productsImages/gourami.jpg';
import angelfish from './productsImages/angelfish.jpg';
import molly from './productsImages/molly.jpg';
import cichlids from './productsImages/cichlids.jpg';
import neon_tetra from './productsImages/neon_tetra.jpg';
import loggerhead_turtle from './productsImages/loggerhead_turtle.jpg';
import green_sea_turtle from './productsImages/green_sea_turtle.jpg';
import hawksbill_turtle from './productsImages/hawksbill_turtle.jpg';
import leatherback_turtle from './productsImages/leatherback_turtle.jpg';
import kemps_ridley_turtle from './productsImages/kemps_ridley_turtle.jpg';
import flatback_turtle from './productsImages/flatback_turtle.jpg';
import moon_jellyfish from './productsImages/moon_jellyfish.jpg';
import lions_mane_jellyfish from './productsImages/lions_mane_jellyfish.jpg';
import sea_nettle_jellyfish from './productsImages/sea_nettle_jellyfish.jpeg';
import cannonball_jellyfish from './productsImages/cannonball_jellyfish.jpg';
import irukandji_jellyfish from './productsImages/irukandji_jellyfish.jpg';
import box_jellyfish from './productsImages/box_jellyfish.jpg';

export function createProductsSection({ element, className }) {
  const productsSection = document.createElement(element);
  productsSection.setAttribute("class", className);
  productsSection.setAttribute('id', 'products');
  const productsTitle = document.createElement('h3')
  productsTitle.setAttribute('class', 'products_section_title')
  productsTitle.innerText = 'PRODUCTS';
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  container.append(productsTitle);
  const fish = document.createElement('div');
  const turtle = document.createElement('div');
  const jellyfish = document.createElement('div');
  const fishProducts = new CreateProducts(fishProductsData()).createProducts();
  const turtleProducts = new CreateProducts(turtleProductsData()).createProducts();
  const jellyfishProducts = new CreateProducts(jellyfishProductsData()).createProducts();
  const categories = document.createElement('div');
  categories.setAttribute('class', 'categories');
  const fishCategory = document.createElement('div');
  fishCategory.setAttribute('class', 'category-item active');
  fishCategory.setAttribute('data-category', 'fishProductsDivision');
  fishCategory.innerText = 'Fish';
  const turtleCategory = document.createElement('div');
  turtleCategory.setAttribute('class', 'category-item');
  turtleCategory.setAttribute('data-category', 'turtleProductsDivision');
  turtleCategory.innerText = 'Turtle';
  const jellyfishCategory = document.createElement('div');
  jellyfishCategory.setAttribute('class', 'category-item');
  jellyfishCategory.setAttribute('data-category', 'jellyfishProductsDivision');
  jellyfishCategory.innerText = 'Jellyfish';
  categories.append(fishCategory, turtleCategory, jellyfishCategory);
  fish.setAttribute('id', 'fishProductsDivision');
  turtle.setAttribute('id', 'turtleProductsDivision');
  jellyfish.setAttribute('id', 'jellyfishProductsDivision');
  fish.setAttribute('class', 'product-category active');
  turtle.setAttribute('class', 'product-category');
  jellyfish.setAttribute('class', 'product-category');
  fish.append(fishProducts);
  jellyfish.append(jellyfishProducts);
  turtle.append(turtleProducts);
  container.append(categories);
  container.append(fish, turtle, jellyfish);
  productsSection.append(container);
  return productsSection;
}

function  fishProductsData() {
  const products = [
    {
      'id': 1,
      'name': 'Guppy',
      'description': `The guppy, also known as millionfish or the rainbow fish, is one of the world's most widely distributed tropical fish.`,
      'price': '20$',
      'image': guppy,
    },

    {
      'id': 2,
      'name': 'Gourami',
      'description': `Gouramis, or gouramies, are a group of freshwater anabantiform fish that comprise the family Osphronemidae.`,
      'price': '20$',
      'image': gourami,
    },

    {
      'id': 3,
      'name': 'Angelfish',
      'description': `Pterophyllum is a small genus of freshwater fish from the family Cichlidae known to most aquarists as angelfish.`,
      'price': '35$',
      'image': angelfish,
    },

    {
      'id': 4,
      'name': 'Molly',
      'description': `They come in many colors, which makes them attractive to home hobbyists and professional breeders alike.`,
      'price': '20$',
      'image': molly,
    },

    {
      'id': 5,
      'name': 'Cichlids',
      'description': `Cichlids are fish from the family Cichlidae in the order Cichliformes.`,
      'price': '25$',
      'image': cichlids,
    },

    {
      'id': 6,
      'name': 'Neon tetra',
      'description': `The neon tetra is a Freshwater fish of the characin family of order Characiformes.`,
      'price': '20$',
      'image': neon_tetra,
    },
  ];

  return products;
}

function  turtleProductsData() {
  const products = [
    {
      'id': 1,
      'name': 'Loggerhead Turtle',
      'description': `The loggerhead turtle is one of the world's largest hard-shelled turtles.`,
      'price': '50$',
      'image': loggerhead_turtle,
    },

    {
      'id': 2,
      'name': 'Green Sea Turtle',
      'description': 'Green sea turtles are named for the green color of their fat, not their shells.',
      'price': '45$',
      'image': green_sea_turtle,
    },

    {
      'id': 3,
      'name': 'Hawksbill Turtle',
      'description': 'Hawksbill turtles have a unique beak-like mouth and beautiful shell patterns.',
      'price': '60$',
      'image': hawksbill_turtle,
    },
    {
      'id': 4,
      'name': 'Leatherback Turtle',
      'description': 'Leatherback turtles are the largest turtles and are known for their unique shell structure.',
      'price': '70$',
      'image': leatherback_turtle,
    },

    {
      'id': 5,
      'name': `Kemp's Ridley Turtle`,
      'description': `Kemp's Ridley turtles are the most endangered sea turtle species in the world.`,
      'price': '80$',
      'image': kemps_ridley_turtle,
    },
    
    {
      'id': 6,
      'name': 'Flatback Turtle',
      'description': 'Flatback turtles have a flat, round shell and are found in Australian waters.',
      'price': '55$',
      'image': flatback_turtle,
    },
  ];

  return products;
}

function  jellyfishProductsData() {
  const products = [
    {
      'id': 1,
      'name': 'Moon Jellyfish',
      'description': 'Moon jellyfish are recognized by their translucent, moon-shaped bell.',
      'price': '30$',
      'image': moon_jellyfish,
    },

    {
      'id': 2,
      'name': 'Lion\'s Mane Jellyfish',
      'description': `Lion's mane jellyfish are known for their long, trailing tentacles.`,
      'price': '40$',
      'image': lions_mane_jellyfish,
    },

    {
      'id': 3,
      'name': 'Box Jellyfish',
      'description': 'Box jellyfish have cube-shaped bells and extremely toxic venom.',
      'price': '55$',
      'image': box_jellyfish,
    },

    {
      'id': 4,
      'name': 'Irukandji Jellyfish',
      'description': 'Irukandji jellyfish are tiny but carry venom that can be fatal to humans.',
      'price': '50$',
      'image': irukandji_jellyfish,
    },

    {
      'id': 5,
      'name': 'Cannonball Jellyfish',
      'description': 'Cannonball jellyfish have a round, dome-shaped bell and short tentacles.',
      'price': '35$',
      'image': cannonball_jellyfish,
    },

    {
      'id': 6,
      'name': 'Sea Nettle Jellyfish',
      'description': 'Sea nettle jellyfish are known for their long, stinging tentacles and colorful bells.',
      'price': '45$',
      'image': sea_nettle_jellyfish,
    },
  ];

  return products;
}


class CreateProducts {
  constructor(data) {
    this.data = data;
  }

  createElement(tag, className, id) {
    const element = document.createElement(tag);
    if (className)
      element.setAttribute('class', className);

    if (id)
      element.setAttribute('id', id);

    return element;
  }

  cretaeImage(source) {
    const image = document.createElement('img');
    image.setAttribute('src', source);

    return image;
  }

  createElementWithTextContent(tag, textContent) {
    const element = document.createElement(tag);
    element.innerText = textContent;

    return element;
  }

  createProductContent(product) {
    const {name, description} = product;
    const productName = this.createElementWithTextContent('h4', name);
    const productDescription = this.createElementWithTextContent('p', description);
    const productContent = this.createElement('div', 'product_content');
    productContent.append(productName);
    productContent.append(productDescription);

    return productContent;
  }

  createProductImage(product) {
    const { image } = product;
    const productImage = this.createElement('div', 'product_image');
    const img = this.cretaeImage(image);
    productImage.append(img);

    return productImage;
  }

  createProductPrice(product) {
    const { price } = product;
    const productPrice = this.createElement('div', 'product_price');
    const pr = this.createElementWithTextContent('span', price);
    productPrice.append(pr);
    
    return productPrice;
  }

  createProduct(product) {
    const productPrice = this.createProductPrice(product);
    const productImage = this.createProductImage(product);
    const productContent = this.createProductContent(product);
    const productDivision = this.createElement('div', 'product');
    productDivision.append(productPrice);
    productDivision.append(productImage);
    productDivision.append(productContent);
    return productDivision;
  }
   
  createProducts() {
    const products = this.createElement('div', 'products');
    const data = this.data;
    for (let product in data) {
      products.append(this.createProduct(data[product]));
    }

    return products;
  }
}

export function openCategory() {
  document.querySelectorAll('.category-item').forEach((element) => {
    element.addEventListener('click', (event) => {
      const activeCategorieItem = document.querySelector('.category-item.active');
      if (activeCategorieItem !== element) {
        activeCategorieItem.classList.remove('active');
        element.classList.add('active'); 
      }
      
      const dataCategory = element.getAttribute('data-category');
      const activeProductCategory = document.querySelector('.product-category.active');
      const dataCategoryDivision = document.getElementById(dataCategory);
      if (activeProductCategory !== dataCategoryDivision) {
        document.querySelectorAll('.product').forEach(e => {
          setTimeout(() => {
            e.style.transform = 'scale(0)';
            e.style.transition = 'all .7s ese-in-out';
          },300);
        });

        setTimeout(() => {
          activeProductCategory.classList.remove('active');
        }, 1000);

        setTimeout(() => {
          dataCategoryDivision.classList.add('active');
        }, 1200);

        dataCategoryDivision.querySelectorAll('.product').forEach(e => {
          setTimeout( () => {
            e.style.transform = 'scale(1)';
            e.style.transition = 'all .7s ese-in-out';
          }, 1300)
        });
      }
    })
  })
}