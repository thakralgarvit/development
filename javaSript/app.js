let btn = document.querySelector("button");
let inp = document.querySelector("#inp");
let list = document.querySelector("#list");
btn.addEventListener("click", () => {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add(".del");

    list.appendChild(item);
    item.appendChild(delbtn);
    console.log(inp.value);
    inp.value = "";
})

list.addEventListener("click", function(event) {
    if (event.target.nodeName == "BUTTON") {
        let item = event.target.parentElement;
        item.remove();
    }
});

// let delbtns = document.querySelectorAll(".del");
// for (delbtn of delbtns) {
//     delbtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }