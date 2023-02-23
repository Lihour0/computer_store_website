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
      const data = JSON.stringify(res.data);
      console.log(data);
      let format = "";
      data.map((val) => {
        format = `<div>${val.title}<div>`;
      });
      document.getElementById("root").innerHTML = format;
    })
    .catch((err) => console.error(err));
}
