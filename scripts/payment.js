import {shop} from "./functions.js";
let sacolaCompras = JSON.parse(localStorage.getItem("listaCompras")) 
let totalValue = parseFloat(localStorage.getItem("totalValue"));
console.log(totalValue)

const price = document.querySelector('.cart-summary p:nth-child(1) span');
      const price2 = document.querySelector('.cart-summary p:nth-child(3) span');
      console.log(price2)
      price.innerHTML = `R$ ${totalValue.toFixed(2)}`;
      price2.innerHTML = `R$ ${totalValue.toFixed(2)}`;
 

let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null){ /* Criando uma lista de pedidos vazia*/
    pedidos = []
}

const shopBtn = document.querySelector(".checkout-btn")
shopBtn.addEventListener("click",() => {
    shop(pedidos);
})