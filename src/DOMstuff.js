// checkmark complete svg <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
// edit svg <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-outline</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>
// delete svg <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>

import { mytoDO, addTask } from "./todo-logic.js";





export const formatDate = () => {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    
    const formattedTodaysDate = `${year}, ${month}, ${day}`;
    console.log(formattedTodaysDate);


    const { format } = require("date-fns");

   // format(new Date(2025, 5, 11), "MMM dd ''yy");
    //=> 'May 11 '25' //
    
    const todayDate = format(new Date(formattedTodaysDate), "MMM dd ''yy");
        
      console.log(todayDate);

     // const dueDate = format(new Date(dateforminput), "MMM dd ''yy");

      return { formattedTodaysDate, todayDate };

}


export const distanceOfDueDate = () => {

const formattodaydate = formatDate();

    const result = formatDistance(formattodaydate.todayDate, new Date(2025, 8, 1));

    console.log(result);
}


// just what is seen on the main page. 
    // remember to return all necessary html elements as objects in return





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
todoCategories();

   

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

notifToday();



}

const notifToday = () => {

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
todayNotifText.textContent = "12";
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

    notifUpcoming();




}

const notifUpcoming = () => {

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
upcomingNotifText.textContent = "12";
upcomingNotifText.classList.add("notif-text");

upcomingTasksNotify.appendChild(upcomingNotifText);
     // end of notif circle

    upcomingTasksHeader.appendChild(upcomingTasksNotify);

    if (upcomingTasks) {
        upcomingTasks.appendChild(upcomingTasksHeader);
            }
    

}

const todoCategories = () => {
    const sidebar = document.querySelector("#sidebar");

    const categorySect = document.createElement("div");
    categorySect.setAttribute("id", "category-sect");

    const categorySectHeading = document.createElement("h3");
    categorySectHeading.textContent = "Categories";

    categorySect.appendChild(categorySectHeading);

    const categorySectDisplay = document.createElement("div");
    categorySectDisplay.setAttribute("id", "category-sect-display");
    categorySectDisplay.classList.add("side-category-display");
    categorySectDisplay.textContent = "Category 1";

    categorySect.appendChild(categorySectDisplay);

    if (sidebar) {
        sidebar.appendChild(categorySect);
      }
    
    
}


const refreshTodoCategories = () => {
    const categorySectDisplay = document.querySelector("#category-sect-display");
    categorySectDisplay.replaceChildren();

}


/**
 * Updates a single key in an object inside an array based on a matching key
 * @param {Array} array - The array of objects to update
 * @param {string} matchKey - The key to match (e.g. "name")
 * @param {string} matchValue - The value to match (e.g. original name)
 * @param {string} updateKey - The key to update (e.g. "name" or "age")
 * @param {*} newValue - The new value to set
 */
