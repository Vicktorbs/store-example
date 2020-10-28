let carrito = localStorage.getItem("car")
let listaElementHtml = document.getElementById("lsit-container");
let totalOne = document.getElementById("totalPayment")
let totalDos = document.getElementById("totalPayment2")
let ivaElement = document.getElementById("iva")
let totalPay = 0;

if (carrito !== null) {
    carrito = JSON.parse(carrito)
    // console.log(carrito);
    productList()
}

function productList() {
    let products = localStorage.getItem("productos")
    products = JSON.parse(products)
    // console.log(products);
    let listaElement;
    let lista = [];
    carrito.forEach(element => {
        // console.log(element);
        listaElement = products.find(producto => producto.id === element )
        lista.push(listaElement);
        // console.log(lista);
    });
    // 
    // console.log(new Date(), 'Obteniendo lista de carrito de compras');
    htmlContructor(lista)
}

function htmlContructor(list) {
    let div = document.createElement("div");
    let modelo = ``
    let iva = 0
    // 
    // console.log(new Date(), 'Creando template de de carrito de compras');
    list.forEach(element => {
        // console.log(element);
        modelo += `
        <a class="collection-item row" id="identifier-${ element.id }">
            <div class="col s5">${ element.product }</div>
            <div class="col s5">$ ${ element.price }</div>
            <div class="col s2"><button class="waves-effect waves-light btn" onclick="removeElement(${ element.id })">X</button></div>
        </a>
        `
        // console.log(parseInt(element.price));
        totalPay = totalPay + parseInt(element.price)
    });
    div.innerHTML = modelo;
    listaElementHtml.appendChild(div)
    totalOne.textContent = totalPay
    iva = totalPay * 0.16
    ivaElement.textContent = iva
    totalDos.textContent = totalPay + iva
}

function pay() {
    alert("Confirmar pago")
    // 
    // console.log(new Date(), 'Limpiando carrito de compras');
    localStorage.removeItem("car")
    listaElementHtml.textContent = ""
    totalOne.textContent = 0
    ivaElement.textContent = 0
    totalDos.textContent = 0
}

function removeElement(id) {
    console.log(id);
    let toDelet = document.getElementById("identifier-"+id)
    let productsStorage = localStorage.getItem("productos")
    productsStorage = JSON.parse(productsStorage)
    let listaElemet
    productsStorage.forEach(element => {
        listaElemet = productsStorage.find(producto => producto.id === id )
    });
    // 
    // console.log(new Date(), 'Removiendo un elemento del carrito de compras');
    alert("¿Remover " + listaElemet.product + " del carrito de compras?")
    totalPay = totalPay - listaElemet.price
    console.log(totalPay);
    iva = totalPay * 0.16
    totalOne.textContent = totalPay
    ivaElement.textContent = iva 
    totalDos.textContent = totalPay + iva
    toDelet.remove()
    console.log(listaElemet);
}