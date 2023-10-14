const phone_No = 1234567890; //const
let email = "xyzx@abc.in" // let
var city= "solapur" //var

let fullName; // variable without value - output will be UNDEFINED

// Output phone No. :
console.log(phone_No);

//Output Email :
console.log(email);

//Output City :
console.log(city);

// Output Full Name :  (UNDEFINED)
console.log(fullName); 

// Value give to fullName :
fullName = "Tanmay YP01" // Now this varaiable has value, it will not be print as - UNDEFINED

// Print all varaiables in Table form :
console.table([phone_No,email,city,fullName]);

// Print multiple varaiables at a time :

// Method 1 :
console.log(phone_No + city + email + fullName); 

// Method 2 :
console.log("My phone number is : " + phone_No +"My city is :" + city + " My Email id and Full Name :" + email +" " + fullName);  

// Method 3 :
console.log(`His Full name is ${fullName}. He is living in ${city}. His email id is ${email}`);


/* For alert box in browsers we can code :

     alert("Your Email is :" + email) */