let para1 = document.createElement('p');
para1.innerText = "hey i am red!!";
document.querySelector("body").append(para1);
para1.classList.add("red");

let high = document.createElement('h3');
high.innerText =  "hey i am h3!!"
document.querySelector("body").append(high);
high.classList.add("green");

let div = document.createElement('div');
let h1 = document.createElement('h1');
let p = document.createElement('p');

h1.innerText = "i am in div";
p.innerText = "me too";

document.querySelector("body").append(div);
document.querySelector("div").append(h1, p);

div.classList.add("boder");

let btn = document.createElement("button");
let inner = document.createElement("input");
document.querySelector("body").append(btn, inner);
btn.innerText = "click me";

btn.setAttribute("id", "btn");
inner.setAttribute("placeholder", "username");

btn.classList.add("text");

let h2 = document.createElement("h1");
h2.innerText = "DOM PRACTICE"
h2.classList.add("under");
document.querySelector("body").append(h2);

let pp = document.createElement("p");
pp.innerHTML = "Apna Collage <b>Delta</b> Practice";
document.querySelector("body").append(pp);