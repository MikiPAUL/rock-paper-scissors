const options = Array.from(document.querySelectorAll(".btn"));
const generateChoice = () => ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];
const winCombo = {
    "rock": "scissor",
    "scissor": "paper",
    "paper": "rock"
}

const choice = {
    "paper": "✋",
    "scissor": "✌",
    "rock": "✊"
}
let computer = 0, player = 0;

function displayModal(winner) {
    const modal = document.querySelector("#modal");
    const winnerDiv = document.querySelector(".winner");

    if (winner == "player") {
        winnerDiv.textContent = "You Won!";
    }
    else {
        winnerDiv.textContent = "You Lost!";
    }
    modal.showModal();
}

function displayResult(res, selectedOption, generatedChoice) {
    let game_info, score_info;

    if (res == "tied") {
        game_info = "It's a tie!"
        score_info = `${selectedOption} ties with ${generatedChoice}`;
    }
    else if (res == "won") {
        game_info = "You Won!";
        score_info = `${selectedOption} beats ${generatedChoice}`;
        player++;
    }
    else {
        game_info = "You Lost!";
        score_info = `${selectedOption} beaten by ${generatedChoice}`;
        computer++;
    }

    document.querySelector(".game-info").textContent = game_info;
    document.querySelector(".player .choice").textContent = choice[selectedOption];
    document.querySelector(".computer .choice").textContent = choice[generatedChoice];
    document.querySelector(".computer .choice").textContent = choice[generatedChoice];
    document.querySelector(".computer .score span").textContent = computer;
    document.querySelector(".player .score span").textContent = player;
    document.querySelector(".score-info").textContent = score_info;

    if (player >= 5 || computer >= 5) {
        displayModal((player >= 5) ? "player" : "computer");
    }
}

function handleClick(e) {
    const selectedOption = this.dataset.option;
    const generatedChoice = generateChoice();

    let result;

    if (selectedOption == generatedChoice) {
        result = "tied";
    }
    else if (winCombo[selectedOption] == generatedChoice) {
        result = "won";
    }
    else {
        result = "loss";
    }
    displayResult(result, selectedOption, generatedChoice);
}

options.forEach(option => {
    option.addEventListener("click", handleClick);
});