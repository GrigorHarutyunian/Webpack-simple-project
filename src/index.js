import { createElement } from "./newElement.js";

const root = document.getElementById("root");

root.appendChild(createElement({ tag: "p", content: "Goqor" }));
