// checkmark complete svg <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
// edit svg <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pencil-outline</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>
// delete svg <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>





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




const headerLoad = () => {

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




const todoSectLoad = () => {
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
    

   
}


const categoryLoad = () => {

    const todoSect = document.querySelector("#todo-sect");
    // category sect

     // start of category section

     const categMainSection = document.createElement("div");
     categMainSection.setAttribute("id", "category-sect-main");
 
     const categHeadingDiv = document.createElement("div");
     categHeadingDiv.setAttribute("id", "category-heading-sect");
 
     const categHeading = document.createElement("h2");
     categHeading.classList.add("category-title");
     categHeading.textContent = "Category 1";


     // start of edit or delete

     const categoryEditDiv = document.createElement("div");
     categoryEditDiv.setAttribute("id", "cat-edit-div");

        // edit button

        const editCategoryBtn = document.createElement("button");
        editCategoryBtn.setAttribute("id", "edit-category");

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
 
     
 
     // add list button
 
     const addListBtnDiv = document.createElement("div");
     addListBtnDiv.setAttribute("id", "listbtn-div");
 
     const addListBtn = document.createElement("button");
     addListBtn.setAttribute("id", "addlist");
 
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
 
     categHeadingDiv.appendChild(addListBtnDiv);
 
     categMainSection.appendChild(categHeadingDiv);
     
     if (todoSect) {
        todoSect.appendChild(categMainSection);
        }

     listLoad();
    

  
    

}
    


const listLoad = () => {

    const categMainSection = document.querySelector("#category-sect-main");

    // start of list section

const listSection = document.createElement("div");
listSection.setAttribute("id", "list-sect");

const listHeading = document.createElement("div");
listHeading.setAttribute("id", "list-heading");

const listTitleDiv = document.createElement("div");
listTitleDiv.setAttribute("id", "list-title");

const listTitle = document.createElement("h3");
listTitle.classList.add("list-title-txt");
listTitle.textContent = "Daily Task";


listTitleDiv.appendChild(listTitle);

// start of edit or delete

const listEditDiv = document.createElement("div");
listEditDiv.setAttribute("id", "list-edit-div");

   // edit button

   const editListBtn = document.createElement("button");
   editListBtn.setAttribute("id", "edit-list");

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



const taskLoad = () => {

    const formattodaydate = formatDate();

    const listSection = document.querySelector("#list-sect");
    // tasks section


const taskSection = document.createElement("div");
taskSection.setAttribute("id", "task-sect");

const cardDiv = document.createElement("div");
cardDiv.classList.add("card");

const editTaskDiv = document.createElement("div");
editTaskDiv.setAttribute("id", "editdivbtn");

const editTaskBtn = document.createElement("button");
editTaskBtn.setAttribute("id", "edit-task");

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

const checkoffDiv = document.createElement("div");
checkoffDiv.setAttribute("id", "checkoff-div");

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



const { urgentLabel } = urgent();

const taskTxt = document.createElement("p");
taskTxt.setAttribute("id", "task-text");
taskTxt.textContent = `${formattodaydate.todayDate} Clean Room`;

taskTxt.appendChild(urgentLabel);

taskTxtDiv.appendChild(taskTxt);




taskDisplay.appendChild(taskTxtDiv);

cardDiv.appendChild(taskDisplay);

taskSection.appendChild(cardDiv);

// new task btn section

const addNewTaskDiv = document.createElement("div");
addNewTaskDiv.setAttribute("id", "new-task");

const newTaskBtn = document.createElement("button");
newTaskBtn.setAttribute("id", "newtask");

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

taskSection.appendChild(addNewTaskDiv);

if (listSection) {

listSection.appendChild(taskSection);
}

    
    }


    const completeTask = () => {

       //const taskDisplay = document.querySelector("#taskdisplay");

       const editTaskDiv = document.querySelector("#editdivbtn");

       const taskTxt = document.querySelector("#task-text");

       const checkoffDiv = document.querySelector("#checkoff-div");

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



if (taskTxt) {
    taskTxt.textContent = "";
    taskTxt.appendChild(span);
    editTaskDiv.remove();
    
}

       });

    }
    //completeTask();

