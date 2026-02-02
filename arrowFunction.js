// function declaration
function add(a,b){
  return a + b;
}
console.log(add(2, 3)); 

// arrow function expression
const addArrow = (a, b) => a + b;
console.log(addArrow(2, 3));

// arrow function with block body
const addArrowBlock = (a, b) => {
  return a + b;
};
console.log(addArrowBlock(2, 3));

// arrow function with single parameter
const square = x => x * x;
console.log(square(4)); 

// arrow function with no parameters
const greet = () => 'Hello, World!';
console.log(greet());

// arrow function returning an object
const createUser = (name, age) => ({ name, age });
console.log(createUser('Alice', 30));

// arrow function used as a callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// arrow function with default parameters
const multiply = (a, b = 1) => a * b;
console.log(multiply(5)); 
console.log(multiply(5, 2));

// arrow function with rest parameters
const sumAll = (...args) => args.reduce((sum, curr) => sum + curr, 0);
console.log(sumAll(1, 2, 3, 4));

// arrow function with destructured parameters
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`;
console.log(getFullName({ firstName: 'John', lastName: 'Doe' }));

// arrow function used in a promise
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data fetched');
    }, 1000);
  });
};

fetchData().then(data => console.log(data));

// arrow function with implicit return of an array
const createArray = (a, b, c) => [a, b, c];
console.log(createArray(1, 2, 3));

// arrow function with conditional (ternary) operator
const isEven = num => num % 2 === 0 ? 'Even' : 'Odd';
console.log(isEven(4)); 
console.log(isEven(5));

// arrow function used in event listener
// document.getElementById('myButton').addEventListener('click', () => {
//   console.log('Button clicked!');
// });

// arrow function with nested arrow functions
const outerFunction = x => {
  const innerFunction = y => x + y;
  return innerFunction;
};
const addFive = outerFunction(5);
console.log(addFive(3));
// Output: 8

// arrow function with async/await
const fetchAsyncData = async () => {
  return 'Async Data fetched';
};

const getData = async () => {
  const data = await fetchAsyncData();
  console.log(data);
};

getData();

// arrow function with method shorthand in an object
const calculator = {
  add: (a, b) => a + b,
    subtract: (a, b) => a - b
};
console.log(calculator.add(5, 3)); 
console.log(calculator.subtract(5, 3));
