let userCart = [];

console.log(userCart);
const itemsCart = document.querySelector(".list__cart");
const cartBtnClose = document.querySelector(".cart__btnClose");
const cartOverlay = document.querySelector(".cart__overlay");
const cart = document.querySelector(".cart");
const cartItems = document.querySelector(".cart__items");
const cartItemList = document.querySelector(".cart__items");

const cartCount = document.querySelector(".cart__counter");

// console.log(itemsCart);
// console.log(cartBtnClose);
// console.log(cart);
// console.log(cartItems);
cart.addEventListener("click", () => {
  itemsCart.classList.toggle("show");
  cartOverlay.classList.toggle("show");
});
cartBtnClose.addEventListener("click", () => {
  cart.click();
});
cartOverlay.addEventListener("click", () => {
  cart.click();
});
let ordersById = [];
if (localStorage.getItem("orders") == null) {
  localStorage.setItem("orders", JSON.stringify([]));
}
function getIdCart(id) {
  const input = document.querySelector(".cart__input__quantity");
  const btnReduce = document.querySelector(".cart__btn__down");
  const inpuRaise = document.querySelector(".cart__btn__up");

  /*   btnReduce.addEventListener("click", () => {
    input.value--;
    console.log(ordersById);
  });
  inpuRaise.addEventListener("click", () => {
    input.value++;
    console.log(ordersById);
  }); */
  let productsUser = {
    id: id,
    quantity: +input.value,
  };
  ordersById.push(productsUser);
  // console.log(ordersById);
  const b = books.filter((item) => {
    return ordersById.find((pro) => {
      item.quantity = pro.quantity;
      return pro.id === item.id;
    });
  });
  // console.log(b);
  var cartItem = books.find((item) => {
    return item.id === id;
  });
  let duplicateCheck = userCart.some((item) => {
    return item.id === cartItem.id;
  });
  // console.log(userCart);
  if (userCart.length === 0 || duplicateCheck === false) {
    // cartItem.quantity = quantity;
    userCart.push(cartItem);
  }
  const cartCount = document.querySelector(".cart__counter");
  cartCount.innerHTML = userCart.length;
  const noCart = document.querySelector(".cart__noCart");

  if (userCart.length > 0) {
    noCart.classList.add("disable");
    // noCart.classList.add("show");
    cartItems.classList.add("show");
  }

  renderCart(b);

  const modal = document.querySelector("#modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  modal.classList.remove("show");
  modalOverlay.classList.remove("show");

  /* const a = books.filter((item) => {
    for (const i of ordersById) {
      if (i.id === item.id) {
        item.quantity = i.quantity;
        return i.id === item.id;
      }
    }
  }); */
  /* const b = ordersById.forEach((item) => {
    let user = books.find((book) => {
      return book.id === item.id;
    });
  }); */

  /*   const btnsCounter = document.querySelectorAll(".cart__item__quantity button");
  const inputCart = document.querySelector(".cart__input");
  let e = document.querySelector(".cart__total p"); */

  /* quantityCounter(
    btnsCounter[0],
    inputCart,
    btnsCounter[1],
    cartItem,
    userCart,
    e
  ); */

  /*   userCart.push(a);
  console.log(a);
  console.log(userCart); */

  const btnOrder = document.querySelector(".cart__btnOrder");
  btnOrder.addEventListener("click", () => {
    if (localStorage.getItem("userLoginCurrent") == null) {
      alert("Dăng nhập để đặt hàng");
      cartBtnClose.click();
      log;
    } else {
      alert("Đặt hàng thành công");
      cartCount.innerHTML = 0;
      let date = new Date();
      let dateOrder = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      console.log(userCart);
      // c(userCart, dateOrder);
      console.log(ordersById);
      let orderID = 1;
      let productDetails = "";
      userCart.forEach((item) => {
        return (productDetails += `${item.title}(x${item.quantity})<br/>`);
      });
      const p = userCart.reduce((total, item) => {
        return (total += item.currentPrice * item.quantity);
      }, 0);
      // console.log(p);
      // console.log(productDetails);
      let info = JSON.parse(localStorage.getItem("info"));
      let infoAcc = JSON.parse(localStorage.getItem("userLoginCurrent"));
      console.log(info);
      /*   */
      const order = {
        order_id: orderID++,
        details: productDetails,
        user_name: infoAcc.user_name,
        full_name: `${info.lastName} ${info.firstName}`,
        phone: info.phone,
        order_date: dateOrder,
        address_delivery: "Giao Hàng Nhanh",
        total_price: p,
        isConfirm: "false",
      };
      const orderAll = JSON.parse(localStorage.getItem("orders"));
      orderAll.push(order);
      localStorage.setItem("orders", JSON.stringify(orderAll));
      userCart = [];
      ordersById = [];
      cartItems.innerHTML = "";
      noCart.classList.remove("disable");
      cartItemList.classList.remove("show");
      cart.click();
    }
  });
}

/* function price(e, userCart) {
  if (e !== undefined) {
    // e.innerHTML = numbertoVND(renderMoneyCurrent(userCart));
    console.log(userCart);
    console.log(renderMoneyCurrent(userCart));
    e.innerHTML = renderMoneyCurrent(userCart);
  }
} */
/* function quantityCounter(btnDown, input, btnUp, item, listItem, element) {
  console.log(item["quantityCounter"]);
  if (item["quantityCounter"] === undefined) {
    item["quantityCounter"] = 1;
  }

  btnDown.addEventListener("click", () => {
    --input.value;
    --item.quantityCounter;
    if (element !== undefined) {
      element.innerHTML = numbertoVND(renderMoneyCurrent(listItem));
    }
  });
  btnUp.addEventListener("click", () => {
    ++input.value;
    ++item.quantityCounter;
    if (element !== undefined) {
      element.innerHTML = numbertoVND(renderMoneyCurrent(listItem));
    }
  });
} */
function deleteItem(eDelete, id) {
  /*   console.log(userCart.length);
  console.log(cartCount); */
  let confirmDelete = confirm("Bạn có chắc chắn muốn xóa");
  if (confirmDelete === true) {
    eDelete.parentNode.remove();
    let index = userCart.forEach((i, indx) => {
      if (i.id === id) {
        console.log(indx);
        userCart.splice(indx, 1);
        cartCount.innerText = userCart.length;
      }
    });
    let e = document.querySelector(".cart__total p");
    e.innerHTML = numbertoVND(renderMoneyCurrent(userCart));
    if (userCart.length === 0) {
      const noCart = document.querySelector(".cart__noCart");
      const footer = document.querySelector(".cart__footer");
      noCart.classList.remove("disable");
      footer.classList.add("disable");
    }
  }
}
// let quantity = 1;
/* function counterUp(e, id) {
  // let ele = document.querySelector(".cart__total > p");
  // price(ele, userCart);
  if (quantity >= 1) {
    quantity++;
    let input = e.previousElementSibling;
    input.value++;
    price();
  } else {
    quantity = 1;
  }
} */
/* function counterDown(e, id) {
  if (quantity > 1) {
    quantity--;
    let input = e.nextElementSibling;
    input.value--;
    price();
  } else {
    quantity = 1;
  }
} */
function renderMoneyCurrent(list) {
  let moneyTotal = 0;
  if (list !== undefined) {
    list.forEach((item) => {
      moneyTotal += item.currentPrice * item.quantityCounter;
    });
  }
  return moneyTotal;
}

function renderCart(userCart) {
  let moneyCount = 0;
  let htmls = "";
  userCart.forEach((item, index) => {
    moneyCount += item.currentPrice * item.quantity;
    htmls += `
      <div class="cart__item">
      <img class="cart__item__img" src="${item.srcImg[0]}" alt="" />
      <div class="cart__item__title">
      ${item.title}
      </div>
      <div class="cart__item__quantity">
        <button class="cart__btn-down">
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
            alt="remove-icon"
          />
        </button>
        <input type="text" class="cart__input" value="${item.quantity}" />
        <button class="cart__btn-up">
          <img
            src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
            alt="add-icon"
          />
        </button>
      </div>

      <div class="cart__item__price"> ${numbertoVND(item.currentPrice)}</div>
      
      <div class="cart__item__trash" onclick="deleteItem(this, ${item.id})">
        <i class="fa-solid fa-delete-left"></i>
      </div>  
      </div>
 `;

    //  itemsCart.style.top = 15 + pageYOffset + "px";
  });
  //<p>${numberWithCommas(numbertoVND(moneyCount))}</p>
  let cartFooter = `<div class="cart__footer">
  <div class="cart__total">
    <div class="cart__total__title">Tổng tiền:</div>
    <p>${numbertoVND(moneyCount)}</p>
  </div>

  <button class="cart__btnOrder">Đặt Hàng</button>`;
  cartItemList.innerHTML = htmls + cartFooter;
  const btnInput = document.querySelector(".cart__input");
  const deleteItemsCart = document.querySelectorAll(".cart__item__trash");
  const priceTotal = document.querySelector(".cart__total > p");
  // console.log(priceTotal);
  const btnDown = document.querySelectorAll(".cart__btn-down");
  const inputQuantity = document.querySelectorAll(".cart__input");
  const btnUp = document.querySelectorAll(".cart__btn-up");

  function sumPriceTotal(arr) {
    let s = 0;
    arr.forEach((item) => {
      s += item.currentPrice * item.quantity;
    });
    return s;
  }
  // console.log(btnDown);
  // console.log(inputQuantity);
  // console.log(btnUp);
  userCart.forEach((item, index) => {
    if (inputQuantity[index].value == 1) {
      btnDown[index].classList.add("disable");
    }
    btnDown[index].addEventListener("click", () => {
      if (inputQuantity[index].value <= 1) {
        inputQuantity[index].value = 1;
        // btnDown[index].classList.add("disable");
      } else {
        inputQuantity[index].value--;
        ordersById[index].quantity--;
        console.log(ordersById);
        // item.quantity--;
      }
      // console.log(sumPriceTotal(userCart));
      priceTotal.innerHTML = `${numbertoVND(sumPriceTotal(userCart))}`;
    });
    btnUp[index].addEventListener("click", () => {
      ordersById[index].quantity++;
      inputQuantity[index].value++;
      console.log(ordersById);
      // btnDown[index].classList.remove("disable");

      // item.quantity++;
      priceTotal.innerHTML = `${numbertoVND(sumPriceTotal(userCart))}`;
    });
  });
  /*  btnDown.addEventListener("click", () => {
    inputQuantity.value--;
    productsUser.quantity--;
  });
  btnUp.addEventListener("click", () => {
    inputQuantity.value++;
    productsUser.quantity++;
  });

  console.log(productsUser); */
}

