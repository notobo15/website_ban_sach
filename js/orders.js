const containerTable = document.querySelector(".order__container");
const table = containerTable.querySelector("table");
const mess = containerTable.querySelector("h3");
const btnClose = document.querySelector(".order__container-btn-close");
const orderOverlay = document.querySelector(".order__overlay");
const order = document.querySelector(".header__login-order");
const tableBody = document.querySelector(".order tbody");
console.log(table);
// table.style.display = "none";
order.addEventListener("click", () => {
  orderOverlay.classList.toggle("show");
  containerTable.classList.toggle("show");
});
btnClose.addEventListener("click", () => {
  order.click();
});
orderOverlay.addEventListener("click", () => {
  order.click();
});
function renderTableOrders(userCart, date) {
  if (userCart.length !== 0) {
    table.classList.add("show");
    mess.classList.add("disable");

    let htmls = "";
    let sum = 0;
    let nameProduct = "";
    userCart.forEach((item) => {
      sum += item.currentPrice * item.quantity;
      nameProduct += `
        ${item.title} (x${item.quantity})<br />
        `;
    });

    htmls = `
    <tr>
        <th scope="row">1</th>
        <td>R45MD0</td>
        <td class="text-left">
        ${nameProduct}
        </td>
        <td>${date}</td>
        <td class="text-left">GiaoHangNhanh</td>
        <td>${sum}</td>
        <td>Đang chờ xác nhận</td>
        </tr>
        `;

    tableBody.innerHTML = htmls;
  }
}

