let url = "https://provinces.open-api.vn/api/";
const eProvice = document.querySelector("#region_id");
const eDivision = document.querySelector("#city_id");
const eWard = document.querySelector("#ward_id");

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    handleData(data);
  });
function handleData(data) {
  let htmls = `<option >Vui lòng chọn</option>`;
  data.forEach((item) => {
    htmls += `
        <option value="${item.code}" title="${item.name}">${item.name}</option>
        `;
  });
  eProvice.innerHTML = htmls;
}

eProvice.addEventListener("click", () => {
  // eProvice.setAttribute("value", codeProvince);
  let codeProvince = eProvice.value;
  fetch(url + "d")
    .then((response) => response.json())
    .then((data) => {
      handleDivision(data);
    });
  function handleDivision(data) {
    const arr = data.filter((item) => {
      return item.province_code == codeProvince;
    });
    let htmls = `<option>Vui lòng chọn</option>`;
    arr.forEach((item) => {
      htmls += `
        <option value="${item.code}" title="${item.name}">${item.name}</option>
        `;
    });
    eDivision.innerHTML = htmls;
  }
  eDivision.addEventListener("click", () => {
    let codeDivision = eDivision.value;
    // eDivision.setAttribute("value", codeDivision);
    fetch(url + "w")
      .then((response) => response.json())
      .then((data) => {
        handleWard(data);
      });
    function handleWard(data) {
      const arr = data.filter((item) => {
        return item.district_code == codeDivision;
      });
      let htmls = `<option>Vui lòng chọn</option>`;
      arr.forEach((item) => {
        htmls += `
        <option value="${item.code}" title="${item.name}">${item.name}</option>
        `;
      });
      eWard.innerHTML = htmls;
    }
    // eWard.addEventListener("click", () => {
    // eWard.setAttribute("value", eWard.value);
    // });
  });
});
