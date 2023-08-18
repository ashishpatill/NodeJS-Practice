const fs = require('fs');

//fs.writeFileSync('Hello NodeJs');

var name = 'Max';
var age = 29;
var hasHobbies = true;

// function 
function summarizeUser(userName, userAge, usereHasHobbies) {
    return (
        'Name is ' +
        userName +
        '. age is ' +
        userAge +
        ' and the user has hobbies: ' +
        usereHasHobbies
    );
}

// function with arrow function
const summariseUser = (userName, userAge, usereHasHobbies) => {
    return (
        'Name is ' +
        userName +
        '. age is ' +
        userAge +
        ' and the user has hobbies: ' +
        usereHasHobbies
    );
}

console.log(summariseUser(name, age, hasHobbies));

// Dictionary or Proprties
const person = {
    name: 'Ashish',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person.greet());

//Arrays
const hobbies = ['Sports', 'Cooking'];
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

// Spread operator
const copiedArray = [...hobbies];
console.log(copiedArray);

// Rest operator
const toArray = (...args) => {
    return args;
};
console.log(toArray(1,2,3,4,5));

// Template literal string, notice the `` here
let myInfo = `My name is ${name} and i am ${age} years old`;
console.log(myInfo);

