export function createProductsSection({ element, className }) {
  const productsSection = document.createElement(element);
  productsSection.setAttribute("class", className);
  return productsSection;
}
