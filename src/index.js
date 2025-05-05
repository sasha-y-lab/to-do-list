// index.js

import "./styles.css";
import { homeload } from "./homeload.js";

import { menuload } from "./menuload.js";

import { contactload } from "./contactload.js";


const content = document.querySelector("#content");

const homeBtn = document.querySelector("#home-btn");

const menuBtn = document.querySelector("#menu-btn");

const contactBtn = document.querySelector("#contact-btn");

homeload();

homeBtn.addEventListener("click", () => {
   content.replaceChildren();
    homeload();
});

menuBtn.addEventListener("click", () => {
    content.replaceChildren();
    menuload();
});

contactBtn.addEventListener("click", () => {
    content.replaceChildren();
    contactload();
});