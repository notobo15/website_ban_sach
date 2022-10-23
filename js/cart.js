let userCart = [];

console.log(userCart);
const itemsCart = document.querySelector(".list__cart");
const cartBtnClose = document.querySelector(".cart__btnClose");
const cartOverlay = document.querySelector(".cart__overlay");
const cart = document.querySelector(".cart");
const cartItems = document.querySelector(".cart__items");
const cartItemList = document.querySelector(".cart__items");
const noCart = document.querySelector(".cart__noCart");
const footer = document.querySelector(".cart__footer");
const cartCount = document.querySelector(".cart__counter");

// console.log(itemsCart);
// console.log(cartBtnClose);
// console.log(cart);
// console.log(cartItems);
cart.addEventListener("click", () => {
  itemsCart.classList.toggle("show");
  cartOverlay.classList.toggle("show");
  const btnInput = document.querySelector(".cart__input");
  const deleteItemsCart = document.querySelectorAll(".cart__item__trash");
  const priceTotal = document.querySelector(".cart__total > p");
  // handleQuantity(userCart);
});

function handleQuantity(userCart) {
  const btnDown = [...document.querySelectorAll(".cart__btn-down")];
  const inputQuantity = [...document.querySelectorAll(".cart__input")];
  const btnUp = [...document.querySelectorAll(".cart__btn-up")];

  userCart.forEach((item, index) => {
    btnDown[index].addEventListener("click", () => {
      if (inputQuantity[index].value <= 1) {
        deleteItem(userCart[index].id);
        inputQuantity[index].value = 1;
      } else {
        inputQuantity[index].value--;
        userCart[index].quantity--;
      }
      renderCart(userCart);
    });
    btnUp[index].addEventListener("click", () => {
      userCart[index].quantity++;
      inputQuantity[index].value++;
      console.log(userCart);
      renderCart(userCart);
    });
  });
}

cartBtnClose.addEventListener("click", () => {
  cart.click();
});
cartOverlay.addEventListener("click", () => {
  cart.click();
});
let ordersById = [];
let orderID = 1;
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
      item.buyer = JSON.parse(
        localStorage.getItem("userLoginCurrent")
      ).user_name;
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
  console.log(b);
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
}
function handleOrder() {
  let user = localStorage.getItem("userLoginCurrent");
  let checkUserOrder = userCart.some((item) => {
    return user.user_name == item.id_buyer;
  });
  if (user != null && checkUserOrder == true) {
    let date = new Date();
    let dateOrder = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    let productDetails = "";
    userCart.forEach((item) => {
      return (productDetails += `${item.title}(x${item.quantity})<br/>`);
    });
    const p = userCart.reduce((total, item) => {
      return (total += item.currentPrice * item.quantity);
    }, 0);
    let info = JSON.parse(localStorage.getItem("info"));
    console.log(info);
    let a = JSON.parse(user).id;
    console.log(a);
    let checkInfo = info.find((item) => {
      console.log(item.id_user);
      return item.id_user == a;
    });

    let infoAcc = JSON.parse(localStorage.getItem("userLoginCurrent"));
    console.log(checkInfo);
    if (checkInfo == undefined) {
      alert("Bạn chưa điền thông tin\n Để đặt được hàng");
    } else if (checkInfo.id_user == infoAcc.id) {
      alert("Đặt hàng thành công");
      cartCount.innerHTML = 0;
      const order = {
        order_id: `DH000${orderID++}`,
        details: productDetails,  
        user_name: infoAcc.user_name,
        full_name: `${checkInfo.lastName} ${checkInfo.firstName}`,
        phone: checkInfo.phone,
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
  } else {
    alert("Dăng nhập để đặt hàng");
    cartBtnClose.click();
  }
}
function deleteItem(id) {
  /*   console.log(userCart.length);
console.log(cartCount); */
  let confirmDelete = confirm("Bạn có chắc chắn muốn xóa");
  if (confirmDelete === true) {
    // eDelete.parentNode.remove();
    let index = userCart.forEach((i, indx) => {
      if (i.id === id) {
        console.log(indx);
        userCart.splice(indx, 1);
        cartCount.innerText = userCart.length;
      }
    });
    renderCart(userCart);
    // let e = document.querySelector(".cart__total p");
    // e.innerHTML = numbertoVND(renderMoneyCurrent(userCart));
    if (userCart.length === 0) {
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

<button onclick="return handleOrder()" class="cart__btnOrder">Đặt Hàng</button>`;
  cartItemList.innerHTML = htmls + cartFooter;
  handleQuantity(userCart);
}
