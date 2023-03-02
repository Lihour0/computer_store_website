import axios from "axios";

const options = {
  method: "GET",
  url: "nav.html",
  // headers: {
  //   "X-RapidAPI-Key": `${process.env.RapidAPI_KEY}`,
  //   "X-RapidAPI-Host": `${process.env.host}`,
  // },
};

axios(options)
  .then((res) => {
    const data = res.data;
    let oldelem = document.querySelector("nav#navbar");
    let newelem = document.createElement("nav");
    newelem.innerHTML = data;
    oldelem.parentNode.replaceChild(newelem, oldelem);
  })
  .catch((err) => {
    console.error(err);
  });
