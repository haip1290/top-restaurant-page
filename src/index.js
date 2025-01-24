import "./styles/style.css";
import { createHomePage } from "./home";
import { createAboutPage } from "./about";
import { createMenuPage } from "./menu";

createHomePage();

//get each button and add event listener
const btnHome = document.querySelector(".btn-home");
btnHome.addEventListener("click", createHomePage);

const btnMenu = document.querySelector(".btn-menu");
btnMenu.addEventListener("click", createMenuPage);

const btnAbout = document.querySelector(".btn-about");
btnAbout.addEventListener("click", createAboutPage);
