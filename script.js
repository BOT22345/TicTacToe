
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

