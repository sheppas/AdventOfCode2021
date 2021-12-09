

//helper for boards
const fs = require("fs");
const text = fs.readFileSync("./day4.txt", "utf-8");
const textByLine = text.split("\n");
const stringArray = textByLine.filter((ele) => ele !== "")
const boardify = (array) => {
  let board = [];
  let boardCollection = [];
  for (let i = 0; i < array.length; i++){
    if (board.length < 5) { 0
      let arrayified = array[i].split(" ").map((ele) => {return parseInt(ele)})
      board.push(arrayified)
      if(board.length === 5){
        boardCollection.push(board)
        board = [];
      }
    }
  }
  return boardCollection
}
//allboards for solution
const allBoards = boardify(stringArray);
//numbers called for solution
const numsCalled = [25,8,32,53,22,94,55,80,33,4,63,14,60,95,31,89,30,5,47,66,84,70,17,74,99,82,21,35,64,2,76,9,90,56,78,28,51,86,49,98,29,96,23,58,52,75,41,50,13,72,92,83,62,37,18,11,34,71,91,85,27,12,24,73,7,77,10,93,15,61,3,46,16,97,1,57,65,40,0,48,69,6,20,68,19,45,42,79,88,44,26,38,36,54,81,59,43,87,39,67
]

//example from problem
const example = fs.readFileSync("./day4example.txt", "utf-8");
const exampleByLine = example.split("\n");
const exampleArray = exampleByLine.filter((ele => ele !== ""))
const exampleBoards = boardify(exampleArray)
const exampleCalled = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1]

//PART ONE
//helper function to check each row or column for a bingo
const boardHelper = (fiveDigitArray, prevCalled) => {
  let matchCounter = 0;
  for (let i=0; i < fiveDigitArray.length; i++){
    let num = fiveDigitArray[i];
    if (prevCalled.includes(num)){
      matchCounter++;
    }
  }
  if(matchCounter === 5){
    return true
  } else {
    return false
  }
}

//part one overall function
const bingoSquid = (calledArray, boardArray) => {
  let calledTracker = []
  let finalBoard, finalRow, finalColumn, sum, called;
  for(let i=0; i < calledArray.length; i++){
    calledTracker.push(calledArray[i]);
    for (let j=0; j < boardArray.length; j++){
      for(let k=0; k < 5; k++){
        //rows
        let row = boardArray[j][k]
        if(boardHelper(row, calledTracker)){
          finalBoard = boardArray[j];
          finalRow = row;
          called = calledArray[i];
        }
        //columns
        let column = boardArray[j].map((row) => (row[k]))
        if(boardHelper(column, calledTracker)){
          finalBoard = boardArray[j];
          finalColumn = column;
          called = calledArray[i];
        }
      }
    }
  }
  console.log(finalRow);
  console.log(finalBoard);
  console.log(called);
}

bingoSquid(exampleCalled, exampleBoards)


