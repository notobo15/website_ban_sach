/* const productContainer = [
  ...document.querySelectorAll(".container__row-wrap-list"),
];
const btnPrev = [...document.querySelectorAll(".container__row-btn-prev")];
const btnNext = [...document.querySelectorAll(".container__row-btn-next")];

const card = productContainer[0].querySelector(".container__row-card");
let cardWidth = card.getBoundingClientRect().width;
productContainer.forEach((item, i) => {
  let Width = productContainer[i].style.width;

  let containerDimentions = item.getBoundingClientRect();
  console.log(containerDimentions);
  // let a = item.getBoundingClientRect();
  let containerWidth = containerDimentions.width;
  // let containerFixed = containerDimentions.width;
  let tiLe = Math.floor(containerWidth / cardWidth);

  //  window.addEventListener("resize", () => {
  //   item.scrollLeft = 0;
  //   containerDimentions = item.getBoundingClientRect();
  //   containerWidth = containerDimentions.width;
  //   cardWidth = card.getBoundingClientRect().width;
  //   tiLe = Math.floor(containerWidth / cardWidth);
  //   console.log(tiLe);
  //   console.log(containerWidth);
  //   console.log(cardWidth);
  // });

  btnPrev[i].addEventListener("click", () => {
    if (item.scrollLeft <= 0) {
      item.scrollLeft = cardWidth * 10;
    } else {
      console.log(item.scrollLeft);

      item.scrollLeft -= Math.ceil(containerWidth / tiLe);
    }
  });

  btnNext[i].addEventListener("click", () => {
    console.log(item.scrollLeft);
    if (item.scrollLeft - cardWidth * 2 >= containerWidth) {
      item.scrollLeft = 0;
    } else {
      item.scrollLeft += Math.ceil(containerWidth / tiLe);
    }
  });
}); */

const productContainer = [
  ...document.querySelectorAll(".container__row-wrap-list"),
];
const btnPrev = [...document.querySelectorAll(".container__row-btn-prev")];
const btnNext = [...document.querySelectorAll(".container__row-btn-next")];
const card = document.querySelector(".container__row-card");
let cardWidth = Math.floor(card.getBoundingClientRect().width);
let containerWidth = productContainer[0].getBoundingClientRect().width;
let tile = Math.floor(containerWidth / cardWidth);
let numberItem = 5;

productContainer.forEach((item, i) => {
  window.addEventListener("resize", () => {
    productContainer[i].scrollLeft = 0;
    cardWidth = Math.ceil(card.getBoundingClientRect().width);
    containerWidth = productContainer[0].getBoundingClientRect().width;
    tile = Math.floor(containerWidth / cardWidth);
  });
  btnNext[i].addEventListener("click", () => {
    if (
      productContainer[i].scrollLeft >=
      Math.ceil(containerWidth / tile) * numberItem
    ) {
      productContainer[i].scrollLeft = 0;
    } else {
      console.log(productContainer[i].scrollLeft);
      productContainer[i].scrollLeft += Math.ceil(containerWidth / tile);
      currentScroll = productContainer[i].scrollLeft;
    }
  });
  btnPrev[i].addEventListener("click", () => {
    if (productContainer[i].scrollLeft <= 0) {
      productContainer[i].scrollLeft =
        Math.ceil(containerWidth / tile) * numberItem;
    } else {
      productContainer[i].scrollLeft -= Math.ceil(containerWidth / tile);
      /*   console.log(item.scrollLeft);
    item.scrollLeft -= Math.ceil(containerWidth / tiLe); */
    }
  });
});
