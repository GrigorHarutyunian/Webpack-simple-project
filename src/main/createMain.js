export function createMain({ element, className }) {
  const main = document.createElement(element);
  main.setAttribute("class", className);
  return main;
}
