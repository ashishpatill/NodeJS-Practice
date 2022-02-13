
// Creating an object
const person = {
    name: 'Ashish',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

// Function destructuring
const printName = ({ name, age }) => {
    console.log(name, age);
}
printName(person);

// Object destructuring
const {name, age} = person;
console.log(name, age);


