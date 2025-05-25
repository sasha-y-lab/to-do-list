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


/*
import { urgent } from "./DOMstuff.js";
import { moderate } from "./DOMstuff.js";
import { low } from "./DOMstuff.js";

import { createHomePage } from "./DOMstuff.js";

import { loadDom } from "./DOMstuff.js";

import { todoSectLoad } from "./DOMstuff.js";

import { categoryLoad } from "./DOMstuff.js";

import { expandTaskDisplay } from "./DOMstuff.js";

import { taskLoad } from "./DOMstuff.js";


createHomePage;
loadDom;

const todoSection = todoSectLoad();

const todoSect = todoSection.todoSect;

console.log(todoSect);

const mainCategorySect = categoryLoad();

const categoryMainSect = mainCategorySect.categMainSection;

const exxpandTaskDisplaySect = expandTaskDisplay();

const deleteTaskBtn = exxpandTaskDisplaySect.deleteTaskBtn;

const taskSection = taskLoad();

const taskText = taskSection.taskTxt;

*/

/*
class TODO {
    constructor(todoElement) {
        this.todoElement = todoElement;
    
    }

}
    */

/*
class taskTodoElement {
    constructor(name, details, dueDate, priority) {
        this.task = new task(name, details, dueDate, priority);
    }


}
    */

export class Task {
    constructor(name, details, dueDate, priority, listId) {
        this.name = name;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.type = "task";
        //this.isPriority = false;
        this.listId = listId;
        this.id = crypto.randomUUID();
        this.completed = false;
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

// Create category first
const category1 = new Category("Category 1");

// Create a list that belongs to that category
const list1 = new List("Daily Tasks", category1.id);

// Create a task that belongs to that list
const task1 = new Task("Clean my room", "Vacuum & throw out garbage", "May 31, '25", "Urgent", list1.id);

// Now your main array:
let mytoDOs = [category1, list1, task1];

let newmytoDos = [];

//mytoDOs = [...mytoDOs, ...newmytoDos];

mytoDOs = mytoDOs.concat(newmytoDos);

export function addTask(name, details, dueDate, priority, listId) {
    const todotask = new Task(name, details, dueDate, priority, listId);


mytoDOs.splice(1, 0, todotask);
return todotask;

  }

  export function addListName(name, categoryId) {
    const todolist = new List(name, categoryId);

mytoDOs.splice(1, 0, todolist);
return todolist;
  }

  export function addCategName(name) {
    const todocateg = new Category(name);

mytoDOs.splice(1, 0, todocateg);

return todocateg;
  }
  
  export { mytoDOs, newmytoDos }; 
/*
export const displayCategory = () => {

    todoSect.replaceChildren();

for (let i = 0; i < mytoDO.length; i++) {

    const categPlaceholder = categoryMainSect;
        categPlaceholder.classList.add(".categ-placeholder");
        

        taskText.textContent = mytoDO.dueDate + mytoDO.name + mytoDO.priority;

    let taskID = mytoDO[i].id;
         
         console.log(taskID);

         categPlaceholder.setAttribute("data-id", `${taskID}`);

         let taskIndex2Del = categPlaceholder.dataset.id;


         console.log(taskIndex2Del);


         console.log(mytoDO);

         deleteTaskBtn.onclick = function () { 

         const index = [...Array.from(categPlaceholder.parentElement.children)].indexOf(categPlaceholder);

         console.log(index);

         if (taskID === taskIndex2Del) {

            mytoDO.splice(index, 1);

}

         } // button listener

}

}
displayCategory();
*/

