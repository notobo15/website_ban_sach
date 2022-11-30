const titleRange = document.querySelector(".toolbar__search-range-title span");
const searchRange = document.querySelectorAll(
  ".toolbar__search-range-list div"
);
const btnBack = document.querySelector(".controler");
console.log(btnBack);
function toolbar(listItem, title) {
  console.log(title);
  title.textContent = title.getAttribute("value");
  function handleActive() {
    for (const i of listItem) {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
    }
  }
  handleActive();

  listItem.forEach((item) => {
    item.addEventListener("click", () => {
      handleActive();
      item.classList.add("active");
      title.textContent = item.textContent;
    });
    item.removeEventListener("click", handleActive);
  });
}
const titleFilter = document.querySelector(
  ".toolbar__search-filter-title span"
);
const searchFilter = document.querySelectorAll(
  ".toolbar__search-filter-list div"
);
toolbar(searchRange, titleRange);
toolbar(searchFilter, titleFilter);

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
const inputSearch = document.querySelector(".header__search__input");
const btnSearchSubmit = document.querySelector(".header__search__btn");
const container_header = document.querySelector(".container-header");
let searchItems = [];
let searchCategory = [];
function renderDataSearch(arr) {
  current_page = 1;
  DisplayList(arr, rows, current_page);
  SetupPagination(arr, pagination_element, rows);
  console.log(container_header);
  container_header.innerHTML = `Có ${arr.length} kết quả tìm kiếm`;
}
btnSearchSubmit.addEventListener("click", () => {
  Banner("disable");
  products_list("disable");
  toolbar(searchRange, titleRange);
  toolbar(searchFilter, titleFilter);
  btnBack.classList.add("show");
  const inputSearchValue = toNonAccentVietnamese(inputSearch.value);
  console.log(inputSearchValue);
  const search = books.filter((item) => {
    return toNonAccentVietnamese(item.title)
      .toLowerCase()
      .includes(inputSearchValue.toLowerCase());
  });
  searchItems = search;
  console.log(searchItems);
  if (searchItems.length == 0) {
    container_content.style.display = "flex";
    pagination_element.style.display = "none";
    container_header.innerHTML = "";
    toolbarForm.style.display = "none";
    container_content.innerHTML = `
        <div class="search__no-result-found">
            <p>Xin lỗi 😔 không có kểt quả với:<h3>${inputSearchValue}</h3></p>
            <img class="search__no-result-found__img" src="./images/no_result_found.png" alt="">
        </div>
      `;
  } else {
    toolbarForm.style.display = "flex";
    const btnSearch = document.querySelector(".toolbar__search-icon");
    container_content.style.display = "flex";
    pagination_element.style.display = "flex";
    renderDataSearch(searchItems);

    // toolbar.style.display = "flex";
  }
});
inputSearch.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    btnSearchSubmit.click();
  }
});
btnBack.addEventListener("click", () => {
  Banner("show");
  products_list("show");
  btnBack.classList.remove("show");
  document.querySelector(".container-header").display = "none";
  inputSearch.value = "";
  toolbarForm.style.display = "none";
  container_content.style.display = "none";
  pagination_element.style.display = "none";
  document.querySelector(".container-header").style.display = "none";
});
const categoryList = document.querySelectorAll(".toolbar__search-range-item");
categoryList.forEach((item) => {
  item.addEventListener("click", () => {
    category = item.getAttribute("value");
    console.log(category);
    searchCategory = searchItems.filter((item) => {
      if (category == "full_books") {
        return item;
      } else {
        return item.category == category;
      }
    });
    // searchItems = searchCategory;
    console.log(searchCategory);
    renderDataSearch(searchCategory);
  });
});
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
const rangeUp = document.querySelector(".toolbar__search-range-item-up");
const rangeDown = document.querySelector(".toolbar__search-range-item-down");
rangeUp.addEventListener("click", () => {
  console.log(searchItems);
  searchItems.sort(sortNameUp);
  //searchCategory = search;

  renderDataSearch(searchItems);
});
rangeDown.addEventListener("click", () => {
  searchItems.sort(sortNameDown);
  //searchCategory = search;
  //console.log(search);
  console.log(searchItems);

  renderDataSearch(searchItems);
});

// const btnSearch = document.querySelector(".toolbar__search-icon");
const toolbarForm = document.querySelector(".toolbar__search");
toolbarForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchPrices = document.querySelectorAll(".price-range input");
  let min = searchPrices[0].value;
  let max = searchPrices[1].value;
  console.log(min, max);
  if (min >= max) {
    alert("khong hop le");
  } else {
    const search = searchItems.filter((book) => {
      return book.currentPrice >= min && book.currentPrice <= max;
    });
    renderDataSearch(search);
  }
});

