export const homeload = () => {

alert("This is the website of Sugarcane Grove");

const content = document.querySelector("#content");

const heading = document.createElement("div");
heading.setAttribute("id", "heading");

const titleh1 = document.createElement("h1");
titleh1.textContent = "Sugarcane Grove Restaurant";

heading.appendChild(titleh1);

content.appendChild(heading);

const about = document.createElement("div");
about.setAttribute("id", "about");

const aboutTxt = document.createElement("p");
aboutTxt.textContent = "Welcome to Sugarcane Grove, where we mix other cultures' food with our own, resulting in yummy Jamaican Fusion meals!";

about.appendChild(aboutTxt);

content.appendChild(about);

const reviews = document.createElement("div");
reviews.setAttribute("id", "reviews");

const reviewTitle = document.createElement("h2");
reviewTitle.textContent = "Reviews";

reviews.appendChild(reviewTitle);

const quote1 = document.createElement("blockquote");
quote1.textContent = "Sugarcane Grove is the best place for a unique take on fusion foods, mixing the mosaic of cultural foods in Ontario,Canada.";

reviews.appendChild(quote1);

const quote1By = document.createElement("p");
quote1By.textContent = "- John B.";

reviews.appendChild(quote1By);

content.appendChild(reviews);

};