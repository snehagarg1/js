//singleton -> one object , if we declare litterals=> not singleton
 // constructor =>singleton
  //object literals  


const mySym = Symbol ("key1")
 const jsUSer = {
    name: "sneha",
    age: 18,
    [mySym]: "myKey1",
    location : "delhi",
    email : "sg@7855.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
 }
  
 console.log(jsUSer.email) 
 console.log(jsUSer["email"]); 
 console.log(jsUSer[mySym]) 
 
 jsUSer.email = "sg8775"
 Object.freeze(jsUSer)
 console.log(jsUSer);
