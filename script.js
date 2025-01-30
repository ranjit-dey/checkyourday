/*== SELECTING THREE SCORE BOX ==*/
const first = document.querySelector('.first-score');
const second = document.querySelector('.second-score');
const third = document.querySelector('.third-score');

/*== FUNCTION FOR RANDOM NUMBER ==*/
function getRandom(){
    return Math.round(Math.random())*1;
}

/*== FUNCTION FOR SPEECH ==*/
function deleverSpeech(text){
    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; 
    speech.rate = 1; 
    speech.volume = 1; 
    speech.pitch = 1; 

    window.speechSynthesis.speak(speech);
}

/*== GET RANDOM 0/1 ==*/
const secondRandom = getRandom();
const thirdRandom = getRandom();
const firstRandom = getRandom();

/*== PUTTING THE VALUES SEQUENTIALLY ==*/
setInterval(() => {
    first.innerHTML = firstRandom;
}, 1000);

setInterval(() => {
    second.innerHTML = secondRandom;
}, 2000);

setInterval(() => {
    third.innerHTML = thirdRandom;
}, 3000);

/*== DOING XOR OPERATION FOR RESULT ==*/
const result = firstRandom^secondRandom^thirdRandom;

/*== SELECTING RESULT BOX FOR SHOWING OUTPUT ==*/
const resultBox = document.querySelector('.result');
const button = document.querySelector('.result-btn');

/*== TICK STATEMENT ==*/
const text1 = "You can Masturbate today"

/*== CROSS STATEMENT ==*/
const text2 = "Don't Masturbate today"

/*== MAKING BUTTON DISABLED UNTILL ALL THE VALUES ADDED SUCCESSFULLY ==*/
setInterval(() => {
    button.removeAttribute('disabled')
}, 4000);

/*== DISPLAYING RESULT AS TICK/CROSS MARKS ==*/
button.addEventListener('click', () => {
    resultBox.style.display = 'flex'
    if(result == 0){
        resultBox.innerHTML = `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="cross-circle" class="icon glyph cross"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.71,12.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L12,13.42,9.71,15.71a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L10.58,12,8.29,9.71A1,1,0,0,1,9.71,8.29L12,10.58l2.29-2.29a1,1,0,0,1,1.42,1.42L13.42,12Z"></path></svg>
        <span>!!-- ${text2} --!!</span>`;
        deleverSpeech(text2);
    }else {
        resultBox.innerHTML = `<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="tick"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"/></svg>
        <span>--- ${text1} ---</span>`
        deleverSpeech(text1);
    }

    /*== RELOAD THE ENTIRE PAGE AFTER 8 SECONDS ==*/
    setTimeout(() => {
        resultBox.style.display = 'none'
        window.location.reload(true);
    }, 8000);
})
