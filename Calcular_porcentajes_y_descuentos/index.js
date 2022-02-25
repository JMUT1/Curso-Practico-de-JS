const cupones = [
    "cupon1",
    "cupon2",
    "cupon_secreto",
];


function calcularPrecioConDescuento (precio, descuento){
    
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescuento;
}

//Interacion HTML y JS

function onClickButtonPriceDiscount () {
    const precioUsuario = document.getElementById("inputPrice");
    const precioValue = precioUsuario.value;

    const cuponUsuario = document.getElementById("inputCupon");
    const cuponValue = cuponUsuario.value;

    let descuento;

    switch(cuponValue){
        case cupones [0]:
            descuento = 15;
        break;
        case cupones [1]:
            descuento = 30;
        break;
        case cupones [2]:
            descuento = 25;
    };

    const precioConDescuento = calcularPrecioConDescuento(precioValue,descuento);

    const resultP = document.getElementById("ResultPrice");

    resultP.innerHTML = `El precio con descuento son $${precioConDescuento} pesos`
}