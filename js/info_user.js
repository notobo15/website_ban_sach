const btnInfo = document.querySelector(".header__login-info");
const infoOverlay = document.querySelector(".info__overlay");
const infoContainer = document.querySelector(".info__container");
const btnInfoClose = document.querySelector(".info__btnClose");
console.log(btnInfoClose);
btnInfo.addEventListener("click", () => {
  infoOverlay.classList.toggle("show");
  infoContainer.classList.toggle("show");
});
infoOverlay.addEventListener("click", () => {
  btnInfo.click();
});
btnInfoClose.addEventListener("click", () => {
  btnInfo.click();
});

const formInfo = document.querySelector(".info__container > form");
const inputs = formInfo.querySelectorAll("input");
console.log(inputs);
const btnSave = document.querySelector(".form__info-btn-save > button");
const selects = formInfo.querySelectorAll("select");

let userLoginCurrent = JSON.parse(localStorage.getItem("userLoginCurrent"));

if (userLoginCurrent) {
  inputs[0].value = userLoginCurrent.last_name;
  inputs[1].value = userLoginCurrent.first_name;
  inputs[2].value = userLoginCurrent.phone;
  inputs[3].value = userLoginCurrent.birth_date;
  inputs[4].value = userLoginCurrent.address_details;
}
window.onload = () => {
  selects[0].value = userLoginCurrent.address_province;
  selects[0].click();

  setTimeout(() => {
    selects[1].value = userLoginCurrent.address_district;
    selects[1].click();
    setTimeout(() => {
      selects[2].value = userLoginCurrent.address_ward;
    }, 3000);
  }, 2000);
};

formInfo.addEventListener("submit", (e) => {
  e.preventDefault();
  // let isUserLastName, isUserFirstName, isUserPhone;
  // if (checkEmptyInput(inputs[0]) == false) {
  //   isUserLastName = checkLength(inputs[0], 1, 26);
  // } else {
  //   isUserLastName = true;
  // }
  // if (checkEmptyInput(inputs[1]) == false) {
  //   isUserFirstName = checkLength(inputs[1], 3, 8);
  // } else {
  //   isUserFirstName = true;
  // }
  // if (checkEmptyInput(inputs[2]) == false) {
  //   isUserPhone = checkPhone(inputs[2]);
  // } else {
  //   isUserPhone = true;
  // }

  // if (!isUserLastName && !isUserFirstName && !isUserPhone) {
  // }

  let tam1 = selects[0].value.split("-");
  let tam2 = selects[1].value.split("-");
  let tam3 = selects[2].value.split("-");

  userLoginCurrent.last_name = inputs[0].value;
  userLoginCurrent.first_name = inputs[1].value;
  userLoginCurrent.phone = inputs[2].value;
  userLoginCurrent.birth_date = inputs[3].value;
  userLoginCurrent.address_details = inputs[4].value;
  userLoginCurrent.address_province = tam1[0];
  userLoginCurrent.address_district = tam2[0];
  userLoginCurrent.address_ward = tam3[0];
  userLoginCurrent.address_full = address_full.join(", ");

  localStorage.setItem("userLoginCurrent", JSON.stringify(userLoginCurrent));
  for (let i = 0; i < usersAccount.length; i++) {
    if (userLoginCurrent.id == usersAccount[i].id) {
      usersAccount[i].last_name = inputs[0].value;
      usersAccount[i].first_name = inputs[1].value;
      usersAccount[i].phone = inputs[2].value;
      usersAccount[i].birth_date = inputs[3].value;
      usersAccount[i].address_details = inputs[4].value;

      // let tam = selects[0].value.split("-");
      usersAccount[i].address_province = tam1[0];
      // let tam2 = selects[1].value.split("-");
      usersAccount[i].address_district = tam2[0];
      // let tam3 = selects[2].value.split("-");
      usersAccount[i].address_ward = tam3[0];
      usersAccount[i].address_full = address_full.join(", ");
      alert("Thay đổi thông tin thành công !");
      btnInfoClose.click();
    }
  }
  localStorage.setItem("usersAccount", JSON.stringify(usersAccount));
});
