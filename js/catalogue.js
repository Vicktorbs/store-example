let products = localStorage.getItem("productos")
let table = document.getElementById("table")
let numberIDs = 5


if (products !== null) {
    products = JSON.parse(products)
    window.onload = createTable(products)
}

function createTable(productsData) {
    let newElement = document.createElement("tbody")
    let data = ``
    productsData.forEach(element => {
        data += `
            <tr>
                <td>${ element.id }</td>
                <td>${ element.product }</td>
                <td>${ element.productDescriptio }</td>
                <td>$${ element.price }</td>
            </tr>
        `
    })
    // 
    // console.log(new Date(), 'Creando template de lista de productos');
    table.innerHTML = data
}

function addNewProduct() {
    let nameProduct = document.getElementById("nameproduct");
    let descriptioProduct = document.getElementById("descriptionproduct");
    let priceProduct = document.getElementById("price");
    let localProducts = localStorage.getItem("productos")
    localProducts = JSON.parse(localProducts)
    alert("¿Agregar " + nameProduct.value + " al catalogo?")
    localProducts.push({product: nameProduct.value, imgPath: './img/No_Image_Available.jpg', productDescriptio: descriptioProduct.value, price: priceProduct.value, id: localProducts.length + 1})
    
    // 
    // console.log(new Date(), 'Agregar un nuevo producto al catalogo de productos');
    createTable(localProducts)
    localProducts = JSON.stringify(localProducts)
    localStorage.setItem("productos", localProducts)
}