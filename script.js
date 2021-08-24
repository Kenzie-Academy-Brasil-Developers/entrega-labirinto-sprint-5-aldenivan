const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const size = map[0].length;
const resultModal = document.getElementById("resultModal");
const textModal = document.getElementById("textResult");
const resetModal = document.getElementById("reset");
const newSection = document.getElementById("maze");
const newContainer = document.createElement("div");
const newPlayer = document.createElement("div")
newContainer.classList.add("container");
newPlayer.id = "player";

function walls() {

    let count = 1;

    for(let i = 0; i < map.length; i++) {
        
        const newMazeLine = document.createElement("div");
        newMazeLine.classList.add("mazeLine");
        let line = map[i];
        
        for(let j = 0; j < line.length; j++) {

            if(line[j] === "W") {

                const newWall = document.createElement("div");
                newWall.classList.add("mazeCell");
                newWall.id = ("mazeWall");
                newWall.dataset.num = count++;
                newMazeLine.appendChild(newWall)
            }
           
            if(line[j] === " ") {

                const newPath = document.createElement("div");
                newPath.classList.add("mazeCell");
                newPath.id = ("mazePath");
                newPath.dataset.num = count++;
                newMazeLine.appendChild(newPath)
            }

            if(line[j] === "S") {

                const startGame = document.createElement("div");
                startGame.classList.add("mazeCell");
                startGame.id = ("startGame");
                startGame.appendChild(newPlayer)
                startGame.dataset.num = count++;
                newMazeLine.appendChild(startGame)
            }

            if(line[j] === "F") {

                const finishGame = document.createElement("div");
                finishGame.classList.add("mazeCell");
                finishGame.id = ("finishGame")
                finishGame.dataset.num = count++;
                newMazeLine.appendChild(finishGame)
            }
        }
        newContainer.appendChild(newMazeLine)
        
    }
    return newContainer;
}

newSection.appendChild(walls());

function checkUp() {
    
    let father = newPlayer.parentElement;
    let previousLine = father.parentElement.previousElementSibling;
    let childLine = previousLine.firstChild;
    let checkDataset = (Number(father.dataset.num) - size).toString();

    for(let i = 0; i < 21; i++) {

        childLine = childLine.nextElementSibling;

        if(childLine.dataset.num === checkDataset && childLine.id === "mazePath") {
        
            childLine.appendChild(newPlayer);
            break;
        }
    }
}

function checkDown() {
    
    let father = newPlayer.parentElement;
    let nextLine = father.parentElement.nextElementSibling
    let childLine = nextLine.firstChild;
    let checkDataset = (Number(father.dataset.num) + size).toString();

    for(let i = 0; i < 21; i++) {

        childLine = childLine.nextElementSibling;

        if(childLine.dataset.num === checkDataset && childLine.id === "mazePath") {
        
            childLine.appendChild(newPlayer);
            break;
        }
    }
}

function checkRight() {

    let father = newPlayer.parentElement;
    let nextBrother = father.nextElementSibling;

    if(nextBrother.id === "mazePath") {

        nextBrother.appendChild(newPlayer);
    }

    checkWin(nextBrother);
}

function checkLeft() {

    let father = newPlayer.parentElement;
    let previousBrother = father.previousElementSibling;

    if(previousBrother.id === "mazePath") {

        previousBrother.appendChild(newPlayer);
    }
}

function arrow(event) {

    if(event.key === "ArrowDown") {
        checkDown();
    }

    if(event.key === "ArrowUp") {
        checkUp();
    }

    if(event.key === "ArrowRight") {
        checkRight();
    }

    if(event.key === "ArrowLeft") {
        checkLeft();
    }
}

function checkWin(nextBrother) {

    if(nextBrother.id === "finishGame") {

        nextBrother.appendChild(newPlayer);
        
        showResult();
    }
}

const showResult = () => {

    textModal.innerHTML = "GOD!!! Você conseguiu sair do labirinto"

    resultModal.classList.remove("hidden");
}

function resetGame() {
    window.location.reload();
}

resetModal.addEventListener("click", resetGame);

document.addEventListener('keydown', (event) => {
    
    console.log(event)
    arrow(event);
});

