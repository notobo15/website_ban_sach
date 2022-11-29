let url = "https://provinces.open-api.vn/api/";
const eProvice = document.querySelector("#region_id");
const eDivision = document.querySelector("#city_id");
const eWard = document.querySelector("#ward_id");
var arrProvice;
var arrDivision;
var arrWard;
var address_full = [];
var addressName;
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
          <option value="${item.code}-${item.name}" title="${item.name}">${item.name}</option>
          `;
      });
      if (eProvice != null) {
        eProvice.innerHTML = htmls;
      }
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
      console.log(eProvice.value);
      let tam = eProvice.value.split("-");
      let codeProvince = +tam[0];
      console.log(codeProvince);
      address_full[0] = tam[1];
      handleDivision(arrDivision);

      function handleDivision(data) {
        const arr = data.filter((item) => {
          return item.province_code == codeProvince;
        });
        console.log(arr);
        let htmls = `<option>Vui lòng chọn</option>`;
        arr.forEach((item) => {
          htmls += `
              <option value="${item.code}-${item.name}" title="${item.name}">${item.name}</option>
              `;
        });
        if (eDivision) {
          eDivision.innerHTML = htmls;
        }
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
      let tam = eDivision.value.split("-");
      let codeDivision = tam[0];
      address_full[1] = tam[1];

      handleWard(arrWard);
      function handleWard(data) {
        const arr = data.filter((item) => {
          return item.district_code == codeDivision;
        });
        let htmls = `<option>Vui lòng chọn</option>`;
        arr.forEach((item) => {
          htmls += `
          <option value="${item.code}-${item.name}" title="${item.name}">${item.name}</option>
          `;
        });
        eWard.innerHTML = htmls;
      }
    };
  })
  .then(() => {
    eWard.onclick = () => {
      let tam = eWard.value.split("-");
      let codeWard = tam[0];
      address_full[2] = tam[1];
      addressName = address_full.join(", ");
      console.log(address_full);
      console.log(addressName);
    };
  });

// ---------------------
