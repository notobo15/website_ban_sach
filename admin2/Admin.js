var btn_subSP = document.querySelector(".btn_sanpham");
var show_sanpham = document.querySelector("nav ul .show_sanpham");
const btn_sanpham = document.querySelector(".btn_SP");
const btn_donhang = document.querySelector(".btn_Orders");
const btn_taikhoan = document.querySelector(".btn_User");
const btn_addSP = document.querySelector(".btn_addSP");
const pagenumber_SP = document.querySelector(".pagenumber");
const btn_doanhthu = document.querySelector(".btn_doanhthu");
console.log(btn_doanhthu);
btn_subSP.addEventListener("click", show);
// prevent FORM form reset
const prevent = (pre_ev) => {
  pre_ev.preventDefault();
};
function show() {
  show_sanpham.classList.toggle("show");
}

btn_addSP.addEventListener("click", () => {
  headerShow("form_add_sanpham");
});
btn_donhang.addEventListener("click", () => {
  headerShow("Content_Orders");
});
btn_sanpham.addEventListener("click", () => {
  headerShow("Content_SP");
});
btn_taikhoan.addEventListener("click", () => {
  headerShow("Content_User");
});
btn_doanhthu.addEventListener("click", () => {
  headerShow("Content_DoanhThu");
});

function headerShow(name) {
  const listTable = document.querySelectorAll(".header_content");
  listTable.forEach((item) => {
    item.classList.remove("show");
    if (item.classList.contains(name)) {
      item.classList.add("show");
    }
  });
}
// ĐỔ DỮ LIỆU TỪ DATA.JS
const SPTbody = document.querySelector(".Content_SP table tbody");
const UserTbody = document.querySelector(".Content_User table tbody ");
const OrderTbody = document.querySelector(".Content_Orders table tbody");
// Tạo biến Page
let currentPage = 1;
let perPage = 5;
let totalPage = 0;
let perBooks = [];
let countPageNumber = 1;
let StartPageNumber = 1;
let EndPageNumber = 0;
//Tạo số trang
function renderPageNumber(arr) {
  let htmls = "";
  books = arr;
  htmls += `
  <li class="pagenumber_item" onclick="backRenderPageNumber()">
      <a href="#" class="pagenumber_item_link fa fa-angle-left"></a>
  </li>
  `;
  if((arr.length%perPage)==0){
    totalPage = arr.length / perPage; 
  }
  else {
    totalPage = arr.length / perPage + 1;
  }
  //Start - Chặn không cho vượt quá totalPage
  if (totalPage >= 5 && (StartPageNumber + 4) < totalPage) {
    countPageNumber = StartPageNumber;
    for (let i = countPageNumber; i <= (countPageNumber + 4); i++) {
      htmls += `
    <li class="pagenumber_item" onclick="handlePageNumber(${i})">
      <a href="#" class="pagenumber_item_link">${i}</a>
    </li>
    `;
      EndPageNumber = i; //Lát thay thế cho StartPageNumber
    }
  }
  else {
    countPageNumber = StartPageNumber;
    for (let i = countPageNumber; i <= totalPage; i++) {
      htmls += `
    <li class="pagenumber_item" onclick="handlePageNumber(${i})">
      <a href="#" class="pagenumber_item_link">${i}</a>
    </li>
    `
    }
  }
  //End - 
  htmls += `
    <li class="pagenumber_item" onclick="nextRenderPageNumber()">
      <a href="#" class="pagenumber_item_link fa fa-angle-right" id="angle_right"></a>
    </li>
  `;
  pagenumber_SP.innerHTML = htmls;
}
//Set angle button
function nextRenderPageNumber(arr) {
  StartPageNumber = EndPageNumber;
  renderPageNumber(books);
}
function backRenderPageNumber(arr) {
  if (StartPageNumber >= 5) {
    StartPageNumber -= 4;
  }
  else {
    StartPageNumber = 1;
  }
  renderPageNumber(books);
}
//Đổ dữ liệu từng trang
function handlePageNumber(num) {
  currentPage = num //2
  perBooks = books.slice( //start,end
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  )
  showSP(books, SPTbody);
}
function showSP(arr, tBody) {
  let list_Books = localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")) : [];
  if (localStorage.getItem("list-books") == null) {
    arr.forEach((item) => {
      list_Books.push(item);
    });
    localStorage.setItem("list-books", JSON.stringify(list_Books));
  }
  const tempbooks = [];
  list_Books.forEach((item) => {
    tempbooks.push(item);
  })
  perBooks = tempbooks.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
  )
  let htmls = "";
  perBooks.forEach((item, indx) => {
    htmls += `
      <tr>
      <td>${++indx}</td>
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td class="text">${item.description}</td>
      <td>${item.currentPrice}đ</td>
      <td>
          <ul class="content_btn">
            <li class="btn_Sua" onclick = "return xemThongTinSPtheoID(${item.id})"><img src="./img/btn_Sua.png" alt=""></li>
            <li class="btn_Xoa" onclick="return xoaSPtheoID(${item.id})"><img src="./img/btn_xoa.png" alt=""></li>
          </ul>
      </td>
      </tr>
    `;
  });
  tBody.innerHTML = htmls;
  renderPageNumber(tempbooks);
}

