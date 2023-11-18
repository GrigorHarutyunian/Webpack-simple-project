function createElement({ tagName, content }) {
  const element = document.createElement(tagName);

  element.textContent = content;

  return element;
}

export { createElement };
