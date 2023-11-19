import { createHeader } from "./header/createHeader";
import { createMain } from "./main/createMain";
import { createHeroSection } from "./hero/createHeroSection";
import { createProductsSection } from "./products/createProductsSection";
import { createGameSection } from "./game/createGameSection";
import { createContactsSection } from "./contacts/createContactsSection";
import { createAboutUsSection } from "./about-us/createAboutUsSection";
import { createFooter } from "./footer/createFooter";
import "../src/style.css";
import "./header/headerStyle.css";
import "./hero/heroStyle.css";
const root = document.getElementById("root");

const main = createMain({ element: "main", className: "main" });
main.append(createHeroSection({ element: "section", className: "hero" }));
main.append(
  createProductsSection({ element: "section", className: "productsSection" })
);
main.append(
  createGameSection({ element: "section", className: "gameSection" })
);
main.append(
  createContactsSection({ element: "section", className: "contactsSection" })
);

main.append(
  createAboutUsSection({ element: "section", className: "aboutUsSection" })
);

root.append(createHeader({ element: "header", content: "div" }));
root.append(main);
root.append(createFooter({ element: "footer", className: "footer" }));
