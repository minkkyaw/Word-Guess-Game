let pressToStartP = document.getElementById('press-to-start');
let currentWordP = document.getElementById('current-word');
let letterGuessedP = document.getElementById('letters-guessed');
let chanceLeftP = document.getElementById('chance-left');
let resultP = document.getElementById('result');
let startCheck = 0;
let check = 0;
let keyboardDisabled = 0;
let aToZ = [];
let letterGuessed = [];
let chanceLeft = 10;
let newWordsArr = [];
let randomWords = ['backenddeveloper', 'frontenddeveloper', 'webdeveloper', 'programmer', 'engineer', 'photographer', 'reactdeveloper'];
let random = Math.floor(Math.random() *randomWords.length);
let randomWord = randomWords[random].split('');
let displayWord = randomWord.map(x => '_');

for(let i = 97; i < 123; i++) {
    aToZ.push(i);
}
let alphabets = aToZ.map(x => String.fromCharCode(x));

function animation() {
    currentWordP.classList = "letter-spacing correct-animation";
    setTimeout(() => {
        currentWordP.classList = "letter-spacing";
    }, 500);
}

function animation() {
    currentWordP.classList = "letter-spacing correct-animation";
    setTimeout(() => {
        currentWordP.classList = "letter-spacing";
    }, 500);
}

document.onkeyup = function(e) {
    
    if (e.key !== 'Meta') {
        check = 1;
    }
    let alphaCheck = 0;
    if(alphabets.indexOf(e.key) !== -1) {
        alphaCheck = 1;
    }
    if(check === 1 && startCheck === 1 && alphaCheck === 1 && keyboardDisabled === 0) {
        if(randomWord.indexOf(e.key) !== -1) {
            let index = randomWord.indexOf(e.key);
            displayWord[index] = e.key;
            currentWordP.textContent = `'${displayWord.join('')}'`;
            animation();
            randomWord[index] = '_';
            
        } else {
            chanceLeft--;
            letterGuessed.push(e.key.toUpperCase());
            letterGuessedP.textContent = `'${letterGuessed}'`;
            chanceLeftP.textContent = chanceLeft;
        }
        function result() {
            if(chanceLeft === 0) {
                resultP.textContent = 'You lost!';
                setTimeout(() => {
                    let confirm = window.confirm('You lost!!! Do you try to guess new words?');
                    if(confirm) {   
                        alert(`The current word is "${randomWords[random]}"`);
                        random = Math.floor(Math.random() *randomWords.length);
                        randomWord = randomWords[random].split('');
                        displayWord = randomWord.map(x => '_');
                        chanceLeft = 10;
                        letterGuessed = [];
                        currentWordP.textContent = `'${displayWord.join('')}'`;
                        letterGuessedP.textContent = '';
                        chanceLeftP.textContent = chanceLeft;
                        resultP.textContent = '';
                    }
                },20);   
            } else if(displayWord.indexOf('_') === -1) {
                let aniTime = 1;
                keyboardDisabled = 1;
                resultP.textContent = 'You Win!';
                resultP.className = 'you-win-animation';
                setTimeout(() => {
                    aniTime = 0;
                    resultP.classList.remove('you-win-animation');
                    return aniTime;
                    
                }, 2000);
                if (aniTime === 1) {
                    setTimeout(() => {
                        let confirm = window.confirm('You Win!!! Do you want to guess new words?');
                        if(confirm) {
                            random = Math.floor(Math.random() *randomWords.length);
                            randomWord = randomWords[random].split('');
                            displayWord = randomWord.map(x => '_');
                            chanceLeft = 10;
                            letterGuessed = [];
                            currentWordP.textContent = `'${displayWord.join('')}'`;
                            letterGuessedP.textContent = '';
                            resultP.textContent = '';
                            chanceLeftP.textContent = chanceLeft;
                            letterGuessedP.textContent = '';
                        }
                        keyboardDisabled = 0;
                    },2000);  
                } 
                  
            }
        }
        
        result();
    }
    if(e.key !== "Meta") {
        startCheck = 1;
        pressToStartP.textContent = '';
        pressToStartP.classList = 'height-78';
        currentWordP.textContent = `'${displayWord.join('')}'`;
        chanceLeftP.textContent = chanceLeft;
    }
    
    
}

console.log(keyboardDisabled);

