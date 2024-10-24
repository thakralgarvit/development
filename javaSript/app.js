
// larger then the element
let arr = [1,5,10,15,20,25,30];
let n = 10;

function larger(arr, n) {
    let narr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > n) {
            narr.push(arr[i]);
        }
    }
    console.log(narr);
}
larger(arr, n); 


//extract unque char
let str = "abcdabcdefgggh";

function extract(str) {
    let nsrtr = "";
    for(let i = 0; i < str.length; i++) {
        let curr = str[i];
        if(nsrtr.indexOf(curr) == -1) {
            nsrtr += curr;
        } 
    }
    console.log(nsrtr);
}

extract(str);
     

// return the longest string
let country = ["Australia","Germany","UnitedStatesofAmerica"];

function longestName(country){
    let largest = 0;
    for(let i = 0; i < country.length; i++) {
        let ansl = country[largest].length;
        let ans = country[i].length;
        if(ans > ansl) {
            largest = i;
        }
    }
    return country[largest];
}

console.log(longestName(country));


// to count the vowels in string
let vol = "This is an example string containing multiple vowels."

function countVo(str) {
    const vowel = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }
    for(let i = 0; i < str.length; i++) {
        switch(str[i]) {
            case 'a': vowel.a++;
                break;
            case 'e': vowel.e++;
                break;
            case 'i': vowel.i++;
                break;
            case 'o': vowel.o++;
                break;
            case 'u': vowel.u++;
            break;
            default: 
                break;
        }
    }
    return vowel;
}
console.log(countVo(vol));


// creat a randome num from a range

function randome(st, en) {
    console.log(Math.floor(Math.random() * (en-1)) + st);
}

randome(2,8);
