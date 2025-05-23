import { mytoDOs, addTask, addListName, addCategName } from "./todo-logic.js";


export function categorySectBtns() {
// event delegation listener here for todosect

     todoSect.addEventListener('click', function(e) {

        const clickedCategEditBtn = e.target.closest('.editcateg');
        const clickedCategDeleteBtn = e.target.closest('.deletecateg');
        


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
                
                updateArrayObjectByKey(mytoDOs, "categname", originalName, "categname", updatedName);
        
        
        
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
        
                 
                     if (categMainSection) { 
                        categMainSection.replaceChildren();
                     }
                 
                } 
      
      }, false);

    } // for loop

    export function listBtns() {

        const clickedAddListBtn = e.target.closest('.addlist');

        if (clickedAddListBtn) {
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
        
        const categoryEl = document.querySelector('.category');
        
       
        
          const categorySection = categoryEl.closest('.categmainsect'); 
            
        const listContainer = document.createElement("div"); //categorySection.querySelector('.listsect');
        listContainer.classList.add("listsect");
        
        
        console.log(listContainer);
         
         //const listSection = document.createElement("div");
        //listSection.setAttribute("id", "list-sect");
        //listSection.classList.add("listsect");
        
        const listHeading = document.createElement("div");
        //listHeading.setAttribute("id", "list-heading");
        listHeading.classList.add("listheading");
        
        const listTitleDiv = document.createElement("div");
        //listTitleDiv.setAttribute("id", "list-title");
        listTitleDiv.classList.add("listtitle");
        
        const listTitle = document.createElement("h3");
        listTitle.classList.add("list-title-txt", "list");
        //listTitle.setAttribute("data-category-id", `${categoryId}`);
        //const categoryId = listTitle.dataset.categoryId;
        
        
        //ad form data
        
        const formData = new FormData(formAddList);
        
        listTitle.textContent = formData.get("add-list-title");
        
        
         
        
            
        
        
        
        
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
        
        //listSection.appendChild(listHeading);
        
        listContainer.appendChild(listHeading);



        // sent to array
        
        const listname = formData.get("add-list-title");
        
         // Add to todo array
         addListName(listname);
         
         // DO NOT MOVE ID - it logs the right list
        // add id
        
          const formListData = document.getElementById('add-list-title'); 
        
          console.log(formListData);
        
        const targetListName = formListData.value.trim();
        
        console.log(targetListName);
        
        const matchingListId = mytoDOs.find(item => item.listname === targetListName)?.id;
        
        console.log(matchingListId);
        
        if (matchingListId !== undefined) {
          console.log(`Found list with ID: ${matchingListId}`);
        } else {
          console.log("List not found.");
        
        }
        
        
        listTitle.setAttribute("data-id", `${matchingListId}`);
        //listTitle.setAttribute("data-category-id", `${categoryId}`);
        
        
        console.log(mytoDOs);
        //console.log(newmytoDos);
        
        addListDialog.close();
        addListDialog.remove();
        
        // start delegation here for add and delete buttons

        listContainer.addEventListener('click', function(e) {

    const clickedListEditBtn = e.target.closest('.editlist');
const clickedListDeleteBtn = e.target.closest('.deletelist');



    if (clickedListEditBtn) {
      alert('editlist');

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
    
    updateArrayObjectByKey(mytoDOs, "listname", originalName, "listname", updatedName);


  formListEdit.remove(); // Remove form after save


});

formListEditCancelBtn.addEventListener('click', (e) => {

e.preventDefault(); // We don't want to submit this fake form

listTitle.textContent = originalListTitle;
  
  formListEdit.remove(); // Remove form after click
  
});




      
    } else if (clickedListDeleteBtn) {
      //alert('test');

      
     
         if (listSection) { 
            listSection.remove();
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
    }
    