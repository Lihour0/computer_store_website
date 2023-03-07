import { res } from "./gpu.js";

const content = document.getElementById("content");
// const btn = document.getElementById("btn");

let pageIndex = 0;
let itemsPerPage = 6;

loadItems();
function loadItems() {
  content.innerHTML = "";
  for (
    let i = pageIndex * itemsPerPage;
    i < pageIndex * itemsPerPage + itemsPerPage;
    i++
  ) {
    if (!res[i]) {
      break;
    }
    const item = document.createElement("div");
    const image = res[i].img;
    const title = res[i].title;
    const price = res[i].price;
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
    content.append(item);
  }
  loadPageNav();
}

function loadPageNav() {
  btn.innerHTML = "";
  for (let i = 0; i < res.length / itemsPerPage; i++) {
    const button = document.createElement("span");
    button.innerHTML = i + 1;
    button.addEventListener("click", (e) => {
      pageIndex = e.target.innerHTML - 1;
      loadItems();
    });
    btn.append(button);
  }
}
