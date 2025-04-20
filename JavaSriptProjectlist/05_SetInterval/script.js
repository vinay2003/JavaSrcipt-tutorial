const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// console.log(randomColor());

const colorBox = document.getElementById("color-box");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const text = document.getElementById("text");
let intervalId;

startBtn.addEventListener("click", () => {
    if (!intervalId) {// prevent multiple intervals
        intervalId = setInterval(() => {
            colorBox.style.backgroundColor = randomColor();
            text.innerText = randomColor();
        }, 1000);
    }
    console.log(startBtn)
});

stopBtn.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null
    text.innerText = "#FFFFFF";
    colorBox.style.backgroundColor = "#FFFFFF"; // Reset to white
})