/* const search = books.sort(sortNameUp).filter((book) => {
  return (
    book.currentPrice >= min &&
    book.currentPrice <= max &&
    book.category == category
  );
}); */

// inputSearch.addEventListener("keydown", (e) => {
//   if (e.keyCode == 13) {
//     btnSearchSubmit.click();
//   }
// });
// let category = "full_books";
// const categoryList = document.querySelectorAll(".toolbar__search-range-item");
// console.log(categoryList);
// categoryList.forEach((item) => {
//   item.addEventListener("click", () => {
//     category = item.getAttribute("value");
//   });
// });
// let isRangeUp = true;
// const toolbarForm = document.querySelector(".toolbar__search");
// const toolbarMessage = document.querySelector(".toolbar__search-message");
// toolbarForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const searchPrices = document.querySelectorAll(".price-range input");
//   const rangeUp = document.querySelector(".toolbar__search-range-item-up");
//   const rangeDown = document.querySelector(".toolbar__search-range-item-down");
//   rangeUp.addEventListener("click", () => {
//     isRangeUp = true;
//   });
//   rangeDown.addEventListener("click", () => {
//     isRangeUp = false;
//   });
//   let min = searchPrices[0].value;
//   let max = searchPrices[1].value;
//   const search = books.sort(sortNameUp).filter((book) => {
//     return (
//       book.currentPrice >= min &&
//       book.currentPrice <= max &&
//       book.category == category
//     );
//   });
//   console.log(search);
//   if (min > max || search.length == 0) {
//     DisplayList([], rows, current_page);
//     SetupPagination([], pagination_element, rows);
//     toolbarMessage.style.display = "block";
//     toolbarMessage.innerHTML = `<h3>${"Vui lòng điền khoảng giá phù hợp hoặc không tìm thấy😥"}</h3>`;
//   } else {
//     // toolbarMessage.style.display = "none";
//     if (isRangeUp == true) {
//       toolbarMessage.style.display = "none";
//       /* const search = books.sort(sortNameUp).filter((book) => {
//           return book.currentPrice >= min && book.currentPrice <= max;
//         }); */
//       let searchResult = search.sort(sortNameUp).filter((book) => {
//         return book.currentPrice >= min && book.currentPrice <= max;
//       });
//       console.log(searchResult);
//       DisplayList(searchResult, rows, current_page);
//       SetupPagination(searchResult, pagination_element, rows);
//     } else {
//       const search = books.sort(sortNameDown).filter((book) => {
//         return book.currentPrice >= min && book.currentPrice <= max;
//       });
//       DisplayList(search, rows, current_page);
//       SetupPagination(search, pagination_element, rows);
//     }
//   }
// });
// btnSearchSubmit.addEventListener("click", (e) => {
//   const inputSearchValue = inputSearch.value;
//   console.log(inputSearchValue);
//   /*  */

//   let searchItems = books.filter((item) => {
//     return item.title
//       .toLocaleLowerCase()
//       .includes(inputSearchValue.toLocaleLowerCase());
//   });
//   console.log(searchItems);
//   Banner("disable");
//   products_list("disable");

//   if (searchItems.length == 0) {
//     container_content.innerHTML = `
//         <div class="search__no-result-found">
//             <p>Xin lỗi 😔 không có kểt quả với:<h3>${inputSearchValue}</h3></p>
//             <img class="search__no-result-found__img" src="./images/no_result_found.png" alt="">
//         </div>
//       `;
//     pagination_element.style.display = "none";
//     container_header.innerHTML = "";
//   } else {
//     toolbarForm.style.display = "flex";
//     const btnSearch = document.querySelector(".toolbar__search-icon");

//     // btnSearch.style.display = "none";
//     container_header.innerHTML = `Có ${searchItems.length} kết quả tìm kiếm với: <b>${inputSearchValue}</b>`;
//     container_content.style.display = "flex";
//     pagination_element.style.display = "flex";
//     DisplayList(searchItems, rows, current_page);
//     SetupPagination(searchItems, pagination_element, rows);

//     const btnB = document.querySelector(".controler");
//     btnB.addEventListener("click", () => {
//       Banner("show");
//       products_list("show");
//       inputSearch.value = "";
//       toolbarForm.style.display = "flex";
//       container_content.style.display = "none";
//       pagination_element.style.display = "none";
//       document.querySelector(".container-header").style.display = "none";
//     });
//   }
// });
// function sortNameUp(a, b) {
//   if (a.currentPrice < b.currentPrice) {
//     return -1;
//   }
//   if (a.currentPrice > b.currentPrice) {
//     return 1;
//   }
//   return 0;
// }

// function sortNameDown(a, b) {
//   if (a.currentPrice > b.currentPrice) {
//     return -1;
//   }
//   if (a.currentPrice < b.currentPrice) {
//     return 1;
//   }
//   return 0;
// }
