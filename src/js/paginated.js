import { res } from "./gpu.js";
import { paginate } from "./paginate.js";

const btn = document.getElementById("btn");
const main = document.getElementById("prod2");

let pages = 1;
let perPage = 12;

function loadItems() {
  let paginatedData = paginate(res, pages, perPage);
  let data = paginatedData.data;
  console.log(paginatedData);
  main.innerHTML = "";
  data.map((val) => {
    const item = document.createElement("div");
    const title = val.title;
    const price = Math.round(val.price);
    const image = val.img;
    const rating = 4;
    item.innerHTML = `
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
    main.append(item);
  });
  changePage();
}
loadItems();

function changePage() {
  btn.innerHTML = "";
  for (let i = 0; i < 7; i++) {
    const button = document.createElement("div");
    button.innerHTML = `
    <button value="${i + 1}">${i + 1}</button>
    
    `;
    button.addEventListener("click", (e) => {
      pages = e.target.innerHTML - 1;
      loadItems();
    });
    btn.append(button);
  }
}
