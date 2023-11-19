export function createHeader({ element, content }) {
  const header = document.createElement(element);
  header.setAttribute('id', 'header')
  const headerContainer = document.createElement(content);

  headerContainer.setAttribute("class", "container");
  header.append(headerContainer);

  const headerMenu = document.createElement("div");
  headerMenu.setAttribute("class", "menu");

  headerContainer.append(headerMenu);

  const burger = document.createElement('div');
  burger.setAttribute('class', 'burger');
  burger.setAttribute('id', 'burgerMenu');

  headerMenu.append(
    createHeaderLogo({ element: "div", content: "a" }),
    createNavBar({ element: "nav", content: "ul" })
  );

  headerMenu.append(burger);

  return header;
}

function createHeaderLogo({ element, content }) {
  const headerLogo = document.createElement(element);
  headerLogo.setAttribute("class", "logo");
  const logoA = document.createElement(content);
  logoA.href = "#";
  logoA.alt = "Aquariums";
  logoA.title = "Aquarium";
  const logoImg = document.createElement("img");
  logoImg.alt = "Aquarium Logo";
  logoImg.src = "../src/images/logo.png";
  logoA.append(logoImg);
  headerLogo.append(logoA);
  return headerLogo;
}

function createNavBar({ element, content }) {
  const arrNav = ["Home", "Products", "Game", "Contacts", "About Us"];
  const nav = document.createElement(element);
  nav.setAttribute("class", "headerNavBar");
  nav.setAttribute('id', 'nav');
  const ul = document.createElement(content);
  ul.setAttribute("class", "ulInNavHeader");
  nav.append(ul);
  for (let x = 0; x < 5; x++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("class", "headerListA");
    a.href = "#";
    a.innerText = arrNav[x];
    li.append(a);
    ul.append(li);
  }
  return nav;
}