function updateArrayObjectByKey(array, matchKey, matchValue, updateKey, newValue) {
    const obj = array.find(item => item[matchKey] === matchValue);
    if (obj) {
      obj[updateKey] = newValue;
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
    //input category, list task here functions
    categoryLoad();


    
return { todoSect };
   
}


export const categoryLoad = () => {

    const todoSect = document.querySelector("#todo-sect");

    
    // category sect

     // start of category section

     const categMainSection = document.createElement("div");
     categMainSection.setAttribute("id", "category-sect-main");
     categMainSection.classList.add("categmainsect");
 
     const categHeadingDiv = document.createElement("div");
     categHeadingDiv.setAttribute("id", "category-heading-sect");
     categHeadingDiv.classList.add("categheadingdiv");
 
     const categHeading = document.createElement("h2");
     categHeading.classList.add("category-title");
     categHeading.textContent = mytoDO[0].categname;


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



        //delete task button

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

      
     
     if (todoSect) {
        todoSect.appendChild(categMainSection);
       // }

     listLoad();

     
    

     // event delegation listener here for todosect

     todoSect.addEventListener('click', function(e) {

        const clickedCategEditBtn = e.target.closest('.editcateg');
        const clickedCategDeleteBtn = e.target.closest('.deletecateg');
        const clickedAddListBtn = e.target.closest('.addlist');


        if (clickedCategEditBtn) {
          alert('editcateg');

          const originalTitle = categHeading.textContent;

//create form

const formCategEdit = document.createElement("form");
formCategEdit.setAttribute("name", "formcategedit");
formCategEdit.classList.add("formcategedit");

const formCategTitleEdit = document.createElement("input");
formCategTitleEdit.type = "text";
formCategTitleEdit.name = "edit-categ-title";
formCategTitleEdit.id = "edit-categ-title";
formCategTitleEdit.value = originalTitle;

formCategEdit.appendChild(formCategTitleEdit);


const editCategBtnSect = document.createElement("div");
editCategBtnSect.setAttribute("id", "categeditBtn-sect");
editCategBtnSect.classList.add("categbtnsectedit");

const formCategEditSubmitBtn = document.createElement("button");
formCategEditSubmitBtn.type = "submit"; // Important: type submit so form submit event fires
formCategEditSubmitBtn.id = "submit-edit-categ";
formCategEditSubmitBtn.textContent = "Edit";

editCategBtnSect.appendChild(formCategEditSubmitBtn);

const formCategEditCancelBtn = document.createElement("button");
formCategEditCancelBtn.type = "button"; // prevent form submit
formCategEditCancelBtn.id = "cancel-edit-categ";
formCategEditCancelBtn.textContent = "Cancel";

editCategBtnSect.appendChild(formCategEditCancelBtn);

formCategEdit.appendChild(editCategBtnSect);

//expandTasks.appendChild(formTaskEdit);
//categHeading.parentElement.appendChild(formCategEdit);

// appending form to element to replace that element
//categHeading.appendChild(formCategEdit); // shows up instead of pop up

categHeading.parentElement.insertBefore(formCategEdit, categoryEditDiv);




          


// Clear current content
categHeading.textContent = "";



    formCategEdit.addEventListener('submit', (e) => {

        e.preventDefault(); // We don't want to submit this fake form
    
        const formData = new FormData(formCategEdit);
        categHeading.textContent = formData.get("edit-categ-title");

        const originalName = originalTitle;
        const updatedName = formData.get("edit-categ-title");
        
        updateArrayObjectByKey(mytoDO, "categname", originalName, "categname", updatedName);



      formCategEdit.remove(); // Remove form after save

  });

  formCategEditCancelBtn.addEventListener('click', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    categHeading.textContent = originalTitle;
      
      formCategEdit.remove(); // Remove form after click
  });

console.log(mytoDO);


          
        } else if (clickedCategDeleteBtn) {
          alert('deletecateg');

         
             if (categMainSection) { 
                categMainSection.remove();
             }
         
        } else if (clickedAddListBtn) {
          alert('addlist');

          const addListDialog = document.createElement("dialog");
    addListDialog.setAttribute("id", "addlist-dialog");
    
    const formAddList = document.createElement("form");
    formAddList.setAttribute("name", "formaddlist");
    formAddList.classList.add("formaddlist");

    // add list name

    const listNameLabel = document.createElement("label");
    listNameLabel.setAttribute("id", "add-list-label");
    listNameLabel.textContent = "LIST NAME";
        
        const formListTitle = document.createElement("input");
        formListTitle.type = "text";
        formListTitle.name = "add-list-title";
        formListTitle.id = "add-list-title";
        formListTitle.minLength = "2";
        formListTitle.required = true;
        formListTitle.placeholder = "Onboarding List";
        
    listNameLabel.appendChild(formListTitle);
    formAddList.appendChild(listNameLabel);


    //button sects

    const addListBtnSect = document.createElement("div");
    addListBtnSect.setAttribute("id", "addlistBtn-sect");
    addListBtnSect.classList.add("addlistbtnsect");

    const addListNameBtn = document.createElement("button")
    addListNameBtn.type = "submit"; // Important: type submit so form submit event fires
    addListNameBtn.id = "submit-list-name";
    addListNameBtn.textContent = "Add List";

    addListBtnSect.appendChild(addListNameBtn);


    const cancelAddListNameBtn = document.createElement("button");
    cancelAddListNameBtn.type = "button"; // prevent form submit
    cancelAddListNameBtn.id = "cancel-addlist-name";
    cancelAddListNameBtn.textContent = "Cancel";

    addListBtnSect.appendChild(cancelAddListNameBtn);

    formAddList.appendChild(addListBtnSect);

addListDialog.appendChild(formAddList);

addListBtnDiv.appendChild(addListDialog);

addListDialog.showModal();


// start form listener

formAddList.addEventListener('submit', (e) => {

    e.preventDefault(); // We don't want to submit this fake form
   
 
 const listSection = document.createElement("div");
//listSection.setAttribute("id", "list-sect");
listSection.classList.add("listsect");

const listHeading = document.createElement("div");
//listHeading.setAttribute("id", "list-heading");
listHeading.classList.add("listheading");

const listTitleDiv = document.createElement("div");
//listTitleDiv.setAttribute("id", "list-title");
listTitleDiv.classList.add("listtitle");

const listTitle = document.createElement("h3");
listTitle.classList.add("list-title-txt");
//ad form data

const formData = new FormData(formAddList);

listTitle.textContent = formData.get("add-list-title") ;


//listTitle.textContent = "Daily Tasks";

//listTitle.textContent = 


listTitleDiv.appendChild(listTitle);

// start of edit or delete

const listEditDiv = document.createElement("div");
//listEditDiv.setAttribute("id", "list-edit-div");
listEditDiv.classList.add("listeditdiv");

   // edit button

   const editListBtn = document.createElement("button");
   //editListBtn.setAttribute("id", "edit-list");
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
  // deleteListBtn.setAttribute("id", "delete-list");
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

categMainSection.appendChild(listSection);


addListDialog.close();
addListDialog.remove();

// start delegation here for add and delete buttons



listSection.addEventListener('click', function(e) {

    const clickedListEditBtn = e.target.closest('.editlist');
const clickedListDeleteBtn = e.target.closest('.deletelist');



    if (clickedListEditBtn) {
      alert('editlist');

      const originalListTitle = listTitle.textContent;


// Clear current content
listTitle.textContent = "";

//create form

const formListEdit = document.createElement("form");
formListEdit.setAttribute("name", "formlistedit");
formListEdit.classList.add("formlistedit");

const formListTitleEdit = document.createElement("input");
formListTitleEdit.type = "text";
formListTitleEdit.name = "edit-list-title";
formListTitleEdit.id = "edit-list-title";
//formListTitleEdit.value = "";

formListEdit.appendChild(formListTitleEdit);


const editListBtnSect = document.createElement("div");
editListBtnSect.setAttribute("id", "listeditBtn-sect");
editListBtnSect.classList.add("listbtnsectedit");

const formListEditSubmitBtn = document.createElement("button");
formListEditSubmitBtn.type = "submit"; // Important: type submit so form submit event fires
formListEditSubmitBtn.id = "submit-edit-list";
formListEditSubmitBtn.textContent = "Edit List Name";

editListBtnSect.appendChild(formListEditSubmitBtn);

const formListEditCancelBtn = document.createElement("button");
formListEditCancelBtn.type = "button"; // prevent form submit
formListEditCancelBtn.id = "cancel-edit-list";
formListEditCancelBtn.textContent = "Cancel Edit";

editListBtnSect.appendChild(formListEditCancelBtn);

formListEdit.appendChild(editListBtnSect);

//expandTasks.appendChild(formTaskEdit);
listTitle.parentElement.appendChild(formListEdit);

formListEdit.addEventListener('submit', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    const formData = new FormData(formListEdit);
    listTitle.textContent = formData.get("edit-list-title");


    const originalName = originalListTitle;
    const updatedName = formData.get("edit-list-title");
    
    updateArrayObjectByKey(mytoDO, "listname", originalName, "listname", updatedName);


  formListEdit.remove(); // Remove form after save
  

});

formListEditCancelBtn.addEventListener('click', (e) => {

e.preventDefault(); // We don't want to submit this fake form

listTitle.textContent = originalListTitle;
  
  formListEdit.remove(); // Remove form after click
  
});




      
    } else if (clickedListDeleteBtn) {
      //alert('test');

      
     
         if (listTitleDiv) { 
            listTitleDiv.remove();
         }
     

    }
    }, false);


}); // end of listener

cancelAddListNameBtn.addEventListener('click', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    formAddList.remove();
    addListDialog.close(); // Remove form after click
    addListDialog.remove();
  });

        }
      
      }, false);

    }// end of todo if
  
   // return { categMainSection };

}
    


