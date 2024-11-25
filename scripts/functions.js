export function loadProducts(productList, load) {
    /* carrega os produtos na home e na pagina de prododus*/
  
    productList.forEach((produto) => {
      const valParcela = (produto.preco / 10).toFixed(2);
      const html = `<div class="produto1 idprod" id="${produto.codigoProduto}">
      <a href="./produto-unico.html" id="${produto.codigoProduto}">
          <div class="img-prod"><img src="${produto.imagemProduto.img1}" alt="" id="${produto.codigoProduto}"></div>
          <div class="nome-prod" id="${produto.codigoProduto}">
              <p id="${produto.codigoProduto}">${produto.tituloProduto} </p>
              <span id="${produto.codigoProduto}">Cod. ${produto.codigoProduto}</span>
          </div>
          <div class="preco-prod" id="${produto.codigoProduto}">
              <p id="${produto.codigoProduto}">R$ ${produto.preco}</p>
              <span id="${produto.codigoProduto}">10x de R$ ${valParcela} s/juros</span>
          </div>
      </a>
  </div>`;
      load.innerHTML += html;
    });
  }
  
  // captura o codigo/id do produto
  export function getProdId(){
    let itens = document.querySelectorAll(".idprod")
    console.log(itens)
    itens.forEach(item => item.addEventListener('click',(evento)=>{
        let prodID = evento.target.id
        localStorage.setItem('prodId',prodID)
        
    }))
  }
  
  // localiza o produto na base de dados
  export function findProduct(productList, productId){
    let produto = productList.find(produto => produto.codigoProduto == productId)
    return produto
  }
  
  //carrega o produto na pagina do produto
  
  export function loadProduct(produto){
  
  // const productCategory = document.querySelector("#product-category");
  // productCategory.innerText = `${produto.categoriaProduto}`;
  
  const img = document.querySelector(".imagens")
  const mainImg = document.querySelector(".main-image")
  const HTMLimgs = ` 
  <img src="${produto.imagemProduto.img2}" alt="">
  <img src="${produto.imagemProduto.img3}" alt="">
  <img src="${produto.imagemProduto.img4}" alt="">
  `
  img.innerHTML = HTMLimgs
  mainImg.src = produto.imagemProduto.img1
  
  const productTitle = document.querySelector(".info-produto")
  console.log(productTitle.children[0])
  productTitle.children[0].innerText = produto.tituloProduto
  productTitle.children[1].innerText = "COD: "+ produto.codigoProduto
  productTitle.children[2].innerText = "R$ "+produto.preco.toFixed(2)
  
  
  
  }
  
  function cartTotal(cartItens) {
    return cartItens.reduce((total, item) => total + item.preco, 0);
  }
  
  
  export function loadCartItem(cartItens,cartItensHTML){
  
    if(cartItens.length == [] || cartItens.length == [] ){
      cartItensHTML.innerHTML = `Seu carrinho está vazio`
    } else {
      cartItens.forEach(item => {  
        let html = `
        <td class="cart-items">
                              
                              <div class="cart-item">
                                  
                                  <button class="remover-item">×</button>
                                 
                                  <img src=".${item.imagemProduto.img1}" alt="${item.tituloProduto}">
                                  <div class="item-details">
                                     
                                      <h3>${item.tituloProduto}</h3>
                                      <div class="controle-quatidade">
                                         
                                          <button class="menos">−</button>
                                          <span class="quantidade">1</span>
                                          <button class="mais">+</button>
                                      </div>
                                      
                                      <p class="preco">R$ ${item.preco} </p>
                                  </div>
                              </div>
                              
                          </td>
    `
    cartItensHTML.innerHTML += html
    })
    const total = cartTotal(cartItens);
    localStorage.setItem('totalValue', total);
    const price = document.querySelector('.cart-summary p:nth-child(1) span');
    const price2 = document.querySelector('.cart-summary p:nth-child(3) span');
    price.innerHTML = `R$ ${total.toFixed(2)}`
    price2.innerHTML = `R$ ${total.toFixed(2)}`;
  
    }}
    
  
  
    export function removeCartItem(sacolaCompras) {
      let botaoDel = document.querySelectorAll(".remover-item") /* remover produto do carrinho */
      let cartItens = document.querySelector("#checkout")
      botaoDel.forEach(botao => botao.addEventListener('click', (event) => {
        let item = event.target.parentElement.parentElement
        console.log(item)
        cartItens.removeChild(item)
        console.log(item.id)
        let index = sacolaCompras.findIndex(i => i.codigoProduto == item.id)
        console.log(index)
        sacolaCompras.splice(index, 1)
        console.log(sacolaCompras)
        localStorage.setItem('listaCompras', JSON.stringify(sacolaCompras))
    
        // Update the price element here
        const total = cartTotal(sacolaCompras);
        localStorage.setItem('totalValue', total);
        const price = document.querySelector('.cart-summary p:nth-child(1) span');
        const price2 = document.querySelector('.cart-summary p:nth-child(3) span');
        console.log(price2)
        price.innerHTML = `R$ ${total.toFixed(2)}`;
        price2.innerHTML = `R$ ${total.toFixed(2)}`;
       
      }));
    }
  
  
  export function shop(pedidos){
  
  const form = document.querySelector('#billing form');
  const inputs = form.querySelectorAll('input,select');
  const inputValues = {};
  inputs.forEach((input) => {
    if (input.type!== 'submit' && input.type!== 'button') {
      inputValues[input.name] = input.value;
    }
  });
  console.log(inputValues);
  const order = {
     id: pedidos.length > 0? pedidos[pedidos.length - 1].id + 1 : 1,
     address:{...inputValues},
     items: JSON.parse(localStorage.getItem("listaCompras")),
     totalValue: parseFloat(localStorage.getItem("totalValue"))
  };
  
  pedidos.push(order);
  localStorage.setItem("pedidos", JSON.stringify(pedidos));;
  alert("pedido realizado com sucesso")
  localStorage.removeItem("listaCompras");
  localStorage.removeItem("totalValue");
  window.location = "./index.html"
  } 