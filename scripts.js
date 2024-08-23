var player1Health = 100;
var player2Health = 100;

let roundCounter = 0;
let player1Score = 0;
let player2Score = 0;

const shootSound = new Audio('shoot.mp3');
const winSound = new Audio('win.mp3');
const drawSound = new Audio('draw.mp3');

function startGame() {
    document.getElementById('instructionsOverlay').style.display = 'none';
    document.getElementById('gameTitle').style.display = 'block';
    document.querySelector('.space').style.display = 'flex';
    document.querySelector('.controls').style.display = 'block';
    document.querySelector('.result').style.display = 'block';
    document.querySelector('.Score-Board').style.display = 'grid';
}

document.getElementById('startGameButton').addEventListener('click', startGame);

function shootBtn() {
    shootSound.play();
    var player1Fire = Math.floor(Math.random() * 5);
    var player2Fire = Math.floor(Math.random() * 5);
    document.getElementById("p1FireScore").innerHTML = player1Fire;
    document.getElementById("p2FireScore").innerHTML = player2Fire;
    player1Health -= player2Fire;
    player2Health -= player1Fire;
    roundCounter++;
    if (player1Fire > player2Fire) {
        player1Score++;
    } else if (player2Fire > player1Fire) {
        player2Score++;
    }
    document.getElementById("grid-item-4").innerHTML = player1Score;
    document.getElementById("grid-item-8").innerHTML = player2Score;
    if (player1Health <= 0) {
        document.getElementById("grid-item-9").innerHTML = "Player 2 Won!";
        endGame();
    } else if (player2Health <= 0) {
        document.getElementById("grid-item-9").innerHTML = "Player 1 Won!";
        endGame();
    } else if (roundCounter >= 5) {
        document.getElementById("ShootBtn").disabled = true;
        document.getElementById("ShootBtn").innerHTML = "Game Over";
        document.getElementById("ShootBtn").style.backgroundColor = "grey";
        if (player1Score > player2Score) {
            document.getElementById("grid-item-9").innerHTML = "Player 1 Won!";
        } else if (player2Score > player1Score) {
            document.getElementById("grid-item-9").innerHTML = "Player 2 Won!";
        } else {
            document.getElementById("grid-item-9").innerHTML = "Match Draw";
        }
    }
}

function endGame() {
    document.getElementById("ShootBtn").disabled = true;
    document.getElementById("ShootBtn").innerHTML = "Game Over";
    document.getElementById("ShootBtn").style.backgroundColor = "grey";
}

function resetBtn() {
    location.reload();
    localStorage.clear();
}
