import heroGif from '../images/hero_gif.gif';

export function createHeroSection({ element, className }) {
  const hero = document.createElement(element);
  hero.setAttribute("class", "hero");
  hero.append(createHeroImg({ element: "div", className: "hero_image" }));
  hero.append(createHeroContent({ element: "div", className: "hero_content" }));
  return hero;
}

function createHeroImg({ element, className }) {
  const heroImg = document.createElement(element);
  heroImg.setAttribute("class", className);
  const img = document.createElement("img");
  img.alt = "Aquarium";
  img.title = "Aquarium";
  img.src = heroGif;
  const gradient = document.createElement("div");
  gradient.setAttribute("class", "gradient");
  heroImg.append(img, gradient);
  return heroImg;
}

function createHeroContent({ element, className }) {
  const heroContent = document.createElement(element);
  heroContent.setAttribute("class", className);

  const conteiner = document.createElement("div");
  conteiner.setAttribute("class", "container");
  const h1 = document.createElement("h1");
  h1.innerText = "AQUASQAPE";
  const p = document.createElement("p");
  p.innerText = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat officia doloremque similique vitae rem ratione quisquam optio distinctio dignissimos culpa nisi hic, pariatur enim amet deleniti. Ex adipisci officia optio.`;
  const a = document.createElement("a");
  a.setAttribute('class', 'button-1');
  a.href = "#products";
  a.innerText = `Products`;
  conteiner.append(h1, p, a);
  heroContent.append(conteiner);

  return heroContent;
}
// <div class="hero_image">
//                 <img src="hero_image.webp" alt="Aquarium" title="Aquarium">
//                 <div class="gradient"></div>
//             </div>
//             <div class="hero_content">
//                 <div class="container">
//                     <h1>AQUASQAPE</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat officia doloremque similique vitae rem ratione quisquam optio distinctio dignissimos culpa nisi hic, pariatur enim amet deleniti. Ex adipisci officia optio.</p>
//                     <a href="#">Products</a>
//                 </div>
//     </div>
