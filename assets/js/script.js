let btnRef = document.querySelectorAll(".btn-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

//pattern array//
let winningPattern = [
    [0,1,2],
    [0,3,6],
    [2,5,8],
    [6,7,8],
    [3,4,5],
    [1,4,7],
    [0,4,8],
    [2,4,6],
];
// player X plays first //

let xTurn = true;
let count = 0;

// display X/O on click //


btnRef.forEach((element)=>{
    element.addEventListener("click", ()=>{
    if(xTurn){
        xTurn = false;
        // display x //
    
        element.innerText = "X";
        element.disabled = true;
    }
    else {
       xTrue = true; 
       // display O //
       element.innerText = "O";
       element.disabled = true;
    }
    // increament count on each click //
    count += 1;
    if(count === 0){
        // it's a draw since we have 9 box //
        
       
    }
    
});

