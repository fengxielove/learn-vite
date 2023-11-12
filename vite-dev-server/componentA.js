import compoentACss from "./componentA.module.css";
console.log("🚀 ~ file: componentA.js:2 ~ compoentACss:", compoentACss);
import componentALess from "./index.module.less";
console.log("🚀 ~ file: componentA.js:4 ~ componentALess:", componentALess);
const div = document.createElement("div");

document.body.appendChild(div);
div.className = compoentACss.footer;
