const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

Object.freeze(employee)

delete employee.exprience
// Note: delete is not working after freeze

employee.salary = 25000
// Note: salary update is not working after freeze

console.log(employee);

employee.salary = employee.salary + 5000;
employee.location = 'Dhaka'
console.log(employee)

// Note: salary update and new property addition is not working after freeze
