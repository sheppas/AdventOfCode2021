let fs = require('fs');
let text = fs.readFileSync("./day2.txt", 'utf-8');
let textByLine = text.split('\n')
const arrayify = textByLine.map(ele => ele.split(' '))

const pilot = (directions) => {
  let horizontal = 0;
  let depth = 0;
  for (let i=0; i < directions.length-1; i++){
    if(directions[i][0] === 'up'){
      depth -= parseInt(directions[i][1])
    } else if (directions[i][0] === 'down'){
      depth += parseInt(directions[i][1])
    } else {
      horizontal += parseInt(directions[i][1])
    }
  }
  console.log(horizontal * depth)
}

const aimWithPilot = (directions) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;
  for (let i=0; i < directions.length-1; i++){
    if(directions[i][0] === 'up'){
      aim -= parseInt(directions[i][1])
    } else if (directions[i][0] === 'down'){
      aim += parseInt(directions[i][1])
    } else {
      horizontal += parseInt(directions[i][1])
      depth += aim * parseInt(directions[i][1])
    }
  }
  console.log(horizontal * depth)
}


aimWithPilot(arrayify)
