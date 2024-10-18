let todo = [];

let req = prompt("plese enter your request");

while(true) {
    if(req == "quit") {
        console.log("quitting the app");
        break;
    }

    if(req == "list") {
        console.log("------------");
        for(let i = 0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("------------");
    } else if(req == "add") {
        let task = prompt("plese add your task");
        todo.push(task);
        console.log("item added");
    } else if(req == "delete"){
        let idx = prompt("plese enter the index u want to delete");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong respond");
    }

    req = prompt("plese enter your request");
}
