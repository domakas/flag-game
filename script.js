/* FLAG GAME */


const takeOne = document.querySelector('.button__takeone');
const takeTwo = document.querySelector('.button__taketwo');
const reset = document.querySelector('.button__reset');
const flags = document.querySelectorAll('img');
const turn = document.querySelector('.turns');
const info = document.querySelector('.option');

let counter = 0;
let state = 1;
let winner;

takeOne.addEventListener("click", () => {
    info.innerHTML = "One flag was removed";
    removeOne(counter);
    counter++;
    state++;
    whosTurn();
    whoWon();
});

takeTwo.addEventListener("click", () => {
    info.innerHTML = "Two flags were removed";
    removeTwo(counter);
    counter += 2;
    state++;
    whosTurn();
    whoWon();
});

reset.addEventListener("click", () => {
    info.innerHTML = "How many flags do you wish to take?";
    resetAll();
    whosTurn();
});

//functions

function removeOne(counter) {
    flags.forEach(flag => {
        flags[counter].style.display = 'none';
    })
};

function removeTwo(counter) {
    flags.forEach(flag => {
        if (counter < 20) {
            flags[counter].style.display = 'none';
            flags[counter + 1].style.display = 'none';
        } else { flags[counter].style.display = 'none'; }
    })
};

function resetAll() {
    state = 1;
    counter = 0;
    flags.forEach(flag => {
        flag.style.display = 'initial';
        document.querySelector('.gamebox__winner').innerHTML = "";
        takeOne.style.display = 'initial';
        takeTwo.style.display = 'initial';
    })
};

function whosTurn() {
    if (state % 2 == 0) {
        turn.style.color = 'red';
        turn.innerHTML = "Opponent's turn";
    } else if (!state % 2 == 0 || state == 1) {
        turn.style.color = 'blue';
        turn.innerHTML = "Your turn";
    }
};

function whosLast() {
    if (flags[19].style.display === 'none' && turn.innerHTML === "Opponent's turn") {
        winner = false;
    } else if (flags[19].style.display === 'none' && turn.innerHTML === "Your turn") {
        winner = true;
    }
};

function whoWon() {
    whosLast();
    if (flags[20].style.display === 'none') {
        turn.innerHTML = "Reset to play again";
        info.innerHTML = "No flags left";
        takeOne.style.display = 'none';
        takeTwo.style.display = 'none';
        if (winner == false) {
            document.querySelector('.gamebox__winner').innerHTML = "You WIN!";
        } else if (winner == true) {
            document.querySelector('.gamebox__winner').innerHTML = "Opponent WINS!";
        }
    }
};