import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function fetchProduct() {
  const options = {
    method: "GET",
    url: `${process.env.fakestoreURL}`,
    params: { limit: "5", offset: "0" },
    // headers: {
    //   "X-RapidAPI-Key": `${process.env.RapidAPI_KEY}`,
    //   "X-RapidAPI-Host": `${process.env.host}`,
    // },
  };

  axios
    .request(options)
    .then((res) => {
      const data = res.data;
      let format = "";
      console.log(data);
      data.map((val) => {
        const rating = val.rating.rate;
        const rateCount = val.rating.count;
        const title = val.title;
        const price = val.price;
        const image = val.image;
        // format = `<div class=" py-5 pl-5 mx-3">
        //     <div class=" flex">
        //       <div data-star="${rating}"></div>
        //       <div class="text-sm justify-center items-center flex pl-2 font-light text-slate-500 ">(${rateCount})</div>
        //     </div>
        //     <a href="">
        //       <div class="line-clamp-2 mb-2 mr-[2px]  justify-center items-center">${title}</div>
        //     </a>
        //     <div class="flex">
        //       <div class="justify-center items-center flex text-2xl font-medium">$</div>
        //       <div class="text-[25px] font-bold justify-center items-center flex">
        //         ${price}
        //       </div>
        //       <sup class="items-center flex justify-center">.99</sup>
        //       <div class="pb-10">
        //       </div>
        //     </div>
        //   </div>
        //   <div class="mx-12 my-5 justify-center items-center flex">
        //     <img class="w-auto object-cover" src="${image}"
        //       alt="ok">
        //   </div>
        //       `;
        format = `
        <div class="grid grid-cols-2 columns-xs gap-y-8 border border-blue-300 ">

            <div class=" py-5 pl-5 ">
              <div class=" flex">
                <div data-star="3.7"></div>
                <div class="text-sm justify-center items-center flex pl-2 font-light text-slate-500 ">(40)</div>
              </div>
              <a href="">

                <div class="line-clamp-2 mb-2 mr-[2px]  justify-center items-center">IPASON - Gaming desktop - AMD
                  Ryzen 5 5600G 6 core 3.9GHz - 16GB(8*2) DDR4 3200MHz - 500GB M.2 NVMe - 500W PSU - Windows 11 home -
                  WIFI - Gaming PC</div>
              </a>
              <div class="flex">
                <div class="justify-center items-center flex text-2xl font-medium">$</div>
                <div class="text-[25px] font-bold justify-center items-center flex">
                  199
                </div>
                <sup class="items-center flex justify-center">.99</sup>

                <div class="pb-10">

                </div>
              </div>
            </div>


            <div class="mx-3 my-3 flex justify-center items-center">
              <img class="" src="https://c1.neweggimages.com/ProductImageCompressAll300/AZEBS23012902UZX582.jpg?ex=2"
                alt="ok">
            </div>


          </div>
             
        `;
      });
      document.getElementById("prod1").innerHTML = format;
      console.log(format);
    })
    .catch((err) => console.error(err));
}
