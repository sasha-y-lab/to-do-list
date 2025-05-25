import { mytoDOs, addTask, addListName, addCategName, distanceOfDueDate, populateLocalStorage } from "./todo-logic.js";

import { createPriorityLabel, togglePriority, todoCategories, notifToday, notifUpcoming, renderTasks, categoryLoad, listLoad, clearUI } from "./DOMstuff.js";



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


                const formData = new FormData(formAddCateg);
    const name = formData.get("add-categ-title");
    

    // Add to todo array
                const category = addCategName(name);    
console.log("New category returned:", category);
             


populateLocalStorage(); // for local storage

// add clearing function here
//clearUI();

categoryLoad(mytoDOs);  // ✅ fresh render
//listLoad(mytoDOs);
//renderTasks(mytoDOs);

const categorySect = document.querySelector("#category-sect");

categorySect.replaceChildren();
//update category list on sidebar
todoCategories();



        
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
             categHeading.classList.add("category-title", "category");
             //categHeading.textContent = "Category 1";

                categHeading.textContent = name;

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

             const listSection = document.createElement("div");
//listSection.setAttribute("id", "list-sect");
listSection.classList.add("listsect");


categMainSection.appendChild(listSection);
         
            // categMainSection.appendChild(categHeadingDiv);
        
        
             if (todoSect) {
                todoSect.appendChild(categMainSection);
             }

             console.log(mytoDOs);
        
             // Now create your DOM using category.id and category.name
    categMainSection.dataset.categoryId = category.id;
    categHeading.dataset.categoryId = category.id;
    categHeading.textContent = category.name;
    listSection.dataset.categoryId = category.id;

    console.log("Set on Category Section:", category.id);
                
       
        
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



