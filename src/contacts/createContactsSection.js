export function createContactsSection({ element, className }) {
  const contactsSection = document.createElement(element);
  contactsSection.setAttribute("class", className);
  return contactsSection;
}
