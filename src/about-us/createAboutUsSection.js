export function createAboutUsSection({ element, className }) {
  const abourUsSection = document.createElement(element);
  abourUsSection.setAttribute("class", className);
  abourUsSection.setAttribute("id", 'aboutUs');
  return abourUsSection;
}
