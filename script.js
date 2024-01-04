var body = document.querySelector(".body")
var finals = document.querySelector(".finals")
var rule = document.querySelector(".buttons");
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");
var computer = document.querySelector(".computer");
var peice;
var house;
var youChoose;
var x;
var score = 0;


rule.addEventListener("click", display);
function display() {
    // document.querySelector(".container").classList.toggle("hide");
    document.querySelector(".rule-container").classList.toggle("hide");
}
 document.querySelector(".rules").addEventListener("click", () => {
    document.querySelector(".rule-container").classList.toggle("hide");
})
document.querySelector(".rule-container").addEventListener("click", close);
document.querySelector(".close").addEventListener("click", close)
function close() {
    document.querySelector(".rule-container").classList.toggle("hide");
    // document.querySelector(".container").classList.remove("hide");
}

// document.querySelector(".playAgain").addEventListener("click", reverse);
// function reverse() {
//     body.classList.remove("hide")
//     finals.classList.add("hide")
//     computer.classList.add("hide")
//     rock.classList.add("rock");
//     paper.classList.add("paper");
//     scissors.classList.add("scissors");
//     document.querySelector(".player-name").classList.add("hide");
//     document.querySelector("decisionYou").classList.add("hide");
//     document.querySelector("decisionHouse").classList.add("hide");
//     document.querySelector("decisionDraw").classList.add("hide");
// }

rock.addEventListener("click", change1);
function change1() {
    x = "rock";
    body.classList.add("hide")
    finals.classList.remove("hide")
    youChoose = "./images/rock.png"
    document.querySelector(".human img").setAttribute("src", youChoose)
    computer.classList.remove("hide");
    document.querySelector(".player-name").classList.remove("hide");
}
    
paper.addEventListener("click", change2);
function change2() {
    x = "paper"
    body.classList.add("hide")
    finals.classList.remove("hide")
    youChoose= "./images/paper.png"
    document.querySelector(".human img").setAttribute("src", youChoose)
    computer.classList.remove("hide");
    computer.classList.add("computerResult");
    document.querySelector(".player-name").classList.remove("hide");
}

scissors.addEventListener("click", change3);
function change3() {
    x = "scissors";
    body.classList.add("hide")
    finals.classList.remove("hide")
    youChoose= "./images/scissors.png"
    document.querySelector(".human img").setAttribute("src", youChoose)
    computer.classList.remove("hide");
    document.querySelector(".player-name").classList.remove("hide");
}

computer.addEventListener("click", shuffle);
function shuffle() {
    peice = Math.floor(Math.random() * 3);
    console.log(peice);
    var house = [rock, paper, scissors];
    if (house[peice] == rock) {
        document.querySelector(".houseRock").classList.remove("hide");
        if (x == "scissors") {
            document.querySelector(".houseWin").classList.remove("hide");
            score--;
            document.querySelector(".score").textContent = score;
            computer.removeEventListener("click", shuffle);
        } else if (x == "paper") {
            document.querySelector(".youWin").classList.remove("hide");
            computer.removeEventListener("click", shuffle);
            score++;
            document.querySelector(".score").textContent = score;
        } else if (x == "rock") {
            document.querySelector(".draw").classList.remove("hide");
            computer.removeEventListener("click", shuffle)
            score += 0
            document.querySelector(".score").textContent = score;
        }
    }else if (house[peice] == paper) {
        document.querySelector(".housePaper").classList.remove("hide");
        if (x == "scissors") {
            document.querySelector(".youWin").classList.remove("hide");
            computer.removeEventListener("click", shuffle);
            score++;
            document.querySelector(".score").textContent = score;
        } else if (x == "paper") {
            document.querySelector(".draw").classList.remove("hide");
            computer.removeEventListener("click", shuffle);
            score += 0
            document.querySelector(".score").textContent = score;
        } else if (x == "rock") {
            document.querySelector(".houseWin").classList.remove("hide");
            computer.removeEventListener("click", shuffle);
            score--
            document.querySelector(".score").textContent = score;
        }
    } else if (house[peice] == scissors) {
        document.querySelector(".houseScissors").classList.remove("hide");
        if (x == "scissors") {
            document.querySelector(".draw").classList.remove("hide");
            computer.removeEventListener("click", shuffle);
            score += 0
            document.querySelector(".score").textContent = score;
        } else if (x == "paper") {
            document.querySelector(".houseWin").classList.remove("hide");
            computer.removeEventListener("click", shuffle);
            score--
            document.querySelector(".score").textContent = score;
        } else if (x == "rock") {
            document.querySelector(".youWin").classList.remove("hide");
            computer.removeEventListener("click", shuffle);
            score++ 
            document.querySelector(".score").textContent = score;
        }
    }
}

document.querySelector(".youWin p").addEventListener("click", playAgain)
document.querySelector(".houseWin p").addEventListener("click", playAgain)
document.querySelector(".draw p").addEventListener("click", playAgain)

function playAgain() {
    body.classList.remove("hide")
    finals.classList.add("hide")
    document.querySelector(".human img").removeAttribute("src", youChoose)
    document.querySelector(".player-name").classList.add("hide")
    document.querySelector(".youWin").classList.add("hide")
    document.querySelector(".houseWin").classList.add("hide")
    document.querySelector(".draw").classList.add("hide")
    document.querySelector(".houseScissors").classList.add("hide")
    document.querySelector(".housePaper").classList.add("hide")
    document.querySelector(".houseRock").classList.add("hide")
    computer.addEventListener("click", shuffle)
}