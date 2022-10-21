/* usersAccount = [
  {
    id: "user1",
    pw: "123",
    email: "user1@gmail.com",
    phone: "0123456789",
    address: "",
  },
  {
    id: "user2",
    pw: "123",
  },
  {
    id: "user3",
    pw: "123",
  },
  {
    id: "user4",
    pw: "123",
  },
  {
    id: "user5",
    pw: "123",
  },
];
let adminAccount = [
  {
    id: "admin",
    pw: "admin",
  },
]; */

const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
// su li doi mau chu va them line bottom khi click
const formTitle = document.querySelectorAll(".login_form_header span");
console.log(formTitle);
formTitle.forEach((item) => {
  item.addEventListener("click", () => {
    for (const i of formTitle) {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
    }
    item.classList.add("active");
  });
});

const iconForm = document.querySelector(".header__login-btn-login");
const registerIcon = document.querySelector(".header__login-btn-register");

const form = document.querySelector(".login_form_content");
const login = document.querySelector(".login_form_header-login");
const register = document.querySelector(".login_form_header-register");
const registerContent = document.querySelector(".register_content");
const loginContent = document.querySelector(".login_content");
const headerLine = document.querySelector(".login_form_header span");
const formBtnClose = document.querySelector(".login_form_btn_close");
const showTexts = document.querySelectorAll(".form_input_showtext");
const formOverlay = document.querySelector(".form_overlay");
const inputPassAll = form.querySelectorAll("input[type='password']");
const btnLogout = document.querySelector(".header__login-logout");
const nameUser = document.querySelector(".header__login-name");

const linkAdmin = $(".header__login-go-to-admin");

let registerAccount = [];
// LOG OUT
btnLogout.addEventListener("click", () => {
  if (localStorage.getItem("userLoginCurrent") !== null) {
    localStorage.removeItem("userLoginCurrent");
    window.location.reload();
  }
});
// show form register
registerIcon.addEventListener("click", () => {
  iconForm.click();
  register.click();
});

// show form login
iconForm.addEventListener("click", showFormLogin);
formBtnClose.addEventListener("click", () => {
  iconForm.click();
});
function showFormLogin() {
  form.classList.toggle("show");
  formOverlay.classList.toggle("show");
  login.click();
}

// overlay
formOverlay.addEventListener("click", () => {
  iconForm.click();
});
var adminAccount = ["admin1", "admin2", "admin3"];

if (localStorage.getItem("userLoginCurrent") !== null) {
  console.log("da dang nhap");
  const iconLogin = document.querySelector(".header__login-icon");
  const avatarUser = document.querySelector(".header__login_avatar");
  avatarUser.classList.add("show");
  iconLogin.classList.remove("show");
  avatarUser.classList.add("show");
  nameUser.innerText = JSON.parse(
    localStorage.getItem("userLoginCurrent")
  ).user_name;
  iconForm.removeEventListener("click", showFormLogin);
  adminAccount.forEach((item) => {
    if (
      item === JSON.parse(localStorage.getItem("userLoginCurrent")).user_name
    ) {
      return linkAdmin.classList.add("show");
    }
  });
} else {
  console.log("chua dang nhap");
}

/* LOGIN */
loginContent.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginContent.querySelector("input[type='text']");
  const pass = loginContent.querySelector("input[type='password']");

  checkEmptyValue([username, pass]);

  if (checkEmptyInput(username) == false) {
    let isUserLength = checkLength(username, 3, 8);
  }
  if (checkEmptyInput(pass) == false) {
    let isUserLength = checkLength(pass, 3, 8);
  }
  /* let findAdmin = adminAccount.forEach((item) => {
    if (item.id === username.value && item.pw === pass.value) {
      window.location.assign("./admin/index.html");
    }
  }); */
  let getUserRegister = localStorage.getItem("registerAccount");
  if (getUserRegister === null) {
    getUserRegister = JSON.stringify([]);
  }
  registerAccount = JSON.parse(getUserRegister);
  console.log(getUserRegister);
  const findUser = usersAccount.find((item) => {
    return item.user_name === username.value && item.pw === pass.value;
  });
  /*   const findUserByRegister = registerAccount.find((item) => {
    return item.id === username.value && item.pw === pass.value;
  });
 */
  // if (findUser || findUserByRegister) {
  if (findUser || registerAccount) {
    localStorage.setItem(
      "userLoginCurrent",
      // findUser !== undefined ? JSON.stringify(findUser): JSON.stringify(findUserByRegister);
      findUser !== undefined
        ? JSON.stringify(findUser)
        : JSON.stringify(registerAccount)
    );
    console.log(JSON.parse(localStorage.getItem("userLoginCurrent")).user_name);
    alert("Đăng nhập thành công");
    nameUser.innerText = JSON.parse(
      localStorage.getItem("userLoginCurrent")
    ).user_name;
    iconForm.click();
    // console.log(iconForm);
    // iconForm.removeEventListener("click", showFormLogin);
    // const userInfo = document.querySelector(".header_user_info");
    const iconLogin = document.querySelector(".header__login-icon");
    const avatarUser = document.querySelector(".header__login_avatar");
    /*   iconLogin.style.display = "none";
    avatarUser.style.display = "inline-block"; */
    avatarUser.classList.add("show");
    iconLogin.classList.remove("show");
    linkAdmin.classList.remove("show");
    console.log(linkAdmin);
    adminAccount.forEach((item) => {
      if (item === username.value) {
        return linkAdmin.classList.add("show");
      }
    });
  } else {
    alert("Đăng nhập khong dung");
    resetInput([username, pass]);
  }
});

