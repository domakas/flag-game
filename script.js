const takeOne = document.querySelector('.button__takeone');
const takeTwo = document.querySelector('.button__taketwo');
const reset = document.querySelector('.button__reset');
let buffer = 0;
let flagCount = 0;

takeOne.addEventListener("click", () => {
    document.querySelector('.turns').innerHTML = "You took one!";
    buffer = 1;
});

takeTwo.addEventListener("click", () => {
    document.querySelector('.turns').innerHTML = "You took two!";
    buffer = 2;
});

reset.addEventListener("click", () => {
    document.querySelector('.turns').innerHTML = "How many flags do you wish to take?";
    buffer = 0;
});

// if (buffer = 1) {
//     const flag = document.querySelector('img');
//     if (flagCount < 3) {
//         flag.addEventListener("click", () => {
//             flag.style.visibility = "hidden";
//             flagCount++;
//         });
//     }
// };
// let flagCount = 0;
// const flag = document.querySelector('img');
// flag.addEventListener("click", () => {
//     flag.style.visibility = "hidden";
//     flagCount++;
// });
// console.log(flagCount);