let btnUsers = document.querySelector(".btn__users");
let btnBackHomePage = document.querySelector(".btn__backHomePage");
let btnLogOut = document.querySelector(".btn__logout");
console.log(btnUsers, btnBackHomePage, btnLogOut);
btnBackHomePage.onclick = () => {
  if (confirm("Bạn có chắc chắn muốn thoát ?")) {
    window.location.assign("../index.html");
  }
};
btnLogOut.onclick = () => {
  if (confirm("Bạn có chắc chắn muốn đăng xuất ?")) {
    localStorage.removeItem("userLoginCurrent");
    window.location.assign("../index.html");
  }
};
