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

//Triangulo Isoceles

function alturaTrianguloIsoceles (ladoA, ladoB, base){
    if (ladoA === ladoB && ladoA != base){
        alert (`Tu Triangulo es Isoceles`);
        const altura =  Math.sqrt((ladoA **2) - (base **2 / 4));
        const alturaDecimal = Number (parseFloat(altura).toFixed(3));
        return alturaDecimal;
    }
    else{
        alert(`No es un Triangulo Isoceles`);
    };
};

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

//Interacion Circulo

function calcularDiametroCirculo(){
    const  input = document.getElementById("inputRadioCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert (diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputRadioCirculo");
    const value = input.value;

    const perimetroDelCirculo = parseFloat(perimetroCirculo(value)).toFixed(3);
    alert(perimetroDelCirculo); 
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputRadioCirculo");
    const value = input.value;

    const areaDelCirculo = parseFloat(areaCirculo(value).toFixed(3));

    alert(areaDelCirculo);
}

// Interación Triangulo Isoceles 

function calcularAlturaTrianguloIsoceles(){
    const inputladoA = document.getElementById("ladoTrianguloA");
    const valueladoA = Number(inputladoA.value);
    const inputladoB = document.getElementById("ladoTrianguloB");
    const valueladoB = Number(inputladoB.value);
    const inputBase = document.getElementById("baseTriangulo");
    const valueBase = Number(inputBase.value);

    const alturaIsoceles = alturaTrianguloIsoceles(valueladoA, valueladoB, valueBase);
    alert (alturaIsoceles);
}