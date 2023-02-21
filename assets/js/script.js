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

//disable all buttons

const disableButtons = () => {
    btnRef.forEach((element)=>( element.disabled = true));
    //enable popup

    popupRef.classList.remove("hide");

};

//enable all buttons (for new game and restart)

const enableButtons = () => {
    btnRef.forEach((element)=> {
         element.innerText ="";
         element.innerText = "false";
    });
    //disable popup
   

    popupRef.classList.add("hide");
};
//this function is executed when a player wins
const winFunction = (letter) => {
    disableButtons();
};

// win logic //
const winChecker = () => {
    // loop through all win patterns
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
     btnRef[i[0]].innerText,
     btnRef[i[1]].innerText,
     btnRef[i[2]].innerText,
    ];
    // check if elements are filled 
    // if 3 empty elements are same and would give win

    if (element1 != ""&& (element2 !="") & (element3 !="")){
        if(element1==element2 && element2 == element3) {
            // if all buttons have t6he same value then pass the value to winfunction //
            winFunction(element1);
        }
    }
    }
};

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

    // check for win on every click //
    winChecker();
});

});

