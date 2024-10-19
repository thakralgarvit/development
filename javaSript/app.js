
// removing the n element
let arr = [1,2,3,4,5,6,2,3];
let n = 3;
for(let i = 0; i<arr.length; i++) {
    if(arr[i] == n) {
        console.log(`index of element ${i}`)
        arr.splice(i,1);
    }
}
console.log(arr);



// count the number of digits present
console.log("--------------------");
let num = 876723;
let count = 0;
let copy = num; 
while (copy > 0) {
    count++;
    copy = Math.floor(copy/10);
    console.log(count, copy);
}
console.log(`the leghth of the num is ${count}`);


//find the sum of the digits ina number
console.log("--------------");
let nom = 287152;
let sum = 0;
let same = nom;
while(same > 0) {
    let  digit = same % 10;
    sum += digit;
    same = Math.floor(same/10);
}
console.log(`sum of num are: ${sum}`);


//factorial of a num
console.log("-------------")
let m = 7;
let factorial = 1;
if(m == 1) {
    console.log(1);
} else {
    for(let i = 1; i <= m; i++) {
        factorial *= i;
    }
    console.log(factorial);
}


//find the largest num in array
console.log("----------------")
let err = [2,5,4,3,6,7,8,5,6,5,6,7,5,4,3,5,5,7,9,8,6,7,6,5,4,4,3];
let largest = 0;
for(let i = 0; i < err.length; i++) {
    largest = Math.max(largest, err[i]);
}
console.log(largest);