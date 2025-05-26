
import { mytoDOs, retrieveLocalStorageDatate, populateLocalStorage } from "./todo-logic.js";

import { formatDate } from "./date-utility.js";


console.log(mytoDOs);

const { myTasksObj, myListsObj, myCategoriesObj } = retrieveLocalStorageDatate();


// just what is seen on the main page. 
  

const sidebarLoad = () => {

    const container = document.querySelector("#container");

    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");

    const title = document.createElement("div");
    title.setAttribute("id", "title");

    const titleImg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    titleImg.classList.add("title-img");
    titleImg.setAttribute('viewBox', '0 0 24 24');
    titleImg.setAttribute("height", "50px");
    titleImg.setAttribute("width", "50px");

    const titleImgPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    titleImgPath.setAttribute(
        "d", "M9,5V9H21V5M9,19H21V15H9M9,14H21V10H9M4,9H8V5H4M4,19H8V15H4M4,14H8V10H4V14Z");

    titleImg.appendChild(titleImgPath);

    title.appendChild(titleImg);

    const titleHeading = document.createElement("h1");
    titleHeading.setAttribute("id", "main-title");
    titleHeading.textContent = "ToDos";

    title.appendChild(titleHeading);

    sidebar.appendChild(title);

    if (container) {
        container.appendChild(sidebar);
        }

    // input today, upcoming, categories between here
todoToday();
todoUpcoming();
//todoCategories();

   

}


const todoToday = () => {

    const sidebar = document.querySelector("#sidebar");
    // today tasks

    const todayTasks = document.createElement("div");
    todayTasks.setAttribute("id", "today-tasks");

    const todayTasksHeader = document.createElement("div");
    todayTasksHeader.setAttribute("id", "today-tsk-header");

    const todayTasksHeading = document.createElement("h3");
    todayTasksHeading.textContent = "Today";

    todayTasksHeader.appendChild(todayTasksHeading);

    todayTasks.appendChild(todayTasksHeader);
   
    if (sidebar) {
        sidebar.appendChild(todayTasks);
      }
   
      // input notification here

//notifToday();



}

export const notifToday = () => {

const dateGetter = formatDate();

 const todaysDate = dateGetter.todayDate;

 
 // deletes previously loaded element
const existingNotifyDiv = document.querySelector("#notify-today");
if (existingNotifyDiv) {
  existingNotifyDiv.remove();

}
  


 // find all duedates with today's date

 const tasks = mytoDOs
  .filter(item => item.type === 'task' && item.dueDate === todaysDate && !item.completed);

  const todaysDueDates = tasks.length;

  console.log(todaysDueDates);

 

  


  

    const todayTasks = document.querySelector("#today-tasks");

    const todayTasksHeader = document.querySelector("#today-tsk-header");


    
    const todayTasksNotify = document.createElement("div");
    todayTasksNotify.setAttribute("id", "notify-today");
    todayTasksNotify.classList.add("notify");
    //todayTasksNotify.textContent = "";
    

    // notif circle
    const todayNotifCircle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
todayNotifCircle.classList.add("notif-circle");
todayNotifCircle.setAttribute('viewBox', '0 0 24 24');
todayNotifCircle.setAttribute("height", "30px");
todayNotifCircle.setAttribute("width", "30px");


const todayNotifCirclePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
todayNotifCirclePath.setAttribute(
        "d", "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z");

todayNotifCircle.appendChild(todayNotifCirclePath);

todayTasksNotify.appendChild(todayNotifCircle);

const todayNotifText = document.createElement("p");
todayNotifText.textContent = todaysDueDates; //"12";

todayNotifText.classList.add("notif-text");

todayTasksNotify.appendChild(todayNotifText);
// end of notif circle



    todayTasksHeader.appendChild(todayTasksNotify);

    if (todayTasks) {
todayTasks.appendChild(todayTasksHeader);
    }



}

