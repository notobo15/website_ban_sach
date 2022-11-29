let numberItems = 10;
books = JSON.parse(localStorage.getItem("books"));
function renderProducts(arrProducts, element, nameCategory) {
  let htmls = "";
  let i = 0;
  let filterList = arrProducts.filter((item) => {
    if (item.category == nameCategory && i < numberItems) {
      i++;
      return item;
    }
  });
  filterList.forEach((item) => {
    //if (item.category == nameCategory) {
    htmls += `
      <div class="container__row-card" onclick="showItemDetail(${item.id})">
        <div class="product__price--percent"><p>${Math.floor(
          ((item.price - item.currentPrice) * 100) / item.price
        )}%<p></div>
        <img src="${item.srcImg[0]}" />
        <div class="container__row-card-title">${item.title}</div>
        <div class="card__footer">
          <div class="card__item__Price">${numbertoVND(item.price)}</div>
          <div class="container__row-card-price">${numbertoVND(
            item.currentPrice
          )}</div>
        </div>
    </div>
      `;
    //}
  });
  function header(str) {
    let heading;
    if (str == "skill_books") heading = "Sách Kĩ Năng";
    else if (str == "economic_books") heading = "Sách Kinh Tế";
    else if (str == "children_books") heading = "Sách Trẻ Em";
    else if (str == "full_books") heading = "all";
    return heading;
  }
  let container = `
    <div class="container__row-header">
          <span class="container__row-header-heading">${header(
            nameCategory
          )}</span>
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
  btnSearchSubmit.click();
  categoryList.forEach((item) => {
    if (item.getAttribute("value") == nameCategory) item.click();
  });
  window.scrollTo(0, 0);
}
const productContaier = document.querySelectorAll(".container__row");

renderProducts(books, productContaier[0], "skill_books");
renderProducts(books, productContaier[1], "economic_books");
renderProducts(books, productContaier[2], "children_books");