showSP(books, SPTbody)

// đổ dữ liệu User
function showUser(arr, tBody) {
  let list_Users = localStorage.getItem("list-users") ? JSON.parse(localStorage.getItem("list-users")) : [];
  if (localStorage.getItem("list-users") == null) {
    arr.forEach((item) => {
      list_Users.push(item);
    });
    localStorage.setItem("list-users", JSON.stringify(list_Users));
  }
  const tempusers = [];
  list_Users.forEach((item) => {
    tempusers.push(item);
  })
  let htmls = "";
  tempusers.forEach((item, indx) => {
    htmls += `
    <tr>
      <td>${++indx}</td>
      <td>${item.id}</td>
      <td>${item.user_name}</td>
      <td>${item.pw}</td>
      <td>${item.last_name} ${item.first_name}</td>
      <td>${item.email}</td>
      <td>${item.phone}</td>
      <td>${item.address}</td>
      <td>${item.birth_date}</td>
      <td><input type="checkbox" name="confirm_user" ${
        item.isActive == true ? "checked" : ""
      } onclick="return checkedUser(${item.id})"></td>
    </tr>
    `;
  });
  tBody.innerHTML = htmls;
}
showUser(usersAccount,UserTbody);
function checkedUser(id){
  let list_Users = localStorage.getItem("list-users") ? JSON.parse(localStorage.getItem("list-users")) : [];
  list_Users.forEach((item)=>{
    if(item.id == id){
      if(item.isActive == true){
        item.isActive = false;
      }
      else {
        item.isActive = true;
      }
    }
  })
  localStorage.setItem("list-users", JSON.stringify(list_Users));
}
// showUser(JSON.parse(localStorage.getItem("usersAccount")), UserTbody);
//Đổ dữ liệu Đơn Hàng
function showOrder(arr, tBody) {
  let list_Orders = localStorage.getItem("list-orders") ? JSON.parse(localStorage.getItem("list-orders")) : [];
  if (localStorage.getItem("list-orders") == null) {
    arr.forEach((item) => {
      list_Orders.push(item);
    });
    localStorage.setItem("list-orders", JSON.stringify(list_Orders));
  }
  const temporders = [];
  list_Orders.forEach((item) => {
    temporders.push(item);
  })
  let htmls = "";
  temporders.forEach((item, indx) => {
    htmls += `
    <tr>
    <td>${++indx}</td>
    <td>${item.order_id}</td>
    <td>${item.user_name}</td>
    <td>${item.full_name}</td>
    <td>${item.phone}</td>
    <td class="text">${item.details}</td>
    <td>${item.address_delivery}</td>
    <td>${item.order_date}</td>
    <td>${item.total_price}đ</td>
    <td><input type="checkbox" name="confirm" ${
      item.isConfirm == true ? "checked" : ""
    } onclick="return checkedOrder(${item.order_id})"></td>
    </tr>
  `;
  });
  tBody.innerHTML = htmls;
}
showOrder(ordersUsers, OrderTbody);

