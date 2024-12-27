// sq, sum the array el usking arraow then find out avg ok the array
let arr = [1,2,3,4,5,6,7,8,9];

let sq = arr.map((el) => el * el);
console.log(sq);

let sum = sq.reduce((res, el) => res + el);
console.log(sum);

let avg = sum / arr.length;
console.log(avg);

// creat a new array with map with each el up by 5
let err = [1,2,3,4,5,6,7,8,9];
let up5 = err.map((el) => el + 5);
console.log(up5);

// creat a new array that have uppercase then the og array
let name = ["garvit", "yash", "Butta", "sanduja", "sabhay", "veena", "simran"];
let upper = name.map((string) => string.toUpperCase());
console.log(upper);

// write a function wich takes 2 arguments 1st array and print its original values and second as many values we want and double it before putting in anew array
let yrr = [1,2,3,4,5,6,7];
const double = (yrr, ...args) => [
    ...yrr,
    ...args.map((el) => el * 2),
];
console.log(double(yrr,2,3,4,5,6,7));

// merge object accept 2 object and return a new object which contain all key values
let ob = {
    name: "gugu",
    age: 23,
    class: 5
};
let bb = {
    name: "yabu",
    age: 24,
    class: 4
};
let mergeob = (ob,bb) => ({...ob,...bb});
console.log(mergeob(ob,bb));