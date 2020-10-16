var addHabitBtn = document.getElementById("add-habit-btn"); 
addHabitBtn.addEventListener("click", createHabit);

function createHabit() {
    deleteDiv();

    var addHabitDiv = document.createElement("div"); 
    addHabitDiv.setAttribute("id", "add-habit-div"); 

    var searchUl = document.createElement("input"); 
    searchUl.setAttribute("id", "add-habit-input"); 

    var addHabitHead = document.createElement("h1"); 
    addHabitHead.setAttribute("id", "add-habit-title");     

    var addHabitTitle = document.createTextNode("Results:"); 
    
    addHabitHead.appendChild(addHabitTitle); 
    addHabitDiv.appendChild(addHabitHead);    
    addHabitDiv.appendChild(searchUl);

    document.body.appendChild(addHabitDiv);
}

function deleteDiv() { 
    var deleteDiv = document.getElementById("add-habit-div"); 
    deleteDiv?.remove();       
}