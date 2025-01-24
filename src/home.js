import { createMenuPage } from "./menu";

function createHomePage() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.appendChild(createHomePageContainer());
}

function createHomePageContainer() {
  const home = document.createElement("div");
  home.classList.add("home");
  home.appendChild(createLeftBanner());
  home.appendChild(createDescription());
  return home;
}

function createDescription() {
  const description = document.createElement("div");
  description.classList.add("description", "center");

  description.appendChild(createTopBanner());
  description.appendChild(createDescriptionText());
  description.appendChild(createBottomBanner());
  return description;
}

function createDescriptionText() {
  const descriptionText = document.createElement("div");
  descriptionText.classList.add("description-text", "center");

  const h2 = document.createElement("h2");
  h2.textContent = "Awaken Your Senses with Every Sip.";
  descriptionText.appendChild(h2);

  const p1 = document.createElement("p");
  p1.textContent = "Organic, Ethical, and Always Fresh.";
  descriptionText.appendChild(p1);

  const p2 = document.createElement("p");
  p2.textContent = "Handmade fresh and chewy boba for topping lovers.";
  descriptionText.appendChild(p2);

  const btnMenu = document.createElement("button");
  btnMenu.classList.add("btn-menu");
  btnMenu.textContent = "See what we offer";
  btnMenu.addEventListener("click", createMenuPage);
  descriptionText.appendChild(btnMenu);
  return descriptionText;
}

function createTopBanner() {
  const topBanner = document.createElement("div");
  topBanner.classList.add("top-banner");
  return topBanner;
}
function createBottomBanner() {
  const bottomBanner = document.createElement("div");
  bottomBanner.classList.add("bottom-banner");
  return bottomBanner;
}

function createLeftBanner() {
  const banner = document.createElement("div");
  banner.classList.add("banner");
  banner.appendChild(createLogoContainer());
  return banner;
}

function createLogo() {
  const logo = document.createElement("div");
  logo.classList.add("logo");
  return logo;
}

function createLogoContainer() {
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container", "center");
  logoContainer.appendChild(createLogo());
  return logoContainer;
}

export { createHomePage, createTopBanner, createBottomBanner };