export const listLoad = () => {

    const categMainSection = document.querySelector("#category-sect-main");

    // start of list section

const listSection = document.createElement("div");
listSection.setAttribute("id", "list-sect");
listSection.classList.add("listsect");

const listHeading = document.createElement("div");
listHeading.setAttribute("id", "list-heading");
listHeading.classList.add("listheading");

const listTitleDiv = document.createElement("div");
listTitleDiv.setAttribute("id", "list-title");
listTitleDiv.classList.add("listtitle");

const listTitle = document.createElement("h3");
listTitle.classList.add("list-title-txt");
listTitle.textContent = mytoDO[0].listname;


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

if (categMainSection) {

    categMainSection.appendChild(listSection);
    }

taskLoad();




}



export const taskLoad = () => {

    const formattodaydate = formatDate();

    const listSection = document.querySelector("#list-sect");
    // tasks section


const taskSection = document.createElement("div");
taskSection.setAttribute("id", "task-sect");
taskSection.classList.add("tasksect");

const cardDiv = document.createElement("div");
cardDiv.classList.add("card");

const editTaskDiv = document.createElement("div");
editTaskDiv.setAttribute("id", "editdivbtn");
editTaskDiv.classList.add("editdivbtn");

const editTaskBtn = document.createElement("button");
editTaskBtn.setAttribute("id", "edit-task");
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
taskDisplay.setAttribute("id", "taskdisplay");
taskDisplay.classList.add("displaytask");

const checkoffDiv = document.createElement("div");
checkoffDiv.setAttribute("id", "checkoff-div");
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



//const { urgentLabel } = urgent();

const taskTxt = document.createElement("p");
taskTxt.setAttribute("id", "task-text");
taskTxt.classList.add("tskTxt");
//taskTxt.textContent = `${formattodaydate.todayDate} Clean Room`;
taskTxt.textContent = `${mytoDO[0].dueDate} ${mytoDO[0].name} ${mytoDO[0].priority}`;

//taskTxt.appendChild(urgentLabel);

taskTxtDiv.appendChild(taskTxt);




taskDisplay.appendChild(taskTxtDiv);

cardDiv.appendChild(taskDisplay);

taskSection.appendChild(cardDiv);

listSection.appendChild(taskSection);

//renderTasks();

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

if (listSection) {

listSection.appendChild(addNewTaskDiv);
}

    
    }


/*

    const completeTask = () => {

       //const taskDisplay = document.querySelector("#taskdisplay");

       const editTaskDiv = document.querySelector(".editdivbtn");

       const taskTxt = document.querySelector(".tskTxt");

       const checkoffDiv = document.querySelector(".checkoffdiv");

       const checkOffTaskSVG = document.querySelector(".check-off");

       checkOffTaskSVG.addEventListener("click", (e) => {

checkOffTaskSVG.remove();


const checkTaskSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
checkTaskSVG.classList.add("checked");
checkTaskSVG.setAttribute('viewBox', '0 0 24 24');
checkTaskSVG.setAttribute("height", "20px");
checkTaskSVG.setAttribute("width", "20px");

const checkTaskSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
checkTaskSVGPath.setAttribute(
"d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z");

checkTaskSVG.appendChild(checkTaskSVGPath);


if (checkoffDiv) {

checkoffDiv.appendChild(checkTaskSVG);
}



const span = document.createElement("span");
span.textContent = taskTxt.textContent;
span.style.color = "gray";
span.style.textDecoration = "line-through";

const expandTaskDiv = document.querySelector(".expand-toggle");

if (taskTxt) {
    taskTxt.textContent = "";
    taskTxt.appendChild(span);
    expandTaskDiv.remove();
    editTaskDiv.remove();
    
}

       });

    }
    //completeTask();

    */

const refreshTODO = () => {

const todoSect = document.querySelector("#todo-sect");

todoSect.replaceChildren();

}


const refreshTasks = () => {
    const taskSection = document.querySelector("#task-sect");
    taskSection.replaceChildren();

}


export const urgent = () => {

const taskTxtDiv = document.querySelector(".tsktxtdiv");
const urgentLabel = document.createElement("div");
urgentLabel.setAttribute("id", "urgent-label");

//urgentLabel.textContent = "Urgent";

const urgentLabelTxt = document.createElement("p");
urgentLabelTxt.classList.add("urgent-status");
urgentLabelTxt.textContent = "Urgent";

urgentLabel.appendChild(urgentLabelTxt);

if (taskTxtDiv) {
    taskTxtDiv.appendChild(urgentLabel);
  }

    return { urgentLabel, urgentLabelTxt };
} 

//urgent();


export const moderate = () => {

    const taskTxtDiv = document.querySelector(".tsktxtdiv");
    const moderateLabel = document.createElement("div");
    moderateLabel.setAttribute("id", "moderate-label");
    
    //urgentLabel.textContent = "Urgent";
    
    const moderateLabelTxt = document.createElement("p");
    moderateLabelTxt.classList.add("moderate-status");
    moderateLabelTxt.textContent = "Moderate";
    
    moderateLabel.appendChild(moderateLabelTxt);
    
    if (taskTxtDiv) {
        taskTxtDiv.appendChild(moderateLabel);
      }
    
        return { moderateLabel, moderateLabelTxt };
    } 




    export const low = () => {

        const taskTxtDiv = document.querySelector(".tsktxtdiv");
        const lowLabel = document.createElement("div");
        lowLabel.setAttribute("id", "low-label");
        
        //urgentLabel.textContent = "Urgent";
        
        const lowLabelTxt = document.createElement("p");
        lowLabelTxt.classList.add("low-status");
        lowLabelTxt.textContent = "Low";
        
        lowLabel.appendChild(lowLabelTxt);
        
        if (taskTxtDiv) {
            taskTxtDiv.appendChild(lowLabel);
          }
        
            return { lowLabel, lowLabelTxt };
        } 


        



