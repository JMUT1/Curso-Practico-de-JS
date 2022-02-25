
function calcularPrecioConDescuento (precio, descuento){
    
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento) / 100;

    return precioConDescuento;
}

//Interacion HTML y JS

function onClickButtonPriceDiscount () {
    const precioUsuario = document.getElementById("inputPrice");
    const precioValue = precioUsuario.value;

    const discountUsuario = document.getElementById("inputDiscount");
    const discountValue = discountUsuario.value;

    const precioConDescuento = calcularPrecioConDescuento(precioValue,discountValue);

    const resultP = document.getElementById("ResultPrice");

    resultP.innerText = `El precio con descuento son $${precioConDescuento} pesos`
}