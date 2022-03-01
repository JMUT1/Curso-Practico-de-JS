//Helpers o Utilis
function esPar(numerito) {
    return numerito % 2 === 0;
  }

  //Calculando la mediana General
const salariosCol = colombia.map(function (personita) {
  return personita.salary;
});

const salariosColsort = salariosCol.sort(function (a, b) {
  return a - b;
});


//funcion media aritmetica
function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedio = sumaLista / lista.length;
  return promedio;
}

//Mediana General
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.lenght)) {
    const personitaMitad1 = lista[mitad - 1];
    const personitaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  } else {
    const personitaMitad = lista[mitad];
    return personitaMitad;
  }
}

const medianaGeneralCol = medianaSalarios(salariosColsort);

// Mediana del top 10% General

const spliceStar = (salariosColsort.length * 90) / 100;
const spliceCount = salariosColsort.length - spliceStar;

const salariosColTop10 = salariosColsort.splice(spliceStar,spliceCount);

const medianaTop10Col = medianaSalarios(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
})