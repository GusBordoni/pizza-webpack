import "./styles.css";
import { homeDiv } from "./home-module.js";
import { menuDiv } from "./menu-module.js";
import { aboutDiv } from "./about-module.js";

const contentDiv = document.querySelector('#content');
const homeButton = document.querySelector('#homeBtn');
const menuButton = document.querySelector('#menuBtn');
const aboutButton = document.querySelector('#aboutBtn');

homeDiv();

homeButton.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    homeDiv();
})
menuButton.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    menuDiv();
})
aboutButton.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    aboutDiv();
})

export { contentDiv };