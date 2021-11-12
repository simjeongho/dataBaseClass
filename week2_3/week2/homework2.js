const selectRange = document.getElementById("js-range"); // 설정한 Range
const display = document.getElementById("js-result"); // Range 표시 창
const range = document.getElementsByClassName("js-title"); // js title
const guessInput = document.getElementById("js-guess");
const playButton = document.getElementById("playButton");
const winSpan = document.getElementById("win-result");

const handleRange =(e) => { // Range가 바뀌었을 때 화면에 Range를 출력해주는 함수
    e.preventDefault(); // event의 기본 동작을 막는다. 
    const displayRange = document.getElementById("displayRange"); // getElementBy
    displayRange.innerHTML = `${selectRange.value}`;
    console.log(selectRange.value);
};

const handleClickPlay = (e) => {
    e.preventDefault();
    const max = selectRange.value;
    const min = 5;
    const guessNumber = document.getElementById('guess-input');
    const guessNumberresult = guessNumber.value;
    const makeRandomNumber = () =>{
        const randomNumber = Math.floor(Math.random() * (max-min)) + min;
        return randomNumber;
    }
    const RandomNumber = makeRandomNumber();
    const printResult = () => 
    {
        return guessNumber.value > RandomNumber ? 'you Win' : 'you lost';
    }
    console.log('before');
    console.log(`select: ${selectRange.value} , guess : ${guessNumber.value}`)
    guessNumber.value > selectRange.value ? alert(`you must select in range ${selectRange.value} you entered ${guessNumber.value}`) : console.log(`select : ${selectRange.value} ,guess: ${guessNumber.value}`);
    console.log(`guess : ${guessNumber.value} machine : ${RandomNumber}`);;
    console.log('after');
    displaySpan = display.querySelector("span");
    displaySpan.innerHTML = `You choose: ${guessNumber.value}, the machine choose :${RandomNumber} `;
    winSpan.innerHTML = `  ${printResult()}`;
}

selectRange.addEventListener("click" , handleRange);
playButton.addEventListener("click" , handleClickPlay);
console.log(selectRange.value);

