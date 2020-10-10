//JL Oct 2020
//Web Applications week 3

import "./styles.css";

// variables for the game
var count = 0;
var time;
var id;

var grids = document.querySelectorAll(".col");
for (var i = 0; i < grids.length; i++) {
  grids[i].addEventListener("click", function () {
    fillCell(this);
  });
}

function fillCell(t_cell) {
  moveBar();
  resetTime();
  if (count % 2 === 0) {
    if (t_cell.innerHTML === "") {
      count++;
      t_cell.innerHTML = "X";
      t_cell.style.backgroundColor = "rgb(124, 252, 0)";
      countTime();
      checkWin();
      checkDraw();
    } else {
      alert("Cell is already chosen");
    }
  } else {
    if (t_cell.innerHTML === "") {
      count++;
      t_cell.innerHTML = "O";
      t_cell.style.backgroundColor = "rgb(250, 128, 114)";
      countTime();
      checkWin();
      checkDraw();
    } else {
      alert("Cell is already chosen");
    }
  }
}

function clearTable() {
  for (var i = 0; i < grids.length; i++) {
    grids[i].style.backgroundColor = "rgb(255, 255, 255)";
    grids[i].innerHTML = "";
  }
  resetTime();
  clearInterval(id);
  resetWidth();
}

function checkDraw() {
  var countDraw = 0;

  for (var i = 0; i < grids.length; i++) {
    if (grids[i].innerHTML === "X" || grids[i].innerHTML === "O") {
      countDraw++;
    }
  }
  if (countDraw === 25) {
    alert("It's a draw!");
    resetTime();
    clearTable();
  }
}

function checkWin(table) {
  var XO = ["X", "O"];

  for (var i = 0; i < 2; i++) {
    var row1 = 0;
    var row2 = 0;
    var row3 = 0;
    var row4 = 0;
    var row5 = 0;
    var col1 = 0;
    var col2 = 0;
    var col3 = 0;
    var col4 = 0;
    var col5 = 0;
    var diag1 = 0;
    var diag2 = 0;

    var round = 0;

    for (var j = 0; j < 5; j++) {
      round++;
      if (grids[j].innerHTML === XO[i]) {
        row1++;
        if (round === 1) {
          col1++;
          diag1++;
        }
        if (round === 2) {
          col2++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
        }
        if (round === 5) {
          col5++;
          diag2++;
        }
      }
      if (grids[j + 5].innerHTML === XO[i]) {
        row2++;
        if (round === 1) {
          col1++;
        }
        if (round === 2) {
          col2++;
          diag1++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
          diag2++;
        }
        if (round === 5) {
          col5++;
        }
      }
      if (grids[j + 10].innerHTML === XO[i]) {
        row3++;
        if (round === 1) {
          col1++;
        }
        if (round === 2) {
          col2++;
        }
        if (round === 3) {
          col3++;
          diag1++;
          diag2++;
        }
        if (round === 4) {
          col4++;
        }
        if (round === 5) {
          col5++;
        }
      }
      if (grids[j + 15].innerHTML === XO[i]) {
        row4++;
        if (round === 1) {
          col1++;
        }
        if (round === 2) {
          col2++;
          diag2++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
          diag1++;
        }
        if (round === 5) {
          col5++;
        }
      }
      if (grids[j + 20].innerHTML === XO[i]) {
        row5++;
        if (round === 1) {
          col1++;
          diag2++;
        }
        if (round === 2) {
          col2++;
        }
        if (round === 3) {
          col3++;
        }
        if (round === 4) {
          col4++;
        }
        if (round === 5) {
          col5++;
          diag1++;
        }
      }
    }
    if (
      row1 === 5 ||
      row2 === 5 ||
      row3 === 5 ||
      row4 === 5 ||
      row5 === 5 ||
      col1 === 5 ||
      col2 === 5 ||
      col3 === 5 ||
      col4 === 5 ||
      col5 === 5 ||
      diag1 === 5 ||
      diag2 === 5
    ) {
      if (XO[i] === "X") {
        alert("Player 1 won");
        resetTime();
        clearTable();
        row1 = 0;
        row2 = 0;
        row3 = 0;
        row4 = 0;
        row5 = 0;
        col1 = 0;
        col2 = 0;
        col3 = 0;
        col4 = 0;
        col5 = 0;
        diag1 = 0;
        diag2 = 0;
        break;
      }

      if (XO[i] === "O") {
        alert("Player 2 won");
        resetTime();
        clearTable();
        row1 = 0;
        row2 = 0;
        row3 = 0;
        row4 = 0;
        row5 = 0;
        col1 = 0;
        col2 = 0;
        col3 = 0;
        col4 = 0;
        col5 = 0;
        diag1 = 0;
        diag2 = 0;
        break;
      }
    }
  }
}

function countTime() {
  time = setTimeout(alertTime, 10000);
}

function alertTime() {
  alert("Your time is up!");
  count++;
}

function resetTime() {
  clearTimeout(time);
}

function moveBar() {
  clearInterval(id);
  var bar = document.querySelector(".determinate");
  var width = 0;
  id = setInterval(frame, 100);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      bar.style.width = width + "%";
    }
  }
}

function resetWidth() {
  var bar = document.querySelector(".determinate");
  var width = 0;
  bar.style.width = width + "%";
}
