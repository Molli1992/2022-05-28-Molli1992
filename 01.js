const { LinkedList } = require('./DS');

// No modifiques nada arriba de esta linea //
/*
  EJERCICIO 1
   Agregar el método sortList al prototipo de LinkedList. Este método deberá ordenar los elementos de nuestra lista enlazada de mayor a menor.
   Si la lista está vacía, debe retornar false;
   Ejemplo:
     Suponiendo que la lista actual es: Head --> [8] --> [12] --> [3] --> [16]
     LinkedList.sortList();
     Ahora la lista quedaría: Head --> [16] --> [12] --> [8] --> [3]
*/

LinkedList.prototype.sortList = function () {
  // Tu código aca:
  if (this.head === null) {
    return false
  }

var arr = [];

var counter = this.head;

while (counter) {
  arr.push(counter.value);
  counter = counter.next;
}

console.log(arr);

for (let i = 1; i < arr.length; i++) {
  let j = i - 1;
  let aux = arr[i];
  while (j >= 0 && arr[j] < aux) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = aux;
}

console.log(arr);


};


// No modifiques nada debajo de esta linea //

module.exports = {
  LinkedList
};