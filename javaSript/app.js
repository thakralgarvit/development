// average of nums in an array with arrow meathod
const avg = (arr) => {
    let total = 0;
    for(let nums of arr) {
        total += nums;
    }
    return total / arr.length;
};

const arr = [95, 93, 97];
console.log(avg(arr));

// check if its even or not
const iseven = (n) => {
    if(n % 2 == 0 ) {
        return console.log('even');
    } else {
        return console.log("odd");
    }
};

console.log(iseven(7));

// print marks from the 3 student as object
let err = [
    {
        name: "garvit",
        marks: 90
    },
    {
        name: "yash",
        marks: 88
    },
    {
        name: "sabhay",
        marks: 98
    }
];

err.forEach((student) => {
    console.log(student.marks)
});

// taking gpa of students with maping

let gpa = err.map((el) => {
    return el.marks / 10;
});

console.log(gpa);

// taking out max num from an array using reduce fuction
let wrr = [2, 4, 7, 1, 8, 4, 9, 6, 4, 3, 2, 6, 5, 7, 8, 2];
let ans = wrr.reduce((max, el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }
});
console.log(ans);

//check if all the nums are multiples with 10 or not
let yrr = [20, 50, 70, 120, 30, 35];
let anss = yrr.every((el) => {
    if(el % 10 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(anss);
