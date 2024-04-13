let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultarea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chancearea = document.getElementById("chance-area");
let gameover = false;
let chance = 5;
let history = [];
playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset);

function pickRandomNum() {
    computerNum = Math.floor (Math.random() * 100) + 1;
    console.log("정답",computerNum);
}
pickRandomNum();

function play() {
    let userValue = userInput.value;
    if (userValue < 1 || userValue > 100) {
        resultarea.textContent = "범위값을 벗어났습니다";
        return;
    }

    if(history.includes(userValue)) {
        resultarea.textContent = "이미 입력한 숫자입니다";
        return;
    }
    chance --;
    chancearea.textContent = `남은 기회 : ${chance}번`;
    console.log("chance",chance);

    if (userValue < computerNum) {
        resultarea.textContent = "up";
    }
    else if (userValue > computerNum) {
        resultarea.textContent = "down";
    }
    else {
        resultarea.textContent = "정답!";
        gameover = true;
    }

    history.push(userValue);
    console.log(history);

    if (chance < 1) {
        gameover = true
    }

    if (gameover == true) {
        playButton.disabled = true
    }
}

function reset() {
    userInput.value = "";
    pickRandomNum();
    resultarea.textContent = "새로운 번호 생성";
}