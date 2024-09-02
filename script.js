//Variables
let score_A=document.getElementById("A_score");
let score_B=document.getElementById("B_score");
let Cells=document.getElementsByClassName("cell");
let turn=true;



//score Changer for A
function AScoreAdd(){
    score_A.innerText++;
}
//score Changer for B
function BScoreAdd(){
    score_B.innerText++; 
}

//handle clicks on board
function cellClick(event){
    let cell=event.target;
    let turnDisplay=document.getElementById("playerTurn");
    if(cell.innerText==="_"){
        if(turn){
            cell.innerText="X";
            turnDisplay.innerText="Player B : O";
           
        }else{
            cell.innerText="O";
            turnDisplay.innerText="Player A : X";
        }
        turn=!turn;
    }
}


//reset board function
function BoardReset(){
    Cells=document.getElementsByClassName("cell");
    for(let i=0;i<Cells.length;i++){
        Cells[i].innerText="_"
    }
}

//reset Score
function ScoreReset(){
    score_A.innerText="0";
    score_B.innerText="0";
}

//result calculate
function Result(){
// for X victory
if(Cells[0].innerText==="X" && Cells[1].innerText==="X" && Cells[2].innerText==="X"){
    score_A.innerText++;
}
if(Cells[3].innerText==="X" && Cells[4].innerText==="X" && Cells[5].innerText==="X"){
    score_A.innerText++;
}
if(Cells[6].innerText==="X" && Cells[7].innerText==="X" && Cells[8].innerText==="X"){
    score_A.innerText++;
}
if(Cells[0].innerText==="X" && Cells[3].innerText==="X" && Cells[6].innerText==="X"){
    score_A.innerText++;
}
if(Cells[1].innerText==="X" && Cells[4].innerText==="X" && Cells[7].innerText==="X"){
    score_A.innerText++;
}
if(Cells[2].innerText==="X" && Cells[5].innerText==="X" && Cells[8].innerText==="X"){
    score_A.innerText++;
}
if(Cells[0].innerText==="X" && Cells[4].innerText==="X" && Cells[8].innerText==="X"){
    score_A.innerText++;
}
if(Cells[2].innerText==="X" && Cells[4].innerText==="X" && Cells[6].innerText==="X"){
    score_A.innerText++;
}

// for O victory
if(Cells[0].innerText==="O" && Cells[1].innerText==="O" && Cells[2].innerText==="O"){
    score_B.innerText++;
}
if(Cells[3].innerText==="O" && Cells[4].innerText==="O" && Cells[5].innerText==="O"){
    score_B.innerText++;
}
if(Cells[6].innerText==="O" && Cells[7].innerText==="O" && Cells[8].innerText==="O"){
    score_B.innerText++;
}
if(Cells[0].innerText==="O" && Cells[3].innerText==="O" && Cells[6].innerText==="O"){
    score_B.innerText++;
}
if(Cells[1].innerText==="O" && Cells[4].innerText==="O" && Cells[7].innerText==="O"){
    score_B.innerText++;
}
if(Cells[2].innerText==="O" && Cells[5].innerText==="O" && Cells[8].innerText==="O"){
    score_B.innerText++;
}
if(Cells[0].innerText==="O" && Cells[4].innerText==="O" && Cells[8].innerText==="O"){
    score_B.innerText++;
}
if(Cells[2].innerText==="O" && Cells[4].innerText==="O" && Cells[6].innerText==="O"){
    score_B.innerText++;
}





}


// Event listners
for(let i=0;i<Cells.length;i++){
    Cells[i].addEventListener('click',cellClick);
}