export const addCategPopUp = () => {
// form goes in here

const addCategoryDiv = document.querySelector("#add-category-div");



const addCategoryBtn = document.querySelector("#addcat");



addCategoryBtn.addEventListener("click", (e) => {


const addCategDialog = document.createElement("dialog");
addCategDialog.setAttribute("id", "addcateg");

const formAddCateg = document.createElement("form");
formAddCateg.setAttribute("name", "formaddcateg");
formAddCateg.classList.add("formaddcateg");


const categoryNameDiv = document.createElement("div");
categoryNameDiv.setAttribute("id", "categNamediv");

const categNameLabel = document.createElement("label");
categNameLabel.setAttribute("id", "add-categ-label");
categNameLabel.textContent = "CATEGORY NAME";
    
    const formCategTitle = document.createElement("input");
    formCategTitle.type = "text";
    formCategTitle.name = "add-categ-title";
    formCategTitle.id = "add-categ-title";
    formCategTitle.minLength = "2";
    formCategTitle.required = true;
    formCategTitle.placeholder = "Work";
    
categNameLabel.appendChild(formCategTitle);

categoryNameDiv.appendChild(categNameLabel);

formAddCateg.appendChild(categoryNameDiv);


    //formAddCateg.appendChild(formCategTitle);

    //button sects

    const addCategBtnSect = document.createElement("div");
    addCategBtnSect.setAttribute("id", "addcategBtn-sect");

    const addCategNameBtn = document.createElement("button")
    addCategNameBtn.type = "submit"; // Important: type submit so form submit event fires
    addCategNameBtn.id = "submit-categ-name";
    addCategNameBtn.textContent = "Add Category";

    addCategBtnSect.appendChild(addCategNameBtn);


    const cancelAddCategNameBtn = document.createElement("button");
    cancelAddCategNameBtn.type = "button"; // prevent form submit
    cancelAddCategNameBtn.id = "cancel-addcateg-name";
    cancelAddCategNameBtn.textContent = "Cancel";

    addCategBtnSect.appendChild(cancelAddCategNameBtn);

    formAddCateg.appendChild(addCategBtnSect);

    addCategDialog.appendChild(formAddCateg);

    addCategoryDiv.appendChild(addCategDialog);


    addCategDialog.showModal();



    formAddCateg.addEventListener('submit', (e) => {

        e.preventDefault(); // We don't want to submit this fake form

        const todoSect = document.querySelector("#todo-sect");
    // category sect

     // start of category section

     const categMainSection = document.createElement("div");
     //categMainSection.setAttribute("id", "category-sect-main");
     categMainSection.classList.add("categmainsect");
 
     const categHeadingDiv = document.createElement("div");
     //categHeadingDiv.setAttribute("id", "category-heading-sect");
     categHeadingDiv.classList.add("categheadingdiv");
 
     const categHeading = document.createElement("h2");
     categHeading.classList.add("category-title");
     //categHeading.textContent = "Category 1";

     const formData = new FormData(formAddCateg);
        categHeading.textContent = formData.get("add-categ-title");


     // start of edit or delete

     const categoryEditDiv = document.createElement("div");
    // categoryEditDiv.setAttribute("id", "cat-edit-div");
    categoryEditDiv.classList.add("categeditdiv");

        // edit button

        const editCategoryBtn = document.createElement("button");
       // editCategoryBtn.setAttribute("id", "edit-category");
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



        //delete task button

        const deleteCategoryBtn = document.createElement("button");
        //deleteCategoryBtn.setAttribute("id", "delete-category");
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

categHeading.appendChild(categoryEditDiv);
 
     categHeadingDiv.appendChild(categHeading);
 
     categMainSection.appendChild(categHeadingDiv);
     
 
     // add list button
 
     const addListBtnDiv = document.createElement("div");
    // addListBtnDiv.setAttribute("id", "listbtn-div");
     addListBtnDiv.classList.add("listbtn-div");
 
     const addListBtn = document.createElement("button");
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
 
    // categMainSection.appendChild(categHeadingDiv);


     if (todoSect) {
        todoSect.appendChild(categMainSection);
        }

        
        const categname = formData.get("add-categ-title");

        // Add to todo array
        addTask(categname);
       
        console.log(mytoDO);
        console.log(mytoDO[1].categname);

        formAddCateg.reset();
        
      formAddCateg.remove();
      addCategDialog.close(); // Remove form after submit
      addCategDialog.remove();
    

  });


  cancelAddCategNameBtn.addEventListener('click', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    formAddCateg.remove();
    addCategDialog.close(); // Remove form after click
    addCategDialog.remove();
  });

});



}



