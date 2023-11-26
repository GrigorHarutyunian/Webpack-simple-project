import img1 from "./images/consultation.webp";
import img2 from "./images/aquarium_.jpg";
import img3 from "./images/feed.jpg";
import img4 from "./images/food.webp";
import img5 from "./images/team.jpeg";
import img6 from "./images/coral-reef_2021-06-08.jpg";
import img7 from "./images/tunel.webp";
import img8 from "./images/manAqua.jpg";

export function createAboutUsSection({ element, className }) {
  const aboutUsSection = document.createElement(element);
  aboutUsSection.setAttribute("id", "aboutUs");
  aboutUsSection.setAttribute("class", className);
  const h1 = document.createElement("h1");
  h1.innerText = "About Us";
  const h2 = document.createElement("h2");
  const aboutUsContent = document.createElement('div');
  aboutUsContent.setAttribute('class', 'aboutUsContent');
  aboutUsContent.append(createBox(), createButtons());
  h2.innerText =
    "AQUASQAPE Inc. is a company focused on customer’s needs by \n offering a full line of aquatic products as well as design and engineering.";
  aboutUsSection.append(h1, h2, aboutUsContent);
  return aboutUsSection;
}

function createBox() {
  const imgUrl = [img1, img2, img3, img4, img5, img6, img7, img8];
  const descriptions = [
    "with us you can get a free consultation about fish and everything related to it",
    "with us you can find aquariums and the largest range associated with their designs",
    "we have unlimited feed for your aquatic animals",
    "we have a specialty restaurant for fresh seafood lovers",
    "our team is equipped with the most skilled specialists of the region who will be happy to help you",
    "you can get your favorite sea animal at Aquasqape, we have more than 1000 types of sea animals",
    "we have the best aqua park exhibition",
    "You can entrust the design of your water park to our experienced specialists",
  ];
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  for (let x = 0; x < 8; x++) {
    const span = document.createElement("span");
    const p = document.createElement("p");
    p.innerText = descriptions[x];
    span.style = "--i:" + (x + 1);
    const img = document.createElement("img");
    img.src = imgUrl[x];
    span.append(p, img);
    box.append(span);
  }
  box;
  return box;
}

function createButtons() {
  const btns = document.createElement("div");
  btns.setAttribute("class", "btns");
  const btnPrev = document.createElement("div");
  btnPrev.setAttribute("class", "btn prev");
  const btnNext = document.createElement("div");
  btnNext.setAttribute("class", "btn next");
  btns.append(btnPrev, btnNext);
  let degrees = 0;
  const box = document.querySelector(".box");
  btnPrev.addEventListener("click", () => {
    const box = document.querySelector(".box");
    degrees += 45;
    box.style = `transform:perspective(1150px) rotateY(${degrees}deg)`;
  });

  btnNext.addEventListener("click", () => {
    const box = document.querySelector(".box");
    degrees -= 45;
    box.style = `transform:perspective(1150px) rotateY(${degrees}deg)`;
  });

  return btns;
}
