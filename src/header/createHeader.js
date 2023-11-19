export function createHeader({ element, content }) {
  const header = document.createElement(element);
  const headerContainer = document.createElement(content);

  headerContainer.setAttribute("class", "headerContainer");
  header.append(headerContainer);

  const headerMenu = document.createElement("div");
  headerMenu.setAttribute("class", "headerContainerMenu");

  headerContainer.append(headerMenu);

  headerMenu.append(
    createHeaderLogo({ element: "div", content: "a" }),
    createNavBar({ element: "nav", content: "ul" })
  );

  return header;
}

function createHeaderLogo({ element, content }) {
  const headerLogo = document.createElement(element);
  headerLogo.setAttribute("class", "headerLogo");
  const logoA = document.createElement(content);
  logoA.href = "#";
  logoA.alt = "Aquariums";
  logoA.title = "Aquarium";
  const logoImg = document.createElement("img");
  logoImg.alt = "Aquarium Logo";
  logoImg.src = "../images/logo.png";
  logoA.append(logoImg);
  headerLogo.append(logoA);
  return headerLogo;
}

function createNavBar({ element, content }) {
  const arrNav = ["Home", "Products", "Game", "Contacts", "About Us"];
  const nav = document.createElement(element);
  nav.setAttribute("class", "headerNavBar");
  const ul = document.createElement(content);
  ul.setAttribute("class", "ulInNavHeader");
  nav.append(ul);
  const li = document.createElement("li");
  for (let x = 0; x < 5; x++) {
    const a = document.createElement("a");
    a.setAttribute("class", "headerListA");
    a.href = "#";
    a.innerText = arrNav[x];
    li.append(a);
  }
  ul.append(li);
  return nav;
}
