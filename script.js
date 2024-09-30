let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg= document.querySelector("#msg");

const OScorePara = document.querySelector("#O-score");
const XScorePara = document.querySelector("#X-score");
let XScore =0;
let OScore=0;

let turnO=true;
let count=0;

const winPatterns= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
] ;

const resetgame =()=>{
    turnO=true;
    count=0;
    enableBoxes();
    msgcontainer.classList.add("hide");
    OScore=0;
    XScore=0;
    OScorePara.innerText = OScore;
    XScorePara.innerText = XScore;
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText ='O';
            turnO=false;
            box.style.color = "#0b2e09";
        }else{
            box.innerText="X";
            turnO= true;
            box.style.color= "#b0413e" ;
            
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      draw();
    }
    });
});

const disableBoxes = ()=>{
     for(let box of boxes){
        box.disabled=true;
     }
}
const enableBoxes = ()=>{
    for(let box of boxes){
       box.disabled=false;
       box.innerText="";

    }
}
const showWinner = (winner) =>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    if (winner ==='O')
        {
        OScore++;
    OScorePara.innerText = OScore;
        }
        else{
            XScore++;
            XScorePara.innerText = XScore;
        }
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const draw =()=>{
    msg.innerText=`DRAW!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner= ()=> {
    for (patterns of winPatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
        let  pos1val=boxes[patterns[0]].innerText;
        let  pos2val=boxes[patterns[1]].innerText;
        let  pos3val=boxes[patterns[2]].innerText;
        if(pos1val !="" && pos2val !="" && pos3val !="" ){
            if(pos1val=== pos2val && pos2val === pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};
 newBtn.addEventListener("click", resetgame);
 resetBtn.addEventListener("click", resetgame);