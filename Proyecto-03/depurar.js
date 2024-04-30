function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
const result = sumArray(numbers);
console.log("La suma de los números es: " + result);