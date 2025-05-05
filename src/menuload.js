export const menuload = () => {

    const content = document.querySelector("#content");

    const heading = document.createElement("div");
heading.setAttribute("id", "heading");

const titleh2 = document.createElement("h2");
titleh2.textContent = "Menu";

heading.appendChild(titleh2);

content.appendChild(heading);

const menuDiv = document.createElement("div");
menuDiv.setAttribute("id", "menu-items");

// beverages section

const bevs = document.createElement("div");
bevs.setAttribute("id", "beverages");

const orderedListBev = document.createElement("ul");

const item1Bev = document.createElement("li");

const item1BevTitle = document.createElement("h3");
item1BevTitle.classList.add("menu-item-title");
item1BevTitle.textContent = "Mango Citrus Mocktail";

item1Bev.appendChild(item1BevTitle);

const item1BevPrice = document.createElement("p");
item1BevPrice.classList.add("price");
item1BevPrice.textContent = "$10";

item1Bev.appendChild(item1BevPrice);

orderedListBev.appendChild(item1Bev);


// item 2 bev

const item2Bev = document.createElement("li");

const item2BevTitle = document.createElement("h3");
item2BevTitle.classList.add("menu-item-title");
item2BevTitle.textContent = "Hibiscus Citrus Tea";

item2Bev.appendChild(item2BevTitle);

const item2BevPrice = document.createElement("p");
item2BevPrice.classList.add("price");
item2BevPrice.textContent = "$5";

item2Bev.appendChild(item2BevPrice);

orderedListBev.appendChild(item2Bev);

// item 3

const item3Bev = document.createElement("li");

const item3BevTitle = document.createElement("h3");
item3BevTitle.classList.add("menu-item-title");
item3BevTitle.textContent = "Pineapple Watermelon Mocktail";

item3Bev.appendChild(item3BevTitle);

const item3BevPrice = document.createElement("p");
item3BevPrice.classList.add("price");
item3BevPrice.textContent = "$10";

item3Bev.appendChild(item3BevPrice);

orderedListBev.appendChild(item3Bev);



bevs.appendChild(orderedListBev);
menuDiv.appendChild(bevs);


// sandwiches section

const sandwiches = document.createElement("div");
sandwiches.setAttribute("id", "sandwiches");

const orderedListSandwich = document.createElement("ul");

const item1Sandwich = document.createElement("li");

const item1SandwichTitle = document.createElement("h3");
item1SandwichTitle.classList.add("menu-item-title");
item1SandwichTitle.textContent = "Italian Herb & Cheese Cocobread Sandwich";

item1Sandwich.appendChild(item1SandwichTitle);

const item1SandwichPrice = document.createElement("p");
item1SandwichPrice.classList.add("price");
item1SandwichPrice.textContent = "$12";

item1Sandwich.appendChild(item1SandwichPrice);

orderedListSandwich.appendChild(item1Sandwich);

// sandwich 2

const item2Sandwich = document.createElement("li");

const item2SandwichTitle = document.createElement("h3");
item2SandwichTitle.classList.add("menu-item-title");
item2SandwichTitle.textContent = "Zatar Cocobread Sandwich";

item2Sandwich.appendChild(item2SandwichTitle);

const item2SandwichPrice = document.createElement("p");
item2SandwichPrice.classList.add("price");
item2SandwichPrice.textContent = "$12";

item2Sandwich.appendChild(item2SandwichPrice);

orderedListSandwich.appendChild(item2Sandwich);

// sandwich 3

const item3Sandwich = document.createElement("li");

const item3SandwichTitle = document.createElement("h3");
item3SandwichTitle.classList.add("menu-item-title");
item3SandwichTitle.textContent = "Sweet Potato Cocobread Sandwich";

item3Sandwich.appendChild(item3SandwichTitle);

const item3SandwichPrice = document.createElement("p");
item3SandwichPrice.classList.add("price");
item3SandwichPrice.textContent = "$12";

item3Sandwich.appendChild(item3SandwichPrice);

orderedListSandwich.appendChild(item3Sandwich);


sandwiches.appendChild(orderedListSandwich);
menuDiv.appendChild(sandwiches);

// mains section

const mains = document.createElement("div");
mains.setAttribute("id", "mains");

const orderedListMains = document.createElement("ul");

const item1Mains = document.createElement("li");

const item1MainsTitle = document.createElement("h3");
item1MainsTitle.classList.add("menu-item-title");
item1MainsTitle.textContent = "Jamaican Patty Fateyer";

item1Mains.appendChild(item1MainsTitle);

const item1MainsPrice = document.createElement("p");
item1MainsPrice.classList.add("price");
item1MainsPrice.textContent = "$15";

item1Mains.appendChild(item1MainsPrice);

orderedListMains.appendChild(item1Mains);

// main 2

const item2Mains = document.createElement("li");

const item2MainsTitle = document.createElement("h3");
item2MainsTitle.classList.add("menu-item-title");
item2MainsTitle.textContent = "Jerk Pork Belly Cocobread Bao Buns";

item2Mains.appendChild(item2MainsTitle);

const item2MainsPrice = document.createElement("p");
item2MainsPrice.classList.add("price");
item2MainsPrice.textContent = "$20";

item2Mains.appendChild(item2MainsPrice);

orderedListMains.appendChild(item2Mains);


// main 3

const item3Mains = document.createElement("li");

const item3MainsTitle = document.createElement("h3");
item3MainsTitle.classList.add("menu-item-title");
item3MainsTitle.textContent = "Bammy Pitabread & Goat Shwarma";

item3Mains.appendChild(item3MainsTitle);

const item3MainsPrice = document.createElement("p");
item3MainsPrice.classList.add("price");
item3MainsPrice.textContent = "$20";

item3Mains.appendChild(item3MainsPrice);

orderedListMains.appendChild(item3Mains);

mains.appendChild(orderedListMains);
menuDiv.appendChild(mains);

content.appendChild(menuDiv);

}