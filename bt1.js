let todos =  JSON.parse(localStorage.todos) || [];
localStorage.setItem("todos", JSON.stringify(todos));

let input = document.querySelector(".input");
let themBtn = document.querySelector(".btn");
let ul = document.querySelector(".ul");

themBtn.addEventListener("click", function() {
    let task = input.value.trim();
    if(task=="") {
        alert("Chưa nhập nhiệm vụ");
    } else {
        todos.push(task);
        localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
    render();
    } 
})
function render() {
    ul.innerHTML="";
    todos.forEach((todo, index) => {
        ul.innerHTML+= `
     <li class="li"><div>${todo}</div><div><button onclick="editTask(${index})" class="edit-btn">Sửa</button><button onclick="deleteTask(${index})" class="delete-btn">Xóa</button></div></li>
    `;
    });          
};

function deleteTask(index) {
    todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(todos));
    render();
   
}

function editTask(index) {
    let editTask = prompt("Nhập vào nhiệm").trim()
    if (editTask === null) {
        return;
    }
    if (editTask==="") {
       return; 
    };  
    todos.splice(index,1,editTask);
    localStorage.setItem("todos", JSON.stringify(todos));
    render();

}
