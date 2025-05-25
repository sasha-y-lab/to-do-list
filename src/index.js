// index.js

import "./styles.css";
//import { homeload } from "./homeload.js";


//formatDate();

import { createHomePage,  todoCategories, notifToday, notifUpcoming } from "./DOMstuff.js";

import { addCategPopUp, todosSectAddDeleteBtns,  } from "./buttons-logic.js";

import { distanceOfDueDate } from "./todo-logic.js";






createHomePage();


export const loadDom = document.addEventListener("DOMContentLoaded", () => {
  
   addCategPopUp();
    todosSectAddDeleteBtns();
     todoCategories();
    notifToday();
     notifUpcoming();
     distanceOfDueDate();
    
  });

  