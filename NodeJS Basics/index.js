// importing app object
const app = require('./app')
const fs = require('fs').writeFileSync;

// Equality vs identity operator
console.log("Node JS...");
var x = '20';
if(x==20) {
    console.log("Equality operator matched")
}

if(x===20) {
    console.log("Identity operator matched")
}

// Print x value from object
console.log(app.x)

// Execute displayName function from object
console.log(app.displayName())

var arr = [1,2,3,4,5,6,7];

// Filter operation
let result = arr.filter((item)=>{
    return item > 4
})
console.log(result)

console.log(__dirname);
console.log(__filename);

// File system
//fs("hello.txt","How are you?");
//fs("hello2.txt","What are you doing?")

