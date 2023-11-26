import img1 from "./images/starfish.jpg";
import img2 from "./images/most-endangered-marine-species.jpg";
import img3 from "./images/marine-animals-sea-turtle-1022.jpg";
import img4 from "./images/lionfish.jpg";
import img5 from "./images/endangered-hawaiian-monk-seal.jpg";
import img6 from "./images/coral-reef_2021-06-08.jpg";
import img7 from "./images/B9SfAgAmL668nUeUfL5KI.jpeg";
import img8 from "./images/8c8db5e4e36a473591d1b59844fd1a64.jpeg";

export function createAboutUsSection({ element, className }) {
  const aboutUsSection = document.createElement(element);
  aboutUsSection.setAttribute("id", "aboutUs");
  aboutUsSection.setAttribute("class", className);
  aboutUsSection.append(createBox(), createButtons());
  return aboutUsSection;
}

function createBox() {
  const imgUrl = [img1, img2, img3, img4, img5, img6, img7, img8];
  const box = document.createElement("div");
  box.setAttribute("class", "box");
  for (let x = 0; x < 9; x++) {
    const span = document.createElement("span");
    span.style = "--i:" + (x + 1);
    const img = document.createElement("img");
    img.src = imgUrl[x];
    span.append(img);
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
    degrees += 60;
    box.style = `transform:perspective(1150px) rotateY(${degrees}deg)`;
  });

  btnNext.addEventListener("click", () => {
    const box = document.querySelector(".box");
    degrees -= 60;
    box.style = `transform:perspective(1150px) rotateY(${degrees}deg)`;
  });

  return btns;
}
