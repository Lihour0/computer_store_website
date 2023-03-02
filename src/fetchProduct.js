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
        format += ` <div
          class="w-fit mx-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          <div
          class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <img
            src="${val.image}"
            alt="Product"
            class="h-52 w-72 object-cover rounded-t-xl"
          />
          <div class="px-4 py-3 w-72">
            <div class="text-gray-400 mr-3 uppercase text-xs">Brand</div>
            <div class="text-lg font-bold text-black truncate block capitalize">
              <a href="/">
              ${val.title}
              
                 </a>
            </div>
            <div class="flex items-center">
              <p class="text-lg font-semibold text-black cursor-auto my-3">
              $ ${val.price}
              </p>
              <del>
                <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del>
              <div class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                ></svg>
               
              </div>
              </div>
              </div>
              `;
      });
      document.getElementById("root").innerHTML = format;
      console.log(format);
    })
    .catch((err) => console.error(err));
}
