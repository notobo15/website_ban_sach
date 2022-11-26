var btn_subSP = document.querySelector(".btn_sanpham");
var show_sanpham = document.querySelector("nav ul .show_sanpham");
const btn_sanpham = document.querySelector(".btn_SP");
const btn_donhang = document.querySelector(".btn_Orders");
const btn_taikhoan = document.querySelector(".btn_User");
const btn_addSP = document.querySelector(".btn_addSP");
const pagenumber_SP = document.querySelector(".pagenumber");
btn_subSP.addEventListener("click", show);
// prevent FORM form reset
const prevent = (pre_ev) => {
  pre_ev.preventDefault();
}

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
// // Tạo biến Page
// let currentPage = 1;
// let perPage = 3;
// let totalPage = 0;
// let perBooks = [];
// let countPageNumber = 1;
// let StartPageNumber = 1;
// let EndPageNumber = 0;
// // đổ dữ liệu Sản Phẩm 
// function showSP(arr, tBody) {
//   let htmls = "";
//   var i = 0;
//   perBooks = books.slice(
//     (currentPage - 1) * perPage,
//     (currentPage - 1) * perPage + perPage
//   )
//   var temp = (currentPage - 1) * perPage;
//   perBooks.forEach((item) => {
//     htmls += `
//     <tr>
//     <td>${++temp}</td>
//     <td>${item.id}</td>
//     <td>${item.title}</td>
//     <td class="text">${item.description}</td>
//     <td>${item.currentPrice}đ</td>
//     <td>
//         <ul class="content_btn">
//           <li class="btn_Sua"><img src="./img/btn_Sua.png" alt=""></li>
//           <li class="btn_Xoa" onclick="return getIDSanPham(${item.id})"><img src="./img/btn_xoa.png" alt=""></li>
//         </ul>
//     </td>
//     </tr>
//   `;
//   });
//   htmls += `<br></br><br></br>`;
//   tBody.innerHTML = htmls;
// }
// showSP(books, SPTbody);

