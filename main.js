//Codigo del Cuadrado
console.group("Cuadrado");

//Formula perimetro del Cuadrado
function perimetroCuadrado (lado) {
    return lado *4;
};
// funcion area del Cuadrado
function areaCuadrada(lado){
    return lado * lado

};
console.groupEnd ();


// Codigo del Triangulo
console.group("Triangulo");

function perimetroTriangulo (lado1, lado2, baseTriangulo){
    return lado1 + lado2 + baseTriangulo;
};

function areaTriangulo (base, altura){
    return (base * altura) / 2;
};


console.groupEnd();

 //CODIGO DEL CIRCULO
console.group("Circulo");

const PI = Math.PI;

function diametroCirculo (radio){
    return radio * 2;
};

function perimetroCirculo(radio){
    const diametro = diametroCirculo (radio);
    return diametro * PI;
};

function areaCirculo(radio){
    return (radio * radio) * PI;
};


console.groupEnd();

// Interaccion de HTML y JS
//Funcion del Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrada(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    alert (area);
}

//Funcion del Triangulo

function calcularPerimetroTriangulo(){
    const inputT1 = document.getElementById("inputTriangulo1");
    const valueT1 = Number (inputT1.value);
    const inputT2 = document.getElementById("inputTriangulo2");
    const valueT2 = Number (inputT2.value);
    const baseT = document.getElementById("inputbase");
    const valueBase = Number (baseT.value);

    const perimetro = perimetroTriangulo(valueT1, valueT2, valueBase);
    alert (perimetro);
}