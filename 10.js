
// EJERCICIO 10
// Implementar la función insertAndSort que recibe un arreglo y un objeto y retorna
// un arreglo ordenado de menor a mayor con los números del array y con
// los números de los valores del objeto.
// Para el ordenamiento NO usar la función sort de JavaScript. Deben usar alguno de los
// algoritmos de ordenamiento que se vieron en clase.
// Ejemplo:
// insertAndSort([4,8,13], {a:2, b:1, c:5}) ----> Debería retornar [1, 2, 4, 5, 8, 13]

function insertAndSort(array, obj) {
  // Tu código acá

  var arre = array;

  for (const property in obj) {
    arre.push(obj[property]);
  }

  for (let i = 1; i < arre.length; i++) {
    let j = i - 1;
    let aux = arre[i];
    while (j >= 0 && arre[j] > aux) {
      arre[j + 1] = arre[j];
      j--;
    }
    arre[j + 1] = aux;
  }
  return arre;

}



//⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = insertAndSort;
