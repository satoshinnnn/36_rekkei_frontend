// Phải có tính năng thêm mới website yêu thích
// Có thể xoá được website lưu trữ
// Dữ liệu phải được trữ vào trong Local Storage

let bookMarks = []

let searchBox = document.querySelector(".overlayBookmarkBox");
let addBtn = document.querySelector(".add-btn");
let saveBtn = document.querySelector(".save-btn");
let exitBtn = document.querySelector(".exit-btn");
let inputWebName = document.querySelector(".inputWebName");
let inputWebURL = document.querySelector(".inputURL");
let webNamePrompt = document.querySelector(".webNamePrompt");
let urlPrompt = document.querySelector(".urlPrompt");
let ul = document.querySelector(".ul");


// lấy dữ liệu inputURL và inputWebName
// dùng function để tìm faiccon
// thêm nội dung cho ul.innerHTML 

addBtn.addEventListener("click", function () {
    searchBox.style.display = "block";
    document.querySelector(".excludeSearchBox").style.opacity = "50%";
})

saveBtn.addEventListener("click", function() {
    let url = inputWebURL.value.trim();
    let webName = inputWebName.value.trim();
    let domain = getDomainFromUrl(url);

    if(webName === "" ) {
        webNamePrompt.style.display = "block";
        inputWebName.style.border = "2px solid red";
    } else {}
    if(url === "" ) {
        urlPrompt.style.display = "block";
        inputWebURL.style.border = "2px solid red";
    }
    if (webName!=="" && url!=="") {
        const domain = getDomainFromUrl(url)
        const bookMark = {webName, url, domain};
        bookMarks.push(bookMark);
        localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
        render();

    }
   
})
exitBtn.addEventListener("click", function() {
    searchBox.style.display="none";
    document.querySelector(".excludeSearchBox").style.opacity = "100%";

})

function render() {
    ul.innerHTML="";
    bookMarks.forEach((bookMark, index)=> {
        ul.innerHTML += `
     <li class="li">
        <img class="img" src="${`https://www.google.com/s2/favicons?sz=32&domain=${bookMark.domain}`}" alt="favicon">
        <a href="${bookMark.url}" target="_blank">${bookMark.webName}</a> 
        <button onclick="deleteBookmark(${index})" >X</button>
     </li>
        `;
    })
} 

function deleteBookmark(index) {
    bookMarks.splice(index, 1);
    localStorage.setItem("bookMarks", JSON.stringify(bookMarks));
    render();
}

function getDomainFromUrl(url) {
    try {
      const parsedUrl = new URL(url);
      const parts = parsedUrl.hostname.split('.');
      return parts.length > 2 ? parts.slice(-2).join('.') : parsedUrl.hostname;
    } catch (e) {
      return null;
    }
}

