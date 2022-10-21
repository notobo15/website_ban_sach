function renderProducts(arrProducts, element, nameCategory) {
  let htmls = "";
  arrProducts.forEach((item) => {
    if (item.category == nameCategory) {
      htmls += `
      <div class="container__row-card" onclick="showItemDetail(${item.id})">
      <img src="${item.srcImg[0]}" alt="" />
      <div class="container__row-card-title">${item.title}</div>
      <div class="container__row-card-price">${item.currentPrice}</div>
    </div>
      `;
    }
  });
  let container = `
    <div class="container__row-header">
          <span class="container__row-header-heading"> Sách Mới</span>
          <span onclick="showAllProducts('${nameCategory}')" class="container__row-header-seeMore" >Xem tất cả</span>
        </div>

        <button class="container__row-btn-prev" >
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button class="container__row-btn-next" >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
        <div class="container__row-wrap-list">${htmls}</div>
    `;
  element.innerHTML = container;
}
function showAllProducts(nameCategory) {
  const banner = document.querySelector(".banner");
  const toolbar = document.querySelector(".toolbar__search");
  const container = document.querySelector(".container-content");
  const pagination_element = document.getElementById("pagination");
  const productContainer = document.querySelector(".product__container");
  const btnBack = document.querySelector(".controler");
  banner.style.display = "none";
  productContainer.style.display = "none";
  container.style.display = "flex";
  toolbar.style.display = "flex";
  pagination.style.display = "flex";
  window.scrollTo(0, 0);
  let current_page = 1;
  let rows = 5;

  //   DisplayList(books1, item, currentPage);
  //   SetupPagination(books1, pagination, item);
  DisplayList(books1, rows, current_page);
  SetupPagination(books1, pagination_element, rows, current_page);

  btnBack.addEventListener("click", () => {
    banner.style.display = "block";
    productContainer.style.display = "block";
    container.style.display = "none";
    toolbar.style.display = "none";
    pagination.style.display = "none";
  });
}

const productContaier = document.querySelectorAll(".container__row");
renderProducts(books, productContaier[0], "skill_books");
renderProducts(books, productContaier[1], "economic_books");
renderProducts(books, productContaier[2], "children_books");
