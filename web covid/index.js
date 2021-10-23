let API = "https://covid19.mathdro.id/api/countries/Indonesia";
let API2 = "https://covid19.mathdro.id/api/";
let API3 = "https://covid19.mathdro.id/api/confirmed"
const getData = async (API) => {
  const response = await fetch(API);
  const result = await response.json();

  console.log(result);
  console.log(result.confirmed.value);
  console.log(result.deaths.value);
  console.log(result.recovered.value);

  let dataCovid = document.querySelector(".data-covid-indonesia");

  dataCovid.innerHTML += `
<div class = "card-body">
  <h2 class = "judul">Indonesia</h2>
<div class = "container">
  <div class="row border-3 border-secondary bg-gray-200">
    <div class="col-sm-4">
      <div class="card border-2 border-dark m-6">
        <div class="card-body">
          <h4 class="card-title bg-gray-200 text-red-900">${result.confirmed.value}</h4>
          <p class="card-text bg-gray-100 text-red-900 text-2xl ">Kasus</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card border-2 border-dark m-6">
      <div class="card-body">
        <h4 class="card-title bg-gray-200 text-green-900">${result.recovered.value}</h4>
        <p class="card-text bg-gray-100 text-green-900 text-2xl">Sembuh</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card border-2 border-dark m-6">
      <div class="card-body">
        <h4 class="card-title bg-gray-200 text-black">${result.deaths.value} </h4>
        <p class="card-text bg-gray-100 text-black text-2xl ">Meninggal</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>


  `;

  //     dataCovid.innerHTML += `
  //     <div class = "card-body">
  //         <h3 class = "judul">Indonesia</h3>

  //        <div class="card-group">
  //   <div class="card border-3 border-dark m-4">
  //     <div class="card-body">
  //       <h5 class="card-angka">${result.confirmed.value} </h5>
  //       <p class="card-text">Kasus</p>
  //     </div>
  //   </div>
  //   <div class="card border-3 border-dark m-4">
  //     <div class="card-body">
  //       <h5 class="card-angka">${result.recovered.value} </h5>
  //       <p class="card-text">Sembuh</p>
  //     </div>
  //   </div>
  //   <div class="card border-3 border-dark m-4">
  //     <div class="card-body">
  //       <h5 class="card-title">${result.deaths.value} </h5>
  //       <p class="card-text">Meninggal</p>
  //     </div>
  //   </div>
  // </div>

  //     `

  // result = result.filter((data, index) => {})

  // const dataCovid = document.querySelector(".data-covid-indonesia")
  // result.forEach(data => {
  //     console.log(data)
  //     dataCovid.innerHTML += `
  //     <div class = "col">
  //        <div class = "card border border-primary">
  //           <div class = "card-body">
  //              <h5 class = "card-angka">${data.confirmed.value}
  //            </div>
  //         </div>
  //     </div>
  //     `

  // });
};

getData(API);

const getData2 = async (API2) => {
  const response = await fetch(API2);
  const result = await response.json();

  console.log(result);
  console.log(result.confirmed.value);
  console.log(result.deaths.value);
  console.log(result.recovered.value);

  let dataCovid = document.querySelector(".data-covid-indonesia");

  dataCovid.innerHTML += `
    <div class = "card-body">
         <h2 class = "judul">Dunia</h2>
<div class = "container">
    <div class="row border-3 border-secondary bg-gray-200">
  <div class="col-sm-4">
    <div class="card border-2 border-dark m-6">
      <div class="card-body">
        <h4 class="card-title bg-gray-200 text-red-900">${result.confirmed.value}</h4>
        <p class="card-text bg-gray-100 text-red-900 text-2xl">Kasus</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card border-2 border-dark m-6">
      <div class="card-body">
        <h4 class="card-title bg-gray-200 text-green-900">${result.recovered.value}</h4>
        <p class="card-text bg-gray-100 text-green-900 text-2xl">Sembuh</p>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card border-2 border-dark m-6">
      <div class="card-body">
        <h4 class="card-title bg-gray-200 text-black">${result.deaths.value} </h4>
        <p class="card-text bg-gray-100 text-black text-2xl">Meninggal</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
`;

  //     dataCovid.innerHTML += `
  //     <div class = "card-body">
  //         <h3 class = "judul">Dunia</h3>

  //        <div class="card-group">
  //   <div class="card border-3 border-dark">
  //     <div class="card-body">
  //       <h5 class="card-angka">${result.confirmed.value} </h5>
  //       <p class="card-text">Kasus</p>
  //     </div>
  //   </div>
  //   <div class="card border-3 border-dark">
  //     <div class="card-body">
  //       <h5 class="card-angka">${result.recovered.value} </h5>
  //       <p class="card-text">Sembuh</p>
  //     </div>
  //   </div>
  //   <div class="card border-3 border-dark">
  //     <div class="card-body">
  //       <h5 class="card-title">${result.deaths.value} </h5>
  //       <p class="card-text">Meninggal</p>
  //     </div>
  //   </div>
  // </div>

  //     `
};

