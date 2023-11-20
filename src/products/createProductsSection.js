import guppy from './productsImages/guppy.jpg';
import gourami from './productsImages/gourami.jpg';
import angelfish from './productsImages/angelfish.jpg';
import molly from './productsImages/molly.jpg';
import cichlids from './productsImages/cichlids.jpg';
import neon_tetra from './productsImages/neon_tetra.jpg';
import oceanFloor from './productsImages/background.jpg';

export function createProductsSection({ element, className }) {
  const productsSection = document.createElement(element);
  productsSection.setAttribute("class", className);
  const productsTitle = document.createElement('h3')
  productsTitle.setAttribute('class', 'products_section_title')
  productsTitle.innerText = 'PRODUCTS';
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  container.append(productsTitle);

  const products = new CreateProducts(productsData()).createProducts();
  container.append(products);
  productsSection.append(container);
  return productsSection;
}

function productsData() {
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
