let h1 = document.querySelector("h1");

// chnage color with 1 sec delay from each other with the help of promise

function colourchn(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed");
        },delay);
    });
}

colourchn("red", 1000)
.then(() => {
    console.log("red");
    return colourchn("blue", 1000);
})
.then(() => {
    console.log("blue");
    return colourchn("green", 1000);
})
.then(() => {
    console.log("green");
});