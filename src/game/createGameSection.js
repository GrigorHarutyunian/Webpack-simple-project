export function createGameSection({ element, className }) {
  const gameSection = document.createElement(element);
  gameSection.setAttribute("class", className);
  return gameSection;
}
