// Encontrar el número más grande
// Problema: Búsqueda del Máximo en un Arreglo con Divide and Conquer
// Dado un arreglo de números, implementa una función que utilice el enfoque Divide and Conquer para encontrar el número máximo.

// Arreglo de 20 números aleatorios (para prueba)
const generateRandomArray = (size) => {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        randomArray.push(Math.floor(Math.random() * (Math.floor(Math.random() * 4583))));
    }
    return randomArray;
};

const randomArray = generateRandomArray(20);
const arrayOrdenado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
const arrayDesordenado = [28,22,46,76,8,61,75,58,86,4,79,53,40,100,10,84,70,3,5,78,91,45,12,33,16,23,17,95,62,49,2,20,34,43,71,88,9,69,6,39,32,92,94,29,24,99,66,35,42,7,57,97,52,30,83,1,19,14,36,48,67,38,87,82,74,41,77,26,96,93,90,59,50,51,54,81,44,21,64,55,11,56,89,68,73,25,31,60,85,65,15,27,63,13,18,72,47,80,98,37];

const largestNumber = (array) => {
    // debugger
    if (array.length <= 1) return array[0];

    const middle = Math.floor(array.length / 2);
    const left = largestNumber(array.slice(0, middle));
    const right = largestNumber(array.slice(middle));

    return compare(left, right);
}

const compare = (num1, num2) => {
    // debugger
    let result = '';
    if (num1 >= num2) result = num1; // Mayor o igual (En caso de que existieran valores repetidos)
    if (num2 > num1) result = num2;
    
    return result;
}

console.log(largestNumber(arrayOrdenado));
console.log(largestNumber(arrayDesordenado));
console.log(randomArray); // Para validar visualmente en consola cuál es el número más grande en este array aleatorio.
console.log(largestNumber(randomArray));