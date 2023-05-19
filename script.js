const choices = Array.from(document.querySelectorAll(".container > div"));
const choicesList = ["rock", "paper", "scissor"];

const generateChoice = () => {
    return choicesList[Math.floor(Math.random() * 3)];
}

const checkWinChoice = (choosenChoice, generatedChoice) => {
    const indexChoosenChoice = choicesList.indexOf(choosenChoice);
    return choicesList[(indexChoosenChoice + 2) % 3] == generatedChoice;
};

function handleChoice(e) {
    const choosenChoice = this.dataset.choice;
    generateResult(checkWinChoice(choosenChoice, generateChoice()));
}

function generateResult(result) {
    const res = document.createElement("div");
    res.classList.add(".result");
    res.textContent = "You Won";

    document.querySelector("body").prepend(res);
}

choices.forEach((choice) => {
    choice.addEventListener('click', handleChoice);
});