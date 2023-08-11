const inputBox = document.getElementById("input-box")
const ListContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something");
    }
    else{
        const newLi= document.createElement("li");
        newLi.innerHTML = inputBox.value;
        ListContainer.append(newLi);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        newLi.appendChild(span);
    }
    inputBox.value=""; 
    saveData();
}

ListContainer.addEventListener('click' ,(e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName ==='SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data" , ListContainer.innerHTML);
}

function showTask(){
    ListContainer.innerHTML=localStorage.getItem("data");
}

showTask();
