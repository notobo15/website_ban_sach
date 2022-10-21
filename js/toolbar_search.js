const titleRange = document.querySelector(".toolbar__search-range-title span");
const searchRange = document.querySelectorAll(
  ".toolbar__search-range-list div"
);
toolbar(searchRange, titleRange);

const titleFilter = document.querySelector(
  ".toolbar__search-filter-title span"
);
const searchFilter = document.querySelectorAll(
  ".toolbar__search-filter-list div"
);
toolbar(searchFilter, titleFilter);
console.log(searchFilter);
function toolbar(listItem, title) {
  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      for (const i of listItem) {
        if (i.classList.contains("active")) {
          i.classList.remove("active");
        }
      }
      item.classList.add("active");
      title.innerText = item.innerText;
    });
  });
}
/* searchRange.forEach((item) => {
    item.addEventListener("click", () => {
      for (const i of searchRange) { 
        if (i.classList.contains("active")) {
          i.classList.remove("active");
        }
      }
      item.classList.add("active");
    });
  }); */

function sortNameUp(a, b) {
  if (a.currentPrice < b.currentPrice) {
    return -1;
  }
  if (a.currentPrice > b.currentPrice) {
    return 1;
  }
  return 0;
}
function sortNameDown(a, b) {
  if (a.currentPrice > b.currentPrice) {
    return -1;
  }
  if (a.currentPrice < b.currentPrice) {
    return 1;
  }
  return 0;
}
let isRangeUp = true;
const toolbarForm = document.querySelector(".toolbar__search");
const toolbarMessage = document.querySelector(".toolbar__search-message");
toolbarForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchPrices = document.querySelectorAll(".price-range input");
  const rangeUp = document.querySelector(".toolbar__search-range-item-up");
  const rangeDown = document.querySelector(".toolbar__search-range-item-down");
  rangeUp.addEventListener("click", () => {
    isRangeUp = true;
  });
  rangeDown.addEventListener("click", () => {
    isRangeUp = false;
  });
  let min = searchPrices[0].value;
  let max = searchPrices[1].value;
  const search = books.sort(sortNameUp).filter((book) => {
    return book.currentPrice >= min && book.currentPrice <= max;
  });
  if (min > max || search.length === 0) {
    DisplayList([], rows, current_page);
    SetupPagination([], pagination_element, rows);
    toolbarMessage.style.display = "block";
    toolbarMessage.innerHTML = `<h3>${"Vui lòng điền khoảng giá phù hợp hoặc không tìm thấy😥"}</h3>`;
  } else {
    toolbarMessage.style.display = "none";
    if (isRangeUp === true) {
      const search = books.sort(sortNameUp).filter((book) => {
        return book.currentPrice >= min && book.currentPrice <= max;
      });
      console.log(search);
      DisplayList(search, rows, current_page);
      SetupPagination(search, pagination_element, rows);
    } else {
      const search = books.sort(sortNameDown).filter((book) => {
        return book.currentPrice >= min && book.currentPrice <= max;
      });
      console.log(search);
      DisplayList(search, rows, current_page);
      SetupPagination(search, pagination_element, rows);
    }
  }
});
