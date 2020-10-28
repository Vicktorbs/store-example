document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

let cards = document.getElementById("card-container")
let showData = document.createElement("div")
var cardsLocalstorage = localStorage.getItem('productos');

let forma = ``

if (cardsLocalstorage !== null) {
  // 
  // console.log(new Date(), 'Al cargar la informacion de localstorage');
  formater(cardsLocalstorage)
}

function formater(data) {
  data = JSON.parse(data)
  let newArry;
  data.forEach(element => {
    // console.log(element.product)
    forma = forma + `
            <div class="col s6 m3">
                <div class="card z-depth-3">
                    <div class="card-image">
                      <img src="${ element.imgPath }">
                      <span class="cards-title card-title">${ element.product }</span>
                    </div>
                    <div class="card-content">
                        <p>${ element.productDescriptio }</p>
                        <p class="price-card">Precio $${ element.price }</p>
                        <a onclick="addToShoppingCar(${ element.id })" class="btn-floating halfway-fab waves-effect waves-light red" >
                            <i class="material-icons">add</i>
                        </a>
                    </div>
                </div>
            </div>
    `
    showData.innerHTML = forma
    cards.appendChild(showData)
  });
  // 
  // console.log(new Date(), 'Al dibujar las tarjetas en el html');
  checkCar()
}

function addToShoppingCar(newElement) {
  // 
  // console.log(new Date(), 'Agregar nuevo elemento al carrito de compras');
  console.log(newElement);
  let car = localStorage.getItem("car")
    console.log(car);
  if (car === null) {
    alert('¿Agregar producto al carrito?')
    newElement = [newElement]
    newElement = JSON.stringify(newElement)
    localStorage.setItem("car", newElement)
    checkCar()
  } else if (car !== null) {
    alert('¿Agregar producto al carrito?')
    car = JSON.parse(localStorage.getItem("car"))
    car.push(newElement)
    car = JSON.stringify(car)
    localStorage.setItem("car", car)
    checkCar()
  }
}

function checkCar() {
  // 
  // console.log(new Date(), 'Modificar numero de elementos en el carrito');
  let statusCar = document.getElementById("listStatus")
  let localstorageCar = localStorage.getItem("car")
  if (localstorageCar !== null) {
    let arr = JSON.parse(localstorageCar)
    console.log(arr);
    statusCar.textContent = arr.length
  } else {
    statusCar.textContent = 0
  }
}