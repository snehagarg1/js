const accountId = 136545
let accountEmail = "sneha@gmail.com"
var accountPassword ="12345"
accountCity = "jaipur"
let accountState;


accountEmail = "sg@00.com"
accountPassword = "8753"
accountCity = "bengaluru"

// accountId = 2

console.log(accountId);
/* prefer not to use var 
because of issue of block scope and functional scope*/  
console.table([accountEmail,accountId,accountPassword, accountCity,accountState])