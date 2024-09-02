//Variables
let score_A=document.getElementById("A_score");
let score_B=document.getElementById("B_score");
let Turn=true;

// to change the turn 
function click1(){
    let turn2=document.getElementById("playerTurn");
    if(turn2.innerText==="Player A :X"){
        turn2.innerText="Player B :O";
    }
    else{
        turn2.innerText="Player A :X";
    }   
}

//score Changer for A
function AScoreAdd(){
    score_A.innerText++;
}
//score Changer for B
function BScoreAdd(){
    score_B.innerText++; 
}

//reset board function
function BoardReset(){
    let Cells=document.getElementsByClassName("cell");
    for(let i=0;i<Cells.length;i++){
        Cells[i].innerText="_"
    }
}

//reset Score
function ScoreReset(){
    score_A.innerText=" ";
    score_B.innerText=" ";
}



// Event listners
let gameboard=document.getElementById("gameboard");
gameboard.addEventListener("click",()=>{
    click1();
    AScoreAdd();
    BScoreAdd();
})



