import logoImg from '../images/logo.png';

export function createFooter({ element, className }) {
  const footer = document.createElement(element);
  footer.setAttribute("class", className);
  footer.append(createFooterSection());
  return footer;
}

function createElement(e, className, id) {
  const element = document.createElement(e);

  if (className) {
    element.setAttribute('class', className);
  }

  if (id) {
    element.setAttribute('id', id);
  }

  return element;
}

function createImageElement (src) {
  const image = document.createElement('img');
  image.setAttribute('src', src);

  return image;
}

function createLinkElement(href, textContent, className, id) {
  const link = createElementWithTextContent('a', textContent, className, id);
  link.setAttribute('href', href);

  return link;
}

function createElementWithTextContent(e, textContent, classNmae, id,) {
  const element = createElement(e, classNmae, id);
  element.innerHTML = textContent;

  return element;
}

function createFooterColumn(e, content) {
  const column = createElement(e, 'footer_column');
  const { title, textContent } = content;
  const footerColumnTitle = createElementWithTextContent('h4', title, 'footer_column_title');
  const footerColumnList = createElement('ul', 'footer_column_list');

  for (let li in textContent) {
    const { itemTitle, itemHref } = textContent[li];
    const footerColumnListItem = createElement('li', 'footer_column_list_item');
    const footerColumnListItemLink = createLinkElement(itemHref, itemTitle);
    footerColumnListItem.append(footerColumnListItemLink);
    footerColumnList.append(footerColumnListItem);
  }

  column.append(footerColumnTitle);
  column.append(footerColumnList);

  return column;
}

function creteFooterLogoColumn(src) {
  const logoColumn = createElement('div', 'footer_column');
  const logo = createElement('div', 'logo') 
  const link = createElement('a');
  link.setAttribute('href', '#');
  const logoPng = createImageElement(src);
  link.append(logoPng);
  logo.append(link);
  logoColumn.append(logo);

  return logoColumn;
}

function createContactsColumn(title, contacts) {
  const { tel, email, address } = contacts;
  const contactsColumn = createElement('div', 'footer_column');
  const footerColumnTitle = createElementWithTextContent('h4', title, 'footer_column_title');
  const companyContactsList = createElement('ul', 'footer_column_list');
  const companyTelItem = createElement('li', 'footer_column_list_item');
  const companyEmailItem = createElement('li', 'footer_column_list_item');
  const telHref = tel.replaceAll('(', '').replaceAll(')', '').replaceAll('-', '').replaceAll(' ', '');
  const companyTel = createLinkElement(`tel:${telHref }`, `<i class="fa-solid fa-phone"></i> ${tel}`);
  const companyEmail = createLinkElement(`mailto:${email}`, `<i class="fa-solid fa-envelope"></i> ${email}`);
  const companyAddress = createElementWithTextContent('li', `<i class="fa-solid fa-location-dot"></i> ${address}`, 'footer_column_list_item');

  companyTelItem.append(companyTel);
  companyEmailItem.append(companyEmail);
  companyContactsList.append(companyEmailItem);
  companyContactsList.append(companyTelItem);
  companyContactsList.append(companyAddress);

  contactsColumn.append(footerColumnTitle);
  contactsColumn.append(companyContactsList);

  return contactsColumn;
}

function getContactInfo() {
  const contacts = {
    'tel': '+(555) 123-4567',
    'email': 'aquascape@gmail.com',
    'address': 'Elm Street Anytown, USA',
  };

  return contacts;
}

function getFooterColumnsData() {
  const data = [
    {
      'title': 'Menu',
      'textContent': [
        {
          'itemTitle': 'Home',
          'itemHref': '#',
        },

        {
          'itemTitle': 'Products',
          'itemHref': '#',
        },

        {
          'itemTitle': 'Game',
          'itemHref': '#',
        },

        {
          'itemTitle': 'Contacts',
          'itemHref': '#',
        },

        {
          'itemTitle': 'About',
          'itemHref': '#',
        },
      ] 
    },

    {
      'title': 'Products',
      'textContent': [
        {
          'itemTitle': 'Guppy',
          'itemHref': '#',
        },

        {
          'itemTitle': 'Gourami',
          'itemHref': '#',
        },

        {
          'itemTitle': 'Angelfish',
          'itemHref': '#',
        },

        {
          'itemTitle': 'Molly',
          'itemHref': '#',
        },

        {
          'itemTitle': 'Cichlids',
          'itemHref': '#',
        },

        {
          'itemTitle': 'Neon Tetra',
          'itemHref': '#',
        }
      ] 
    },
  ];

  return data;
}

function createFooterSection() {
  const footerContainer = createElement('div', 'container');
  const row = createElement('div', 'footer_row');
  const logo = creteFooterLogoColumn(logoImg);
  const contacts = createContactsColumn('Contacts', getContactInfo());
  const data = getFooterColumnsData();
  row.append(logo);

  for (let dt in data) {
    row.append(createFooterColumn('div', data[dt]));
  }
  
  row.append(contacts);
  footerContainer.append(row);

  return footerContainer;
}