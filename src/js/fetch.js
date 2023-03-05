import { res } from "./gpu.js";

let main1 = "";
let main2 = "";
const me = res;
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
  main2 += `
  
        <div class="grid border-blue-300 border">

            <div class="mx-5 my-5 justify-center items-center flex">

              <img class="flex-col h-40 scale-110" src="${image}" alt="ok">
            </div>


            <div class="">
            <div class=" py-5 mx-5">
              <div class=" flex">
                <div data-star="3.7"></div>
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
document.getElementById("prod1").innerHTML = main1;
document.getElementById("prod2").innerHTML = main2;
// console.log(format);
console.log();
