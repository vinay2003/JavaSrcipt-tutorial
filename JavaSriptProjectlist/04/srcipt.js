let random = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 5;
let prevGuesses = [];

const guessNum = document.getElementById("guess-number");
const generateBtn = document.getElementById("generate-btn");
const prevGuess = document.getElementById("prev-number");
const guessCount = document.getElementById("guess-count");
const result = document.getElementById("result");

const resetResultClass = () => {
  result.classList.remove("text-red-500", "text-yellow-500", "text-green-500", "text-blue-500", "text-orange-500");
};

generateBtn.addEventListener("click", () => {
  const userGuess = parseInt(guessNum.value);
  resetResultClass();

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    result.innerHTML = `⚠️ Please enter a valid number between 1 and 100.`;
    result.classList.add(isNaN(userGuess) ? "text-red-500" : "text-yellow-500");
    return;
  }

  if (guessesLeft <= 0) {
    result.innerHTML = `🛑 No guesses left. The number was ${random}. Please refresh to try again.`;
    result.classList.add("text-red-500");
    return;
  }

  prevGuesses.push(userGuess);
  prevGuess.textContent = prevGuesses.join(', ');
  guessesLeft--;
  guessCount.textContent = guessesLeft;

  if (userGuess === random) {
    result.innerHTML = `🎉 Congratulations! ${userGuess} is correct!`;
    result.classList.add("text-green-500");
    generateBtn.disabled = true;
  } else if (userGuess < random) {
    result.innerHTML = `⬇️ ${userGuess} is too low. Try again!`;
    result.classList.add("text-blue-500");
  } else {
    result.innerHTML = `⬆️ ${userGuess} is too high. Try again!`;
    result.classList.add("text-orange-500");
  }

  if (guessesLeft === 0 && userGuess !== random) {
    result.innerHTML = `❌ You've used all guesses. The correct number was ${random}.`;
    result.classList.add("text-red-500");
    generateBtn.disabled = true;
  }

  guessNum.value = "";
});
console.log(random);
