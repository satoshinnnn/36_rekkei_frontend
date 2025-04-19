let inputE = document.getElementById("input");
let btn = document.getElementById("btn");
let ul = document.getElementById("ul");

// tìm kiếm sản phẩm khi nhấn nút 
btn.addEventListener("click", searchProduct);
function searchProduct() {
    ul.innerHTML = ""; // xóa danh sách sản phẩm cũ
    let searchProduct = inputE.value.toLowerCase().trim();
    isFind = 0;
    products.forEach((product)=>{
        if (product.name.toLowerCase().includes(searchProduct)) {
            let li = document.createElement("li");
            li.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3 class="pName">${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">Giá: ${product.price}</p>
            `;
            ul.appendChild(li);
            isFind =1;
        } 
        inputE.value = ""; // xóa nội dung ô input sau khi tìm kiếm
    }) 
    if (isFind == 0) {
        // nếu không tìm thấy sản phẩm nào thì hiển thị thông báo
        let li = document.createElement("li");
        li.innerHTML = `<p>Không tìm thấy sản phẩm nào!</p>`;
        ul.appendChild(li);
    }

}
// ds đối tượng sản phẩm 
let products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35990000,
        image: 'https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0',
        description: 'Laptop cao cấp với man hình 15 inch, CPU Intel Core i7 va RAM 16GB.',
    },
    {
        id: 2,
        name: 'iPhone 15 Pro Max',
        price: 32990000,
        image: 'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description: 'Điện thoại flagship cua Apple voi camera 48MP va chip A17 Pro.',
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
        description: 'Điện thoại Android manh me voi but S-Pen va camera sieu zoom.',
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 7990000,
        image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
        description: 'Tai nghe chong on tot nhat voi thoi luong pin len den 30 gio.',
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9. jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính nang đo nhip tim va ho tro the thao.',
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3990000,
        image: 'https://th.bing.com/th/id/OIP.kNp66Lw41hQJBWsxrddSZQHaHa?rs=1&pid=ImgDetMain',
        description: 'Loa Bluetooth chống nước với ẩm bass manh me va pin 20 gio.',
    },
]
localStorage.setItem("products", JSON.stringify(products));

// render danh sách đối tượng sản phẩm 
products.forEach((product) => {
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3 class="pName">${product.name}</h3>
    <p class="description">${product.description}</p>
    <p class="price">Giá: ${product.price}</p>
    <button>Thêm vào giỏ hàng</button>
    `;
    ul.appendChild(li);
})