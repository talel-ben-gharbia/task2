let player = 1;
let current = 0;
let scores = [0,0];
document.querySelector(".roll").addEventListener("click", role => {
    
    let imageN = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".dice").src = `/image/dice-${imageN}.png`;
    current +=imageN;
    document.querySelector(`.current${player}`).textContent=String(current);
    if (imageN === 1) {
        current=0;
        document.querySelector(`.current${player}`).textContent=String(current);
        player = player === 1 ? 2 : 1;
        console.log("Switched to Player", player);
    } else {
        console.log("Player", player, "rolled:", imageN ,"current = ",current);
    }
});

document.querySelector(".hold").addEventListener("click", hold =>{
    scores[player-1]+=current ;
    document.querySelector(`.total${player}`).textContent=String(scores[player-1]);
    current=0;
        document.querySelector(`.current${player}`).textContent=String(current);
    if(scores[player-1]>=50){
        reset();
        alert("player ,"+player +"wins" );

    }
    if(player===1){
        player=2
    }else{
        player=1
    }
})
document.querySelector(".new").addEventListener("click",reset);
function reset(){
        player = 1;
        current = 0;
        scores = [0, 0];
        document.querySelector(".current1").textContent = "0";
        document.querySelector(".current2").textContent = "0";
        document.querySelector(".total1").textContent = "0";
        document.querySelector(".total2").textContent = "0";
    
}


