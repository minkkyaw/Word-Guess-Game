

let pressToStartP = document.getElementById('press-to-start');
let gameRuleDiv = document.getElementById('game-rule');
let explainDiv = document.getElementById('explain');
let currentWordP = document.getElementById('current-word');
let letterGuessedP = document.getElementById('letters-guessed');
let chanceLeftP = document.getElementById('chance-left');
let resultP = document.getElementById('result');
let removeClass = document.getElementsByClassName('display');
let buttonA = document.getElementById('button');
let ringAudio = document.getElementById('ring');
let startCheck = 0;
let check = 0;
let keyboardDisabled = 0;
let generateByButton = 0;
let aToZ = [];
let letterGuessed = [];
let chanceLeft = 10;
let newWordsArr = [];
let randomWords = [{
        title: 'backenddeveloper',
        description: 'A back-end developer is a type of programmer who creates the logical back-end and core computational logic of a website, software or information system. '},
    {
        title: 'frontenddeveloper',
        description: 'Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.'}, 
    {
        title: 'webdeveloper',
        description: 'A Web developer is a kind of programmer who specializes in the development of applications relating to the World Wide Web or distributed network applications, which typically run protocols like HTTP from a Web server to a client browser using associated programming languages like HTML/CSS, C#, Ruby and PHP to name a few.'}, 
    {
        title: 'programmer',
        description: 'A programmer is an individual that writes/creates computer software or applications by giving the computer specific programming instructions.'}, 
    {
        title: 'softwareengineer',
        description: 'Software engineering is the process of analyzing user needs and designing, constructing, and testing end user applications that will satisfy these needs through the use of software programming languages.'},
    {
        title: 'graphicdesigner',
        description: 'A graphic designer is a professional within the graphic design and graphic arts industry who assembles together images, typography, or motion graphics to create a piece of design.'}, 
    {
        title: 'reactdeveloper',
        description: 'React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'}];
let explainCurrentWord = []

let random = Math.floor(Math.random() *randomWords.length);
let randomWord = randomWords[random].title.split('');
let displayWord = randomWord.map(x => '_');


for(let i = 97; i < 123; i++) {
    aToZ.push(i);
}
let alphabets = aToZ.map(x => String.fromCharCode(x));

function defaultSetting() {
    random = Math.floor(Math.random() *randomWords.length);
    randomWord = randomWords[random].title.split('');
    displayWord = randomWord.map(x => '_');
    chanceLeft = 10;
    letterGuessed = [];
    currentWordP.textContent = `'${displayWord.join('')}'`;
    letterGuessedP.textContent = '';
    resultP.textContent = '';
    chanceLeftP.textContent = chanceLeft;
    letterGuessedP.textContent = '';
    explainDiv.classList = '';
    if(explainDiv.contains(document.getElementsByClassName('explainP')[0])) {
        explainDiv.removeChild(document.getElementsByClassName('explainP')[0]);
    }
    letterGuessedP.parentElement.className = 'display';
    chanceLeftP.parentElement.className = 'display';
    for(let i = 0; i < removeClass.length; i++) {
        removeClass[i].classList = 'score display';
    }
    buttonA.classList = 'display-none';
}

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

buttonA.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("a");
    defaultSetting();
    buttonA.classList.remove('btn');
});



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
            ringAudio.play();
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
                        alert(`The current word is "${randomWords[random].title}"`);
                        defaultSetting();
                    } else {
                        buttonA.classList = 'btn';
                    }
                    keyboardDisabled = 0;
                },50);   
            } else if(displayWord.indexOf('_') === -1) {
                let aniTime = 1;
                keyboardDisabled = 1;
                resultP.textContent = 'You Win!';
                resultP.className = 'you-win-animation';
                let explainP = document.createElement('p');
                explainP.textContent = randomWords[random].description;
                explainP.className = "explainP";
                explainDiv.className = 'explain-word';
                explainDiv.appendChild(explainP);
                letterGuessedP.parentElement.className = 'display-none';
                chanceLeftP.parentElement.className = 'display-none';
                setTimeout(() => {
                    aniTime = 0;
                    resultP.classList.remove('you-win-animation');
                    return aniTime;
                    
                }, 2000);
                if (aniTime === 1) {
                    setTimeout(() => {
                        let confirm = window.confirm('You Win!!! Do you want to guess new words?');
                        if(confirm) {
                            defaultSetting();
                        } else {
                            buttonA.classList = 'btn';
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
        gameRuleDiv.className = 'display-none';
        pressToStartP.classList = 'display-none';
        currentWordP.textContent = `'${displayWord.join('')}'`;
        chanceLeftP.textContent = chanceLeft;
        for(let i = 0; i < removeClass.length; i++) {
            removeClass[i].classList = 'score display';
        }
    }
    
    
}

