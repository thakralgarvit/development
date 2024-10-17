let movieName = prompt("plese enter your guess or write quit to exit the game: ");
let favMovie = "ironman";
while((movieName != favMovie) && (movieName != "quit")){
    movieName = prompt("wrong guess plese enter your guess or write quit to exit the game: ");
}
if(movieName == favMovie){
    console.log("congoo")
}
