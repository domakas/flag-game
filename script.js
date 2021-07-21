/* FLAG GAME */


const takeOne = document.querySelector('.button__takeone');
const takeTwo = document.querySelector('.button__taketwo');
const reset = document.querySelector('.button__reset');
const flags = document.querySelectorAll('img');
const turn = document.querySelector('.turns');
const info = document.querySelector('.option');

let counter = 0;
let state = 1;

takeOne.addEventListener("click", () => {
    info.innerHTML = "One flag was removed";
    removeOne(counter);
    counter++;
    state++;
    whosTurn();
});

takeTwo.addEventListener("click", () => {
    info.innerHTML = "Two flags were removed";
    removeTwo(counter);
    counter += 2;
    state++;
    whosTurn();
});

reset.addEventListener("click", () => {
    info.innerHTML = "How many flags do you wish to take?";
    resetAll();
    state = 1;
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
        flags[counter].style.display = 'none';
        flags[counter + 1].style.display = 'none';
    })
};

function resetAll() {
    counter = 0;
    flags.forEach(flag => {
        flag.style.display = 'initial';
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