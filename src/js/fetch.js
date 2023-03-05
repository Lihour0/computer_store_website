import { res } from "./gpu.js";

let main1 = "";
let main2 = "";
const data = res.map((val, key) => {
  const title = val.title;
  const price = Math.round(val.price);
  const image = val.img;

  main1 = `
            <div class=" py-5 pl-5 mx-3">
            <div class=" flex">
              <div data-star="3.4"></div>
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
  main2 = `
            <div class="grid grid-cols-2 columns-xs gap-y-8 border border-blue-300 ">

            <div class=" py-5 pl-5 ">
              <div class=" flex">
                <div data-star="3.9"></div>
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


            <div class="mx-3 my-3 flex justify-center items-center">
              <img class="" src="${image}"
                alt="ok">
            </div>


          </div>

              `;
});
document.getElementById("prod1").innerHTML = main1;
document.getElementById("prod2").innerHTML = main2;
// console.log(format);
console.log(res);