//thêm sản phẩm
const btn_XacNhan_Add_SP = document.getElementById("btn_XacNhan_Add_SP");
const input_MaSP = document.getElementById("input_MaSP");
const input_LoaiSP = document.getElementById("input_LoaiSP");
const input_TenSP = document.getElementById("input_TenSP");
const input_TenTG = document.getElementById("input_TenTG");
const input_GiaSP_bandau = document.getElementById("input_GiaSP_bandau");
const input_GiaSP_banra = document.getElementById("input_GiaSP_banra");
const txtArea_ChiTiet = document.getElementById("txtArea_ChiTiet");
const btn__addImage_SP = document.querySelector(".btn__addImage_SP");
const div_add_Img_input = document.querySelector(".add_Img_input");
const input_LinkImg = document.querySelector("#linkImg");

btn__addImage_SP.onclick = function () {
  div_add_Img_input.style.display = "block";
  btn__addImage_SP.disabled = true;
};

function addSP() {
  let list_Books = localStorage.getItem("list-books")
    ? JSON.parse(localStorage.getItem("list-books"))
    : [];
  list_Books.push({
    id: input_MaSP.value,
    category: input_LoaiSP.value,
    author: input_TenTG.value,
    title: input_TenSP.value,
    price: input_GiaSP_bandau.value,
    currentPrice: input_GiaSP_banra.value,
    description: txtArea_ChiTiet.value
  });
  localStorage.setItem("list-books", JSON.stringify(list_Books));
}

// function renderSanPham() {
//   const tempbooks = [];
//   let list_Books = localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")) : [];
//   list_Books.forEach((item) => {
//     tempbooks.push(item);
//   })
//   books = tempbooks;
//   console.log(books);
//   showSP(books, SPTbody);
// }


btn_XacNhan_Add_SP.onclick = function () {
  // console.log(books);
  addSP();
  showSP(books, SPTbody);
  document.forms[0].reset(); // setText = "" for all input in form "form_add_sanpham".
};
// Xóa sản phẩm.
const btn_XoaSP = document.querySelector(".btn_Xoa");
console.log(btn_XoaSP);

function xoaSPtheoID(id) {
  const tempDelete = []; // mảng tạm chuẩn bị xóa 
  const tempDeleted = [];// mảng tạm đã xóa
  console.log(id);

  let list_Books = localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")) : [];
  list_Books.forEach((item)=>{
    tempDelete.push(item);
  });
  // nếu đồng ý xóa thì thực hiện 
  let isConfirm = confirm("Đồng ý xóa sản phẩm " +id+ " không ?");
  if (isConfirm == true) {
   tempDelete.forEach((item) => {
      if(item.id != id){
        tempDeleted.push(item);
      }
   })
   //đổ dữ liệu đã xóa lên ls
   localStorage.setItem("list-books", JSON.stringify(tempDeleted));
   //Lấy data từ ls về
   showSP(books, SPTbody);
  }
}

//Chỉnh sửa sản phẩm
const overplay_ChinhSuaSP = document.querySelector(".overplay_ChinhSuaSP");
const form__ChinhSuaSP = document.querySelector(".form__ChinhSuaSP");
const overplay__behind_ChinhSuaSP = document.querySelector(".overplay__behind_ChinhSuaSP")
const btn_confirm_ChinhSua = document.querySelector(".btn_confirm_ChinhSua");
// const tenSP_ChinhSua = document.querySelector("#tenSP_ChinhSua");
// const tacgiaSP_ChinhSua = document.querySelector("#tacgiaSP_ChinhSua");
// const giabandauSP_ChinhSua = document.querySelector("#giabandauSP_ChinhSua");
// const giabanraSP_ChinhSua = document.querySelector("#giabanraSP_ChinhSua");
// const txtArea_ChiTiet_ChinhSua = document.querySelector("txtArea_ChiTiet_ChinhSua");
overplay__behind_ChinhSuaSP.onclick =  function(){
  overplay_ChinhSuaSP.style.display = "none";
}
console.log(overplay_ChinhSuaSP);
function xemThongTinSPtheoID(id){
  overplay_ChinhSuaSP.style.display = "block";
  let list_Books = localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")): [];
  list_Books.forEach((item)=>{
    if(item.id == id){
      let id = item.id;
      let category = item.category;
      let title = item.title;
      let author = item.author;
      let price = item.price;
      let currentPrice = item.currentPrice;
      let description = item.description.toString();
      document.getElementById("maSP_ChinhSua").value = id;
      document.getElementById("tenSP_ChinhSua").value = title;
      document.getElementById("tacgiaSP_ChinhSua").value = author;
      document.getElementById("giabandauSP_ChinhSua").value = price;
      document.getElementById("giabanraSP_ChinhSua").value = currentPrice;
      document.getElementById("txtArea_ChiTiet_ChinhSua").value = description;
      document.getElementById("book_type_seleted").value = category;
    } 
  })
}
function thaydoiThongTinSP (){
  let list_Books = localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")) : [];
  const index = list_Books.findIndex(item => item.id == document.getElementById("maSP_ChinhSua").value);
  console.log(index);
  list_Books[index] = {
    id : document.getElementById("maSP_ChinhSua").value,
    category : document.getElementById("book_type_seleted").value,
    title : document.getElementById("tenSP_ChinhSua").value,
    author : document.getElementById("tacgiaSP_ChinhSua").value,
    price : document.getElementById("giabandauSP_ChinhSua").value,
    currentPrice : document.getElementById("giabanraSP_ChinhSua").value,
    description : document.getElementById("txtArea_ChiTiet_ChinhSua").value
  }
  overplay_ChinhSuaSP.style.display = "none";
  localStorage.setItem("list-books", JSON.stringify(list_Books));
}
function checkedOrder (id){
  let list_Orders = localStorage.getItem("list-orders") ? JSON.parse(localStorage.getItem("list-orders")) : [];
  list_Orders.forEach((item)=>{
    if(item.order_id == id){
      if(item.isConfirm == true){
        item.isConfirm = false;
      }
      else {
        item.isConfirm = true;
      }
    }
  })
  localStorage.setItem("list-orders", JSON.stringify(list_Orders));
}

