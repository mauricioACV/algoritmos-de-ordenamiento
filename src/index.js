console.clear();

//Arreglo para pruebas
let arregloNum = [8, 5, 3, 1, 9, 2, 6, 4];
console.log("arreglo sin orden", arregloNum);

//***********************************************************
//1.- Ordenamiento por selección
//***********************************************************

const orderBySelect = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

console.log("seleccion Orden", orderBySelect([...arregloNum]));

//***********************************************************
//2.- Ordenamiento por Inserción
//***********************************************************

const orderByInsert = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let pos = i;
    let valor = arr[i];
    while (pos >= 1 && valor < arr[pos - 1]) {
      arr[pos] = arr[pos - 1];
      pos = pos - 1;
    }
    arr[pos] = valor;
  }
  return arr;
};

console.log("inserción orden", orderByInsert([...arregloNum]));

//***********************************************************
//3.- Ordenamiento Burbuja (sencillo, pero el más INEFICIENTE!)
//***********************************************************
const orderByBubble = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
};

console.log("burbuja orden", orderByBubble([...arregloNum]));

//***********************************************************
//4.- Ordenamiento por
//***********************************************************
