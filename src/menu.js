import { createTopBanner, createBottomBanner } from "./home";

function createMenuPage() {
  const content = document.querySelector("#content");
  content.textContent = "";
  content.appendChild(createContainer());
}

function createContainer() {
  const container = document.createElement("div");
  container.classList.add("menu-container");
  container.appendChild(createTopBanner());
  container.appendChild(createMenu());
  container.appendChild(createBottomBanner());
  return container;
}

function createMenu() {
  const menu = document.createElement("div");
  menu.classList.add("menu");
  const list = getItemList();
  list.forEach((item) => {
    let itemContainer = createItem(item);
    menu.appendChild(itemContainer);
  });
  return menu;
}

function createItem(item) {
  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item");

  const name = document.createElement("div");
  name.classList.add("item-name");
  name.textContent = item.name;

  const cost = document.createElement("div");
  cost.classList.add("item-cost");
  cost.textContent = "$" + item.cost;

  const image = document.createElement("div");
  image.classList.add("item-img");
  image.style.backgroundImage = image.img;

  itemContainer.appendChild(name);
  itemContainer.appendChild(cost);
  itemContainer.appendChild(image);
  return itemContainer;
}

function getItemList() {
  let items = [
    {
      name: "Oolong Tea",
      cost: 5.5,
      img: "",
    },
    {
      name: "Shan Tea",
      cost: 6.0,
      img: "",
    },
    {
      name: "Oolong Milk Tea",
      cost: 5.4,
      img: "",
    },
    {
      name: "Shan Milk Tea",
      cost: 5.4,
      img: "",
    },
    {
      name: "Green Milk Tea",
      cost: 4.4,
      img: "",
    },
    {
      name: "Earlgrey Milk Tea",
      cost: 4.4,
      img: "",
    },
  ];

  return items;
}

export { createMenuPage };
