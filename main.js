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