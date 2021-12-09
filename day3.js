let fs = require("fs");
let text = fs.readFileSync("./day3.txt", "utf-8");
let textByLine = text.split("\n");
const arrayify = textByLine.map((ele) => ele.split(" "));

const testExample = [
  ["00100"],
  ["11110"],
  ["10110"],
  ["10111"],
  ["10101"],
  ["01111"],
  ["00111"],
  ["11100"],
  ["10000"],
  ["11001"],
  ["00010"],
  ["01010"],
];

//Loop through th full array of arrays.
//Check column one, tracking how many 0s and 1s you have.
//Once you know, push the binary numbers to the respective gamma and epsilon strings
//when the binary numbers for epsilon and gamma are complete, turn them into decimal numbers and multiply them

const findTheBinary = (array) => {
  let columnCounter = 0;
  let gammaRate = "";
  let epsilonRate = "";
  let zeroCounter = 0;
  let oneCounter = 0;
  while (columnCounter < 12) {
    for (let i = 0; i < array.length; i++) {
      const string = array[i][0];
      const ele = string[columnCounter];
      if (ele === "1") {
        oneCounter++;
      } else if (ele === "0") {
        zeroCounter++;
      }
    }
    if (zeroCounter > oneCounter) {
      gammaRate += "0";
      epsilonRate += "1";
    } else {
      gammaRate += "1";
      epsilonRate += "0";
    }
    zeroCounter = 0;
    oneCounter = 0;
    columnCounter++;
  }
  const newGamma = parseInt(gammaRate, 2);
  const newEpsilon = parseInt(epsilonRate, 2);
  return newGamma * newEpsilon;
};

//Loop through the full array of arrays

function lifeSupport(array) {
  let columnCounterO = 0;
  let columnCounterC = 0;
  let arrayTraversedO = array;
  let arrayTraversedC = array;
  let oxygenArray1s = [];
  let oxygenArray0s = [];
  let CO2Array1s = [];
  let CO2Array0s = [];
  while (arrayTraversedO.length > 1){
    for (let i=0; i <arrayTraversedO.length; i++){
      const string = arrayTraversedO[i][0];
      const ele = string[columnCounterO]
      if (ele === '1'){
        oxygenArray1s.push(arrayTraversedO[i])
      } else if(ele === '0') {
        oxygenArray0s.push(arrayTraversedO[i])
      }
    }
    if(oxygenArray1s.length >= oxygenArray0s.length){
      arrayTraversedO = oxygenArray1s;
    } else {
      arrayTraversedO = oxygenArray0s;
    }
    oxygenArray1s = [];
    oxygenArray0s = [];
    columnCounterO++;
  }
  while (arrayTraversedC.length > 1) {
    for (let i = 0; i < arrayTraversedC.length; i++) {
      const string = arrayTraversedC[i][0];
      const ele = string[columnCounterC];
      if (ele === "1") {
        CO2Array1s.push(arrayTraversedC[i]);
      } else if (ele === "0") {
        CO2Array0s.push(arrayTraversedC[i]);
      }
    }
    if (CO2Array1s.length < CO2Array0s.length) {
      arrayTraversedC = CO2Array1s;
    } else {
      arrayTraversedC = CO2Array0s;
    }
    CO2Array1s = [];
    CO2Array0s = [];
    columnCounterC++;
  }
  const newOxygen = parseInt(arrayTraversedO[0][0], 2);
  const newCO2 = parseInt(arrayTraversedC[0][0], 2);
  return newOxygen * newCO2;
}

console.log(lifeSupport(arrayify));
