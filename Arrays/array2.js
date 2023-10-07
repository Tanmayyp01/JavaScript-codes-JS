// Array Example :

const arr1 = ['BMW' , 'Audi' , 'Ferrari' , 'Jaguar']
const arr2 = ['Mahindra' , 'TATA Motors' , 'Suzuki']

let arr3 = [1 , 2 , 3 ,4 ,5]

// Push Property :

arr1.push('Hyundai') // Here, element (Hyundai) will added to arr1 Array.
console.log(arr1);

// Pop Property :
arr1.pop()          // Here, last element(Hyundai) will be removed.
console.log(arr1);

//Unshift Property :
arr1.unshift('Ford') // In this Array, element (Ford) will added to arr1 from the front side.
console.log(arr1);

// Shift Propert :
arr1.shift()        // 1st element(Ford) will removed(shifted) from arr1 Array.
console.log(arr1);

// Includes :

// To check includes element is present in Array or not , Answer is in Boolean form.
console.log(arr1.includes('BMW'));  // Output is True.
console.log(arr1.includes('KIA'));  // Output is False.

//Index :

//The indexOf method returns the position of the first stated element in a array.
console.log(arr3.indexOf(5)); // Output : 4.
console.log(arr3.indexOf(6)); // Output : -1. Because 6 is not avaialble in this arr3 Array.

// Join :

const newArr = arr3.join()  // Array is converted to string due to join() method.
console.log(newArr);   //Output is in String.

//Array of:

// Make/construct a array from data,varaiable =

// marks :
let mathsMarks = 81
let englishMarks = 89
let scienceMarks = 91

console.log(Array.of(mathsMarks,englishMarks,scienceMarks));

