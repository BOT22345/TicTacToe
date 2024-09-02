//Variables
let score_A=document.getElementById("A_score");
let score_B=document.getElementById("B_score");
let Turn=true;

// to change the turn 
function click1(){
    let turn2=document.getElementById("playerTurn");
    if(turn2.innerText==="Player A turn"){
        turn2.innerText="Player B turn";
    }
    else{
        turn2.innerText="Player A turn";
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

//reset button function
function ButtonReset(){
    let Cells=document.getElementsByClassName("cell");
    for(let i=0;i<Cells.length;i++){
        Cells[i].innerText="_"
    }

}



//Event listners
let gameboard=document.getElementById("gameboard");
gameboard.addEventListener("click",()=>{
    click1();
    AScoreAdd();
    BScoreAdd();
})


