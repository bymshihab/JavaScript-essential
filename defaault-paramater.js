// with default paramaters
function addNummbers(num1 = 0, num2 = 5){
    return num1 + num2
}

console.log("With Default parameter: ",addNummbers(10));

function fullName(first, last = '') {
    const name = first + '' + last;
    console.log(name)
}

fullName('kamruzzaman')

function multiply(num1 = 1, num2 = 1) {
    const result = num1 * num2;
    console.log(result, ":res")
}
multiply(5, 10)