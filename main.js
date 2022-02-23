//Codigo del Cuadrado
console.group("Cuadrado");
// Lado del Cuadrado
const ladoCuadrado = 5;
console.log(`los lados del cuadrado miden ${ladoCuadrado} cms`);
//Perimetro del Cuadrado
const perimetroCuadrado = ladoCuadrado * 4;
console.log(`el perimetro del cuadro es ${perimetroCuadrado} cms`);
// Area del Cuadrado
const areaCuadrada = ladoCuadrado * ladoCuadrado;
console.log(`el area del cuadro es ${areaCuadrada} cms^2`);
//--------------------------------------------------------------//
console.groupEnd ();


// Codigo del Triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log (`los lados del triangullo miden ${ladoTriangulo1}cms ${ladoTriangulo2}cms ${baseTriangulo}cms`);
console.log(`La altura del triangulo es de  ${alturaTriangulo} cms`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es de ${perimetroTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log (`El area del triangulo es de ${areaTriangulo} cm^2`);

console.groupEnd();

 //CODIGO DEL CIRCULO
console.group("Circulo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const perimetroCirculo = parseFloat(diametroCirculo * PI).toFixed(2);
console.log(`El perimetro del circulo es ${perimetroCirculo} cm`)

const areaCirculo = parseFloat((radioCirculo * radioCirculo) * PI).toFixed(2);
console.log(`El area del circulo es de ${areaCirculo} cm^2`)

console.groupEnd();