let url = "https://provinces.open-api.vn/api/";
const eProvice = document.querySelector("#region_id");
const eDivision = document.querySelector("#city_id");
const eWard = document.querySelector("#ward_id");
let arrProvice;
let arrDivision;
let arrWard;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    arrProvice = data.map((item) => {
      return {
        code: item.code,
        name: item.name,
      };
    });
  })
  .then(() => {
    function handleData(data) {
      let htmls = `<option>Vui lòng chọn</option>`;
      data.forEach((item) => {
        htmls += `
          <option value="${item.code}" title="${item.name}">${item.name}</option>
          `;
      });
      eProvice.innerHTML = htmls;
    }
    handleData(arrProvice);
  });

fetch(url + "d")
  .then((response) => response.json())
  .then((data) => {
    arrDivision = data.map((item) => {
      return {
        code: item.code,
        name: item.name,
        province_code: item.province_code,
      };
    });
  })
  .then(() => {
    eProvice.onclick = () => {
      let codeProvince = eProvice.value;
      handleDivision(arrDivision);

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
    };
  });
fetch(url + "w")
  .then((response) => response.json())
  .then((data) => {
    arrWard = data.map((item) => {
      return {
        code: item.code,
        name: item.name,
        district_code: item.district_code,
      };
    });
  })
  .then(() => {
    eDivision.onclick = () => {
      let codeDivision = eDivision.value;
      handleWard(arrWard);
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
    };
  });

// ---------------------
