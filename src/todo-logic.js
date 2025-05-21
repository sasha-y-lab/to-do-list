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

class Task {
    constructor(name, details, dueDate, priority) {
        this.name = name;
        this.details = details;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isPriority = false;
        this.id = crypto.randomUUID();
    }
}

class List {
    constructor(listname) {
        this.listname = listname;
        this.id = crypto.randomUUID();
    }
}

class Category {
    constructor(categname) {
        this.categname = categname;
        this.id = crypto.randomUUID();
    }
}

//const todotask = new TODO(new taskTodoElement(name, details, dueDate, priority));




let mytoDOs = [{categname: "Category 1", listname: "Daily Tasks", name: "Clean my room", details: "Vaccum & throw out garbage", dueDate: "May 31, '25", priority: "Urgent", id: `${crypto.randomUUID()}`}];

let newmytoDos = [{categname: "Category 1", listname: "Daily Tasks", name: "Make dinner", details: "Check pinterest for recipes", dueDate: "June 25, '25", priority: "Moderate", id: `${crypto.randomUUID()}`}];

//mytoDOs = [...mytoDOs, ...newmytoDos];

mytoDOs = mytoDOs.concat(newmytoDos);

export function addTask(name, details, dueDate, priority) {
    const todotask = new Task(name, details, dueDate, priority);

//const taskObj = {task: todotask, id: `${crypto.randomUUID()}`};
//mytoDO.push(taskObj);
newmytoDos.splice(1, 0, todotask);

  }

  export function addListName(listname) {
    const todolist = new List(listname);

newmytoDos.splice(1, 0, todolist);
  }

  export function addCategName(categname) {
    const todocateg = new Category(categname);

newmytoDos.splice(1, 0, todocateg);
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

