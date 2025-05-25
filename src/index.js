// index.js

import "./styles.css";
//import { homeload } from "./homeload.js";


//formatDate();

import { createHomePage,  todoCategories, notifToday, notifUpcoming, categoryLoad } from "./DOMstuff.js";

import { addCategPopUp, todosSectAddDeleteBtns,  } from "./buttons-logic.js";

import { distanceOfDueDate, mytoDOs, retrieveLocalStorageDatate } from "./todo-logic.js";






createHomePage();



export const loadDom = document.addEventListener("DOMContentLoaded", () => {
 
   const { myTasksObj, myListsObj, myCategoriesObj } = retrieveLocalStorageDatate();

   console.log(mytoDOs);

  

   console.log("Categories:", myCategoriesObj); // Should be an array of category objects
    // Re-render categories first (if your UI nests lists/tasks under categories)
  // ✅ Load categories ONCE with the full array
  categoryLoad(myCategoriesObj);

 
   // ✅ Render each list with its categoryId
console.log("Lists:", myListsObj);       // Should be an array of list objects

 // listLoad(myListsObj); don't need to call if inside listload



  console.log("Tasks:", myTasksObj);       // Should be an array of task objects
  // ✅ Render each task with its listId
 
    //renderTasks(myTasksObj); don't need to call if inside listload
 

  




   addCategPopUp();
    todosSectAddDeleteBtns();
     todoCategories();
    notifToday();
     notifUpcoming();
     distanceOfDueDate();
     // populateLocalStorage(); // is overwriting the local storage saved
    
  });

  