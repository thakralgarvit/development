let gameSql = []; // to track game Squance
let playerSql = []; // to track player Squance

let started = false; // helps to monitor if the game has started
let level = 0; // counts level

let btns = ["red", "yel", "green", "pur"]; // to store all the ans through which computer will genrate the color
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game Started");  // to start the game we need top change the value of the started to true.
        started = true;
        levelup(); 
    }
    
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 300);
}

function levelup() {
    playerSql =[];
    level++;
    h2.innerText = `levele ${level}`

    let randidx = Math.floor(Math.random() * 3);
    let randcolo = btns[randidx];
    let randbtn = document.querySelector(`.${randcolo}`);
    gameSql.push(randcolo);
    console.log(gameSql);
    btnFlash(randbtn);
}

function checkAns (idx) {
    if (playerSql[idx] === gameSql[idx]){
        if (playerSql.length == gameSql.length){
            setTimeout(levelup, 500);
        }
    } else {
        h2.innerText = `Game is over! Press Any Key to start.`;
        reset();
    }
}

function btnpress() {
    let btn = this;
    console.log("btn was pressed")
    userFlash(btn);

    let usercolo = btn.getAttribute("id");
    playerSql.push(usercolo);

    checkAns(playerSql.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameSql = [];
    playerSql = [];
    level = 0;
}
