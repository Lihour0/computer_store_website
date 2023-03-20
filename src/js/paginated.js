import { getRand } from "../utils/randomNum.js";
import { res } from "./gpu.js";
import { paginate } from "./paginate.js";

const btn = document.getElementById("btn");
const main = document.getElementById("prodList");
const searchQuery = document.getElementById("search");

let pages = 1;
let perPage = 12;

function loadItems() {
  var paginatedData = paginate(res, pages, perPage);
  let data = paginatedData.data;
  main.innerHTML = "";
  data.map(({ title, img, link, price }) => {
    const item = document.createElement("div");

    const rating = getRand(3, 5);
    const ratingVal = Math.floor(Math.random() * 3000);

    item.className = "flex";
    item.innerHTML = `
    <div class="grid gap-3 bg-white rounded-2xl">

            <div class="mx-5 my-5 justify-center items-center flex">

              <img  src="${img}" alt="ok">
            </div>

            <div>
            <div class=" py-5 mx-5">
              <div class=" flex">
                <div data-star="${rating}"></div>
                <div class="text-sm justify-center items-center flex pl-2 font-light text-slate-500 ">(${ratingVal})</div>
              </div>
              <a href="${link}">

                <div class="line-clamp-2 mb-2 mr-[2px]  justify-center items-center">${title}</div>
              </a>
              <div class="flex">
                <div class="justify-center items-center flex text-2xl font-medium">$</div>
                <div class="text-[25px] font-bold justify-center items-center flex">
                ${price}
                </div>
                <sup class="items-center flex justify-center">.99</sup>

              </div>
            </div>
            </div>
          </div>
    `;
    main.append(item);
  });
  changePage();
  function changePage() {
    btn.innerHTML = "";
    for (let i = 0; i < paginatedData.totalPages; i++) {
      const button = document.createElement("div");
      button.innerHTML = `
    <button class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 value="${
      i + 1
    }">${i + 1}</button>
    `;

      button.addEventListener("click", (e) => {
        pages = e.target.innerHTML;
        loadItems();
      });
      btn.append(button);
    }
  }
  function search() {
    searchQuery.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();
    });
  }
  search();
}
loadItems();

function previousPage() {
  if (pages > 1) {
    pages--;
    loadItems();
  }
}
function nextPage() {
  if (pages < totalPages) {
    pages++;
    loadItems();
  }
}

document
  .querySelector("#prevBtn")
  .addEventListener("click", previousPage, false);
document.querySelector("#nextBtn").addEventListener("click", nextPage, false);
