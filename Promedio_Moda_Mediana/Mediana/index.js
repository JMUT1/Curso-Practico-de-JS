function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    ); 
      const promedio = sumaLista / lista.length;
      return promedio;
    }

const lista1 = [100,200,300,500,400000];

const mitadlista1 =  parseInt (lista1.length / 2);

//Funciones validadora
function esPar(numerito){
    if (numerito % 2 === 0 ){
        return true;
    }
    else{
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
const elemento1 = lista1[mitadlista1];
const elemento2 = lista1 [mitadlista1 - 1];

const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2,])

mediana = promedioElemento1y2;
}
else {
    mediana = lista1 [mitadlista1];
};