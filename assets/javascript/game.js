

let pressToStartP = document.getElementById('press-to-start');
let gameRuleDiv = document.getElementById('game-rule');
let explainDiv = document.getElementById('explain');
let normalButton = document.getElementById('normal-button');
let hardButton = document.getElementById('hard-button');
let currentWordP = document.getElementById('current-word');
let letterSpan = document.getElementsByClassName('letter-span');
let letterGuessedP = document.getElementById('letters-guessed');
let chanceLeftP = document.getElementById('chance-left');
let resultP = document.getElementById('result');
let removeClass = document.getElementsByClassName('display');
let buttonA = document.getElementById('button');
let startCheck = 0;
let modeCheck = 0;
let check = 0;
let keyboardDisabled = 0;
let generateByButton = 0;
let modeDisplay = 1;
let aToZ = [];
let letterGuessed = [];
let chanceLeft = 10;
let newWordsArr = [];
let randomWords = [
    {
        mode: 'normal',
        title: 'dog',
        description: 'The domestic dog is a member of the genus Canis (canines), which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.'},
    {
        mode: 'normal',
        title: 'cat',
        description: 'Cats, also called domestic cats (Felis catus), are small, carnivorous (meat-eating) mammals, of the family Felidae.'},
    {
        mode: 'normal',
        title: 'pig',
        description: 'A pig is any of the animals in the genus Sus, within the even-toed ungulate family Suidae.'},
    {
        mode: 'normal',
        title: 'bird',
        description: 'Birds, also known as Aves or avian dinosaurs, are a group of endothermic vertebrates, characterised by feathers, toothless beaked jaws, the laying of hard-shelled eggs, a high metabolic rate, a four-chambered heart, and a strong yet lightweight skeleton.'},
    {
        mode: 'normal',
        title: 'fish',
        description: 'Fish are gill-bearing aquatic craniate animals that lack limbs with digits.'},
    {
        mode: 'hard',
        title: 'backenddeveloper',
        description: 'A back-end developer is a type of programmer who creates the logical back-end and core computational logic of a website, software or information system. '},
    {
        mode: 'hard',
        title: 'frontenddeveloper',
        description: 'Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly.'}, 
    {
        mode: 'hard',
        title: 'webdeveloper',
        description: 'A Web developer is a kind of programmer who specializes in the development of applications relating to the World Wide Web or distributed network applications, which typically run protocols like HTTP from a Web server to a client browser using associated programming languages like HTML/CSS, C#, Ruby and PHP to name a few.'}, 
    {
        mode: 'hard',
        title: 'programmer',
        description: 'A programmer is an individual that writes/creates computer software or applications by giving the computer specific programming instructions.'}, 
    {
        mode: 'hard',
        title: 'softwareengineer',
        description: 'Software engineering is the process of analyzing user needs and designing, constructing, and testing end user applications that will satisfy these needs through the use of software programming languages.'},
    {
        mode: 'hard',
        title: 'graphicdesigner',
        description: 'A graphic designer is a professional within the graphic design and graphic arts industry who assembles together images, typography, or motion graphics to create a piece of design.'}, 
    {
        mode: 'hard',
        title: 'reactdeveloper',
        description: 'React (also known as React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.'}];
let filterWords = [];
let randomWord = [];
let displayWord = [];

let random = Math.floor(Math.random() * filterWords.length);

normalButton.addEventListener("click", function(e) {
    e.preventDefault();
    filterWords = randomWords.filter(x => x.mode === 'normal');
    normalButton.classList = 'display-none';
    hardButton.classList = 'display-none';
    pressToStartP.classList = 'display-none';
    randomWord = filterWords[random].title.split('');
    displayWord = randomWord.map(x => '_');
    currentWordP.textContent = `'${displayWord.join('')}'`;
    chanceLeftP.textContent = chanceLeft;
    for(let i = 0; i < removeClass.length; i++) {
        removeClass[i].classList = 'score display';
    }
});

hardButton.addEventListener("click", function(e) {
    e.preventDefault();
    filterWords = randomWords.filter(x => x.mode === 'hard');
    normalButton.classList = 'display-none';
    hardButton.classList = 'display-none';
    pressToStartP.classList = 'display-none';
    randomWord = filterWords[random].title.split('');
    displayWord = randomWord.map(x => '_');
    currentWordP.textContent = `'${displayWord.join('')}'`;
    chanceLeftP.textContent = chanceLeft;
    for(let i = 0; i < removeClass.length; i++) {
        removeClass[i].classList = 'score display';
    }
});





for(let i = 97; i < 123; i++) {
    aToZ.push(i);
}
let alphabets = aToZ.map(x => String.fromCharCode(x));

function defaultSetting() {
    random = Math.floor(Math.random() * filterWords.length);
    randomWord = filterWords[random].title.split('');
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
    keyboardDisabled = 0;
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
    defaultSetting();
    buttonA.classList = 'display-none';
    keyboardDisabled = 0;
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
            var ring = new Audio("./assets/music/ring.m4a");
            ring.play();
            randomWord[index] = '_'; 
        } else {
            chanceLeft--;
            if(letterGuessed.length < 1) {
                letterGuessed.push(`${e.key.toUpperCase()}`);
            } else {
                letterGuessed.push(`, ${e.key.toUpperCase()}`);
            }
            letterGuessedP.textContent = `' ${letterGuessed.join('')} '`;
            chanceLeftP.textContent = chanceLeft;
        }
        function result() {
            if(chanceLeft === 0) {
                resultP.textContent = 'You lost!';
                keyboardDisabled = 1;
                setTimeout(() => {
                    let confirm = window.confirm('You lost!!! Do you try to guess new words?');
                    if(confirm) {   
                        alert(`The current word is "${filterWords[random].title}"`);
                        defaultSetting();
                    } else {
                        buttonA.classList = 'btn';
                        alert(`The current word is "${filterWords[random].title}"`);
                    }
                    
                },50);   
            } else if(displayWord.indexOf('_') === -1) {
                let aniTime = 1;
                keyboardDisabled = 1;
                resultP.textContent = 'You Win!';
                resultP.className = 'you-win-animation';
                let explainP = document.createElement('p');
                explainP.textContent = filterWords[random].description;
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
                    },2000);  
                }
            }
        }
        
        result();
    }
    if(e.key !== "Meta" && modeDisplay === 1) {
        startCheck = 1;
        pressToStartP.textContent = 'Choose mode!';
        gameRuleDiv.className = 'display-none';
        currentWordP.textContent = `'${displayWord.join('')}'`;
        normalButton.classList = 'btn';
        hardButton.classList = 'btn';
        modeDisplay = 0;
    }
}