const refreshTODO = () => {

const todoSect = document.querySelector("#todo-sect");

todoSect.replaceChildren();

}


const refreshTasks = () => {
    const taskSection = document.querySelector("#task-sect");
    taskSection.replaceChildren();

}


export const urgent = () => {

const taskTxtDiv = document.querySelector("#tsk-txt-div");
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

    const taskTxtDiv = document.querySelector("#tsk-txt-div");
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

        const taskTxtDiv = document.querySelector("#tsk-txt-div");
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
     categMainSection.setAttribute("id", "category-sect-main");
 
     const categHeadingDiv = document.createElement("div");
     categHeadingDiv.setAttribute("id", "category-heading-sect");
 
     const categHeading = document.createElement("h2");
     categHeading.classList.add("category-title");
     //categHeading.textContent = "Category 1";

     const formData = new FormData(formAddCateg);
        categHeading.textContent = formData.get("add-categ-title");


     // start of edit or delete

     const categoryEditDiv = document.createElement("div");
     categoryEditDiv.setAttribute("id", "cat-edit-div");

        // edit button

        const editCategoryBtn = document.createElement("button");
        editCategoryBtn.setAttribute("id", "edit-category");

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
 
     
 
     // add list button
 
     const addListBtnDiv = document.createElement("div");
     addListBtnDiv.setAttribute("id", "listbtn-div");
 
     const addListBtn = document.createElement("button");
     addListBtn.setAttribute("id", "addlist");
 
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
 
     categHeadingDiv.appendChild(addListBtnDiv);
 
     categMainSection.appendChild(categHeadingDiv);


     if (todoSect) {
        todoSect.appendChild(categMainSection);
        }

        
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

/* // for reference
function validateForm() {
    const catTitle = formAddCateg.elements["add-categ-title"].value.trim();
  
    if (!catTitle) {
      alert("Field must be filled out");
      return false;
    }
  
    return true;
  }
  
*/

}

export const addListPopUp = () => {

    const addCategDialog = document.createElement("dialog");
    addCategDialog.setAttribute("id", "addlist");
    
    const formAddList = document.createElement("form");
    formAddList.setAttribute("name", "formaddlist");
    formAddList.classList.add("formaddlist");
    // add list name

    const listNameLabel = document.createElement("label");
    listNameLabel.setAttribute("for", "add-list-title");
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
}


export const addTaskPopUp = () => {
    // form goes in here
    
}



export const createHomePage = () => {
    
    sidebarLoad();
    headerLoad();
    //urgent();
    todoSectLoad();
    addCategPopUp();
    
}

//createHomePage();

export const loadDom = document.addEventListener("DOMContentLoaded", () => {
    createHomePage();
    expandTaskDisplay();
    completeTask();
    
    
  });

  const expandTaskDisplay = () => {

    const editTaskBtn = document.querySelector("#edit-task");
    
    //console.log(editTaskBtn); // Will log null if it's not found


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

        const taskDetails = document.createElement("div");
        taskDetails.setAttribute("id", "task-details");
        taskDetails.textContent = "Must clean all of room before June 1."

        expandTasks.appendChild(taskDetails);

        //cardDiv.appendChild(taskDetails);

        const taskEditDiv = document.createElement("div");
        taskEditDiv.setAttribute("id", "task-edit-div");

        // edit button

        const editDisplayedTaskBtn = document.createElement("button");
editDisplayedTaskBtn.setAttribute("id", "edit-displayed-task");

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
editDisplayedTaskBtn.addEventListener("click", () => {

    const taskTxt = document.querySelector("#task-text");
    

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

deleteTaskBtn.addEventListener("click", () => {

   // const cardDiv = document.querySelector(".card");

    if (cardDiv) { 
    cardDiv.remove();
    }
});

       
}
        

    });

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