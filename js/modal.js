const btn = document.querySelector(".btn-test");
const btn_close = document.querySelector(".btn-close");
const modal_container = document.querySelector("#modal-container");
const modal1 = document.querySelector("#modal");

btn.addEventListener("click", () => {
  modal_container.classList.add("show");
});
btn_close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

modal_container.addEventListener("click", (e) => {
  if (modal_container.classList.contains("show")) {
    btn_close.click();
  }
});
