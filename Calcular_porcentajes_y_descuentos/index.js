const cupones = [{
    name: "cupon1",
    discount: 15,
},
{
    name: "cupon2",
    discount: 20,
},
{
    name: "cupon3",
    discount: 30,
},
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

    const isCuponValueValid = function(cupon){
        return cupon.name === cuponValue;
    };
    
    const userCupon = cupones.find (isCuponValueValid);
    
    if(!userCupon){
        alert (`El cupon ${cuponValue} no es valido`);
    }
    else{
        const descuento = userCupon.discount;
        const precioConCupon = calcularPrecioConDescuento (precioValue, descuento);

        const resultP = document.getElementById("ResultPrice");

        resultP.innerHTML = `El precio con descuento son $${precioConCupon} pesos`
    }
}