/*
export const addListPopUp = () => {

//const todoSect = document.querySelector("#todo-sect");

   const addListBtnDiv = document.querySelector(".listbtn-div");

   const addListBtns = document.querySelectorAll(".addlist");
addListBtns.forEach(addListBtn => {



  addListBtn.addEventListener("click", (e) => {

   // if (e.target.closest(".addlist")) {
     //   console.log("Add List button clicked!");

      //  const addListBtn = e.target.closest(".addlist");

 


    const addListDialog = document.createElement("dialog");
    addListDialog.setAttribute("id", "addlist-dialog");
    
    const formAddList = document.createElement("form");
    formAddList.setAttribute("name", "formaddlist");
    formAddList.classList.add("formaddlist");

    // add list name

    const listNameLabel = document.createElement("label");
    listNameLabel.setAttribute("id", "add-list-label");
    listNameLabel.textContent = "LIST NAME";
        
        const formListTitle = document.createElement("input");
        formListTitle.type = "text";
        formListTitle.name = "add-list-title";
        formListTitle.id = "add-list-title";
        formListTitle.minLength = "2";
        formListTitle.required = true;
        formListTitle.placeholder = "Onboarding List";
        
    listNameLabel.appendChild(formListTitle);
    formAddList.appendChild(listNameLabel);


    //button sects

    const addListBtnSect = document.createElement("div");
    addListBtnSect.setAttribute("id", "addlistBtn-sect");

    const addListNameBtn = document.createElement("button")
    addListNameBtn.type = "submit"; // Important: type submit so form submit event fires
    addListNameBtn.id = "submit-list-name";
    addListNameBtn.textContent = "Add List";

    addListBtnSect.appendChild(addListNameBtn);


    const cancelAddListNameBtn = document.createElement("button");
    cancelAddListNameBtn.type = "button"; // prevent form submit
    cancelAddListNameBtn.id = "cancel-addlist-name";
    cancelAddListNameBtn.textContent = "Cancel";

    addListBtnSect.appendChild(cancelAddListNameBtn);

    formAddList.appendChild(addListBtnSect);

addListDialog.appendChild(formAddList);

addListBtnDiv.appendChild(addListDialog);

addListDialog.showModal();


// start form listener

formAddList.addEventListener('submit', (e) => {

    e.preventDefault(); // We don't want to submit this fake form
   
    

 const categMainSection = document.querySelector(".categmainsect");
 
 const listSection = document.createElement("div");
//listSection.setAttribute("id", "list-sect");
listSection.classList.add("listsect");

const listHeading = document.createElement("div");
//listHeading.setAttribute("id", "list-heading");
listHeading.classList.add("listheading");

const listTitleDiv = document.createElement("div");
//listTitleDiv.setAttribute("id", "list-title");
listTitleDiv.classList.add("listtitle");

const listTitle = document.createElement("h3");
listTitle.classList.add("list-title-txt");

const formData = new FormData(formAddList);
        listTitle.textContent = formData.get("add-list-title");

//listTitle.textContent = 


listTitleDiv.appendChild(listTitle);

// start of edit or delete

const listEditDiv = document.createElement("div");
//listEditDiv.setAttribute("id", "list-edit-div");
listEditDiv.classList.add("listeditdiv");

   // edit button

   const editListBtn = document.createElement("button");
   //editListBtn.setAttribute("id", "edit-list");
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
  // deleteListBtn.setAttribute("id", "delete-list");
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

// new task btn section

const addNewTaskDiv = document.createElement("div");
addNewTaskDiv.classList.add("newtaskdiv");

const newTaskBtn = document.createElement("button");
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

listSection.appendChild(addNewTaskDiv);

if (categMainSection) {

    categMainSection.appendChild(listSection);
    }

  

   
   
    formAddList.reset();
        
    formAddList.remove();
    addListDialog.close(); // Remove form after submit
    addListDialog.remove();
    
});


cancelAddListNameBtn.addEventListener('click', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    formAddList.remove();
    addListDialog.close(); // Remove form after click
    addListDialog.remove();
  });

   // } // end of if statement

});

}); // end of button loop

}
*/


