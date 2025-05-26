// So my to do list app will have: a pop up card, when you click new task, that includes title,
//  description, due date, priority choice toggle (urgent red, moderate yellow, low light purple,
//  none gray. The card will have a add task button.

// When the add task button is clicked, it adds the card task details to the main page, default Daily 
// Tasks list, and default category Project 1.

//You can add new lists. You can add categories that have multiple lists.

//How the card task shows up on the page: 

//Under the Daily Task list title/div -

//empty checkmark | due date | task title | priority | … (edit)

//the edit version - expanded:

//task title 
//empty checkmark | description | due date | priority highlight 
//delete to do

//you are able to check and uncheck. You are able to edit task title, edit description, due date and priority toggle. And delete the task.

//Once checked, the task is marked complete and moves to a completed tasks section, and is striked out and grayed out. You can uncheck a completed to do: If unchecked, it goes back to it’s original section.

//Also ui: 
//will have a side bar that says:

//Hi User

//Projects – lists just titles of all categories/projects: clicking on this title lists all projects and their todos high level. Clicking on individual projects shows that individual project

//Today – all tasks with due dates today

//Upcoming – all tasks in the future by closest date to today




   const { format, isAfter, formatDistance } = require("date-fns");

export class Task {
    constructor(name, details, dueDate, priority, listId) {
        this.name = name;
        this.details = details;
        this.dueDate = String(format(new Date(dueDate),  "MMM dd ''yy"));
        this.priority = priority;
        this.type = "task";
        //this.isPriority = false;
        this.listId = listId;
        this.id = crypto.randomUUID();
        this.completed = false;
        this.isAfterToday = isAfter(new Date(this.dueDate), Date.now());
        this.distanceFromToday = formatDistance(format(Date.now(), "MMM dd ''yy"), format(new Date(this.dueDate), "MMM dd ''yy"))
    }
}

export class List {
    constructor(name, categoryId) {
        this.name = name;
        this.type = 'list';
        this.categoryId = categoryId;
        this.id = crypto.randomUUID();
    }
}

export class Category {
    constructor(name) {
        this.name = name;
        this.type = 'category';
        this.id = crypto.randomUUID();
        this.createdAt = Date.now();
    }
}

//const todotask = new TODO(new taskTodoElement(name, details, dueDate, priority));



/*
let mytoDOs = [ 
  new Category("Category 1"),
  new List("Daily Tasks"),
  new Task("Clean my room", "Vacuum & throw out garbage", "May 31, '25", "Urgent")
];
*/

const dueDate = (format(new Date(2025, 7, 1), "MMM dd ''yy"))

// Create category first
const category1 = new Category("Category 1");

// Create a list that belongs to that category
const list1 = new List("Daily Tasks", category1.id);

// Create a task that belongs to that list
const task1 = new Task("Clean my room", "Vacuum & throw out garbage", `${String(dueDate)}`, "Urgent", list1.id);

// Now your main array:
let mytoDOs = [category1, list1, task1];

let newmytoDos = [];

//mytoDOs = [...mytoDOs, ...newmytoDos];

mytoDOs = mytoDOs.concat(newmytoDos);



function saveDummyDataToLocalStorage() {
  // Filter each type
  const dummyTasks = mytoDOs.filter(item => item.type === 'task');
  const dummyLists = mytoDOs.filter(item => item.type === 'list');
  const dummyCategories = mytoDOs.filter(item => item.type === 'category');

  // Save separately to localStorage
  localStorage.setItem('allTasksJSON', JSON.stringify(dummyTasks));
  localStorage.setItem('allListsJSON', JSON.stringify(dummyLists));
  localStorage.setItem('allCategoriesJSON', JSON.stringify(dummyCategories));

  console.log('Dummy data saved to localStorage');
}


function resetLocalStorageWithDummy() {
  localStorage.clear();
  saveDummyDataToLocalStorage();
  //location.reload(); // reload page so app re-initializes from localStorage - this refreshed like crazy
}

//resetLocalStorageWithDummy();

export function addTask(name, details, dueDate, priority, listId) {
    const todotask = new Task(name, details, dueDate, priority, listId);


mytoDOs.push(todotask);
return todotask;

  }

  export function addListName(name, categoryId) {
    const todolist = new List(name, categoryId);

mytoDOs.push(todolist);
return todolist;
  }

  export function addCategName(name) {
    const todocateg = new Category(name);

mytoDOs.push(todocateg);

return todocateg;
  }
  
  export { mytoDOs, newmytoDos }; 

export const distanceOfDueDate = () => {

const tasks = mytoDOs.filter(item => item.type === 'task' && item.completed === false && item.distanceFromToday === "7 days" || item.distanceFromToday === "1 day");
console.log(tasks);

for (let i = 0; i < tasks.length; i++) {

alert(`Your task: "${tasks[i].name}", is ${tasks[i].distanceFromToday} away!`);

console.log(`Your task: "${tasks[i].name}", is ${tasks[i].distanceFromToday} away!`);

}

  }

export function populateLocalStorage() {

//Set up a function that saves the projects (and todos) to localStorage
//  every time a new project (or todo) is created


    // retreive all tasks & turn to string and save to local storage
const myTasks = mytoDOs.filter(item => item.type === 'task');

console.log(myTasks);

const tasksJSON = JSON.stringify(myTasks);

localStorage.setItem("allTasksJSON", tasksJSON);

// retreive all lists & turn to string and save to local storage

const myLists = mytoDOs.filter(item => item.type === 'list');

console.log(myLists);

const listsJSON = JSON.stringify(myLists);

localStorage.setItem("allListsJSON", listsJSON);

// retrieve all categories & turn to string and save to local storage

const myCategories = mytoDOs.filter(item => item.type === 'category');

console.log(myCategories);

const categoryJSON = JSON.stringify(myCategories);

localStorage.setItem("allCategoriesJSON", categoryJSON);





}


export function retrieveLocalStorageDatate() {

    // set up a function that looks for that data in localStorage when 
    // your app is first loaded.


    // Retrieve storage data:


 // Retrieve tasks
    let tasksText = localStorage.getItem("allTasksJSON");
    let myTasksObj = tasksText ? JSON.parse(tasksText) : [];

    // Reformat dueDate to human-readable string
    myTasksObj.forEach(task => {
        if (task.dueDate) {
            task.dueDate = format(new Date(task.dueDate), "MMM dd ''yy");
        }
    });

    // Retrieve lists
    let listsText = localStorage.getItem("allListsJSON");
    let myListsObj = listsText ? JSON.parse(listsText) : [];

    // Retrieve categories
    let categoriesText = localStorage.getItem("allCategoriesJSON");
    let myCategoriesObj = categoriesText ? JSON.parse(categoriesText) : [];

// ⬇️ Combine all into global mytoDOs so your app logic stays consistent
  if (typeof mytoDOs !== "undefined") {
    mytoDOs.length = 0; // Clear it first if needed
    mytoDOs.push(...myTasksObj, ...myListsObj, ...myCategoriesObj);
  }

  // If nothing exists in storage, use dummy
  if (!tasksText && !listsText && !categoriesText) {
    myTasksObj = mytoDOs.filter(item => item.type === "task");
    myListsObj = mytoDOs.filter(item => item.type === "list");
    myCategoriesObj = mytoDOs.filter(item => item.type === "category");
  }


    return { myTasksObj, myListsObj, myCategoriesObj };

}