getData2(API2);

// const searchInput = document.querySelector(".search");
// const tampilan = document.querySelector(".dataCovid");
// searchInput.addEventListener("input", tampilanInput);
// let dataCov = [];

// window.onload = function () {
//   fetch('https://covid19.mathdro.id/api/confirmed')
//     .then((response) => {
//       return response.json();
//     })

//     .then((allItem) => {
//       dataCov = allItem;
//     })
// };

// function tampilanInput() {
//   if (this.value.trim().length !== 0) {
//     const dataHasil = dataCov
//       .filter((data) => {
//         return data.countryRegion
//           .toLowerCase()
//           .includes(this.value.toLowerCase());
//       })

//       .map((item) => {
//         const dataKota = item.countryRegion
//           .toLowerCase()
//           .replace(
//             this.value.toLowerCase(),
//             `<div class='hasil'>${this.value}</div>`
//           );
//         return`
//         <div class = "col">
//         <div class="card border-3 border-secondary">
//           <div class="card-body">
//             <h3 class="card-title card-body text-center bg-gray-200">${item.countryRegion}</h3>
//             <p class="card-textcard-body text-xl text-red-900 text-center bg-gray-100">Kasus : ${item.confirmed}</p>
//             <p class="card-text card-body text-xl text-green-900 text-center bg-gray-100">Sembuh : ${item.recovered}</p>
//             <p class="card-text card-body text-xl text-black text-secondary text-center bg-gray-100">Meninggal : ${item.deaths}</p>
//           </div>
//         </div>
//     </div>
//         `;
//       })
//       .join("");

//     tampilan.innerHTML = dataHasil;
//   }
// }
const getData3 = async (API3) => {
  const response = await fetch(API3);
  result = await response.json();
  allData(result);
  // console.log(response);
};
let result = [];

const dataSearch = document.querySelector(".data-search");
const allData = (countries) => {
  const dataKota = countries
    .map((item) => {
      return `
      <div class = "col">
        <div class="card border-3 border-secondary">
          <div class="card-body">
            <h3 class="card-title card-body text-center bg-gray-200">${item.countryRegion}</h3>
            <p class="card-textcard-body text-xl text-red-900 text-center bg-gray-100">Kasus : ${item.confirmed}</p>
            <p class="card-text card-body text-xl text-green-900 text-center bg-gray-100">Sembuh : ${item.recovered}</p>
            <p class="card-text card-body text-xl text-black text-secondary text-center bg-gray-100">Meninggal : ${item.deaths}</p>
          </div>
        </div>
    </div>`;
    })
    .join("");
  dataSearch.innerHTML = dataKota;
};

getData3(API3);

const dataGlobal = document.querySelector(".search");
dataGlobal.addEventListener("keyup", (e) => {
  const target = e.target.value;
  const filteredCountry = result.filter((item) => {
    return item.countryRegion.toLowerCase().includes(target.toLowerCase());
  });
  if (Object.keys(filteredCountry).length !== 0) {
    allData(filteredCountry);
    console.log(filteredCountry);
  } else {
    dataSearch.innerHTML = `<div class="card-title card-body text-xl text-center"><h2 class=" text-black">Data Tidak Di Temukan</h2><br>
    <center><img src="undraw_not_found_60pq.svg"
  width="450" height="500"alt="Data Tidak Di Temukan"
></img></center>; </div>`;
  }
});
