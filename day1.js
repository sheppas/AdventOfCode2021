var fs = require('fs');
var text = fs.readFileSync("./day1.txt", 'utf-8');
var textByLine = text.split('\n')

const findDepth = (depthArray) => {
  let counter = 0;
  for (let i=0; i < depthArray.length; i++){
      if(parseInt(depthArray[i]) > parseInt(depthArray[i-1])){
      counter++
    }
  }
  return counter;
}

const findSumDepth = (depthArray) => {
  let counter = 0;
  let pointer1 = 0;
  let pointer2 = 1;
  const newArray = depthArray.map((num) => parseInt(num))
  console.log(typeof newArray[0])
  while (pointer1 <= depthArray.length - 4){
    let firstSum = newArray[pointer1] + newArray[pointer1+1] + newArray[pointer1+2];
    let secondSum = newArray[pointer2] + newArray[pointer2+1] + newArray[pointer2 + 2]
    if(firstSum < secondSum){
      counter++
    }
    pointer1++
    pointer2++
  }
  return counter;
}

