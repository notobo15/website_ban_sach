if (localStorage.getItem("userLoginCurrent") != null) {
  // alert("chao mung den admin");
} else {
  alert("ban chua dang nhap");
  window.location.assign("../index.html");
}

// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};
const customers = document.querySelector(".customers__btn");
const category = document.querySelector(".category__btn");
const orders = document.querySelector(".orders__btn");

orders.addEventListener("click", () => {
  handleShow("orders");
});
category.addEventListener("click", () => {
  handleShow("category");
});
customers.addEventListener("click", () => {
  handleShow("customers");
});

function handleShow(name) {
  const listTable = document.querySelectorAll(".center");
  listTable.forEach((item) => {
    item.classList.remove("show");
    if (item.classList.contains(name)) {
      item.classList.add("show");
    }
  });
}

const categoryTbody = document.querySelector(".category table tbody");
const customersTbody = document.querySelector(".customers table tbody");
const ordersTbody = document.querySelector(".orders table tbody");
function render(arr, eTbody) {
  let htmls = "";
  arr.forEach((item) => {
    htmls += `
    <tr>
    <td>${item.id}</td>
    <td>
    <img src=".${item.srcImg[0]}" alt=""></td>
    <td>${item.title}</td>
    <td>${item.description}</td>
    <td>${numbertoVND(item.currentPrice)}</td>
    <td>
        <div class="toolkit">
            <div class="edit" onclick="editById(${item.id})">
                <i class="fa-solid fa-wrench"></i>
            </div>
            <div class="delete" onclick="deleteById(${item.id})"> 
                <i class="fa-solid fa-trash"></i>
            </div>

        </div>
    </td>
</tr>
    `;
  });
  eTbody.innerHTML = htmls;
}

function renderCustomers(arr, eTbody) {
  let htmls = "";
  arr.forEach((item, indx) => {
    htmls += `
    <tr>
      <td>${++indx}</td>
      <td>${item.id}</td>
      <td>${item.user_name}</td>
      <td>${item.pw}</td>
      <td>${item.full_name}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
      <td>${item.address}</td>
      <td>${item.create_date}</td>
      <td>${item.isActive}</td>
      
  </tr>
    `;
  });
  eTbody.innerHTML = htmls;
}
function renderOrders(arr, eTbody) {
  let htmls = "";
  arr.forEach((item, indx) => {
    htmls += `
    <tr>
      <td>${++indx}</td>
      <td>${item.order_id}</td>
      <td>${item.user_name}</td>
      <td>${item.full_name}</td>
      <td>${item.phone}</td>
      <td>${item.details}</td>
      <td>${item.address_delivery}</td>
      <td>${item.order_date}</td>
      <td>${numbertoVND(item.total_price)}</td>
      <td> <input class="btnConfirm" value="${
        item.isConfirm
      }" type="checkbox"></td>
    </tr>
    `;
  });
  eTbody.innerHTML = htmls;
}

const or = JSON.parse(localStorage.getItem("orders"));
// console.log(ordersUsers);

render(books, categoryTbody);
renderCustomers(usersAccount, customersTbody);
renderOrders(or, ordersTbody);

const logoutBtn = document.querySelector(".logout__btn");
logoutBtn.addEventListener("click", () => {
  if (confirm("Bạn có chắc chắn muốn thoát ?")) {
    localStorage.removeItem("userLoginCurrent");
    window.location.assign("../index.html");
  }
});

let user = JSON.parse(localStorage.getItem("userLoginCurrent"));
// console.log(user);

const edit = document.querySelectorAll(".toolkit .edit");
const deleteProduct = document.querySelectorAll(".toolkit .delete");
/* console.log(edit, deleteProduct);
edit.addEventListener("click", () => {});

deleteProduct.addEventListener("click", () => {});
 */
function deleteById(id) {
  // renderOrders(or, ordersTbody);
  let index = books.findIndex((item) => {
    return item.id == id;
  });
  console.log(index);
  books.splice(index, 1);
  render(books, categoryTbody);
  console.log(id);
}
const containerEdit = document.querySelector(".container__edit");
const containerEditTable = document.querySelector(".container__edit table");

function editById(id) {
  const containerEditOverlay = containerEdit.querySelector(".overlay");
  containerEditOverlay.addEventListener("click", () => {
    containerEdit.classList.remove("show");
  });
  containerEdit.classList.add("show");
  // renderOrders(or, ordersTbody);
  let item = books.find((item) => {
    return item.id == id;
  });
  let htmls = `
  <thead>
  <tr>
    <td colspan="2">${item.title}</td>
  </tr>
  </thead>        
  <tbody>
    <tr>
    <td>Tên: </td>
    <td><input type="text" value="${item.title}"></td>
  </tr>
  <tr>
    <td>Mô tả: </td>
    <td><input type="text" value="${item.description}"></td>
  </tr>
  <tr>
    <td>Giá: </td>
    <td><input type="text" value="${item.currentPrice}"></td>
  </tr>
  </tbody>
  `;
  containerEditTable.innerHTML = htmls;
  console.log(item);

  // render(books, categoryTbody);
}

const listConfirm = document.querySelectorAll(".btnConfirm");
listConfirm.forEach((item, index) => {
  if (item.getAttribute("value") == "true") {
    item.setAttribute("checked", "");
  } else {
    item.removeAttribute("checked", "");
  }
  item.addEventListener("click", () => {
    console.log(item);
    if (or[index].isConfirm == "false") {
      or[index].isConfirm = "true";
      item.setAttribute("value", "true");
    } else {
      or[index].isConfirm = "false";
      item.setAttribute("value", "false");
    }
    localStorage.setItem("orders", JSON.stringify(or));
  });
});