const addTaskPopUp = () => {
    // form goes in here

  // const addNewTaskDiv = document.querySelectorAll(".newtaskdiv");

   const newTaskBtns = document.querySelectorAll(".newtaskbtn");

newTaskBtns.forEach(newTaskBtn => {

newTaskBtn.addEventListener("click", () => {
    console.log("Button clicked");
 // Get the parent task section
 //const taskSect = newTaskBtn.closest(".tasksect");

 const listSection = newTaskBtn.closest(".listsect");

 const taskSection = listSection.querySelector(".tasksect");

 // Get the corresponding .newtaskdiv in that section
 //const addNewTaskDiv = taskSect.querySelector(".");

 // add tasks now
    
    const addTaskDialog = document.createElement("dialog");
    addTaskDialog.setAttribute("id", "addtsk-dialog");
    
    const formAddTask = document.createElement("form");
    formAddTask.setAttribute("name", "formaddtsk");
    formAddTask.classList.add("formaddtsk");

    // add tsk name

    const taskNameSect = document.createElement("div");
    taskNameSect.setAttribute("id", "taskNameDiv");

    const taskNameLabel = document.createElement("label");
    taskNameLabel.setAttribute("id", "add-tsk-label");
    taskNameLabel.textContent = "TASK NAME";
        
        const formTaskTitle = document.createElement("input");
        formTaskTitle.type = "text";
        formTaskTitle.name = "add-tsk-title";
        formTaskTitle.id = "add-tsk-title";
        formTaskTitle.minLength = "2";
        formTaskTitle.required = true;
        formTaskTitle.placeholder = "Set Up Email";
        
        taskNameLabel.appendChild(formTaskTitle);

        taskNameSect.appendChild(taskNameLabel);

    formAddTask.appendChild(taskNameSect);

    // add task-details

    const taskDetailsSect = document.createElement("div");
    taskDetailsSect.setAttribute("id", "taskDetailsDiv");

    const taskDetailsLabel = document.createElement("label");
    taskDetailsLabel.setAttribute("id", "add-tskdetails-label");
    taskDetailsLabel.textContent = "TASK DETAILS";

    const formTaskDetails = document.createElement("textarea");
    formTaskDetails.name = "add-tsk-details";
    formTaskDetails.id = "add-tsk-details";
    formTaskDetails.rows = "5";
    formTaskDetails.cols  = "30";
    formTaskDetails.required = true;
    formTaskDetails.placeholder = "Log in & set up atuo responders.";
        
        taskDetailsLabel.appendChild(formTaskDetails);

        taskDetailsSect.appendChild(taskDetailsLabel);

    formAddTask.appendChild(taskDetailsSect);

    // due-date

    const taskDateSect = document.createElement("div");
    taskDateSect.setAttribute("id", "taskDateDiv");

    const taskDateLabel = document.createElement("label");
    taskDateLabel.setAttribute("id", "add-tskdate-label");
    taskDateLabel.textContent = "TASK DUE DATE";

    const formTaskDate = document.createElement("input");
    formTaskDate.type = "date";
    formTaskDate.name = "add-tsk-date";
    formTaskDate.id = "add-tsk-date";
    formTaskDate.required = true;
    
        
    taskDateLabel.appendChild(formTaskDate);

        taskDateSect.appendChild(taskDateLabel);

    formAddTask.appendChild(taskDateSect);

    // priority 

    const taskPrioritySect = document.createElement("div");
    taskPrioritySect.setAttribute("id", "taskPriorityDiv");

    const taskPriorityLabel = document.createElement("label");
    taskPriorityLabel.setAttribute("id", "add-tskpriority-label");
    taskPriorityLabel.textContent = "TASK PRIORITY";

    const formTaskPriority = document.createElement("select");
    formTaskPriority.name = "add-tsk-priority";
    formTaskPriority.id = "add-tsk-priority";
    formTaskPriority.required = true;

    const urgentOption = document.createElement("option");
    urgentOption.value = "urgent";
    urgentOption.textContent = "Urgent";
    
    formTaskPriority.appendChild(urgentOption);

    const moderateOption = document.createElement("option");
    moderateOption.value = "moderate";
    moderateOption.textContent = "Moderate";

    formTaskPriority.appendChild(moderateOption);

    const lowOption = document.createElement("option");
    lowOption.value = "low";
    lowOption.textContent = "Low";

    formTaskPriority.appendChild(lowOption); 
    
    const noneOption = document.createElement("option");
    noneOption.value = "none";
    noneOption.textContent = "None";

    formTaskPriority.appendChild(noneOption);

    
        
    taskPriorityLabel.appendChild(formTaskPriority);

    taskPrioritySect.appendChild(taskPriorityLabel);

    formAddTask.appendChild(taskPrioritySect);



    //button sects

    const addTaskBtnSect = document.createElement("div");
    addTaskBtnSect.setAttribute("id", "addtskBtn-sect");

    const addTaskNameBtn = document.createElement("button")
    addTaskNameBtn.type = "submit"; // Important: type submit so form submit event fires
    addTaskNameBtn.id = "submit-tsk-name";
    addTaskNameBtn.textContent = "Add Task";

    addTaskBtnSect.appendChild(addTaskNameBtn);


    const cancelAddTaskNameBtn = document.createElement("button");
    cancelAddTaskNameBtn.type = "button"; // prevent form submit
    cancelAddTaskNameBtn.id = "cancel-addtsk-name";
    cancelAddTaskNameBtn.textContent = "Cancel";

    addTaskBtnSect.appendChild(cancelAddTaskNameBtn);

    formAddTask.appendChild(addTaskBtnSect);

addTaskDialog.appendChild(formAddTask);


taskSection.appendChild(addTaskDialog);

console.log(taskSection);

addTaskDialog.showModal();

// start form listener

formAddTask.addEventListener('submit', (e) => {

    console.log("Form submitted!");

    e.preventDefault(); // We don't want to submit this fake form
   
    const formData = new FormData(formAddTask);
        //listTitle.textContent = formData.get("add-list-title");
/*
        const formatDueDate = () => {
        
        const { format } = require("date-fns");

   
      const dueDate = format(new Date(formData.get("add-tsk-date")), "MMM dd ''yy");

      console.log(dueDate);

      return { dueDate };

        }
        */

 //const taskSection = document.querySelector(".tasksect");
 /*
 document.querySelector(".tasksect");

 //const taskSection = document.createElement("div");
 //taskSection.classList.add("tasksect");
 
 const cardDiv = document.createElement("div");
 cardDiv.classList.add("card");
 
 const editTaskDiv = document.createElement("div");
 editTaskDiv.classList.add("editdivbtn");
 
 const editTaskBtn = document.createElement("button");
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
 taskDisplay.classList.add("displaytask");
 
 const checkoffDiv = document.createElement("div");
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
  taskTxtDiv.classList.add("tsktxtdiv");
 
 
 //const dueDateformatted = formatDueDate();

 //const urgentLabel = formData.get("urgent");

 //const taskTitle = formData.get("add-tsk-title");
 
 const taskTxt = document.createElement("p");
 taskTxt.classList.add("tskTxt");
 //taskTxt.textContent = `${dueDateformatted.dueDate} ${taskTitle} ${urgentLabel}`;
 taskTxt.textContent = "";
 
 
 taskTxtDiv.appendChild(taskTxt);
 
 
 
 
 taskDisplay.appendChild(taskTxtDiv);
 
 cardDiv.appendChild(taskDisplay);
 
 //taskSection.appendChild(cardDiv);

 taskSection.appendChild(cardDiv);

 const addNewTaskDiv = document.querySelector(".newtaskdiv");
 
 if (listSection) {
 //if (taskSect) {
 listSection.insertBefore(taskSection, addNewTaskDiv);
 //taskSect.insertBefore(cardDiv, addNewTaskDiv);
 }

 */

 const { format } = require("date-fns");

 const name = formData.get("add-tsk-title");
 const details = formData.get("add-tsk-details");
 const date = formData.get("add-tsk-date");

 const dueDate = format(new Date(date), "MMM dd ''yy");

 console.log(dueDate);
 const priority = formData.get("add-tsk-priority");

 // Add to todo array
 addTask(name, details, dueDate, priority);

renderTasks(); // is duplicating
 formAddTask.reset();
        
    formAddTask.remove();
    addTaskDialog.close(); // Remove form after submit
    addTaskDialog.remove();
 


});


cancelAddTaskNameBtn.addEventListener('click', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    formAddTask.remove();
    addTaskDialog.close(); // Remove form after click
    addTaskDialog.remove();
  });

  

}); // btton listener

}); // button loop end

return { addTask };

}

