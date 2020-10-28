let productsArr = [
    {product: 'Top', imgPath: './img/top1.png', productDescriptio: 'Top tejido de canalé con cordón delantero', price: 182, id: 1},
    {product: 'Top', imgPath: './img/top2.png', productDescriptio: 'Top corto de tirante con perlas', price: 200, id: 2},
    {product: 'Sudadera', imgPath: './img/sudadera1.png', productDescriptio: 'Sudadera tie dye con capucha y cordón', price: 321, id: 3},
    {product: 'Sudadera', imgPath: './img/sudadera2.png', productDescriptio: 'Sudadera con capucha con estampado de planeta color negro', price: 344, id: 4},
    {product: 'Sudadera', imgPath: './img/sudadera3.png', productDescriptio: 'Sudadera con capucha con estampado de planeta color vino', price: 292 , id: 5},
];

var test = localStorage.getItem('productos');
if (test === null) {
    localStorage.setItem("productos", JSON.stringify(productsArr))
    console.log(new Date(), 'Guardar arreglo en localstorage');
}