btn_confirm_ChinhSua.onclick = function(){
  const id = document.getElementById("maSP_ChinhSua").value;
  let isConfirm = confirm("Chấp nhận thay đổi chỉnh sửa của mã sản phẩm: "+id+" ?");
  if(isConfirm == true){
    thaydoiThongTinSP();
    showSP(books,SPTbody);
  }
}
//Lấy địa chỉ Body Table Thống Kê
const table_TK = document.querySelector(".TK_Data");
function showThongKe(nam){
  let list_Orders = localStorage.getItem("list-orders") ? JSON.parse(localStorage.getItem("list-orders")) : [];
  // Tạo 1 nùi biến tạm
  let tempnam=0;
  let tempthang=0;
  let tempdonhang=0;
  let temptongtien=0;
  let htmls="";
  //Chạy mảng data đơn hàng
  list_Orders.forEach((item)=>{
    //Lấy năm từ đơn hàng
      tempnam = item.order_date.slice(
        item.order_date.lastIndexOf("/") + 1,
        item.order_date.lastIndexOf("/") + 5
      )
    //Lấy tháng từ đơn hàng
      tempthang = item.order_date.slice(
        item.order_date.indexOf("/") + 1,
        item.order_date.indexOf("/") + 3
      )
      //Xét năm đơn hàng với năm được chọn
      if(tempnam == nam) {
        //Lấy địa chỉ của tr td theo tháng.
        const Thang_TK = table_TK.getElementsByTagName("tr")[tempthang - 1];
        const value_donhang = Thang_TK.getElementsByTagName("td")[1];
        const value_tongtien = Thang_TK.getElementsByTagName("td")[2];
        //Lấy data của td và tính toán theo đơn hàng
        tempdonhang = value_donhang.innerText;
        temptongtien = parseInt(value_tongtien.innerText);
        tempdonhang++;
        temptongtien += item.total_price;
        //set lại td
        htmls = `<td>${tempdonhang}</td>`;
        value_donhang.innerHTML = htmls;
        htmls = `<td>${temptongtien}</td>`;
        value_tongtien.innerHTML = htmls; 
      }
  })
}
showThongKe(2022);
const cb_thongke = document.querySelector(".cb_thongke");
 cb_thongke.onclick = function() {
    htmls =`<tr>
    <td>1</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>2</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>3</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>4</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>5</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>6</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>7</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>8</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>9</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>10</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>11</td>
    <td>0</td>
    <td>0</td>
</tr>
<tr>
    <td>12</td>
    <td>0</td>
    <td>0</td>
</tr>`;
    table_TK.innerHTML = htmls;
    showThongKe(cb_thongke.value);
 }