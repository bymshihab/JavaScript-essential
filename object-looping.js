const nums = [2, 10, 23, 99];

for(num of nums){
    console.log(num);
}

const employee = {
    name: 'Raja Rani',
    designation: 'QA',
    salary: 20000,
    experience: 1,
    age: 22
}

for(e in employee){
    console.log(e, "only key");
     console.log(employee[e], "key value pair")
}

const keys =  Object.keys(employee)
console.log(keys, "only keys 2");
for(k of keys){
    const value = employee[k];
    console.log(value);
}