export function todosSectAddDeleteBtns() {


const todoSect = document.querySelector("#todo-sect");
    console.log(todoSect);

if (!todoSect) return;

    

todoSect.addEventListener('click', (e) => {



  // Check for category edit/delete click
  const clickedCategEditBtn = e.target.closest('.editcateg');
 const clickedCategDeleteBtn = e.target.closest('.deletecateg');

 // Check for addlist btn
 const clickedAddListBtn = e.target.closest('.addlist');

 // check for list edit/delete click

  const clickedListEditBtn = e.target.closest('.editlist');
const clickedListDeleteBtn = e.target.closest('.deletelist');


// check for add task btn

const clickedNewTaskBtn = e.target.closest('.newtaskbtn');

// check for expanded display button

const clickedEditTaskBtn = e.target.closest('.edittask');


// check for expanded display edit task details btn & delete entire task btn

const clickedEditDisplayedTasks = e.target.closest('.editdisplayedtskbtn');
const clickedDeleteTaskBtn = e.target.closest('.deletetskbtn');


// check for empty circle button

const checkedCircle = e.target.closest('.checkoffdiv');


// check for priority status div

const priorityLabel = e.target.closest(".priority-label");

 // If neither was clicked, do nothing
  if (!clickedCategEditBtn && !clickedCategDeleteBtn && !clickedAddListBtn && !clickedListEditBtn && !clickedListDeleteBtn && !clickedNewTaskBtn && !clickedEditTaskBtn && !clickedEditDisplayedTasks && !clickedDeleteTaskBtn && !checkedCircle) return;

 // Find the category section
  const categorySection = e.target.closest('.categmainsect');
  if (!categorySection) return; // cant put any buttons after this as the return exists everything

  // Read the category ID from the data attribute
  const categoryId = categorySection.dataset.categoryId;

  // Now you have the correct category ID linked to the clicked button
  console.log('Clicked category ID:', categoryId);


 
  // Do your edit logic here using categoryId...

  if (clickedCategEditBtn) {
          alert('editcateg');
          console.log(e.target)


          const categoryEditDiv = e.target.closest('.categeditdiv');
          console.log("CategoryEditDiv:", categoryEditDiv);

// add categheading class
//const categHeading = document.querySelector(`.category[data-category-id="${categoryId}"]`); // wrong query

const categHeading = categorySection.querySelector(`.category[data-category-id="${categoryId}"]`);


console.log("Category Name:", categHeading.textContent);


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
                
                updateArrayObjectByKey(mytoDOs, "name", originalName, "name", updatedName);
        
        
        
              formCategEdit.remove(); // Remove form after save
        
          });
        
          formCategEditCancelBtn.addEventListener('click', (e) => {
        
            e.preventDefault(); // We don't want to submit this fake form
        
            categHeading.textContent = originalTitle;
              
              formCategEdit.remove(); // Remove form after click
          });
        
        //console.log(newmytoDos);
        
        
                  
                } else if (clickedCategDeleteBtn) {
                  alert('deletecateg');
                  console.log(e.target)
        
                 
                     if (categorySection) { 
                        categorySection.remove();
                     }

const categoryId = categorySection.dataset.categoryId;

              console.log(categoryId);

              const categoryIndex = mytoDOs.findIndex(item => item.type === 'category' && item.id === categoryId);
             
              console.log(categoryIndex);

if (categoryIndex !== -1) {
    mytoDOs.splice(categoryIndex, 1);
  }


                     console.log(mytoDOs);
                 
                } else if (clickedAddListBtn) {

                  alert('addlist');
                  console.log(e.target)

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
        
        categorySection.appendChild(addListDialog);
        
        addListDialog.showModal();
        
        
        // start form listener
        
        formAddList.addEventListener('submit', (e) => {
        
            e.preventDefault(); // We don't want to submit this fake form


            const formData = new FormData(formAddList);
    const listname = formData.get("add-list-title");

    
    console.log("active category?:", categorySection);

const categoryId = categorySection.dataset.categoryId;

    // Add to todo array
                const list = addListName(listname, categoryId);    
console.log("New list returned:", list);



populateLocalStorage(); // for local storage

//add clearing function here
//clearUI();

//categoryLoad(mytoDOs);  // ✅ fresh render
listLoad(mytoDOs, categoryId);
//renderTasks(mytoDOs);

// start opening the right category element
        
       // const categoryEl = document.querySelector('.category');
        
       
        
          //categorySection = categoryEl.closest('.categmainsect'); 
            
        const listSection = document.createElement("div"); //categorySection.querySelector('.listsect');
        listSection.classList.add("listsect");
        
        
        console.log(listSection);
         
        
        const listHeading = document.createElement("div");
        //listHeading.setAttribute("id", "list-heading");
        listHeading.classList.add("listheading");
        
        const listTitleDiv = document.createElement("div");
        //listTitleDiv.setAttribute("id", "list-title");
        listTitleDiv.classList.add("listtitle");
        
        const listTitle = document.createElement("h3");
        listTitle.classList.add("list-title-txt", "list");
              
        
        //ad form data        
        listTitle.textContent = listname;
        
        
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
        
        
        
        listSection.appendChild(listHeading);


// add task section here

const taskSection = document.createElement("div");
taskSection.classList.add("tasksect");
taskSection.setAttribute("id", "task-sect");


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

  categorySection.appendChild(listSection);

// add datasets

listTitle.textContent = list.name;
listTitle.dataset.listId = list.id;
    listTitle.dataset.categoryId = categoryId;
    listSection.dataset.categoryId = categoryId;
    listSection.dataset.listId = list.id;
    taskSection.dataset.listId = list.id;

    console.log("Set on List Section:", categoryId);

    console.log("ID Set on List Title & task section:", list.id);

        
        
        addListDialog.close();
        addListDialog.remove();


      }); // end of add list form listener
                  

        }
      


        else if (clickedListEditBtn) {
                    alert('editlist');

const listHeading = clickedListEditBtn.closest(".listheading");
  if (!listHeading) return;

  console.log(listHeading);

//const listTitleDiv  = e.target.closest(".listtitle");                   

const listTitle = listHeading.querySelector(".list");
//const listTitle = categorySection.querySelector(`.list[data-category-id="${categoryId}"]`);
    console.log(listTitle);

    const listEditDiv = e.target.closest('.listeditdiv');
          console.log("CategoryEditDiv:", listEditDiv);

if (!listTitle && !listEditDiv) return;




                const originalListTitle = listTitle.textContent;




//create form

const formListEdit = document.createElement("form");
formListEdit.setAttribute("name", "formlistedit");
formListEdit.classList.add("formlistedit");

const formListTitleEdit = document.createElement("input");
formListTitleEdit.type = "text";
formListTitleEdit.name = "edit-list-title";
formListTitleEdit.id = "edit-list-title";
formListTitleEdit.value = originalListTitle;

formListEdit.appendChild(formListTitleEdit);


const editListBtnSect = document.createElement("div");
editListBtnSect.setAttribute("id", "listeditBtn-sect");
editListBtnSect.classList.add("listbtnsectedit");

const formListEditSubmitBtn = document.createElement("button");
formListEditSubmitBtn.type = "submit"; // Important: type submit so form submit event fires
formListEditSubmitBtn.id = "submit-edit-list";
formListEditSubmitBtn.textContent = "Edit";

editListBtnSect.appendChild(formListEditSubmitBtn);

const formListEditCancelBtn = document.createElement("button");
formListEditCancelBtn.type = "button"; // prevent form submit
formListEditCancelBtn.id = "cancel-edit-list";
formListEditCancelBtn.textContent = "Cancel";

editListBtnSect.appendChild(formListEditCancelBtn);

formListEdit.appendChild(editListBtnSect);

//expandTasks.appendChild(formTaskEdit);
listTitle.parentElement.insertBefore(formListEdit, listEditDiv);


// Clear current content
listTitle.textContent = "";


formListEdit.addEventListener('submit', (e) => {

    e.preventDefault(); // We don't want to submit this fake form

    const formData = new FormData(formListEdit);
    listTitle.textContent = formData.get("edit-list-title");


    const originalName = originalListTitle;
    const updatedName = formData.get("edit-list-title");
    
    updateArrayObjectByKey(mytoDOs, "name", originalName, "name", updatedName);


  formListEdit.remove(); // Remove form after save


});

formListEditCancelBtn.addEventListener('click', (e) => {

e.preventDefault(); // We don't want to submit this fake form

listTitle.textContent = originalListTitle;
  
  formListEdit.remove(); // Remove form after click
  
});
                }  else if (clickedListDeleteBtn) {
      alert('.deletelist');

      console.log(e.target)

const listSection = e.target.closest(".listsect");
      if (!listSection) return;

      console.log(listSection);
     
         if (listSection) { 
            listSection.remove();
         }


const listId = listSection.dataset.listId;

              console.log(listId);

              const listIndex = mytoDOs.findIndex(item => item.type === 'list' && item.id === listId);
             
              console.log(listIndex);

if (listIndex !== -1) {
    mytoDOs.splice(listIndex, 1);
  }


         console.log(mytoDOs);

        } 

        else if (clickedNewTaskBtn) {
          alert('newtaskbtn');
        
        const listSection = e.target.closest(".listsect");
        
console.log(listSection);

         const taskSection = listSection.querySelector(".tasksect");
        
      console.log("Right Task Section?:", taskSection);
        
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
            formTaskDetails.placeholder = "Log in & set up auto responders.";
                
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
            urgentOption.value = "Urgent";
            urgentOption.textContent = "Urgent";
            
            formTaskPriority.appendChild(urgentOption);
        
            const moderateOption = document.createElement("option");
            moderateOption.value = "Moderate";
            moderateOption.textContent = "Moderate";
        
            formTaskPriority.appendChild(moderateOption);
        
            const lowOption = document.createElement("option");
            lowOption.value = "Low";
            lowOption.textContent = "Low";
        
            formTaskPriority.appendChild(lowOption); 
            
            const noneOption = document.createElement("option");
            noneOption.value = "None";
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
        
            
        
            e.preventDefault(); // We don't want to submit this fake form


            const formData = new FormData(formAddTask);
    const taskname = formData.get("add-tsk-title");
    
    const { format } = require("date-fns");
        
         const details = formData.get("add-tsk-details");
         const date = formData.get("add-tsk-date");
        
         
        const [year, month, day] = date.split("-");
        const jsDate = new Date(year, month - 1, day); // Local midnight, no timezone issues
        
        const dueDate = format(jsDate, "MMM dd ''yy");
        
        
        
         console.log(dueDate);
         const priority = formData.get("add-tsk-priority");
        
    

    console.log("active list?:", listSection);
const listId = listSection.dataset.categoryId;

    // Add to todo array
                const task = addTask(taskname, details, dueDate, priority, listId);    
console.log("New task returned:", task);


populateLocalStorage(); // for local storage
// add clearing function here
//clearUI();
//categoryLoad(mytoDOs);  // ✅ fresh render
//listLoad(mytoDOs);
renderTasks(mytoDOs, listId);

const todayTasksNotify = document.querySelector("#notify-today");
const upcomingTasksNotify = document.querySelector("#notify-coming");

todayTasksNotify.replaceChildren();

upcomingTasksNotify.replaceChildren();

// render array of todo duedates that are for today only

notifToday();

// render array of upcoming todos duedates
notifUpcoming();

distanceOfDueDate();


           
// add cards here

const cardDiv = document.createElement("div");
cardDiv.classList.add("card", "tasks");


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



//const { urgentLabel } = urgent();

const taskTxt = document.createElement("p");
//taskTxt.setAttribute("id", "task-text");
taskTxt.classList.add("tskTxt");

taskTxt.textContent = `${task.dueDate} ${task.name}`;


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
            
        
        
      console.log(mytoDOs);

    cardDiv.dataset.taskId = task.id;
console.log("task:", cardDiv.dataset.taskId);
console.log("current task?:", task.id);

cardDiv.dataset.listId = listId;

console.log("task listID exist?", listId);
console.log("Assigned list:", cardDiv.dataset.listId);


        
         console.log("Passed on List Id to Task:", listId);
       
         

        
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
        
        
    } 

    else if (clickedEditTaskBtn) {
            alert('edittask');

            const cardDiv = e.target.closest(".card");
 
            console.log(cardDiv);
                
                 const existingExpandTasks = cardDiv.querySelector(".expand-toggle"); // checks if it exists
               console.log(existingExpandTasks);


          // the following does a toggle
                 if (existingExpandTasks) {
                  
                  existingExpandTasks.remove();
                  //taskDetails.style.display = "none";

                  //existingTaskEditDiv.remove();
                 } else {

                 
                  const listId = cardDiv.dataset.listId;

                  const taskId = cardDiv.dataset.taskId;

                  console.log("task id exists?", taskId);

                  console.log("listId exist?:", listId);
          
                  //const tasks = mytoDOs.filter(item => item.type === 'task' && item.listId === listId);


                  // to access array without looping everything and causing duplication
                  const tasks = mytoDOs.find(item => item.type === 'task' && item.id === taskId);

  //tasks.forEach(task => {
   
//console.log(task);
          
                  const expandTasks = document.createElement("div");
                 // expandTasks.setAttribute("id", "expand-togglediv");
                  expandTasks.classList.add("expand-toggle");
                  //expandTasks.style.display = "block";
                  
                  
                  const taskDetails = document.createElement("div");
                  //taskDetails.setAttribute("id", "task-details");
                  taskDetails.classList.add("tskdetailsdiv");
                  
                  
                 
        taskDetails.textContent = "";
        
                  taskDetails.textContent = `${tasks.details}`;
        
               
          
                  expandTasks.appendChild(taskDetails);
        
                
          // create edit div
                  
          
                  const taskEditDiv = document.createElement("div");
                  
                  taskEditDiv.classList.add("tskeditdiv");
          
                  // edit button
          
                  const editDisplayedTaskBtn = document.createElement("button");
          //editDisplayedTaskBtn.setAttribute("id", "edit-displayed-task");
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

  //}); // end of loop

  const existingSpan2 = cardDiv.querySelector(".span2");

  console.log(existingSpan2);

  if (existingSpan2) {
existingSpan2.style.color = "black";
    existingSpan2.style.textDecoration = "none";

  }

if (!taskDetails.querySelector(".crossed-out")) {
    

    const task = mytoDOs.find(item => item.type === 'task' && item.id === taskId);
    console.log("matching task ids?", task.id, taskId);

    // ✅ Only cross out if task is actually complete
    if (task.completed) {
      const span2 = document.createElement("span");
      span2.classList.add("crossed-out", "span2");
      span2.textContent = taskDetails.textContent;
      taskDetails.textContent = "";
      taskDetails.appendChild(span2);
    }

  } else {

    const span2 = expandTasks.querySelector(".crossed-out");
    console.log("span2 exists?: ", span2);
    span2.style.display = "block";
  }


                 }


                }

                else if (clickedEditDisplayedTasks) {
            alert('editdisplayedtskbtn');
          
          const cardDiv = e.target.closest(".card");

          console.log(cardDiv);

              const taskTxt = cardDiv.querySelector(".tskTxt");

              console.log(taskTxt);

              const taskDetails = cardDiv.querySelector(".tskdetailsdiv");

              console.log(taskDetails);
              
          
              const originalTitle = taskTxt.textContent;
          const originalDetails = taskDetails.textContent;
          
          
          
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
          
          
          // Clear current content
          taskTxt.textContent = "";
          taskDetails.textContent = "";
          
          
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
          
          } else if (clickedDeleteTaskBtn) {
            alert('deletetskbtn');
        
            const cardDiv = e.target.closest(".card");

            console.log(cardDiv);
            
           
              if (cardDiv) {
                cardDiv.remove();
              }

              const taskId = cardDiv.dataset.taskId;

              console.log(taskId);

              const taskIndex = mytoDOs.findIndex(item => item.type === 'task' && item.id === taskId);
             
              console.log(taskIndex);

if (taskIndex !== -1) {
    mytoDOs.splice(taskIndex, 1);
  }

              console.log(mytoDOs);
        
            }

            else if (checkedCircle) {
              alert('checkoffdiv');
    const cardDiv = e.target.closest(".card");

    // const cardDiv = checkedCircle.closest(".card");
console.log("cardDiv exist?:", cardDiv);

    // Find task text inside this card
      const taskTxt = cardDiv.querySelector(".tskTxt");
      

console.log("taskTxt exist?:", taskTxt);

const existingCheckmark = cardDiv.querySelector(".checked"); // checks if it exists

const existingSpan1 = cardDiv.querySelector(".span1");
const existingSpan2 = cardDiv.querySelector(".span2");

console.log("span 1 & 2 exist?", existingSpan1, existingSpan2);

const checkOffTaskSVG = cardDiv.querySelector(".check-off");

const taskDisplay = cardDiv.querySelector(".displaytask");

const checkoffDiv = cardDiv.querySelector(".checkoffdiv");

console.log("taskdisplay exists?:", taskDisplay);

console.log("checkoffdiv exists?:", checkoffDiv);






               
          // the following does a toggle
                 if (existingCheckmark) {
                  
                  existingCheckmark.remove();
                  existingSpan1.style.color = "black";
    existingSpan1.style.textDecoration = "none";
                //  existingSpan2.style.color = "black";
    //existingSpan2.style.textDecoration = "none";

                  // then put back circle
                  
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

                 
                  //existingTaskEditDiv.remove();
                 } else {

                  
              

              console.log(checkOffTaskSVG);

              
              const todayTasksNotify = document.querySelector("#notify-today");

              const oldupcomingTasksHeader = document.querySelector("#coming-tsk-header");
const upcomingTasksNotify = document.querySelector("#notify-coming");

todayTasksNotify.replaceChildren();

//upcomingTasksNotify.replaceChildren();

oldupcomingTasksHeader.replaceChild(upcomingTasksNotify);


// render array of todo duedates that are for today only

notifToday();

// render array of upcoming todos duedates
notifUpcoming();

              

      if (checkOffTaskSVG) {
        
        checkOffTaskSVG.remove();

      
    
    


    // start new check
    
    
    const checkTaskSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    checkTaskSVG.classList.add("checked");
    checkTaskSVG.setAttribute('viewBox', '0 0 24 24');
    checkTaskSVG.setAttribute("height", "20px");
    checkTaskSVG.setAttribute("width", "20px");

    
    
    const checkTaskSVGPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    checkTaskSVGPath.setAttribute(
    "d", "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z");
    
    checkTaskSVG.appendChild(checkTaskSVGPath);
    
       
    checkedCircle.appendChild(checkTaskSVG);
  
    
   

      const editTaskDiv = cardDiv.querySelector(".editdivbtn");
      console.log("editTaskDiv exist?:", editTaskDiv);

      const expandTasks = cardDiv.querySelector(".expand-toggle");

     // const taskDetails = cardDiv.querySelector(".tskdetailsdiv");

      console.log("expand task div exists?:", expandTasks);

      const taskId = cardDiv.dataset.taskId;

      console.log(taskId);
    
    const task = mytoDOs.find(item => item.type === 'task' && item.id === taskId && item.completed === false);

console.log("matching task ids?", task.id, taskId); 

    task.completed = true;

    

if (taskTxt) {
  const span = document.createElement("span");
  span.classList.add("crossed-out");
  span.textContent = taskTxt.textContent;
  taskTxt.textContent = "";
  taskTxt.appendChild(span);
}
  /*
  if (expandTasks) {
    

    if (taskDetails) {
      const span2 = document.createElement("span");
      span2.classList.add("span2", "crossed-out");
      span2.textContent = taskDetails.textContent;

      taskDetails.textContent = "";
      taskDetails.appendChild(span2);
    }
  }

  */

       
       
  } // first if else

} // if statement for toggle
            } // else if statement 

            else if (priorityLabel) {

togglePriority();

            }
    
         

  
}, false);


}



    

   