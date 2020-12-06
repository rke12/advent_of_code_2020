const fs = require("fs");
let text = fs.readFileSync("./trees.txt", "utf-8");
let trees = text.split('\n').map(x => x.split(''));

let numberOfTrees = 0;
let xPosition = 0;
let yPosition = 0;

let xStep = 3;
let yStep = 1;

while(yPosition < trees.length){
    const adjustedXPosition = xPosition % trees[0].length;
    const position = trees[yPosition][adjustedXPosition];

    if (position === `#`) { 
      numberOfTrees++;
    }

    xPosition += xStep;
    yPosition += yStep;
}
console.log(numberOfTrees);