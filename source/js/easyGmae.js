const numberToGuess = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const attemptsLeft = 10;

function giveHint() {
    const hintInterval = setInterval(() => {
        const hintLow = Math.floor(numberToGuess * 0.7);
        const hintHigh = Math.ceil(numberToGuess * 1.3);
        document.getElementById("hint").textContent = `คำบอกใบ้: เป็นตัวเลขที่อยู่ระหว่าง ${hintLow} และ ${hintHigh}.`;
        if (hintLow === hintHigh) {
            document.getElementById("hint").textContent = `Hint: The number is ${hintLow}.`;
            clearInterval(hintInterval);
        }
    }, 1000);
}

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