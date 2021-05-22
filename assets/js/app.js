// Setting the score at the beginning for both on Zero 
let pointGamer = 0;
let pointComp = 0;

// Setting the "CONST" which I will need in functions
const gamerPoints = document.getElementById("pointsGamer");
const computerPoints = document.getElementById("pointsComp");
const scoreCard = document.querySelector(".scoreCard");
const winDisplay = document.getElementById("winnerDisplay")
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissor");

/* Better withou the sup comment, who chose which choice*/
// const gamerSmall = "(gamer)".fontsize(2.5).sup();
// const compSmall = "(comp.)".fontsize(2.5).sup();
// ${gamerSmall}
// ${compSmall}

/* ============= B O N U S =============== */
//Asking the Gamer for a Gamertag
var info = alert("Please enter your Gamertag before the game starts!");
var gamerName = prompt("Gamertag:", "");
function requiredFunction() {
    document.getElementById("gamer").innerHTML = gamerName.toUpperCase();
}
requiredFunction();
/* ============= B O N U S =============== */

// Function for the radio-buttons selection (Rounds to played until GameOver)
// For a better UX  default by 5 rounds 
function roundsSelected() {
    let selected = document.querySelector('input[type="radio"]:checked');
    return selected;
}

//Function needed for the COMP-choices 
// Using Mathfloor for rounding the Mathrandom Output 
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Win-Function for the Gamer => Lose-Function for the Comp
function win(gamerChoice, computerChoice) {
    const winningScore = roundsSelected();
    pointGamer++;
    gamerPoints.innerHTML = pointGamer;
    computerPoints.innerHTML = pointComp;
    res.innerHTML = `${gamerChoice} beats ${computerChoice}. You win!`;
    document.getElementById(gamerChoice).classList.add('winner');
    setTimeout(function () { document.getElementById(gamerChoice).classList.remove('winner') }, 400);
    if (pointGamer === winningScore.value * 1) {
        gamerWinDisplay.innerHTML = gamerName.toUpperCase() + ", YOU WIN!";
        // Disable the Buttons - if the Gamers WIN!
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissor').disabled = true;
    }
}

// Lose-Funtion for the Gamer => Win-Function for the Comp
function loses(gamerChoice, computerChoice) {
    const winningScore = roundsSelected();
    pointComp++;
    gamerPoints.innerHTML = pointGamer;
    computerPoints.innerHTML = pointComp;
    res.innerHTML = `${gamerChoice} loses to ${computerChoice}. You lost...`;
    document.getElementById(gamerChoice).classList.add('loser');
    setTimeout(function () { document.getElementById(gamerChoice).classList.remove('loser') }, 400);
    if (pointComp === winningScore.value * 1) {
        compWinDisplay.innerHTML = "COMP WIN!";
        // Disable the Buttons - if the Comp WIN!
        document.getElementById('rock').disabled = true;
        document.getElementById('paper').disabled = true;
        document.getElementById('scissor').disabled = true;
    }
}

// Setting the Draw Settences  .innerHTML
function draw(gamerChoice, computerChoice) {
    res.innerHTML = `${gamerChoice} // ${computerChoice}. It's a draw.`;
    document.getElementById(gamerChoice).classList.add('draw');
    setTimeout(function () { document.getElementById(gamerChoice).classList.remove('draw') }, 400);
}

// Setting the Winning, Loses and Draw for the Game
function game(gamerChoice) {
    const computerChoice = getComputerChoice();
    switch (gamerChoice + computerChoice) {
        case 'paperrock':
        case 'rockscissor':
        case 'scissorpaper':
            win(gamerChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissor':
        case 'scissorrock':
            loses(gamerChoice, computerChoice);
            break;
        case 'rockrock':
        case 'scissorscissor':
        case 'paperpaper':
            draw(gamerChoice, computerChoice);
            break;
    }
}

// Game Function 
function gameOn() {
    rockChoice.addEventListener('click', () => game("rock"));
    paperChoice.addEventListener('click', () => game("paper"));
    scissorChoice.addEventListener('click', () => game("scissor"));
}
gameOn();

// Reset Button 
resetButton.addEventListener('click', reset)
function reset() {
    pointGamer = 0;
    pointComp = 0;
    pointsGamer.textContent = 0;
    pointsComp.textContent = 0;
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissor').disabled = false;
    gamerWinDisplay.innerHTML = " ";
    compWinDisplay.innerHTML = " ";
}