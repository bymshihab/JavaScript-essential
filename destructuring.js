// Object Destructuring...
const {name, price} = {
    name:'shirt',
    price: 100,
    quantity: 7
}


const prod = {
    name:'shirt',
    price: 100,
    quantity: 7
}


console.log(price);
console.log(prod.name);
// ---------------------------
const device = { name: 'phone', brand: 'samsung', price: 17000 }
const {brand} = device;

console.log(brand);

//Array Destructuring....

const numm = [ 24, 23, 22];
const [x, y, z] = numm;

console.log(y);

const colors = ['red', 'green', 'blue', 'yellow'];
const [firstColor, secondColor, ...restColors] = colors;

console.log(restColors);


