const btnInfo = document.querySelector(".header__login-info");
const infoOverlay = document.querySelector(".info__overlay");
const infoContainer = document.querySelector(".info__container");
btnInfo.addEventListener("click", () => {
  infoOverlay.classList.toggle("show");
  infoContainer.classList.toggle("show");
});
infoOverlay.addEventListener("click", () => {
  btnInfo.click();
});
const formInfo = document.querySelector(".info__container > form");
const inputs = formInfo.querySelectorAll("input");
const btnSave = document.querySelector(".form__info-btn-save > button");
const selects = formInfo.querySelectorAll("select");

let infoAcc = JSON.parse(localStorage.getItem("userLoginCurrent"));
let info = JSON.parse(localStorage.getItem("info"));

if (info == null) {
  localStorage.setItem("info", JSON.stringify([]));
}
let checkInfo;
if (infoAcc != null) {
  checkInfo = info.find((item) => {
    return item.id_user == infoAcc.id;
  });
}
console.log(selects[0].value);
console.log(selects[1].value);
console.log(selects[2].value);

if (checkInfo) {
  // let user = JSON.parse(localStorage.getItem("info"));
  inputs[0].value = checkInfo.lastName;
  inputs[1].value = checkInfo.firstName;
  inputs[2].value = checkInfo.phone;
  inputs[3].value = checkInfo.addressHome;

  window.onload = () => {
    selects[0].value = checkInfo.province;
    selects[0].click();

    setTimeout(() => {
      console.log(selects[1][1]);
      selects[1].value = checkInfo.city;
      selects[1].click();
      setTimeout(() => {
        console.log(selects[2][1]);
        selects[2].value = checkInfo.ward;
      }, 1000);
    }, 700);
  };
  function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    console.log(element[0]);
    element.value = valueToSelect;
  }
}
btnSave.addEventListener("click", () => {
  //   console.log($("#region_id option:selected").text());
  const select = formInfo.querySelectorAll("select option:checked");
  /* select.forEach((item) => {
    console.log(item);
    item.createAttribute("selected");
  }); */
  let id_user = JSON.parse(localStorage.getItem("userLoginCurrent")).id;
  let isUserLastName, isUserFirstName, isUserPhone;
  if (checkEmptyInput(inputs[0]) == false) {
    isUserLastName = checkLength(inputs[0], 1, 26);
  } else {
    isUserLastName = true;
  }
  if (checkEmptyInput(inputs[1]) == false) {
    isUserFirstName = checkLength(inputs[1], 3, 8);
  } else {
    isUserFirstName = true;
  }
  if (checkEmptyInput(inputs[2]) == false) {
    isUserPhone = checkPhone(inputs[2]);
  } else {
    isUserPhone = true;
  }

  if (!isUserLastName && !isUserFirstName && !isUserPhone) {
    // var is = checkLength(inputs[1], 3, 8);
    user = {
      id_user: id_user,
      lastName: inputs[0].value,
      firstName: inputs[1].value,
      phone: inputs[2].value,
      province: select[0].value,
      city: select[1].value,
      ward: select[2].value,
      addressHome: inputs[3].value,
    };

    let checkDouble = info.some((item) => {
      return item.id_user == user.id_user;
    });

    if (checkDouble == false) {
      user = {
        id_user: id_user,
        lastName: inputs[0].value,
        firstName: inputs[1].value,
        phone: inputs[2].value,
        province: select[0].value,
        city: select[1].value,
        ward: select[2].value,
        addressHome: inputs[3].value,
      };
    } else {
      info.forEach((item, index) => {
        if (item.id_user == user.id_user) {
          info[index] = user;
        }
      });
    }

    if (info.length == 0 || checkDouble == false) {
      info.push(user);
    }
    infoOverlay.click();
  } else {
  }
  localStorage.setItem("info", JSON.stringify(info));
});
