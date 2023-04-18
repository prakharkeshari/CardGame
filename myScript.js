
let player1 = prompt("Please enter player1 name", "Franklin");
let player2 = prompt("Please enter player2 name", "Michael");
document.getElementById("p1Name").innerHTML="Name : "+player1;
document.getElementById("p2Name").innerHTML="Name : "+player2;
const listOfsuit = ["spade","club","diamond","heart"];
const listOfRank = ["two","three","four","five","six","seven","eight","nine","ten","jack","king","queen","ace"];
const letters = new Set();
const list = document.querySelectorAll(".cardsImage");
var count =0;
const score=[];
const card=[];
const bool=[true,true,true,true,true,true];

let player1MaxScore =0;
let player2MaxScore =0;
for(let i=0;i<list.length;i++){
    list[i].addEventListener("click",function(){
        count++;
        if(bool[i]==true){
            var randomNumForSuit = Math.floor(Math.random()*4);
            var randomNumForRank = Math.floor(Math.random()*13);
            score[i]=randomNumForRank*4+randomNumForSuit;
            let imageString = "images/"+listOfsuit[randomNumForSuit]+"/"+listOfRank[randomNumForRank]+".jpg"
            card[i]=imageString;
            list[i].setAttribute("src",imageString);
            bool[i]=false;
        }
       
    
    })
  
}

function findHighestCardPlayer1(){
    if(count<6){
    alert("first each player flip their all the cards");
    }
    else{
       
        let cardresult;
        for(let i=0;i<3;i++){
            if(player1MaxScore<score[i]){
                player1MaxScore=score[i];
                cardresult=card[i];
            }
        }
        document.getElementById("P1points").innerHTML=player1MaxScore;
        document.getElementById("result1").style.visibility="visible"
        document.getElementById("result1").setAttribute("src",cardresult);

        
    }

}
function findHighestCardPlayer2(){
    if(count<6){
    alert("first each player flip their all the cards");
    }
    else{
       
        let cardresult;
        for(let i=3;i<6;i++){
            if(player2MaxScore<score[i]){
                player2MaxScore=score[i];
                cardresult=card[i];
            }
        }
        document.getElementById("P2points").innerHTML=player2MaxScore;
        document.getElementById("result2").style.visibility="visible";
        document.getElementById("result2").setAttribute("src",cardresult);
        let result;
        if(player1MaxScore>player2MaxScore){
            result = player1;
        }else{
            result = player2;
        }
        document.querySelector(".winner").innerHTML = result+" Won the Game";
    }



}


