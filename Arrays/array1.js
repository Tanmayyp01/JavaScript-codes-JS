// Arrays + Arrays :

const arr1 = ['BMW' , 'Audi' , 'Ferrari' , 'Jaguar']
const arr2 = ['Mahindra' , 'TATA Motors' , 'Suzuki']

let arr3 = [1 , 2 , 3 ,4 ,5]


// Concat Method :

const  allCars = arr1.concat(arr2) // To add/combine two arrays.
console.log(allCars);  // output will arr1+arr2 .

//Sprade :

//Another method to add/combine two arrays.
const cars2 = [...arr1, ...arr2]
console.log(cars2);

// Flat Array :

// To clean up and make simple array.
const array1 = [1,2,3,[4,5,6],7,8,9,[10,11,12,[13,14,15,[16,17,18]]],19,20]
const array2 = array1.flat(8)
console.log(array2); //output is simple array including 1 to 20.


