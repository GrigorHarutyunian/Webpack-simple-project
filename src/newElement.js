export function createElement({ tag, content }) {
  const elem = document.createElement(tag);
  elem.innerText = content;

  return elem;
}
