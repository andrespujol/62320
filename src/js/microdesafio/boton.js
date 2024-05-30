const crearBoton = () => {
  const divRoot = document.getElementById("root");
  const btn = document.createElement("button");

  btn.innerHTML = "Clickeame";
  btn.className = "btn";
  btn.id = "btn";
  btn.disabled = false;

  btn.addEventListener("click", handleClick);

  divRoot.appendChild(btn);
};
const handleClick = () => {
  alert("clickeaste");
};

crearBoton();
