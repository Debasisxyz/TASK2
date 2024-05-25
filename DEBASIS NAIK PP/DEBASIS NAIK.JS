const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputbox.value ===''){
        alert("you must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();

}
listcontainer.addEventListener("click",function(p){
    if(p.target.tagName === "li"){
        p.target.classList.toggle("checked");
        saveData()

    }
    else if(p.target.tagName === "SPAN"){
        p.target.parentElement.remove();
        saveData()

    }
}, false); 
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);

}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data")

}
showTask();
