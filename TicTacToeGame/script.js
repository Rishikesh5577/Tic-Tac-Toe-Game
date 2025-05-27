let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGbtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg");
let msgg=document.querySelector("#ms");

let turn0=true;

const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],

];

const resetGame=()=>{
let turn0=true;
enabledBoxes();
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turn0){
            box.innerText ="o";
            turn0=false;
        }else{
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;

        checkWinner();
    });
});

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
msgg.innerText=`Congrats Winner is ${winner}`;
disabledBoxes();
}
 
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        val1=boxes[pattern[0]].innerText;
        val2=boxes[pattern[1]].innerText;
        val3=boxes[pattern[2]].innerText;

        if (val1 !="" && val2 !="" && val3 !=""){
            if(val1===val2 && val2===val3){
                console.log("winner", val1)
                showWinner(val1);
            }
        }
    }

}

newGbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);