// ./src/main.js

import { setupCounter } from "./assets/js/counter";

import viteLogo from "/vite.svg";
import javascriptLogo from "./assets/img/javascript.svg";

document.querySelector("#app").innerHTML = `
  <div>
    ...
    ...
    <a href="/about">About</a> |
    <a href="/blog/article">Article</a>
  </div>
`;

setupCounter(document.querySelector("#counter"));
