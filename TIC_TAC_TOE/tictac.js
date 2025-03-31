//1st add 3 by 3 box or button to add X and O
// add reset and new buttons
// set a flag to check the current player or initialise current player
//check the winner pattern/cases
//disable if we try to click on same box again

let gameBtnBox = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let message = document.querySelector(".msg");

let currentPlayerX = true; //player X or player O
let winnerPatters = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

gameBtnBox.forEach((box) => {
  box.addEventListener("click", () => {
    console.log(box, currentPlayerX);
    // if (box.innerText !== "") return; //we can return if we have already value
    currentPlayerX ? (box.innerText = "X") : (box.innerText = "O");
    currentPlayerX ? (currentPlayerX = false) : (currentPlayerX = true);
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (pattern of winnerPatters) {
    let position1 = gameBtnBox[pattern[0]].innerText;
    let position2 = gameBtnBox[pattern[1]].innerText;
    let position3 = gameBtnBox[pattern[2]].innerText;
    if (position1 && position2 && position3) {
      if (position1 === position2 && position2 === position3) {
        showWinner(position1);
      }
    }
  }
};

const showWinner = (winner) => {
  message.innerText = `Congrats!! Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (box of gameBtnBox) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of gameBtnBox) {
    box.disabled = false;
    box.innerText = "";
  }
};

const restGame = () => {
  currentPlayerX = true;
  msgContainer.classList.add("hide");
  enableBoxes();
};

resetBtn.addEventListener("click", restGame);
newGameBtn.addEventListener("click", restGame);
