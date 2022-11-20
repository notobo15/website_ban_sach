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
    }, 1000);
  }, 800);
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
  userLoginCurrent.last_name = inputs[0].value;
  userLoginCurrent.first_name = inputs[1].value;
  userLoginCurrent.phone = inputs[2].value;
  userLoginCurrent.birth_date = inputs[3].value;
  userLoginCurrent.address_details = inputs[4].value;
  userLoginCurrent.address_province = selects[0].value;
  userLoginCurrent.address_district = selects[1].value;
  userLoginCurrent.address_ward = selects[2].value;
  console.log(userLoginCurrent);
  localStorage.setItem("userLoginCurrent", JSON.stringify(userLoginCurrent));
  for (let i = 0; i < usersAccount.length; i++) {
    if (userLoginCurrent.id == userLoginCurrent.id) {
      usersAccount[i].last_name = inputs[0].value;
      usersAccount[i].first_name = inputs[1].value;
      usersAccount[i].phone = inputs[2].value;
      usersAccount[i].birth_date = inputs[3].value;
      usersAccount[i].address_details = inputs[4].value;
      usersAccount[i].address_province = selects[0].value;
      usersAccount[i].address_district = selects[1].value;
      usersAccount[i].address_ward = selects[2].value;
    }
  }
  localStorage.setItem("usersAccount", JSON.stringify(usersAccount));
});
