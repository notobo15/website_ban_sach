const books = [
  {
    id: 1,
    author: "",
    title:
      "Muốn Thành Công Nói Không Với Trì Hoãn – 21 Nguyên Tắc Vàng Đập Tan Sự Trì Hoãn",
    srcImg: [
      "./Images/books/1.jpg",
      "./Images/books/1_1.jpg",
      "./Images/books/1_2.jpg",
      "./Images/books/1_3.jpg",
      "./Images/books/1_4.jpg",
    ],
    price: "85.200đ",
    currentPrice: "50.000đ",
    description: "",
  },
  {
    id: 2,
    author: "",
    title: "Thiên Tài Bên Trái, Kẻ Điên Bên Phải faf fasd(Tái Bản)",
    srcImg: [
      "./Images/books/2.jpg",
      "./Images/books/2.jpg",
      "./Images/books/3.jpg",
      "./Images/books/4.jpg",
      "./Images/books/5.jpg",
    ],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 3,
    author: "Damon Zahariades",
    title:
      "Muốn Thành Công Nói Không Với Trì Hoãn – 21 Nguyên Tắc Vàng Đập Tan Sự Trì Hoãn",
    srcImg: [
      "./Images/books/3.jpg",
      "./Images/books/4.jpg",
      "./Images/books/4.jpg",
    ],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 4,
    author: "Matthew Pollard, Derek Lewis",
    title: "Nghệ Thuật Bán Hàng Của Người Hướng Nội",
    srcImg: ["./Images/books/4.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 5,
    author: "Stephen R. Covey",
    title:
      "7 Thói Quen Hiệu Quả (The 7 Habits Of Highly Effective People) (Tái Bản)",
    srcImg: ["./Images/books/5.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 6,
    author: "Trác Nhã",
    title: "Khéo Ăn Nói Sẽ Có Được Thiên Hạ ( Tái Bản )",
    srcImg: ["./Images/books/6.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 7,
    author: "Adam Khoo",
    title: "Tôi Tài Giỏi - Bạn Cũng Thế (Tái Bản 2020)",
    srcImg: ["./Images/books/7.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
    description: "",
  },
  {
    id: 8,
    author: "Gino Wickman, Mark C. Winters",
    title: "Người Có Tầm Nhìn, Kẻ Biết Hành Động",
    srcImg: ["./Images/books/8.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 9,
    author: "Nancy Duarte",
    title: "HBR Guide To – Trình Bày Thuyết Phục (Tái Bản 2018)",
    srcImg: ["./Images/books/9.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 10,
    author: "Prakash Iyer",
    title: "Thói Quen Của Kẻ Thắng (Tái Bản 2018)",
    srcImg: ["./Images/books/10.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 11,
    author: "Zoe McKey",
    title: "Tư Duy Phản Biện",
    srcImg: ["./Images/books/11.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 12,
    author: "Scott H.Young",
    title: "Rèn Luyện Kỹ Năng Phát Triển Bản Thân",
    srcImg: ["./Images/books/12.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 13,
    author: "nhieu tac gia",
    title: "Thao túng tâm lý",
    srcImg: ["./Images/books/13.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
    description: "",
  },
  {
    id: 14,
    author: "Carol S. Dweck",
    title: "Tâm Lý Học Thành Công",
    srcImg: ["./Images/books/14.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 15,
    author: "Eran Katz",
    title: "Trí Tuệ Do Thái (Tái Bản 2018)",
    srcImg: ["./Images/books/15.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
  {
    id: 16,
    author: "Tạ Quốc Kế",
    title: "Điềm Tĩnh Và Nóng Giận",
    srcImg: ["./Images/books/16.jpg", "./Images/books/1.jpg"],
    price: "85.200đ",
    currentPrice: "50.000đ",
  },
];

const container_content = document.querySelector(".container-content");
const pagination_element = document.getElementById("pagination");
console.log(container_content);
let current_page = 1;
let rows = 5;

function DisplayList(items, rows_per_page, page) {
  // wrapper.innerHTML = "";
  page--;

  let start = rows_per_page * page;
  let end = start + rows_per_page;

  let paginatedItems = items.slice(start, end);
  console.log(paginatedItems);
  /* for (let i = 0; i < paginatedItems.length; i++) {
    let item = paginatedItems[i];

    // let item_element = document.createElement("div");
    // item_element.classList.add("item");
    // item_element.innerText = item;

    // wrapper.appendChild(item_element);
  } */

  renderData(paginatedItems);
}
/* ======================== */
function renderData(dataArr) {
  const container = document.querySelector(".container-content");
  let htmls = "";
  dataArr.forEach((item) => {
    htmls += `<div class="card element${item.id}" onclick="showItemDetail(${item.id})"  >
                <img class="card__img" src="${item.srcImg[0]}" />  
                <div class="card__title">${item.title}</div>
                <div class="card__price">${item.currentPrice}</div>
              </div>
        `;
  });
  return (container.innerHTML = htmls);
}
/* ======================== */
function SetupPagination(items, wrapper, rows_per_page) {
  wrapper.innerHTML = "";

  let buttonPrev = document.createElement("button");
  let buttonNext = document.createElement("button");
  buttonPrev.innerText = "<";
  buttonNext.innerText = ">";
  wrapper.appendChild(buttonPrev);

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
    let btn = PaginationButton(i, items);
    console.log(btn);
    wrapper.appendChild(btn);
  }
  wrapper.appendChild(buttonNext);
  buttonPrev.addEventListener("click", () => {});
  buttonNext.addEventListener("click", () => {});
}

function PaginationButton(page, items) {
  let button = document.createElement("button");
  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;

    DisplayList(items, rows, current_page);

    let current_btn = document.querySelector(".pagenumbers button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
}
/* goi ham */
DisplayList(books, rows, current_page);
SetupPagination(books, pagination_element, rows);

function changeImg(srcImg) {
  let imgPath = document.querySelector(".modal-body-left .card__img");
  imgPath.setAttribute("src", srcImg);
}

function showItemDetail(id) {
  let books = JSON.parse(localStorage.getItem("books"));
  let itemData = books.forEach((item) => {
    if (item.id === id) {
      const e = document.querySelector(".element" + id);
      const modal_container = document.querySelector("#modal-container");

      let htmls = `
        <div id="modal">
          <div class="modal-header">
            <p class="btn-close">
              <i class="fa-solid fa-xmark"> </i>
            </p>
            </div>
            <div class="modal-body">
              <div class="modal-body-left">
              <img class="card__img" src="${item.srcImg[0]}" />  
              <div class="modal__img-list">
              </div>
            </div>

            <div class="modal-body-right">
            

            <div class="card__title">${item.title}</div>
              <p class="card__author">Tác giả: ${item.author}</p>
              <div>
                <div class="card__currentPrice">${item.currentPrice}</div>
                <div class="card__price">${item.price}</div>
              </div>
              <p>Số Lượng</p>
              <div class="card__quantityInput">
              <button><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="remove-icon"></button>
              <input type="text" class="" value="1">
              <button><img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="add-icon"></button>
              
              </div>
              <button class="btn-add-to-cart" onclick="getIdCart(${item.id})">Thêm vào giỏ hàng</button>
          </div>

          </div>
          </div>
          <div class="modal-overlay"></div>
        `;
      modal_container.innerHTML = htmls;
      getSrcImg(item);
      const overlay = document.querySelector(".modal-overlay");
      const modal = document.querySelector("#modal");
      const body = document.querySelector("html");
      overlay.classList.add("show");
      modal.classList.add("show");
      // body.classList.add("show");
      modal.style.top = 20 + pageYOffset + "px";

      const btn_close = document.querySelector(".btn-close");
      btn_close.addEventListener("click", () => {
        overlay.classList.remove("show");
        modal.classList.remove("show");
        // body.classList.remove("show");
      });

      overlay.addEventListener("click", () => {
        overlay.classList.remove("show");
        modal.classList.remove("show");
        // body.classList.remove("show");
      });
    }
  });
}
function getSrcImg(item) {
  const img_list = document.querySelector(".modal__img-list");
  let htmls = "";
  item.srcImg.forEach((img, index) => {
    return (htmls += `
      <img class="card__img" src="${img.srcImg[index]}" onclick="changeImg('${item.srcImg[index]}')"/>  
    `);
  });
  img_list.innerHTML = htmls;
}
