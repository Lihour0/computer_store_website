import { res } from "./gpu.js";
import { paginate } from "./paginate.js";

let main1 = "";
let main2 = "";
let button = "";
let pages = 3;
let perPage = 12;
let currentPage = 0;

const btn = document.getElementById("btn");

const changePage = (changeP) => {
  return changeP;
};

let paginatedData = paginate(res, changePage(pages), perPage);
console.log(paginatedData);

function loadPageNav() {
  btn.innerHTML = "";
  for (let page = 1; page < paginatedData.totalPages + 1; page++) {
    const button = document.createElement("div");
    button.innerHTML = `<button value="${page}">${page}</button>`;
    button.addEventListener("click", (e) => {
      pages = e.target.innerHTML - 1;
      loadData();
    });
    btn.append(button);
  }
}
let main0 = "";
let Data = paginatedData.data;
function loadData() {
  Data.map((val, key) => {
    const title = val.title;
    const price = Math.round(val.price);
    const image = val.img;
    //   const rating = getRand(2, 5);
    const rating = 4;

    main1 = `
            <div class=" py-5 pl-5 mx-3">
            <div class=" flex">
              <div data-star=""></div>
              <div class="text-sm justify-center items-center flex pl-2 font-light text-slate-500 ">(40)</div>
            </div>
            <a href="">
              <div class="line-clamp-2 mb-2 mr-[2px]  justify-center items-center">${title}</div>
            </a>
            <div class="flex">
              <div class="justify-center items-center flex text-2xl font-medium">$</div>
              <div class="text-[25px] font-bold justify-center items-center flex">
                ${price}
              </div>
              <sup class="items-center flex justify-center">.99</sup>
              <div class="pb-10">
              </div>
            </div>
          </div>
          <div class="mx-12 my-5 justify-center items-center flex">
            <img class="w-auto object-cover" src="${image}"
              alt="ok">
          </div>
              `;
    main2 += `
  
        <div class="grid border-blue-300 border">

            <div class="mx-5 my-5 justify-center items-center flex">

              <img class="" src="${image}" alt="ok">
            </div>


            <div class="">
            <div class=" py-5 mx-5">
              <div class=" flex">
                <div data-star="${rating}"></div>
                <div class="text-sm justify-center items-center flex pl-2 font-light text-slate-500 ">(40)</div>
              </div>
              <a href="">

                <div class="line-clamp-2 mb-2 mr-[2px]  justify-center items-center">${title}</div>
              </a>
              <div class="flex">
                <div class="justify-center items-center flex text-2xl font-medium">$</div>
                <div class="text-[25px] font-bold justify-center items-center flex">
                ${price}
                </div>
                <sup class="items-center flex justify-center">.99</sup>

                <div class="pb-10">

                </div>
              </div>
            </div>
            </div>


          </div>
              `;
  });
  loadPageNav();
}
loadData();

document.getElementById("prod1").innerHTML = main1;
document.getElementById("prod2").innerHTML = main2;
// document.getElementById("pagination").innerHTML = wrapper;
// document.getElementById("btn").addEventListener("click", function () {
//   console.log("hello");
// });

// console.log(format);
