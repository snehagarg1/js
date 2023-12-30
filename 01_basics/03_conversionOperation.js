let score = true

console.log(typeof score);
console.log(score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
// "33abc" =>NaN
// true => 1; false => 0

let isLoggedIn = "sneha"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log( booleanIsLoggedIn);

// 1 => true ; 0 => false
// "" => false
// "sneha" => true

let someNumber = 33

let stringNumber = String (someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*******************************Operation*************************//

let value =3
let negvalue = -value
console.log(negvalue);

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

 console.log(null >0);   // the reason is that an equality check == and comparison >< >= 
 console.log(null ==0);   //<= work differently.comparison converts null to a number,
 console.log(null >=0);   // treating it as 0 that's why null>= 0 is true and null > 0 is false


    // ===        -> strict check , it vheck its datatype first then decide to convert
 console.log("2"=== 2);