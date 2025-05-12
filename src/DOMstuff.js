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




/*
export const sidebarLoad = () => {

    

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

    // today tasks

    const todayTasks = document.createElement("div");
    todayTasks.setAttribute("id", "today-tasks");

    const todayTasksHeader = document.createElement("div");
    todayTasksHeader.setAttribute("id", "today-tsk-header");

    const todayTasksHeading = document.createElement("h3");
    todayTasksHeading.textContent = "Today";

    todayTasksHeader.appendChild(todayTasksHeading);

    const todayTasksNotify = document.createElement("div");
    todayTasksNotify.setAttribute("id", "notify-today");
    todayTasksNotify.classList.add("notify");
    todayTasksNotify.textContent = "";

    todayTasksHeader.appendChild(todayTasksNotify);

    todayTasks.appendChild(todayTasksHeader);

    const todayTaskDisplay = document.createElement("div");
    todayTaskDisplay.setAttribute("id", "today-tsk-display");
    todayTaskDisplay.classList.add("side-tsk-display");
    todayTaskDisplay.textContent = "";

    todayTasks.appendChild(todayTaskDisplay);

    sidebar.appendChild(todayTasks);

        // upcoming tasks

    const upcomingTasks = document.createElement("div");
    upcomingTasks.setAttribute("id", "coming-tasks");

    const upcomingTasksHeader = document.createElement("div");
    upcomingTasksHeader.setAttribute("id", "coming-tsk-header");

    const upcomingTasksHeading = document.createElement("h3");
    upcomingTasksHeading.textContent = "Upcoming";

    upcomingTasksHeader.appendChild(upcomingTasksHeading);

    const upcomingTasksNotify = document.createElement("div");
    upcomingTasksNotify.setAttribute("id", "notify-coming");
    upcomingTasksNotify.classList.add("notify");
    upcomingTasksNotify.textContent = "";

    upcomingTasksHeader.appendChild(upcomingTasksNotify);

    upcomingTasks.appendChild(upcomingTasksHeader);

    const upcomingTaskDisplay = document.createElement("div");
    upcomingTaskDisplay.setAttribute("id", "coming-tsk-display");
    upcomingTaskDisplay.classList.add("side-tsk-display");
    upcomingTaskDisplay.textContent = "";

    upcomingTasks.appendChild(upcomingTaskDisplay);

    sidebar.appendChild(upcomingTasks);

    // cetgories/projects section

    const categorySect = document.createElement("div");
    categorySect.setAttribute("id", "category-sect");

    const categorySectHeading = document.createElement("h3");
    categorySectHeading.textContent = "Categories";

    categorySect.appendChild(categorySectHeading);

    const categorySectDisplay = document.createElement("div");
    categorySectDisplay.setAttribute("id", "category-sect-display");
    categorySectDisplay.classList.add("side-category-display");
    categorySectDisplay.textContent = "";

    categorySect.appendChild(categorySectDisplay);

    sidebar.appendChild(categorySect);

    container.appendChild(sidebar);

    // end of side bar

    notifCircleLoad();

    return { todayTaskDisplay, upcomingTaskDisplay, categorySectDisplay }

}
    */

/*
export const notifCircleLoad = () => {

    const notifDiv = document.querySelectorAll(".notify");


// create circle svg element

const notifCircle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
notifCircle.classList.add("notif-circle");
notifCircle.setAttribute('viewBox', '0 0 24 24');
notifCircle.setAttribute("height", "20px");
notifCircle.setAttribute("width", "20px");

const notifCirclePath = document.createElementNS("http://www.w3.org/2000/svg", "path");
notifCirclePath.setAttribute(
        "d", "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z");

notifCirclePath.textContent = "12";

notifCircle.appendChild(notifCirclePath);

notifDiv.appendChild(notifCircle);


    } 
    
    */

/*
export const headerLoad = () => {

    const container = document.querySelector("#container");

    const mainContent = document.createElement("div");
    mainContent.setAttribute("id", "main-content");

    const header = document.createElement("div");
    
    const greetingDiv = document.createElement("div");
    greetingDiv.setAttribute("id", "greeting");

    const greetingTxt = document.createElement("h2");
    greetingTxt.textContent = `Hi ${prompt("Please type your first name")}`;

    greetingDiv.appendChild(greetingTxt);

    header.appendChild(greetingDiv);

    const addCategoryDiv = document.createElement("div");
    addCategoryDiv.setAttribute("id", "add-project");

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

    container.appendChild(mainContent);

}
*/

/*

export const todoSectLoad = () => {
    // start of to do section

    

    //const container = document.querySelector("#container");

    const mainContent = document.querySelector("#main-content");

    const todoSect = document.createElement("div");
    todoSect.setAttribute("id", "todo-sect");

    
   // todoSect.appendChild(categMainSection);

    mainContent.appendChild(todoSect);

    // run default category here

    //categoryLoad();
   // listLoad();
   // taskLoad();

}
   */
/*
export const categoryLoad = () => {

    const todoSect = document.querySelector("#todo-sect");
    // category sect
    const categMainSection = document.createElement("div");
    categMainSection.setAttribute("id", "category-sect-main");

    const categHeadingDiv = document.createElement("div");
    categHeadingDiv.setAttribute("id", "category-heading-sect");

    const categHeading = document.createElement("h2");
    categHeading.classList.add("category-title");
    categHeading.textContent = "Category 1";

    categHeadingDiv.appendChild(categHeading);

    categMainSection.appendChild(categHeadingDiv);

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

    categMainSection.appendChild(addListBtnDiv);

    todoSect.appendChild(categMainSection);

}
    */

