let employees = JSON.parse(localStorage.getItem("employees")) ||[];
let addBtn = document.querySelector(".add-btn");
let inputName = document.querySelector(".inputName");
let inputPosition = document.querySelector(".inputPosition");
let nextBtn = document.querySelector(".next-btn");
let prevtBtn = document.querySelector(".prev-btn");
let tbody = document.getElementById("tbody");

let totalPage;
let currentPageIndex=0;
let totalPerPage = 5;
renderBtn();
renderPage(currentPageIndex) ;

addBtn.addEventListener("click", function () {
    let employeeName = inputName.value.trim();
    let position = inputPosition.value.trim();
    if (!employeeName || !position) {
        document.querySelector(".prompt").style.display = "block";
    } else {
        addEmployee(employeeName, position);
        renderBtn();
            
    }
})

function addEmployee(employeeName, position) {

    let newEmployee = {
        id: employees.length === 0 ? 1 : employees[employees.length - 1].id + 1,
        employeeName,
        position,
    };
    employees.push(newEmployee);
    localStorage.setItem("employees", JSON.stringify(employees));
    renderPage(currentPageIndex);
    renderBtn();
}

function renderBtn() {
    totalPage = Math.ceil(employees.length/totalPerPage);
    document.querySelector(".btnContainer").innerHTML = "";
    for (let i = 0; i < totalPage; i++) {
        document.querySelector(".btnContainer").innerHTML += `
             <button onclick="renderPage(${i})" >${i+1}</button>
             `
        ;
    }
}

function renderPage(pageIndex) {
    let start = pageIndex*totalPerPage;
    let end = (pageIndex+1)*totalPerPage;
    let page = employees.slice(start,end);
   
    tbody.innerHTML= "";
    page.forEach((employee) => {
        tbody.innerHTML += `
        <tr>
            <th>${employee.id}</th>
            <th>${employee.employeeName}</th>
            <th>${employee.position}</th>
        </tr>
        `;
    })
}


nextBtn.addEventListener("click", function () {
    if(currentPageIndex<totalPage) {
        console.log(currentPageIndex);
        renderPage(currentPageIndex++);
    }
})

prevtBtn.addEventListener("click", function () {
    if (currentPageIndex>0) {
        console.log(currentPageIndex);
        renderPage(currentPageIndex--);
    }
})