function renderTasks() {
    
    const listSection = document.querySelector(".listsect");
    const addNewTaskDiv = listSection.querySelector(".newtaskdiv");
    
    const taskSection = listSection.querySelector(".tasksect");
console.log(mytoDO);

//const addTaskLoad = addTaskPopUp();
          // const t = addTaskLoad.addTask();
           
           

    for (let i = 1; i < mytoDO.length; i++) {
        //for (let j = 0; j < mytoDO.length; j++) {

/*        console.log(mytoDO[i]);
console.log(mytoDO[i].dueDate); //undefined
console.log(mytoDO[i].name); //undefined
console.log(mytoDO[i].priority); //undefined
*/
           

  // mytoDO.forEach((task) => {
       
    //for (let i = 1; i < mytoDO.length; i++) {
      // tasks section


//const taskSection = document.createElement("div");
//taskSection.setAttribute("id", "task-sect");

//taskSection.classList.add("tasksect");

const cardDiv = document.createElement("div");
cardDiv.classList.add("card");

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



//const { urgentLabel } = urgent();

const taskTxt = document.createElement("p");
//taskTxt.setAttribute("id", "task-text");
taskTxt.classList.add("tskTxt");
//taskTxt.textContent = `${formattodaydate.todayDate} Clean Room`;
//taskTxt.textContent = `${mytoDO[0].dueDate} ${mytoDO[0].name} ${mytoDO[0].priority}`;
taskTxt.textContent = `${mytoDO[i].dueDate} ${mytoDO[i].name} ${mytoDO[i].priority}`;

//taskTxt.textContent = `${task.dueDate} ${task.name} ${task.priority}`;

//taskTxt.appendChild(urgentLabel);

taskTxtDiv.appendChild(taskTxt);


taskDisplay.appendChild(taskTxtDiv);

cardDiv.appendChild(taskDisplay);

taskSection.appendChild(cardDiv);

listSection.insertBefore(taskSection, addNewTaskDiv);
   
   // } // new loop
  //  }); // original loop
//}// end of second loop

} // end of loop


  
    // Add delete functionality
    document.querySelectorAll(".deletetskbtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const index = mytoDO.findIndex((task) => task.id === id);
  if (index !== -1) {
    mytoDO.splice(index, 1);
  }
      });
    });
  }


export const createHomePage = () => {
    
    sidebarLoad();
    headerLoad();
    todoSectLoad();
    
    
}

//createHomePage();

export const loadDom = document.addEventListener("DOMContentLoaded", () => {
    createHomePage();
    expandTaskDisplay();
    //completeTask();
    addCategPopUp();
    //addListPopUp();
    addTaskPopUp();

    
    
  });

 export const expandTaskDisplay = () => {

    const editTaskBtns = document.querySelectorAll(".edittask");
    
    //console.log(editTaskBtn); // Will log null if it's not found

    editTaskBtns.forEach(editTaskBtn => {

    editTaskBtn.addEventListener("click", (e) => {
       // console.log(e);

       // const taskDisplay = document.querySelector("#taskdisplay");

        //const taskTxtDiv = document.querySelector("#tsk-txt-div");

       // const taskDetailsDialog = document.createElement("dialog");
       // taskDetailsDialog.setAttribute("id", "detailsdialog-task");

       const cardDiv = document.querySelector(".card");
      
       const existingExpandTasks = cardDiv.querySelector("#expand-togglediv"); // checks if it exists
       //const existingTaskEditDiv = cardDiv.querySelector("#task-edit-div");
// the following does a toggle
       if (existingExpandTasks) {
        
        existingExpandTasks.remove();
        //existingTaskEditDiv.remove();
       } else {


        const expandTasks = document.createElement("div");
        expandTasks.setAttribute("id", "expand-togglediv");
        expandTasks.classList.add("expand-toggle");

        const taskDetails = document.createElement("div");
        taskDetails.setAttribute("id", "task-details");
        taskDetails.classList.add("tskdetailsdiv");
        taskDetails.textContent = "Must clean all of room before June 1."

        expandTasks.appendChild(taskDetails);

        //cardDiv.appendChild(taskDetails);

        const taskEditDiv = document.createElement("div");
        taskEditDiv.setAttribute("id", "task-edit-div");
        taskEditDiv.classList.add("tskeditdiv");

        // edit button

        const editDisplayedTaskBtn = document.createElement("button");
editDisplayedTaskBtn.setAttribute("id", "edit-displayed-task");
editDisplayedTaskBtn.classList.add("editdisplayedtskbtn");

const editDisplayedTaskSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
editDisplayedTaskSVG.classList.add("editdisplayedtsk");
editDisplayedTaskSVG.setAttribute('viewBox', '0 0 24 24');
editDisplayedTaskSVG.setAttribute("height", "20px");
editDisplayedTaskSVG.setAttribute("width", "20px");

const editDisplayedTaskSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
editDisplayedTaskSVGPath.setAttribute(
"d", "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z");

editDisplayedTaskSVG.appendChild(editDisplayedTaskSVGPath);

editDisplayedTaskBtn.appendChild(editDisplayedTaskSVG);

taskEditDiv.appendChild(editDisplayedTaskBtn);

expandTasks.appendChild(taskEditDiv);

        //delete task button

        const deleteTaskBtn = document.createElement("button");
        deleteTaskBtn.setAttribute("id", "delete-task");
        deleteTaskBtn.classList.add("deletetskbtn");

const deleteTaskSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
deleteTaskSVG.classList.add("editdisplayedtsk");
deleteTaskSVG.setAttribute('viewBox', '0 0 24 24');
deleteTaskSVG.setAttribute("height", "20px");
deleteTaskSVG.setAttribute("width", "20px");

const deleteTaskSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
deleteTaskSVGPath.setAttribute(
"d", "M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z");

deleteTaskSVG.appendChild(deleteTaskSVGPath);

deleteTaskBtn.appendChild(deleteTaskSVG);

taskEditDiv.appendChild(deleteTaskBtn);

expandTasks.appendChild(taskEditDiv);

cardDiv.appendChild(expandTasks);


// start of button edit listener
const editDisplayedTaskBtns = document.querySelectorAll(".editdisplayedtskbtn");

editDisplayedTaskBtns.forEach(displayedTaskBtn => {

displayedTaskBtn.addEventListener("click", (e) => {

    console.log(e.target);

    const taskTxt = document.querySelector(".tskTxt");
    

    const originalTitle = taskTxt.textContent;
const originalDetails = taskDetails.textContent;

// Clear current content
taskTxt.textContent = "";
taskDetails.textContent = "";

//create form

    const formTaskEdit = document.createElement("form");
    formTaskEdit.setAttribute("name", "formedit");
    formTaskEdit.classList.add("formedit");
    
    const formTaskTitleEdit = document.createElement("input");
    formTaskTitleEdit.type = "text";
    formTaskTitleEdit.name = "edit-task-title";
    formTaskTitleEdit.id = "edit-task-title";
    //formTaskTitleEdit.value = "";

    formTaskEdit.appendChild(formTaskTitleEdit);

    const formTaskDetailsEdit = document.createElement("input");
    formTaskDetailsEdit.type = "text";
    formTaskDetailsEdit.name = "edit-task-details";
    formTaskDetailsEdit.id = "edit-task-details";
   // formTaskDetailsEdit.value = ""; // Prefill current details

    formTaskEdit.appendChild(formTaskDetailsEdit);

    const editTaskBtnSect = document.createElement("div");
    editTaskBtnSect.setAttribute("id", "taskeditBtn-sect");

    const formTaskEditSubmitBtn = document.createElement("button");
    formTaskEditSubmitBtn.type = "submit"; // Important: type submit so form submit event fires
    formTaskEditSubmitBtn.id = "submit-edit-task";
    formTaskEditSubmitBtn.textContent = "Edit Task";

    editTaskBtnSect.appendChild(formTaskEditSubmitBtn);

    const formTaskEditCancelBtn = document.createElement("button");
    formTaskEditCancelBtn.type = "button"; // prevent form submit
    formTaskEditCancelBtn.id = "cancel-edit-task";
    formTaskEditCancelBtn.textContent = "Cancel Edit";

    editTaskBtnSect.appendChild(formTaskEditCancelBtn);

    formTaskEdit.appendChild(editTaskBtnSect);

    //expandTasks.appendChild(formTaskEdit);
    taskTxt.parentElement.appendChild(formTaskEdit);

    formTaskEdit.addEventListener('submit', (e) => {

        e.preventDefault(); // We don't want to submit this fake form
    
        const formData = new FormData(formTaskEdit);
      taskTxt.textContent = formData.get("edit-task-title");
      taskDetails.textContent = formData.get("edit-task-details");
      formTaskEdit.remove(); // Remove form after save

  });

  formTaskEditCancelBtn.addEventListener('click', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    taskTxt.textContent = originalTitle;
      taskDetails.textContent = originalDetails;
      formTaskEdit.remove(); // Remove form after click
  });
});

}); // button loop

deleteTaskBtn.addEventListener("click", () => {

   // const cardDiv = document.querySelector(".card");

    if (cardDiv) { 
    cardDiv.remove();
    }
});

       
}
        

    }); // button listener

}); // button loop



  }

  expandTaskDisplay();

