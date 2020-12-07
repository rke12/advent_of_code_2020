const fs = require("fs");
let text = fs.readFileSync("./trees.txt", "utf-8");
let trees = text.split('\n').map(x => x.split(''));



let steps = [
    {xStep: 1, yStep: 1},
    {xStep: 3, yStep: 1},
    {xStep: 5, yStep: 1},
    {xStep: 7, yStep: 1},
    {xStep: 1, yStep: 2},
]
let treeSummary = [];
for(let stepIndex = 0; stepIndex < steps.length; stepIndex++){
    let numberOfTrees = 0;
    let xPosition = 0;
    let yPosition = 0;
    while(yPosition < trees.length){
        const adjustedXPosition = xPosition % trees[0].length;
        const position = trees[yPosition][adjustedXPosition];

        if (position === `#`) { 
            numberOfTrees++;
        }

        xPosition += steps[stepIndex].xStep;
        yPosition += steps[stepIndex].yStep;
    }
    treeSummary.push(numberOfTrees);
}
let result = 1;
for(number of treeSummary){
    result = result * number;
}
console.log(treeSummary);
console.log(result);
