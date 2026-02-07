const student ={
    name: 'Rafid',
    marks: 90,
}

// // dot notation
// const studentName = student.name;
// console.log(studentName);

// // box notation
// const studentOne = student['marks']
// console.log(studentOne);

for(key in student){
    console.log(student[key], '->', key);
}