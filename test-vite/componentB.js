import componentBCss from "./componentB.module.css";
console.log("🚀 ~ file: componentB.js:2 ~ componentBCss:", componentBCss);
const div = document.createElement("div");
document.body.appendChild(div);
div.className = componentBCss.footer;
