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



import { urgent } from "./DOMstuff.js";
import { moderate } from "./DOMstuff.js";
import { low } from "./DOMstuff.js";

import { createHomePage } from "./DOMstuff.js";

import { loadDom } from "./DOMstuff.js";

