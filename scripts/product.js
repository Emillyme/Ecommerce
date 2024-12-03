import { database } from "./database.js";
import { findProduct, loadProduct } from "./functions.js"; 


let id = localStorage.getItem('prodId') 
let listaCompras = JSON.parse(localStorage.getItem('listaCompras')) 


if (listaCompras == null || listaCompras.length == 0){
    listaCompras = []
}

let produto = findProduct(database,id)
//let selecaoProduto = document.querySelector(".grid_col_1") 



loadProduct(produto) 

let botaoComprar = document.querySelector(".btn-add") 


botaoComprar.addEventListener('click',()=>{
    // const quantity = document.querySelector("#dropdownButton")
    // console.log(quantity)

    //let quantity = parseInt(document.querySelector("#quantity").value) 
    //roduto.quantity = quantity
    listaCompras.push(produto)
    alert("Produto adicionado com sucesso!")
    localStorage.setItem('listaCompras',JSON.stringify(listaCompras))
    console.log(listaCompras)
    window.location = "./checkout.html"
})
