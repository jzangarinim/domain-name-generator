window.onload = () => {
  let body = document.body;
  let app = document.querySelector("#app");

  let ul = document.createElement("ul");
  app.appendChild(ul);

  let li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = "ola";
};
