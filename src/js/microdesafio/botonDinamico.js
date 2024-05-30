const crearBotonDinamico = (texto, clase, id, disabled) => {
  const divRoot = document.getElementById("root");
  const btn = document.createElement("button");

  btn.innerHTML = texto;
  btn.className = clase;
  btn.id = id;
  btn.disabled = disabled;

  btn.addEventListener("click", handleClick);

  divRoot.appendChild(btn);
};
const handleClick = () => {
  alert("clickeaste a un botón dinámico");
};

crearBotonDinamico("Soy un botón dinámico", "btn", "btn", false);
