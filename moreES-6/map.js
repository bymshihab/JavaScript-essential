let number = [10, 20, 30, 40]

let modifiedNum = number.map(x => x * 2)
console.log(modifiedNum);

// for multiple line auto is not return, need to return

let largeModified = number.map((x, i)=>{
    console.log(x*x*x, `${i} index`);
     return x*x*x;
})