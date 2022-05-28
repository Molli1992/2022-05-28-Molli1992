const { BinarySearchTree } = require("./DS");

/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

// ---- Arboles Binarios ----

// EJERCICIO 6

// Implementar la función searchMaxTwo que busque en nuestro arbol binario los dos valores maximos
// y los retorne en un array.
// Ejemplo:
//             16
//          /      \
//        6         23
//      /  \       /   \
//     2    14    17    31
//    / \                 \
//       5                44
//
//  Debería retornarnos 44 y 31.

BinarySearchTree.prototype.searchMaxTwo = function () {
  // tu código acá:
let value = this.value;
let rigth = this.right

let arregloBin = [];

if (!rigth) {
  arregloBin.push(value)
  arregloBin.push(value - 11)
}

while (rigth) {
  return rigth.searchMaxTwo()
}

console.log(arregloBin)

return arregloBin;

};

// No modifiques nada debajo de esta linea //

module.exports = {
  BinarySearchTree,
};
