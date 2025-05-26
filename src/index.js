// index.js

import "./styles.css";
//import { homeload } from "./homeload.js";


//formatDate();

import { createHomePage,  todoCategories, notifToday, notifUpcoming, categoryLoad, renderTasks, listLoad, clearUI } from "./DOMstuff.js";

import { addCategPopUp, todosSectAddDeleteBtns,  } from "./buttons-logic.js";

import { distanceOfDueDate, mytoDOs, retrieveLocalStorageDatate } from "./todo-logic.js";

/*// seed dummy data
if (!localStorage.getItem("allCategoriesJSON")) {
  const dummyData = [
    { id: "cat-1", name: "Default Category", type: "category" },
    // add dummy list & task if needed
  ];
  localStorage.setItem("allCategoriesJSON", JSON.stringify(dummyData));
} */



createHomePage();



export const loadDom = document.addEventListener("DOMContentLoaded", () => {
 
  // retrieveLocalStorageDatate(); // this sets mytoDOs

 // categoryLoad(mytoDOs);

 const { myTasksObj, myListsObj, myCategoriesObj } = retrieveLocalStorageDatate();

 console.log("Categories:", myCategoriesObj);
console.log("Lists:", myListsObj);
console.log("Tasks:", myTasksObj);


 mytoDOs.length = 0; // clear it
mytoDOs.push(...myCategoriesObj, ...myListsObj, ...myTasksObj); // refill it

/*
const mytoDOs = [
  ...JSON.parse(localStorage.getItem('allTasksJSON') || '[]'),
  ...JSON.parse(localStorage.getItem('allListsJSON') || '[]'),
  ...JSON.parse(localStorage.getItem('allCategoriesJSON') || '[]'),
];
*/

clearUI();

categoryLoad(mytoDOs);
//listLoad(mytoDOs);
//renderTasks(mytoDOs);
 

  




   addCategPopUp();
    todosSectAddDeleteBtns();
     todoCategories();
    notifToday();
     notifUpcoming();
     distanceOfDueDate();
     // populateLocalStorage(); // is overwriting the local storage saved
    
  });

  