export function createAboutUsSection() {
  const aboutUsSection = document.createElement("section");
  aboutUsSection.setAttribute("id", "aboutUs");
  aboutUsSection.setAttribute("class", "about_us_section");

  aboutUsSection.style.backgroundColor = "rgba(254, 199, 99, 0.8)";

  const aboutUsContent = document.createElement("div");
  aboutUsContent.setAttribute("class", "about_us_content");

  const aboutUsTitle = document.createElement("h2");
  aboutUsTitle.innerText = "About Us";
  aboutUsTitle.classList.add("about_us_title");

  const aboutUsText = document.createElement("p");
  aboutUsText.innerText =
    "Welcome to Aquascape! We are a team of passionate individuals dedicated to creating beautiful aquatic environments. With a commitment to sustainability and education, we aim to inspire and support hobbyists worldwide. Explore our site for expert tips, high-quality products, and a thriving community.";
  aboutUsText.classList.add("about_us_text");

  const additionalText = document.createElement("p");
  additionalText.innerText =
    "Join us on this journey as we dive into the fascinating world of aquascaping and aquarium care. Whether you are a beginner or an experienced hobbyist, we have the resources and products to enhance your aquatic experience.";

  const additionalSentences = document.createElement("p");
  additionalSentences.innerText =
    "Our mission is to foster a deep connection between people and nature through the art of aquascaping. As advocates for environmental stewardship, we promote responsible practices that contribute to the well-being of aquatic life. Join us in our mission to create stunning underwater landscapes that captivate the imagination.";

  const evenMoreSentences = document.createElement("p");
  evenMoreSentences.innerText =
    "At Aquascape, we believe that everyone, regardless of experience, can enjoy the wonders of aquariums. Whether you dream of a serene freshwater setup or a vibrant reef aquarium, we provide the resources and guidance to turn your vision into reality. Embark on a journey of discovery with Aquascape!";

  aboutUsContent.appendChild(aboutUsTitle);
  aboutUsContent.appendChild(aboutUsText);
  aboutUsContent.appendChild(additionalText);
  aboutUsContent.appendChild(additionalSentences);
  aboutUsContent.appendChild(evenMoreSentences);
  aboutUsSection.appendChild(aboutUsContent);

  aboutUsSection.addEventListener("mouseover", function () {
    aboutUsSection.style.backgroundColor = "rgba(52, 152, 219, 0.8)";
    aboutUsTitle.style.transform = "translateY(-3px)";
    aboutUsText.style.transform = "translateY(-4px)";
    additionalText.style.transform = "translateY(-4px)";
    additionalSentences.style.transform = "translateY(-4px)";
    evenMoreSentences.style.transform = "translateY(-4px)";
  });

  aboutUsSection.addEventListener("mouseout", function () {
    aboutUsSection.style.backgroundColor = "rgba(254, 199, 99, 0.8)";
    aboutUsTitle.style.transform = "translateY(0)";
    aboutUsText.style.transform = "translateY(0)";
    additionalText.style.transform = "translateY(0)";
    additionalSentences.style.transform = "translateY(0)";
    evenMoreSentences.style.transform = "translateY(0)";
  });

  return aboutUsSection;
}