/*
  const editTask = () => {


const editDisplayedTaskBtn = document.querySelector("#edit-displayed-task");

editDisplayedTaskBtn.addEventListener("click", () => {
    
   // const taskDisplay = document.querySelector("#taskdisplay");

    const taskTxt = document.querySelector("#task-text");

    const taskDetails = document.querySelector("#task-details");
    
//const editTaskDialog = document.createElement("dialog");
//editTaskDialog.setAttribute("id", "edittask-dialog");

// Save original content in case of cancel
const originalTitle = taskTxt.textContent;
const originalDetails = taskDetails.textContent;

// Clear current content
taskTxt.textContent = "";
taskDetails.textContent = "";

//create form

    const formTaskEdit = document.createElement("form");
    formTaskEdit.setAttribute("name", "formedit");
    formTaskEdit.classList.add("formedit");
    
    const formTaskTitleEdit = document.createElement("input");
    formTaskTitleEdit.type = "text";
    formTaskTitleEdit.name = "edit-task-title";
    formTaskTitleEdit.id = "edit-task-title";
    formTaskTitleEdit.value = originalTitle;

    formTaskEdit.appendChild(formTaskTitleEdit);

    const formTaskDetailsEdit = document.createElement("input");
    formTaskDetailsEdit.type = "text";
    formTaskDetailsEdit.name = "edit-task-details";
    formTaskDetailsEdit.id = "edit-task-details";
    formTaskDetailsEdit.value = originalDetails; // Prefill current details

    formTaskEdit.appendChild(formTaskDetailsEdit);

    const formTaskEditSubmitBtn = document.createElement("button");
    formTaskEditSubmitBtn.type = "submit"; // Important: type submit so form submit event fires
    formTaskEditSubmitBtn.id = "submit-edit-task";
    formTaskEditSubmitBtn.textContent = "Edit Task";

    formTaskEdit.appendChild(formTaskEditSubmitBtn);

    const formTaskEditCancelBtn = document.createElement("button");
    formTaskEditCancelBtn.type = "button"; // prevent form submit
    formTaskEditCancelBtn.id = "cancel-edit-task";
    formTaskEditCancelBtn.textContent = "Cancel Edit";

    formTaskEdit.appendChild(formTaskEditCancelBtn);

    //editTaskDialog.appendChild(formTaskEdit);

   // taskDisplay.appendChild(formTaskEdit);
   
   taskDetails.appendChild(formTaskEdit);

    formTaskEdit.addEventListener('submit', (e) => {

        e.preventDefault(); // We don't want to submit this fake form
    
        const formData = new FormData(formTaskEdit);
      taskTxt.textContent = formData.get("edit-task-title");
      taskDetails.textContent = formData.get("edit-task-details");


  });

  formTaskEdit.addEventListener('click', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    taskTxt.textContent = originalTitle;
      taskDetails.textContent = originalDetails;

  });


});


  }

  editTask();

  */

  /*
  const deleteTask = () => {

    const deleteTaskBtn = document.querySelector("#delete-task");

    deleteTaskBtn.addEventListener("click", () => {

        const cardDiv = document.querySelector(".card");

        if (cardDiv) { 
        cardDiv.remove();
    }

    });

  }

  deleteTask();

  */