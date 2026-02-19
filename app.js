let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = ()=>{
    boxes.forEach(box =>{
        box.disabled = true;
    })
}
const enableBoxes = ()=>{
    boxes.forEach(box =>{
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("win","x","o");
    });
}

const showWinner = (winner, pattern)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");

    pattern.forEach((index)=>{
        boxes[index].classList.add("win");
    });

    disableBoxes();
}

const showDraw = ()=>{
    msg.innerText = "No Winner — Match Draw 😅";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = ()=>{
    let winnerFound = false;

    for(let pattern of winPattern){

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val, pattern);
                winnerFound = true;
                break;
            }
        }
    }

    // Draw check
    if(!winnerFound){
        let filled = true;

        boxes.forEach(box =>{
            if(box.innerText === ""){
                filled = false;
            }
        });

        if(filled){
            showDraw();
        }
    }
};

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
