let h2 = document.querySelector('h2');
let h1 = document.querySelector('h1');
let btns = ["red", "orange", "aqua", "blue"];
let allBtns = document.querySelectorAll('.btn');

let started = true;
let level = 0;
let score = 0;
let gameSeq = [];
let userSeq = [];

// Functions
function gameFlash(btn) {
    btn.classList.add('flash');

    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

function userFlash(btn) {
    btn.classList.add('userflash');

    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    if (score <= level) {
        score = level;
    }
    h2.innerHTML = `<span style="color: green;">Lavel ${level}</span> <span style="color: brown;">Highest Lavel ${score}</span><br><br>`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq); // Hack
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        if (level == score) {
            h2.innerHTML = `<span style="color: red;">Game Over!</span> <span style="color: brown;">Your score was <b>${level}</span></b><br><span style="color: brown;">You made Highest score</span> <span style="color: green;">Press any key to restart.</span>`;
        } else {
            h2.innerHTML = `<span style="color: red;">Game Over!</span> <span style="color: brown;">Your score was <b>${level}</span></b><br><span style="color: green;">Press any key to restart.</span>`;
        }
        document.querySelector('body').style.backgroundColor = '#d44f4f49';
        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = 'white';
        }, 250);
        reset();
    }
}

function reset() {
    started = true;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// Main
document.addEventListener('keypress', function () {
    document.querySelector('h1').addEventListener('click', function () {
        started == true;
        levelUp();
        started = false;
    });
    if (started == true) {
        levelUp();
        started = false;
    }
});

for (btn of allBtns) {
    btn.addEventListener('click', function () {
        let btn = this;
        userFlash(btn);
        userColor = btn.getAttribute('id');
        userSeq.push(userColor);
        checkAns(userSeq.length - 1);
    });
}

