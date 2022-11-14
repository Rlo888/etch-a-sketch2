let container = document.createElement("div");
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.flexDirection = "column";
document.body.append(container);

let title = document.createElement("h1");
title.innerText = "Super Sketchy";
container.append(title);

let enterNumberHeader = document.createElement("h2");
enterNumberHeader.innerText = "Choose a number between 2 and 100";
enterNumberHeader.style.fontSize = "16px";
container.append(enterNumberHeader);

let inputBox = document.createElement("input");
inputBox.setAttribute("type", "text");
inputBox.className = "inputBox";
inputBox.id = "inputBox";
inputBox.value = "";
inputBox.style.width = "100px";
inputBox.style.maxWidth = "100px";
inputBox.style.height = "25px";
container.append(inputBox);

let chooseSizeBtn = document.createElement("button");
chooseSizeBtn.className = "chooseSizeBtn";
chooseSizeBtn.id = "chooseSizeBtn";
chooseSizeBtn.innerText = "Choose Size";
container.append(chooseSizeBtn);

let resetBtn = document.createElement("button");
resetBtn.className = "resetBtn";
resetBtn.innerText = "Reset";
container.append(resetBtn);

let colorButtonContainer = document.createElement("div");
colorButtonContainer.style.display = "flex";
colorButtonContainer.style.justifyContent = "space-between";
container.append(colorButtonContainer);

document.querySelectorAll("button").forEach((button) => {
  button.style.width = "100px";
  button.style.maxWidth = "100px";
  button.style.height = "30px";
});

// @ts-ignore
function userPrompt() {
  prompt("Please enter a number between 2 and 100");
}

function createBoard(size) {
  let board = document.createElement("div");
  board.className = "board";
  board.id = "board";
  board.style.height = "500px";
  board.style.width = "500px";
  board.style.borderStyle = "solid";
  board.style.borderWidth = "6px";
  board.style.borderColor = "black";
  board.style.display = "grid";
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  container.append(board);

  if (size < 2 || size > 99) {
    console.log("wrong number");
  } else {
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
      let box = document.createElement("div");
      box.className = "boxes";
      box.addEventListener("mouseover", addColor);
      box.style.backgroundColor = "white";
      board.append(box);
    }
  }
}
function clearBoard() {
  document.getElementById("board")?.remove();
}
function addColor() {
  this.style.backgroundColor = "black";
}

chooseSizeBtn.addEventListener("click", () => {
  const btn = document.getElementById("inputBox");
  const size = btn.value;
  clearBoard();
  createBoard(parseInt(size));
});

resetBtn.addEventListener("click", clearBoard);