/* REGISTER */
registerContent.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = registerContent.querySelectorAll("input");
  // let isEmpty = checkEmptyValue(inputs);
  if (checkEmptyInput(inputs[0]) == false) {
    var isUserLength0 = checkLength(inputs[0], 3, 8);
  }
  if (checkEmptyInput(inputs[1]) == false) {
    var isEmail1 = checkEmail(inputs[1]);
  }
  if (checkEmptyInput(inputs[2]) == false) {
    var isUserLength2 = checkLength(inputs[2], 3, 8);
  }
  if (checkEmptyInput(inputs[3]) == false) {
    var isUserLength3 = checkLength(inputs[3], 3, 8);
    var isMatchingPW3 = checkMathingPassword(inputs[2], inputs[3]);
  }
  if (
    !isUserLength0 &&
    !isEmail1 &&
    !isUserLength2 &&
    !isUserLength3 &&
    !isMatchingPW3
  ) {
    iconForm.click();
    let id = 100;
    let user = {
      id: id++,
      user_name: inputs[0].value,
      email: inputs[1].value,
      pw: inputs[2].value,
    };
    console.log(user);
    let data = registerAccount;
    if (data.length !== 0) {
      let user = localStorage.getItem("registerAccount");
      data = JSON.parse(user);
    }
    data.push(user);
    let json = JSON.stringify(data);
    localStorage.setItem("registerAccount", json);
  }
});

// hàm reset ô input khi login sai thông tin
function resetInput(inputs) {
  inputs.forEach((input) => {
    input.value = "";
    setErrorMessage(input, "Xin vui lòng nhập lại");
  });
}
// hàm check length 1 ô input nếu đúng > min và < max return false
function checkLength(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    setErrorMessage(input, `Phải co ít nhất ${min} ký tự`);
    return true;
  } else if (input.value.length > max) {
    setErrorMessage(input, `Phải co ít nhất ${max} ký tự`);
    return true;
  } else {
    setSuccessMessage(input);
    return false;
  }
}
// check input password có trùng với password2 đúng return false
function checkMathingPassword(pwInput, pwInput2) {
  if (pwInput.value !== pwInput2.value) {
    setErrorMessage(pwInput2, `Mật khẩu không trùng khớp`);
    return true;
  }
  return false;
}
// check nhiều input rỗng value có value return false
// listInput: array
function checkEmptyValue(listInput) {
  let isEmpty = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmpty = true;
      setErrorMessage(input, "Không được để trống");
    } else {
      setSuccessMessage(input);
    }
  });
  return isEmpty;
}
// check 1 input rỗng value có value return false
function checkEmptyInput(input) {
  let isEmpty = false;

  input.value = input.value.trim();
  if (!input.value) {
    isEmpty = true;
    setErrorMessage(input, "Không được để trống");
  } else {
    setSuccessMessage(input);
  }
  return isEmpty;
}
//  check email hợp lệ đúng return false
function checkEmail(input) {
  input.value = input.value.trim();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(input.value)) {
    setSuccessMessage(input);
    return false;
  } else {
    setErrorMessage(input, "Không phải là dạng email");
    return true;
  }
}
function setErrorMessage(input, message) {
  input.classList.add("error");
  input.classList.remove("success");

  input.nextElementSibling.innerText = message;
  input.nextElementSibling.classList.add("show");
}
function setSuccessMessage(input) {
  input.classList.add("success");
  input.classList.remove("error");
  input.nextElementSibling.classList.remove("show");
}

showTexts.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.parentElement.children[1].type === "password") {
      item.parentElement.children[1].type = "text";
    } else {
      item.parentElement.children[1].type = "password";
    }
    if (item.innerHTML === "Hiện") {
      item.innerHTML = "Ẩn";
    } else {
      item.innerHTML = "Hiện";
    }
  });
});
loginContent.classList.add("show");
login.addEventListener("click", () => {
  loginContent.classList.add("show");
  registerContent.classList.remove("show");
});
register.addEventListener("click", () => {
  registerContent.classList.add("show");
  loginContent.classList.remove("show");
});
usersAccount.some((item) => {
  return;
});
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
