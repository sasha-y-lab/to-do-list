// index.js

import "./styles.css";
//import { homeload } from "./homeload.js";

//import { formatDate } from "./DOMstuff.js";

//formatDate();

import { createHomePage,  todoCategories } from "./DOMstuff.js";

import { addCategPopUp, todosSectAddDeleteBtns } from "./buttons-logic.js";




createHomePage();


export const loadDom = document.addEventListener("DOMContentLoaded", () => {
  
   addCategPopUp();
    todosSectAddDeleteBtns();
     todoCategories();
    
  });

  