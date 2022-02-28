const salariosCol = colombia.map(function (personita) {
  return personita.salary;
});

const salariosColsort = salariosCol.sort(function (a, b) {
  return a - b;
});

function esPar(numerito) {
  return numerito % 2 === 0;
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedio = sumaLista / lista.length;
  return promedio;
}

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