// //Tạo số trang
// function renderPageNumber(arr) {
//   let htmls = "";
//   htmls += `
//   <li class="pagenumber_item" onclick="backRenderPageNumber()">
//       <a href="#" class="pagenumber_item_link fa fa-angle-left"></a>
//   </li>
//   `;
//   totalPage = arr.length / perPage;
//   if (totalPage >= 5 && (StartPageNumber + 4) < totalPage) {
//     countPageNumber = StartPageNumber;
//     for (let i = countPageNumber; i <= (countPageNumber + 4); i++) {
//       htmls += `
//     <li class="pagenumber_item" onclick="handlePageNumber(${i})">
//       <a href="#" class="pagenumber_item_link">${i}</a>
//     </li>
//     `;
//       EndPageNumber = i;
//     }
//   }
//   else {
//     countPageNumber = StartPageNumber;
//     for (let i = countPageNumber; i <= totalPage; i++) {
//       htmls += `
//     <li class="pagenumber_item" onclick="handlePageNumber(${i})">
//       <a href="#" class="pagenumber_item_link">${i}</a>
//     </li>
//     `
//     }
//   }
//   htmls += `
//     <li class="pagenumber_item" onclick="nextRenderPageNumber()">
//       <a href="#" class="pagenumber_item_link fa fa-angle-right" id="angle_right"></a>
//     </li>
//   `;
//   pagenumber_SP.innerHTML = htmls;
// }
// renderPageNumber(books);
// //Set angle button
// function nextRenderPageNumber(arr) {
//   StartPageNumber = EndPageNumber;
//   renderPageNumber(books);
// }
// function backRenderPageNumber(arr) {
//   if (StartPageNumber >= 5) {
//     StartPageNumber -= 4;
//   }
//   else {
//     StartPageNumber = 1;
//   }
//   renderPageNumber(books);
// }
// //Đổ dữ liệu từng trang
// function handlePageNumber(num) {
//   currentPage = num
//   perBooks = books.slice(
//     (currentPage - 1) * perPage,
//     (currentPage - 1) * perPage + perPage
//   )
//   showSP(books, SPTbody);
// }
//temp Do du lieu SP
function showSP(arr, tBody) {
  let list_Books = localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")) : [];
  if (localStorage.getItem("list-books") == null) {
    books.forEach((item) => {
      list_Books.push(item);
    });
    localStorage.setItem("list-books", JSON.stringify(list_Books));
  }
  let htmls = "";
  arr.forEach((item, indx) => {
    htmls +=
      `
      <tr>
      <td>${++indx}</td>
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td class="text">${item.description}</td>
      <td>${item.currentPrice}đ</td>
      <td>
          <ul class="content_btn">
            <li class="btn_Sua"><img src="./img/btn_Sua.png" alt=""></li>
            <li class="btn_Xoa" onclick="return xoaSPtheoID(${item.id})"><img src="./img/btn_xoa.png" alt=""></li>
          </ul>
      </td>
      </tr>
    `;
  })
  tBody.innerHTML = htmls;
}
showSP(books, SPTbody)
// đổ dữ liệu User
function showUser(arr, tBody) {
  let htmls = "";
  arr.forEach((item, indx) => {
    htmls +=
      `
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
  })
  tBody.innerHTML = htmls;
}
showUser(usersAccount, UserTbody);
//Đổ dữ liệu Đơn Hàng
function showOrder(_arr, tBody) {
  let htmls = "";
  ordersUsers.forEach((item, indx) => {
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
    <td><input type="checkbox" name="confirm" ${(item.isConfirm == true) ? "checked" : ""} </td>
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
const input_TenTG = document.getElementById("input_TenTG")
const input_GiaSP_bandau = document.getElementById("input_GiaSP_bandau");
const input_GiaSP_banra = document.getElementById("input_GiaSP_banra");
const txtArea_ChiTiet = document.getElementById("txtArea_ChiTiet");
const btn__addImage_SP = document.querySelector(".btn__addImage_SP");
const div_add_Img_input = document.querySelector(".add_Img_input");
const input_LinkImg = document.querySelector("#linkImg");

btn__addImage_SP.onclick = function () {
  div_add_Img_input.style.display = "block";
  btn__addImage_SP.disabled = true;
}

function addSP() {
  let list_Books = localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")) : [];
  list_Books.push({
    id: input_MaSP.value,
    category: input_LoaiSP.value,
    author: input_TenTG.value,
    shortName: input_TenSP.value,
    price: input_GiaSP_bandau.value,
    currentPrice: input_GiaSP_banra.value,
    description: txtArea_ChiTiet.value
  });
  localStorage.setItem("list-books", JSON.stringify(list_Books));
}

function renderSanPham() {
  // console.log(books);
  const temp = [];
  let list_Books = localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")) : [];
  // Đổ hai mảng vào 2 mảng tạm
  list_Books.forEach((item) => {
    temp.push(item);
  })
  books = temp;
  console.log(books);
  showSP(books, SPTbody);
}



// phải đủ 3 sản phẩm 1 trang thì hệ thống mới render.
// ví dụ trang đang có 3 sp thứ tự 1 2 3 thì phải thêm  .
// thì phải thêm sản phẩm thứ tự 4 5 6 thì hệ thống mới render show sản phẩm.


btn_XacNhan_Add_SP.onclick = function () {
  // console.log(books);
  addSP();
  renderSanPham();
  document.forms[0].reset();  // setText = "" for all input in form "form_add_sanpham".
}
// Xóa sản phẩm.
const btn_XoaSP = document.querySelector(".btn_Xoa");
console.log(btn_XoaSP);
//f5 là làm mới và không mất những gì đã xóa
// function getIDSanPham(id) {
//   console.log(id);
//   let list_Books =  localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")) : [];
//   var temp_needDelete = [];
//   var _deleted = [];

//   books.forEach((item) =>{
//     temp_needDelete.push(item);
//   });
//   list_Books.forEach((item) => {
//     temp_needDelete.push(item);
//   });

//   let isConfirm = confirm("YES");
//   if (isConfirm == true) {
//     console.log(isConfirm);
//     temp_needDelete.forEach((item)=>{
//       if(item.id != id){
//         console.log(id);
//         _deleted.push(item);
//       }
//     });
//     console.log(temp_needDelete);
//     console.log(_deleted);
//     showSP(_deleted,SPTbody);
//   }
// }

//F5 là làm mới và mất những gì đã xóa
function xoaSPtheoID(id) {
  const tempDelete = []; // mảng tạm chuẩn bị xóa 
  const tempDeleted = [];// mảng tạm đã xóa
  console.log(id);
  let list_Books = localStorage.getItem("list-books") ? JSON.parse(localStorage.getItem("list-books")) : [];
  list_Books.forEach((item)=>{
    tempDelete.push(item);
  });
  // nếu đồng ý xóa thì thực hiện 
  let isConfirm = confirm("YES");
  if (isConfirm == true) {
   tempDelete.forEach((item) => {
      if(item.id != id){
        tempDeleted.push(item);
      }
   })
   books = tempDeleted;
   showSP(books, SPTbody);
   //đổ dữ liệu đã xóa lên ls
   localStorage.setItem("list-books", JSON.stringify(tempDeleted));
  }
}
