const numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const attemptsLeft = 5;
function guessNumber() {
    attempts++;
    const attemptsLeftElement = document.getElementById("attemptsLeft");
    attemptsLeftElement.textContent = attemptsLeft - attempts;
    const userGuess = document.getElementById("guessInput").value;
    if (userGuess < numberToGuess) {
        document.getElementById("result").textContent = "ต่ำเกินไป! ลองทายใหม่.";
    } else if (userGuess > numberToGuess) {
        document.getElementById("result").textContent = "สูงเกินไป! ลองทายใหม่.";
    } else {
        document.querySelector('.MainPOP1').style.display = 'flex';
        return;
    }
    document.getElementById("guessInput").value = "";
    if (attempts >= attemptsLeft) {
        document.querySelector('.MainPOP2').style.display = 'flex';
        document.getElementById("guessInput").disabled = true; 
    }
}

function resetGame() {
    // Add your reset logic here
    alert("Game has been reset!");
    numberToGuess = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    const attemptsLeftElement = document.getElementById("attemptsLeft");
    attemptsLeftElement.textContent = attemptsLeft;
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("hint").textContent = "";
}