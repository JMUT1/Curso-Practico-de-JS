// Media Aritmetica o "Media"

// Consiste en sumar cada numero y dividirlo por la cantidad de numeros que hay

// Mediana --ordenar sueldos de menor a mayor, el numero de enmedio es la media, si tenemos dos numeros sumamos los numeros de en medio y dividimos entre dos

// Moda -- Elemento que más se repite



function calcularMediaAritmetica(lista) {
  let sumaLista = 0;

  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }

  const promedio = sumaLista / lista.length;

  return promedio;
}
