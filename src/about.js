import { createTopBanner, createBottomBanner } from "./home";

function createAboutPage() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.appendChild(createContainer());
}

function createContainer() {
  const container = document.createElement("div");
  container.classList.add("about-container");
  container.appendChild(createTopBanner());
  container.appendChild(createMainSection());
  container.appendChild(createBottomBanner());
  return container;
}

function createMainSection() {
  const main = document.createElement("div");
  main.classList.add("main");

  main.appendChild(createLocationSection());
  main.appendChild(createOpeningHourSection());
  return main;
}

function createLocationSection() {
  const section = document.createElement("div");
  section.classList.add("location");

  const header = document.createElement("h3");
  header.textContent = "Location";

  const body = document.createElement("p");
  body.textContent = "123 Main St, San Jose, Ca 96123";

  section.appendChild(header);
  section.appendChild(body);
  return section;
}

function createOpeningHourSection() {
  const section = document.createElement("div");
  section.classList.add("open-hour");

  const header = document.createElement("h3");
  header.textContent = "Opening Hour";

  const mon = document.createElement("p");
  mon.textContent = "Monday: 10am -10pm";
  const tue = document.createElement("p");
  tue.textContent = "Tuesday: 10am -10pm";
  const wed = document.createElement("p");
  wed.textContent = "Wednesday: 10am -10pm";
  const thu = document.createElement("p");
  thu.textContent = "Thursday: 10am -10pm";
  const fri = document.createElement("p");
  fri.textContent = "Friday: 10am -10pm";
  const sat = document.createElement("p");
  sat.textContent = "Saturday: 10am -10pm";
  const sun = document.createElement("p");
  sun.textContent = "Sunday: 10am -10pm";

  section.appendChild(header);
  section.appendChild(mon);
  section.appendChild(tue);
  section.appendChild(wed);
  section.appendChild(thu);
  section.appendChild(fri);
  section.appendChild(sat);
  section.appendChild(sun);
  return section;
}

export { createAboutPage };
