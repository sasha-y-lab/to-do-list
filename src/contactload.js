export const contactload = () => {

    const content = document.querySelector("#content");

const hours = "10am - 9pm";

    const hoursDiv = document.createElement("div");
    hoursDiv.setAttribute("id", "hours-div");

    const hoursTitle = document.createElement("h2");
    hoursTitle.textContent = "Hours of Operation"

    hoursDiv.appendChild(hoursTitle);

    const mon = document.createElement("p");
    mon.classList.add("hours");
    mon.textContent = `Monday: ${hours}`;

    hoursDiv.appendChild(mon);

    const tues = document.createElement("p");
    tues.classList.add("hours");
    tues.textContent = `Tuesday: ${hours}`;

    hoursDiv.appendChild(tues);

    const wed = document.createElement("p");
    wed.classList.add("hours");
    wed.textContent = `Wednesday: ${hours}`;

    hoursDiv.appendChild(wed);

    const thurs = document.createElement("p");
    thurs.classList.add("hours");
    thurs.textContent = `Thrusday: ${hours}`;

    hoursDiv.appendChild(thurs);

    const fri = document.createElement("p");
    fri.classList.add("hours");
    fri.textContent = `Friday: ${hours}`;

    hoursDiv.appendChild(fri);

    const sat = document.createElement("p");
    sat.classList.add("hours");
    sat.textContent = `Saturday: Closed`;

    hoursDiv.appendChild(sat);

    const sun = document.createElement("p");
    sun.classList.add("hours");
    sun.textContent = `Sunday: Closed`;

    hoursDiv.appendChild(sun);


    content.appendChild(hoursDiv);

    // location

    const location = document.createElement("div");
    location.setAttribute("id", "location");
    location.textContent = "Sugarcane Grove Restaurant: 123 Street Lane, Ontario, Canada."

    content.appendChild(location);
}