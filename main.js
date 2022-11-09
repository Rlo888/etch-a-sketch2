let container = document.createElement("div");
container.style.display = "flex";
container.style.alignItems = "center";
container.style.justifyContent = "center";
container.style.flexDirection = "column";
document.body.append(container);

let title = document.createElement("h1");
title.innerText = "Super Sketchy";
container.append(title);

let inputBox = document.createElement("input");
inputBox.setAttribute("type", "text");
inputBox.placeholder = "Enter a # 2-100";
inputBox.style.width = "100px";
inputBox.style.height = "25px";
container.append(inputBox);

let chooseSizeBtn = document.createElement("button");
chooseSizeBtn.className = "button";
chooseSizeBtn.innerText = "Choose Size";
container.append(chooseSizeBtn);

let resetBtn = document.createElement("button");
resetBtn.className = "button";
resetBtn.innerText = "Reset";
container.append(resetBtn);

document.querySelectorAll("button").forEach((button) => {
  button.style.width = "100px";
  button.style.height = "30px";
});

let board = document.createElement("div");
board.className = "board";
board.style.height = "500px";
board.style.width = "500px";
board.style.borderStyle = "solid";
board.style.borderWidth = "4px";
board.style.borderColor = "black";
board.style.display = "grid";
board.style.gridTemplateColumns = "repeat(16,1fr)";
board.style.gridTemplateRows = "repeat(16,1fr)";
container.append(board);

//for(let i=0;i<16)
