//gen a random nuber for comp choice
//make array of rps
//make array if winning and lossing and draw items 

//user firstttttt!!!!!!important
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const message = document.querySelector('.winlose');
var decideArr = [];
const eleArr = ["Rock", "Paper", "Scissors"];
const winArr = ["RockScissors", "PaperRock", "ScissorsPaper"];
const loseArr = ["RockPaper", "PaperScissors", "ScissorsRock"];
const drawArr = ["RockRock", "PaperPaper", "ScissorsScissors"];
const yourscore = document.querySelector('.yourscore');
const compscore = document.querySelector('.compscore');
var yscore = 0;
var cscore = 0;
function genChoice(){
    var x = Math.floor(Math.random()*3);
    return eleArr[x];
}

function check(x,y){
    decideArr[0] = y;
    decideArr[1] = genChoice();
    var a = decideArr.join("");
    if(a==winArr[x]){
        ++yscore;
        yourscore.textContent = yscore;
        message.textContent = decideArr[0] + " beats " + decideArr[1] + ". You win!!"
    }
    else if(a==loseArr[x]){
        ++cscore;
        compscore.textContent = cscore;
        message.textContent = decideArr[0] + " beaten by " + decideArr[1] + ". You lose."
    }
    else {
        message.textContent = decideArr[0] + " on " + decideArr[1] + ". It's a draw!"
    }
    return decideArr[1];
}

rock.addEventListener('click', function(){
    var option = check(0,"Rock");

})

paper.addEventListener('click', function(){
    check(1,"Paper")
})

scissors.addEventListener('click', function(){
    check(2,"Scissors");
})