const todoUpcoming = () => {
    const sidebar = document.querySelector("#sidebar");

    //upcoming tasks
    
    const upcomingTasks = document.createElement("div");
    upcomingTasks.setAttribute("id", "coming-tasks");

    const upcomingTasksHeader = document.createElement("div");
    upcomingTasksHeader.setAttribute("id", "coming-tsk-header");

    const upcomingTasksHeading = document.createElement("h3");
    upcomingTasksHeading.textContent = "Upcoming";

    upcomingTasksHeader.appendChild(upcomingTasksHeading);

    upcomingTasks.appendChild(upcomingTasksHeader);


    if (sidebar) {
        sidebar.appendChild(upcomingTasks);
      }

    // input notification here

   // notifUpcoming();




}

export const notifUpcoming = () => {

//const dateGetter = formatDate();

//const { format } = require("date-fns");

 //const todaysDate = format(Date.now(), "MMM dd ''yy");


 
                const oldupcomingTasks = document.querySelector("#coming-tasks");
  const oldupcomingTasksHeader = document.querySelector("#coming-tsk-header");

  if (!oldupcomingTasks || !oldupcomingTasksHeader) return;

  // ✅ Only remove the old notify circle, not the header title
  const existingNotifyDiv = document.querySelector("#notify-coming");
  if (existingNotifyDiv) {
    
   // oldupcomingTasksHeader.replaceChildren();
    
    oldupcomingTasksHeader.removeChild(existingNotifyDiv);
  }




// find all dates greater than todays date

const tasks = mytoDOs.filter(item => 
  item.type === 'task' &&
  item.completed === false && 
  item.isAfterToday === true // or whatever condition applies
);

console.log(tasks);

const upcomingDueDates = tasks.length;

  console.log(upcomingDueDates);


  



    const upcomingTasks = document.querySelector("#coming-tasks");

    const upcomingTasksHeader = document.querySelector("#coming-tsk-header");

    const upcomingTasksNotify = document.createElement("div");
    upcomingTasksNotify.setAttribute("id", "notify-coming");
    upcomingTasksNotify.classList.add("notify");
    //upcomingTasksNotify.textContent = "12";

     // notif circle
     const upcomingNotifCircle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
     upcomingNotifCircle.classList.add("notif-circle");
     upcomingNotifCircle.setAttribute('viewBox', '0 0 24 24');
     upcomingNotifCircle.setAttribute("height", "30px");
     upcomingNotifCircle.setAttribute("width", "30px");
     
     const upcomingNotifCirclePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
     upcomingNotifCirclePath.setAttribute(
             "d", "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z");
     
           //  upcomingNotifCirclePath.textContent = "12";
     
             upcomingNotifCircle.appendChild(upcomingNotifCirclePath);
     
             upcomingTasksNotify.appendChild(upcomingNotifCircle);

             const upcomingNotifText = document.createElement("p");
upcomingNotifText.textContent = upcomingDueDates; //"12";
upcomingNotifText.classList.add("notif-text");

upcomingTasksNotify.appendChild(upcomingNotifText);
     // end of notif circle

    upcomingTasksHeader.appendChild(upcomingTasksNotify);

    if (upcomingTasks) {
        upcomingTasks.appendChild(upcomingTasksHeader);
            }

         console.log(upcomingDueDates);

         // } // if statement

}



