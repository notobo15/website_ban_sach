var infoUser = [];
const formInfo = document.querySelector(".info__container > form");
const inputs = formInfo.querySelectorAll("input");
const btnSave = document.querySelector(".form__info-btn-save > button");
const selects = formInfo.querySelectorAll("select");
console.log(selects);
let infoAcc = JSON.parse(localStorage.getItem("userLoginCurrent"));
let info = JSON.parse(localStorage.getItem("info"));
if (info != null && infoAcc.id == info.id_user) {
  let user = JSON.parse(localStorage.getItem("info"));
  inputs[0].value = user.lastName;
  inputs[1].value = user.firstName;
  inputs[2].value = user.phone;
  inputs[3].value = user.addressHome;
  window.onload = () => {
    selects[0].value = user.province;
    selects[0].click();
    setTimeout(() => {
      console.log(selects[1][0]);
      selects[1].value = user.city;
      selects[1].click();
      setTimeout(() => {
        selects[2].value = user.ward;
      }, 1000);
    }, 500);

    /*   selectElement("region_id", user.province);
    selectElement("region_id", user.province);
    selectElement("region_id", user.province); */
  };
  function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    console.log(element[0]);
    element.value = valueToSelect;
  }
  // console.log(selects[0]);
  // document.getElementById("region_id")[0].innerText = "111111";
  // console.log(document.getElementById("region_id")[0]);
  // document.getElementById("region_id")[0].setAttribute("selected", "selected");
} else {
  btnSave.addEventListener("click", () => {
    //   console.log($("#region_id option:selected").text());
    const select = formInfo.querySelectorAll("select option:checked");
    /* select.forEach((item) => {
      console.log(item);
      item.createAttribute("selected");
    }); */
    let id_user = JSON.parse(localStorage.getItem("userLoginCurrent")).id;
    if (checkEmptyInput(inputs[0]) == false) {
      var is = checkLength(inputs[1], 3, 8);
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
      if (infoUser.length == 0) {
        infoUser.push(user);
      }
      infoUser.forEach((item) => {
        if (item.id_user !== user.id_user) {
          infoUser.push(user);
        }
      });
    } else {
      console.log(1231312312);
    }

    /* select[0].createAttribute("selected");
    select[1].createAttribute("selected");
    select[2].createAttribute("selected"); */
    //   console.log(document.querySelector("#region_id option:selected").html());

    localStorage.setItem("info", JSON.stringify(user));
    console.log(infoUser);
  });
}
