// index.js

import "./styles.css";
//import { homeload } from "./homeload.js";


//formatDate();

import { createHomePage,  todoCategories, notifToday, notifUpcoming, categoryLoad } from "./DOMstuff.js";

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


  // Clear and repopulate global mytoDOs array with fresh data from localStorage
  mytoDOs.length = 0; // Important: reset
  mytoDOs.push(...myCategoriesObj, ...myListsObj, ...myTasksObj);

  // Then render the UI from the now-complete mytoDOs
  categoryLoad(myCategoriesObj);
 

  




   addCategPopUp();
    todosSectAddDeleteBtns();
     todoCategories();
    notifToday();
     notifUpcoming();
     distanceOfDueDate();
     // populateLocalStorage(); // is overwriting the local storage saved
    
  });

  