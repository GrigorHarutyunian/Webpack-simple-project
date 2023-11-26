import logo from '../images/logo.png';
import loading from '../images/loading.gif';
import clickHandler from '../footer/createFooter';

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
  const currentDomain = window.location.href;
  logoA.href = currentDomain;
  logoA.alt = "Aquariums";
  logoA.title = "Aquarium";
  const logoImg = document.createElement("img");
  logoImg.alt = "Aquarium Logo";
  logoImg.src = logo;
  logoA.append(logoImg);
  headerLogo.append(logoA);
  return headerLogo;
}

function createNavBar({ element, content }) {
  const arrNav = {
    "Home": "#header",
    "Products": "#products",
    "Game": "#game",
    "Contacts": "#contacts",
    "About Us": "#aboutUs",
  };
  const nav = document.createElement(element);
  nav.setAttribute("class", "headerNavBar");
  nav.setAttribute('id', 'nav');
  const ul = document.createElement(content);
  ul.setAttribute("class", "ulInNavHeader");
  nav.append(ul);
  for (let x in arrNav) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.setAttribute("class", "headerListA");
    a.href = arrNav[x];
    a.innerText = x;
    li.append(a);
    ul.append(li);
  }
  return nav;
}

export function createLoading() {
  const loadingSection = document.createElement('div');
  loadingSection.setAttribute('class', 'loading');
  const loadingImage = document.createElement('img');
  loadingImage.setAttribute('src', loading);
  const gradinetBox = document.createElement('div');
  gradinetBox.setAttribute('class', 'gradientBox');
  const gradient = document.createElement('div');
  gradient.setAttribute('class', 'gradient');
  gradinetBox.append(gradient);
  loadingSection.append(gradinetBox);
  loadingSection.append(loadingImage);
  document.body.prepend(loadingSection);

}

export function load() {
  const load = document.querySelector(".loading");
  document.body.style.overflowY = 'scroll';
  load.style.display = "none";
}