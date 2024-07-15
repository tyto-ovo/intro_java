precio = 400000;

precioSpan = document.querySelector(".precio-inicial");
/* totalObt = document.querySelector(".valor-total"); */
cantidad = document.querySelector(".cantidad");
precioSpan.innerHTML = precio;
/* let total = Number(totalObt.innerHTML);

total.innerHTML = precio * cantidad; */
const suma = () => {
  let totalObt = document.querySelector(".valor-total");
  let total = Number(totalObt.innerHTML);
  let cont = document.querySelector(".cantidad");
  let cantidad = Number(cont.innerHTML);
  total = precio * cantidad;

  totalObt.innerHTML = total;
};
