export function createFooter({ element, className }) {
  const footer = document.createElement(element);
  footer.setAttribute("class", className);
  return footer;
}
