const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
          if(inputBox.value === ''){
                    alert("You must write Something!");

          }
          else{
                   
                    let li = document.createElement("li");
                  
                    listContainer.appendChild(li);
                    let div = document.createElement("div")
                    div.id = "div";
                    li.appendChild(div);
                    let input = document.createElement("input");
                    input.type = "text";
                    input.id = "te";
                    input.value = inputBox.value
                    input.setAttribute("readonly","readonly");
                    div.appendChild(input);
                    let edit = document.createElement("button");
                    edit.id = "btn"
                    edit.type = "button";
                    edit.innerHTML = "edit";
                    li.appendChild(edit);
                    let span = document.createElement("span");
                    span.innerHTML="\u00d7";
                    li.appendChild(span);

                    
                   
                    const editf = document.getElementById("btn");
                    edit.addEventListener("click" , function(e){
                      if(document.getElementById("btn").innerText.toLowerCase() == "edit"){

                        input.removeAttribute("readonly");
                        input.focus();
                        document.getElementById("btn").innerText = "save";
                      }else{

                      input.setAttribute("readonly","readonly");
                      document.getElementById("btn").innerText = "edit";
                      }
                     
                    }) 
          }
          inputBox.value = "";
        
          save();
}
listContainer.addEventListener("click",function(e){
          if(e.target.tagName === "INPUT"){
                    e.target.classList.toggle("checked");
                    
                   save();
          }
          else if(e.target.tagName === "SPAN"){
                    e.target.parentElement.remove();
                    save();
          }
          save(); 
},false);

function save(){
       localStorage.setItem("data",listContainer.innerHTML);   
}
function showTask(){
         listContainer.innerHTML = localStorage.getItem("data");
}
showTask();