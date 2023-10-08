// Objects :

const playerY={
    name : 'Ajay',
    sports : 'Hocky',
    age : 22,
    city : 'Pune',
    email : 'ajay19@yahoo.in'
}

// Method I to print output :
console.log(playerY.age); // output - age
console.log(playerY.name); // output - name

// Method II to print output :
console.log(playerY["email"]); // output - email
console.log(playerY["sports"]); // output - sports

// Now , changing name of player :

playerY.name = "Manish";

console.log(playerY['name']); // output -  New Name (Manish){}

// Add Greetings Function to object playerY :

playerY.greeting = function(){
    console.log("He is a Hocky Player");
}

console.log(playerY.greeting()); // output - greeting function.

// Object Data Table  : 

console.table(playerY); // output - Object data in table form.

//----------------------------------------------------------------//