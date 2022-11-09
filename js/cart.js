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
  let product = {
    id: id,
    quantity: +input.value,
  };
  ordersById.push(product);
  // console.log(ordersById);
  let u = JSON.parse(localStorage.getItem("userLoginCurrent"));
  console.log(u);
  const b = books.filter((item) => {
    return ordersById.find((pro) => {
      item.quantity = pro.quantity;
      // item.buyer = ;
      return pro.id === item.id;
    });
  });
  console.log(b);
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
    cartItems.classList.add("show");
  }
  console.log(b);
  renderCart(b);
  const modal = document.querySelector("#modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  modal.classList.remove("show");
  modalOverlay.classList.remove("show");
}
function handleOrder() {
  let user = localStorage.getItem("userLoginCurrent");
  let info = JSON.parse(localStorage.getItem("info"));
  let checkInfo = info.find((item) => {
    return item.id_user == JSON.parse(user).id;
  });
  if (user == null) {
    alert("Dăng nhập để đặt hàng");
    cartBtnClose.click();
  } else {
    if (checkInfo == undefined) {
      alert("Bạn chưa điền thông tin");
      cartBtnClose.click();
    } else {
      alert("Đặt hàng thành công");

      // lay date hien tai
      let date = new Date();
      let dateOrder = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}:${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      // chi tiet don hang
      let productDetails = "";
      userCart.forEach((item) => {
        return (productDetails += `${item.title}(x${item.quantity})<br/>`);
      });
      // total thành tiền
      const p = userCart.reduce((total, item) => {
        return (total += item.currentPrice * item.quantity);
      }, 0);
      // tạo 1 object
      const order = {
        order_id: `DH000${orderID++}`,
        details: productDetails,
        user_name: infoAcc.user_name,
        full_name: `${checkInfo.lastName} ${checkInfo.firstName}`,
        phone: checkInfo.phone,
        order_date: dateOrder,
        // id_buyer: user.user_name,
        address_delivery: "Giao Hàng Nhanh",
        total_price: p,
        isConfirm: "false",
      };
      cartCount.innerHTML = 0;

      const orderAll = JSON.parse(localStorage.getItem("orders"));
      if (orderAll != null) {
        orderAll.push(order);
      }
      localStorage.setItem("orders", JSON.stringify(orderAll));
      userCart = [];
      ordersById = [];
      cartItems.innerHTML = "";
      noCart.classList.remove("disable");
      cartItemList.classList.remove("show");
      cart.click();
    }
  }
}
function deleteItem(id) {
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
        <button onclick="return handleOrder()" class="cart__btnOrder">Đặt Hàng</button>
      `;
  cartItemList.innerHTML = htmls + cartFooter;
  handleQuantity(userCart);
}
