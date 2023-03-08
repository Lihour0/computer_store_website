const router = (event) => {
  event = event || window.event;
  window.history.pushState({}, "", event.target.href);
};

const routes = {
  404: "404.html",
  "/product": "product.html",
  "/cart": "cart.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((res) => res.text());
  document.getElementById("main").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = router;

handleLocation();