export const todoCategories = () => {

//const allCategories = mytoDOs.filter(item => item.type === 'category');
//console.log("All categories in array: ", allCategories);

//const allCategories = mytoDOs.find(item => item.type === 'category');

//console.log("All categories in array: ", allCategories);

//console.log(allCategories.name);

const existingCategorySect = document.querySelector("#category-sect");
if (existingCategorySect) {
  existingCategorySect.remove();
}


    const sidebar = document.querySelector("#sidebar");

    const categorySect = document.createElement("div");
    categorySect.setAttribute("id", "category-sect");

    categorySect.replaceChildren();

    const categorySectHeading = document.createElement("h3");
    categorySectHeading.textContent = "Categories";

    categorySect.appendChild(categorySectHeading);

    const categorySectDisplay = document.createElement("div");
    categorySectDisplay.setAttribute("id", "category-sect-display");
    categorySectDisplay.classList.add("side-category-display");
    //categorySectDisplay.textContent = "Category 1";
//categorySectDisplay.textContent = allCategories[0].name; // equals Category 1

//console.log(allCategories[0].name);

//categorySectDisplay.replaceChildren();



const categoryList = document.createElement("ul"); // Create an unordered list
categoryList.classList.add("ul-categlist");


// add loop here

const categories = mytoDOs
  .filter(item => item.type === 'category')
  .sort((a, b) => a.createdAt - b.createdAt);

  categories.forEach(category => {
   
console.log(category);

   
      const listItem = document.createElement("li");

const categoryLinks = document.createElement("a");



categoryLinks.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(`.category[data-category-id="${category.id}"]`);
//const categoryNameElements = document.querySelectorAll(`.category[data-category-id="${category.id}"]`);
//const categoryNameElement = document.querySelector(`.category[data-category-id="${category.id}"]`);
//const categoryNameElements = document.querySelectorAll(`.category`);

//console.log(categoryNameElement);

console.log(target);



if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error("Target category not found for id:", category.id);
    }
  });


categoryLinks.classList.add("categlinks");
categoryLinks.textContent = category.name;

listItem.appendChild(categoryLinks);

categoryList.appendChild(listItem);

  });

categorySectDisplay.appendChild(categoryList);

    //categorySectHeading.appendChild(categorySectDisplay);

    categorySect.appendChild(categorySectDisplay);

    if (sidebar) {
        sidebar.appendChild(categorySect);
      }

      
    
    
}



export const headerLoad = () => {

    const container = document.querySelector("#container");
// start of main content

// header

const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");

    const header = document.createElement("header");
    
    const greetingDiv = document.createElement("div");
    greetingDiv.setAttribute("id", "greeting");

    const greetingTxt = document.createElement("h2");
    greetingTxt.textContent = `Hi ${prompt("Please type your first name")}`;

    greetingDiv.appendChild(greetingTxt);

    header.appendChild(greetingDiv);

    const addCategoryDiv = document.createElement("div");
    addCategoryDiv.setAttribute("id", "add-category-div");

    const addCategoryBtn = document.createElement("button");
    addCategoryBtn.setAttribute("id", "addcat");
   

    const addCategorySVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    addCategorySVG.classList.add("addctgry");
    addCategorySVG.setAttribute('viewBox', '0 0 24 24');
    addCategorySVG.setAttribute("height", "20px");
    addCategorySVG.setAttribute("width", "20px");

const addCategorySVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
addCategorySVGPath.setAttribute(
        "d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");

        addCategorySVG.appendChild(addCategorySVGPath);

        addCategoryBtn.appendChild(addCategorySVG);

    const addCategoryTxt = document.createElement("p");
    addCategoryTxt.classList.add("addcat-txt");
    addCategoryTxt.textContent = "Add Category";

    addCategoryBtn.appendChild(addCategoryTxt);

    addCategoryDiv.appendChild(addCategoryBtn);

    


    //addCategoryDiv.appendChild(addCategoryBtn);

    header.appendChild(addCategoryDiv);

    mainContent.appendChild(header);

    if (container) {

    container.appendChild(mainContent);

    }

    // end of header

    

}




export const todoSectLoad = () => {
    // start of to do section

    

    //const container = document.querySelector("#container");

    const mainContent = document.querySelector("#main-content");

    const todoSect = document.createElement("div");
    todoSect.setAttribute("id", "todo-sect");




    if (mainContent) {
        mainContent.appendChild(todoSect);
    }
    //input category
    categoryLoad(mytoDOs);

//categoryLoad(myCategoriesObj);


   
}


export function clearUI() {

  const todoSect = document.querySelector("#todo-sect");
    console.log(todoSect);

if (!todoSect) return;

    todoSect.replaceChildren();


}

export function clearListUI(categoryId) {

  const categMainSection = document.querySelector(`.categmainsect[data-category-id="${categoryId}"]`);
  console.log("categorysection being removed?", categMainSection);

  if (!categMainSection) return;

   //categMainSection.replaceChildren();

   categMainSection.removeChild(document.querySelector(`.listsect[data-category-id="${categoryId}"]`));

}

