precio = 400000;

 let precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let sumar = document.querySelector("#sumar");
let restar = document.querySelector("#restar");

restar.disabled = true;

sumar.addEventListener("click", () => {
  let cantidad = document.querySelector(".cantidad");
  let valor = cantidad.innerHTML;
  cantidad.innerHTML = parseInt(valor) + 1;
  let total = document.querySelector(".valor-total");
  total.innerHTML = parseInt(cantidad.innerHTML) * precio;
  restar.disabled = false;
});

restar.addEventListener("click", () => {
  let cantidad = document.querySelector(".cantidad");
  let valor = cantidad.innerHTML;
  cantidad.innerHTML = parseInt(valor) - 1;
  let total = document.querySelector(".valor-total");
  total.innerHTML = parseInt(cantidad.innerHTML) * precio;
  if (valor == 1) {
    restar.disabled = true;
  }
}); 




