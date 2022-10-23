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
      console.log(selects[1][0]);
      selects[1].value = checkInfo.city;
      selects[1].click();
      setTimeout(() => {
        selects[2].value = checkInfo.ward;
      }, 800);
    }, 500);
  };
  function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    console.log(element[0]);
    element.value = valueToSelect;
  }
} else {
}
btnSave.addEventListener("click", () => {
  //   console.log($("#region_id option:selected").text());
  const select = formInfo.querySelectorAll("select option:checked");
  /* select.forEach((item) => {
    console.log(item);
    item.createAttribute("selected");
  }); */
  let id_user = JSON.parse(localStorage.getItem("userLoginCurrent")).id;
  if (checkEmptyInput(inputs[0]) == false) {
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
      return item.id_user !== user.id_user;
    });
    console.log(checkDouble);
    if (checkDouble == true) {
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
      console.log(user);
      info.forEach((item, index) => {
        if (item.id_user == user.id_user) {
          info[index] = user;
        }
      });
      
    }
    
    if (info.length == 0 || checkDouble != true) {
      info.push(user);
    }
  } else {
  }
  localStorage.setItem("info", JSON.stringify(info));
});