/*
export function clearTaskUI(listId) {

  const listSection = document.querySelector(`.listsect[data-list-id="${listId}"]`);

  console.log("listSection being removed?", listSection);

  if (!listSection) return;

   listSection.replaceChildren();

}
   */





export const categoryLoad = (array) => {


const todoSect = document.querySelector("#todo-sect");
    console.log(todoSect);

if (!todoSect) return;

    todoSect.replaceChildren();

   // todoSect.innerHTML = "";

 


    if (!Array.isArray(array)) {
    console.error("categoryLoad error: passed value is not an array", array);
    return;
  }

const categories = array.filter(item => item.type === 'category');

  categories.forEach(category => {

// main container for todos

    
    
    // category sect

     // start of category section

     const categMainSection = document.createElement("div");
     categMainSection.setAttribute("id", "category-sect-main");
     categMainSection.classList.add("categmainsect");
     categMainSection.dataset.categoryId = category.id;
 
     const categHeadingDiv = document.createElement("div");
     categHeadingDiv.setAttribute("id", "category-heading-sect");
     categHeadingDiv.classList.add("categheadingdiv");
 
     const categHeading = document.createElement("h2");
     categHeading.classList.add("category-title", "category");
     categHeading.textContent = category.name;
    categHeading.dataset.categoryId = category.id;
     console.log(categHeading.dataset.categoryId);

categHeadingDiv.appendChild(categHeading);

     // start of edit or delete

     const categoryEditDiv = document.createElement("div");
     categoryEditDiv.setAttribute("id", "cat-edit-div");
     categoryEditDiv.classList.add("categeditdiv");

        // edit button

        const editCategoryBtn = document.createElement("button");
        editCategoryBtn.setAttribute("id", "edit-category");
        editCategoryBtn.classList.add("editcateg");

const editCategSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
editCategSVG.classList.add("editcategoryname");
editCategSVG.setAttribute('viewBox', '0 0 24 24');
editCategSVG.setAttribute("height", "20px");
editCategSVG.setAttribute("width", "20px");

const editCategSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
editCategSVGPath.setAttribute(
"d", "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z");

editCategSVG.appendChild(editCategSVGPath);

editCategoryBtn.appendChild(editCategSVG);

categoryEditDiv.appendChild(editCategoryBtn);



        //delete category button

        const deleteCategoryBtn = document.createElement("button");
        deleteCategoryBtn.setAttribute("id", "delete-category");
        deleteCategoryBtn.classList.add("deletecateg");

const deleteCategSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
deleteCategSVG.classList.add("deletecategname");
deleteCategSVG.setAttribute('viewBox', '0 0 24 24');
deleteCategSVG.setAttribute("height", "20px");
deleteCategSVG.setAttribute("width", "20px");

const deleteCategSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
deleteCategSVGPath.setAttribute(
"d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z");

deleteCategSVG.appendChild(deleteCategSVGPath);

deleteCategoryBtn.appendChild(deleteCategSVG);

categoryEditDiv.appendChild(deleteCategoryBtn);

categHeadingDiv.appendChild(categoryEditDiv);
 
     //categHeadingDiv.appendChild(categHeading);
 
     categMainSection.appendChild(categHeadingDiv);

 
     // add list button
 
     const addListBtnDiv = document.createElement("div");
    // addListBtnDiv.setAttribute("id", "listbtn-div");
     addListBtnDiv.classList.add("listbtn-div");
 
     const addListBtn = document.createElement("button");
     //addListBtn.setAttribute("id", "addlist");
     addListBtn.classList.add("addlist");
 
     const addListSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
     addListSVG.classList.add("addlst");
     addListSVG.setAttribute('viewBox', '0 0 24 24');
     addListSVG.setAttribute("height", "20px");
     addListSVG.setAttribute("width", "20px");
 
 const addListSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
 addListSVGPath.setAttribute(
         "d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
 
         addListSVG.appendChild(addListSVGPath);
 
         addListBtn.appendChild(addListSVG);
 
     const addListTxt = document.createElement("p");
     addListTxt.classList.add("addlist-txt");
     addListTxt.textContent = "Add List";
 
     addListBtn.appendChild(addListTxt);
 
     addListBtnDiv.appendChild(addListBtn);
 
     categMainSection.appendChild(addListBtnDiv);
 
     //categMainSection.appendChild(categHeadingDiv);

     /*
     const listSection = document.createElement("div");
//listSection.setAttribute("id", "list-sect");
listSection.classList.add("listsect");
listSection.dataset.categoryId = category.id;

*/




console.log("Category ID Set on listSection:", category.id);





//categMainSection.appendChild(listSection);
    



        todoSect.appendChild(categMainSection);
    

     //listLoad(array, category.id);

    // listLoad(myListsObj, category.id); //// must call new JSON array
listLoad(mytoDOs, category.id);
/*
myListsObj.forEach(list => {
  listLoad(list, list.categoryId);
});

*/



}); // category loop
}




export const listLoad = (array, categoryId) => {


  const todoSect = document.querySelector("#todo-sect");
    
    

const exisitinglistHeading = todoSect.closest(".listheading");

console.log(exisitinglistHeading);

if (exisitinglistHeading) {

  exisitinglistHeading.replaceChildren();

}


    console.log("categoryId passed to listLoad:", categoryId);

    console.log("Array passed to listLoad:", array);

    const testlists = array.filter(item => item.type === 'list');
console.log("All lists regardless of categoryId:", testlists);

//listSection.replaceChildren(); // should be list title and children

// categorymainsection here




const lists = array.filter(item => item.type === 'list' && item.categoryId === categoryId);

  lists.forEach(list => {

    console.log(list);
    // start of list section that was already created in categoryload()

    const categMainSection = document.querySelector(`.categmainsect[data-category-id="${categoryId}"]`);

console.log("is this the right category section?: ", categMainSection);

const listSection = document.createElement("div");
//listSection.setAttribute("id", "list-sect");
listSection.classList.add("listsect");
//listSection.dataset.categoryId = category.id;
listSection.dataset.listId = list.id;
console.log("List ID Set on listSection:", list.id);

const listHeading = document.createElement("div");
listHeading.setAttribute("id", "list-heading");
listHeading.classList.add("listheading");

const listTitleDiv = document.createElement("div");
listTitleDiv.setAttribute("id", "list-title");
listTitleDiv.classList.add("listtitle");

const listTitle = document.createElement("h3");
listTitle.classList.add("list-title-txt", "list");
listTitle.textContent = list.name;
listTitle.dataset.listId = list.id;
console.log(listTitle.dataset.listId);

listTitle.dataset.categoryId = list.categoryId;
console.log(listTitle.dataset.categoryId);

listTitleDiv.appendChild(listTitle);

// start of edit or delete

const listEditDiv = document.createElement("div");
listEditDiv.setAttribute("id", "list-edit-div");
listEditDiv.classList.add("listeditdiv");

   // edit button

   const editListBtn = document.createElement("button");
   editListBtn.setAttribute("id", "edit-list");
   editListBtn.classList.add("editlist");

const editListSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
editListSVG.classList.add("editlistname");
editListSVG.setAttribute('viewBox', '0 0 24 24');
editListSVG.setAttribute("height", "20px");
editListSVG.setAttribute("width", "20px");

const editListSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
editListSVGPath.setAttribute(
"d", "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z");

editListSVG.appendChild(editListSVGPath);

editListBtn.appendChild(editListSVG);

listEditDiv.appendChild(editListBtn);



   //delete task button

   const deleteListBtn = document.createElement("button");
   deleteListBtn.setAttribute("id", "delete-list");
   deleteListBtn.classList.add("deletelist");

const deleteListSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
deleteListSVG.classList.add("deletelistname");
deleteListSVG.setAttribute('viewBox', '0 0 24 24');
deleteListSVG.setAttribute("height", "20px");
deleteListSVG.setAttribute("width", "20px");

const deleteListSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
deleteListSVGPath.setAttribute(
"d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z");

deleteListSVG.appendChild(deleteListSVGPath);

deleteListBtn.appendChild(deleteListSVG);

listEditDiv.appendChild(deleteListBtn);

listTitleDiv.appendChild(listEditDiv);

listHeading.appendChild(listTitleDiv);


// listHeading.appendChild(addListBtnDiv);

listSection.appendChild(listHeading);

// add task section here

const taskSection = document.createElement("div");
taskSection.classList.add("tasksect");
taskSection.setAttribute("id", "task-sect");
taskSection.dataset.listId = list.id;

listSection.appendChild(taskSection);



// add new task button here

// new task btn section

const addNewTaskDiv = document.createElement("div");
addNewTaskDiv.setAttribute("id", "new-task");
addNewTaskDiv.classList.add("newtaskdiv");

const newTaskBtn = document.createElement("button");
newTaskBtn.setAttribute("id", "newtask");
newTaskBtn.classList.add("newtaskbtn");

const addNewTaskSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
addNewTaskSVG.classList.add("addnewtsk");
addNewTaskSVG.setAttribute('viewBox', '0 0 24 24');
addNewTaskSVG.setAttribute("height", "20px");
addNewTaskSVG.setAttribute("width", "20px");

const addNewTaskSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
addNewTaskSVGPath.setAttribute(
"d", "M5 19V5H12V12H19V13C19.7 13 20.37 13.13 21 13.35V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H13.35C13.13 20.37 13 19.7 13 19H5M14 4.5L19.5 10H14V4.5M23 18V20H20V23H18V20H15V18H18V15H20V18H23Z");

addNewTaskSVG.appendChild(addNewTaskSVGPath);

newTaskBtn.appendChild(addNewTaskSVG);

const addNewTaskTxt = document.createElement("p");
addNewTaskTxt.classList.add("add-new-tsk-txt");
addNewTaskTxt.textContent = "New Task";

newTaskBtn.appendChild(addNewTaskTxt);

addNewTaskDiv.appendChild(newTaskBtn);

//taskSection.appendChild(addNewTaskDiv);



  listSection.appendChild(addNewTaskDiv);
 
categMainSection.appendChild(listSection);


//renderTasks(array, list.id);

//renderTasks(myTasksObj, list.id) // must call new JSON array
renderTasks(mytoDOs, list.id);

/*
myTasksObj.forEach(task => {
  renderTasks(task, task.listId);
});
*/

  });
}

//listLoad(mytoDOs, category.id);





export const createPriorityLabel = (priority) => {
  const labelDiv = document.createElement("div");
  const labelTxt = document.createElement("p");

  labelTxt.textContent = priority;
  labelTxt.classList.add(`${priority.toLowerCase()}-status`);

  labelDiv.setAttribute("data-priority", priority);
  labelDiv.classList.add("priority-label");
  labelDiv.appendChild(labelTxt);

  return labelDiv;
};


        

export function renderTasks(array, listId) {

  const taskSection = document.querySelector(`.tasksect[data-list-id="${listId}"]`);
console.log("Passed to renderTasks:", listId);
  
console.log(taskSection);

   if (!taskSection) {
    console.warn(`No task section found for list ID: ${listId}`);
    return;
  }

  taskSection.replaceChildren(); // only replace the task section, not the whole list section




  
    
//const tasks = array.filter(item => item.type === 'task' && item.listId === listId);

const tasks = array.filter(item => item.type === 'task' && item.listId === listId);

  tasks.forEach(task => {

   
console.log(task);

const cardDiv = document.createElement("div");
cardDiv.classList.add("card", "tasks");
cardDiv.dataset.taskId = task.id;

console.log("task:", cardDiv.dataset.taskId);

cardDiv.dataset.listId = task.listId;
console.log("Assigned list:", cardDiv.dataset.listId);




// start edit task btn div

const editTaskDiv = document.createElement("div");
//editTaskDiv.setAttribute("id", "editdivbtn");
editTaskDiv.classList.add("editdivbtn");

const editTaskBtn = document.createElement("button");
//editTaskBtn.setAttribute("id", "edit-task");
editTaskBtn.classList.add("edittask");

const editTaskSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
editTaskSVG.classList.add("editbtn");
editTaskSVG.setAttribute('viewBox', '0 0 24 24');
editTaskSVG.setAttribute("height", "20px");
editTaskSVG.setAttribute("width", "20px");

const editTaskSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
editTaskSVGPath.setAttribute(
    "d", "M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z");

editTaskSVG.appendChild(editTaskSVGPath);

editTaskBtn.appendChild(editTaskSVG);

editTaskDiv.appendChild(editTaskBtn);

cardDiv.appendChild(editTaskDiv);


// task display

const taskDisplay = document.createElement("div");
//taskDisplay.setAttribute("id", "taskdisplay");
taskDisplay.classList.add("displaytask");

const checkoffDiv = document.createElement("div");
//checkoffDiv.setAttribute("id", "checkoff-div");
checkoffDiv.classList.add("checkoffdiv");

const checkOffTaskSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
checkOffTaskSVG.classList.add("check-off");
checkOffTaskSVG.setAttribute('viewBox', '0 0 24 24');
checkOffTaskSVG.setAttribute("height", "20px");
checkOffTaskSVG.setAttribute("width", "20px");

const checkOffTaskSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
checkOffTaskSVGPath.setAttribute(
"d", "M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z");

checkOffTaskSVG.appendChild(checkOffTaskSVGPath);

checkoffDiv.appendChild(checkOffTaskSVG);


taskDisplay.appendChild(checkoffDiv);

const taskTxtDiv = document.createElement("div");
taskTxtDiv.setAttribute("id", "tsk-txt-div");
taskTxtDiv.classList.add("tsktxtdiv");



const taskTxt = document.createElement("p");
//taskTxt.setAttribute("id", "task-text");
taskTxt.classList.add("tskTxt");

taskTxt.textContent = `${task.dueDate} ${task.name}`;


  console.log(`Before the click: Task "${task.name}" (ID: ${task.id}) completed? ${task.completed}`);
 // console.log("type of value of task completed, string? boolean? ", task.completed, typeof task.completed);

  console.log(`Task "${task.name}" has completed:`, task.completed, `(${typeof task.completed})`);
if (task.completed === true) {
  console.log(`✓ Will cross out task "${task.name}"`);
} else if (task.completed === false) {
  console.log(`✗ Will NOT cross out task "${task.name}"`);
} else {
  console.warn(`⚠️ Unexpected task.completed value:`, task.completed);
}
// Just add or remove the class, no text node wrapping:
if (task.completed) {
  taskTxt.classList.add("crossed-out");
  console.log(`After the click: Task "${task.name}" (ID: ${task.id}) completed? ${task.completed}`);

checkoffDiv.replaceChildren();
    const checked = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    checked.classList.add("checked");
    checked.setAttribute("viewBox", "0 0 24 24");
    checked.setAttribute("height", "20px");
    checked.setAttribute("width", "20px");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z");
    checked.appendChild(path);
    checkoffDiv.appendChild(checked);


} else if (task.completed === false) {
  taskTxt.classList.remove("crossed-out");
  console.log("Removing crossed-out from:", task.name);
}



taskTxtDiv.appendChild(taskTxt);

const priorityLabel = createPriorityLabel(task.priority);

console.log("is priorityLabel a div?", priorityLabel);

priorityLabel.classList.add("priority-label");

priorityLabel.addEventListener("click", () => togglePriority(task, priorityLabel));

taskTxtDiv.appendChild(priorityLabel);


taskDisplay.appendChild(taskTxtDiv);


cardDiv.appendChild(taskDisplay);

// append card div to right list

    
    taskSection.appendChild(cardDiv);


   /* 

    if (task.completed) {
    const existing = taskTxt.querySelector(".crossed-out");
    if (!existing) {
      const textNode = taskTxt.childNodes[0];
      if (textNode && textNode.nodeType === Node.TEXT_NODE) {
        const span = document.createElement("span");
        span.classList.add("crossed-out");
        
        span.textContent = textNode.textContent.trim();
        taskTxt.replaceChild(span, textNode);
      }
    }

    checkoffDiv.replaceChildren();
    const checked = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    checked.classList.add("checked");
    checked.setAttribute("viewBox", "0 0 24 24");
    checked.setAttribute("height", "20px");
    checked.setAttribute("width", "20px");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z");
    checked.appendChild(path);
    checkoffDiv.appendChild(checked);

  } else {
    const crossedSpan = taskTxt.querySelector(".crossed-out");
    if (crossedSpan) {


      crossedSpan.textDecoration = "none";
      crossedSpan.style.color = "black";
     
      const originalText = crossedSpan.textContent;
      crossedSpan.remove();
      taskTxt.insertAdjacentText("afterbegin", originalText);
      
      
    }
    // no remove checkmark here
    }

    */

  /* // ignore second section
  
if (task.completed) {
  // Add .crossed-out style
  // Check if .crossed-out already exists
  const alreadyCrossed = taskTxt.querySelector(".crossed-out");
  if (!alreadyCrossed) {
    // Grab the plain text node (assumes it's the first child)
    const textNode = taskTxt.childNodes[0];
    if (textNode && textNode.nodeType === Node.TEXT_NODE) {
      const span = document.createElement("span");
      span.classList.add("crossed-out");
      span.textContent = textNode.textContent.trim();
      

      taskTxt.replaceChild(span, textNode); // Replace only the text node
    }
  }

  // Add checked icon
  const checked = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  checked.classList.add("checked");
  checked.setAttribute('viewBox', '0 0 24 24');
  checked.setAttribute("height", "20px");
  checked.setAttribute("width", "20px");

  const checkPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
  checkPath.setAttribute("d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z");
  checked.appendChild(checkPath);

  const checkoffDiv = cardDiv.querySelector(".checkoffdiv");
  //checkoffDiv.innerHTML = ""; // Clear old icon
checkoffDiv.replaceChildren();

  checkoffDiv.appendChild(checked);
}

else {
  const crossedSpan = taskTxt.querySelector(".crossed-out");
if (crossedSpan) {

  crossedSpan.style.textDecoration = "none";
      crossedSpan.style.color = "black";
  const originalText = crossedSpan.textContent;
  crossedSpan.remove(); // remove the span, not the whole taskTxt
 

  // Restore the plain text node for the task name
  taskTxt.insertAdjacentText("afterbegin", originalText);
}
//checkoffDiv.replaceChildren(); // Remove checkmark

}
*/

/*
const existingTaskTxt = cardDiv.querySelector(".tsktxt span");
if (existingTaskTxt) {
  if (task.completed) {
    existingTaskTxt.classList.add("crossed-out");
  } else {
    existingTaskTxt.classList.remove("crossed-out");
  }
}

*/
  

  });
    
}





export const togglePriority = (task, priorityLabelDiv) => {

    const priorities = ["Urgent", "Moderate", "Low", "None"];
  const currentIndex = priorities.indexOf(task.priority);

  // Fallback in case currentIndex is -1
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % priorities.length : 0;
  const newPriority = priorities[nextIndex];

  // Update the task data
  task.priority = newPriority;

  // Update the label visually
  const labelTextElement = priorityLabelDiv.querySelector("p");

  if (labelTextElement) {
    labelTextElement.textContent = newPriority;

    // Remove old classes
    labelTextElement.classList.remove("urgent-status", "moderate-status", "low-status", "none-status");

    // Add new class safely (guard against undefined)
    if (typeof newPriority === "string") {
      labelTextElement.classList.add(`${newPriority.toLowerCase()}-status`);
    }
  }

  // Update data attribute used for CSS
  priorityLabelDiv.setAttribute("data-priority", newPriority);

};
  


export const createHomePage = () => {
    
    
    headerLoad();
    todoSectLoad();
    sidebarLoad();
   //upcomingTasksDueDates();
    

    
}

//createHomePage();



  