/*
export const listLoad = () => {

    //const formattodaydate = formatDate();

    const categMainSection = document.querySelector("#category-sect-main");
  
    
    // list section

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

    listHeading.appendChild(listTitleDiv);


   // listHeading.appendChild(addListBtnDiv);

    listSection.appendChild(listHeading);

categMainSection.appendChild(listSection);


}
*/

/*
export const taskLoad = () => {

    const formattodaydate = formatDate();

    const categMainSection = document.querySelector("#category-sect-main");

    // task section

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

const taskTxt = document.createElement("p");
taskTxt.setAttribute("id", "task-text");
taskTxt.textContent = `${formattodaydate.todayDate} Clean Room ${urgent().urgentLabel}`;

taskTxtDiv.appendChild(taskTxt);

taskDisplay.appendChild(taskTxtDiv);

cardDiv.appendChild(taskDisplay);

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

cardDiv.appendChild(addNewTaskDiv);

taskSection.appendChild(cardDiv);

//listSection.appendChild(taskSection);

categMainSection.appendChild(taskSection);

//todoSect.appendChild(categMainSection);

//return { categHeading, listTitle, addListBtn, checkOffTaskSVG, taskTxt, newTaskBtn };

    }

*/


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


        



export const addCategAndListPopUp = () => {
// form goes in here

}


export const addTaskPopUp = () => {
    // form goes in here
    
}


export const homeLoad = () => {


    const formattodaydate = formatDate();


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

    // today tasks

    const todayTasks = document.createElement("div");
    todayTasks.setAttribute("id", "today-tasks");

    const todayTasksHeader = document.createElement("div");
    todayTasksHeader.setAttribute("id", "today-tsk-header");

    const todayTasksHeading = document.createElement("h3");
    todayTasksHeading.textContent = "Today";

    todayTasksHeader.appendChild(todayTasksHeading);

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

    todayTasks.appendChild(todayTasksHeader);

    const todayTaskDisplay = document.createElement("div");
    todayTaskDisplay.setAttribute("id", "today-tsk-display");
    todayTaskDisplay.classList.add("side-tsk-display");
    todayTaskDisplay.textContent = "";

    todayTasks.appendChild(todayTaskDisplay);

    sidebar.appendChild(todayTasks);

        // upcoming tasks

    const upcomingTasks = document.createElement("div");
    upcomingTasks.setAttribute("id", "coming-tasks");

    const upcomingTasksHeader = document.createElement("div");
    upcomingTasksHeader.setAttribute("id", "coming-tsk-header");

    const upcomingTasksHeading = document.createElement("h3");
    upcomingTasksHeading.textContent = "Upcoming";

    upcomingTasksHeader.appendChild(upcomingTasksHeading);

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

    upcomingTasks.appendChild(upcomingTasksHeader);

    const upcomingTaskDisplay = document.createElement("div");
    upcomingTaskDisplay.setAttribute("id", "coming-tsk-display");
    upcomingTaskDisplay.classList.add("side-tsk-display");
    upcomingTaskDisplay.textContent = "";

    upcomingTasks.appendChild(upcomingTaskDisplay);

    sidebar.appendChild(upcomingTasks);

    // cetgories/projects section

    const categorySect = document.createElement("div");
    categorySect.setAttribute("id", "category-sect");

    const categorySectHeading = document.createElement("h3");
    categorySectHeading.textContent = "Categories";

    categorySect.appendChild(categorySectHeading);

    const categorySectDisplay = document.createElement("div");
    categorySectDisplay.setAttribute("id", "category-sect-display");
    categorySectDisplay.classList.add("side-category-display");
    categorySectDisplay.textContent = "";

    categorySect.appendChild(categorySectDisplay);

    sidebar.appendChild(categorySect);

    container.appendChild(sidebar);

    // end of side bar

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

    

    // end of header

    // start of to do section

    const todoSect = document.createElement("div");
    todoSect.setAttribute("id", "todo-sect");

    // start of category section

    const categMainSection = document.createElement("div");
    categMainSection.setAttribute("id", "category-sect-main");

    const categHeadingDiv = document.createElement("div");
    categHeadingDiv.setAttribute("id", "category-heading-sect");

    const categHeading = document.createElement("h2");
    categHeading.classList.add("category-title");
    categHeading.textContent = "Category 1";

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

    listHeading.appendChild(listTitleDiv);


   // listHeading.appendChild(addListBtnDiv);

    listSection.appendChild(listHeading);


    categMainSection.appendChild(listSection);
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



//const urgentLabel = urgent();

const taskTxt = document.createElement("p");
taskTxt.setAttribute("id", "task-text");
taskTxt.textContent = `${formattodaydate.todayDate} Clean Room`;

taskTxtDiv.appendChild(taskTxt);

/*
const statusTxt = document.createElement("div");
statusTxt.setAttribute("id", "status-txt");
statusTxt.textContent = urgentLabel.urgentLabelTxt.textContent;


taskTxtDiv.appendChild(statusTxt);
*/

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



//listSection.appendChild(taskSection);

categMainSection.appendChild(taskSection);


    todoSect.appendChild(categMainSection);

   

    mainContent.appendChild(todoSect);

    container.appendChild(mainContent);

    
}

//homeLoad();


export const createHomePage = () => {
    
    homeLoad();
    urgent();
    
}

createHomePage();