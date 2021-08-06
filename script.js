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

const newSection = document.getElementById("maze");
const newContainer = document.createElement("div");
newContainer.classList.add("container");

function walls() {

    for(let i = 0; i < map.length; i++) {
        
        const newMazeLine = document.createElement("div");
        newMazeLine.classList.add("mazeLine");
        let line = map[i];
        
        for(let j = 0; j < line.length; j++) {

            if(line[j] === "W") {

                const newWall = document.createElement("div");
                newWall.classList.add("mazeCell");
                newWall.classList.add("mazeWall");
                newMazeLine.appendChild(newWall)
            }
           
            if(line[j] === " ") {

                const newPath = document.createElement("div");
                newPath.classList.add("mazeCell");
                newPath.classList.add("mazePath");
                newMazeLine.appendChild(newPath)
            }

            if(line[j] === "S") {

                const startGame = document.createElement("div");
                startGame.classList.add("mazeCell");
                startGame.classList.add("startGame");
                newMazeLine.appendChild(startGame)
            }

            if(line[j] === "F") {

                const finishGame = document.createElement("div");
                finishGame.classList.add("mazeCell");
                finishGame.classList.add("finishGame")
                newMazeLine.appendChild(finishGame)
            }
        }
        newContainer.appendChild(newMazeLine)
        
    }
    console.log(newSection)
    return newContainer;
}

newSection.appendChild(walls());

// const newWall = document.createElement("div");
//     newWall.classList.add("mazeWall");